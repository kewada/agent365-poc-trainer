/* ===== 進捗の保存（localStorage） ===== */
var Store = (function () {
  var KEY = 'a365-trainer-v1';
  var data = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* localStorage 不可環境ではメモリのみ */ }
    return { steps: {}, lessons: {}, score: 0, theme: 'light', lang: defaultLang(), lastLesson: null, checks: {} };
  }

  /* ブラウザーの言語設定から初期値を決める */
  function defaultLang() {
    try {
      var l = (navigator.language || navigator.userLanguage || 'ja').toLowerCase();
      return l.indexOf('ja') === 0 ? 'ja' : 'en';
    } catch (e) { return 'ja'; }
  }

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
  }

  /* --- ステップ単位 --- */
  function stepKey(lessonId, idx) { return lessonId + '#' + idx; }

  function getStep(lessonId, idx) {
    return data.steps[stepKey(lessonId, idx)] || null;
  }

  function completeStep(lessonId, idx, result) {
    var k = stepKey(lessonId, idx);
    var prev = data.steps[k];
    var gained = 0;
    if (!prev || !prev.done) {
      gained = (result && result.points) || 10;
      data.score += gained;
    }
    data.steps[k] = {
      done: true,
      mistakes: (result && result.mistakes) || 0,
      hints: (result && result.hints) || 0,
      grade: (result && result.grade) || 'A',
      at: Date.now()
    };
    save();
    return gained;
  }

  function saveStepState(lessonId, idx, state) {
    var k = stepKey(lessonId, idx);
    data.steps[k] = Object.assign({}, data.steps[k] || {}, { state: state });
    save();
  }

  function isDone(lessonId, idx) {
    var s = getStep(lessonId, idx);
    return !!(s && s.done);
  }

  function lessonProgress(lesson) {
    var total = lesson.steps.length, done = 0;
    for (var i = 0; i < total; i++) if (isDone(lesson.id, i)) done++;
    return { done: done, total: total, pct: U.pct(done, total) };
  }

  /* --- チェックリスト等の任意状態 --- */
  function setCheck(key, val) { data.checks[key] = val; save(); }
  function getCheck(key) { return !!data.checks[key]; }

  function setLast(id) { data.lastLesson = id; save(); }
  function getLast() { return data.lastLesson; }

  function setTheme(t) { data.theme = t; save(); }
  function getTheme() { return data.theme || 'light'; }

  function setLang(l) { data.lang = (l === 'en') ? 'en' : 'ja'; save(); }
  function getLang() { return data.lang || defaultLang(); }

  function score() { return data.score; }

  function reset() {
    data = {
      steps: {}, lessons: {}, score: 0,
      theme: data.theme, lang: data.lang, lastLesson: null, checks: {}
    };
    save();
  }

  function exportJSON() { return JSON.stringify(data, null, 2); }

  return {
    getStep: getStep, completeStep: completeStep, saveStepState: saveStepState,
    isDone: isDone, lessonProgress: lessonProgress,
    setCheck: setCheck, getCheck: getCheck,
    setLast: setLast, getLast: getLast,
    setTheme: setTheme, getTheme: getTheme,
    setLang: setLang, getLang: getLang,
    score: score, reset: reset, exportJSON: exportJSON
  };
})();
