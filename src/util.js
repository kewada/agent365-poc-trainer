/* ===== 共通ユーティリティ ===== */
var U = (function () {

  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (!Object.prototype.hasOwnProperty.call(attrs, k)) continue;
        var v = attrs[k];
        if (v === null || v === undefined || v === false) continue;
        if (k === 'class') n.className = v;
        else if (k === 'html') n.innerHTML = v;
        else if (k === 'text') n.textContent = v;
        else if (k.slice(0, 2) === 'on' && typeof v === 'function') n.addEventListener(k.slice(2), v);
        else n.setAttribute(k, v);
      }
    }
    append(n, children);
    return n;
  }

  function append(parent, children) {
    if (children === null || children === undefined) return parent;
    if (!Array.isArray(children)) children = [children];
    children.forEach(function (c) {
      if (c === null || c === undefined || c === false) return;
      if (typeof c === 'string' || typeof c === 'number') parent.appendChild(document.createTextNode(String(c)));
      else parent.appendChild(c);
    });
    return parent;
  }

  function clear(n) { while (n.firstChild) n.removeChild(n.firstChild); return n; }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function esc(s) {
    return String(s === undefined || s === null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /* 簡易インラインマークアップ: **太字** `code` [表示](url) */
  function rich(s) {
    var t = esc(s);
    t = t.replace(/`([^`]+)`/g, '<code class="inline">$1</code>');
    t = t.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    t = t.replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g,
      '<a href="$2" target="_blank" rel="noopener">$1</a>');
    t = t.replace(/(^|[\s(])((?:https?:\/\/)[^\s<)]+)/g,
      '$1<a href="$2" target="_blank" rel="noopener">$2</a>');
    return t;
  }

  /* Lucide アイコンを <svg> 要素で返す */
  function icon(name, size, cls) {
    return Icons.svg(name, size, cls);
  }
  /* 文字列に埋め込む用 */
  function iconHtml(name, size, cls) {
    return Icons.markup(name, size, cls);
  }

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function toast(msg, kind) {
    var wrap = document.getElementById('toasts');
    var name = kind === 'ok' ? 'circle-check' : kind === 'err' ? 'octagon-alert' : 'info';
    var t = el('div', { class: 'toast ' + (kind || '') }, [
      icon(name, 17), el('div', { html: rich(msg) })
    ]);
    wrap.appendChild(t);
    setTimeout(function () {
      t.style.transition = 'opacity .3s,transform .3s';
      t.style.opacity = '0'; t.style.transform = 'translateX(26px)';
      setTimeout(function () { if (t.parentNode) t.parentNode.removeChild(t); }, 320);
    }, 2600);
  }

  function modal(title, bodyNode) {
    var m = document.getElementById('modal');
    document.getElementById('modalTitle').textContent = title;
    var b = clear(document.getElementById('modalBody'));
    append(b, bodyNode);
    m.hidden = false;
  }
  function closeModal() { document.getElementById('modal').hidden = true; }

  function ripple(x, y) {
    var r = el('div', { class: 'ripple' });
    r.style.left = x + 'px'; r.style.top = y + 'px';
    document.body.appendChild(r);
    setTimeout(function () { if (r.parentNode) r.parentNode.removeChild(r); }, 600);
  }

  function pct(a, b) { return b === 0 ? 0 : Math.round((a / b) * 100); }

  return {
    el: el, append: append, clear: clear, $: $, $$: $$, esc: esc, rich: rich,
    icon: icon, iconHtml: iconHtml,
    shuffle: shuffle, toast: toast, modal: modal, closeModal: closeModal,
    ripple: ripple, pct: pct
  };
})();
