/* ===== レッスン本文の翻訳 =====
   日本語のレッスン定義（data/ja）を構造の source of truth とし、
   表示文字列だけを対訳表（data/strings.en.js）で差し替えて英語版を生成する。

   id・target・answer・pattern といった構造値は一切変更しないため、
   言語を増やしても操作シミュレーションの整合性が壊れない。
   対訳が無い文字列は日本語のまま残る（可視の欠落として検出できる）。 */
var Translate = (function () {

  /* 値が表示文字列であるキー */
  var TEXT_KEYS = {
    title: 1, summary: 1, goal: 1, label: 1, text: 1, desc: 1, say: 1, hint: 1,
    done: 1, wrap: 1, intro: 1, explain: 1, q: 1, caption: 1, refCaption: 1,
    placeholder: 1, help: 1, h1: 1, crumb: 1, brand: 1, account: 1, p: 1, h: 1,
    note: 1, warn: 1, ok: 1, chip: 1, right: 1, status: 1, group: 1,
    leftTitle: 1, rightTitle: 1, left: 1, how: 1, who: 1,
    /* url はブラウザーのアドレス欄だが、デスクトップ画面ではラベルとして使う。
       実 URL は対訳表に載せないため、結果として英字 URL は素通りする。 */
    url: 1,
    /* chapter は「1〜2」「付録 A〜D」など表記を言語に合わせる */
    chapter: 1
  };

  /* 配列の中身まで翻訳するキー（文字列／文字列配列／オブジェクトが混在しうる） */
  var TEXT_ARRAY_KEYS = {
    choices: 1, ul: 1, ol: 1, cols: 1, head: 1, lines: 1, items: 1, cells: 1, rows: 1
  };

  /* 構造値。絶対に書き換えない
     （set は「キー＝状態 ID／値＝画面に出る文字列」なので別扱い。下の walk を参照） */
  var SKIP_KEYS = {
    id: 1, t: 1, target: 1, navSel: 1, when: 1, show: 1, icon: 1,
    type: 1, portal: 1, ref: 1, key: 1, equals: 1, v: 1, value: 1,
    answer: 1, week: 1, screen: 1, endScreen: 1, level: 1,
    multi: 1, on: 1, prim: 1, tone: 1, kind: 1, statusKind: 1, sel: 1,
    img: 1, code: 1, rightKind: 1, src: 1, draggable: 1
  };

  /* 入力検証の正規表現は構造値だが、日本語を含むものだけ言語別に差し替える */
  var PATTERNS = {
    en: {
      '^A365_台帳_\\d{8}_baseline\\.csv$': '^A365_Inventory_\\d{8}_baseline\\.csv$',
      '^A365_台帳_\\d{8}_final\\.csv$': '^A365_Inventory_\\d{8}_final\\.csv$'
    }
  };

  var maps = {};   /* { en: { '日本語': 'English', ... } } */
  var missing = {};

  function register(lang, map) {
    maps[lang] = Object.assign(maps[lang] || {}, map);
  }

  function tr(lang, s) {
    if (typeof s !== 'string' || !s) return s;
    var m = maps[lang];
    if (!m) return s;
    if (Object.prototype.hasOwnProperty.call(m, s)) return m[s];
    /* 未訳は記録しておき、検証で洗い出せるようにする */
    (missing[lang] = missing[lang] || {})[s] = (missing[lang][s] || 0) + 1;
    return s;
  }

  function walkArray(lang, key, arr) {
    var translatable = !!TEXT_ARRAY_KEYS[key];
    return arr.map(function (item) {
      if (typeof item === 'string') return translatable ? tr(lang, item) : item;
      if (Array.isArray(item)) {
        return item.map(function (x) {
          return typeof x === 'string' ? (translatable ? tr(lang, x) : x) : walk(lang, x);
        });
      }
      return walk(lang, item);
    });
  }

  function walk(lang, node) {
    if (node === null || node === undefined) return node;
    if (Array.isArray(node)) return walkArray(lang, null, node);
    if (typeof node !== 'object') return node;

    var out = {};
    Object.keys(node).forEach(function (key) {
      var v = node[key];

      if (key === 'pattern') {
        var p = PATTERNS[lang];
        out[key] = (p && p[v] !== undefined) ? p[v] : v;
        return;
      }
      /* キーは状態 ID なので保持し、値（表示文字列）だけ翻訳する */
      if ((key === 'miss' || key === 'set') && v && typeof v === 'object') {
        var mm = {};
        Object.keys(v).forEach(function (k) {
          mm[k] = (typeof v[k] === 'string') ? tr(lang, v[k]) : v[k];
        });
        out[key] = mm;
        return;
      }
      if (SKIP_KEYS[key]) { out[key] = v; return; }

      if (typeof v === 'string') { out[key] = TEXT_KEYS[key] ? tr(lang, v) : v; return; }
      if (Array.isArray(v)) { out[key] = walkArray(lang, key, v); return; }
      if (v && typeof v === 'object') { out[key] = walk(lang, v); return; }
      out[key] = v;
    });
    return out;
  }

  function lesson(lang, src) { return walk(lang, src); }

  function missingStrings(lang) { return Object.keys(missing[lang] || {}); }
  function resetMissing() { missing = {}; }
  function mapSize(lang) { return Object.keys(maps[lang] || {}).length; }

  /* 抽出用：翻訳対象の文字列をすべて集める（ビルド時の検証に使う） */
  function collect(node, key, out) {
    out = out || [];
    if (node === null || node === undefined) return out;
    if (Array.isArray(node)) {
      var translatable = !!TEXT_ARRAY_KEYS[key];
      node.forEach(function (item) {
        if (typeof item === 'string') { if (translatable && item) out.push(item); }
        else if (Array.isArray(item)) {
          item.forEach(function (x) {
            if (typeof x === 'string') { if (translatable && x) out.push(x); }
            else collect(x, null, out);
          });
        } else collect(item, null, out);
      });
      return out;
    }
    if (typeof node !== 'object') return out;

    Object.keys(node).forEach(function (k) {
      var v = node[k];
      if ((k === 'miss' || k === 'set') && v && typeof v === 'object') {
        Object.keys(v).forEach(function (mk) {
          if (typeof v[mk] === 'string' && v[mk]) out.push(v[mk]);
        });
        return;
      }
      if (k === 'pattern' || SKIP_KEYS[k]) return;
      if (typeof v === 'string') { if (TEXT_KEYS[k] && v) out.push(v); return; }
      if (Array.isArray(v)) { collect(v, k, out); return; }
      if (v && typeof v === 'object') collect(v, null, out);
    });
    return out;
  }

  return {
    register: register, lesson: lesson, collect: collect,
    missingStrings: missingStrings, resetMissing: resetMissing, mapSize: mapSize,
    TEXT_KEYS: TEXT_KEYS, TEXT_ARRAY_KEYS: TEXT_ARRAY_KEYS, SKIP_KEYS: SKIP_KEYS,
    PATTERNS: PATTERNS
  };
})();
