/* ===== Week 2：棚卸しと Purview での可視化 ===== */
(function () {

  var M365_NAV = window.M365_NAV;

  var PURVIEW_NAV = [
    { id: 'nav:pv.home', label: 'ホーム', icon: 'home' },
    { group: 'ソリューション' },
    { id: 'nav:pv.dspm', label: 'DSPM', icon: 'blocks', level: 2 },
    { id: 'nav:pv.explorer', label: 'アクティビティエクスプローラー', icon: 'search', level: 3 },
    { id: 'nav:pv.audit', label: '監査', icon: 'scroll-text', level: 2 },
    { id: 'nav:pv.dlp', label: 'データ損失防止', icon: 'ban', level: 2 },
    { id: 'nav:pv.irm', label: 'インサイダー リスク管理', icon: 'eye', level: 2 },
    { id: 'nav:pv.cc', label: 'コミュニケーションコンプライアンス', icon: 'bot-message-square', level: 2 },
    { id: 'nav:pv.labels', label: '情報保護', icon: 'tag', level: 2 },
    { group: '設定' },
    { id: 'nav:pv.settings', label: '設定', icon: 'settings', level: 2 }
  ];
  window.PURVIEW_NAV = PURVIEW_NAV;

  /* ---------------- 手順 3 ---------------- */
  A365.addLesson('ja', {
    id: 'w2-1',
    week: 2,
    chapter: '6',
    title: '手順 3：エージェントレジストリによる棚卸し',
    summary: 'ベースラインの記録、フィルターと列、CSV エクスポート、マップ、オーナー不在の抽出',
    steps: [

      {
        type: 'sim',
        title: '6.1 レジストリを開いてベースラインを記録する',
        goal: 'ダッシュボード上部の 4 つの指標を KPI 台帳の「Week 2 時点」に転記する',
        ref: 'image22.png',
        refCaption: 'すべてのエージェント > レジストリ のダッシュボード（実画面）',
        screens: [
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/overview', brand: 'Microsoft 365 管理センター',
            account: 'poc-aiadmin@contoso.com（AI Administrator）',
            nav: M365_NAV, navSel: 'nav:m365.agents.overview',
            crumb: 'ホーム > エージェント > 概要', h1: '概要',
            content: [
              { t: 'banner', text: 'Week 2 は「**記録する**」週です。ブロック・削除は利用者への影響があるため、オーナー確認の前には行いません。' },
              { t: 'tiles', items: [{ id: 'tile:total0', value: '86', label: 'エージェントの合計数' }] }
            ]
          },
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry', brand: 'Microsoft 365 管理センター',
            account: 'poc-aiadmin@contoso.com（AI Administrator）',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント > すべてのエージェント', h1: 'レジストリ',
            content: [
              { t: 'tabs', id: 'reg', sel: 'tab:reg.registry', items: [{ id: 'tab:reg.registry', label: 'レジストリ' }, { id: 'tab:reg.pending', label: '承認待ち' }, { id: 'tab:reg.blocked', label: 'ブロック済み' }] },
              {
                t: 'tiles', items: [
                  { id: 'tile:total', value: '86', label: 'エージェントの合計数' },
                  { id: 'tile:risky', value: '7', label: '危険にさらされているエージェント', tone: 'danger' },
                  { id: 'tile:ownerless', value: '12', label: '所有者のいないエージェント', tone: 'warn' },
                  { id: 'tile:unmanaged', value: '5', label: 'アンマネージドエージェント', tone: 'warn' }
                ]
              },
              { t: 'cmdbar', items: [{ id: 'cmd:add', label: 'エージェントの追加', icon: 'plus' }, { id: 'cmd:customize', label: 'カスタマイズビュー', icon: 'columns-3' }, { id: 'cmd:export', label: 'エクスポート', icon: 'download' }, { id: 'cmd:recordkpi', label: '4 指標を KPI 台帳に転記', icon: 'square-pen' }] },
              {
                t: 'table', cols: ['名前', '状態', '発行元の種類', 'プラットフォーム', 'チャネル', '所有者', 'リスク'],
                rows: [
                  { id: 'row:a1', cells: ['営業支援エージェント', { chip: '使用可能', kind: 'ok' }, 'あなたのユーザー', 'Copilot Studio', 'Teams', 'suzuki@contoso.com', { chip: '中', kind: 'warn' }] },
                  { id: 'row:a2', cells: ['契約レビュー Bot', { chip: '使用可能', kind: 'ok' }, 'あなたの組織', 'Foundry', 'Copilot', 'tanaka@contoso.com', '—'] },
                  { id: 'row:a3', cells: ['人事 FAQ エージェント', { chip: '使用可能', kind: 'ok' }, 'あなたのユーザー', 'エージェントビルダー', 'Copilot', '—', { chip: '高', kind: 'err' }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:kpi', text: '合計 86 ／ リスク 7 ／ オーナー不在 12 ／ 未管理 5 を「Week 2 時点」として台帳に転記しました。Week 4 でこの値と比較します。' }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          { say: '左ナビの **エージェント > すべてのエージェント** を開く', target: 'nav:m365.agents.all', screen: 0, navSel: 'nav:m365.agents.all', hint: '棚卸しに使うのはレジストリです。', done: 'レジストリが開きました。', miss: { 'nav:m365.agents.map': 'マップは 6.4 で使います。まずはレジストリの件数記録からです。' } },
          { say: 'ダッシュボード上部の **4 つの指標を KPI 台帳に転記**する', target: 'cmd:recordkpi', screen: 1, set: { 'panel:kpi': true }, hint: '合計数・リスキー・オーナー不在・未管理の 4 つです。', miss: { 'cmd:export': 'エクスポートは 6.3 で行います。先に 4 指標を記録します。' }, done: 'ベースラインを記録しました。' }
        ],
        wrap: 'この 4 指標が Week 4 の KPI（棚卸し網羅率、オーナー不在件数、未管理件数 など）の基準値になります。'
      },

      {
        type: 'sim',
        title: '6.2 フィルターと列をカスタマイズして内訳を記録する',
        goal: '状態・発行元の種類・プラットフォーム・チャネルで内訳を把握する',
        ref: ['image23.png', 'image24.png'],
        refCaption: 'カスタマイズビューと列の表示（実画面）',
        screens: [
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント > すべてのエージェント', h1: 'レジストリ',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:add', label: 'エージェントの追加', icon: 'plus' }, { id: 'cmd:customize', label: 'カスタマイズビュー', icon: 'columns-3' }, { id: 'cmd:export', label: 'エクスポート', icon: 'download' }] },
              { t: 'p', text: '既定では一部の列しか表示されていません。内訳を記録するために列を追加します。' },
              {
                t: 'table', cols: ['名前', '状態', '所有者'],
                rows: [
                  { id: 'row:b1', cells: ['営業支援エージェント', { chip: '使用可能', kind: 'ok' }, 'suzuki@contoso.com'] },
                  { id: 'row:b2', cells: ['人事 FAQ エージェント', { chip: '使用可能', kind: 'ok' }, '—'] }
                ]
              }
            ]
          },
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント > すべてのエージェント > カスタマイズビュー', h1: '列の表示',
            content: [
              {
                t: 'card', title: '表示する列を選択', children: [
                  {
                    t: 'checks', items: [
                      { id: 'chk:colStatus', label: '状態（使用可能／ブロック済み／使用できません／下書き／アクティブ化されていません）', on: true },
                      { id: 'chk:colPublisher', label: '**発行元の種類**（あなたの組織／あなたのユーザー／Microsoft／サードパーティー）' },
                      { id: 'chk:colPlatform', label: '**プラットフォーム**（Copilot Studio／エージェントビルダー／SharePoint／その他）' },
                      { id: 'chk:colChannel', label: '**チャネル**（Copilot／Teams／Outlook／Microsoft 365 アプリ／SharePoint）' },
                      { id: 'chk:colRisk', label: 'リスク' }
                    ]
                  },
                  { t: 'btns', items: [{ id: 'btn:applycols', label: '適用', prim: true }, { id: 'btn:cancelcols', label: 'キャンセル' }] }
                ]
              }
            ]
          },
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント > すべてのエージェント', h1: 'レジストリ（列を追加した状態）',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:filterPublisher', label: 'フィルター：発行元の種類', icon: 'list-filter' }, { id: 'cmd:filterPlatform', label: 'フィルター：プラットフォーム', icon: 'list-filter' }, { id: 'cmd:export', label: 'エクスポート', icon: 'download' }] },
              {
                t: 'table', cols: ['名前', '状態', '発行元の種類', 'プラットフォーム', 'チャネル'],
                rows: [
                  { id: 'row:c1', cells: ['営業支援エージェント', '使用可能', 'あなたのユーザー', 'Copilot Studio', 'Teams'] },
                  { id: 'row:c2', cells: ['契約レビュー Bot', '使用可能', 'あなたの組織', 'Foundry', 'Copilot'] },
                  { id: 'row:c3', cells: ['人事 FAQ エージェント', '使用可能', 'あなたのユーザー', 'エージェントビルダー', 'Copilot'] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:breakdown', text: '発行元の種類の内訳を記録しました：あなたのユーザー 54／あなたの組織 21／Microsoft 8／サードパーティー 3。「あなたのユーザー」が多いほど、個人作成のエージェントが業務に入り込んでいることを意味します。' }
            ]
          }
        ],
        endScreen: 2,
        tasks: [
          { say: '**カスタマイズビュー** を開く', target: 'cmd:customize', screen: 0, hint: 'コマンドバーにあります。', done: '列の選択画面が開きました。' },
          { say: '**発行元の種類** の列を表示する', target: 'chk:colPublisher', screen: 1, hint: '個人作成のエージェントの多さを測る列です。', done: 'チェックしました。' },
          { say: '**プラットフォーム** の列を表示する', target: 'chk:colPlatform', hint: 'どこで作られているか＝統制の入口を決める材料です。', done: 'チェックしました。' },
          { say: '**チャネル** の列を表示する', target: 'chk:colChannel', hint: 'どのアプリでエージェントが使われているかを示します。', done: 'チェックしました。' },
          { say: '**適用** する', target: 'btn:applycols', hint: '選んだ列を反映します。', done: '列が追加されました。' },
          { say: '**発行元の種類でフィルター**して内訳の件数を記録する', target: 'cmd:filterPublisher', screen: 2, set: { 'panel:breakdown': true }, hint: '4 種類のフィルターそれぞれで件数を記録します。まずは発行元の種類から。', done: '内訳を記録しました。' }
        ],
        wrap: '状態／発行元の種類／プラットフォーム／チャネルの 4 つのフィルターで内訳を記録します。この内訳が「どこから統制するか」の判断材料になります。'
      },

      {
        type: 'sim',
        title: '6.3 CSV をエクスポートして台帳を作る',
        goal: 'All agents を対象に CSV を出力し、規定のファイル名で保存する',
        ref: ['image25.png', 'image26.png'],
        refCaption: 'エクスポートと保存されたファイル（実画面）',
        screens: [
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント > すべてのエージェント', h1: 'レジストリ',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:add', label: 'エージェントの追加', icon: 'plus' }, { id: 'cmd:customize', label: 'カスタマイズビュー', icon: 'columns-3' }, { id: 'cmd:export', label: 'エクスポート', icon: 'download' }] },
              {
                t: 'card', title: 'エクスポートの対象', when: 'panel:exportdlg', children: [
                  {
                    t: 'list', items: [
                      { id: 'opt:allagents', icon: 'file-text', title: '**All agents**', desc: 'レジストリのすべてのエージェントを出力（手順書の指定）' },
                      { id: 'opt:filtered', icon: 'file-text', title: 'Current view', desc: '現在のフィルター結果のみ出力' }
                    ]
                  }
                ]
              },
              { t: 'field', when: 'panel:filename', id: 'fld:csvname', label: '保存するファイル名', placeholder: 'A365_台帳_YYYYMMDD_baseline.csv', help: '手順書の命名規則に従います。日付は 8 桁（例：20261002）。' },
              { t: 'btns', when: 'panel:filename', items: [{ id: 'btn:savecsv', label: '保存', prim: true }] },
              { t: 'banner', kind: 'ok', when: 'panel:csvsaved', text: '保存しました。**以降、変更操作の前には必ず最新の台帳を保存**します。' }
            ]
          }
        ],
        tasks: [
          { say: '**エクスポート** を選択する', target: 'cmd:export', set: { 'panel:exportdlg': true }, hint: 'コマンドバーのエクスポートです。', done: '対象の選択が表示されました。' },
          { say: '対象として **All agents** を選ぶ', target: 'opt:allagents', set: { 'panel:filename': true }, hint: '手順書では All agents を対象に出力します。', miss: { 'opt:filtered': 'フィルター結果だけでは棚卸しの網羅率を測れません。All agents を選びます。' }, done: '全件を対象にしました。' },
          { say: 'ファイル名を手順書の規則どおりに入力する（例：**A365_台帳_20261002_baseline.csv**）', target: 'fld:csvname', pattern: '^A365_台帳_\\d{8}_baseline\\.csv$', hint: '形式は `A365_台帳_YYYYMMDD_baseline.csv` です。日付は 8 桁の数字。', done: '命名規則どおりです。' },
          { say: '**保存** する', target: 'btn:savecsv', set: { 'panel:csvsaved': true }, hint: '最後に保存します。', done: '台帳のベースラインができました。' }
        ],
        wrap: '付録 C の列定義に従って Excel に取り込み、レジストリの列に加えて PoC 用の列（**重点フラグ／担当者／対応状況／備考**）を追加します。パイロットユーザーが利用する・オーナー不在・未管理・高リスクのいずれかに該当するものを「重点エージェント」として印を付けます。'
      },

      {
        type: 'sim',
        title: '6.4-6.5 マップの確認とオーナー不在・未管理の抽出',
        goal: '重点エージェントの接続先を確認し、オーナー不在／未管理を台帳に記録する',
        ref: ['image27.png', 'image28.png', 'image29.png', 'image30.png'],
        refCaption: 'エージェントマップと、オーナー不在／未管理の一覧（実画面）',
        screens: [
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/map', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント', h1: 'エージェント',
            content: [{ t: 'banner', text: '重点エージェントの接続先（ツール、データソース、他のエージェント）と依存関係をマップで確認します。' }]
          },
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/map', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.map',
            crumb: 'ホーム > エージェント > マップ', h1: 'エージェント マップ',
            content: [
              {
                t: 'list', items: [
                  { id: 'map:a1', icon: 'blocks', title: '営業支援エージェント', desc: '接続先：Dynamics 365 / SharePoint（営業資料）', right: '重点', rightKind: 'warn' },
                  { id: 'map:a3', icon: 'blocks', title: '人事 FAQ エージェント', desc: '接続先：**SharePoint（人事）** / Exchange', right: '重点', rightKind: 'warn' },
                  { id: 'map:a2', icon: 'blocks', title: '契約レビュー Bot', desc: '接続先：SharePoint（契約書）' }
                ]
              },
              {
                t: 'card', title: '人事 FAQ エージェント — 依存関係', when: 'panel:mapdetail', children: [
                  { t: 'kv', rows: [['接続ツール', 'SharePoint 検索、Exchange メール送信'], ['データソース', '**人事ポータル（機密）**、社内規程ライブラリ'], ['呼び出す他エージェント', '勤怠照会エージェント'], ['所有者', '**なし**']] },
                  { t: 'banner', kind: 'warn', text: '機密性の高いデータソース（人事）に接続しています。台帳の備考に記録します。' },
                  { t: 'btns', items: [{ id: 'btn:noteSensitive', label: '備考に「人事データ接続」を記録', icon: 'square-pen', prim: true }] }
                ]
              }
            ]
          },
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry', brand: 'Microsoft 365 管理センター',
            nav: M365_NAV, navSel: 'nav:m365.agents.all',
            crumb: 'ホーム > エージェント > すべてのエージェント', h1: 'レジストリ',
            content: [
              {
                t: 'tiles', items: [
                  { id: 'tile:total2', value: '86', label: 'エージェントの合計数' },
                  { id: 'tile:risky2', value: '7', label: '危険にさらされているエージェント', tone: 'danger' },
                  { id: 'tile:ownerless2', value: '12', label: '所有者のいないエージェント', tone: 'warn' },
                  { id: 'tile:unmanaged2', value: '5', label: 'アンマネージドエージェント', tone: 'warn' }
                ]
              },
              {
                t: 'table', when: 'panel:ownerless', cols: ['名前', '作成者', '最終更新日', '利用状況', '所有者'],
                rows: [
                  { id: 'row:o1', cells: ['人事 FAQ エージェント', 'yamada@contoso.com（退職）', '2026-07-15', '週 32 回', { chip: 'なし', kind: 'err' }] },
                  { id: 'row:o2', cells: ['旧 問い合わせ Bot', 'ito@contoso.com（異動）', '2026-03-02', '週 1 回', { chip: 'なし', kind: 'err' }] }
                ]
              },
              { t: 'banner', kind: 'warn', when: 'panel:ownerless', text: 'この時点では **削除・ブロックは行いません**。Week 3 で新オーナーを割り当てます。' },
              { t: 'btns', when: 'panel:ownerless', items: [{ id: 'btn:recordOwnerless', label: '台帳に「オーナー不在」として記録', icon: 'square-pen', prim: true }] },
              { t: 'banner', kind: 'ok', when: 'panel:recorded', text: '記録しました。同様に **アンマネージドエージェント** もクリックして一覧を記録します（接続されたプラットフォームがない場合は表示されません）。' }
            ]
          }
        ],
        endScreen: 2,
        tasks: [
          { say: '左ナビの **エージェント > マップ** を開く', target: 'nav:m365.agents.map', screen: 0, navSel: 'nav:m365.agents.map', hint: '接続先と依存関係を見る画面です。', done: 'マップが開きました。' },
          { say: '機密データに接続していそうな **人事 FAQ エージェント** を選ぶ', target: 'map:a3', screen: 1, set: { 'panel:mapdetail': true }, hint: '人事・財務など機密性の高いデータソースに接続しているエージェントを探します。', done: '依存関係が表示されました。' },
          { say: '備考に **機密データソースへの接続**を記録する', target: 'btn:noteSensitive', hint: '台帳の備考欄に記録します。', done: '記録しました。' },
          { say: 'レジストリに戻り、**所有者のいないエージェント** のタイルをクリックする', target: 'nav:m365.agents.all', screen: 2, navSel: 'nav:m365.agents.all', hint: 'まず左ナビでレジストリに戻ります。', done: 'レジストリに戻りました。' },
          { say: '**所有者のいないエージェント**（12）のタイルをクリックして一覧を表示する', target: 'tile:ownerless2', set: { 'panel:ownerless': true }, hint: 'ダッシュボードのタイルはフィルターとして機能します。', miss: { 'tile:risky2': 'リスクの確認は Week 3 で行います。ここではオーナー不在を抽出します。', 'tile:unmanaged2': '順番としてはまずオーナー不在からです（この後に未管理も確認します）。' }, done: 'オーナー不在の一覧が表示されました。' },
          { say: '作成者・最終更新日・利用状況を確認し、**台帳に「オーナー不在」として記録**する', target: 'btn:recordOwnerless', set: { 'panel:recorded': true }, hint: 'この時点では削除・ブロックはしません。', done: '記録しました。' }
        ],
        wrap: '**6.6（任意）**：定期棚卸しを自動化する場合は、AI Administrator の権限で Microsoft Graph の `copilotPackages` API（プレビュー）からエージェント一覧を取得できます。PoC ではエクスポート CSV で十分です。'
      },

      {
        type: 'quiz',
        title: '棚卸しの理解度チェック',
        goal: 'Week 2 の「記録する」作業の意味を確認する',
        questions: [
          {
            q: 'レジストリのダッシュボードで記録する 4 つの指標はどれですか。',
            multi: true,
            choices: ['エージェントの合計数', '危険にさらされているエージェント', '所有者のいないエージェント', 'アンマネージドエージェント', '承認済みエージェント'],
            answer: [0, 1, 2, 3],
            explain: 'この 4 つを「Week 2 時点」として KPI 台帳に転記し、Week 4 の最終値と比較します。'
          },
          {
            q: '発行元の種類で「あなたのユーザー」が多い場合、何が読み取れますか。',
            choices: ['Microsoft 製のエージェントが多い', '個人が作成したエージェントが業務に入り込んでいる', 'サードパーティー製が多い', 'エージェントが使われていない'],
            answer: [1],
            explain: '統制の入口（どのプラットフォームから作られているか）とあわせて確認します。'
          },
          {
            q: 'Week 2 の時点でオーナー不在のエージェントに対して行う作業はどれですか。',
            choices: ['すぐにブロックする', 'すぐに削除する', '台帳に記録するのみ', '新オーナーを割り当てる'],
            answer: [2],
            explain: 'Week 2 は「記録する」週です。新オーナーの割り当ては Week 3（8.2）で行います。削除はスポンサー確認後にのみ行います。'
          },
          {
            q: 'CSV エクスポートのファイル名として手順書が指定している形式はどれですか。',
            choices: ['agents.csv', 'A365_台帳_YYYYMMDD_baseline.csv', 'export_2026.csv', 'registry_dump.csv'],
            answer: [1],
            explain: '最終日には `A365_台帳_YYYYMMDD_final.csv` として出力し、ベースラインと比較します。'
          },
          {
            q: 'エージェントマップで確認する内容はどれですか。',
            multi: true,
            choices: ['接続先のツール', '接続先のデータソース', '他のエージェントとの依存関係', 'ライセンスの請求額'],
            answer: [0, 1, 2],
            explain: '機密性の高いデータソース（人事、財務など）に接続しているエージェントは台帳の備考に記録します。'
          }
        ]
      }
    ]
  });

  /* ---------------- 手順 4 ---------------- */
  A365.addLesson('ja', {
    id: 'w2-2',
    week: 2,
    chapter: '7',
    title: '手順 4：Purview DSPM の確認と検知ポリシー',
    summary: 'AI 観測可能性、監査、Risky AI usage、DLP（監査モード）',
    steps: [

      {
        type: 'sim',
        title: '7.1-7.2 AI 観測可能性と監査を確認する',
        goal: '活動のあるエージェントのリスクを把握し、対話の証跡が取れることを確認する',
        ref: ['image31.png', 'image32.png'],
        refCaption: 'DSPM > AI 観測可能性 と 監査（実画面）',
        screens: [
          {
            portal: 'purview', url: 'https://purview.microsoft.com/', brand: 'Microsoft Purview',
            account: 'poc-compadmin@contoso.com（Compliance Administrator）',
            nav: PURVIEW_NAV, navSel: 'nav:pv.home',
            crumb: 'ホーム', h1: 'Microsoft Purview',
            content: [{ t: 'banner', text: 'Compliance Administrator でサインインしています。' }]
          },
          {
            portal: 'purview', url: 'https://purview.microsoft.com/dspm/aiobservability', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.dspm',
            crumb: 'DSPM', h1: 'DSPM',
            content: [
              {
                t: 'list', items: [
                  { id: 'pv:overview', icon: 'chart-column', title: '概要', desc: 'AI 利用状況のサマリー' },
                  { id: 'pv:aiobs', icon: 'telescope', title: '**AI 観測可能性（AI observability）**', desc: '過去 30 日間に活動のあるエージェントをリスク順に表示' },
                  { id: 'pv:policies', icon: 'scroll-text', title: 'ポリシー', desc: '推奨ポリシーの適用' }
                ]
              }
            ]
          },
          {
            portal: 'purview', url: 'https://purview.microsoft.com/dspm/aiobservability', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.dspm',
            crumb: 'DSPM > AI 観測可能性', h1: 'AI 観測可能性',
            desc: '過去 30 日間に活動のあるエージェントがリスク順に表示されます。',
            content: [
              {
                t: 'table', cols: ['エージェント', 'リスク', '主なリスクの種類', '活動数（30 日）'],
                rows: [
                  { id: 'row:p1', cells: ['**人事 FAQ エージェント**', { chip: '高', kind: 'err' }, '過剰共有', '412'] },
                  { id: 'row:p2', cells: ['営業支援エージェント', { chip: '中', kind: 'warn' }, '持ち出し', '288'] },
                  { id: 'row:p3', cells: ['契約レビュー Bot', { chip: '低', kind: 'ok' }, '不適切な利用', '96'] }
                ]
              },
              {
                t: 'card', title: '人事 FAQ エージェント — 詳細', when: 'panel:pvdetail', children: [
                  { t: 'kv', rows: [['Entra の状態', '有効'], ['作成日', '2026-05-12'], ['オーナー', '**なし**'], ['エージェントのユーザー ID', 'agent-hrfaq@contoso.com'], ['推奨される是正策', 'オーナーの割り当て／共有範囲の見直し']] },
                  { t: 'btns', items: [{ id: 'btn:pvrecord', label: '台帳に記録', icon: 'square-pen', prim: true }] }
                ]
              }
            ]
          },
          {
            portal: 'purview', url: 'https://purview.microsoft.com/audit/auditsearch', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.audit',
            crumb: '監査', h1: '監査の検索',
            content: [
              { t: 'select', id: 'sel:activity', label: 'アクティビティ', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'agent', label: 'エージェントとの対話（人⇔エージェント、エージェント⇔ツール、エージェント間）' }, { v: 'signin', label: 'サインイン アクティビティ' }, { v: 'file', label: 'ファイル操作' }] },
              { t: 'btns', items: [{ id: 'btn:auditsearch', label: '検索', prim: true }] },
              {
                t: 'table', when: 'panel:auditres', cols: ['日時', 'ユーザー', 'アクティビティ', '対象'],
                rows: [
                  { cells: ['2026-10-01 10:22', 'sato@contoso.com', '人からエージェント（プロンプト送信）', '人事 FAQ エージェント'] },
                  { cells: ['2026-10-01 10:22', 'agent-hrfaq@contoso.com', 'エージェントからツール（SharePoint 検索）', '人事ポータル'] },
                  { cells: ['2026-10-01 10:23', 'agent-hrfaq@contoso.com', 'エージェントから人（応答）', 'sato@contoso.com'] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:auditres', text: '人⇔エージェント、エージェント⇔ツール、エージェント間の対話が記録されています。検索結果の一例を保存し、証跡が取れることの確認記録とします。' }
            ]
          }
        ],
        endScreen: 3,
        tasks: [
          { say: '左ナビの **DSPM** を開く', target: 'nav:pv.dspm', screen: 0, navSel: 'nav:pv.dspm', hint: 'ソリューションの一覧にあります。', done: 'DSPM が開きました。' },
          { say: '**AI 観測可能性** を開く', target: 'pv:aiobs', screen: 1, hint: '過去 30 日間の活動をリスク順に見る画面です。', done: 'AI 観測可能性が開きました。' },
          { say: '最もリスクの高い **人事 FAQ エージェント** の詳細を開く', target: 'row:p1', screen: 2, set: { 'panel:pvdetail': true }, hint: 'リスク順に並んでいます。一番上の行です。', done: '詳細が表示されました。' },
          { say: '詳細（Entra の状態、作成日、オーナー、推奨される是正策）を **台帳に記録**する', target: 'btn:pvrecord', hint: '重点エージェントの情報は必ず台帳に残します。', done: '記録しました。' },
          { say: '左ナビの **監査** を開く', target: 'nav:pv.audit', screen: 3, navSel: 'nav:pv.audit', hint: '操作証跡を確認します。', done: '監査の検索が開きました。' },
          { say: 'アクティビティで **エージェントとの対話** を選ぶ', target: 'sel:activity', equals: 'agent', hint: '人⇔エージェント、エージェント⇔ツール、エージェント間の対話です。', done: '選択しました。' },
          { say: '**検索** を実行して証跡が記録されていることを確認する', target: 'btn:auditsearch', set: { 'panel:auditres': true }, hint: '検索を実行します。', done: '証跡を確認できました。' }
        ],
        wrap: '監査が無効だとエージェントの操作証跡が取れません。Week 0 のチェック項目 7 で有効化を確認済みであることが前提です。'
      },

      {
        type: 'sim',
        title: '7.3 インサイダーリスク：Risky AI usage ポリシーを作る',
        goal: 'クイックポリシーで Risky AI usage を作成し、対象をパイロットグループに限定する',
        ref: ['image33.png', 'image34.png', 'image35.png'],
        refCaption: 'クイックポリシーと Risky AI usage テンプレート（実画面）',
        screens: [
          {
            portal: 'purview', url: 'https://purview.microsoft.com/insiderriskmanagement', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.irm',
            crumb: 'インサイダー リスク管理', h1: 'インサイダー リスク管理',
            content: [
              {
                t: 'list', items: [
                  { id: 'irm:alerts', icon: 'bell', title: 'アラート', desc: '検知されたアラートの確認' },
                  { id: 'irm:policies', icon: 'scroll-text', title: '**ポリシー**', desc: 'ポリシーの作成と管理' },
                  { id: 'irm:cases', icon: 'folder-archive', title: 'ケース', desc: '調査中のケース' }
                ]
              }
            ]
          },
          {
            portal: 'purview', url: 'https://purview.microsoft.com/insiderriskmanagement/policies', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.irm',
            crumb: 'インサイダー リスク管理 > ポリシー', h1: 'ポリシー',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:newpolicy', label: 'ポリシーの作成', icon: 'plus' }] },
              {
                t: 'list', when: 'panel:newpol', items: [
                  { id: 'pol:quick', icon: 'zap', title: '**クイック ポリシー**', desc: 'テンプレートから素早く作成する（手順書の指定）' },
                  { id: 'pol:custom', icon: 'wrench', title: 'カスタム ポリシー', desc: '条件を個別に設定する' }
                ]
              }
            ]
          },
          {
            portal: 'purview', url: 'https://purview.microsoft.com/insiderriskmanagement/policies/new', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.irm',
            crumb: 'インサイダー リスク管理 > ポリシー > 新規', h1: 'テンプレートの選択',
            content: [
              {
                t: 'list', items: [
                  { id: 'tpl:risky', icon: 'blocks', title: '**Risky AI usage**', desc: 'プロンプトインジェクションの試行、保護された素材へのアクセスなどを検知' },
                  { id: 'tpl:leaks', icon: 'upload', title: 'Data leaks', desc: '機密データの持ち出しを検知' },
                  { id: 'tpl:departing', icon: 'door-open', title: 'Departing employee data theft', desc: '退職予定者によるデータ持ち出しを検知' }
                ]
              },
              {
                t: 'card', title: 'ポリシーの設定', when: 'panel:polcfg', children: [
                  { t: 'select', id: 'sel:scope', label: '対象ユーザー', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'all', label: '組織内のすべてのユーザー' }, { v: 'pilot', label: 'SG-Agent365-Pilot（パイロット用セキュリティグループ）' }] },
                  { t: 'checks', items: [{ id: 'chk:detectInj', label: 'プロンプトインジェクションの試行', on: true }, { id: 'chk:detectProt', label: '保護された素材へのアクセス', on: true }] },
                  { t: 'btns', items: [{ id: 'btn:createpol', label: 'ポリシーを作成', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:polcreated', text: '作成しました。**PoC 期間中はアラートの確認のみ**を行います。' }
            ]
          }
        ],
        endScreen: 2,
        tasks: [
          { say: '左ナビの **インサイダー リスク管理** を開く', target: 'nav:pv.irm', screen: 0, navSel: 'nav:pv.irm', hint: 'Purview のソリューション一覧にあります。', done: '開きました。' },
          { say: '**ポリシー** を開く', target: 'irm:policies', hint: 'アラートではなくポリシーの作成に進みます。', done: 'ポリシー一覧が開きました。' },
          { say: '**ポリシーの作成** を選ぶ', target: 'cmd:newpolicy', screen: 1, set: { 'panel:newpol': true }, hint: 'コマンドバーにあります。', done: '作成方法の選択が表示されました。' },
          { say: '**クイック ポリシー** を選ぶ', target: 'pol:quick', hint: '手順書ではクイックポリシーを使います。', miss: { 'pol:custom': '手順書の指定はクイックポリシーです。' }, done: 'テンプレートの選択に進みました。' },
          { say: 'テンプレートで **Risky AI usage** を選ぶ', target: 'tpl:risky', screen: 2, set: { 'panel:polcfg': true }, hint: 'AI 利用に関するリスクのテンプレートです。', miss: { 'tpl:leaks': 'Data leaks は一般的な情報漏えい向けです。AI 利用のテンプレートを選びます。' }, done: '設定画面が表示されました。' },
          { say: '対象ユーザーに **パイロット用セキュリティグループ** を指定する', target: 'sel:scope', equals: 'pilot', hint: '本番テナントでの実施です。対象は必ずパイロットグループに限定します。', done: '対象を限定しました。' },
          { say: '検知対象を確認して **ポリシーを作成** する', target: 'btn:createpol', set: { 'panel:polcreated': true }, hint: 'プロンプトインジェクションの試行、保護された素材へのアクセスなどを確認します。', done: '作成しました。' }
        ],
        wrap: 'PoC 期間中は **アラートの確認のみ**です。1 週間運用し、アラートの内容を Week 3 のレビューで確認します。'
      },

      {
        type: 'sim',
        title: '7.4 DLP をシミュレーションモードで構成する',
        goal: '対象グループと機密情報の種類を設定し、追加の DLP ポリシーを強制せずに評価する',
        ref: ['image36.png', 'image37.png', 'image38.png', 'image39.png', 'image40.png', 'image41.png', 'image42.png', 'image43.png'],
        refCaption: 'DLP の開始、対象設定、追加ポリシー、シミュレーションモード（実画面）',
        screens: [
          {
            portal: 'purview', url: 'https://purview.microsoft.com/datalossprevention/policies', brand: 'Microsoft Purview',
            nav: PURVIEW_NAV, navSel: 'nav:pv.dlp',
            crumb: 'データ損失防止 > ポリシー', h1: 'DLP ポリシー',
            content: [
              { t: 'banner', text: '既存ポリシーがエージェントとの対話を対象としているか確認します。未構成の場合は「始める」から設定します。' },
              { t: 'btns', items: [{ id: 'btn:startdlp', label: '始める', prim: true }] },
              {
                t: 'card', title: 'ユーザーとグループ', when: 'panel:dlpstart', children: [
                  { t: 'select', id: 'sel:startscope', label: '対象グループ', options: [{ v: '', label: '（選択してください）' }, { v: 'pilot', label: 'SG-Agent365-Pilot（パイロット用セキュリティグループ）' }, { v: 'all', label: '組織全体' }] },
                  { t: 'select', id: 'sel:sit', label: '機密情報の種類', options: [{ v: '', label: '（選択してください）' }, { v: 'credit', label: 'クレジットカード番号' }, { v: 'none', label: '指定しない' }] },
                  { t: 'btns', items: [{ id: 'btn:saveinitial', label: '設定を保存', prim: true }] }
                ]
              },
              { t: 'cmdbar', when: 'panel:dlpinitial', items: [{ id: 'cmd:newdlp', label: 'ポリシーの作成', icon: 'plus' }] },
              {
                t: 'table', when: 'panel:dlpinitial', cols: ['ポリシー名', '場所', 'モード'],
                rows: [
                  { cells: ['機密情報の利用状況の確認', 'SG-Agent365-Pilot', { chip: 'シミュレーション', kind: 'ok' }] }
                ]
              },
              {
                t: 'card', title: '新しい DLP ポリシー', when: 'panel:dlpnew', children: [
                  { t: 'field', id: 'fld:dlpname', label: 'ポリシー名', placeholder: 'A365-PoC-Agent-DLP-Audit', help: 'PoC 用と分かる命名にします。' },
                  { t: 'checks', items: [{ id: 'chk:locTeams', label: 'Teams チャットとチャネル メッセージ' }, { id: 'chk:locOD', label: 'OneDrive' }, { id: 'chk:locSP', label: 'SharePoint' }, { id: 'chk:locMail', label: 'Exchange メール' }] },
                  { t: 'select', id: 'sel:dlpscope', label: 'スコープ', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'all', label: '組織全体' }, { v: 'pilot', label: 'SG-Agent365-Pilot に限定' }] },
                  { t: 'select', id: 'sel:dlpaction', label: 'ポリシーモード', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'block', label: 'ポリシーをすぐに有効にする' }, { v: 'simulation', label: 'シミュレーションモードでポリシーを実行する' }, { v: 'off', label: 'ポリシーをオフのままにする' }] },
                  { t: 'btns', items: [{ id: 'btn:createdlp', label: '作成', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:dlpcreated', text: 'シミュレーションモードで作成しました。強制せずに影響を評価し、1 週間運用して Week 3 のレビューでアラートを確認します。' }
            ]
          }
        ],
        tasks: [
          { say: '未構成の DLP で **始める** を選ぶ', target: 'btn:startdlp', set: { 'panel:dlpstart': true }, hint: '既存ポリシーの対象を確認したうえで、未構成の場合に開始します。', done: '対象設定が開きました。' },
          { say: 'ユーザーとグループを **パイロットグループ** に限定する', target: 'sel:startscope', equals: 'pilot', hint: '組織全体には広げません。', done: '対象を限定しました。' },
          { say: '機密情報の種類として **クレジットカード番号** を選ぶ', target: 'sel:sit', equals: 'credit', hint: '検知したい機密情報の種類を指定します。', done: '機密情報の種類を指定しました。' },
          { say: '**設定を保存**する', target: 'btn:saveinitial', set: { 'panel:dlpinitial': true }, hint: '対象と検知内容を保存します。', done: '初期設定を保存しました。' },
          { say: '追加の設定が必要な場合に **ポリシーの作成** を選ぶ', target: 'cmd:newdlp', set: { 'panel:dlpnew': true }, hint: '場所とスコープを確認して追加ポリシーを構成します。', done: '作成画面が開きました。' },
          { say: 'ポリシー名に **A365-PoC** で始まる名前を入力する', target: 'fld:dlpname', pattern: '^A365-PoC', hint: '例：`A365-PoC-Agent-DLP-Audit`。撤収時に見分けられる名前にします。', done: 'PoC 用と分かる名前です。' },
          { say: '場所として **Teams** を選ぶ', target: 'chk:locTeams', hint: 'エージェントとの対話を対象にします。', done: 'Teams を選びました。' },
          { say: '場所として **OneDrive** を選ぶ', target: 'chk:locOD', hint: '必要なデータの場所を選びます。', done: 'OneDrive を選びました。' },
          { say: '場所として **SharePoint** を選ぶ', target: 'chk:locSP', hint: '必要なデータの場所を選びます。', done: 'SharePoint を選びました。' },
          { say: '場所として **Exchange メール** を選ぶ', target: 'chk:locMail', hint: 'メールの対話も対象に含めます。', done: 'Exchange メールを選びました。' },
          { say: 'スコープを **パイロットグループに限定**する', target: 'sel:dlpscope', equals: 'pilot', hint: '本番テナントのため、場所とスコープはパイロットグループに限定します。', done: '限定しました。' },
          { say: 'ポリシーモードを **シミュレーションモード** にする', target: 'sel:dlpaction', equals: 'simulation', hint: '手順書の画面上の名称はシミュレーションモードです。強制せずに影響を評価します。', done: 'シミュレーションモードにしました。' },
          { say: '**作成** する', target: 'btn:createdlp', set: { 'panel:dlpcreated': true }, hint: '最後に作成します。', done: '作成しました。' }
        ],
        wrap: '**注意**：エージェントは DLP のブロックを認識できないため、ブロックに切り替えるのはオーナーが監視できる体制ができてからにします。秘密度ラベルで暗号化されたファイルを扱うエージェントには、エージェントインスタンスに **VIEW と EXTRACT** の使用権限を明示的に付与する必要があります。'
      },

      {
        type: 'quiz',
        title: 'Purview の理解度チェック',
        goal: '監査モード運用の理由と前提を確認する',
        questions: [
          {
            q: 'PoC 期間中の DLP ポリシーモードとして選ぶものはどれですか。',
            choices: ['ポリシーをすぐに有効にする', 'シミュレーションモードでポリシーを実行する', '削除', '暗号化'],
            answer: [1],
            explain: 'シミュレーションモードで影響を評価します。エージェントは DLP のブロックを認識できないため、有効化はオーナーが監視できる体制と切替条件を確認してから判断します。'
          },
          {
            q: '秘密度ラベルで暗号化されたファイルをエージェントが扱えるようにするために必要な使用権限はどれですか。',
            multi: true,
            choices: ['VIEW', 'EXTRACT', 'PRINT', 'OWNER'],
            answer: [0, 1],
            explain: 'エージェントインスタンスに VIEW と EXTRACT を明示的に付与し、ファイルを明示的に共有します。'
          },
          {
            q: 'Purview の監査で確認する「エージェントとの対話」に含まれないものはどれですか。',
            choices: ['人からエージェント', 'エージェントから人', 'エージェントからツール', 'ライセンスの購入履歴'],
            answer: [3],
            explain: '人⇔エージェント、エージェント⇔ツール、エージェント間の 4 種類の対話が記録されます。'
          },
          {
            q: 'Risky AI usage テンプレートで対象ユーザーに指定するものはどれですか。',
            choices: ['組織内のすべてのユーザー', 'パイロット用セキュリティグループ', '管理者のみ', '外部ユーザー'],
            answer: [1],
            explain: '本番テナントでの実施のため、対象は必ずパイロット用セキュリティグループに限定します。'
          },
          {
            q: 'Registry のリスク件数と Defender / Purview の表示が一致しない場合の対処はどれですか。',
            choices: ['テナントを再作成する', '時間をおいて再確認し、判断は発生元のポータルで行う', 'ライセンスを追加する', 'ポリシーを削除する'],
            answer: [1],
            explain: 'ポータル間の反映には最大 1 時間の遅延があります（14 章）。'
          }
        ]
      }
    ]
  });

})();
