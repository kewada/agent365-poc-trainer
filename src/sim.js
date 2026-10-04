/* ===== 管理ポータル シミュレーター =====
   スクリーンショットの座標に依存せず、HTML で各ポータル UI を再現して
   「正しい場所をクリックする」操作練習を行う。                      */
var SIM = (function () {
  var el = U.el, append = U.append, ic = U.icon;

  var PORTALS = {
    m365: { cls: 'p-m365', name: 'Microsoft 365 管理センター' },
    defender: { cls: 'p-defender', name: 'Microsoft Defender' },
    purview: { cls: 'p-purview', name: 'Microsoft Purview' },
    entra: { cls: 'p-entra', name: 'Microsoft Entra 管理センター' },
    ppac: { cls: 'p-ppac', name: 'Power Platform 管理センター' },
    intune: { cls: 'p-intune', name: 'Microsoft Intune 管理センター' },
    desktop: { cls: 'p-desktop', name: 'デスクトップ' }
  };

  /* ---------- state helper ---------- */
  function sv(state, cid, fallback) {
    return Object.prototype.hasOwnProperty.call(state, cid) ? state[cid] : fallback;
  }

  /* ---------- clickable wrapper ---------- */
  function hot(node, cid, click) {
    if (!cid) return node;
    node.setAttribute('data-cid', cid);
    node.classList.add('hot');
    node.addEventListener('click', function (ev) {
      ev.stopPropagation();
      click(cid, node, ev);
    });
    return node;
  }

  /* ---------- component renderer ---------- */
  function comp(c, state, click) {
    if (!c) return null;
    if (c.when && !sv(state, c.when, false)) return null;
    switch (c.t) {

      case 'banner':
        var bk = c.kind || '';
        return el('div', { class: 'pbanner ' + bk }, [
          ic(bk === 'ok' ? 'circle-check' : bk === 'warn' ? 'triangle-alert' : 'info', 16),
          el('div', { html: U.rich(c.text) })
        ]);

      case 'h':
        return el('div', { class: 'pcard-h', style: 'margin-top:6px', html: U.rich(c.text) });

      case 'p':
        return el('div', {
          style: 'font-size:12.7px;color:var(--ink-2);margin:0 0 12px;line-height:1.6',
          html: U.rich(c.text)
        });

      case 'cmdbar':
        return el('div', { class: 'cmdbar' }, c.items.map(function (b) {
          return hot(el('div', { class: 'cmd' + (b.prim ? ' prim' : '') }, [
            b.icon ? ic(b.icon, 15) : null, el('span', { text: b.label })
          ]), b.id, click);
        }));

      case 'tiles':
        return el('div', { class: 'tiles' }, c.items.map(function (t) {
          return hot(el('div', { class: 'tile ' + (t.tone || '') }, [
            el('div', { class: 'tv', text: String(sv(state, t.id + '.value', t.value)) }),
            el('div', { class: 'tl', text: t.label })
          ]), t.id, click);
        }));

      case 'table':
        return el('div', { style: 'overflow:auto;margin-bottom:14px' }, [
          el('table', { class: 'ptable' }, [
            el('thead', null, el('tr', null, c.cols.map(function (h) { return el('th', { text: h }); }))),
            el('tbody', null, c.rows.map(function (r) {
              var tr = el('tr', { class: r.id ? 'clickable' : '' }, r.cells.map(function (cell) {
                var td = el('td');
                if (cell && cell.chip) {
                  td.appendChild(el('span', { class: 'chip ' + (cell.kind || ''), text: cell.chip }));
                } else td.innerHTML = U.rich(cell);
                return td;
              }));
              return r.id ? hot(tr, r.id, click) : tr;
            }))
          ])
        ]);

      case 'wizard':
        return el('div', { class: 'wizlist' }, c.items.map(function (wz, i) {
          var st = sv(state, wz.id + '.status', wz.status || '未完了');
          var kind = sv(state, wz.id + '.kind', wz.statusKind || 'pend');
          return hot(el('div', { class: 'wizstep' }, [
            el('div', { class: 'wn', text: String(i + 1) }),
            el('div', { class: 'wt', text: wz.label }),
            el('div', { class: 'ws ' + kind, text: st }),
            ic('chevron-right', 15, 'muted')
          ]), wz.id, click);
        }));

      case 'toggle':
        var on = sv(state, c.id, !!c.on);
        return hot(el('div', { class: 'ptoggle' + (on ? ' on' : '') }, [
          el('div', { class: 'tk' }),
          el('div', { class: 'tlab' }, [
            el('span', { html: U.rich(c.label) }),
            el('span', {
              class: 'chip ' + (on ? 'ok' : ''),
              style: 'margin-left:8px',
              text: on ? I18N.t('enabled') : I18N.t('disabled')
            })
          ])
        ]), c.id, click);

      case 'checks':
        return el('div', { style: 'margin-bottom:12px' }, c.items.map(function (k) {
          var kon = sv(state, k.id, !!k.on);
          return hot(el('div', { class: 'pcheck' + (kon ? ' on' : '') }, [
            el('div', { class: 'cb' }, kon ? ic('check', 12) : null),
            el('div', { html: U.rich(k.label) })
          ]), k.id, click);
        }));

      case 'field':
        var fw = el('div', { class: 'pfield' });
        fw.appendChild(el('label', { text: c.label }));
        var inp = el('input', {
          type: 'text', placeholder: c.placeholder || '', value: sv(state, c.id, c.value || ''),
          'data-cid': c.id, spellcheck: 'false', autocomplete: 'off'
        });
        inp.addEventListener('input', function () { click(c.id, inp, null, inp.value); });
        inp.addEventListener('click', function (e) { e.stopPropagation(); });
        fw.appendChild(inp);
        if (c.help) fw.appendChild(el('div', {
          style: 'font-size:11.4px;color:var(--ink-3);margin-top:5px', html: U.rich(c.help)
        }));
        fw.appendChild(el('div', { class: 'ok-mark' }, [ic('circle-check', 14), el('span', { text: I18N.t('inputOk') })]));
        if (sv(state, c.id + '.valid', false)) fw.classList.add('valid');
        return fw;

      case 'select':
        var sw = el('div', { class: 'pfield' });
        sw.appendChild(el('label', { text: c.label }));
        var sel = el('select', { 'data-cid': c.id });
        (c.options || []).forEach(function (o) {
          sel.appendChild(el('option', { value: o.v, text: o.label }));
        });
        sel.value = sv(state, c.id, c.value || '');
        sel.addEventListener('change', function () { click(c.id, sel, null, sel.value); });
        sel.addEventListener('click', function (e) { e.stopPropagation(); });
        sw.appendChild(sel);
        if (sv(state, c.id + '.valid', false)) sw.classList.add('valid');
        sw.appendChild(el('div', { class: 'ok-mark' }, [ic('circle-check', 14), el('span', { text: I18N.t('selectOk') })]));
        return sw;

      case 'card':
        return el('div', { class: 'pcard' }, [
          c.title ? el('div', { class: 'pcard-h', text: c.title }) : null
        ].concat((c.children || []).map(function (x) { return comp(x, state, click); })));

      case 'tabs':
        return el('div', { class: 'ptabs' }, c.items.map(function (t) {
          var selId = sv(state, (c.id || 'tabs') + '.sel', c.sel);
          return hot(el('div', { class: 'ptab' + (t.id === selId ? ' sel' : ''), text: t.label }), t.id, click);
        }));

      case 'list':
        return el('div', { class: 'plist' }, c.items.map(function (it) {
          return hot(el('div', { class: 'pli' }, [
            it.icon ? el('div', { class: 'pli-i' }, ic(it.icon, 17)) : null,
            el('div', { class: 'pli-m' }, [
              el('div', { class: 'pli-t', html: U.rich(it.title) }),
              it.desc ? el('div', { class: 'pli-d', html: U.rich(it.desc) }) : null
            ]),
            it.right ? el('span', {
              class: 'chip ' + (it.rightKind || ''), text: sv(state, it.id + '.status', it.right)
            }) : null,
            ic('chevron-right', 15)
          ]), it.id, click);
        }));

      case 'btns':
        return el('div', { class: 'row', style: 'margin:14px 0 4px' }, c.items.map(function (b) {
          return hot(el('div', {
            class: 'cmd' + (b.prim ? ' prim' : ''),
            style: b.prim ? 'padding:8px 16px' : 'padding:8px 16px;box-shadow:inset 0 0 0 1px var(--line-2)'
          }, [b.icon ? ic(b.icon, 15) : null, el('span', { text: b.label })]), b.id, click);
        }));

      case 'term':
        var pre = el('div', { class: 'pterm' });
        pre.innerHTML = (c.lines || []).join('\n');
        return pre;

      case 'kv':
        return el('table', { class: 'ptable', style: 'margin-bottom:14px' },
          el('tbody', null, c.rows.map(function (r) {
            return el('tr', null, [
              el('td', { style: 'width:200px;color:var(--ink-3)', html: U.rich(r[0]) }),
              el('td', { html: U.rich(r[1]) })
            ]);
          })));

      case 'note':
        return el('div', { class: 'pbanner warn' }, [
          ic('triangle-alert', 16), el('div', { html: U.rich(c.text) })
        ]);

      default:
        return null;
    }
  }

  /* ---------- nav ---------- */
  function navNode(screen, state, click) {
    var items = screen.nav || [];
    var box = el('div', { class: 'p-nav' });
    items.forEach(function (n) {
      if (n.group) { box.appendChild(el('div', { class: 'nav-grp', text: n.group })); return; }
      var selId = sv(state, 'nav.sel', screen.navSel);
      var cls = 'nav-i' + (n.level === 2 ? ' child' : n.level === 3 ? ' child2' : '') +
        (n.id === selId ? ' sel' : '');
      box.appendChild(hot(el('div', { class: cls }, [
        n.icon ? ic(n.icon, 15) : null,
        el('span', { text: n.label })
      ]), n.id, click));
    });
    return box;
  }

  /* ---------- full screen ---------- */
  function renderScreen(screen, state, click) {
    var P = PORTALS[screen.portal] || PORTALS.m365;
    var body = el('div', { class: 'p-main' }, [
      screen.crumb ? el('div', { class: 'p-crumb', text: screen.crumb }) : null,
      screen.h1 ? el('div', { class: 'p-h1', text: screen.h1 }) : null,
      screen.desc ? el('div', { class: 'p-desc', html: U.rich(screen.desc) }) : null
    ].concat((screen.content || []).map(function (c) { return comp(c, state, click); })));

    return el('div', { class: 'portal' }, [
      el('div', { class: 'browser-bar' }, [
        el('div', { class: 'dots' }, [el('i'), el('i'), el('i')]),
        el('div', { class: 'urlbar', text: screen.url || '' })
      ]),
      el('div', { class: 'p-top ' + P.cls }, [
        el('span', { class: 'p-waffle' }, ic('layout-grid', 16)),
        el('span', { text: screen.brand || P.name }),
        el('span', { class: 'p-right' }, [
          el('span', { text: screen.account || 'poc-admin@contoso.com' }),
          ic('user-round', 16)
        ])
      ]),
      el('div', { class: 'p-body' }, [
        (screen.nav && screen.nav.length) ? navNode(screen, state, click) : null,
        body
      ])
    ]);
  }

  /* =====================================================
     ステップ実行エンジン
     ===================================================== */
  function run(host, step, ctx) {
    var state = {};
    var ti = 0, mistakes = 0, hintsUsed = 0, finished = false, showHint = false;
    var screens = step.screens || [step.screen];

    var wrap = el('div', { class: 'sim-wrap' });
    var left = el('div');
    var right = el('div');
    wrap.appendChild(left); wrap.appendChild(right);
    host.appendChild(wrap);

    function curTask() { return step.tasks[ti]; }
    function lastScreenIdx() {
      var s = 0;
      for (var i = 0; i < step.tasks.length; i++) {
        if (typeof step.tasks[i].screen === 'number') s = step.tasks[i].screen;
      }
      if (typeof step.endScreen === 'number') s = step.endScreen;
      return s;
    }
    function curScreenIdx() {
      if (finished) return lastScreenIdx();
      var s = 0;
      for (var i = 0; i <= ti && i < step.tasks.length; i++) {
        if (typeof step.tasks[i].screen === 'number') s = step.tasks[i].screen;
      }
      return s;
    }

    function applyEffects(t) {
      if (t.set) for (var k in t.set) state[k] = t.set[k];
      if (t.show) t.show.forEach(function (k) { state[k] = true; });
    }

    function onClick(cid, node, ev, value) {
      if (finished) return;
      var t = curTask();
      if (!t) return;

      if (value !== undefined && !(t.pattern || t.equals)) { state[cid] = value; return; }
      if (ev) U.ripple(ev.clientX, ev.clientY);

      if (t.pattern || t.equals) {
        if (cid !== t.target) { wrong(node, cid); return; }
        state[cid] = value;
        var ok = t.equals ? (String(value).trim() === t.equals)
          : new RegExp(t.pattern, 'i').test(String(value).trim());
        state[cid + '.valid'] = ok;
        if (ok) correct(t); else draw();
        return;
      }

      if (cid === t.target) {
        if (/^tgl:/.test(cid)) state[cid] = !sv(state, cid, false);
        if (/^chk:/.test(cid)) state[cid] = !sv(state, cid, false);
        correct(t);
      } else {
        wrong(node, cid);
      }
    }

    function correct(t) {
      applyEffects(t);
      if (t.navSel) state['nav.sel'] = t.navSel;
      ti++;
      if (ti >= step.tasks.length) {
        finished = true;
        ctx.record({
          mistakes: mistakes, hints: hintsUsed,
          grade: (mistakes === 0 && hintsUsed === 0) ? 'S' : (mistakes <= 1 ? 'A' : 'B'),
          points: (mistakes === 0 && hintsUsed === 0) ? 20 : (mistakes <= 2 ? 14 : 10)
        });
        draw();
      } else {
        draw({ kind: 'ok', msg: t.done || I18N.t('simCorrect') });
      }
    }

    function wrong(node, cid) {
      mistakes++;
      if (node) {
        node.classList.add('hot-wrong');
        setTimeout(function () { node.classList.remove('hot-wrong'); }, 440);
      }
      var t = curTask();
      var msg = (t && t.miss && t.miss[cid]) ? t.miss[cid]
        : I18N.t('simWrong');
      draw({ kind: 'err', msg: msg });
    }

    function draw(feedback) {
      U.clear(left); U.clear(right);

      var scr = screens[curScreenIdx()] || screens[0];
      left.appendChild(renderScreen(scr, state, onClick));

      var pane = el('div', { class: 'taskpane' });
      pane.appendChild(el('div', {
        class: 'task-h',
        text: I18N.t('taskCounter', Math.min(ti + (finished ? 0 : 1), step.tasks.length), step.tasks.length)
      }));

      step.tasks.forEach(function (t, i) {
        var isCur = i === ti && !finished;
        var cls = 'task-li' + (i < ti ? ' done' : (isCur ? ' cur' : ''));
        pane.appendChild(el('div', { class: cls }, [
          el('div', { class: 'tm' }, ic(i < ti ? 'circle-check' : (isCur ? 'circle-dot' : 'circle'), 15)),
          el('div', { class: 'tt', html: U.rich(t.say) })
        ]));
      });

      if (!finished) {
        var t = curTask();
        var btnRow = el('div', { class: 'row', style: 'margin-top:14px' });
        btnRow.appendChild(el('button', {
          class: 'btn sec sm',
          onclick: function () { if (!showHint) hintsUsed++; showHint = !showHint; draw(); }
        }, [ic('lightbulb', 15), el('span', { text: showHint ? I18N.t('hideHint') : I18N.t('hint') })]));

        if (step.ref) {
          btnRow.appendChild(el('button', {
            class: 'btn sec sm', onclick: function () { showRef(step.ref, step.refCaption); }
          }, [ic('image', 15), el('span', { text: I18N.t('realScreen') })]));
        }
        btnRow.appendChild(el('button', {
          class: 'btn sec sm',
          onclick: function () {
            hintsUsed++;
            var node = left.querySelector('[data-cid="' + cssEsc(t.target) + '"]');
            if (node) {
              node.classList.add('pulse');
              node.scrollIntoView({ block: 'center', behavior: 'smooth' });
              setTimeout(function () { node.classList.remove('pulse'); }, 3400);
            } else {
              U.toast(I18N.t('answerIsInput'), 'err');
            }
          }
        }, [ic('target', 15), el('span', { text: I18N.t('showAnswer') })]));
        pane.appendChild(btnRow);

        if (showHint && t.hint) {
          pane.appendChild(el('div', { class: 'hintbox' }, [
            ic('lightbulb', 16), el('div', { html: U.rich(t.hint) })
          ]));
        }
      } else {
        var perfect = mistakes === 0 && hintsUsed === 0;
        pane.appendChild(el('div', { class: 'fbbox ok' }, [
          ic('badge-check', 17),
          el('div', {
            html: U.esc(I18N.t('simAllDone')) + '<br>' +
              (perfect
                ? '<b>' + U.esc(I18N.t('perfectGrade')) + '</b>'
                : U.esc(I18N.t('mistakesHints', mistakes, hintsUsed)))
          })
        ]));
        if (step.wrap) {
          pane.appendChild(el('div', { class: 'hintbox note' }, [
            ic('book-open', 16), el('div', { html: U.rich(step.wrap) })
          ]));
        }
        var endRow = el('div', { class: 'row', style: 'margin-top:14px' });
        endRow.appendChild(el('button', {
          class: 'btn', onclick: function () { ctx.advance(); }
        }, [el('span', { text: I18N.t('nextStep') }), ic('arrow-right', 16)]));
        endRow.appendChild(el('button', {
          class: 'btn sec sm', onclick: function () {
            state = {}; ti = 0; mistakes = 0; hintsUsed = 0; finished = false; showHint = false; draw();
          }
        }, [ic('rotate-ccw', 15), el('span', { text: I18N.t('retry') })]));
        if (step.ref) {
          endRow.appendChild(el('button', {
            class: 'btn sec sm', onclick: function () { showRef(step.ref, step.refCaption); }
          }, [ic('image', 15), el('span', { text: I18N.t('realScreen') })]));
        }
        pane.appendChild(endRow);
      }

      if (feedback) {
        pane.appendChild(el('div', { class: 'fbbox ' + feedback.kind }, [
          ic(feedback.kind === 'ok' ? 'circle-check' : 'octagon-alert', 17),
          el('div', { html: U.rich(feedback.msg) })
        ]));
      }
      right.appendChild(pane);
    }

    draw();
  }

  function cssEsc(s) { return String(s).replace(/"/g, '\\"'); }

  function showRef(img, cap) {
    var imgs = Array.isArray(img) ? img : [img];
    var box = el('div');
    imgs.forEach(function (f) {
      box.appendChild(el('img', { src: 'assets/img/' + f, alt: f, style: 'margin-bottom:12px' }));
    });
    if (cap) box.appendChild(el('div', { class: 'imgcap', html: U.rich(cap) }));
    box.appendChild(el('div', {
      class: 'imgcap',
      text: I18N.t('realScreenNote')
    }));
    U.modal(I18N.t('realScreenTitle'), box);
  }

  return { renderScreen: renderScreen, run: run, showRef: showRef };
})();
