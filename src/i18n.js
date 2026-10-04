/* ===== UI 文字列の多言語化 =====
   レッスン本文は data/ja・data/en に分かれており、ここではアプリ側の
   ラベル・ボタン・状態表示だけを扱う。 */
var I18N = (function () {

  var STR = {
    /* --- アプリ全体 --- */
    appName: { ja: 'Agent 365 PoC Trainer', en: 'Agent 365 PoC Trainer' },
    appTagline: {
      ja: 'Microsoft 365 E5 + Microsoft Agent 365 ／ 本番テナント・パイロットユーザー構成',
      en: 'Microsoft 365 E5 + Microsoft Agent 365 — production tenant, pilot users'
    },

    /* --- ヘッダー --- */
    menu: { ja: 'レッスン一覧', en: 'Lessons' },
    dashboard: { ja: 'ダッシュボード', en: 'Dashboard' },
    score: { ja: '獲得スコア', en: 'Score' },
    toggleTheme: { ja: '外観を切り替え', en: 'Toggle appearance' },
    resetProgress: { ja: '進捗をリセット', en: 'Reset progress' },
    language: { ja: '言語', en: 'Language' },
    switchToEn: { ja: 'Switch to English', en: 'Switch to English' },
    switchToJa: { ja: '日本語に切り替え', en: '日本語に切り替え' },
    overallProgress: { ja: '全体の進捗', en: 'Overall progress' },

    /* --- ダッシュボード --- */
    heroTitle: {
      ja: '管理ポータルの操作を、手を動かして覚える。',
      en: 'Learn the admin portals by actually doing the work.'
    },
    heroBody: {
      ja: 'Microsoft Agent 365 PoC セットアップ手順書 v3 をもとにした操作トレーニングです。実際の管理画面を再現したシミュレーターで、正しい手順を身につけます。',
      en: 'Hands-on training based on the Microsoft Agent 365 PoC Setup Guide v3. Practise the real procedure in a simulator that mirrors the actual admin portals.'
    },
    startFromBeginning: { ja: '最初から始める', en: 'Start from the beginning' },
    resume: { ja: '続きから始める', en: 'Resume' },
    completedSteps: { ja: '完了ステップ', en: 'Steps completed' },
    completedLessons: { ja: '修了レッスン', en: 'Lessons completed' },
    scoreEarned: { ja: '獲得スコア', en: 'Points earned' },
    howToLearn: { ja: '学習の進め方', en: 'How to use this trainer' },
    howTo1: {
      ja: 'Week 0 から順に進めます。各レッスンは **解説 → 操作シミュレーション → 確認クイズ** の構成です。',
      en: 'Work through Week 0 onwards. Each lesson follows **explanation → hands-on simulation → knowledge check**.'
    },
    howTo2: {
      ja: '操作シミュレーションでは、右側のタスク指示に従って **画面の正しい場所をクリック** します。間違えても何度でもやり直せます。',
      en: 'In a simulation, follow the task list on the right and **click the correct spot on screen**. You can retry as often as you like.'
    },
    howTo3: {
      ja: '迷ったら「ヒント」、どうしても分からなければ「正解を見る」で対象をハイライトできます。',
      en: 'Stuck? Use **Hint**, or **Show answer** to highlight the target.'
    },
    howTo4: {
      ja: '各画面の「実画面」から、手順書に収録された **実際のスクリーンショット** を参照できます。',
      en: 'Use **Real screen** to view the **actual screenshots** from the setup guide.'
    },
    howTo5: {
      ja: '進捗とスコアは自動保存されます。ミスやヒントなしで完了すると **S 判定** になります。',
      en: 'Progress and score save automatically. Finish with no mistakes and no hints to earn an **S grade**.'
    },
    disclaimer: {
      ja: '本トレーナーはシミュレーションです。実際の設定変更は手順書と Microsoft Learn の最新情報を確認のうえ、本番テナントで実施してください。',
      en: 'This trainer is a simulation. Before changing anything in a production tenant, check the setup guide and the latest guidance on Microsoft Learn.'
    },
    progressManagement: { ja: '進捗の管理', en: 'Progress' },
    exportProgress: { ja: '進捗を書き出す', en: 'Export progress' },
    resetConfirmTitle: { ja: '進捗のリセット', en: 'Reset progress' },
    resetConfirmBody: {
      ja: 'すべての進捗・チェック・スコアを消去します。この操作は取り消せません。',
      en: 'This clears all progress, checklists and score. It cannot be undone.'
    },
    doReset: { ja: 'リセットする', en: 'Reset' },
    cancel: { ja: 'キャンセル', en: 'Cancel' },
    resetDone: { ja: '進捗をリセットしました。', en: 'Progress has been reset.' },

    /* --- レッスン表示 --- */
    stepOf: { ja: 'ステップ {0} / {1}', en: 'Step {0} of {1}' },
    guideChapter: { ja: '手順書 {0} 章', en: 'Guide ch. {0}' },
    prevStep: { ja: '前のステップ', en: 'Previous' },
    skip: { ja: 'スキップ', en: 'Skip' },
    endLesson: { ja: 'レッスンを終える', en: 'Finish lesson' },
    notDone: { ja: '未完了', en: 'Not completed' },
    doneGrade: { ja: '完了・判定 {0}', en: 'Completed — grade {0}' },
    stepComplete: { ja: 'ステップ完了　+{0} pt', en: 'Step complete  +{0} pts' },
    gradeS: { ja: '（S 判定）', en: ' (S grade)' },
    lessonComplete: { ja: 'レッスン修了', en: 'Lesson complete' },
    lastStep: { ja: 'レッスンの最後のステップです', en: 'This is the last step of the lesson' },
    lessonProgressLine: { ja: '{0}　·　完了 {1} / {2} ステップ', en: '{0}  ·  {1} of {2} steps completed' },
    backToUnfinished: { ja: '未完了のステップへ', en: 'Back to unfinished steps' },
    nextLesson: { ja: '次のレッスン：{0}', en: 'Next lesson: {0}' },

    /* --- ステップ種別 --- */
    typeSim: { ja: '操作シミュレーション', en: 'Hands-on simulation' },
    typeQuiz: { ja: '理解度クイズ', en: 'Knowledge check' },
    typeChecklist: { ja: 'チェックリスト', en: 'Checklist' },
    typeOrder: { ja: '並べ替え', en: 'Put in order' },
    typeMatch: { ja: '対応付け', en: 'Match pairs' },
    typeInfo: { ja: '解説', en: 'Explanation' },

    /* --- 共通ボタン --- */
    next: { ja: '次へ', en: 'Next' },
    understood: { ja: '理解した', en: 'Got it' },
    retry: { ja: 'もう一度', en: 'Try again' },
    gradeIt: { ja: '採点する', en: 'Check answers' },
    checkIt: { ja: '確認する', en: 'Check' },
    startOver: { ja: 'やり直す', en: 'Start over' },
    nextStep: { ja: '次のステップへ', en: 'Next step' },

    /* --- クイズ --- */
    multiSelect: { ja: '複数選択', en: 'Select all that apply' },
    unanswered: { ja: '未回答の設問があります。', en: 'Some questions are unanswered.' },
    correctOf: { ja: '正解 {0} / {1}', en: '{0} of {1} correct' },

    /* --- チェックリスト --- */
    checkedOf: { ja: '{0} / {1} 完了', en: '{0} of {1} done' },
    checkAllFirst: { ja: 'すべてチェックすると進めます', en: 'Check every item to continue' },
    checkAll: { ja: 'すべてチェック', en: 'Check all' },
    howToVerify: { ja: '確認方法：', en: 'How to verify: ' },
    responsible: { ja: '担当：', en: 'Owner: ' },

    /* --- 並べ替え --- */
    moveUp: { ja: '上へ', en: 'Move up' },
    moveDown: { ja: '下へ', en: 'Move down' },
    orderCorrect: { ja: '正しい順序です', en: 'Correct order' },
    orderWrong: { ja: '順序が違います', en: 'Not the right order' },

    /* --- 対応付け --- */
    matchedOf: { ja: '{0} / {1} 対応付け完了', en: '{0} of {1} matched' },
    selectLeftFirst: { ja: '先に左側の項目を選んでください。', en: 'Select an item on the left first.' },
    matchCorrect: { ja: '正解です。', en: 'Correct.' },
    matchWrong: { ja: 'その組み合わせではありません。', en: 'That is not the right pair.' },
    defaultLeft: { ja: '事象', en: 'Item' },
    defaultRight: { ja: '対処', en: 'Match' },

    /* --- シミュレーター --- */
    taskCounter: { ja: '操作タスク {0} / {1}', en: 'Task {0} of {1}' },
    hint: { ja: 'ヒント', en: 'Hint' },
    hideHint: { ja: 'ヒントを隠す', en: 'Hide hint' },
    realScreen: { ja: '実画面', en: 'Real screen' },
    showAnswer: { ja: '正解を見る', en: 'Show answer' },
    answerIsInput: { ja: 'この操作の対象は画面内の入力欄です。', en: 'The target for this task is an input field on screen.' },
    simCorrect: { ja: '正解です。次の操作へ。', en: 'Correct. On to the next task.' },
    simWrong: {
      ja: 'そこではありません。タスクの指示をもう一度確認してください。',
      en: 'Not there. Re-read the task instruction and try again.'
    },
    simAllDone: { ja: 'すべての操作を完了しました。', en: 'You completed every task.' },
    perfectGrade: { ja: 'S 判定', en: 'S grade' },
    mistakesHints: { ja: 'ミス {0} ／ ヒント {1}', en: '{0} mistakes · {1} hints' },
    inputOk: { ja: '入力 OK', en: 'Input OK' },
    selectOk: { ja: '選択 OK', en: 'Selection OK' },
    enabled: { ja: '有効', en: 'On' },
    disabled: { ja: '無効', en: 'Off' },
    realScreenTitle: { ja: '実際の画面', en: 'Actual screen' },
    realScreenNote: {
      ja: '手順書 v3 の実スクリーンショットです。シミュレーターの画面は操作練習用に簡略化しています。',
      en: 'Actual screenshots from the setup guide v3. The simulator screens are simplified for practice.'
    }
  };

  var lang = 'ja';

  function set(l) { lang = (l === 'en') ? 'en' : 'ja'; }
  function get() { return lang; }

  /* t('stepOf', 2, 7) → 'ステップ 2 / 7' */
  function t(key) {
    var entry = STR[key];
    if (!entry) return key;
    var s = entry[lang] !== undefined ? entry[lang] : entry.ja;
    for (var i = 1; i < arguments.length; i++) {
      s = s.split('{' + (i - 1) + '}').join(String(arguments[i]));
    }
    return s;
  }

  /* {ja, en} 形式の値、または素の文字列を現在の言語で解決する */
  function pick(v) {
    if (v && typeof v === 'object' && (v.ja !== undefined || v.en !== undefined)) {
      return v[lang] !== undefined ? v[lang] : v.ja;
    }
    return v;
  }

  function keys() { return Object.keys(STR); }

  return { t: t, set: set, get: get, pick: pick, keys: keys, STR: STR };
})();
