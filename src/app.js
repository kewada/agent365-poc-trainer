/* ===== アプリ本体 ===== */
(function () {
  var el = U.el, ic = U.icon, t = function () { return I18N.t.apply(I18N, arguments); };
  var main = document.getElementById('main');
  var sidebar = document.getElementById('sidebar');
  var current = null;   // { lesson, idx }

  var STEP_META = {
    sim: { icon: 'mouse-pointer-click', key: 'typeSim' },
    quiz: { icon: 'circle-help', key: 'typeQuiz' },
    checklist: { icon: 'list-checks', key: 'typeChecklist' },
    order: { icon: 'list-ordered', key: 'typeOrder' },
    match: { icon: 'link', key: 'typeMatch' },
    info: { icon: 'book-open', key: 'typeInfo' }
  };
  function meta(type) {
    var m = STEP_META[type] || STEP_META.info;
    return { icon: m.icon, label: t(m.key) };
  }

  /* ---------- 言語 ---------- */
  function applyLang() {
    var l = Store.getLang();
    I18N.set(l);
    A365.setLang(l);
    document.documentElement.lang = l;
    document.title = t('appName');
    U.$$('#langSeg .seg-btn').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-lang') === l);
    });
    document.getElementById('btnDash').textContent = t('dashboard');
    document.getElementById('btnMenu').setAttribute('aria-label', t('menu'));
    document.getElementById('btnTheme').setAttribute('aria-label', t('toggleTheme'));
    document.getElementById('btnReset').setAttribute('aria-label', t('resetProgress'));
    document.getElementById('scorePill').title = t('score');
  }

  function setLang(l) {
    if (Store.getLang() === l) return;
    Store.setLang(l);
    applyLang();
    buildSidebar();
    if (current) {
      var lesson = A365.byId(current.lesson.id);
      if (lesson) { current.lesson = lesson; drawStep(); return; }
    }
    openDash();
  }

  /* ---------- 静的アイコン ---------- */
  function paintChrome() {
    U.clear(document.getElementById('btnMenu')).appendChild(ic('panel-left', 17));
    U.clear(document.getElementById('btnReset')).appendChild(ic('rotate-ccw', 17));
    U.clear(document.getElementById('modalClose')).appendChild(ic('x', 17));
    var pill = document.getElementById('scorePill');
    if (!pill.querySelector('.ic')) pill.insertBefore(ic('star', 14), pill.firstChild);
  }

  function applyTheme() {
    var th = Store.getTheme();
    document.body.classList.toggle('dark', th === 'dark');
    U.clear(document.getElementById('btnTheme')).appendChild(ic(th === 'dark' ? 'sun' : 'moon', 17));
  }

  function refreshScore() {
    document.getElementById('scoreVal').textContent = Store.score();
  }

  /* ---------- ヘッダーの現在地 ---------- */
  function totals() {
    var total = 0, done = 0;
    A365.all().forEach(function (l) {
      var p = Store.lessonProgress(l);
      total += p.total; done += p.done;
    });
    return { total: total, done: done, pct: U.pct(done, total) };
  }

  function ring(pct) {
    var r = 10, c = 2 * Math.PI * r;
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 26 26');
    svg.setAttribute('class', 'ring');
    svg.innerHTML =
      '<circle class="bg" cx="13" cy="13" r="' + r + '"></circle>' +
      '<circle class="fg" cx="13" cy="13" r="' + r + '" stroke-dasharray="' +
      (c * pct / 100).toFixed(1) + ' ' + c.toFixed(1) + '"></circle>';
    return svg;
  }

  function paintContext() {
    var box = U.clear(document.getElementById('ctx'));
    var hp = document.getElementById('hdrProgress');

    var badge = el('div', { class: 'ctx-badge' }, ic('shield-check', 15));
    var mainBox = el('div', { class: 'ctx-main' });

    if (!current) {
      /* ダッシュボード：アプリ名はホストのヘッダーに出ているので、ここでは副題だけ */
      mainBox.appendChild(el('div', { class: 'ctx-top' }, [
        el('span', { text: t('dashboard') })
      ]));
      mainBox.appendChild(el('div', { class: 'ctx-sub', text: I18N.t('appTagline') }));
      hp.hidden = true;
      U.clear(hp);
    } else {
      var lesson = current.lesson;
      var wk = A365.WEEKS.filter(function (w) { return w.id === lesson.week; })[0];
      var step = lesson.steps[current.idx];

      var top = el('div', { class: 'ctx-top' });
      if (wk) {
        top.appendChild(el('span', {
          class: 'ctx-week ctx-link', text: wk.label,
          title: wk.title, onclick: openDash
        }));
        top.appendChild(el('span', { class: 'sep', text: '/' }));
      }
      top.appendChild(el('span', { text: lesson.title }));
      mainBox.appendChild(top);

      var m = meta(step.type);
      mainBox.appendChild(el('div', { class: 'ctx-sub' }, [
        el('span', { text: t('stepOf', current.idx + 1, lesson.steps.length) }),
        el('span', { text: '　·　' }),
        el('span', { text: m.label }),
        step.title ? el('span', { text: '　·　' + step.title }) : null
      ]));

      var p = Store.lessonProgress(lesson);
      U.clear(hp);
      hp.hidden = false;
      hp.appendChild(ring(p.pct));
      hp.appendChild(el('span', { class: 'pn', text: p.done + ' / ' + p.total }));
      hp.title = t('overallProgress');
    }

    box.appendChild(badge);
    box.appendChild(mainBox);
  }

  /* ---------- サイドバー ---------- */
  function buildSidebar() {
    U.clear(sidebar);

    /* 先頭にダッシュボードへの導線を置く（レッスン中でも戻れるように） */
    sidebar.appendChild(el('div', {
      class: 'side-item side-home' + (current ? '' : ' active'),
      'aria-current': current ? null : 'page',
      onclick: function () {
        if (isNarrow()) toggleSidebar(false);
        openDash();
      }
    }, [
      el('div', { class: 'st' }, ic('layout-dashboard', 15)),
      el('div', { class: 'lt', text: t('dashboard') })
    ]));
    sidebar.appendChild(el('hr', { class: 'side-sep' }));

    A365.WEEKS.forEach(function (w) {
      var ls = A365.byWeek(w.id);
      if (!ls.length) return;
      var box = el('div', { class: 'side-week' });
      box.appendChild(el('div', { class: 'side-week-h' }, [
        ic(w.icon, 13), el('span', { text: w.label })
      ]));
      ls.forEach(function (l) {
        var pr = Store.lessonProgress(l);
        var st = pr.pct === 100 ? 'circle-check' : (pr.done > 0 ? 'circle-dot' : 'circle');
        box.appendChild(el('div', {
          class: 'side-item' + (current && current.lesson.id === l.id ? ' active' : ''),
          onclick: function () {
            if (isNarrow()) toggleSidebar(false);
            openLesson(l.id, firstUndone(l));
          }
        }, [
          el('div', { class: 'st' + (pr.pct === 100 ? ' done' : '') }, ic(st, 15)),
          el('div', { class: 'lt', text: l.title }),
          el('div', { class: 'pc', text: pr.done + '/' + pr.total })
        ]));
      });
      sidebar.appendChild(box);
      sidebar.appendChild(el('hr', { class: 'side-sep' }));
    });
  }

  function firstUndone(l) {
    for (var i = 0; i < l.steps.length; i++) if (!Store.isDone(l.id, i)) return i;
    return 0;
  }

  /* ---------- ダッシュボード ---------- */
  function openDash() {
    current = null;
    Store.setLast(null);
    buildSidebar();
    paintContext();
    U.clear(main);
    var wrap = el('div', { class: 'main-inner' });
    main.appendChild(wrap);

    var all = A365.all();
    var tt = totals();
    var doneLessons = all.filter(function (l) { return Store.lessonProgress(l).pct === 100; }).length;

    var hero = el('div', { class: 'hero' });
    hero.appendChild(el('h1', { text: t('heroTitle') }));
    hero.appendChild(el('p', { html: U.rich(t('heroBody')) }));
    var heroRow = el('div', { class: 'row' });
    var resumeId = Store.getLast() || findResume(all);
    heroRow.appendChild(el('button', {
      class: 'btn', onclick: function () {
        var l = A365.byId(resumeId) || all[0];
        openLesson(l.id, firstUndone(l));
      }
    }, [
      ic(tt.done > 0 ? 'play' : 'rocket', 16),
      el('span', { text: tt.done > 0 ? t('resume') : t('startFromBeginning') })
    ]));
    heroRow.appendChild(el('div', { style: 'flex:1;min-width:150px;max-width:300px' }, [
      el('div', { class: 'pbar' }, el('i', { style: 'width:' + tt.pct + '%' })),
      el('div', {
        class: 'muted', style: 'font-size:11.5px;margin-top:6px',
        text: t('overallProgress') + ' ' + tt.pct + '% (' + tt.done + ' / ' + tt.total + ')'
      })
    ]));
    hero.appendChild(heroRow);
    wrap.appendChild(hero);

    var g = el('div', { class: 'dash-grid' });
    g.appendChild(statCard(tt.pct + '%', t('overallProgress'), 'activity'));
    g.appendChild(statCard(tt.done + ' / ' + tt.total, t('completedSteps'), 'circle-check'));
    g.appendChild(statCard(doneLessons + ' / ' + all.length, t('completedLessons'), 'badge-check'));
    g.appendChild(statCard(String(Store.score()), t('scoreEarned'), 'star'));
    wrap.appendChild(g);

    var bar = el('div', { class: 'card' });
    bar.appendChild(el('h2', { class: 'sec', text: t('howToLearn') }));
    bar.appendChild(Render.blocks([
      { ol: [t('howTo1'), t('howTo2'), t('howTo3'), t('howTo4'), t('howTo5')] },
      { note: t('disclaimer') }
    ]));
    wrap.appendChild(bar);

    A365.WEEKS.forEach(function (w) {
      var ls = A365.byWeek(w.id);
      if (!ls.length) return;
      var c = el('div', { class: 'card' });
      c.appendChild(el('h2', { class: 'sec', style: 'display:flex;align-items:center;gap:9px' }, [
        ic(w.icon, 17), el('span', { text: w.label + '　' + w.title })
      ]));
      ls.forEach(function (l) {
        var p = Store.lessonProgress(l);
        c.appendChild(el('div', {
          class: 'lesson-row', onclick: function () { openLesson(l.id, firstUndone(l)); }
        }, [
          el('div', { class: 'lr-i' + (p.pct === 100 ? ' done' : '') },
            ic(p.pct === 100 ? 'circle-check' : (p.done > 0 ? 'circle-dot' : 'circle'), 17)),
          el('div', { class: 'lr-t' }, [
            el('div', { text: l.title }),
            l.summary ? el('div', { class: 'lr-s', text: l.summary }) : null
          ]),
          el('div', { class: 'lr-b' }, [
            el('div', { class: 'pbar' }, el('i', { style: 'width:' + p.pct + '%' })),
            el('div', { class: 'lr-n', text: p.done + ' / ' + p.total })
          ]),
          ic('chevron-right', 16)
        ]));
      });
      wrap.appendChild(c);
    });

    var tools = el('div', { class: 'card' });
    tools.appendChild(el('h2', { class: 'sec', text: t('progressManagement') }));
    var r = el('div', { class: 'row' });
    r.appendChild(el('button', {
      class: 'btn sec', onclick: function () {
        var blob = new Blob([Store.exportJSON()], { type: 'application/json' });
        var a = el('a', { href: URL.createObjectURL(blob), download: 'a365-trainer-progress.json' });
        document.body.appendChild(a); a.click(); a.remove();
      }
    }, [ic('download', 16), el('span', { text: t('exportProgress') })]));
    r.appendChild(el('button', { class: 'btn sec', onclick: doReset },
      [ic('trash-2', 16), el('span', { text: t('resetProgress') })]));
    tools.appendChild(r);
    wrap.appendChild(tools);

    main.scrollTop = 0;
  }

  function findResume(all) {
    for (var i = 0; i < all.length; i++) {
      if (Store.lessonProgress(all[i]).pct < 100) return all[i].id;
    }
    return all[0].id;
  }

  function statCard(v, label, iconName) {
    return el('div', { class: 'dash-card' }, [
      el('div', { class: 'row', style: 'gap:7px;color:var(--ink-3);margin-bottom:6px' }, [
        ic(iconName, 15), el('span', { style: 'font-size:11.5px;font-weight:500', text: label })
      ]),
      el('div', { class: 'dv', text: v })
    ]);
  }

  /* ---------- レッスン ---------- */
  function openLesson(id, idx) {
    var lesson = A365.byId(id);
    if (!lesson) { openDash(); return; }
    idx = Math.max(0, Math.min(idx || 0, lesson.steps.length - 1));
    current = { lesson: lesson, idx: idx };
    Store.setLast(id);
    buildSidebar();
    drawStep();
  }

  function drawStep() {
    var lesson = current.lesson, idx = current.idx;
    var step = lesson.steps[idx];
    paintContext();
    U.clear(main);
    var wrap = el('div', { class: 'main-inner' });
    main.appendChild(wrap);

    var head = el('div', { style: 'margin-bottom:20px' });
    var wk = A365.WEEKS.filter(function (w) { return w.id === lesson.week; })[0];
    head.appendChild(el('div', { class: 'row', style: 'margin-bottom:10px;gap:8px' }, [
      el('span', { class: 'chip' }, [wk ? ic(wk.icon, 13) : null, el('span', { text: wk ? wk.label : '' })]),
      lesson.chapter ? el('span', { class: 'chip', text: t('guideChapter', lesson.chapter) }) : null,
      el('span', { class: 'muted', style: 'font-size:12px', text: t('stepOf', idx + 1, lesson.steps.length) })
    ]));
    head.appendChild(el('h1', { class: 'page-title', text: lesson.title }));
    if (lesson.summary) head.appendChild(el('div', { class: 'page-sub', style: 'margin-bottom:16px', text: lesson.summary }));

    var p = Store.lessonProgress(lesson);
    head.appendChild(el('div', { class: 'pbar' }, el('i', { style: 'width:' + p.pct + '%' })));
    var dots = el('div', { class: 'step-dots' });
    lesson.steps.forEach(function (s, i) {
      var cls = Store.isDone(lesson.id, i) ? 'done' : '';
      if (i === idx) cls += ' cur';
      dots.appendChild(el('span', {
        class: cls, title: (i + 1) + '. ' + (s.title || meta(s.type).label),
        onclick: function () { current.idx = i; drawStep(); }
      }));
    });
    head.appendChild(dots);
    wrap.appendChild(head);

    var card = el('div', { class: 'card' });
    var m = meta(step.type);
    card.appendChild(el('div', { class: 'row', style: 'margin-bottom:12px;gap:10px' }, [
      el('span', { class: 'chip' }, [ic(m.icon, 13), el('span', { text: m.label })]),
      el('h2', { class: 'sec', style: 'margin:0', text: step.title || '' })
    ]));
    if (step.goal) {
      card.appendChild(el('div', {
        class: 'row', style: 'gap:8px;color:var(--ink-2);font-size:13.5px;margin-bottom:18px'
      }, [ic('target', 16), el('span', { html: U.rich(step.goal) })]));
    }

    var host = el('div');
    card.appendChild(host);
    wrap.appendChild(card);

    var ctx = {
      record: function (result) {
        var gained = Store.completeStep(lesson.id, idx, result);
        refreshScore(); buildSidebar(); paintContext();
        if (gained > 0) {
          U.toast(t('stepComplete', gained) + (result.grade === 'S' ? t('gradeS') : ''), 'ok');
        }
        var chip = U.$('#doneChip');
        if (chip) {
          U.clear(chip);
          chip.className = 'chip ok';
          chip.appendChild(ic('circle-check', 13));
          chip.appendChild(el('span', { text: t('doneGrade', result.grade || 'A') }));
        }
      },
      advance: next,
      onDone: function (result) { ctx.record(result); next(); }
    };

    switch (step.type) {
      case 'sim': SIM.run(host, step, ctx); break;
      case 'quiz': Render.quiz(host, step, ctx); break;
      case 'checklist': Render.checklist(host, step, ctx); break;
      case 'order': Render.order(host, step, ctx); break;
      case 'match': Render.match(host, step, ctx); break;
      default: Render.info(host, step, ctx);
    }

    var nav = el('div', { class: 'stepnav' });
    nav.appendChild(el('button', {
      class: 'btn sec', disabled: idx === 0,
      onclick: function () { if (idx > 0) { current.idx = idx - 1; drawStep(); } }
    }, [ic('arrow-left', 16), el('span', { text: t('prevStep') })]));

    var sDone = Store.getStep(lesson.id, idx);
    nav.appendChild(el('span', {
      id: 'doneChip', class: (sDone && sDone.done) ? 'chip ok' : 'chip'
    }, [
      ic((sDone && sDone.done) ? 'circle-check' : 'circle', 13),
      el('span', { text: (sDone && sDone.done) ? t('doneGrade', sDone.grade || 'A') : t('notDone') })
    ]));

    nav.appendChild(el('button', { class: 'btn sec', onclick: next }, [
      el('span', { text: idx === lesson.steps.length - 1 ? t('endLesson') : t('skip') }),
      ic('arrow-right', 16)
    ]));
    wrap.appendChild(nav);
    main.scrollTop = 0;
  }

  function next() {
    var lesson = current.lesson, idx = current.idx;
    if (idx < lesson.steps.length - 1) { current.idx = idx + 1; drawStep(); return; }

    var all = A365.all();
    var nxt = all[all.indexOf(lesson) + 1];
    paintContext();
    U.clear(main);
    var wrap = el('div', { class: 'main-inner' });
    main.appendChild(wrap);

    var p = Store.lessonProgress(lesson);
    var done = p.pct === 100;
    var c = el('div', { class: 'finish' });
    c.appendChild(el('div', { class: 'fi' + (done ? ' done' : '') }, ic(done ? 'badge-check' : 'book-open', 32)));
    c.appendChild(el('h1', { class: 'page-title', text: done ? t('lessonComplete') : t('lastStep') }));
    c.appendChild(el('div', {
      class: 'page-sub', style: 'margin:0 auto 24px',
      text: t('lessonProgressLine', lesson.title, p.done, p.total)
    }));
    var r = el('div', { class: 'row', style: 'justify-content:center' });
    if (!done) {
      r.appendChild(el('button', {
        class: 'btn sec', onclick: function () { openLesson(lesson.id, firstUndone(lesson)); }
      }, [ic('rotate-ccw', 16), el('span', { text: t('backToUnfinished') })]));
    }
    if (nxt) r.appendChild(el('button', {
      class: 'btn', onclick: function () { openLesson(nxt.id, 0); }
    }, [el('span', { text: t('nextLesson', nxt.title) }), ic('arrow-right', 16)]));
    r.appendChild(el('button', { class: 'btn sec', onclick: openDash },
      [ic('layout-dashboard', 16), el('span', { text: t('dashboard') })]));
    c.appendChild(r);
    wrap.appendChild(c);
    buildSidebar();
  }

  function doReset() {
    var box = el('div');
    box.appendChild(el('p', { style: 'margin-top:0', text: t('resetConfirmBody') }));
    var r = el('div', { class: 'row' });
    r.appendChild(el('button', {
      class: 'btn', onclick: function () {
        Store.reset(); U.closeModal(); refreshScore(); openDash(); U.toast(t('resetDone'), 'ok');
      }
    }, [ic('trash-2', 16), el('span', { text: t('doReset') })]));
    r.appendChild(el('button', { class: 'btn sec', text: t('cancel'), onclick: U.closeModal }));
    box.appendChild(r);
    U.modal(t('resetConfirmTitle'), box);
  }

  /* ---------- サイドバー開閉 ---------- */
  function isNarrow() {
    if (typeof window.matchMedia === 'function') return window.matchMedia('(max-width:1000px)').matches;
    return (window.innerWidth || document.documentElement.clientWidth || 1200) <= 1000;
  }
  function setScrim(on) {
    var s = document.getElementById('sideScrim');
    if (on && !s) {
      s = el('div', { class: 'side-scrim', id: 'sideScrim', onclick: function () { toggleSidebar(false); } });
      document.body.appendChild(s);
    } else if (!on && s) { s.remove(); }
  }
  function toggleSidebar(show) {
    if (show === undefined) show = sidebar.classList.contains('collapsed');
    sidebar.classList.toggle('collapsed', !show);
    setScrim(show && isNarrow());
  }
  function applyLayout() {
    if (isNarrow()) { sidebar.classList.add('collapsed'); setScrim(false); }
    else { sidebar.classList.remove('collapsed'); setScrim(false); }
  }

  /* ---------- スクロール中だけスクロールバーを見せる ----------
     scroll イベントはバブリングしないため、キャプチャ段階で拾って
     スクロールした要素自身に印を付ける。要素が後から作られても効く。 */
  function watchScrolling() {
    var HIDE_DELAY = 900;
    document.addEventListener('scroll', function (e) {
      var node = e.target;
      if (!node || node.nodeType !== 1 || !node.classList) return;
      node.classList.add('is-scrolling');
      clearTimeout(node._scrollHideTimer);
      node._scrollHideTimer = setTimeout(function () {
        node.classList.remove('is-scrolling');
      }, HIDE_DELAY);
    }, true);
  }

  /* ---------- 初期化 ---------- */
  /* 英語レッスンは日本語定義＋対訳表から組み立てる */
  (function buildEnglish() {
    if (!window.Translate || !Translate.mapSize('en')) return;
    A365.raw('ja').forEach(function (l) { A365.addLesson('en', Translate.lesson('en', l)); });
  })();

  paintChrome();
  applyLang();
  applyTheme();
  refreshScore();
  buildSidebar();
  applyLayout();
  watchScrolling();
  window.addEventListener('resize', applyLayout);

  document.getElementById('btnDash').addEventListener('click', openDash);
  document.getElementById('btnTheme').addEventListener('click', function () {
    Store.setTheme(Store.getTheme() === 'dark' ? 'light' : 'dark'); applyTheme();
  });
  document.getElementById('btnReset').addEventListener('click', doReset);
  document.getElementById('btnMenu').addEventListener('click', function () { toggleSidebar(); });
  document.getElementById('modalClose').addEventListener('click', U.closeModal);
  document.getElementById('modal').addEventListener('click', function (e) {
    if (e.target === this) U.closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') U.closeModal();
  });
  U.$$('#langSeg .seg-btn').forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
  });

  var last = Store.getLast();
  if (last && A365.byId(last)) openLesson(last, firstUndone(A365.byId(last)));
  else openDash();
})();
