/* ===== 学習ステップの描画（info / quiz / checklist / order / match） ===== */
var Render = (function () {
  var el = U.el, ic = U.icon;

  function callout(kind, iconName, html) {
    return el('div', { class: 'callout ' + kind }, [
      ic(iconName, 17), el('div', { html: html })
    ]);
  }

  /* ---------- 共通コンテンツブロック ---------- */
  function blocks(list) {
    var box = el('div', { class: 'blk' });
    (list || []).forEach(function (b) {
      if (b.p) box.appendChild(el('p', { html: U.rich(b.p) }));
      else if (b.h) box.appendChild(el('h3', { class: 'sub', html: U.rich(b.h) }));
      else if (b.ul) box.appendChild(el('ul', null, b.ul.map(function (x) { return el('li', { html: U.rich(x) }); })));
      else if (b.ol) box.appendChild(el('ol', null, b.ol.map(function (x) { return el('li', { html: U.rich(x) }); })));
      else if (b.note) box.appendChild(callout('note', 'info', U.rich(b.note)));
      else if (b.warn) box.appendChild(callout('warn', 'triangle-alert', U.rich(b.warn)));
      else if (b.ok) box.appendChild(callout('ok', 'circle-check', U.rich(b.ok)));
      else if (b.code) box.appendChild(el('pre', { class: 'code', text: b.code }));
      else if (b.table) {
        box.appendChild(el('div', { style: 'overflow:auto' }, el('table', { class: 'tbl' }, [
          el('thead', null, el('tr', null, b.table.head.map(function (h) { return el('th', { html: U.rich(h) }); }))),
          el('tbody', null, b.table.rows.map(function (r) {
            return el('tr', null, r.map(function (c) { return el('td', { html: U.rich(c) }); }));
          }))
        ])));
      }
      else if (b.img) {
        var f = el('figure');
        var im = el('img', { class: 'refimg', src: 'assets/img/' + b.img, alt: b.caption || b.img, loading: 'lazy' });
        im.addEventListener('click', function () { SIM.showRef(b.img, b.caption); });
        f.appendChild(im);
        if (b.caption) f.appendChild(el('figcaption', { class: 'imgcap', html: U.rich(b.caption) }));
        box.appendChild(f);
      }
    });
    return box;
  }

  /* ---------- info ---------- */
  function info(host, step, ctx) {
    host.appendChild(blocks(step.body));
    var row = el('div', { class: 'row', style: 'margin-top:20px' });
    row.appendChild(el('button', {
      class: 'btn', onclick: function () { ctx.onDone({ grade: 'A', points: 6, mistakes: 0, hints: 0 }); }
    }, [el('span', { text: I18N.t('understood') }), ic('arrow-right', 16)]));
    host.appendChild(row);
  }

  /* ---------- quiz ---------- */
  function quiz(host, step, ctx) {
    var answers = step.questions.map(function () { return []; });
    var graded = false;
    var box = el('div');
    host.appendChild(box);

    function marker(multi, sel, graded, isAns) {
      if (graded) {
        if (isAns) return 'circle-check';
        if (sel) return 'circle-x';
        return multi ? 'square' : 'circle';
      }
      if (sel) return multi ? 'square-check-big' : 'circle-dot';
      return multi ? 'square' : 'circle';
    }

    function draw() {
      U.clear(box);
      step.questions.forEach(function (q, qi) {
        var qn = el('div', { class: 'q' });
        qn.appendChild(el('div', { class: 'q-h' }, [
          el('span', { class: 'chip', text: 'Q' + (qi + 1) }),
          el('span', { html: U.rich(q.q) })
        ]));
        if (q.multi) qn.appendChild(el('div', {
          class: 'muted', style: 'font-size:11.8px;margin:-4px 0 8px', text: I18N.t('multiSelect')
        }));
        q.choices.forEach(function (c, ci) {
          var sel = answers[qi].indexOf(ci) >= 0;
          var isAns = q.answer.indexOf(ci) >= 0;
          var cls = 'opt' + (sel && !graded ? ' sel' : '');
          if (graded) { if (isAns) cls += ' right'; else if (sel) cls += ' wrong'; }
          var o = el('div', { class: cls }, [
            ic(marker(q.multi, sel, graded, isAns), 17),
            el('div', { html: U.rich(c) })
          ]);
          if (!graded) o.addEventListener('click', function () {
            if (q.multi) {
              var k = answers[qi].indexOf(ci);
              if (k >= 0) answers[qi].splice(k, 1); else answers[qi].push(ci);
            } else answers[qi] = [ci];
            draw();
          });
          qn.appendChild(o);
        });
        if (graded && q.explain) {
          qn.appendChild(el('div', { class: 'explain' }, [
            ic('lightbulb', 16), el('div', { html: U.rich(q.explain) })
          ]));
        }
        box.appendChild(qn);
      });

      var row = el('div', { class: 'row', style: 'margin-top:16px' });
      if (!graded) {
        row.appendChild(el('button', {
          class: 'btn', text: I18N.t('gradeIt'),
          onclick: function () {
            if (answers.some(function (a) { return a.length === 0; })) {
              U.toast(I18N.t('unanswered'), 'err'); return;
            }
            graded = true; draw();
          }
        }));
      } else {
        var correct = 0;
        step.questions.forEach(function (q, qi) {
          if (answers[qi].slice().sort().join(',') === q.answer.slice().sort().join(',')) correct++;
        });
        var total = step.questions.length;
        row.appendChild(el('div', {
          class: 'chip ' + (correct === total ? 'ok' : (correct >= Math.ceil(total * 0.7) ? 'warn' : 'err'))
        }, [
          ic(correct === total ? 'circle-check' : 'info', 14),
          el('span', { text: I18N.t('correctOf', correct, total) })
        ]));
        row.appendChild(el('button', {
          class: 'btn sec sm', onclick: function () {
            graded = false; answers = step.questions.map(function () { return []; }); draw();
          }
        }, [ic('rotate-ccw', 15), el('span', { text: I18N.t('retry') })]));
        row.appendChild(el('button', {
          class: 'btn', onclick: function () {
            ctx.onDone({
              grade: correct === total ? 'S' : 'A',
              points: 6 + Math.round(14 * correct / total),
              mistakes: total - correct, hints: 0
            });
          }
        }, [el('span', { text: I18N.t('next') }), ic('arrow-right', 16)]));
      }
      box.appendChild(row);
    }
    draw();
  }

  /* ---------- checklist ---------- */
  function checklist(host, step, ctx) {
    var box = el('div');
    if (step.intro) host.appendChild(blocks([{ p: step.intro }]));
    host.appendChild(box);

    function key(i) { return step.key + '#' + i; }

    function draw() {
      U.clear(box);
      var doneCount = 0;
      step.items.forEach(function (it, i) {
        var on = Store.getCheck(key(i));
        if (on) doneCount++;
        var n = el('div', { class: 'chk-item' + (on ? ' on' : '') }, [
          el('div', { class: 'chk-box' }, on ? ic('check', 13) : null),
          el('div', { class: 'chk-main' }, [
            el('div', { class: 'chk-t', html: U.rich(it.text) }),
            (it.how || it.who) ? el('div', {
              class: 'chk-m',
              html: U.rich((it.how ? I18N.t('howToVerify') + it.how : '') + (it.who ? '　·　' + I18N.t('responsible') + it.who : ''))
            }) : null
          ])
        ]);
        n.addEventListener('click', function () { Store.setCheck(key(i), !on); draw(); });
        box.appendChild(n);
      });

      var all = doneCount === step.items.length;
      var row = el('div', { class: 'row', style: 'margin-top:16px' });
      row.appendChild(el('div', { class: 'chip ' + (all ? 'ok' : '') }, [
        ic(all ? 'circle-check' : 'circle-dot', 14),
        el('span', { text: I18N.t('checkedOf', doneCount, step.items.length) })
      ]));
      row.appendChild(el('button', {
        class: 'btn', disabled: !all,
        onclick: function () { ctx.onDone({ grade: 'A', points: 12, mistakes: 0, hints: 0 }); }
      }, [el('span', { text: all ? I18N.t('next') : I18N.t('checkAllFirst') }), all ? ic('arrow-right', 16) : null]));
      row.appendChild(el('button', {
        class: 'btn sec sm', text: I18N.t('checkAll'), onclick: function () {
          step.items.forEach(function (_, i) { Store.setCheck(key(i), true); }); draw();
        }
      }));
      box.appendChild(row);
    }
    draw();
  }

  /* ---------- order（並べ替え） ---------- */
  function order(host, step, ctx) {
    var cur = U.shuffle(step.items.map(function (x, i) { return i; }));
    if (cur.join() === step.items.map(function (_, i) { return i; }).join()) cur.reverse();
    var graded = false;
    var box = el('div');
    if (step.intro) host.appendChild(blocks([{ p: step.intro }]));
    host.appendChild(box);

    function draw() {
      U.clear(box);
      cur.forEach(function (origIdx, pos) {
        var cls = 'ord-item';
        if (graded) cls += (origIdx === pos ? ' right' : ' wrong');
        var n = el('div', { class: cls, draggable: graded ? 'false' : 'true' }, [
          el('div', { class: 'num', text: String(pos + 1) }),
          el('div', { style: 'flex:1;min-width:0', html: U.rich(step.items[origIdx]) })
        ]);
        if (!graded) {
          n.appendChild(el('button', {
            class: 'mini', 'aria-label': I18N.t('moveUp'),
            onclick: function (e) {
              e.stopPropagation();
              if (pos > 0) { var m = cur.splice(pos, 1)[0]; cur.splice(pos - 1, 0, m); draw(); }
            }
          }, ic('chevron-up', 15)));
          n.appendChild(el('button', {
            class: 'mini', 'aria-label': I18N.t('moveDown'),
            onclick: function (e) {
              e.stopPropagation();
              if (pos < cur.length - 1) { var m = cur.splice(pos, 1)[0]; cur.splice(pos + 1, 0, m); draw(); }
            }
          }, ic('chevron-down', 15)));
          n.appendChild(el('div', { class: 'hnd' }, ic('grip-vertical', 15)));

          n.addEventListener('dragstart', function (e) {
            e.dataTransfer.setData('text/plain', String(pos)); n.classList.add('drag');
          });
          n.addEventListener('dragend', function () { n.classList.remove('drag'); });
          n.addEventListener('dragover', function (e) { e.preventDefault(); });
          n.addEventListener('drop', function (e) {
            e.preventDefault();
            var from = parseInt(e.dataTransfer.getData('text/plain'), 10);
            if (isNaN(from) || from === pos) return;
            var moved = cur.splice(from, 1)[0];
            cur.splice(pos, 0, moved);
            draw();
          });
        } else {
          n.appendChild(ic(origIdx === pos ? 'circle-check' : 'circle-x', 17));
        }
        box.appendChild(n);
      });

      var row = el('div', { class: 'row', style: 'margin-top:16px' });
      if (!graded) {
        row.appendChild(el('button', { class: 'btn', text: I18N.t('checkIt'), onclick: function () { graded = true; draw(); } }));
      } else {
        var ok = cur.every(function (v, i) { return v === i; });
        row.appendChild(el('div', { class: 'chip ' + (ok ? 'ok' : 'err') }, [
          ic(ok ? 'circle-check' : 'circle-x', 14),
          el('span', { text: ok ? I18N.t('orderCorrect') : I18N.t('orderWrong') })
        ]));
        row.appendChild(el('button', {
          class: 'btn sec sm', onclick: function () { graded = false; cur = U.shuffle(cur); draw(); }
        }, [ic('rotate-ccw', 15), el('span', { text: I18N.t('startOver') })]));
        if (ok) row.appendChild(el('button', {
          class: 'btn', onclick: function () { ctx.onDone({ grade: 'A', points: 15, mistakes: 0, hints: 0 }); }
        }, [el('span', { text: I18N.t('next') }), ic('arrow-right', 16)]));
      }
      if (graded && step.explain) {
        box.appendChild(el('div', { class: 'explain' }, [
          ic('lightbulb', 16), el('div', { html: U.rich(step.explain) })
        ]));
      }
      box.appendChild(row);
    }
    draw();
  }

  /* ---------- match（対応付け） ---------- */
  function match(host, step, ctx) {
    var lefts = step.pairs.map(function (p, i) { return i; });
    var rights = U.shuffle(step.pairs.map(function (p, i) { return i; }));
    var solved = {}, selL = null, wrongCount = 0;
    var box = el('div');
    if (step.intro) host.appendChild(blocks([{ p: step.intro }]));
    host.appendChild(box);

    function draw() {
      U.clear(box);
      var grid = el('div', { class: 'match-grid' });
      var cl = el('div', { class: 'match-col' }), cr = el('div', { class: 'match-col' });
      cl.appendChild(el('div', { class: 'task-h', text: step.leftTitle || I18N.t('defaultLeft') }));
      cr.appendChild(el('div', { class: 'task-h', text: step.rightTitle || I18N.t('defaultRight') }));

      lefts.forEach(function (i) {
        var done = solved[i];
        var n = el('div', {
          class: 'match-cell' + (done ? ' done' : (selL === i ? ' sel' : '')),
          html: U.rich(step.pairs[i].left)
        });
        if (!done) n.addEventListener('click', function () { selL = (selL === i ? null : i); draw(); });
        cl.appendChild(n);
      });

      rights.forEach(function (i) {
        var done = solved[i];
        var n = el('div', {
          class: 'match-cell' + (done ? ' done' : ''),
          html: U.rich(step.pairs[i].right)
        });
        if (!done) n.addEventListener('click', function () {
          if (selL === null) { U.toast(I18N.t('selectLeftFirst'), 'err'); return; }
          if (selL === i) { solved[i] = true; selL = null; U.toast(I18N.t('matchCorrect'), 'ok'); }
          else { wrongCount++; U.toast(I18N.t('matchWrong'), 'err'); }
          draw();
        });
        cr.appendChild(n);
      });

      grid.appendChild(cl); grid.appendChild(cr);
      box.appendChild(grid);

      var n = Object.keys(solved).length;
      var row = el('div', { class: 'row', style: 'margin-top:18px' });
      row.appendChild(el('div', { class: 'chip ' + (n === step.pairs.length ? 'ok' : '') }, [
        ic(n === step.pairs.length ? 'circle-check' : 'circle-dot', 14),
        el('span', { text: I18N.t('matchedOf', n, step.pairs.length) })
      ]));
      if (n === step.pairs.length) {
        row.appendChild(el('button', {
          class: 'btn', onclick: function () {
            ctx.onDone({
              grade: wrongCount === 0 ? 'S' : 'A',
              points: wrongCount === 0 ? 20 : 12, mistakes: wrongCount, hints: 0
            });
          }
        }, [el('span', { text: I18N.t('next') }), ic('arrow-right', 16)]));
      }
      box.appendChild(row);
    }
    draw();
  }

  return { blocks: blocks, info: info, quiz: quiz, checklist: checklist, order: order, match: match };
})();
