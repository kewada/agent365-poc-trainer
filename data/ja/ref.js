/* ===== リファレンス（付録） ===== */
(function () {

  A365.addLesson('ja', {
    id: 'ref-1',
    week: 9,
    chapter: '付録 A〜D',
    title: '付録：ポータル・ロール・台帳・参考資料',
    summary: 'いつでも参照できる早見表',
    steps: [
      {
        type: 'info',
        title: '付録 A：ポータルと URL 一覧',
        goal: '目的からポータルを引けるようにする',
        body: [
          {
            table: {
              head: ['用途', 'ポータル', 'パス'],
              rows: [
                ['エージェントの棚卸し・承認', 'Microsoft 365 管理センター', 'https://admin.cloud.microsoft/ > エージェント > 概要／すべてのエージェント（レジストリ）／マップ'],
                ['Defender のオンボード', 'Microsoft Defender ポータル', 'https://security.microsoft.com/ > 設定 > AI のセキュリティ > 開始する'],
                ['AI の可視化・監査・DLP', 'Microsoft Purview ポータル', 'https://purview.microsoft.com/ > DSPM > AI 観測可能性／監査／データ損失防止／インサイダーリスク管理'],
                ['エージェント ID', 'Microsoft Entra 管理センター', 'https://entra.microsoft.com/ > Entra ID > エージェント > Agent identities／Agent blueprints'],
                ['条件付きアクセス', 'Microsoft Entra 管理センター', 'Entra ID > 条件付きアクセス > ポリシー'],
                ['ID ガバナンス', 'Microsoft Entra 管理センター', 'ID ガバナンス > エンタイトルメント管理／アクセス レビュー／PIM'],
                ['ローカルエージェント制御', 'Microsoft Intune 管理センター', 'https://intune.microsoft.com/'],
                ['Copilot Studio 連携', 'Power Platform 管理センター', 'https://admin.powerplatform.microsoft.com/']
              ]
            }
          }
        ]
      },
      {
        type: 'info',
        title: '付録 B：ロールと操作の対応表',
        goal: '誰がどの操作をできるかを即座に確認する',
        body: [
          {
            table: {
              head: ['操作', 'AI Admin', 'Security Admin', 'Compliance Admin', 'CA Admin', 'Agent ID Admin', 'Global Reader'],
              rows: [
                ['Registry の閲覧', '○', '○', '—', '—', '—', '○'],
                ['Registry での承認・オーナー割り当て・ブロック', '○', '—', '—', '—', '—', '—'],
                ['Defender security for AI のオンボード', '—', '○', '—', '—', '—', '—'],
                ['Defender 由来リスクの確認', '—', '○', '—', '—', '—', '○'],
                ['Purview DSPM / DLP / 監査の設定', '—', '—', '○', '—', '—', '—'],
                ['Purview 由来リスクの確認', '—', '—', '○（IRM ロール要）', '—', '—', '—'],
                ['条件付きアクセスの作成', '—', '—', '—', '○', '—', '—'],
                ['Agent identities / Blueprints の管理', '—', '—', '—', '—', '○', '—'],
                ['Agent identities の閲覧', '○', '○', '○', '○', '○', '○']
              ]
            }
          }
        ]
      },
      {
        type: 'info',
        title: '付録 C：台帳テンプレートの列定義',
        goal: '台帳の列と出典を揃える',
        body: [
          {
            table: {
              head: ['列', '出典', '内容'],
              rows: [
                ['Name / Status / Channel / Publisher type / Platform / Owner / Date created / Last modified / Risks', 'Registry エクスポート', 'Registry の値をそのまま保持する'],
                ['Entra Agent ID 有無', 'Entra Agent identities', 'Object ID があるか。ないものはシャドーとして扱う'],
                ['Blueprint App ID', 'Entra Agent blueprints', 'どの Blueprint から作られたか'],
                ['スポンサー', 'Entra Agent identities', '業務上の責任者'],
                ['カスタムセキュリティ属性（PoCScope / Criticality）', 'Entra', '条件付きアクセスの対象指定に使う'],
                ['重点フラグ', 'PoC 判断', 'パイロット利用・オーナー不在・未管理・高リスクのいずれかに該当'],
                ['データソース（機密）', 'Agent Map', '人事・財務など機密性の高い接続先'],
                ['対応状況 / 担当 / 対応日 / 備考', 'PoC 運用', '是正・承認の記録']
              ]
            }
          },
          { note: 'KPI：棚卸し網羅率、オーナー不在件数、未管理件数、高リスク検知の対応率、条件付きアクセス適用率、スポンサー割り当て率。' }
        ]
      },
      {
        type: 'info',
        title: '付録 D：参考ドキュメント',
        goal: '最新情報の確認先を知る',
        body: [
          {
            ul: [
              'Microsoft Agent 365 overview — https://learn.microsoft.com/microsoft-agent-365/overview',
              'Manage agents in the Microsoft 365 admin center — https://learn.microsoft.com/microsoft-365/admin/manage/agent-365-overview',
              'Agent Registry — https://learn.microsoft.com/microsoft-365/admin/manage/agent-registry',
              'Get started with Microsoft Defender security for AI — https://learn.microsoft.com/defender-xdr/security-for-ai/get-started-defender-security-for-ai',
              'AI agent real-time protection — https://learn.microsoft.com/ja-jp/defender-xdr/security-for-ai/ai-agent-real-time-protection',
              'AI agent detection and protection — https://learn.microsoft.com/ja-jp/defender-xdr/security-for-ai/ai-agent-detection-protection',
              'Configure AI agent runtime protection（Defender for Endpoint）— https://learn.microsoft.com/ja-jp/defender-endpoint/configure-ai-agent-runtime-protection',
              'Microsoft Purview for Agent 365 — https://learn.microsoft.com/purview/ai-agent-365',
              'Manage agent identities (Microsoft Entra Agent ID) — https://learn.microsoft.com/entra/agent-id/manage-agent-identities-admin',
              'Conditional Access for agents — https://learn.microsoft.com/entra/identity/conditional-access/agent-id',
              'Target agent identities in Conditional Access — https://learn.microsoft.com/entra/identity/conditional-access/howto-target-agent-identities',
              'Governing agent identities (Entra ID Governance) — https://learn.microsoft.com/entra/id-governance/agent-id-governance-overview',
              'Copilot Studio external security provider — https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/external-security-provider'
            ]
          },
          { warn: '本書に記載のポータル名称・メニュー名は 2026 年 9〜10 月時点の情報に基づきます。プレビュー機能は名称や配置が変更される場合があるため、実施時に Microsoft Learn で最新を確認してください。' }
        ]
      }
    ]
  });

  /* ---- 総合演習 ---- */
  A365.addLesson('ja', {
    id: 'ref-2',
    week: 9,
    chapter: '総合',
    title: '総合演習：4 週間の流れを再構成する',
    summary: '全体の順序とポータルの対応を仕上げ確認する',
    steps: [
      {
        type: 'order',
        title: '手順 1〜7 を実施順に並べる',
        goal: 'PoC 全体のシーケンスを説明できるようにする',
        intro: '手順書の 4〜10 章に対応する作業を、実施する順序に並べ替えてください。',
        items: [
          '**手順 1**：Agent 365 の有効化確認（Week 1）',
          '**手順 2**：ローカルエージェントの検出／Defender のオンボード（Week 1）',
          '**手順 3**：エージェントレジストリによる棚卸し（Week 2）',
          '**手順 4**：Purview DSPM for AI の確認と検知ポリシー（Week 2）',
          '**手順 5**：Entra Agent ID とライフサイクル統制（Week 3）',
          '**手順 6**：リアルタイム保護と調査（Week 3）',
          '**手順 7**：運用プロセスの確定（Week 4）'
        ],
        explain: 'Week 1 で「見える化の土台」、Week 2 で「記録」、Week 3 で「統制と保護」、Week 4 で「運用化と判断」という流れです。'
      },
      {
        type: 'match',
        title: '作業とポータルの対応づけ',
        goal: 'どの作業をどのポータルで行うかを即答する',
        intro: '左の作業を行うポータルを右から選んでください。',
        leftTitle: '作業',
        rightTitle: 'ポータル',
        pairs: [
          { left: 'エージェントの棚卸し・CSV エクスポート・承認', right: 'Microsoft 365 管理センター' },
          { left: 'Security for AI のオンボードとリアルタイム保護ルール', right: 'Microsoft Defender ポータル' },
          { left: 'AI 観測可能性・監査・DLP・インサイダーリスク', right: 'Microsoft Purview ポータル' },
          { left: 'Agent identities、条件付きアクセス、アクセスレビュー', right: 'Microsoft Entra 管理センター' },
          { left: 'Copilot Studio エージェントの Defender 連携を環境ごとに有効化', right: 'Power Platform 管理センター' },
          { left: 'ローカルエージェントの制御ポリシー', right: 'Microsoft Intune 管理センター' }
        ]
      },
      {
        type: 'quiz',
        title: '仕上げの総合クイズ',
        goal: 'PoC 全体を通した判断力を確認する',
        questions: [
          {
            q: '本 PoC で「個別選択をしない」と定めている対象をすべて選んでください。',
            multi: true,
            choices: ['ライセンスを割り当てるユーザー', 'ポリシーの対象となるエージェント', 'アクセスレビューの対象', 'エクスポートする CSV の列'],
            answer: [0, 1, 2],
            explain: 'ユーザーはセキュリティグループ、エージェントは Blueprint またはカスタムセキュリティ属性で指定します。'
          },
          {
            q: 'Week 2 と Week 4 で同じ 4 指標を記録する理由はどれですか。',
            choices: ['レポートの体裁を整えるため', 'ベースラインと最終値を比較して KPI を算出するため', 'ライセンス数を調整するため', 'Microsoft に報告するため'],
            answer: [1],
            explain: '台帳の列定義と KPI は最初に固定し、範囲が広がっても同じ定義で測ります。'
          },
          {
            q: '新規エージェントの承認フローで、属性付与を公開より前に行う理由はどれですか。',
            choices: ['属性が付くことで条件付きアクセスの対象になるから', '公開後は属性を付けられないから', '属性付与に時間がかかるから', 'ライセンスが必要だから'],
            answer: [0],
            explain: '公開前に PoCScope / Criticality を付与することで、公開と同時にポリシーが効きます。'
          },
          {
            q: 'PoC 期間中に「削除」を行ってよいのはどのような場合ですか。',
            choices: ['オーナー不在と分かった時点', 'スポンサーの確認が取れた後', '高リスクが検知された時点', '未管理と分かった時点'],
            answer: [1],
            explain: '候補が見つからなければまずブロックし、削除はスポンサー確認後にのみ行います。'
          },
          {
            q: 'エージェントのリスク対応で「高リスク」の一次対応の目安はどれですか。',
            choices: ['当日中にオーナーへ連絡、必要に応じてブロック', '週次レビューで扱う', '月次棚卸しで扱う', '四半期のアクセスレビューで扱う'],
            answer: [0],
            explain: '中リスクは週次レビューで扱います。対応結果は台帳に記録し、KPI に反映します。'
          }
        ]
      }
    ]
  });

})();
