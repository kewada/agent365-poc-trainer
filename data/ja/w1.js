/* ===== Week 1：有効化確認とローカルエージェント検出 ===== */
(function () {

  var M365_NAV = [
    { id: 'nav:m365.home', label: 'ホーム', icon: 'home' },
    { id: 'nav:m365.users', label: 'ユーザー', icon: 'user' },
    { id: 'nav:m365.teams', label: 'チームとグループ', icon: 'users' },
    { group: 'エージェント' },
    { id: 'nav:m365.agents.overview', label: '概要', icon: 'chart-column', level: 2 },
    { id: 'nav:m365.agents.all', label: 'すべてのエージェント', icon: 'blocks', level: 2 },
    { id: 'nav:m365.agents.map', label: 'マップ', icon: 'map', level: 2 },
    { group: '課金情報' },
    { id: 'nav:m365.billing.lic', label: 'ライセンス', icon: 'receipt', level: 2 },
    { id: 'nav:m365.settings', label: '設定', icon: 'settings' }
  ];
  var DEF_NAV = [
    { id: 'nav:def.home', label: 'ホーム', icon: 'home' },
    { id: 'nav:def.incidents', label: 'インシデントとアラート', icon: 'siren' },
    { id: 'nav:def.hunting', label: '高度なハンティング', icon: 'scan-search' },
    { group: '資産' },
    { id: 'nav:def.devices', label: 'デバイス', icon: 'laptop', level: 2 },
    { group: 'セットアップと構成' },
    { id: 'nav:def.settings', label: '設定', icon: 'settings', level: 2 },
    { id: 'nav:def.settings.ai', label: 'AI のセキュリティ', icon: 'blocks', level: 3 }
  ];
  var PPAC_NAV = [
    { id: 'nav:ppac.home', label: 'ホーム', icon: 'home' },
    { group: '管理' },
    { id: 'nav:ppac.envs', label: '環境', icon: 'globe', level: 2 },
    { id: 'nav:ppac.billing', label: '課金', icon: 'receipt', level: 2 },
    { group: 'セキュリティ' },
    { id: 'nav:ppac.sec.overview', label: '概要', icon: 'chart-column', level: 2 },
    { id: 'nav:ppac.sec.threat', label: '脅威の検出', icon: 'shield-check', level: 2 },
    { id: 'nav:ppac.sec.dlp', label: 'ポリシー', icon: 'scroll-text', level: 2 }
  ];
  window.M365_NAV = M365_NAV;
  window.DEF_NAV = DEF_NAV;
  window.PPAC_NAV = PPAC_NAV;

  var APPID = '7c91a4e2-3b15-4d8f-9a06-5e2d71c4b8f3';

  /* ---------------- Lesson: 手順1 ---------------- */
  A365.addLesson('ja', {
    id: 'w1-1',
    week: 1,
    chapter: '4',
    title: '手順 1：Agent 365 の有効化確認',
    summary: 'M365 管理センターでエージェントメニューと概要ペインを確認し、Week 1 開始時点を記録する',
    steps: [
      {
        type: 'sim',
        title: 'エージェント > 概要 を開いてベースラインを記録する',
        goal: 'AI Administrator でサインインし、エージェントの概要ペインが表示されることを確認する',
        ref: 'image3.png',
        refCaption: 'Microsoft 365 管理センター > エージェント > 概要（実画面）',
        screens: [
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/', brand: 'Microsoft 365 管理センター',
            account: 'poc-aiadmin@contoso.com（AI Administrator）',
            nav: M365_NAV, navSel: 'nav:m365.home',
            crumb: 'ホーム', h1: 'Microsoft 365 管理センター',
            desc: 'AI Administrator でサインインしています。エージェントの状況を確認しましょう。',
            content: [
              { t: 'banner', text: '**エージェント** メニューが表示されない場合はロール不足かライセンス未割り当てです（12 章）。' },
              {
                t: 'tiles', items: [
                  { id: 'tile:users', value: '1,248', label: 'アクティブ ユーザー' },
                  { id: 'tile:devices', value: '1,102', label: '管理対象デバイス' },
                  { id: 'tile:lic', value: '14', label: '割り当て可能なライセンス' }
                ]
              }
            ]
          },
          {
            portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/overview', brand: 'Microsoft 365 管理センター',
            account: 'poc-aiadmin@contoso.com（AI Administrator）',
            nav: M365_NAV, navSel: 'nav:m365.agents.overview',
            crumb: 'ホーム > エージェント > 概要', h1: '概要',
            desc: '組織内のエージェントの状況をまとめて確認できます。',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:refresh', label: '更新', icon: 'refresh-cw' }, { id: 'cmd:screenshot', label: 'このペインを記録（スクリーンショット）', icon: 'camera' }] },
              {
                t: 'tiles', items: [
                  { id: 'tile:total', value: '86', label: 'エージェントの合計数' },
                  { id: 'tile:risky', value: '7', label: '危険にさらされているエージェント', tone: 'danger' },
                  { id: 'tile:ownerless', value: '12', label: '所有者のいないエージェント', tone: 'warn' },
                  { id: 'tile:unmanaged', value: '5', label: 'アンマネージドエージェント', tone: 'warn' },
                  { id: 'tile:pending', value: '3', label: '承認待ち' }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:rec', text: 'Week 1 開始時点の記録として保存しました。Week 4 の KPI 測定でこの値と比較します。' }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          {
            say: '左ナビの **エージェント > 概要** を開く', target: 'nav:m365.agents.overview', screen: 0,
            navSel: 'nav:m365.agents.overview',
            hint: '左のナビゲーションに「エージェント」グループがあります。その先頭の項目です。',
            done: '概要ペインが表示されました。',
            miss: {
              'nav:m365.agents.all': 'すべてのエージェント（レジストリ）は Week 2 の棚卸しで使います。まずは概要です。',
              'nav:m365.billing.lic': 'ライセンスの数量確認は Week 0 のチェック項目です。ここでは有効化の確認を行います。'
            }
          },
          {
            say: 'エージェントの件数・リスク・承認待ちが表示されていることを確認し、**このペインを記録** する',
            target: 'cmd:screenshot', screen: 1, set: { 'panel:rec': true },
            hint: '手順書では「概要ペインのスクリーンショットを取得し、Week 1 の開始時点の記録として保存する」とあります。',
            done: 'ベースラインを記録できました。'
          }
        ],
        wrap: '概要が表示されない場合は 12 章（トラブルシューティング）を参照します。AI Administrator でサインインしているか、PIM でロールをアクティブ化しているかを確認してください。'
      },
      {
        type: 'checklist',
        title: '4.3 確認ポイント',
        goal: '手順 1 の完了条件を満たしているか確認する',
        key: 'w1-1-check',
        intro: '次の 3 点が満たされていれば手順 1 は完了です。',
        items: [
          { text: '**エージェント** メニューが表示され、**概要** と **すべてのエージェント（レジストリ）** が開ける' },
          { text: 'ライセンスの割り当てエラーがない', how: 'Entra 管理センター > グループ > ライセンス' },
          { text: 'PIM でアクティブ化したロールが有効な間に作業している', how: 'Entra 管理センター > ID ガバナンス > PIM' }
        ]
      }
    ]
  });

  /* ---------------- Lesson: 手順2 ---------------- */
  A365.addLesson('ja', {
    id: 'w1-2',
    week: 1,
    chapter: '5',
    title: '手順 2：Defender のオンボードとローカルエージェントの検出',
    summary: 'Security for AI のオンボード、M365 コネクタ、Copilot Studio 連携、ローカルエージェント検出',
    steps: [

      {
        type: 'info',
        title: '5.1 前提の確認',
        goal: 'この手順を始める前に満たすべき条件を押さえる',
        body: [
          {
            ul: [
              '4 章の手順で **Agent 365 が有効**になっていること',
              '**Security Administrator 以上**のロールでサインインすること',
              'ローカルエージェントの保護には、パイロット端末で **Defender for Endpoint がアクティブモード**であること',
              '**Copilot Studio を利用している場合は Power Platform 管理者と作業日を合わせる**こと'
            ]
          },
          { note: 'このレッスンでは Defender ポータル → PowerShell → Power Platform 管理センター → Defender ポータルと、複数のポータルを行き来します。流れを先に掴んでおくと迷いません。' },
          {
            table: {
              head: ['#', '作業', 'ポータル／ツール'],
              rows: [
                ['1', 'Security for AI のオンボード開始とデータ収集の確認', 'Defender ポータル'],
                ['2', 'Microsoft 365 コネクタの接続', 'Defender ポータル'],
                ['3', 'Copilot Studio のリアルタイム保護をオンにし、エンドポイント URL を控える', 'Defender ポータル'],
                ['4', 'Entra にアプリ登録（PowerShell スクリプト）してアプリ ID を取得', 'PowerShell'],
                ['5', 'アプリ ID を Defender のウィザードに貼り付けて保存', 'Defender ポータル'],
                ['6', 'Microsoft Defender 連携を環境ごとに有効化', 'Power Platform 管理センター'],
                ['7', 'すべてのステップが完了／接続済みになったことを確認', 'Defender ポータル'],
                ['8', '検出されたローカルエージェントを台帳に記録', 'Defender ポータル']
              ]
            }
          }
        ]
      },

      {
        type: 'sim',
        title: '5.2-A Security for AI を開き、データ収集を確認する',
        goal: 'Defender ポータルでオンボードを開始し、データ収集が有効であることを確認する',
        ref: ['image4.png', 'image5.png', 'image6.png'],
        refCaption: '開始画面／設定 > AI のセキュリティ／データ収集の有効トグル（実画面）',
        screens: [
          {
            portal: 'defender', url: 'https://security.microsoft.com/', brand: 'Microsoft Defender',
            account: 'poc-secadmin@contoso.com（Security Administrator）',
            nav: DEF_NAV, navSel: 'nav:def.home',
            crumb: 'ホーム', h1: 'Microsoft Defender security for AI',
            content: [
              {
                t: 'card', title: 'AI のセキュリティを開始する', children: [
                  { t: 'p', text: '組織内の AI エージェントの検出、保護、監視を開始します。' },
                  { t: 'btns', items: [{ id: 'btn:getstarted', label: '開始する', prim: true }, { id: 'btn:later', label: '後で' }] }
                ]
              }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            account: 'poc-secadmin@contoso.com（Security Administrator）',
            nav: DEF_NAV, navSel: 'nav:def.home',
            crumb: 'ホーム', h1: 'Microsoft Defender security for AI',
            desc: 'オンボードを開始しました。設定画面から AI のセキュリティを開きます。',
            content: [
              { t: 'banner', kind: 'ok', text: 'オンボードを開始しました。続けて **セットアップと構成 > 設定 > AI のセキュリティ** を開きます。' }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            account: 'poc-secadmin@contoso.com（Security Administrator）',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ', h1: 'AI のセキュリティ',
            content: [
              { t: 'tabs', id: 'ai', sel: 'tab:ai.setup', items: [
                { id: 'tab:ai.setup', label: 'セットアップ' },
                { id: 'tab:ai.rules', label: 'ポリシーとルール' },
                { id: 'tab:ai.data', label: 'データ収集' }
              ] },
              {
                t: 'card', title: 'データ収集', children: [
                  { t: 'toggle', id: 'tgl:collect', label: 'AI アクティビティのデータ収集', on: true },
                  { t: 'p', text: '既定でオンです。オフにすると可視化が止まります。' }
                ]
              },
              {
                t: 'wizard', items: [
                  { id: 'step:a365', label: 'Agent 365', status: '完了', statusKind: 'done' },
                  { id: 'step:m365conn', label: 'Microsoft 365 コネクタ', status: '未接続', statusKind: 'pend' },
                  { id: 'step:cps', label: 'Copilot Studio', status: '未接続', statusKind: 'pend' }
                ]
              }
            ]
          }
        ],
        endScreen: 2,
        tasks: [
          { say: '表示された開始画面で **開始する** をクリックする', target: 'btn:getstarted', screen: 0, hint: 'Defender ポータルに初めて入ると、AI のセキュリティのオンボード画面が表示されます。', done: 'オンボードを開始しました。' },
          { say: '左ナビから **設定** を開く', target: 'nav:def.settings', screen: 1, navSel: 'nav:def.settings', hint: '「セットアップと構成」グループの中にあります。', done: '設定を開きました。' },
          { say: '**AI のセキュリティ** を開く', target: 'nav:def.settings.ai', screen: 2, navSel: 'nav:def.settings.ai', hint: '設定の配下にある項目です。', done: 'AI のセキュリティ設定が開きました。' },
          { say: 'データ収集が **有効** であることと、**Agent 365** が「完了」であることを確認する（Agent 365 のステップをクリック）', target: 'step:a365', hint: 'トグルはオンのままにします。確認するのはウィザードの Agent 365 ステップの状態です。', miss: { 'tgl:collect': 'データ収集は既定でオンです。ここでクリックするとオフになってしまいます。確認するだけで触りません。' }, done: 'Agent 365 が完了であることを確認しました。' }
        ],
        wrap: 'データ収集トグルは **オンのまま**にします。撤収時（13 章）も、原則として Defender security for AI のデータ収集と Microsoft 365 コネクタは維持します。'
      },

      {
        type: 'sim',
        title: '5.2-B Microsoft 365 コネクタを接続する',
        goal: '2 種類のイベントを選んで Microsoft 365 に接続し、状態が「接続済み」になることを確認する',
        ref: ['image7.png', 'image8.png', 'image9.png'],
        refCaption: 'Microsoft 365 コネクタの接続ウィザードと接続済み表示（実画面）',
        screens: [
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ', h1: 'AI のセキュリティ',
            content: [
              {
                t: 'wizard', items: [
                  { id: 'step:a365', label: 'Agent 365', status: '完了', statusKind: 'done' },
                  { id: 'step:m365conn', label: 'Microsoft 365 コネクタ', status: '未接続', statusKind: 'pend' },
                  { id: 'step:cps', label: 'Copilot Studio', status: '未接続', statusKind: 'pend' }
                ]
              }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai/m365connector', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ > Microsoft 365 コネクタ', h1: 'Microsoft 365 コネクタ',
            desc: '収集するイベントを選択して接続します。',
            content: [
              {
                t: 'card', title: '収集するデータ', children: [
                  {
                    t: 'checks', items: [
                      { id: 'chk:entraAdmin', label: '**Microsoft Entra ID 管理イベント**' },
                      { id: 'chk:m365act', label: '**Microsoft 365 アクティビティ**' },
                      { id: 'chk:devlogs', label: 'デバイス ログ（この手順では使用しません）' }
                    ]
                  },
                  { t: 'btns', items: [{ id: 'btn:connectm365', label: 'Microsoft 365 の接続', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:connected', text: '状態：**接続済み**（反映にはしばらく時間を要します）' }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          { say: 'ウィザードの **Microsoft 365 コネクタ** のステップを選択する', target: 'step:m365conn', screen: 0, hint: 'Agent 365 はすでに完了しています。次は未接続のステップです。', done: 'コネクタの設定画面が開きました。' },
          { say: '**Microsoft Entra ID 管理イベント** にチェックを入れる', target: 'chk:entraAdmin', screen: 1, hint: '手順書では 2 種類のイベントの両方にチェックを入れます。まず 1 つ目。', done: 'チェックしました。', miss: { 'chk:devlogs': 'この手順で有効にするのは「Entra ID 管理イベント」と「Microsoft 365 アクティビティ」の 2 つです。' } },
          { say: '**Microsoft 365 アクティビティ** にもチェックを入れる', target: 'chk:m365act', hint: '2 つ目のチェックです。', done: '両方にチェックが入りました。' },
          { say: '**Microsoft 365 の接続** をクリックする', target: 'btn:connectm365', set: { 'panel:connected': true, 'step:m365conn.status': '接続済み', 'step:m365conn.kind': 'done' }, hint: 'チェックを入れたら接続ボタンを押します。', done: '接続処理が開始しました。' }
        ],
        wrap: '状態が **接続済み** になるまで時間がかかることがあります。Microsoft 365 コネクタを接続しない場合でも Copilot Studio 側のブロックは動作しますが、**アラートが Defender ポータルに表示されません**。'
      },

      {
        type: 'sim',
        title: '5.2-C Copilot Studio のリアルタイム保護とアプリ登録',
        goal: 'エンドポイント URL を控え、PowerShell で Entra アプリを登録してアプリ ID を Defender に設定する',
        ref: ['image10.png', 'image11.png', 'image12.png', 'image13.png'],
        refCaption: 'Copilot Studio ステップ／PowerShell Gallery／スクリプトの展開と実行（実画面）',
        screens: [
          /* 0: Defender ウィザード */
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ', h1: 'AI のセキュリティ',
            content: [
              {
                t: 'wizard', items: [
                  { id: 'step:a365', label: 'Agent 365', status: '完了', statusKind: 'done' },
                  { id: 'step:m365conn', label: 'Microsoft 365 コネクタ', status: '接続済み', statusKind: 'done' },
                  { id: 'step:cps', label: 'Copilot Studio', status: '未接続', statusKind: 'pend' }
                ]
              }
            ]
          },
          /* 1: Copilot Studio ステップ */
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai/copilotstudio', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ > Copilot Studio', h1: 'Copilot Studio',
            content: [
              {
                t: 'card', title: 'リアルタイム保護', children: [
                  { t: 'toggle', id: 'tgl:cpsrtp', label: 'Copilot Studio エージェントのリアルタイム保護', on: false },
                  { t: 'p', text: 'オンにすると、Power Platform 管理者に共有するエンドポイント URL が表示されます。' },
                  {
                    t: 'kv', when: 'panel:url', rows: [
                      ['エンドポイント URL', '`https://mcsaiagents.security.core.microsoft/v1/protection`'],
                      ['共有先', 'Power Platform 管理者']
                    ]
                  },
                  { t: 'btns', when: 'panel:url', items: [{ id: 'btn:copyurl', label: 'URL をコピーしてメモする', icon: 'clipboard-copy' }] }
                ]
              },
              {
                t: 'card', title: 'アプリ ID', when: 'panel:url', children: [
                  { t: 'p', text: 'PowerShell で Entra にアプリを登録し、表示されたアプリ ID をここに貼り付けます。' },
                  { t: 'field', id: 'fld:appId', label: 'アプリケーション（クライアント）ID', placeholder: '00000000-0000-0000-0000-000000000000', help: 'まだ取得していない場合は PowerShell での登録に進みます。' },
                  { t: 'btns', items: [{ id: 'btn:gotops', label: 'PowerShell でアプリを登録する', icon: 'arrow-right' }] }
                ]
              }
            ]
          },
          /* 2: PowerShell Gallery */
          {
            portal: 'desktop', url: 'https://www.powershellgallery.com/packages/Create-CopilotWebhookApp/1.0.1',
            brand: 'PowerShell Gallery', account: 'ブラウザー',
            crumb: 'PowerShell Gallery', h1: 'Create-CopilotWebhookApp 1.0.1',
            desc: 'Entra にアプリ登録を行うスクリプトを入手します。',
            content: [
              {
                t: 'list', items: [
                  { id: 'lnk:installps', icon: 'download', title: 'Install Script', desc: 'PowerShellGet でインストールする' },
                  { id: 'lnk:manualdl', icon: 'package', title: 'Manual Download — Download the raw nupkg file', desc: 'スクリプトファイルを直接ダウンロードする' },
                  { id: 'lnk:projsite', icon: 'link', title: 'Project Site', desc: 'ドキュメントを開く' }
                ]
              }
            ]
          },
          /* 3: 展開先 */
          {
            portal: 'desktop', url: 'file:///C:/Users/poc-admin/Downloads', brand: 'エクスプローラー', account: 'Windows',
            crumb: 'ダウンロード', h1: 'ZIP ファイルの展開',
            desc: 'ダウンロードした ZIP を展開し、任意の場所に保存します（手順書では `C:\\MSFT`）。',
            content: [
              { t: 'field', id: 'fld:path', label: '展開先フォルダー', placeholder: 'C:\\MSFT', help: '手順書と同じ `C:\\MSFT` を入力してください。' },
              { t: 'p', text: '展開後のパス：`C:\\MSFT\\create-copilotwebhookapp.1.0.1`' }
            ]
          },
          /* 4: PowerShell 実行 */
          {
            portal: 'desktop', url: 'PowerShell（管理者）', brand: 'Windows PowerShell（管理者として実行）', account: 'C:\\MSFT\\create-copilotwebhookapp.1.0.1',
            crumb: 'ターミナル', h1: 'スクリプトの実行',
            desc: '管理者としてターミナルを起動済みです。実行するコマンドを選んでください。',
            content: [
              { t: 'term', lines: ['<span class="ps1">PS C:\\MSFT\\create-copilotwebhookapp.1.0.1&gt;</span> _'] },
              {
                t: 'list', items: [
                  { id: 'cmdopt:a', icon: 'terminal', title: '`.\\Create-CopilotWebhookApp.ps1 -TenantId "…" -Endpoint "https://mcsaiagents.security.core.microsoft/v1/protection" -DisplayName "Copilot Security Integration - Production" -FICName "ProductionFIC"`', desc: 'テナント ID・エンドポイント・表示名・FIC 名をすべて指定' },
                  { id: 'cmdopt:b', icon: 'terminal', title: '`.\\Create-CopilotWebhookApp.ps1`', desc: 'パラメーターなしで実行' },
                  { id: 'cmdopt:c', icon: 'terminal', title: '`Install-Module Create-CopilotWebhookApp -Force`', desc: 'モジュールをインストールするだけ' }
                ]
              },
              { t: 'term', when: 'panel:psout', lines: [
                '<span class="ps1">PS C:\\MSFT\\create-copilotwebhookapp.1.0.1&gt;</span> <span class="cm">.\\Create-CopilotWebhookApp.ps1 -TenantId "c4f3e2d1-…" -Endpoint "https://mcsaiagents.security.core.microsoft/v1/protection" -DisplayName "Copilot Security Integration - Production" -FICName "ProductionFIC"</span>',
                '',
                'Connecting to Microsoft Entra ID ...',
                'Creating application registration ...',
                'Configuring federated identity credential "ProductionFIC" ...',
                '',
                'SUCCESS. Application registered.',
                '  DisplayName : Copilot Security Integration - Production',
                '  AppId       : <b style="color:#ffd866">' + APPID + '</b>'
              ] },
              { t: 'btns', when: 'panel:psout', items: [{ id: 'btn:copyappid', label: 'アプリ ID をコピーする', icon: 'clipboard-copy', prim: true }] }
            ]
          },
          /* 5: Defender に戻って貼り付け */
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai/copilotstudio', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ > Copilot Studio', h1: 'Copilot Studio',
            content: [
              { t: 'banner', text: 'クリップボード：`' + APPID + '`' },
              {
                t: 'card', title: 'アプリ ID', children: [
                  { t: 'field', id: 'fld:appId', label: 'アプリケーション（クライアント）ID', placeholder: '00000000-0000-0000-0000-000000000000' },
                  { t: 'btns', items: [{ id: 'btn:paste', label: '貼り付け', icon: 'clipboard-copy' }, { id: 'btn:saveappid', label: '保存', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:saved', text: '保存しました。状態が **接続済み** になるまでしばらくかかります。App ID を変更した直後は反映に最大 1 分かかります。' }
            ]
          }
        ],
        endScreen: 5,
        tasks: [
          { say: 'ウィザードの **Copilot Studio** のステップを選択する', target: 'step:cps', screen: 0, hint: '残っている未接続のステップです。', done: 'Copilot Studio の設定が開きました。' },
          { say: '**リアルタイム保護** をオンにする', target: 'tgl:cpsrtp', screen: 1, set: { 'panel:url': true }, hint: 'トグルをオンにすると、共有用のエンドポイント URL が表示されます。', done: 'エンドポイント URL が表示されました。' },
          { say: '表示された **URL をコピーしてメモ**する（Power Platform 管理者に共有します）', target: 'btn:copyurl', hint: '後で Power Platform 管理センターで貼り付けます。必ず控えておきます。', done: 'URL を控えました。' },
          { say: '**PowerShell でアプリを登録する** に進む', target: 'btn:gotops', screen: 1, hint: 'アプリ ID はまだ持っていません。先に Entra へのアプリ登録が必要です。', done: 'PowerShell Gallery を開きます。' },
          { say: 'PowerShell Gallery で **Manual Download（raw nupkg file）** を選ぶ', target: 'lnk:manualdl', screen: 2, hint: '手順書では「Manual Download > Download the raw nupkg file」を使います。', done: 'ダウンロードしました。' },
          { say: '展開先フォルダーに **C:\\MSFT** と入力する', target: 'fld:path', screen: 3, pattern: '^c:\\\\+msft\\\\?$', hint: '半角で `C:\\MSFT` と入力します。', done: 'パスを指定しました。' },
          { say: '管理者ターミナルで実行する **正しいコマンド**を選ぶ', target: 'cmdopt:a', screen: 4, set: { 'panel:psout': true }, hint: 'TenantId・Endpoint・DisplayName・FICName のプレースホルダーを置き換えて実行します。', miss: { 'cmdopt:b': 'パラメーターなしでは TenantId やエンドポイントが指定できません。', 'cmdopt:c': 'ここでは nupkg を手動展開済みです。インストールではなくスクリプトの実行が必要です。' }, done: 'スクリプトが実行され、アプリ登録が完了しました。' },
          { say: '出力された **アプリ ID をコピー**する', target: 'btn:copyappid', hint: '出力の AppId の値です。Defender のウィザードに貼り付けます。', done: 'アプリ ID をコピーしました。' },
          { say: 'Defender の入力欄に **アプリ ID を貼り付け**る', target: 'btn:paste', screen: 5, set: { 'fld:appId': APPID, 'fld:appId.valid': true }, hint: 'クリップボードの値を貼り付けます。', done: '貼り付けました。' },
          { say: '**保存** をクリックする', target: 'btn:saveappid', set: { 'panel:saved': true }, hint: '最後に保存して反映します。', done: '保存しました。' }
        ],
        wrap: 'アプリ ID の登録手順は Microsoft Learn の「外部セキュリティ プロバイダー」も参照してください：https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/external-security-provider#step-1-configure-a-microsoft-entra-application'
      },

      {
        type: 'sim',
        title: '5.2-D Power Platform 管理センターで Defender 連携を有効化する',
        goal: '環境ごとに Microsoft Defender 連携を有効にし、接続がオンになることを確認する',
        ref: ['image15.png', 'image16.png', 'image17.png', 'image18.png', 'image19.png'],
        refCaption: 'Power Platform 管理センターでの有効化と、Defender 側の全ステップ完了（実画面）',
        screens: [
          {
            portal: 'ppac', url: 'https://admin.powerplatform.microsoft.com/', brand: 'Power Platform 管理センター',
            account: 'poc-ppadmin@contoso.com（Power Platform 管理者）',
            nav: PPAC_NAV, navSel: 'nav:ppac.home',
            crumb: 'ホーム', h1: 'Power Platform 管理センター',
            content: [{ t: 'banner', text: 'Defender で控えた **アプリ ID** と **エンドポイント URL** をここで使います。' }]
          },
          {
            portal: 'ppac', url: 'https://admin.powerplatform.microsoft.com/security/threatdetection',
            brand: 'Power Platform 管理センター', nav: PPAC_NAV, navSel: 'nav:ppac.sec.threat',
            crumb: 'セキュリティ > 脅威の検出', h1: '脅威の検出',
            content: [
              {
                t: 'list', items: [
                  { id: 'lnk:mdcps', icon: 'shield-check', title: 'Microsoft Defender – Copilot Studio エージェント', desc: 'テナント内の Copilot Studio エージェントを Defender で保護します', right: '無効', rightKind: 'warn' },
                  { id: 'lnk:other', icon: 'lock-keyhole', title: 'Microsoft Sentinel 連携', desc: 'ログを Sentinel に転送します', right: '無効', rightKind: 'warn' }
                ]
              }
            ]
          },
          {
            portal: 'ppac', url: 'https://admin.powerplatform.microsoft.com/security/threatdetection/defender',
            brand: 'Power Platform 管理センター', nav: PPAC_NAV, navSel: 'nav:ppac.sec.threat',
            crumb: 'セキュリティ > 脅威の検出 > Microsoft Defender', h1: 'Microsoft Defender – Copilot Studio エージェント',
            content: [
              {
                t: 'card', title: 'テナント設定', children: [
                  { t: 'btns', items: [{ id: 'btn:enabletenant', label: 'Microsoft Defender を有効にする – テナント内のすべての Copilot Studio エージェント用', prim: true }] },
                  { t: 'banner', kind: 'ok', when: 'panel:tenanton', text: 'テナントレベルで有効化しました。続けて環境ごとに構成します。' },
                  { t: 'btns', when: 'panel:tenanton', items: [{ id: 'btn:manage', label: '管理' }] }
                ]
              }
            ]
          },
          {
            portal: 'ppac', url: 'https://admin.powerplatform.microsoft.com/security/threatdetection/defender/manage',
            brand: 'Power Platform 管理センター', nav: PPAC_NAV, navSel: 'nav:ppac.sec.threat',
            crumb: 'セキュリティ > 脅威の検出 > Microsoft Defender > 管理', h1: 'リアルタイム保護の構成',
            content: [
              { t: 'select', id: 'sel:env', label: 'リアルタイム保護を有効化する環境', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'prod', label: 'Contoso – 運用環境' }, { v: 'dev', label: 'Contoso – 開発環境' }, { v: 'default', label: 'Contoso（既定）' }] },
              { t: 'field', id: 'fld:ppappid', label: 'アプリ ID', placeholder: '00000000-0000-0000-0000-000000000000' },
              { t: 'field', id: 'fld:ppendpoint', label: 'エンドポイント リンク', placeholder: 'https://…' },
              { t: 'btns', items: [{ id: 'btn:ppsave', label: '保存', prim: true }] },
              { t: 'banner', kind: 'ok', when: 'panel:ppsaved', text: '接続がオンになりました。有効化したいすべての Power Platform 環境で同じ手順を実施します。' }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            nav: window.DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ', h1: 'AI のセキュリティ',
            content: [
              {
                t: 'wizard', items: [
                  { id: 'step:a365', label: 'Agent 365', status: '完了', statusKind: 'done' },
                  { id: 'step:m365conn', label: 'Microsoft 365 コネクタ', status: '接続済み', statusKind: 'done' },
                  { id: 'step:cps', label: 'Copilot Studio', status: '接続済み', statusKind: 'done' }
                ]
              },
              { t: 'banner', kind: 'ok', text: 'すべてのステップが完了／接続済みになりました。' }
            ]
          }
        ],
        endScreen: 4,
        tasks: [
          { say: '左ナビの **セキュリティ > 脅威の検出** を開く', target: 'nav:ppac.sec.threat', screen: 0, navSel: 'nav:ppac.sec.threat', hint: '「セキュリティ」グループの中にあります。', done: '脅威の検出が開きました。' },
          { say: '**Microsoft Defender – Copilot Studio エージェント** を開く', target: 'lnk:mdcps', screen: 1, hint: 'Copilot Studio エージェント向けの項目です。', done: '設定画面が開きました。', miss: { 'lnk:other': 'Sentinel 連携はこの手順の対象外です。' } },
          { say: '**Microsoft Defender を有効にする – テナント内のすべての Copilot Studio エージェント用** をクリックする', target: 'btn:enabletenant', screen: 2, set: { 'panel:tenanton': true }, hint: 'まずテナントレベルで有効化します。', done: 'テナントレベルで有効化しました。' },
          { say: '**管理** をクリックして環境ごとの構成に進む', target: 'btn:manage', hint: '有効化後に表示されるボタンです。', done: '環境の構成画面が開きました。' },
          { say: 'リアルタイム保護を有効化する **環境を選択**する（運用環境）', target: 'sel:env', screen: 3, equals: 'prod', hint: 'まずは運用環境から有効にします。', done: '環境を選択しました。' },
          { say: 'Defender で取得した **アプリ ID** を入力する', target: 'fld:ppappid', pattern: '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$', hint: 'GUID 形式です。練習として `' + APPID + '` を入力してください。', done: 'アプリ ID を入力しました。' },
          { say: '**エンドポイント リンク** を入力する', target: 'fld:ppendpoint', pattern: 'mcsaiagents\\.security\\.core\\.microsoft', hint: '5.2-C で控えた `https://mcsaiagents.security.core.microsoft/v1/protection` です。', done: 'エンドポイントを入力しました。' },
          { say: '**保存** をクリックする', target: 'btn:ppsave', set: { 'panel:ppsaved': true }, hint: '保存すると接続がオンになります。', done: '保存しました。' },
          { say: 'Defender ポータルに戻り、すべてのステップが完了／接続済みになったことを確認する（Copilot Studio のステップをクリック）', target: 'step:cps', screen: 4, hint: 'Defender 側の最終確認です。', done: 'すべて接続済みになりました。' }
        ],
        wrap: '**有効化したい Power Platform 環境すべて**で同じ手順を実施します。接続が Connected にならない場合は、App ID の反映待ち（最大 1 分）か Power Platform 側のオンボード未完了を疑います。'
      },

      {
        type: 'sim',
        title: '5.3 ローカルエージェントを検出して台帳に記録する',
        goal: 'パイロット端末上で検出されたローカルエージェントを確認し、記録する',
        ref: 'image20.png',
        refCaption: 'Defender ポータルで検出された AI エージェントの一覧（実画面）',
        screens: [
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            nav: window.DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ', h1: 'AI のセキュリティ',
            content: [
              { t: 'tabs', id: 'ai2', sel: 'tab:ai2.setup', items: [
                { id: 'tab:ai2.setup', label: 'セットアップ' },
                { id: 'tab:ai2.discovered', label: '検出された AI エージェント' },
                { id: 'tab:ai2.rules', label: 'ポリシーとルール' }
              ] },
              { t: 'banner', kind: 'ok', text: 'オンボードは完了しています。検出結果を確認しましょう。' }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai/discovered', brand: 'Microsoft Defender',
            nav: window.DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ > 検出された AI エージェント', h1: '検出された AI エージェント',
            content: [
              { t: 'tabs', id: 'ai2', sel: 'tab:ai2.discovered', items: [
                { id: 'tab:ai2.setup', label: 'セットアップ' },
                { id: 'tab:ai2.discovered', label: '検出された AI エージェント' },
                { id: 'tab:ai2.rules', label: 'ポリシーとルール' }
              ] },
              {
                t: 'table', cols: ['エージェント名', '種類', 'デバイス', 'ユーザー', '検出日', '状態'],
                rows: [
                  { id: 'row:openclaw', cells: ['**OpenClaw**', 'ローカルエージェント', 'PILOT-PC-003', 'sato@contoso.com', '2026-10-01', { chip: '検出', kind: 'warn' }] },
                  { id: 'row:cpsagent', cells: ['営業支援エージェント', 'Copilot Studio', '—', 'suzuki@contoso.com', '2026-09-28', { chip: '保護中', kind: 'ok' }] },
                  { id: 'row:foundry', cells: ['契約レビュー Bot', 'Foundry', '—', 'tanaka@contoso.com', '2026-09-29', { chip: '保護中', kind: 'ok' }] }
                ]
              },
              {
                t: 'card', title: 'OpenClaw の詳細', when: 'panel:detail', children: [
                  { t: 'kv', rows: [['デバイス', 'PILOT-PC-003'], ['ユーザー', 'sato@contoso.com'], ['検出日', '2026-10-01'], ['Defender for Endpoint', 'アクティブモード'], ['ランタイム保護', '未構成']] },
                  { t: 'btns', items: [{ id: 'btn:addledger', label: '台帳に追加（端末名・ユーザー・検出日を記録）', icon: 'square-pen', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:ledger', text: '台帳に追加しました。PoC 期間中は **検出のみ**とし、Intune のブロックポリシーは作成しても割り当てません（Week 4 で判断）。' }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          { say: '**検出された AI エージェント** のタブを開く', target: 'tab:ai2.discovered', screen: 0, hint: 'オンボード済みなら検出結果のタブが使えます。', done: '一覧が表示されました。' },
          { say: 'パイロット端末上で検出された **ローカルエージェント**（OpenClaw）を開く', target: 'row:openclaw', screen: 1, set: { 'panel:detail': true }, hint: '種類が「ローカルエージェント」になっている行です。Copilot Studio や Foundry はクラウド側のエージェントです。', miss: { 'row:cpsagent': 'これは Copilot Studio のエージェントです。端末上のローカルエージェントを探します。', 'row:foundry': 'これは Foundry のエージェントです。端末上のローカルエージェントを探します。' }, done: '詳細が表示されました。' },
          { say: '**台帳に追加**して端末名・ユーザー・検出日を記録する', target: 'btn:addledger', set: { 'panel:ledger': true }, hint: '手順書では検出されたローカルエージェントを台帳に追加します。', done: '記録しました。' }
        ],
        wrap: 'ローカルエージェントが検出されない場合は、Defender for Endpoint がパッシブモードか未オンボードの可能性があります。初期は **OpenClaw** が対象で、他のエージェントは順次対応予定です。'
      },

      {
        type: 'info',
        title: '5.5 ランタイム保護（任意）',
        goal: 'プロンプトインジェクション等をリアルタイムにブロック／監査する構成の前提を知る',
        body: [
          { p: 'Microsoft Defender for Endpoint でランタイム保護を有効にすると、プロンプトインジェクションや悪意のあるツール呼び出しなどをリアルタイムにブロックまたは監査できます。' },
          { h: '前提条件（抜粋）' },
          {
            ul: [
              'デバイスが Defender for Endpoint にオンボードされ、Defender ウイルス対策が**リアルタイム保護を有効にしてアクティブモード**で実行されている',
              'Microsoft Defender Antivirus が最新のプラットフォーム・エンジン・セキュリティインテリジェンスに更新されている',
              'パブリックプレビュー中は**ベータチャネル**の設定が必要',
              'デバイスに 1 つ以上の**サポートされているローカル AI エージェント**がインストールされている'
            ]
          },
          { p: '詳細：https://learn.microsoft.com/ja-jp/defender-endpoint/configure-ai-agent-runtime-protection' },
          { p: '更新チャネルの設定：https://learn.microsoft.com/ja-jp/defender-endpoint/configure-updates' },
          { img: 'image21.png', caption: 'ランタイム保護の構成（実資料より）' }
        ]
      },

      {
        type: 'quiz',
        title: 'Week 1 の理解度チェック',
        goal: 'オンボードの流れと確認ポイントを定着させる',
        questions: [
          {
            q: 'Microsoft 365 コネクタで接続時にチェックする 2 項目はどれですか。',
            multi: true,
            choices: ['Microsoft Entra ID 管理イベント', 'Microsoft 365 アクティビティ', 'デバイス ログ', 'Azure アクティビティ ログ'],
            answer: [0, 1],
            explain: 'この 2 つにチェックを入れて「Microsoft 365 の接続」をクリックします。接続済みになるまで時間がかかります。'
          },
          {
            q: 'Microsoft 365 コネクタを接続しなかった場合に起きることはどれですか。',
            choices: ['Copilot Studio 側のブロックも動作しない', 'Copilot Studio 側のブロックは動作するが、アラートが Defender ポータルに表示されない', 'ライセンスが無効になる', 'Agent Registry が表示されない'],
            answer: [1],
            explain: '6.6 の補足にある既知の挙動です。可視化のためにコネクタは接続しておきます。'
          },
          {
            q: 'Copilot Studio 連携で PowerShell スクリプトを実行する目的は何ですか。',
            choices: ['Defender のライセンスを有効化する', 'Entra にアプリ登録を行い、アプリ ID を取得する', 'ローカルエージェントを削除する', 'Power Platform 環境を作成する'],
            answer: [1],
            explain: '取得したアプリ ID を Defender ポータルのウィザードと Power Platform 管理センターの双方で使用します。'
          },
          {
            q: 'App ID を変更した直後に接続が Connected にならない場合、まず取るべき対応はどれですか。',
            choices: ['テナントを作り直す', '1 分ほど待ってから再試行する', 'ライセンスを追加購入する', 'Defender をアンインストールする'],
            answer: [1],
            explain: '反映に最大 1 分かかります。それでも解消しない場合は Power Platform 側のオンボード完了を管理者に確認します。'
          },
          {
            q: 'PoC 期間中のローカルエージェントの扱いとして正しいものはどれですか。',
            choices: ['検出され次第すべてブロックする', '検出のみとし、Intune のブロックポリシーは作成しても割り当てない', '端末から Defender を削除する', 'Intune の管理対象から外す'],
            answer: [1],
            explain: 'ブロックの判断は Week 4 に行います。検出結果に正当な開発ツールが含まれていないことを確認してから割り当てます。'
          }
        ]
      }
    ]
  });

})();
