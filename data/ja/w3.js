/* ===== Week 3：Entra Agent ID と保護・調査 ===== */
(function () {

  var ENTRA_NAV = [
    { id: 'nav:entra.home', label: 'ホーム', icon: 'home' },
    { group: 'Microsoft Entra ID' },
    { id: 'nav:entra.overview', label: '概要', icon: 'chart-column', level: 2 },
    { id: 'nav:entra.users', label: 'ユーザー', icon: 'user', level: 2 },
    { id: 'nav:entra.groups', label: 'グループ', icon: 'users', level: 2 },
    { id: 'nav:entra.agents', label: 'エージェント', icon: 'blocks', level: 2 },
    { id: 'nav:entra.agents.identities', label: 'Agent identities', icon: 'id-card', level: 3 },
    { id: 'nav:entra.agents.blueprints', label: 'Agent blueprints', icon: 'drafting-compass', level: 3 },
    { group: '保護' },
    { id: 'nav:entra.ca', label: '条件付きアクセス', icon: 'lock', level: 2 },
    { id: 'nav:entra.attr', label: 'カスタム セキュリティ属性', icon: 'tag', level: 2 },
    { group: 'ID ガバナンス' },
    { id: 'nav:entra.em', label: 'エンタイトルメント管理', icon: 'package', level: 2 },
    { id: 'nav:entra.ar', label: 'アクセス レビュー', icon: 'circle-check', level: 2 },
    { id: 'nav:entra.pim', label: 'Privileged Identity Management', icon: 'timer', level: 2 }
  ];

  var DEF_NAV = window.DEF_NAV;

  A365.addLesson('ja', {
    id: 'w3-1',
    week: 3,
    chapter: '9',
    title: '手順 5：Entra Agent ID とライフサイクル統制',
    summary: '棚卸しと突合、オーナー／スポンサー、カスタム属性、条件付きアクセス、アクセスパッケージとレビュー',
    steps: [

      {
        type: 'sim',
        title: '9.1 Agent identities を棚卸しして台帳と突合する',
        goal: '必要な列を表示し、Registry 側の台帳と突合して「シャドー」を洗い出す',
        ref: 'image66.png',
        refCaption: 'Entra ID > エージェント > Agent identities（実画面）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/', brand: 'Microsoft Entra 管理センター',
            account: 'poc-agentidadmin@contoso.com（Agent ID Administrator）',
            nav: ENTRA_NAV, navSel: 'nav:entra.home',
            crumb: 'ホーム', h1: 'Microsoft Entra 管理センター',
            content: [{ t: 'banner', text: 'Agent ID Administrator でサインインしています。Registry 由来の台帳（Week 2）を手元に用意しておきます。' }]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AgentIdentities', brand: 'Microsoft Entra 管理センター',
            nav: ENTRA_NAV, navSel: 'nav:entra.agents.identities',
            crumb: 'Entra ID > エージェント > Agent identities', h1: 'Agent identities',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:cols', label: '列のカスタマイズ', icon: 'columns-3' }, { id: 'cmd:reconcile', label: '台帳と突合する', icon: 'link' }] },
              {
                t: 'card', title: '表示する列', when: 'panel:cols', children: [
                  {
                    t: 'checks', items: [
                      { id: 'chk:colName', label: 'Name', on: true },
                      { id: 'chk:colStatus2', label: 'Status', on: true },
                      { id: 'chk:colObjId', label: '**Object ID**' },
                      { id: 'chk:colBp', label: '**Blueprint App ID**' },
                      { id: 'chk:colOwners', label: '**Owners and Sponsors**' },
                      { id: 'chk:colCreated', label: '**Created On**' }
                    ]
                  },
                  { t: 'btns', items: [{ id: 'btn:applycols2', label: '適用', prim: true }] }
                ]
              },
              {
                t: 'table', when: 'panel:colsApplied', cols: ['Name', 'Status', 'Object ID', 'Blueprint App ID', 'Owners and Sponsors', 'Created On'],
                rows: [
                  { id: 'row:ai1', cells: ['営業支援エージェント', { chip: '有効', kind: 'ok' }, 'a1b2…', 'bp-sales-01', 'suzuki / —', '2026-06-02'] },
                  { id: 'row:ai2', cells: ['契約レビュー Bot', { chip: '有効', kind: 'ok' }, 'c3d4…', 'bp-legal-02', 'tanaka / mori', '2026-07-11'] },
                  { id: 'row:ai3', cells: ['人事 FAQ エージェント', { chip: '有効', kind: 'ok' }, 'e5f6…', 'bp-hr-03', '— / —', '2026-05-12'] }
                ]
              },
              {
                t: 'banner', kind: 'warn', when: 'panel:reconciled',
                text: '突合結果：Registry には存在するが **Agent identity を持たない** エージェントが 4 件あります。台帳に「**Entra Agent ID なし（シャドー）**」として印を付けます。'
              }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          { say: '左ナビの **エージェント > Agent identities** を開く', target: 'nav:entra.agents.identities', screen: 0, navSel: 'nav:entra.agents.identities', hint: 'Entra ID グループ内の「エージェント」の下にあります。', done: '一覧が開きました。', miss: { 'nav:entra.agents.blueprints': 'Blueprints はこの後に確認します。まずは Agent identities です。' } },
          { say: '**列のカスタマイズ** を開く', target: 'cmd:cols', screen: 1, set: { 'panel:cols': true }, hint: '既定では必要な列が出ていません。', done: '列の選択が表示されました。' },
          { say: '**Object ID** を表示する', target: 'chk:colObjId', hint: '突合のキーになる列です。', done: 'チェックしました。' },
          { say: '**Blueprint App ID** を表示する', target: 'chk:colBp', hint: 'どの Blueprint から作られたかを示します。', done: 'チェックしました。' },
          { say: '**Owners and Sponsors** を表示する', target: 'chk:colOwners', hint: '9.2 のオーナー／スポンサー割り当てで使います。', done: 'チェックしました。' },
          { say: '**Created On** を表示して **適用** する', target: 'chk:colCreated', hint: '作成日も台帳に記録します。', done: 'チェックしました。' },
          { say: '**適用** をクリックする', target: 'btn:applycols2', set: { 'panel:colsApplied': true }, hint: '選んだ列を反映します。', done: '列が表示されました。' },
          { say: 'Week 2 の台帳（Registry 由来）と **突合** する', target: 'cmd:reconcile', set: { 'panel:reconciled': true }, hint: 'Registry にあるが Agent identity がないものを探します。', done: '突合が完了しました。' }
        ],
        wrap: '続けて **Agent blueprints** を開き、各 Blueprint に紐づく Agent identity の数・オーナー・権限を確認します。'
      },

      {
        type: 'sim',
        title: '9.2 オーナーとスポンサーを割り当てる',
        goal: 'オーナー／スポンサーが空のエージェントに責任者を割り当て、オーナー不在を 0 件にする',
        ref: 'image67.png',
        refCaption: 'Manage owners and sponsors（実画面）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/AgentIdentities', brand: 'Microsoft Entra 管理センター',
            nav: ENTRA_NAV, navSel: 'nav:entra.agents.identities',
            crumb: 'Entra ID > エージェント > Agent identities', h1: 'Agent identities',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:filterNoOwner', label: 'フィルター：オーナーまたはスポンサーが空', icon: 'list-filter' }, { id: 'cmd:cols', label: '列のカスタマイズ', icon: 'columns-3' }] },
              {
                t: 'table', when: 'panel:filtered', cols: ['Name', 'Owners', 'Sponsors'],
                rows: [
                  { id: 'row:no1', cells: ['**人事 FAQ エージェント**', { chip: 'なし', kind: 'err' }, { chip: 'なし', kind: 'err' }] },
                  { id: 'row:no2', cells: ['営業支援エージェント', 'suzuki@contoso.com', { chip: 'なし', kind: 'err' }] }
                ]
              },
              {
                t: 'card', title: '人事 FAQ エージェント — Manage owners and sponsors', when: 'panel:ownerdlg', children: [
                  { t: 'p', text: '**オーナー**＝技術的な管理者、**スポンサー**＝「このエージェントは引き続き必要か」を判断する業務上の責任者。' },
                  { t: 'select', id: 'sel:owner', label: 'オーナー（技術的な管理者）', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'hr-it', label: 'kobayashi@contoso.com（人事システム担当）' }, { v: 'any', label: 'guest@partner.example（外部）' }] },
                  { t: 'select', id: 'sel:sponsor', label: 'スポンサー（業務上の責任者）', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'hr-mgr', label: 'nakamura@contoso.com（人事部長）' }, { v: 'helpdesk', label: 'helpdesk@contoso.com（共有メールボックス）' }] },
                  { t: 'btns', items: [{ id: 'btn:saveowner', label: '保存', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:ownersaved', text: '割り当てました。Microsoft 365 管理センター > レジストリ 側でも **Assign new owner** で新オーナーを割り当て、ダッシュボードの「所有者のいないエージェント」が 0 件になったことを確認します。' }
            ]
          }
        ],
        tasks: [
          { say: '**オーナーまたはスポンサーが空**のエージェントをフィルターする', target: 'cmd:filterNoOwner', set: { 'panel:filtered': true }, hint: 'コマンドバーのフィルターです。', done: '該当するエージェントが表示されました。' },
          { say: 'オーナーもスポンサーも空の **人事 FAQ エージェント** を開く', target: 'row:no1', set: { 'panel:ownerdlg': true }, hint: '両方「なし」になっている行です。', done: '割り当て画面が開きました。' },
          { say: '**オーナー**（技術的な管理者）を割り当てる', target: 'sel:owner', equals: 'hr-it', hint: '社内の技術担当者を選びます。外部ゲストは適切ではありません。', done: 'オーナーを決めました。' },
          { say: '**スポンサー**（業務上の責任者）を割り当てる', target: 'sel:sponsor', equals: 'hr-mgr', hint: 'スポンサーは「このエージェントは引き続き必要か」を判断する人です。共有メールボックスでは判断できません。', done: 'スポンサーを決めました。' },
          { say: '**保存** する', target: 'btn:saveowner', set: { 'panel:ownersaved': true }, hint: '最後に保存します。', done: '保存しました。' }
        ],
        wrap: 'オーナーが退職・異動した場合にスポンサーを上長へ自動移管する **ライフサイクルワークフロー** は、本展開時の検討事項とします。'
      },

      {
        type: 'sim',
        title: '9.4 カスタムセキュリティ属性で対象を指定できるようにする',
        goal: '属性セット Agent365 と属性 PoCScope / Criticality を定義し、重点エージェントに付与する',
        ref: ['image69.png', 'image70.png'],
        refCaption: 'カスタム セキュリティ属性の属性セットと属性定義（実画面）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_IAM/CustomSecurityAttributes', brand: 'Microsoft Entra 管理センター',
            nav: ENTRA_NAV, navSel: 'nav:entra.attr',
            crumb: 'Entra ID > カスタム セキュリティ属性', h1: 'カスタム セキュリティ属性',
            content: [
              { t: 'banner', text: 'エージェントの数が増えてもポリシーを増やさずに済むよう、**対象指定はカスタムセキュリティ属性**で行います。' },
              { t: 'cmdbar', items: [{ id: 'cmd:newattrset', label: '属性セットの追加', icon: 'plus' }] },
              {
                t: 'card', title: '新しい属性セット', when: 'panel:attrset', children: [
                  { t: 'field', id: 'fld:attrset', label: '属性セット名', placeholder: 'Agent365', help: '手順書では `Agent365` という名前で作成します。' },
                  { t: 'btns', items: [{ id: 'btn:saveattrset', label: '追加', prim: true }] }
                ]
              },
              {
                t: 'card', title: '属性の定義', when: 'panel:attrdef', children: [
                  {
                    t: 'list', items: [
                      { id: 'attr:poc', icon: 'tag', title: '**PoCScope**', desc: '値：Pilot / Prod' },
                      { id: 'attr:crit', icon: 'tag', title: '**Criticality**', desc: '値：High / Medium / Low' },
                      { id: 'attr:dept', icon: 'tag', title: 'Department', desc: '（この PoC では使用しません）' }
                    ]
                  }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:attrdone', text: '重点エージェントの Agent identity に **PoCScope = Pilot** を割り当てました。以降、エージェントを追加するときは属性を付けるだけで同じポリシーが適用されます。' }
            ]
          }
        ],
        tasks: [
          { say: '左ナビの **カスタム セキュリティ属性** を開く', target: 'nav:entra.attr', navSel: 'nav:entra.attr', hint: '「保護」グループの中にあります。', done: '開きました。' },
          { say: '**属性セットの追加** を選ぶ', target: 'cmd:newattrset', set: { 'panel:attrset': true }, hint: 'まず属性セットを作ってから属性を定義します。', done: '追加画面が表示されました。' },
          { say: '属性セット名に **Agent365** と入力する', target: 'fld:attrset', pattern: '^agent365$', hint: '半角で `Agent365`。', done: '入力しました。' },
          { say: '**追加** する', target: 'btn:saveattrset', set: { 'panel:attrdef': true }, hint: '属性セットを作成します。', done: '属性セットができました。' },
          { say: '条件付きアクセスの対象指定に使う属性 **PoCScope** を定義する', target: 'attr:poc', set: { 'panel:attrdone': true }, hint: '値は Pilot / Prod の 2 つです。', miss: { 'attr:dept': 'Department はこの PoC では使いません。' }, done: '定義しました。' }
        ],
        wrap: '**Criticality**（High / Medium / Low）も同様に定義します。重点エージェントには `PoCScope = Pilot` を割り当て、9.3 のポリシーをこの属性でフィルターします。'
      },

      {
        type: 'sim',
        title: '9.3 条件付きアクセスをレポート専用で作成する',
        goal: 'Agents を対象に、高・中リスクをブロックするポリシーをレポート専用で作る',
        ref: 'image68.png',
        refCaption: 'エージェント向け条件付きアクセスポリシー（実画面）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_ConditionalAccess/Policies', brand: 'Microsoft Entra 管理センター',
            account: 'poc-caadmin@contoso.com（Conditional Access Administrator）',
            nav: ENTRA_NAV, navSel: 'nav:entra.ca',
            crumb: 'Entra ID > 条件付きアクセス > ポリシー', h1: 'ポリシー',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:newca', label: '新しいポリシー', icon: 'plus' }] },
              {
                t: 'table', cols: ['ポリシー名', '状態'],
                rows: [{ cells: ['既存：すべてのユーザーに MFA を要求', { chip: 'オン', kind: 'ok' }] }]
              },
              { t: 'note', text: '「すべてのユーザー」を対象にした既存ポリシーは **エージェントのユーザーアカウントには適用されません**。エージェント用のポリシーを別に作ります。' }
            ]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_ConditionalAccess/PolicyNew', brand: 'Microsoft Entra 管理センター',
            account: 'poc-caadmin@contoso.com（Conditional Access Administrator）',
            nav: ENTRA_NAV, navSel: 'nav:entra.ca',
            crumb: 'Entra ID > 条件付きアクセス > 新しいポリシー', h1: '新しいポリシー',
            content: [
              { t: 'field', id: 'fld:caname', label: '名前', placeholder: 'A365-PoC-Agents-Block-HighRisk（Report-only）', help: 'PoC 用と分かる命名にします。先頭は `A365-PoC`。' },
              {
                t: 'card', title: '割り当て', children: [
                  { t: 'select', id: 'sel:catarget', label: 'このポリシーの適用対象', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'users', label: 'ユーザー' }, { v: 'agents', label: 'エージェント（プレビュー）' }, { v: 'workload', label: 'ワークロード ID' }] },
                  { t: 'select', id: 'sel:caselect', label: '対象の選び方', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'individual', label: '個別のエージェントを選ぶ' }, { v: 'attr', label: 'カスタムセキュリティ属性（PoCScope = Pilot）で指定' }, { v: 'allagents', label: 'すべてのエージェント' }] },
                  { t: 'select', id: 'sel:caresource', label: 'ターゲット リソース', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'allagentres', label: 'All agent resources' }, { v: 'office', label: 'Office 365' }] }
                ]
              },
              {
                t: 'card', title: '条件とアクセス制御', children: [
                  { t: 'checks', items: [{ id: 'chk:riskHigh', label: 'エージェントのリスクレベル：**高**' }, { id: 'chk:riskMed', label: 'エージェントのリスクレベル：**中**' }, { id: 'chk:riskLow', label: 'エージェントのリスクレベル：低' }] },
                  { t: 'select', id: 'sel:cagrant', label: 'アクセス制御', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'block', label: 'Block access（アクセスをブロック）' }, { v: 'mfa', label: 'MFA を要求' }] },
                  { t: 'select', id: 'sel:castate', label: 'ポリシーの状態', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'on', label: 'オン（強制）' }, { v: 'reportonly', label: 'Report-only（レポート専用）' }, { v: 'off', label: 'オフ' }] },
                  { t: 'btns', items: [{ id: 'btn:createca', label: '作成', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:cadone', text: 'レポート専用で作成しました。1 週間以上運用し、サインインログの「レポート専用」の結果で「ブロックされていたはず」の件数と内訳を確認します。' }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          { say: '**新しいポリシー** を作成する', target: 'cmd:newca', screen: 0, hint: 'コマンドバーにあります。', done: '作成画面が開きました。' },
          { say: 'PoC 用と分かる名前を入力する（**A365-PoC** で始める）', target: 'fld:caname', screen: 1, pattern: '^A365-PoC', hint: '例：`A365-PoC-Agents-Block-HighRisk（Report-only）`。撤収時に見分けられるようにします。', done: '命名しました。' },
          { say: '適用対象で **エージェント（プレビュー）** を選ぶ', target: 'sel:catarget', equals: 'agents', hint: '「ユーザー、エージェント（プレビュー）、またはワークロード ID」からエージェントを選びます。', done: '選択しました。' },
          { say: '対象の選び方を **カスタムセキュリティ属性** にする', target: 'sel:caselect', equals: 'attr', hint: '個別のエージェントを選ぶと、増えるたびにポリシーの修正が必要になります。9.4 で作った属性を使います。', done: '属性で指定しました。' },
          { say: 'ターゲット リソースに **All agent resources** を選ぶ', target: 'sel:caresource', equals: 'allagentres', hint: '手順書の指定どおりです。', done: '選択しました。' },
          { say: '条件でリスクレベル **高** を選ぶ', target: 'chk:riskHigh', hint: '高・中のリスクを対象にします。', done: 'チェックしました。' },
          { say: 'リスクレベル **中** も選ぶ', target: 'chk:riskMed', hint: 'もう 1 つです。', miss: { 'chk:riskLow': '対象は高・中です。低リスクまで含めると誤検知が増えます。' }, done: 'チェックしました。' },
          { say: 'アクセス制御で **Block access** を選ぶ', target: 'sel:cagrant', equals: 'block', hint: 'エージェント ID に対しては Block のみが利用可能です。', done: '選択しました。' },
          { say: 'ポリシーの状態を **Report-only** にする', target: 'sel:castate', equals: 'reportonly', hint: 'PoC 期間中はレポート専用が基本です。強制は Week 4 に判断します。', done: 'レポート専用にしました。' },
          { say: '**作成** する', target: 'btn:createca', set: { 'panel:cadone': true }, hint: '最後に作成します。', done: '作成しました。' }
        ],
        wrap: '条件付きアクセスが適用されないケース：セキュリティの既定値群が有効／API キーでのアクセス／Blueprint が Microsoft Graph 向けにトークンを取得する場合。'
      },

      {
        type: 'sim',
        title: '9.5-9.6 アクセスパッケージとアクセスレビュー',
        goal: '有効期限と承認者（スポンサー）を設定し、レビューを 1 サイクル回す',
        ref: 'image71.png',
        refCaption: 'エンタイトルメント管理 > アクセス パッケージ（実画面）',
        screens: [
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_Azure_ELMAdmin/AccessPackages', brand: 'Microsoft Entra 管理センター',
            nav: ENTRA_NAV, navSel: 'nav:entra.em',
            crumb: 'ID ガバナンス > エンタイトルメント管理 > アクセス パッケージ', h1: 'アクセス パッケージ',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:newap', label: '新しいアクセス パッケージ', icon: 'plus' }] },
              {
                t: 'card', title: '新しいアクセス パッケージ', when: 'panel:apnew', children: [
                  { t: 'select', id: 'sel:apres', label: 'リソース', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'spgroup', label: 'SG-HR-Portal-Access（特定の SharePoint サイトへのアクセス用グループ）' }, { v: 'license', label: 'ライセンス' }] },
                  { t: 'select', id: 'sel:apsubject', label: 'ポリシーの対象', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'users', label: 'ディレクトリ内のユーザーのみ' }, { v: 'agents', label: 'ディレクトリ内のユーザー、サービス プリンシパル、エージェント ID' }] },
                  { t: 'select', id: 'sel:apscope', label: '対象', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'allagents', label: 'All agents' }, { v: 'one', label: '特定のエージェント 1 体' }] },
                  { t: 'select', id: 'sel:apexp', label: '有効期限', value: '', options: [{ v: '', label: '（選択してください）' }, { v: '30', label: '30 日' }, { v: 'never', label: '無期限' }] },
                  { t: 'select', id: 'sel:apapprover', label: '承認者', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'sponsor', label: 'スポンサー' }, { v: 'globaladmin', label: 'グローバル管理者' }] },
                  { t: 'btns', items: [{ id: 'btn:createap', label: '作成', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:apdone', text: '作成しました。重点エージェント 1 体に管理者が直接割り当てを行い、**期限と延長の通知がスポンサーに届く**ことを確認します。' }
            ]
          },
          {
            portal: 'entra', url: 'https://entra.microsoft.com/#view/Microsoft_AAD_ERM/AccessReviews', brand: 'Microsoft Entra 管理センター',
            nav: ENTRA_NAV, navSel: 'nav:entra.ar',
            crumb: 'ID ガバナンス > アクセス レビュー', h1: 'アクセス レビュー',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:newar', label: '新しいアクセス レビュー', icon: 'plus' }] },
              {
                t: 'card', title: '新しいアクセス レビュー', when: 'panel:arnew', children: [
                  { t: 'select', id: 'sel:artarget', label: 'レビュー対象', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'ap', label: '9.5 のアクセス パッケージ' }, { v: 'allusers', label: '全ユーザーのロール割り当て' }] },
                  { t: 'select', id: 'sel:arreviewer', label: 'レビュー担当者', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'sponsor', label: 'スポンサー' }, { v: 'self', label: '本人（セルフレビュー）' }] },
                  { t: 'select', id: 'sel:arperiod', label: '期間と繰り返し', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'once1w', label: '1 週間・1 回限り' }, { v: 'quarterly', label: '四半期ごと' }] },
                  { t: 'btns', items: [{ id: 'btn:createar', label: '作成', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:ardone', text: '作成しました。スポンサーがレビューを完了し、結果（承認・拒否）が反映されることを確認します。拒否した割り当ては期限後に削除されます。' }
            ]
          }
        ],
        endScreen: 1,
        tasks: [
          { say: '**新しいアクセス パッケージ** を作成する', target: 'cmd:newap', screen: 0, set: { 'panel:apnew': true }, hint: 'コマンドバーにあります。', done: '作成画面が開きました。' },
          { say: 'リソースとして **エージェントが必要とするセキュリティグループ** を追加する', target: 'sel:apres', equals: 'spgroup', hint: '例：特定の SharePoint サイトへのアクセス用グループ。', done: '選択しました。' },
          { say: 'ポリシーの対象で **ユーザー、サービス プリンシパル、エージェント ID** を選ぶ', target: 'sel:apsubject', equals: 'agents', hint: 'エージェント ID を含む選択肢です。', done: '選択しました。' },
          { say: '対象を **All agents** にする', target: 'sel:apscope', equals: 'allagents', hint: '個別指定にしないのが本 PoC の方針です。', done: '選択しました。' },
          { say: '有効期限を **30 日** にする', target: 'sel:apexp', equals: '30', hint: '期限を設けることで、延長の通知がスポンサーに届きます。', miss: {}, done: '設定しました。' },
          { say: '承認者を **スポンサー** にする', target: 'sel:apapprover', equals: 'sponsor', hint: 'スポンサーは「このエージェントは引き続き必要か」を判断する人です。', done: '設定しました。' },
          { say: '**作成** する', target: 'btn:createap', set: { 'panel:apdone': true }, hint: '最後に作成します。', done: '作成しました。' },
          { say: '左ナビの **アクセス レビュー** を開く', target: 'nav:entra.ar', screen: 1, navSel: 'nav:entra.ar', hint: 'ID ガバナンスの中にあります。', done: '開きました。' },
          { say: '**新しいアクセス レビュー** を作成する', target: 'cmd:newar', set: { 'panel:arnew': true }, hint: 'コマンドバーにあります。', done: '作成画面が開きました。' },
          { say: 'レビュー対象を **9.5 のアクセス パッケージ** にする', target: 'sel:artarget', equals: 'ap', hint: 'アクセスパッケージ、またはエージェントが所属するグループが対象です。', done: '選択しました。' },
          { say: 'レビュー担当者を **スポンサー** にする', target: 'sel:arreviewer', equals: 'sponsor', hint: 'セルフレビューでは統制になりません。', done: '選択しました。' },
          { say: '期間を **1 週間・1 回限り** にする', target: 'sel:arperiod', equals: 'once1w', hint: 'PoC 期間中に 1 サイクル完了させます。', done: '選択しました。' },
          { say: '**作成** する', target: 'btn:createar', set: { 'panel:ardone': true }, hint: '最後に作成します。', done: '作成しました。' }
        ]
      },

      {
        type: 'checklist',
        title: '9.7 確認ポイント',
        goal: 'Week 3 前半の完了条件を確認する',
        key: 'w3-1-check',
        items: [
          { text: '重点エージェントすべてに **オーナーとスポンサー**が割り当てられている' },
          { text: 'レポート専用の条件付きアクセスが重点エージェント（**属性で指定**）に適用され、結果がサインインログで確認できる' },
          { text: '**アクセスレビューが 1 サイクル完了**している' }
        ]
      },

      {
        type: 'quiz',
        title: 'Entra Agent ID の理解度チェック',
        goal: 'オーナー／スポンサーの違いと属性運用を定着させる',
        questions: [
          {
            q: 'スポンサーの役割として正しいものはどれですか。',
            choices: ['エージェントの技術的な実装を担当する', '「このエージェントは引き続き必要か」を判断し、期限切れ通知やアクセスレビューの判断を担う', 'ライセンスを購入する', 'テナントの管理者権限を持つ'],
            answer: [1],
            explain: 'オーナー＝技術的な管理者、スポンサー＝業務上の責任者です。'
          },
          {
            q: '条件付きアクセスの対象をカスタムセキュリティ属性で指定する理由はどれですか。',
            choices: ['ポリシーの作成が速くなるから', 'エージェントが増えてもポリシーを増やさずに済むから', '属性が必須項目だから', '個別指定ができないから'],
            answer: [1],
            explain: '以降はエージェントに属性（PoCScope = Pilot）を付けるだけで同じポリシーが適用されます。'
          },
          {
            q: 'Registry に存在するが Agent identity を持たないエージェントを、台帳でどう扱いますか。',
            choices: ['即削除する', '「Entra Agent ID なし（シャドー）」として印を付ける', '無視する', '自動的に Agent identity が作られるまで待つ'],
            answer: [1],
            explain: '突合結果を台帳に反映することが Week 3 の棚卸しの目的です。'
          },
          {
            q: 'エージェント ID に対する条件付きアクセスのアクセス制御で利用できるものはどれですか。',
            choices: ['MFA を要求', 'Block access のみ', 'デバイス準拠を要求', 'パスワード変更を要求'],
            answer: [1],
            explain: 'エージェント ID に対しては Block のみが利用可能です。'
          },
          {
            q: 'アクセスパッケージで有効期限（例：30 日）を設定する目的はどれですか。',
            choices: ['ライセンス費用を抑えるため', '期限と延長の通知がスポンサーに届き、継続要否を判断できるようにするため', 'エージェントの性能を上げるため', '監査ログを減らすため'],
            answer: [1],
            explain: '期限切れ時にスポンサーが判断する運用が、ライフサイクル統制の中核です。'
          }
        ]
      }
    ]
  });

  /* ---------------- 手順 6 ---------------- */
  A365.addLesson('ja', {
    id: 'w3-2',
    week: 3,
    chapter: '10',
    title: '手順 6：リアルタイム保護と調査',
    summary: 'Defender のリアルタイム保護ルール作成、脅威検出、高度なハンティング',
    steps: [
      {
        type: 'sim',
        title: '10.1 AI エージェントのリアルタイム保護ルールを作る',
        goal: '名前・スコープ・除外・検出の種類を指定してルールを作成し、有効になったことを確認する',
        ref: ['image72.png', 'image73.png'],
        refCaption: '設定 > AI のセキュリティ > ポリシーとルール > リアルタイム保護（実画面）',
        screens: [
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai', brand: 'Microsoft Defender',
            account: 'poc-secadmin@contoso.com（Security Administrator）',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ', h1: 'AI のセキュリティ',
            content: [
              { t: 'tabs', id: 'ai3', sel: 'tab:ai3.setup', items: [{ id: 'tab:ai3.setup', label: 'セットアップ' }, { id: 'tab:ai3.rules', label: 'ポリシーとルール' }, { id: 'tab:ai3.discovered', label: '検出された AI エージェント' }] },
              { t: 'banner', kind: 'ok', text: 'オンボードは完了しています（Week 1）。' }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai/rules', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ > ポリシーとルール', h1: 'ポリシーとルール',
            content: [
              { t: 'tabs', id: 'ai3', sel: 'tab:ai3.rules', items: [{ id: 'tab:ai3.setup', label: 'セットアップ' }, { id: 'tab:ai3.rules', label: 'ポリシーとルール' }, { id: 'tab:ai3.discovered', label: '検出された AI エージェント' }] },
              {
                t: 'list', items: [
                  { id: 'rule:rtp', icon: 'shield-check', title: '**リアルタイム保護**', desc: 'プロンプトインジェクション等を検出時にブロック／監査する' },
                  { id: 'rule:alert', icon: 'bell', title: 'アラート チューニング', desc: 'アラートの抑制ルール' }
                ]
              }
            ]
          },
          {
            portal: 'defender', url: 'https://security.microsoft.com/securitysettings/ai/rules/realtime', brand: 'Microsoft Defender',
            nav: DEF_NAV, navSel: 'nav:def.settings.ai',
            crumb: '設定 > AI のセキュリティ > ポリシーとルール > リアルタイム保護', h1: 'リアルタイム保護',
            content: [
              { t: 'cmdbar', items: [{ id: 'cmd:newrule', label: 'ルールの作成', icon: 'plus' }] },
              {
                t: 'card', title: '新しいルール', when: 'panel:rulenew', children: [
                  { t: 'field', id: 'fld:rulename', label: '名前', placeholder: 'A365-PoC-RTP-Pilot', help: 'PoC 用と分かる命名にします。' },
                  { t: 'select', id: 'sel:rulescope', label: 'スコープ', value: '', options: [{ v: '', label: '（選択してください）' }, { v: 'all', label: 'テナント内のすべてのエージェント' }, { v: 'pilot', label: 'パイロット対象のエージェントに限定' }] },
                  { t: 'checks', items: [{ id: 'chk:detJail', label: '脱獄（jailbreak）の試行' }, { id: 'chk:detXpia', label: '**間接プロンプト注入（XPIA）の試行**' }, { id: 'chk:detLeak', label: '秘密情報・認証情報の漏えい' }] },
                  { t: 'field', id: 'fld:ruleexclude', label: '除外（任意）', placeholder: '例：開発用エージェント' },
                  { t: 'btns', items: [{ id: 'btn:createrule', label: '作成', prim: true }] }
                ]
              },
              { t: 'banner', kind: 'ok', when: 'panel:ruledone', text: 'ルールが有効になりました。Copilot Studio エージェントや Foundry エージェントに対して **プロンプトインジェクションのテスト**を実行し、リアルタイム保護が動作することを確認します。' }
            ]
          }
        ],
        endScreen: 2,
        tasks: [
          { say: '**ポリシーとルール** のタブを開く', target: 'tab:ai3.rules', screen: 0, hint: '設定 > AI のセキュリティ の中にあります。', done: '開きました。' },
          { say: '**リアルタイム保護** を開く', target: 'rule:rtp', screen: 1, hint: 'プロンプトインジェクション等をリアルタイムに扱う項目です。', done: '開きました。' },
          { say: '**ルールの作成** を選ぶ', target: 'cmd:newrule', screen: 2, set: { 'panel:rulenew': true }, hint: 'コマンドバーにあります。', done: '作成画面が開きました。' },
          { say: 'ルール名を **A365-PoC** で始まる名前にする', target: 'fld:rulename', pattern: '^A365-PoC', hint: '例：`A365-PoC-RTP-Pilot`。', done: '命名しました。' },
          { say: 'スコープを **パイロット対象に限定**する', target: 'sel:rulescope', equals: 'pilot', hint: '本番テナントです。いきなり全社に広げません。', miss: {}, done: '限定しました。' },
          { say: '検出の種類で **間接プロンプト注入（XPIA）の試行** を選ぶ', target: 'chk:detXpia', hint: 'Defender が検出する代表的な脅威の 1 つです。', done: '選択しました。' },
          { say: '**作成** する', target: 'btn:createrule', set: { 'panel:ruledone': true }, hint: '最後に作成します。', done: '作成しました。' }
        ],
        wrap: '詳細：https://learn.microsoft.com/ja-jp/defender-xdr/security-for-ai/ai-agent-real-time-protection'
      },

      {
        type: 'info',
        title: '10.2 脅威の検出と調査（高度なハンティング）',
        goal: 'Defender が検出する脅威の種類と、KQL による調査方法を知る',
        body: [
          { h: 'ほぼリアルタイムで AI エージェントの脅威を検出' },
          { p: 'Microsoft Defender は AI エージェントの活動を継続的に監視し、すべての Agent 365 管理エージェントに対して不審かつ悪意のある行動を検出します。エージェントのテレメトリ、ツールの使用、実行パターンを分析します。' },
          {
            ul: [
              '脱獄（jailbreak）試み',
              '間接プロンプト注入（XPIA）試み',
              '悪意あるコンテンツの伝播',
              '秘密情報や認証情報の漏えい',
              '回避技術',
              '大規模言語モデル（LLM）偵察',
              '疑わしいユーザーや IP アクセス'
            ]
          },
          { img: 'image74.png', caption: 'AI エージェントの脅威検出（実画面）' },
          { h: '高度なハンティングで調査する' },
          { p: 'AI エージェントのアラートはインシデントに関連付けられ、関連コンテキストが表示されるため、影響の評価と対応の優先順位付けが素早く行えます。アナリストは **KQL（Kusto クエリ言語）** で Agent 365 の監視データにクエリを実行できます。' },
          { img: 'image75.png', caption: '高度なハンティングでの調査（実画面）' },
          { note: '参考：https://learn.microsoft.com/ja-jp/defender-xdr/security-for-ai/ai-agent-detection-protection' }
        ]
      },

      {
        type: 'quiz',
        title: 'リアルタイム保護と調査の理解度チェック',
        goal: '検出される脅威と調査手段を確認する',
        questions: [
          {
            q: 'Defender が AI エージェントに対して検出する脅威に含まれるものをすべて選んでください。',
            multi: true,
            choices: ['脱獄（jailbreak）試み', '間接プロンプト注入（XPIA）試み', '秘密情報や認証情報の漏えい', 'LLM 偵察', 'ライセンスの期限切れ'],
            answer: [0, 1, 2, 3],
            explain: 'ほかに悪意あるコンテンツの伝播、回避技術、疑わしいユーザーや IP アクセスも検出対象です。'
          },
          {
            q: '高度なハンティングで Agent 365 の監視データを調査するときに使う言語はどれですか。',
            choices: ['SQL', 'KQL（Kusto クエリ言語）', 'PowerShell', 'GraphQL'],
            answer: [1],
            explain: 'アラートはインシデントに関連付けられ、KQL でクエリして調査できます。'
          },
          {
            q: 'リアルタイム保護ルールのスコープとして PoC で適切なのはどれですか。',
            choices: ['テナント内のすべてのエージェント', 'パイロット対象のエージェントに限定', '外部テナントのエージェント', '設定しない'],
            answer: [1],
            explain: '本番テナントでの実施のため、影響範囲を限定します。'
          }
        ]
      }
    ]
  });

})();
