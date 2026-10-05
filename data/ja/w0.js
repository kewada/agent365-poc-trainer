/* ===== Week 0：準備 ===== */
(function () {

  var ENTRA_NAV = [
    { id: 'nav:entra.home', label: 'ホーム', icon: 'home' },
    { group: 'Microsoft Entra ID' },
    { id: 'nav:entra.overview', label: '概要', icon: 'chart-column', level: 2 },
    { id: 'nav:entra.users', label: 'ユーザー', icon: 'user', level: 2 },
    { id: 'nav:entra.groups', label: 'グループ', icon: 'users', level: 2 },
    { id: 'nav:entra.agents', label: 'エージェント', icon: 'blocks', level: 2 },
    { id: 'nav:entra.roles', label: 'ロールと管理者', icon: 'user-round-cog', level: 2 },
    { group: '保護' },
    { id: 'nav:entra.ca', label: '条件付きアクセス', icon: 'lock', level: 2 },
    { id: 'nav:entra.attr', label: 'カスタム セキュリティ属性', icon: 'tag', level: 2 },
    { group: 'ID ガバナンス' },
    { id: 'nav:entra.em', label: 'エンタイトルメント管理', icon: 'package', level: 2 },
    { id: 'nav:entra.ar', label: 'アクセス レビュー', icon: 'circle-check', level: 2 },
    { id: 'nav:entra.pim', label: 'Privileged Identity Management', icon: 'timer', level: 2 }
  ];
  window.ENTRA_NAV = ENTRA_NAV;

  /* ---------------- Lesson 1 ---------------- */
  A365.addLesson('ja', {
    id: 'w0-1',
    week: 0,
    chapter: '1〜2',
    title: 'PoC の全体像と前提条件',
    summary: '4 週間の進め方、ライセンス・ロール・既存構成・使用ポータルを押さえる',
    steps: [

      {
        type: 'info',
        title: '本書の目的とこの PoC の設計方針',
        goal: 'なぜ「グループ」「Blueprint／属性」で指定するのかを理解する',
        body: [
          { p: '本 PoC は、**顧客の本番テナント**で **Microsoft 365 E5 ＋ Microsoft Agent 365** を使い、パイロットユーザー（10 名程度）を対象に 4 週間で実施します。' },
          {
            table: {
              head: ['項目', '内容'],
              rows: [
                ['対象', '情報システム部門・セキュリティ部門の PoC 実施担当者'],
                ['前提構成', 'Microsoft 365 E5 に Microsoft Agent 365 を追加／本番テナントでパイロットユーザー 10 名程度'],
                ['統制の適用', 'PoC 期間中は **レポート専用・監査のみ** が基本。強制（ブロック）は Week 4 に対象を限定して判断'],
                ['版', 'v3（2026 年 10 月）']
              ]
            }
          },
          { h: '人数や部門が変わっても手順を変えないための 3 つの設計方針' },
          {
            ol: [
              'ユーザーの指定は個人ではなく、必ず**セキュリティグループ**で行う（ライセンス割り当て・ポリシー対象・レビュー対象のすべて）',
              'エージェントの指定は個別選択ではなく、**Agent Blueprint またはカスタムセキュリティ属性**で行う',
              '台帳の列定義と KPI は最初に固定し、範囲が広がっても同じ定義で測る'
            ]
          },
          { h: '章と週の対応' },
          {
            table: {
              head: ['章', '週', '内容'],
              rows: [
                ['2〜3 章', 'Week 0', '前提条件の確認、ロール付与、事前チェックリスト'],
                ['4〜5 章', 'Week 1', 'Agent 365 の有効化確認、ローカルエージェントの検出'],
                ['6〜8 章', 'Week 2', 'レジストリによる棚卸し、Purview DSPM、接続されたプラットフォーム'],
                ['9 章', 'Week 3', 'Entra Agent ID の棚卸し、オーナー・スポンサー、条件付きアクセス、アクセスレビュー'],
                ['10 章', 'Week 3', 'Defender のリアルタイム保護、脅威検出と調査'],
                ['11〜12 章', 'Week 4', '運用プロセスの確定、KPI 測定、Success Criteria と Exit Criteria の判定'],
                ['13〜15 章', '全期間', '検証シナリオ、トラブルシューティング、撤収手順']
              ]
            }
          },
          { note: 'PoC の評価は Observe・Govern・Secure の 22 基準と Evidence で記録します。終了時は Observe・Govern・Protect・Control・Operate の 5 Outcome を判定します。全基準の Pass や強制適用は終了の必須条件ではありません（12 章）。' },
          { img: 'image2.png', caption: '手順書に掲載された PoC 全体像の図（実資料より）' }
        ]
      },

      {
        type: 'info',
        title: 'ライセンスと必要なロール',
        goal: 'どのライセンスが何を担い、どのロールがどの操作をできるのかを把握する',
        body: [
          { h: '2.1 ライセンス' },
          {
            table: {
              head: ['製品', 'PoC での役割', '割り当て先'],
              rows: [
                ['Microsoft 365 E5', 'Entra ID P2、Defender for Endpoint P2、Purview の各機能を包含。条件付きアクセス、ID Protection、DLP、インサイダーリスク、監査の土台', 'パイロットユーザー、管理者（既存）'],
                ['Microsoft Agent 365', 'Agent Registry の統制機能、Entra Agent ID の統制、Defender・Purview のエージェント向け機能。ユーザー単位（USD 15/ユーザー/月）', 'エージェントを管理・スポンサー・利用するユーザー。PoC では管理者とパイロットユーザー分'],
                ['Microsoft Defender for Endpoint（E5 に含む）', '端末上のローカルエージェントの検出とランタイム保護', 'パイロットユーザーの Windows 端末（アクティブモード）'],
                ['Microsoft Intune（E5 に含む）', 'ローカルエージェントに対するポリシー制御', 'パイロットユーザーの管理端末']
              ]
            }
          },
          { note: 'Microsoft 365 E7 は Copilot・Agent 365・Entra Suite を包含する上位スイートです。PoC は E5 ＋ Agent 365 で実施し、本展開時の比較対象として E7 を検討します。' },
          { h: '2.2 必要なロール（PIM による時間限定付与を推奨）' },
          {
            table: {
              head: ['ロール', '用途'],
              rows: [
                ['AI Administrator', 'Agent Registry での承認、オーナー割り当て、ブロック・削除、ピン留め。Graph API でのエージェント一覧取得'],
                ['Security Administrator', 'Defender ポータルでの Security for AI オンボード、Defender 由来のリスク確認'],
                ['Compliance Administrator（Purview）', 'DSPM、DLP、監査、インサイダーリスクの設定'],
                ['Insider Risk Management Analyst / Investigator', 'Registry から Purview 由来のリスク詳細を参照する際に必要'],
                ['Conditional Access Administrator', 'エージェント向け条件付きアクセスポリシーの作成'],
                ['Agent ID Administrator（または Cloud Application Administrator）', 'Agent identities・Agent blueprints の管理、オーナー・スポンサーの変更'],
                ['Lifecycle Workflows Administrator', 'スポンサー変更時の通知などライフサイクルワークフローの構成（任意）'],
                ['Power Platform 管理者', 'Copilot Studio の Real-time protection を Defender と連携する際の Power Platform 側作業'],
                ['Global Reader / Security Reader', 'Registry の閲覧のみ。統制操作は不可']
              ]
            }
          },
          { warn: '本番テナントでの実施です。管理ロールは **PIM で時間限定**に付与し、PoC 終了時に棚卸しして解除します（13 章）。' }
        ]
      },

      {
        type: 'match',
        title: '操作とロールの対応づけ',
        goal: '「この操作には誰の権限が要るか」を即答できるようにする',
        intro: '左の操作に必要なロールを右から選んでください（付録 B の対応表に対応）。',
        leftTitle: '操作',
        rightTitle: '必要なロール',
        pairs: [
          { left: 'Registry での承認・オーナー割り当て・ブロック', right: 'AI Administrator' },
          { left: 'Defender security for AI のオンボード', right: 'Security Administrator' },
          { left: 'DSPM / DLP / 監査の設定', right: 'Compliance Administrator' },
          { left: 'エージェント向け条件付きアクセスポリシーの作成', right: 'Conditional Access Administrator' },
          { left: 'Agent identities / Blueprints の管理、スポンサー変更', right: 'Agent ID Administrator' },
          { left: 'Registry の閲覧のみ（統制操作は不可）', right: 'Global Reader / Security Reader' },
          { left: 'Purview 由来のリスク詳細の参照', right: 'Insider Risk Management Analyst / Investigator' }
        ]
      },

      {
        type: 'info',
        title: '必要な既存構成と使用するポータル',
        goal: '6 つの管理ポータルと、その役割・URL を覚える',
        body: [
          { h: '2.3 必要な既存構成' },
          {
            table: {
              head: ['項目', '要件', '理由'],
              rows: [
                ['セキュリティの既定値群', '**無効**であること', '有効のままだとエージェント向け条件付きアクセスが適用されない'],
                ['Defender for Endpoint', 'パイロット端末で**アクティブモード**でオンボード済み', 'ローカルエージェントの検出とランタイム保護に必要'],
                ['Intune', 'パイロット端末が登録・管理下にあること', 'ローカルエージェントに対するポリシー適用に必要'],
                ['Copilot Studio', '組織で利用中かどうかを確認', '利用中なら Real-time protection の連携（Power Platform 管理者作業）が必要'],
                ['監査（Purview）', '有効であること', 'エージェントの操作証跡の取得に必要'],
                ['パイロット用セキュリティグループ', '作成済みであること', 'ライセンス・ポリシー・レビューの対象をすべてグループで指定するため']
              ]
            }
          },
          { h: '2.4 使用するポータル' },
          {
            table: {
              head: ['ポータル', 'URL', '本書での用途'],
              rows: [
                ['Microsoft 365 管理センター', 'https://admin.cloud.microsoft/', 'エージェント > 概要／すべてのエージェント（レジストリ）。棚卸し、承認、オーナー割り当て、エクスポート'],
                ['Microsoft Defender ポータル', 'https://security.microsoft.com/', '設定 > AI のセキュリティ。オンボード、エージェントの脅威検知'],
                ['Microsoft Purview ポータル', 'https://purview.microsoft.com/', 'DSPM > AI 観測可能性。監査、DLP、インサイダーリスク'],
                ['Microsoft Entra 管理センター', 'https://entra.microsoft.com/', 'Entra ID > エージェント > Agent identities／Agent blueprints、条件付きアクセス、ID ガバナンス'],
                ['Microsoft Intune 管理センター', 'https://intune.microsoft.com/', 'ローカルエージェント制御ポリシー'],
                ['Power Platform 管理センター', 'https://admin.powerplatform.microsoft.com/', 'Copilot Studio の Real-time protection 連携']
              ]
            }
          }
        ]
      },

      {
        type: 'sim',
        title: 'セキュリティの既定値群が無効であることを確認する',
        goal: 'Entra 管理センターで、条件付きアクセスを使える状態かどうかを確かめる',
        ref: 'image39.png',
        refCaption: '参考：エージェント向け条件付きアクセスポリシーの画面（Week 3 で使用）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/', brand: 'Microsoft Entra 管理センター',
            account: 'poc-secadmin@contoso.com', nav: ENTRA_NAV, navSel: 'nav:entra.home',
            crumb: 'ホーム', h1: 'Microsoft Entra 管理センター',
            desc: 'セキュリティの既定値群の状態を確認します。左のナビゲーションから目的の画面を開いてください。',
            content: [
              { t: 'banner', text: 'エージェント向け条件付きアクセスは **セキュリティの既定値群が有効のテナントでは適用されません**。Week 0 のうちに状態を確認します。' },
              {
                t: 'tiles', items: [
                  { id: 'tile:users', value: '1,248', label: 'ユーザー' },
                  { id: 'tile:groups', value: '184', label: 'グループ' },
                  { id: 'tile:apps', value: '96', label: 'エンタープライズ アプリ' }
                ]
              }
            ]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantOverview',
            brand: 'Microsoft Entra 管理センター', account: 'poc-secadmin@contoso.com',
            nav: ENTRA_NAV, navSel: 'nav:entra.overview',
            crumb: 'ホーム > Entra ID > 概要', h1: 'Contoso（テナント概要）',
            content: [
              { t: 'tabs', id: 'ov', sel: 'tab:ov.overview', items: [
                { id: 'tab:ov.overview', label: '概要' },
                { id: 'tab:ov.monitor', label: '監視' },
                { id: 'tab:ov.props', label: 'プロパティ' },
                { id: 'tab:ov.rec', label: '推奨事項' }
              ] },
              {
                t: 'kv', rows: [
                  ['テナント名', 'Contoso'], ['テナント ID', 'c4f3e2d1-5a6b-47c8-9d0e-1f2a3b4c5d6e'],
                  ['ライセンス', 'Microsoft Entra ID P2']
                ]
              },
              { t: 'p', text: '「プロパティ」タブにテナント全体の設定があります。' }
            ]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/TenantProperties',
            brand: 'Microsoft Entra 管理センター', account: 'poc-secadmin@contoso.com',
            nav: ENTRA_NAV, navSel: 'nav:entra.overview',
            crumb: 'ホーム > Entra ID > 概要 > プロパティ', h1: 'プロパティ',
            content: [
              { t: 'tabs', id: 'ov', sel: 'tab:ov.props', items: [
                { id: 'tab:ov.overview', label: '概要' },
                { id: 'tab:ov.monitor', label: '監視' },
                { id: 'tab:ov.props', label: 'プロパティ' },
                { id: 'tab:ov.rec', label: '推奨事項' }
              ] },
              { t: 'kv', rows: [['名前', 'Contoso'], ['国または地域', '日本'], ['データの場所', 'Japan datacenters'], ['技術的な連絡先', 'poc-admin@contoso.com']] },
              {
                t: 'list', items: [
                  { id: 'lnk:secdef', icon: 'shield-check', title: 'セキュリティの既定値群の管理', desc: '既定のセキュリティ設定で組織を保護します', right: '確認する' },
                  { id: 'lnk:accessmgmt', icon: 'lock-keyhole', title: 'Azure リソースのアクセス管理', desc: 'グローバル管理者が Azure サブスクリプションを管理できるようにします' }
                ]
              },
              {
                t: 'card', title: 'セキュリティの既定値群', when: 'panel:secdef', children: [
                  { t: 'p', text: 'セキュリティの既定値群を有効にする：**無効**' },
                  { t: 'banner', kind: 'ok', text: '無効です。エージェント向け条件付きアクセスを構成できます（Week 3）。' },
                  { t: 'btns', items: [{ id: 'btn:cancel', label: 'キャンセル' }, { id: 'btn:save', label: '保存', prim: true }] }
                ]
              }
            ]
          }
        ],
        endScreen: 2,
        tasks: [
          {
            say: '左ナビの **Entra ID > 概要** を開く', target: 'nav:entra.overview', screen: 0,
            navSel: 'nav:entra.overview',
            hint: 'セキュリティの既定値群はテナント全体の設定です。「Microsoft Entra ID」グループの先頭にある項目から入ります。',
            done: 'テナント概要が開きました。',
            miss: { 'nav:entra.ca': '条件付きアクセスは Week 3 で使います。まずはテナントの概要からです。' }
          },
          {
            say: '**プロパティ** タブを開く', target: 'tab:ov.props', screen: 1,
            hint: 'テナント全体の設定は概要画面の「プロパティ」タブにあります。',
            done: 'プロパティが表示されました。'
          },
          {
            say: '**セキュリティの既定値群の管理** を開く', target: 'lnk:secdef', screen: 2,
            set: { 'panel:secdef': true },
            hint: 'プロパティ画面の下部にあるリンクです。',
            done: 'パネルが開きました。状態を確認しましょう。'
          },
          {
            say: '状態が **無効** であることを確認し、変更せずに **キャンセル** で閉じる', target: 'btn:cancel',
            hint: '確認だけが目的です。値を変更しないようにキャンセルで閉じます。',
            miss: { 'btn:save': 'ここでは何も変更していないので保存は不要です。確認だけならキャンセルで閉じます。' }
          }
        ],
        wrap: 'セキュリティの既定値群が **有効** だった場合は、条件付きアクセスへの移行を顧客と合意してから無効化します（12 章のトラブルシューティング参照）。'
      },

      {
        type: 'quiz',
        title: '前提条件の理解度チェック',
        goal: '前提・ロール・設計方針を確認する',
        questions: [
          {
            q: 'PoC でユーザーを指定する方法として、手順書が必ず使うよう定めているものはどれですか。',
            choices: ['個々のユーザーを都度選択する', 'セキュリティグループで指定する', '部署名でフィルターする', '全ユーザーを対象にする'],
            answer: [1],
            explain: 'ライセンス割り当て・ポリシーの対象・レビューの対象のすべてをセキュリティグループで指定することで、パイロットの人数や部門が変わっても手順が変わりません。'
          },
          {
            q: 'エージェント向け条件付きアクセスが適用されなくなる条件をすべて選んでください。',
            multi: true,
            choices: ['セキュリティの既定値群が有効', 'API キーでのアクセス', 'Blueprint が Microsoft Graph 向けにトークンを取得する場合', 'エージェントが Teams チャネルを使っている場合'],
            answer: [0, 1, 2],
            explain: '8.3 の注意事項です。加えて「すべてのユーザー」を対象にした既存ポリシーはエージェントのユーザーアカウントには適用されません。'
          },
          {
            q: 'Agent Registry で「承認・オーナー割り当て・ブロック」を行うために必要なロールはどれですか。',
            choices: ['Global Reader', 'Security Administrator', 'AI Administrator', 'Compliance Administrator'],
            answer: [2],
            explain: '閲覧系ロール（Global Reader / Security Reader）では統制操作はできません。AI Administrator に切り替え、PIM のアクティブ化を確認します。'
          },
          {
            q: 'PoC 期間中の統制の適用方針として正しいものはどれですか。',
            choices: ['初週から強制ブロックを全社適用する', 'レポート専用・監査のみを基本とし、強制は Week 4 に対象を限定して判断する', '一切ポリシーを作らない', 'パイロット以外のユーザーにも同時に適用する'],
            answer: [1],
            explain: '本番テナントでの実施のため、利用者への影響を抑えることを最優先にします。'
          },
          {
            q: 'ローカルエージェントの検出に必要な端末側の前提はどれですか。',
            choices: ['Defender for Endpoint がパッシブモード', 'Defender for Endpoint がアクティブモードでオンボード済み', 'Intune 非管理であること', 'Copilot Studio がインストール済み'],
            answer: [1],
            explain: 'パッシブモードや未オンボードだとローカルエージェントは検出されません（12 章）。'
          }
        ]
      }
    ]
  });

  /* ---------------- Lesson 2 ---------------- */
  A365.addLesson('ja', {
    id: 'w0-2',
    week: 0,
    chapter: '3',
    title: '事前チェックリスト（Week 0）',
    summary: 'キックオフ前に完了させる 10 項目。完了をもって Week 1 を開始する',
    steps: [
      {
        type: 'checklist',
        title: '事前チェックリスト 10 項目',
        goal: 'Week 1 を開始できる状態かどうかを判定する',
        key: 'w0-checklist',
        intro: 'キックオフ前に以下をすべて完了させます。**本チェックリストの完了をもって Week 1 を開始**します。',
        items: [
          { text: 'Microsoft Agent 365 ライセンスが購入済みで、管理者とパイロットユーザー分の数量がある', how: 'M365 管理センター > 課金情報 > ライセンス', who: '情シス' },
          { text: 'パイロット用セキュリティグループが作成され、対象ユーザーが登録されている', how: 'Entra 管理センター > グループ', who: '情シス' },
          { text: 'Agent 365 ライセンスがグループベースでパイロットグループに割り当てられている', how: 'Entra 管理センター > グループ > ライセンス', who: '情シス' },
          { text: '必要な管理ロールが PIM で付与され、アクティブ化できる', how: 'Entra 管理センター > ID ガバナンス > PIM', who: '情シス' },
          { text: 'セキュリティの既定値群が無効である', how: 'Entra 管理センター > 概要 > プロパティ', who: 'セキュリティ' },
          { text: 'パイロット端末が Defender for Endpoint（アクティブ）と Intune の管理下にある', how: 'Defender ポータル > 資産 > デバイス、Intune 管理センター', who: 'セキュリティ' },
          { text: 'Purview の監査が有効である', how: 'Purview ポータル > 監査', who: 'コンプライアンス' },
          { text: 'Copilot Studio の利用有無と Power Platform 管理者を確認した', how: 'Power Platform 管理センター', who: '情シス' },
          { text: '台帳テンプレート（付録 C）と KPI 定義を関係者で合意した', how: 'キックオフ', who: 'パートナー' },
          { text: '週次レビュー（30 分 × 4 回）と報告会の日程が確定している', how: 'カレンダー', who: 'パートナー' }
        ]
      },
      {
        type: 'sim',
        title: 'グループベースでライセンス割り当てを確認する',
        goal: 'パイロットグループに Agent 365 がグループ割り当てされているかを確認する（チェック項目 3）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/', brand: 'Microsoft Entra 管理センター',
            nav: window.ENTRA_NAV, navSel: 'nav:entra.home',
            crumb: 'ホーム', h1: 'Microsoft Entra 管理センター',
            desc: 'パイロット用セキュリティグループのライセンス割り当てを確認します。',
            content: [{ t: 'banner', text: '個人単位ではなく **グループベースのライセンス割り当て**にしておくと、パイロットの追加・削除がグループのメンバー変更だけで済みます。' }]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupsManagementMenuBlade',
            brand: 'Microsoft Entra 管理センター', nav: window.ENTRA_NAV, navSel: 'nav:entra.groups',
            crumb: 'ホーム > Entra ID > グループ', h1: 'すべてのグループ',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:newgroup', label: '新しいグループ', icon: 'plus' }, { id: 'cmd:refresh', label: '更新', icon: 'refresh-cw' }] },
              {
                t: 'table', cols: ['名前', '種類', 'メンバー数', 'ソース'],
                rows: [
                  { id: 'row:grp-pilot', cells: ['**SG-Agent365-Pilot**', 'セキュリティ', '10', 'クラウド'] },
                  { id: 'row:grp-admin', cells: ['SG-Agent365-Admins', 'セキュリティ', '4', 'クラウド'] },
                  { id: 'row:grp-all', cells: ['All Company', 'Microsoft 365', '1,248', 'クラウド'] }
                ]
              }
            ]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupDetails/SG-Agent365-Pilot',
            brand: 'Microsoft Entra 管理センター', nav: window.ENTRA_NAV, navSel: 'nav:entra.groups',
            crumb: 'ホーム > Entra ID > グループ > SG-Agent365-Pilot', h1: 'SG-Agent365-Pilot',
            content: [
              { t: 'tabs', id: 'grp', sel: 'tab:grp.overview', items: [
                { id: 'tab:grp.overview', label: '概要' },
                { id: 'tab:grp.members', label: 'メンバー' },
                { id: 'tab:grp.lic', label: 'ライセンス' },
                { id: 'tab:grp.roles', label: '割り当てられたロール' }
              ] },
              { t: 'kv', rows: [['グループの種類', 'セキュリティ'], ['メンバー数', '10'], ['所有者', 'poc-admin@contoso.com']] }
            ]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/GroupLicenses/SG-Agent365-Pilot',
            brand: 'Microsoft Entra 管理センター', nav: window.ENTRA_NAV, navSel: 'nav:entra.groups',
            crumb: 'ホーム > Entra ID > グループ > SG-Agent365-Pilot > ライセンス', h1: 'ライセンス',
            content: [
              { t: 'tabs', id: 'grp', sel: 'tab:grp.lic', items: [
                { id: 'tab:grp.overview', label: '概要' },
                { id: 'tab:grp.members', label: 'メンバー' },
                { id: 'tab:grp.lic', label: 'ライセンス' },
                { id: 'tab:grp.roles', label: '割り当てられたロール' }
              ] },
              { t: 'cmdbar', items: [{ id: 'cmd:assign', label: '割り当て', icon: 'plus' }, { id: 'cmd:reprocess', label: '再処理', icon: 'refresh-cw' }] },
              {
                t: 'table', cols: ['製品名', '割り当て状態', 'エラー'],
                rows: [
                  { id: 'row:lic-a365', cells: ['**Microsoft Agent 365**', { chip: '割り当て済み', kind: 'ok' }, 'なし'] },
                  { id: 'row:lic-e5', cells: ['Microsoft 365 E5', { chip: '割り当て済み', kind: 'ok' }, 'なし'] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:ok', text: 'Microsoft Agent 365 がグループに割り当てられ、割り当てエラーもありません。チェック項目 3 は完了です。' }
            ]
          }
        ],
        endScreen: 3,
        tasks: [
          { say: '左ナビの **グループ** を開く', target: 'nav:entra.groups', screen: 0, navSel: 'nav:entra.groups', hint: '「Microsoft Entra ID」グループの中にあります。', done: 'グループ一覧が開きました。' },
          { say: 'パイロット用の **SG-Agent365-Pilot** を開く', target: 'row:grp-pilot', screen: 1, hint: 'PoC の対象はパイロットユーザー 10 名です。メンバー数からも判断できます。', done: 'グループの詳細が開きました。', miss: { 'row:grp-all': 'All Company は全社グループです。PoC の対象はパイロット用セキュリティグループに限定します。' } },
          { say: '**ライセンス** タブを開く', target: 'tab:grp.lic', screen: 2, hint: 'グループ詳細のタブに「ライセンス」があります。', done: 'グループに割り当てられたライセンスが表示されました。' },
          { say: '**Microsoft Agent 365** の行を開いて割り当て状態とエラーを確認する', target: 'row:lic-a365', screen: 3, set: { 'panel:ok': true }, hint: '確認するのは Agent 365 の行です。E5 はすでに全社に割り当て済みという想定です。', done: '割り当て状態を確認できました。' }
        ],
        wrap: '対象ユーザーを 1 名開き、ライセンスが **「グループから継承」** になっていることも併せて確認します。管理者（AI Administrator を担うユーザー）にも Agent 365 ライセンスが必要です。'
      }
    ]
  });

})();
