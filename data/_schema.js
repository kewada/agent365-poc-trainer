/* ===== コース定義の受け皿 =====
   data/ja/*.js と data/en/*.js が A365.addLesson(lang, lesson) を呼んで登録する。
   両言語でレッスン ID・ステップ構成・操作タスクの target は完全に一致させること
   （進捗は言語をまたいで共有され、整合性は validate で検査される）。 */
var A365 = (function () {
  var lessons = { ja: [], en: [] };
  var current = 'ja';

  /* 週の定義。label / title は言語別。 */
  var WEEKS = [
    {
      id: 0, icon: 'clipboard-list',
      label: { ja: 'Week 0', en: 'Week 0' },
      title: { ja: '準備（前提条件・事前チェック）', en: 'Preparation — prerequisites and readiness' }
    },
    {
      id: 1, icon: 'radar',
      label: { ja: 'Week 1', en: 'Week 1' },
      title: { ja: '有効化確認とローカルエージェント検出', en: 'Enablement check and local agent discovery' }
    },
    {
      id: 2, icon: 'search',
      label: { ja: 'Week 2', en: 'Week 2' },
      title: { ja: '棚卸しと Purview での可視化', en: 'Inventory and visibility with Purview' }
    },
    {
      id: 3, icon: 'shield-check',
      label: { ja: 'Week 3', en: 'Week 3' },
      title: { ja: 'Entra Agent ID と保護・調査', en: 'Entra Agent ID, protection and investigation' }
    },
    {
      id: 4, icon: 'flag',
      label: { ja: 'Week 4', en: 'Week 4' },
      title: { ja: '運用プロセスの確定と撤収', en: 'Operating model and rollback' }
    },
    {
      id: 9, icon: 'book-open',
      label: { ja: 'リファレンス', en: 'Reference' },
      title: { ja: 'いつでも参照', en: 'Look up any time' }
    }
  ];

  function addLesson(lang, lesson) {
    if (typeof lang !== 'string') { lesson = lang; lang = 'ja'; }
    if (!lessons[lang]) lessons[lang] = [];
    lessons[lang].push(lesson);
  }

  /* 表示言語の切り替え（未登録の言語は日本語にフォールバック） */
  function setLang(l) { current = (lessons[l] && lessons[l].length) ? l : 'ja'; }
  function lang() { return current; }

  function pool() {
    return (lessons[current] && lessons[current].length) ? lessons[current] : lessons.ja;
  }

  function all() { return pool(); }

  function byId(id) {
    var p = pool();
    for (var i = 0; i < p.length; i++) if (p[i].id === id) return p[i];
    return null;
  }

  function byWeek(w) {
    return pool().filter(function (l) { return l.week === w; });
  }

  function weeks() {
    return WEEKS.map(function (w) {
      return {
        id: w.id, icon: w.icon,
        label: w.label[current] || w.label.ja,
        title: w.title[current] || w.title.ja
      };
    });
  }

  /* 検証用 */
  function raw(l) { return lessons[l] || []; }
  function languages() {
    return Object.keys(lessons).filter(function (k) { return lessons[k].length; });
  }

  return {
    addLesson: addLesson, all: all, byId: byId, byWeek: byWeek,
    setLang: setLang, lang: lang, weeks: weeks, raw: raw, languages: languages,
    get WEEKS() { return weeks(); }
  };
})();
