/* ===== Purview 調査、プラットフォーム接続、PoC 評価 ===== */
(function () {
  var PV = window.PURVIEW_NAV;
  var M365 = window.M365_NAV;

  function purview(path, title, selected, content) {
    return {
      portal: 'purview', url: 'https://purview.microsoft.com/' + path,
      brand: 'Microsoft Purview', nav: PV, navSel: selected,
      crumb: title, h1: title, content: content
    };
  }

  function registry(title, content) {
    return {
      portal: 'm365', url: 'https://admin.cloud.microsoft/#/agents/registry',
      brand: 'Microsoft 365 管理センター', nav: M365,
      navSel: 'nav:m365.agents.all', crumb: 'エージェント > すべてのエージェント',
      h1: title, content: content
    };
  }

  A365.addLesson('ja', {
    id: 'w2-3', week: 2, chapter: '7',
    title: 'Purview のリスクとアラートを調査する',
    summary: 'Registry から DSPM、インサイダーリスク、会話、DLP、活動証跡へ進む',
    steps: [
      {
        type: 'info', title: '7.5 Registry のリスクから調査を始める',
        goal: 'リスクの概要と詳細調査の入口を区別する',
        body: [
          { p: 'Registry の「Purview で確認する」は、現時点では Purview のホームへ移動します。アラート詳細へ直接移動するとは限りません。まず DSPM の AI 観測可能性で対象エージェントを確認します。' },
          { img: 'image44.png', caption: 'Registry のエージェントプロパティとリスクの入口' },
          { ol: [
            'DSPM > AI 観測可能性で組織全体の活動と対象エージェントを確認する',
            'インサイダーリスク管理 > アラートで対象エージェントの検知内容を確認する',
            'コミュニケーションコンプライアンス、DLP、アクティビティエクスプローラー、監査で詳細を確認する'
          ] },
          { note: 'ホームへの遷移と、IRM の権限不足は別の事象です。IRM の調査には Insider Risk Management Analyst / Investigator など必要なロールを確認します。' }
        ]
      },
      {
        type: 'sim', title: '7.6-A DSPM から対象エージェントの IRM アラートを開く',
        goal: '推奨事項の「アラートの調査」で対象エージェントに絞り込んで調査する',
        ref: ['image44.png', 'image47.png', 'image48.png', 'image49.png', 'image50.png', 'image51.png'],
        refCaption: 'DSPM の概要、推奨事項、IRM のフィルター済みアラートと活動詳細',
        screens: [
          registry('人事 FAQ エージェント — リスク', [
            { t: 'kv', rows: [['リスクの種類', '機密データへのアクセス'], ['発生元', 'Microsoft Purview']] },
            { t: 'btns', items: [{ id: 'btn:openpurview', label: 'Purview で確認する', prim: true }] }
          ]),
          purview('', 'ホーム', 'nav:pv.home', [
            { t: 'banner', text: 'Purview のホームが開きました。DSPM から対象エージェントのリスクを確認します。' }
          ]),
          purview('dspm', 'DSPM', 'nav:pv.dspm', [
            { t: 'list', items: [{ id: 'pv:observability', icon: 'telescope', title: 'AI 観測可能性', desc: '組織全体のエージェントアクティビティとリスク' }] }
          ]),
          purview('dspm/aiobservability', 'AI 観測可能性', 'nav:pv.dspm', [
            { t: 'table', cols: ['エージェント', 'リスク', '活動'],
              rows: [{ id: 'row:investigatehr', cells: ['人事 FAQ エージェント', { chip: '高', kind: 'err' }, '機密データへのアクセス'] }] }
          ]),
          purview('dspm/aiobservability', '人事 FAQ エージェント — 概要', 'nav:pv.dspm', [
            { t: 'tabs', id: 'agentdetails', sel: 'tab:agent.overview', items: [{ id: 'tab:agent.overview', label: '概要' }, { id: 'tab:agent.activity', label: 'アクティビティ' }] },
            { t: 'card', title: '推奨事項', children: [
              { t: 'p', text: 'エージェントからの潜在的なインサイダーリスクを調査する' },
              { t: 'btns', items: [{ id: 'btn:investigatealerts', label: 'アラートの調査', prim: true }] }
            ] }
          ]),
          purview('insiderriskmanagement/alerts', 'インサイダーリスク管理 > アラート', 'nav:pv.irm', [
            { t: 'banner', text: 'フィルター：人事 FAQ エージェント。このエージェントに関連する IRM アラートのみを表示しています。' },
            { t: 'table', cols: ['アラート ID', 'エージェント', '状態'],
              rows: [{ id: 'row:irmalert', cells: ['IRM-1042', '人事 FAQ エージェント', '要確認'] }] }
          ]),
          purview('insiderriskmanagement/alerts', 'IRM-1042 — エージェントアクティビティ', 'nav:pv.irm', [
            { t: 'kv', rows: [['対象', '人事 FAQ エージェント'], ['検知内容', '保護された資料へのアクセス'], ['状態', '調査中']] },
            { t: 'btns', items: [{ id: 'btn:activitydetails', label: 'アクティビティの詳細', prim: true }] },
            { t: 'card', title: '活動の確認', when: 'panel:irmactivity', children: [
              { t: 'kv', rows: [['データソース', '人事ポータル'], ['確認事項', '共有範囲、権限、オーナーの判断'], ['記録先', '台帳と評価レポート']] },
              { t: 'btns', items: [{ id: 'btn:recordirm', label: '調査結果を台帳に記録', prim: true }] }
            ] }
          ])
        ],
        endScreen: 6,
        tasks: [
          { say: '**Purview で確認する** を選ぶ', target: 'btn:openpurview', screen: 0, hint: 'リスクの発生元に移動します。', done: 'Purview のホームへ移動しました。' },
          { say: 'ホームから **DSPM** を開く', target: 'nav:pv.dspm', screen: 1, navSel: 'nav:pv.dspm', hint: 'ホーム表示だけでは権限不足とは判断できません。', done: 'DSPM を開きました。' },
          { say: '**AI 観測可能性** を開く', target: 'pv:observability', screen: 2, hint: 'エージェントの活動とリスクを確認します。', done: '活動の一覧が開きました。' },
          { say: '**人事 FAQ エージェント** を開く', target: 'row:investigatehr', screen: 3, hint: '調査するエージェントを選びます。', done: 'エージェントの詳細が開きました。' },
          { say: '**概要** タブを確認する', target: 'tab:agent.overview', screen: 4, hint: '概要の下部に推奨事項があります。', done: '推奨事項を確認できました。' },
          { say: '推奨事項の **アラートの調査** を選ぶ', target: 'btn:investigatealerts', hint: '潜在的なインサイダーリスクの調査へ進みます。', done: '対象エージェントの IRM アラートに絞り込みました。' },
          { say: '**IRM-1042** のアラート ID を開く', target: 'row:irmalert', screen: 5, hint: 'フィルター済みの一覧からアラートを選びます。', done: 'アラートの詳細が開きました。' },
          { say: '**アクティビティの詳細** を確認する', target: 'btn:activitydetails', screen: 6, set: { 'panel:irmactivity': true }, hint: '何にアクセスし、どの権限で動作したかを確認します。', done: '活動の詳細を確認しました。' },
          { say: '**調査結果を台帳に記録**する', target: 'btn:recordirm', hint: '内容、担当、対応状況を記録します。', done: '調査結果を記録しました。' }
        ],
        wrap: 'リスクの判断は発生元のポータルで行い、台帳に根拠を残します。Registry と各ポータルの表示には反映遅延があります。'
      },
      {
        type: 'sim', title: '7.6-B 会話・DLP・活動証跡を確認する',
        goal: '各ポータル機能を使い分けてアラートと AI インタラクションを確認する',
        ref: ['image52.png', 'image53.png', 'image54.png', 'image55.png', 'image56.png'],
        refCaption: 'コミュニケーションコンプライアンス、DLP、アクティビティエクスプローラー',
        screens: [
          purview('communicationcompliance', 'コミュニケーションコンプライアンス', 'nav:pv.cc', [
            { t: 'list', items: [{ id: 'cc:alerts', icon: 'bell', title: 'アラート', desc: 'ポリシーで検知した会話を確認' }] }
          ]),
          purview('communicationcompliance/alerts', 'コミュニケーションコンプライアンス > アラート', 'nav:pv.cc', [
            { t: 'table', cols: ['ポリシー', '状態', '対象'],
              rows: [{ id: 'row:pendingconversation', cells: ['AI 利用の確認', '保留中', '人事 FAQ エージェント'] }] },
            { t: 'card', title: '保留中の会話', when: 'panel:conversation', children: [
              { t: 'p', text: '対象会話、ポリシーで検知した理由、担当者の判断を確認します。' }
            ] }
          ]),
          purview('datalossprevention', 'データ損失防止', 'nav:pv.dlp', [
            { t: 'list', items: [{ id: 'dlp:alerts', icon: 'bell', title: 'アラート', desc: '機密情報に関する DLP の検知結果' }] }
          ]),
          purview('datalossprevention/alerts', 'データ損失防止 > アラート', 'nav:pv.dlp', [
            { t: 'table', cols: ['アラート ID', 'モード', '対象'],
              rows: [{ id: 'row:dlpalert', cells: ['DLP-2084', 'シミュレーション', '人事 FAQ エージェント'] }] },
            { t: 'card', title: 'DLP-2084 — 詳細', when: 'panel:dlpalertdetail', children: [
              { t: 'kv', rows: [['確認事項', '機密情報の種類、対象、ポリシー、アクション'], ['運用', 'オーナーが内容と連絡先を確認する']] }
            ] }
          ]),
          purview('dspm/activityexplorer', 'DSPM > アクティビティエクスプローラー', 'nav:pv.explorer', [
            { t: 'table', cols: ['対象', 'アクティビティ', 'データソース'],
              rows: [{ id: 'row:aiinteraction', cells: ['人事 FAQ エージェント', 'AI インタラクション', '人事ポータル'] }] },
            { t: 'card', title: 'AI インタラクションの詳細', when: 'panel:interaction', children: [
              { t: 'p', text: '対話内容、関連するデータ、活動日時を確認し、アラートの内容と突合します。' }
            ] }
          ]),
          purview('audit/auditsearch', '監査', 'nav:pv.audit', [
            { t: 'select', id: 'sel:investigationaudit', label: 'アクティビティ', options: [{ v: '', label: '（選択してください）' }, { v: 'agent', label: 'エージェントとの対話' }] },
            { t: 'btns', items: [{ id: 'btn:searchinvestigationaudit', label: '検索', prim: true }] },
            { t: 'card', title: '検索結果', when: 'panel:investigationaudit', children: [
              { t: 'kv', rows: [['証跡', '人からエージェント、エージェントからツール、エージェントから人'], ['保存先', '評価レポートの Evidence']] }
            ] }
          ])
        ],
        endScreen: 5,
        tasks: [
          { say: 'コミュニケーションコンプライアンスの **アラート** を開く', target: 'cc:alerts', screen: 0, hint: '会話内容の確認に進みます。', done: '会話のアラートを開きました。' },
          { say: '**保留中**の会話を確認する', target: 'row:pendingconversation', screen: 1, set: { 'panel:conversation': true }, hint: 'ポリシーで検知した会話を確認します。', done: '保留中の会話を確認しました。' },
          { say: '**データ損失防止** を開く', target: 'nav:pv.dlp', navSel: 'nav:pv.dlp', hint: 'データに関する検知は DLP で確認します。', done: 'DLP に移動しました。' },
          { say: 'DLP の **アラート** を開く', target: 'dlp:alerts', screen: 2, hint: 'ポリシー一覧ではなくアラートを開きます。', done: 'DLP のアラート一覧を開きました。' },
          { say: '**DLP-2084** の内容を確認する', target: 'row:dlpalert', screen: 3, set: { 'panel:dlpalertdetail': true }, hint: '対象、ポリシー、モードを確認します。', done: 'DLP の検知内容を確認しました。' },
          { say: 'DSPM の **アクティビティエクスプローラー** を開く', target: 'nav:pv.explorer', navSel: 'nav:pv.explorer', hint: 'AI インタラクションを確認する場所です。', done: 'アクティビティエクスプローラーへ移動しました。' },
          { say: '**AI インタラクション** の内容を確認する', target: 'row:aiinteraction', screen: 4, set: { 'panel:interaction': true }, hint: 'アラートと活動内容を突合します。', done: 'AI インタラクションを確認しました。' },
          { say: '**監査** を開く', target: 'nav:pv.audit', navSel: 'nav:pv.audit', hint: '操作証跡も確認します。', done: '監査へ移動しました。' },
          { say: '監査のアクティビティで **エージェントとの対話** を選ぶ', target: 'sel:investigationaudit', screen: 5, equals: 'agent', hint: '人、エージェント、ツール間の対話を確認します。', done: '対象アクティビティを選びました。' },
          { say: '**検索**して Evidence を確認する', target: 'btn:searchinvestigationaudit', set: { 'panel:investigationaudit': true }, hint: '検索結果を評価レポートの根拠として保存します。', done: '活動の証跡を確認しました。' }
        ],
        wrap: 'DLP のブロックをエージェント自身は認識できません。オーナーの監視・連絡体制を整え、強制適用は Week 4 に根拠を記録して判断します。'
      },
      {
        type: 'quiz', title: 'Purview 調査の判断を確認する',
        goal: '概要、会話、データ、活動証跡の確認先を使い分ける',
        questions: [
          { q: 'Registry から Purview のホームが開いた場合、次に進む場所はどれですか。',
            choices: ['テナントの再作成', 'DSPM > AI 観測可能性', 'Intune のデバイス一覧', '条件付きアクセスの強制適用'], answer: [1],
            explain: '現時点の遷移ではホームが開きます。DSPM から対象エージェントを選び、推奨事項のアラートの調査へ進みます。' },
          { q: 'AI 観測可能性で対象エージェントの「アラートの調査」を選ぶと、何が表示されますか。',
            choices: ['全ユーザーのサインインログ', '対象エージェントに絞り込まれた IRM アラート', 'ライセンス一覧', 'Intune の設定'], answer: [1],
            explain: 'アラート ID を開いて、エージェントアクティビティの詳細を調査します。' },
          { q: 'ポリシーで検知された保留中の会話を確認する場所はどれですか。',
            choices: ['コミュニケーションコンプライアンス', '課金情報', 'Agent blueprints', 'PowerShell Gallery'], answer: [0],
            explain: '会話はコミュニケーションコンプライアンス、DLP の検知はデータ損失防止、AI インタラクションはアクティビティエクスプローラーで確認します。' }
        ]
      }
    ]
  }, 'w2-2');

  A365.addLesson('ja', {
    id: 'w2-4', week: 2, chapter: '8',
    title: '接続されたプラットフォームのエージェントを棚卸しする',
    summary: 'プラットフォーム接続、初期同期、アンマネージド一覧、観測可能性の範囲',
    steps: [
      {
        type: 'info', title: '8 接続できるプラットフォームと能力の違い',
        goal: '接続による棚卸しと、アクティビティの観測可能性を区別する',
        body: [
          { p: 'サードパーティーのエージェントプラットフォームを API 経由で Agent 365 に接続し、検出したエージェントをアンマネージドエージェントとしてレジストリへ追加できます。同期、管理、観測可能性の能力はプラットフォームによって異なります。' },
          { table: { head: ['接続対応プラットフォーム（2026 年 10 月 1 日時点）'], rows: [
            ['Amazon Bedrock と AgentCore'], ['Anthropic Claude'], ['Databricks Genie'],
            ['Gemini Enterprise Agent Platform (Google Vertex AI)'], ['Salesforce AgentForce'], ['Snowflake AI'], ['UiPath']
          ] } },
          { img: 'image57.png', caption: '接続されたプラットフォームの一覧' },
          { note: 'プラットフォーム固有の設定項目と提供者ガイドは、実施時に Microsoft Learn で確認します。接続できることと、すべての機能に対応することは同義ではありません。' }
        ]
      },
      {
        type: 'sim', title: '8.1 プラットフォームを接続して初期同期を確認する',
        goal: '接続設定の確認、保存、初期同期、レジストリへの追加を順に確認する',
        ref: ['image58.png', 'image59.png', 'image60.png', 'image61.png', 'image62.png', 'image63.png', 'image64.png'],
        refCaption: '接続の管理、接続設定、資格情報の検証、同期、アンマネージド一覧',
        screens: [
          registry('すべてのエージェント', [
            { t: 'card', title: '接続されたプラットフォーム', children: [
              { t: 'p', text: 'プラットフォームの接続を管理します。' },
              { t: 'btns', items: [{ id: 'btn:manageplatforms', label: '管理', prim: true }] }
            ] }
          ]),
          registry('接続されたプラットフォーム', [
            { t: 'cmdbar', items: [{ id: 'cmd:connectplatform', label: 'プラットフォームを接続する', icon: 'plus' }] },
            { t: 'banner', text: '画面によっては「接続を追加」と表示されます。' }
          ]),
          registry('プラットフォームを接続する', [
            { t: 'field', id: 'fld:connectionname', label: '接続名', placeholder: '営業ナレッジ基盤' },
            { t: 'field', id: 'fld:connectiondescription', label: '説明', placeholder: '営業部門のエージェントを棚卸しする' },
            { t: 'select', id: 'sel:platform', label: 'プラットフォーム', options: [
              { v: '', label: '（選択してください）' }, { v: 'bedrock', label: 'Amazon Bedrock と AgentCore' },
              { v: 'claude', label: 'Anthropic Claude' }, { v: 'databricks', label: 'Databricks Genie' },
              { v: 'gemini', label: 'Gemini Enterprise Agent Platform (Google Vertex AI)' },
              { v: 'salesforce', label: 'Salesforce AgentForce' }, { v: 'snowflake', label: 'Snowflake AI' }, { v: 'uipath', label: 'UiPath' }
            ] },
            { t: 'card', title: 'プラットフォーム固有の接続設定', when: 'panel:platformselected', children: [
              { t: 'p', text: '提供者ガイドに従って必要な情報と権限を確認します。資格情報は実際の管理ポータルで入力し、この学習アプリには入力しません。' },
              { t: 'checks', items: [{ id: 'chk:providerconfig', label: '提供者ガイドの設定情報と権限を確認した' }] },
              { t: 'btns', items: [{ id: 'btn:validatecredentials', label: '資格情報を検証', prim: true }] }
            ] },
            { t: 'banner', kind: 'ok', when: 'panel:credentialsvalid', text: '接続設定の確認が完了しました。接続を保存します。' },
            { t: 'btns', when: 'panel:credentialsvalid', items: [{ id: 'btn:saveconnection', label: '保存', prim: true }] }
          ]),
          registry('営業ナレッジ基盤 — 同期', [
            { t: 'wizard', items: [{ id: 'step:syncstarted', label: '初期同期', status: '進行中', statusKind: 'pend' }] },
            { t: 'btns', items: [{ id: 'btn:refreshsync', label: '最新の情報に更新', prim: true }] },
            { t: 'banner', kind: 'ok', when: 'panel:synccomplete', text: '初期同期が完了しました。同期されたエージェントを確認します。' },
            { t: 'table', when: 'panel:synccomplete', cols: ['名前', 'プラットフォーム'],
              rows: [{ cells: ['営業ナレッジ検索エージェント', 'Amazon Bedrock'] }] },
            { t: 'btns', when: 'panel:synccomplete', items: [{ id: 'btn:backregistry', label: 'レジストリに戻る', prim: true }] }
          ]),
          registry('レジストリ', [
            { t: 'tiles', items: [{ id: 'tile:connectedunmanaged', value: '1', label: 'アンマネージドエージェント' }] },
            { t: 'table', when: 'panel:connectedagents', cols: ['名前', 'プラットフォーム', '接続'],
              rows: [{ id: 'row:connectedagent', cells: ['営業ナレッジ検索エージェント', 'Amazon Bedrock', '営業ナレッジ基盤'] }] },
            { t: 'card', title: '営業ナレッジ検索エージェント — 詳細', when: 'panel:connectedagentdetail', children: [
              { t: 'kv', rows: [['状態', 'アンマネージド'], ['確認事項', '取得できるメタデータ、担当、活動テレメトリーの有無']] },
              { t: 'btns', items: [{ id: 'btn:recordconnectedagent', label: '台帳に記録', prim: true }] }
            ] }
          ])
        ],
        endScreen: 4,
        tasks: [
          { say: '接続されたプラットフォームの **管理** を開く', target: 'btn:manageplatforms', screen: 0, hint: 'すべてのエージェントのウェブパートから開きます。', done: '接続の管理を開きました。' },
          { say: '**プラットフォームを接続する** を選ぶ', target: 'cmd:connectplatform', screen: 1, hint: '「接続を追加」と表示される場合もあります。', done: '接続設定を開きました。' },
          { say: '用途を表す **接続名** を入力する', target: 'fld:connectionname', screen: 2, pattern: '\\S', hint: '例：営業ナレッジ基盤。', done: '接続名を入力しました。' },
          { say: '接続の目的を **説明** に入力する', target: 'fld:connectiondescription', pattern: '\\S', hint: '何を棚卸しする接続かを書きます。', done: '目的を入力しました。' },
          { say: '**Amazon Bedrock と AgentCore** を選ぶ', target: 'sel:platform', equals: 'bedrock', set: { 'panel:platformselected': true }, hint: '接続するプラットフォームを選びます。', done: 'プラットフォームを選びました。' },
          { say: '**提供者ガイドの設定情報と権限を確認した** にチェックする', target: 'chk:providerconfig', hint: '必要な情報はプラットフォームによって異なります。', done: '接続に必要な情報を確認しました。' },
          { say: '**資格情報を検証**する', target: 'btn:validatecredentials', set: { 'panel:credentialsvalid': true }, hint: '実際の接続では管理ポータルで検証結果を確認します。', done: '検証結果の確認に進みました。' },
          { say: '接続を **保存**する', target: 'btn:saveconnection', hint: '保存すると初期同期が開始されます。', done: '接続を保存しました。' },
          { say: '**最新の情報に更新**して初期同期の完了を確認する', target: 'btn:refreshsync', screen: 3, set: { 'panel:synccomplete': true, 'step:syncstarted.status': '完了', 'step:syncstarted.kind': 'done' }, hint: '同期の完了と取得したエージェントを確認します。', done: '同期結果を確認しました。' },
          { say: '**レジストリに戻る** を選ぶ', target: 'btn:backregistry', hint: '同期したエージェントをレジストリで確認します。', done: 'レジストリに戻りました。' },
          { say: '**アンマネージドエージェント** を開く', target: 'tile:connectedunmanaged', screen: 4, set: { 'panel:connectedagents': true }, hint: '接続されたプラットフォームがない場合は表示されません。', done: '同期したエージェントを表示しました。' },
          { say: '**営業ナレッジ検索エージェント** の詳細を開く', target: 'row:connectedagent', set: { 'panel:connectedagentdetail': true }, hint: 'プラットフォームによって表示できる情報が異なります。', done: 'エージェント情報を確認しました。' },
          { say: '取得した情報を **台帳に記録**する', target: 'btn:recordconnectedagent', hint: '接続元、管理状態、担当を記録します。', done: 'アンマネージドエージェントを台帳に記録しました。' }
        ],
        wrap: '接続と同期だけでエージェントがマネージドになるわけではありません。管理状態と観測可能性を区別し、各プラットフォームの対応範囲を確認します。'
      },
      {
        type: 'info', title: '8.2 アンマネージドエージェントの観測可能性',
        goal: 'メタデータの同期とアクティビティテレメトリーの収集を区別する',
        body: [
          { p: '対応するプラットフォームでは、エージェントのメタデータに加えて利用可能なアクティビティテレメトリーを収集できます。接続対応の 7 種類すべてが、同じ観測可能性を持つわけではありません。' },
          { table: { head: ['観測可能性対応（手順書記載時点）'], rows: [
            ['Amazon Bedrock'], ['Gemini Enterprise Agent Platform (Google Vertex AI)'], ['Anthropic Claude'], ['Salesforce Agentforce']
          ] } },
          { img: 'image65.png', caption: '接続されたエージェントの観測可能性' },
          { note: '対応プラットフォームと機能は更新されます。実施時に Microsoft Learn の「接続プラットフォーム」と「サードパーティエージェントの可観測性」を確認します。' }
        ]
      },
      {
        type: 'quiz', title: 'プラットフォーム接続の理解度チェック',
        goal: '接続、同期、管理状態、観測可能性の違いを確認する',
        questions: [
          { q: '接続したプラットフォームから同期されたエージェントは、どこで確認しますか。',
            choices: ['レジストリのアンマネージドエージェント', 'ライセンス割り当てエラー', 'アクセスパッケージの期限', 'Intune の端末更新'], answer: [0],
            explain: '初期同期後にレジストリへ戻り、アンマネージドエージェントを確認します。表示される情報はプラットフォームによって異なります。' },
          { q: '接続対応と観測可能性対応について正しいものはどれですか。',
            choices: ['接続対応の全プラットフォームが同じテレメトリーを提供する', '接続と観測可能性の対応範囲を別々に確認する', '接続すると自動的にマネージドになる', '台帳への記録は不要'], answer: [1],
            explain: '手順書では接続対応は 7 種類、観測可能性対応は 4 種類です。各プラットフォームの能力と最新の対応状況を確認します。' },
          { q: 'プラットフォーム固有の情報と権限は何に従って確認しますか。',
            choices: ['任意の共通パスワード', '提供者ガイドと Microsoft Learn', '学習アプリへの資格情報の入力', 'すべてのユーザーへの権限付与'], answer: [1],
            explain: '資格情報は実際の管理ポータルで扱います。この学習アプリには入力しません。' }
        ]
      }
    ]
  }, 'w2-3');

  var observe = [
    ['OBS-01', '全件棚卸し', 'Registry の 4 指標を記録し、CSV と Registry の合計件数が一致する', 'ダッシュボード、baseline CSV', 'Week 2 / S1'],
    ['OBS-02', 'Owner・Platform・Status・Risk の把握', '付録 C の台帳、フィルター別件数、重点フラグが揃っている', 'PoC 台帳、内訳の記録', 'Week 2 / S1'],
    ['OBS-03', '接続先と依存関係', '重点エージェントのツール・データソース・依存関係と機密性を記録する', 'エージェントマップ、台帳の機密データソース列', 'Week 2 / S1'],
    ['OBS-04', 'オーナー不在・未管理の特定', '該当する一覧を台帳に記録する。この時点では削除・ブロックしない', 'フィルター済み一覧、台帳', 'Week 2 / S2'],
    ['OBS-05', '活動証跡の取得', 'AI 観測可能性のリスク・詳細と、監査の対話記録を確認する', 'AI 観測可能性、監査の検索結果', 'Week 2 / S5'],
    ['OBS-06', 'ローカルエージェントの検出', 'Defender の一覧で端末とともに検出され、端末名・ユーザー・検出日を台帳に記録する', 'Defender の画面、台帳', 'Week 1 / S4']
  ];
  var govern = [
    ['GOV-01', 'Owner / Sponsor の明確化', '重点エージェントに両者を割り当て、Registry と Entra で確認する。オーナー不在は 0 件を目標とする', 'Registry、Entra、スポンサー列', 'Week 3 / S6'],
    ['GOV-02', 'Agent ID / Blueprint の棚卸し', '台帳と Agent identities を突合し、ID がないものをシャドーとして記録する。Blueprint の件数・オーナー・権限を確認する', 'Agent identities / blueprints、台帳', 'Week 3 / S6'],
    ['GOV-03', '属性による対象指定', 'Agent365 の PoCScope / Criticality を定義し、重点エージェントに Pilot を付与してポリシーを属性で指定する', '属性定義、対象設定、台帳', 'Week 3 / S7'],
    ['GOV-04', '期限付きアクセス', '重点エージェント 1 体にアクセスパッケージを割り当て、有効期限・スポンサー承認と通知を確認する', '設定・割り当て画面、通知', 'Week 3 / S8'],
    ['GOV-05', 'アクセスレビュー', 'スポンサーによるレビューを 1 サイクル完了し、拒否した割り当てが期限後に削除される', 'レビュー結果、割り当ての変更記録', 'Week 3 / S8'],
    ['GOV-06', '条件付きアクセスの評価', '属性指定のレポート専用ポリシーを 1 週間以上評価し、件数・内訳・誤検知と強制適用の判断材料を確認する。強制適用自体は必須ではない', 'サインインログ（レポート専用）、評価メモ', 'Week 3〜4 / S7'],
    ['GOV-07', '承認プロセスの運用', '申請・審査・属性付与・公開・記録で 1 件以上を処理し、グループへの公開と台帳・Registry の一致を確認する', '承認記録、台帳', 'Week 4 / S9'],
    ['GOV-08', 'オーナー不在の是正プロセス', '担当・頻度・判断基準を確定し、抽出したエージェントへの対応を台帳に記録する。削除はスポンサー確認後に限る', '運用フロー定義、対応記録', 'Week 3〜4 / S2・S6'],
    ['GOV-09', '定期棚卸しの定義', '月次・四半期・随時の担当を確定し、最終台帳をベースラインと比較する', 'final CSV、評価レポート', 'Week 4 / S1']
  ];
  var secure = [
    ['SEC-01', 'Defender の接続と可視化', 'Microsoft 365 コネクタと、利用時は Copilot Studio が接続済みになり、Registry のリスクと Defender への遷移を確認する', '完了・接続済み画面、Registry の Risks 列', 'Week 1 / S3'],
    ['SEC-02', 'AI 利用とデータのリスク検知', '機密情報の種類（SIT）に対応した検証で活動と Risky AI usage または DLP のアラートを確認し、Week 3 にレビューする', 'AI 観測可能性、アラート', 'Week 2〜3 / S5'],
    ['SEC-03', '脅威の検出・調査', 'アラート・インシデントと KQL の調査を確認する。検知がない場合は調査手順を確認できたことを記録する', 'アラート・インシデント、クエリ結果、調査手順の記録', 'Week 3 / S3'],
    ['SEC-04', 'リアルタイム保護', '有効なルールと Copilot Studio / Foundry での保護動作を確認する。ローカルのランタイム保護は前提条件を満たす場合に任意で確認する', 'ルールの設定、検出結果', 'Week 1 準備・Week 3 / S3'],
    ['SEC-05', '高リスク対応の運用', '日次確認・発生元での調査・一次対応の担当を確定し、検知した高リスクへの対応を記録する', '対応記録、高リスク検知の対応率', 'Week 3〜4 / S3・S5'],
    ['SEC-06', 'エージェント単位のブロック・解除', '重点エージェント 1 体のブロック中の利用不可と、解除後の復帰を確認する', 'Registry の操作記録、利用者画面', 'Week 4 / S10'],
    ['SEC-07', '監査から強制への移行判断', '条件付きアクセス・DLP・Intune について「対象を限定して強制」「監査を継続」「見送り」を判断し、理由と対象範囲を記録する', '切替判断の記録、評価レポート', 'Week 4 / S4・S5・S7・S10']
  ];

  function criteriaStep(title, goal, rows) {
    return { type: 'info', title: title, goal: goal,
      body: [{ table: { head: ['ID', '確認事項', 'Pass Criteria', 'Evidence', 'Week / シナリオ'], rows: rows } }] };
  }

  A365.addLesson('ja', {
    id: 'w4-5', week: 4, chapter: '12',
    title: 'PoC の成功基準と終了判定',
    summary: '22 の Success Criteria、Evidence、S1〜S10、5 Outcome による Exit Criteria',
    steps: [
      {
        type: 'info', title: '12.1 設定完了ではなく Evidence で評価する',
        goal: 'Success Criteria、検証シナリオ、Evidence、Exit Criteria の関係を説明する',
        body: [
          { p: 'Success Criteria は Observe・Govern・Secure の 22 基準です。各基準を「Pass」「一部達成」「未達」で記録し、一部達成・未達の理由と本展開時の対応を評価レポートに残します。' },
          { table: { head: ['階層', '役割'], rows: [
            ['Success Criteria', '何を確認し、どの Evidence で評価するか'],
            ['S1〜S10', '基準を確認するための具体的な検証シナリオ'],
            ['Evidence', '台帳、CSV、スクリーンショット、ログ、アラート、運用フロー定義'],
            ['Exit Criteria', '5 Outcome で PoC 全体の終了を判定する']
          ] } },
          { note: '学習の進捗・スコアは、実際の PoC の評価結果ではありません。実際の判定には対象テナントで取得した Evidence を使用します。' },
          { warn: 'PoC の基本はレポート専用・監査のみです。強制適用は必須ではなく、11.5 の条件を満たす場合に対象を限定して判断します。S10 の個別ブロック・解除の確認と、ポリシーの全社強制適用は区別します。' }
        ]
      },
      criteriaStep('12.2 Observe — 6 基準', '棚卸し、接続先、管理状態、活動、ローカルエージェントを Evidence で確認する', observe),
      criteriaStep('12.3 Govern — 9 基準', '責任者、ID、属性、期限、レビュー、承認・是正・棚卸しの運用を評価する', govern),
      criteriaStep('12.4 Secure — 7 基準', '検知・調査・保護・対応と、監査から強制への判断を評価する', secure),
      {
        type: 'match', title: '12.5 シナリオと Evidence を対応付ける',
        goal: 'S1〜S10 の結果を評価基準へつなげる',
        intro: '各シナリオに対応する主な Evidence を選んでください。',
        leftTitle: 'シナリオ', rightTitle: '主な Evidence',
        pairs: [
          { left: 'S1 全件棚卸し', right: 'baseline / final CSV、PoC 台帳' },
          { left: 'S2 オーナー不在の検出', right: 'オーナー不在一覧、是正の対応記録' },
          { left: 'S3 Defender との接続', right: 'Registry の Risks 列、Defender の接続・調査画面' },
          { left: 'S4 ローカルエージェントの検出', right: 'Defender の端末付き AI エージェント一覧' },
          { left: 'S5 Purview による検知', right: 'AI 観測可能性の活動、Purview のアラート' },
          { left: 'S6 スポンサー割り当て', right: 'Registry・Entra の責任者表示、スポンサー列' },
          { left: 'S7 条件付きアクセス', right: 'サインインログのレポート専用結果、評価メモ' },
          { left: 'S8 アクセスレビュー', right: 'レビュー結果、割り当ての変更記録' },
          { left: 'S9 承認フロー', right: '承認・グループへの公開記録、台帳' },
          { left: 'S10 ブロックと解除', right: 'ブロック・解除の操作記録、利用者画面' }
        ]
      },
      {
        type: 'info', title: '12.5 Week・シナリオ・Outcome のトレーサビリティ',
        goal: '基準と結果の対応を追跡できるようにする',
        body: [
          { table: { head: ['Week', '確認する基準'], rows: [
            ['Week 0', 'Success Criteria・KPI・台帳定義の合意'],
            ['Week 1', 'OBS-06、SEC-01、SEC-04 の準備'],
            ['Week 2', 'OBS-01〜OBS-05、SEC-02'],
            ['Week 3', 'GOV-01〜GOV-06、SEC-03、SEC-04'],
            ['Week 4', 'GOV-07〜GOV-09、SEC-05〜SEC-07、Exit Criteria']
          ] } },
          { table: { head: ['シナリオ', 'Success Criteria', 'Exit Outcome'], rows: [
            ['S1', 'OBS-01・02・03、GOV-09', 'Observe、Operate'],
            ['S2', 'OBS-04、GOV-08', 'Observe、Operate'],
            ['S3', 'SEC-01・03・05', 'Protect'],
            ['S4', 'OBS-06、SEC-07', 'Observe、Control'],
            ['S5', 'OBS-05、SEC-02・05・07', 'Protect、Control'],
            ['S6', 'GOV-01・02・08', 'Govern、Operate'],
            ['S7', 'GOV-03・06、SEC-07', 'Govern、Control'],
            ['S8', 'GOV-04・05', 'Govern'],
            ['S9', 'GOV-07', 'Operate'],
            ['S10', 'SEC-06・07', 'Control']
          ] } },
          { note: 'Evidence は取得した週ごとに保存し、Week 4 の評価レポートに添付します。baseline / final CSV は 6.3・11.6 の命名規則に従います。' }
        ]
      },
      {
        type: 'info', title: '12.6 5 Outcome で終了を判定する',
        goal: '達成・条件付き達成・未達と、追加検証の要否を判断する',
        body: [
          { table: { head: ['Outcome', '達成の基準', '関連基準 / KPI'], rows: [
            ['Observe', '対象エージェントを棚卸しし、台帳として管理できる', 'OBS-01〜06 / 棚卸し網羅率、未管理件数'],
            ['Govern', 'Owner / Sponsor / Agent ID / Risk の統制状態を確認できる', 'GOV-01〜06 / スポンサー割り当て率、オーナー不在件数'],
            ['Protect', 'Purview / Defender で AI 利用・データ・セキュリティのリスクを確認できる', 'OBS-05、SEC-01〜04 / 検知内容を評価レポートへ記載'],
            ['Control', '監査・評価結果を基に本番での強制適用の可否を判断できる', 'GOV-06、SEC-06・07 / 条件付きアクセス適用率'],
            ['Operate', '承認・是正・高リスク対応・定期棚卸しの担当とプロセスを定義できる', 'GOV-07〜09、SEC-05 / オーナー不在件数、高リスク検知の対応率']
          ] } },
          { ol: [
            '各 Outcome を「達成」「条件付き達成」「未達」で判定する',
            '条件付き達成では、未達の基準の理由と本展開時の対応を評価レポートに記録する',
            '5 Outcome がすべて達成または条件付き達成なら PoC を終了して本展開の検討へ進む',
            '未達の Outcome があれば追加検証の要否と範囲を報告会で合意する'
          ] },
          { note: 'Control は「強制」「監査継続」「見送り」の判断が根拠とともにできていれば達成です。条件付きアクセス適用率はレポート専用を含む対象割合で、属性付与率や強制適用率ではありません。' },
          { warn: 'Preview 機能の名称・配置・前提条件は実施時に Microsoft Learn で確認し、評価レポートに Preview 機能であることを記録します。' }
        ]
      },
      {
        type: 'quiz', title: '成功・終了判定の理解度チェック',
        goal: '設定完了と成果、監査と強制、基準と Outcome を区別する',
        questions: [
          { q: 'PoC を終了できる状態はどれですか。',
            choices: ['22 基準すべてが必須 Pass', '5 Outcome がすべて達成または条件付き達成', '全社への強制適用が完了', '学習スコアが満点'], answer: [1],
            explain: '未達の基準がある場合も、理由と本展開時の対応を記録して条件付き達成を判断できます。未達の Outcome があれば追加検証を合意します。' },
          { q: 'Control の達成に必須なのはどれですか。',
            choices: ['条件付きアクセスと DLP を必ず強制する', '監査・評価結果を根拠に強制、監査継続、見送りを判断する', '属性だけを付与する', 'アラートを削除する'], answer: [1],
            explain: '強制への切替そのものは必須ではありません。判断理由と対象範囲を記録します。' },
          { q: '条件付きアクセス適用率の分子はどれですか。',
            choices: ['属性を付与したエージェント数', '強制適用したエージェント数だけ', 'レポート専用を含むエージェント向けポリシーの対象数', '全ユーザー数'], answer: [2],
            explain: '重点エージェントのうち、エージェント向け条件付きアクセスポリシーの対象となっている割合です。属性の付与だけでは適用を証明できません。' },
          { q: 'PoC 期間中に脅威の検知が発生しなかった場合の SEC-03 の扱いはどれですか。',
            choices: ['検知したと記録する', '調査手順を確認できたことを記録する', 'すべての基準を Pass にする', 'Evidence は不要'], answer: [1],
            explain: '検知の有無を正確に記録し、実施できた調査手順とその根拠を残します。' },
          { q: '条件付き達成を判断する際に必要なものはどれですか。',
            choices: ['未達理由と本展開時の対応の記録', '学習アプリの完了画面だけ', '評価レポートを省略すること', '対象を全社に広げること'], answer: [0],
            explain: '個別基準の結果、Evidence、KPI を根拠に Outcome を判定します。' }
        ]
      }
    ]
  }, 'w4-1');
})();
