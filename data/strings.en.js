/* ===== 日本語 → 英語 対訳表（自動生成・編集しないこと） =====
 * data/ja の表示文字列だけを英訳したもの。構造値（id・target・answer など）は含まない。
 * Translate.lesson('en', lesson) がこの表を使って英語版レッスンを組み立てる。
 * 対訳 1541 件 — 手順書 v3 の日本語レッスン定義より
 */
Translate.register('en', {
  'PoC の全体像と前提条件':
    'PoC overview and prerequisites',
  '4 週間の進め方、ライセンス・ロール・既存構成・使用ポータルを押さえる':
    'The four-week plan, plus licences, roles, existing configuration and the portals you will use',
  '本書の目的とこの PoC の設計方針':
    'Purpose of the guide and the design principles behind this PoC',
  'なぜ「グループ」「Blueprint／属性」で指定するのかを理解する':
    'Understand why scoping uses groups, and blueprints or attributes',
  '本 PoC は、**顧客の本番テナント**で **Microsoft 365 E5 ＋ Microsoft Agent 365** を使い、パイロットユーザー（10 名程度）を対象に 4 週間で実施します。':
    'This PoC runs for four weeks in the **customer\'s production tenant**, using **Microsoft 365 E5 + Microsoft Agent 365** with a pilot group of about 10 users.',
  '項目':
    'Item',
  '内容':
    'Detail',
  '対象':
    'Audience',
  '情報システム部門・セキュリティ部門の PoC 実施担当者':
    'PoC leads in the IT and security teams',
  '前提構成':
    'Baseline configuration',
  'Microsoft 365 E5 に Microsoft Agent 365 を追加／本番テナントでパイロットユーザー 10 名程度':
    'Microsoft Agent 365 added to Microsoft 365 E5 / about 10 pilot users in the production tenant',
  '統制の適用':
    'Applying governance',
  'PoC 期間中は **レポート専用・監査のみ** が基本。強制（ブロック）は Week 4 に対象を限定して判断':
    '**Report-only and audit-only** is the default throughout the PoC. Enforcement (blocking) is decided in Week 4 for a limited scope.',
  '版':
    'Version',
  'v3（2026 年 9〜10 月時点）':
    'v3 (as of September–October 2026)',
  '人数や部門が変わっても手順を変えないための 3 つの設計方針':
    'Three design principles that keep the procedure unchanged as scope grows',
  'ユーザーの指定は個人ではなく、必ず**セキュリティグループ**で行う（ライセンス割り当て・ポリシー対象・レビュー対象のすべて）':
    'Scope users by **security group**, never individually — for licence assignment, policy targets and reviews alike',
  'エージェントの指定は個別選択ではなく、**Agent Blueprint またはカスタムセキュリティ属性**で行う':
    'Scope agents by **Agent Blueprint or custom security attribute**, never by individual selection',
  '台帳の列定義と KPI は最初に固定し、範囲が広がっても同じ定義で測る':
    'Fix the inventory columns and KPI definitions up front, so the same definitions still apply as scope widens',
  '章と週の対応':
    'Chapters mapped to weeks',
  '章':
    'Chapter',
  '週':
    'Week',
  '2〜3 章':
    'Ch. 2–3',
  '前提条件の確認、ロール付与、事前チェックリスト':
    'Confirm prerequisites, assign roles, work through the pre-flight checklist',
  '4〜5 章':
    'Ch. 4–5',
  'Agent 365 の有効化確認、ローカルエージェントの検出':
    'Confirm Agent 365 enablement and discover local agents',
  '6〜7 章':
    'Ch. 6–7',
  'エージェントレジストリによる棚卸しとベースライン作成、Purview DSPM for AI':
    'Take inventory with the Agent Registry and set a baseline; Purview DSPM for AI',
  '8 章':
    'Ch. 8',
  'Entra Agent ID の棚卸し、オーナー・スポンサー、条件付きアクセス、アクセスレビュー':
    'Entra Agent ID inventory, owners and sponsors, Conditional Access, access reviews',
  '9 章':
    'Ch. 9',
  'Defender のリアルタイム保護、脅威検出と調査':
    'Defender real-time protection, threat detection and investigation',
  '10 章':
    'Ch. 10',
  '運用プロセスの確定、監査モードから強制への切替判断、KPI 測定':
    'Finalise operating processes, decide on moving from audit to enforcement, measure KPIs',
  '11〜13 章':
    'Ch. 11–13',
  '全期間':
    'All weeks',
  '検証シナリオ、トラブルシューティング、撤収手順':
    'Validation scenarios, troubleshooting, rollback',
  '手順書に掲載された PoC 全体像の図（実資料より）':
    'The PoC overview diagram from the setup guide (actual document)',
  'ライセンスと必要なロール':
    'Licences and required roles',
  'どのライセンスが何を担い、どのロールがどの操作をできるのかを把握する':
    'Know what each licence covers and which role can perform which operation',
  '2.1 ライセンス':
    '2.1 Licences',
  '製品':
    'Product',
  'PoC での役割':
    'Role in the PoC',
  '割り当て先':
    'Assigned to',
  'Entra ID P2、Defender for Endpoint P2、Purview の各機能を包含。条件付きアクセス、ID Protection、DLP、インサイダーリスク、監査の土台':
    'Includes Entra ID P2, Defender for Endpoint P2 and Purview. The foundation for Conditional Access, ID Protection, DLP, insider risk and audit.',
  'パイロットユーザー、管理者（既存）':
    'Pilot users and administrators (existing)',
  'Agent Registry の統制機能、Entra Agent ID の統制、Defender・Purview のエージェント向け機能。ユーザー単位（USD 15/ユーザー/月）':
    'Agent Registry governance, Entra Agent ID governance, and the agent capabilities of Defender and Purview. Per user (USD 15/user/month).',
  'エージェントを管理・スポンサー・利用するユーザー。PoC では管理者とパイロットユーザー分':
    'Users who manage, sponsor or use agents. For the PoC, the administrators and the pilot users.',
  'Microsoft Defender for Endpoint（E5 に含む）':
    'Microsoft Defender for Endpoint (included in E5)',
  '端末上のローカルエージェントの検出とランタイム保護':
    'Discovery and runtime protection for local agents on devices',
  'パイロットユーザーの Windows 端末（アクティブモード）':
    'Pilot users\' Windows devices (active mode)',
  'Microsoft Intune（E5 に含む）':
    'Microsoft Intune (included in E5)',
  'ローカルエージェントに対するポリシー制御':
    'Policy control for local agents',
  'パイロットユーザーの管理端末':
    'Pilot users\' managed devices',
  'Microsoft 365 E7 は Copilot・Agent 365・Entra Suite を包含する上位スイートです。PoC は E5 ＋ Agent 365 で実施し、本展開時の比較対象として E7 を検討します。':
    'Microsoft 365 E7 is the higher-tier suite that bundles Copilot, Agent 365 and Entra Suite. Run the PoC on E5 + Agent 365, and consider E7 as the comparison for full rollout.',
  '2.2 必要なロール（PIM による時間限定付与を推奨）':
    '2.2 Required roles (time-bound assignment through PIM is recommended)',
  'ロール':
    'Role',
  '用途':
    'Purpose',
  'Agent Registry での承認、オーナー割り当て、ブロック・削除、ピン留め。Graph API でのエージェント一覧取得':
    'Approve, assign owners, block, delete and pin agents in the Agent Registry. Retrieve the agent list through the Graph API.',
  'Defender ポータルでの Security for AI オンボード、Defender 由来のリスク確認':
    'Onboard Security for AI in the Defender portal and review Defender-sourced risks',
  'DSPM for AI、DLP、監査、インサイダーリスクの設定':
    'Configure DSPM for AI, DLP, audit and insider risk',
  'Registry から Purview 由来のリスク詳細を参照する際に必要':
    'Required to open Purview-sourced risk details from the Registry',
  'エージェント向け条件付きアクセスポリシーの作成':
    'Create Conditional Access policies for agents',
  'Agent ID Administrator（または Cloud Application Administrator）':
    'Agent ID Administrator (or Cloud Application Administrator)',
  'Agent identities・Agent blueprints の管理、オーナー・スポンサーの変更':
    'Manage agent identities and agent blueprints; change owners and sponsors',
  'スポンサー変更時の通知などライフサイクルワークフローの構成（任意）':
    'Configure lifecycle workflows, such as notifications when a sponsor changes (optional)',
  'Power Platform 管理者':
    'Power Platform Administrator',
  'Copilot Studio の Real-time protection を Defender と連携する際の Power Platform 側作業':
    'Power Platform-side work when connecting Copilot Studio real-time protection to Defender',
  'Registry の閲覧のみ。統制操作は不可':
    'View the Registry only. Governance operations are not permitted.',
  '本番テナントでの実施です。管理ロールは **PIM で時間限定**に付与し、PoC 終了時に棚卸しして解除します（13 章）。':
    'This runs in a production tenant. Assign admin roles **time-bound through PIM**, then review and remove them when the PoC ends (ch. 13).',
  '操作とロールの対応づけ':
    'Match operations to roles',
  '「この操作には誰の権限が要るか」を即答できるようにする':
    'Be able to answer instantly whose permission an operation requires',
  '左の操作に必要なロールを右から選んでください（付録 B の対応表に対応）。':
    'Pick the role required for each operation on the left (this matches the table in Appendix B).',
  '操作':
    'Operation',
  '必要なロール':
    'Required role',
  'Registry での承認・オーナー割り当て・ブロック':
    'Approve, assign owners and block in the Registry',
  'Defender security for AI のオンボード':
    'Onboard Defender security for AI',
  'DSPM for AI / DLP / 監査の設定':
    'Configure DSPM for AI, DLP and audit',
  'Agent identities / Blueprints の管理、スポンサー変更':
    'Manage agent identities and blueprints; change sponsors',
  'Registry の閲覧のみ（統制操作は不可）':
    'View the Registry only (no governance operations)',
  'Purview 由来のリスク詳細の参照':
    'View Purview-sourced risk details',
  '必要な既存構成と使用するポータル':
    'Required existing configuration and the portals you will use',
  '6 つの管理ポータルと、その役割・URL を覚える':
    'Learn the six admin portals, what each is for, and their URLs',
  '2.3 必要な既存構成':
    '2.3 Required existing configuration',
  '要件':
    'Requirement',
  '理由':
    'Why',
  'セキュリティの既定値群':
    'Security defaults',
  '**無効**であること':
    'Must be **disabled**',
  '有効のままだとエージェント向け条件付きアクセスが適用されない':
    'If it stays enabled, Conditional Access for agents does not apply',
  'パイロット端末で**アクティブモード**でオンボード済み':
    'Onboarded in **active mode** on the pilot devices',
  'ローカルエージェントの検出とランタイム保護に必要':
    'Required for local agent discovery and runtime protection',
  'パイロット端末が登録・管理下にあること':
    'Pilot devices must be enrolled and managed',
  'ローカルエージェントに対するポリシー適用に必要':
    'Required to apply policy to local agents',
  '組織で利用中かどうかを確認':
    'Check whether your organization uses it',
  '利用中なら Real-time protection の連携（Power Platform 管理者作業）が必要':
    'If it is in use, real-time protection must be connected (work for the Power Platform administrator)',
  '監査（Purview）':
    'Audit (Purview)',
  '有効であること':
    'Must be enabled',
  'エージェントの操作証跡の取得に必要':
    'Required to capture an audit trail of agent activity',
  'パイロット用セキュリティグループ':
    'Pilot security group',
  '作成済みであること':
    'Must already exist',
  'ライセンス・ポリシー・レビューの対象をすべてグループで指定するため':
    'Because licences, policies and reviews are all scoped by group',
  '2.4 使用するポータル':
    '2.4 Portals you will use',
  'ポータル':
    'Portal',
  '本書での用途':
    'Used in this guide for',
  'Microsoft 365 管理センター':
    'Microsoft 365 admin center',
  'エージェント > 概要／すべてのエージェント（レジストリ）。棚卸し、承認、オーナー割り当て、エクスポート':
    'Agents > Overview / All agents (Registry). Inventory, approval, owner assignment and export.',
  'Microsoft Defender ポータル':
    'Microsoft Defender portal',
  '設定 > AI のセキュリティ。オンボード、エージェントの脅威検知':
    'Settings > Security for AI. Onboarding and agent threat detection.',
  'Microsoft Purview ポータル':
    'Microsoft Purview portal',
  'DSPM > AI 観測可能性。監査、DLP、インサイダーリスク':
    'DSPM > AI observability. Audit, DLP and insider risk.',
  'Microsoft Entra 管理センター':
    'Microsoft Entra admin center',
  'Entra ID > エージェント > Agent identities／Agent blueprints、条件付きアクセス、ID ガバナンス':
    'Entra ID > Agents > Agent identities / Agent blueprints, Conditional Access, Identity Governance',
  'Microsoft Intune 管理センター':
    'Microsoft Intune admin center',
  'ローカルエージェント制御ポリシー':
    'Local agent control policies',
  'Power Platform 管理センター':
    'Power Platform admin center',
  'Copilot Studio の Real-time protection 連携':
    'Copilot Studio real-time protection integration',
  'セキュリティの既定値群が無効であることを確認する':
    'Confirm that security defaults are disabled',
  'Entra 管理センターで、条件付きアクセスを使える状態かどうかを確かめる':
    'Check in the Entra admin center whether Conditional Access can be used',
  '参考：エージェント向け条件付きアクセスポリシーの画面（Week 3 で使用）':
    'For reference: the Conditional Access policy screen for agents (used in Week 3)',
  'ホーム':
    'Home',
  '概要':
    'Overview',
  'ユーザー':
    'Users',
  'グループ':
    'Groups',
  'エージェント':
    'Agents',
  'ロールと管理者':
    'Roles & admins',
  '保護':
    'Protection',
  '条件付きアクセス':
    'Conditional Access',
  'カスタム セキュリティ属性':
    'Custom security attributes',
  'ID ガバナンス':
    'Identity Governance',
  'エンタイトルメント管理':
    'Entitlement management',
  'アクセス レビュー':
    'Access reviews',
  'セキュリティの既定値群の状態を確認します。左のナビゲーションから目的の画面を開いてください。':
    'Check the state of security defaults. Open the screen you need from the left navigation.',
  'エージェント向け条件付きアクセスは **セキュリティの既定値群が有効のテナントでは適用されません**。Week 0 のうちに状態を確認します。':
    'Conditional Access for agents **does not apply in tenants where security defaults are enabled**. Confirm the state during Week 0.',
  'エンタープライズ アプリ':
    'Enterprise applications',
  'ホーム > Entra ID > 概要':
    'Home > Entra ID > Overview',
  'Contoso（テナント概要）':
    'Contoso (tenant overview)',
  '監視':
    'Monitoring',
  'プロパティ':
    'Properties',
  '推奨事項':
    'Recommendations',
  'テナント名':
    'Tenant name',
  'テナント ID':
    'Tenant ID',
  'ライセンス':
    'Licenses',
  '「プロパティ」タブにテナント全体の設定があります。':
    'Tenant-wide settings are on the Properties tab.',
  'ホーム > Entra ID > 概要 > プロパティ':
    'Home > Entra ID > Overview > Properties',
  '名前':
    'Name',
  '国または地域':
    'Country or region',
  '日本':
    'Japan',
  'データの場所':
    'Data location',
  '技術的な連絡先':
    'Technical contact',
  'セキュリティの既定値群の管理':
    'Manage security defaults',
  '既定のセキュリティ設定で組織を保護します':
    'Protect your organization with default security settings',
  '確認する':
    'Review',
  'Azure リソースのアクセス管理':
    'Access management for Azure resources',
  'グローバル管理者が Azure サブスクリプションを管理できるようにします':
    'Allow Global Administrators to manage Azure subscriptions',
  'セキュリティの既定値群を有効にする：**無効**':
    'Enable security defaults: **Disabled**',
  '無効です。エージェント向け条件付きアクセスを構成できます（Week 3）。':
    'Disabled. You can configure Conditional Access for agents (Week 3).',
  'キャンセル':
    'Cancel',
  '保存':
    'Save',
  '左ナビの **Entra ID > 概要** を開く':
    'Open **Entra ID > Overview** in the left navigation',
  'セキュリティの既定値群はテナント全体の設定です。「Microsoft Entra ID」グループの先頭にある項目から入ります。':
    'Security defaults is a tenant-wide setting. Enter from the first item under the "Microsoft Entra ID" group.',
  'テナント概要が開きました。':
    'The tenant overview is open.',
  '条件付きアクセスは Week 3 で使います。まずはテナントの概要からです。':
    'Conditional Access comes in Week 3. Start from the tenant overview.',
  '**プロパティ** タブを開く':
    'Open the **Properties** tab',
  'テナント全体の設定は概要画面の「プロパティ」タブにあります。':
    'Tenant-wide settings are on the Properties tab of the overview screen.',
  'プロパティが表示されました。':
    'Properties are displayed.',
  '**セキュリティの既定値群の管理** を開く':
    'Open **Manage security defaults**',
  'プロパティ画面の下部にあるリンクです。':
    'It is the link near the bottom of the Properties screen.',
  'パネルが開きました。状態を確認しましょう。':
    'The pane is open. Check the state.',
  '状態が **無効** であることを確認し、変更せずに **キャンセル** で閉じる':
    'Confirm the state is **Disabled**, then close with **Cancel** without changing anything',
  '確認だけが目的です。値を変更しないようにキャンセルで閉じます。':
    'You are only checking. Close with Cancel so you do not change the value.',
  'ここでは何も変更していないので保存は不要です。確認だけならキャンセルで閉じます。':
    'Nothing was changed here, so there is no need to save. If you are only checking, close with Cancel.',
  'セキュリティの既定値群が **有効** だった場合は、条件付きアクセスへの移行を顧客と合意してから無効化します（12 章のトラブルシューティング参照）。':
    'If security defaults were **enabled**, agree the move to Conditional Access with the customer before disabling it (see troubleshooting in ch. 12).',
  '前提条件の理解度チェック':
    'Prerequisites knowledge check',
  '前提・ロール・設計方針を確認する':
    'Review the prerequisites, roles and design principles',
  'PoC でユーザーを指定する方法として、手順書が必ず使うよう定めているものはどれですか。':
    'Which method does the guide require for scoping users in the PoC?',
  '個々のユーザーを都度選択する':
    'Select individual users each time',
  'セキュリティグループで指定する':
    'Scope by security group',
  '部署名でフィルターする':
    'Filter by department name',
  '全ユーザーを対象にする':
    'Target all users',
  'ライセンス割り当て・ポリシーの対象・レビューの対象のすべてをセキュリティグループで指定することで、パイロットの人数や部門が変わっても手順が変わりません。':
    'Scoping licence assignment, policy targets and reviews all by security group means the procedure does not change when the number of pilot users or their departments changes.',
  'エージェント向け条件付きアクセスが適用されなくなる条件をすべて選んでください。':
    'Select every condition under which Conditional Access for agents stops applying.',
  'セキュリティの既定値群が有効':
    'Security defaults are enabled',
  'API キーでのアクセス':
    'Access using an API key',
  'Blueprint が Microsoft Graph 向けにトークンを取得する場合':
    'The blueprint acquires a token for Microsoft Graph',
  'エージェントが Teams チャネルを使っている場合':
    'The agent uses a Teams channel',
  '8.3 の注意事項です。加えて「すべてのユーザー」を対象にした既存ポリシーはエージェントのユーザーアカウントには適用されません。':
    'These are the cautions in 8.3. In addition, an existing policy that targets "All users" does not apply to an agent\'s user account.',
  'Agent Registry で「承認・オーナー割り当て・ブロック」を行うために必要なロールはどれですか。':
    'Which role is required to approve, assign owners and block in the Agent Registry?',
  '閲覧系ロール（Global Reader / Security Reader）では統制操作はできません。AI Administrator に切り替え、PIM のアクティブ化を確認します。':
    'Read-only roles (Global Reader / Security Reader) cannot perform governance operations. Switch to AI Administrator and confirm the role is activated in PIM.',
  'PoC 期間中の統制の適用方針として正しいものはどれですか。':
    'Which statement describes the correct governance approach during the PoC?',
  '初週から強制ブロックを全社適用する':
    'Apply enforced blocking tenant-wide from week one',
  'レポート専用・監査のみを基本とし、強制は Week 4 に対象を限定して判断する':
    'Keep everything report-only and audit-only, and decide on enforcement for a limited scope in Week 4',
  '一切ポリシーを作らない':
    'Create no policies at all',
  'パイロット以外のユーザーにも同時に適用する':
    'Apply to users outside the pilot at the same time',
  '本番テナントでの実施のため、利用者への影響を抑えることを最優先にします。':
    'Because this runs in a production tenant, minimising impact on users is the top priority.',
  'ローカルエージェントの検出に必要な端末側の前提はどれですか。':
    'Which device-side prerequisite is required for local agent discovery?',
  'Defender for Endpoint がパッシブモード':
    'Defender for Endpoint is in passive mode',
  'Defender for Endpoint がアクティブモードでオンボード済み':
    'Defender for Endpoint is onboarded in active mode',
  'Intune 非管理であること':
    'The device is not managed by Intune',
  'Copilot Studio がインストール済み':
    'Copilot Studio is installed',
  'パッシブモードや未オンボードだとローカルエージェントは検出されません（12 章）。':
    'Local agents are not discovered in passive mode, or when the device is not onboarded (ch. 12).',
  '事前チェックリスト（Week 0）':
    'Pre-flight checklist (Week 0)',
  'キックオフ前に完了させる 10 項目。完了をもって Week 1 を開始する':
    'Ten items to complete before kickoff. Completing them is what starts Week 1.',
  '事前チェックリスト 10 項目':
    'The ten pre-flight checklist items',
  'Week 1 を開始できる状態かどうかを判定する':
    'Decide whether you are ready to start Week 1',
  'キックオフ前に以下をすべて完了させます。**本チェックリストの完了をもって Week 1 を開始**します。':
    'Complete all of the following before kickoff. **Completing this checklist is what starts Week 1.**',
  'Microsoft Agent 365 ライセンスが購入済みで、管理者とパイロットユーザー分の数量がある':
    'Microsoft Agent 365 licences are purchased, with enough for the administrators and the pilot users',
  'M365 管理センター > 課金情報 > ライセンス':
    'M365 admin center > Billing > Licenses',
  '情シス':
    'IT',
  'パイロット用セキュリティグループが作成され、対象ユーザーが登録されている':
    'The pilot security group exists and the target users are members',
  'Entra 管理センター > グループ':
    'Entra admin center > Groups',
  'Agent 365 ライセンスがグループベースでパイロットグループに割り当てられている':
    'Agent 365 licences are assigned to the pilot group using group-based assignment',
  'Entra 管理センター > グループ > ライセンス':
    'Entra admin center > Groups > Licenses',
  '必要な管理ロールが PIM で付与され、アクティブ化できる':
    'The required admin roles are assigned in PIM and can be activated',
  'Entra 管理センター > ID ガバナンス > PIM':
    'Entra admin center > Identity Governance > PIM',
  'セキュリティの既定値群が無効である':
    'Security defaults are disabled',
  'Entra 管理センター > 概要 > プロパティ':
    'Entra admin center > Overview > Properties',
  'セキュリティ':
    'Security',
  'パイロット端末が Defender for Endpoint（アクティブ）と Intune の管理下にある':
    'Pilot devices are managed by Defender for Endpoint (active) and by Intune',
  'Defender ポータル > 資産 > デバイス、Intune 管理センター':
    'Defender portal > Assets > Devices, and the Intune admin center',
  'Purview の監査が有効である':
    'Purview audit is enabled',
  'Purview ポータル > 監査':
    'Purview portal > Audit',
  'コンプライアンス':
    'Compliance',
  'Copilot Studio の利用有無と Power Platform 管理者を確認した':
    'You have confirmed whether Copilot Studio is in use, and who the Power Platform administrator is',
  '台帳テンプレート（付録 C）と KPI 定義を関係者で合意した':
    'Stakeholders have agreed the inventory template (Appendix C) and the KPI definitions',
  'キックオフ':
    'Kickoff',
  'パートナー':
    'Partner',
  '週次レビュー（30 分 × 4 回）と報告会の日程が確定している':
    'Weekly reviews (30 min × 4) and the report-out are scheduled',
  'カレンダー':
    'Calendar',
  'グループベースでライセンス割り当てを確認する':
    'Confirm group-based licence assignment',
  'パイロットグループに Agent 365 がグループ割り当てされているかを確認する（チェック項目 3）':
    'Check that Agent 365 is assigned to the pilot group by group assignment (checklist item 3)',
  'パイロット用セキュリティグループのライセンス割り当てを確認します。':
    'Check the licence assignment on the pilot security group.',
  '個人単位ではなく **グループベースのライセンス割り当て**にしておくと、パイロットの追加・削除がグループのメンバー変更だけで済みます。':
    'With **group-based licence assignment** rather than per-user, adding or removing pilot users is just a group membership change.',
  'ホーム > Entra ID > グループ':
    'Home > Entra ID > Groups',
  'すべてのグループ':
    'All groups',
  '新しいグループ':
    'New group',
  '更新':
    'Refresh',
  '種類':
    'Type',
  'メンバー数':
    'Members',
  'ソース':
    'Source',
  'クラウド':
    'Cloud',
  'ホーム > Entra ID > グループ > SG-Agent365-Pilot':
    'Home > Entra ID > Groups > SG-Agent365-Pilot',
  'メンバー':
    'Members',
  '割り当てられたロール':
    'Assigned roles',
  'グループの種類':
    'Group type',
  '所有者':
    'Owner',
  'ホーム > Entra ID > グループ > SG-Agent365-Pilot > ライセンス':
    'Home > Entra ID > Groups > SG-Agent365-Pilot > Licenses',
  '割り当て':
    'Assign',
  '再処理':
    'Reprocess',
  '製品名':
    'Product name',
  '割り当て状態':
    'Assignment state',
  'エラー':
    'Errors',
  '割り当て済み':
    'Assigned',
  'なし':
    'None',
  'Microsoft Agent 365 がグループに割り当てられ、割り当てエラーもありません。チェック項目 3 は完了です。':
    'Microsoft Agent 365 is assigned to the group with no assignment errors. Checklist item 3 is complete.',
  '左ナビの **グループ** を開く':
    'Open **Groups** in the left navigation',
  '「Microsoft Entra ID」グループの中にあります。':
    'It is inside the "Microsoft Entra ID" group.',
  'グループ一覧が開きました。':
    'The group list is open.',
  'パイロット用の **SG-Agent365-Pilot** を開く':
    'Open the pilot group **SG-Agent365-Pilot**',
  'PoC の対象はパイロットユーザー 10 名です。メンバー数からも判断できます。':
    'The PoC targets 10 pilot users. The member count is a clue.',
  'グループの詳細が開きました。':
    'The group details are open.',
  'All Company は全社グループです。PoC の対象はパイロット用セキュリティグループに限定します。':
    'All Company is the company-wide group. The PoC is scoped to the pilot security group only.',
  '**ライセンス** タブを開く':
    'Open the **Licenses** tab',
  'グループ詳細のタブに「ライセンス」があります。':
    '"Licenses" is one of the tabs on the group details page.',
  'グループに割り当てられたライセンスが表示されました。':
    'The licences assigned to the group are displayed.',
  '**Microsoft Agent 365** の行を開いて割り当て状態とエラーを確認する':
    'Open the **Microsoft Agent 365** row and check the assignment state and errors',
  '確認するのは Agent 365 の行です。E5 はすでに全社に割り当て済みという想定です。':
    'Check the Agent 365 row. E5 is assumed to be already assigned company-wide.',
  '割り当て状態を確認できました。':
    'You have confirmed the assignment state.',
  '対象ユーザーを 1 名開き、ライセンスが **「グループから継承」** になっていることも併せて確認します。管理者（AI Administrator を担うユーザー）にも Agent 365 ライセンスが必要です。':
    'Also open one of the target users and confirm the licence shows as **inherited from a group**. The administrator acting as AI Administrator needs an Agent 365 licence too.',
  '手順 1：Agent 365 の有効化確認':
    'Step 1: Confirm Agent 365 is enabled',
  'M365 管理センターでエージェントメニューと概要ペインを確認し、Week 1 開始時点を記録する':
    'Check the Agents menu and the overview pane in the M365 admin center, and record the Week 1 starting point',
  'エージェント > 概要 を開いてベースラインを記録する':
    'Open Agents > Overview and record the baseline',
  'AI Administrator でサインインし、エージェントの概要ペインが表示されることを確認する':
    'Sign in as AI Administrator and confirm the agent overview pane is displayed',
  'Microsoft 365 管理センター > エージェント > 概要（実画面）':
    'Microsoft 365 admin center > Agents > Overview (actual screen)',
  'チームとグループ':
    'Teams & groups',
  'すべてのエージェント':
    'All agents',
  'マップ':
    'Map',
  '課金情報':
    'Billing',
  '設定':
    'Settings',
  'AI Administrator でサインインしています。エージェントの状況を確認しましょう。':
    'You are signed in as AI Administrator. Check the state of your agents.',
  '**エージェント** メニューが表示されない場合はロール不足かライセンス未割り当てです（12 章）。':
    'If the **Agents** menu is not visible, either your role or your licence assignment is missing (ch. 12).',
  'アクティブ ユーザー':
    'Active users',
  '管理対象デバイス':
    'Managed devices',
  '割り当て可能なライセンス':
    'Available licenses',
  'ホーム > エージェント > 概要':
    'Home > Agents > Overview',
  '組織内のエージェントの状況をまとめて確認できます。':
    'See the state of every agent in the organization at a glance.',
  'このペインを記録（スクリーンショット）':
    'Record this pane (screenshot)',
  'エージェントの合計数':
    'Total agents',
  '危険にさらされているエージェント':
    'Agents at risk',
  '所有者のいないエージェント':
    'Agents without owners',
  'アンマネージドエージェント':
    'Unmanaged agents',
  '承認待ち':
    'Pending approval',
  'Week 1 開始時点の記録として保存しました。Week 4 の KPI 測定でこの値と比較します。':
    'Saved as the record of the Week 1 starting point. You will compare against these values when you measure KPIs in Week 4.',
  '左ナビの **エージェント > 概要** を開く':
    'Open **Agents > Overview** in the left navigation',
  '左のナビゲーションに「エージェント」グループがあります。その先頭の項目です。':
    'There is an "Agents" group in the left navigation. This is the first item in it.',
  '概要ペインが表示されました。':
    'The overview pane is displayed.',
  'すべてのエージェント（レジストリ）は Week 2 の棚卸しで使います。まずは概要です。':
    'All agents (the Registry) is used for the Week 2 inventory. Start with the overview.',
  'ライセンスの数量確認は Week 0 のチェック項目です。ここでは有効化の確認を行います。':
    'Checking licence quantities is a Week 0 checklist item. Here you are confirming enablement.',
  'エージェントの件数・リスク・承認待ちが表示されていることを確認し、**このペインを記録** する':
    'Confirm the agent counts, risks and pending approvals are shown, then **record this pane**',
  '手順書では「概要ペインのスクリーンショットを取得し、Week 1 の開始時点の記録として保存する」とあります。':
    'The guide says to take a screenshot of the overview pane and save it as the record of the Week 1 starting point.',
  'ベースラインを記録できました。':
    'You have recorded the baseline.',
  '概要が表示されない場合は 12 章（トラブルシューティング）を参照します。AI Administrator でサインインしているか、PIM でロールをアクティブ化しているかを確認してください。':
    'If the overview does not appear, see ch. 12 (troubleshooting). Check that you are signed in as AI Administrator and that the role is activated in PIM.',
  '4.3 確認ポイント':
    '4.3 Checkpoints',
  '手順 1 の完了条件を満たしているか確認する':
    'Confirm you have met the exit criteria for Step 1',
  '次の 3 点が満たされていれば手順 1 は完了です。':
    'Step 1 is complete when the following three points are true.',
  '**エージェント** メニューが表示され、**概要** と **すべてのエージェント（レジストリ）** が開ける':
    'The **Agents** menu is visible, and both **Overview** and **All agents (Registry)** open',
  'ライセンスの割り当てエラーがない':
    'There are no licence assignment errors',
  'PIM でアクティブ化したロールが有効な間に作業している':
    'You are working while the role you activated in PIM is still valid',
  '手順 2：Defender のオンボードとローカルエージェントの検出':
    'Step 2: Onboard Defender and discover local agents',
  'Security for AI のオンボード、M365 コネクタ、Copilot Studio 連携、ローカルエージェント検出':
    'Security for AI onboarding, the M365 connector, Copilot Studio integration, and local agent discovery',
  '5.1 前提の確認':
    '5.1 Confirm the prerequisites',
  'この手順を始める前に満たすべき条件を押さえる':
    'Know what must be true before you start this step',
  '4 章の手順で **Agent 365 が有効**になっていること':
    '**Agent 365 is enabled**, following the procedure in ch. 4',
  '**Security Administrator 以上**のロールでサインインすること':
    'Sign in with the **Security Administrator role or higher**',
  'ローカルエージェントの保護には、パイロット端末で **Defender for Endpoint がアクティブモード**であること':
    'For local agent protection, **Defender for Endpoint must be in active mode** on the pilot devices',
  '**Copilot Studio を利用している場合は Power Platform 管理者と作業日を合わせる**こと':
    '**If Copilot Studio is in use, align the work date with the Power Platform administrator**',
  'このレッスンでは Defender ポータル → PowerShell → Power Platform 管理センター → Defender ポータルと、複数のポータルを行き来します。流れを先に掴んでおくと迷いません。':
    'This lesson moves between several portals: Defender portal → PowerShell → Power Platform admin center → Defender portal. Knowing the flow up front keeps you oriented.',
  '作業':
    'Task',
  'ポータル／ツール':
    'Portal / tool',
  'Security for AI のオンボード開始とデータ収集の確認':
    'Start Security for AI onboarding and confirm data collection',
  'Defender ポータル':
    'Defender portal',
  'Microsoft 365 コネクタの接続':
    'Connect the Microsoft 365 connector',
  'Copilot Studio のリアルタイム保護をオンにし、エンドポイント URL を控える':
    'Turn on Copilot Studio real-time protection and note the endpoint URL',
  'Entra にアプリ登録（PowerShell スクリプト）してアプリ ID を取得':
    'Register an app in Entra (PowerShell script) and obtain the App ID',
  'アプリ ID を Defender のウィザードに貼り付けて保存':
    'Paste the App ID into the Defender wizard and save',
  'Microsoft Defender 連携を環境ごとに有効化':
    'Enable Microsoft Defender integration for each environment',
  'すべてのステップが完了／接続済みになったことを確認':
    'Confirm every step shows Complete or Connected',
  '検出されたローカルエージェントを台帳に記録':
    'Record discovered local agents in the inventory',
  '5.2-A Security for AI を開き、データ収集を確認する':
    '5.2-A Open Security for AI and confirm data collection',
  'Defender ポータルでオンボードを開始し、データ収集が有効であることを確認する':
    'Start onboarding in the Defender portal and confirm data collection is enabled',
  '開始画面／設定 > AI のセキュリティ／データ収集の有効トグル（実画面）':
    'The start screen, Settings > Security for AI, and the data collection toggle (actual screens)',
  'インシデントとアラート':
    'Incidents & alerts',
  '高度なハンティング':
    'Advanced hunting',
  '資産':
    'Assets',
  'デバイス':
    'Devices',
  'セットアップと構成':
    'Setup & configuration',
  'AI のセキュリティ':
    'Security for AI',
  'AI のセキュリティを開始する':
    'Get started with Security for AI',
  '組織内の AI エージェントの検出、保護、監視を開始します。':
    'Start discovering, protecting and monitoring the AI agents in your organization.',
  '開始する':
    'Get started',
  '後で':
    'Later',
  'オンボードを開始しました。設定画面から AI のセキュリティを開きます。':
    'Onboarding has started. Open Security for AI from Settings.',
  'オンボードを開始しました。続けて **セットアップと構成 > 設定 > AI のセキュリティ** を開きます。':
    'Onboarding has started. Next, open **Setup & configuration > Settings > Security for AI**.',
  '設定 > AI のセキュリティ':
    'Settings > Security for AI',
  'セットアップ':
    'Setup',
  'ポリシーとルール':
    'Policies & rules',
  'データ収集':
    'Data collection',
  'AI アクティビティのデータ収集':
    'Data collection for AI activity',
  '既定でオンです。オフにすると可視化が止まります。':
    'On by default. Turning it off stops visibility.',
  '完了':
    'Complete',
  'Microsoft 365 コネクタ':
    'Microsoft 365 connector',
  '未接続':
    'Not connected',
  '表示された開始画面で **開始する** をクリックする':
    'Click **Get started** on the start screen that appears',
  'Defender ポータルに初めて入ると、AI のセキュリティのオンボード画面が表示されます。':
    'The first time you enter the Defender portal, the Security for AI onboarding screen appears.',
  'オンボードを開始しました。':
    'Onboarding has started.',
  '左ナビから **設定** を開く':
    'Open **Settings** in the left navigation',
  '「セットアップと構成」グループの中にあります。':
    'It is inside the "Setup & configuration" group.',
  '設定を開きました。':
    'Settings is open.',
  '**AI のセキュリティ** を開く':
    'Open **Security for AI**',
  '設定の配下にある項目です。':
    'It is an item underneath Settings.',
  'AI のセキュリティ設定が開きました。':
    'The Security for AI settings are open.',
  'データ収集が **有効** であることと、**Agent 365** が「完了」であることを確認する（Agent 365 のステップをクリック）':
    'Confirm that data collection is **on** and that **Agent 365** shows Complete (click the Agent 365 step)',
  'トグルはオンのままにします。確認するのはウィザードの Agent 365 ステップの状態です。':
    'Leave the toggle on. What you are checking is the state of the Agent 365 step in the wizard.',
  'データ収集は既定でオンです。ここでクリックするとオフになってしまいます。確認するだけで触りません。':
    'Data collection is on by default. Clicking here would turn it off. Just check it — do not touch it.',
  'Agent 365 が完了であることを確認しました。':
    'You confirmed Agent 365 shows Complete.',
  'データ収集トグルは **オンのまま**にします。撤収時（13 章）も、原則として Defender security for AI のデータ収集と Microsoft 365 コネクタは維持します。':
    '**Leave the data collection toggle on.** At rollback (ch. 13) you also keep Defender security for AI data collection and the Microsoft 365 connector as a rule.',
  '5.2-B Microsoft 365 コネクタを接続する':
    '5.2-B Connect the Microsoft 365 connector',
  '2 種類のイベントを選んで Microsoft 365 に接続し、状態が「接続済み」になることを確認する':
    'Select the two event types, connect to Microsoft 365, and confirm the state becomes Connected',
  'Microsoft 365 コネクタの接続ウィザードと接続済み表示（実画面）':
    'The Microsoft 365 connector wizard and the Connected state (actual screens)',
  '設定 > AI のセキュリティ > Microsoft 365 コネクタ':
    'Settings > Security for AI > Microsoft 365 connector',
  '収集するイベントを選択して接続します。':
    'Select the events to collect, then connect.',
  '収集するデータ':
    'Data to collect',
  '**Microsoft Entra ID 管理イベント**':
    '**Microsoft Entra ID admin events**',
  '**Microsoft 365 アクティビティ**':
    '**Microsoft 365 activity**',
  'デバイス ログ（この手順では使用しません）':
    'Device logs (not used in this procedure)',
  'Microsoft 365 の接続':
    'Connect Microsoft 365',
  '状態：**接続済み**（反映にはしばらく時間を要します）':
    'State: **Connected** (it takes a while to take effect)',
  'ウィザードの **Microsoft 365 コネクタ** のステップを選択する':
    'Select the **Microsoft 365 connector** step in the wizard',
  'Agent 365 はすでに完了しています。次は未接続のステップです。':
    'Agent 365 is already complete. Next comes the step that is not yet connected.',
  'コネクタの設定画面が開きました。':
    'The connector settings are open.',
  '**Microsoft Entra ID 管理イベント** にチェックを入れる':
    'Select **Microsoft Entra ID admin events**',
  '手順書では 2 種類のイベントの両方にチェックを入れます。まず 1 つ目。':
    'The guide has you select both event types. This is the first.',
  'チェックしました。':
    'Selected.',
  'この手順で有効にするのは「Entra ID 管理イベント」と「Microsoft 365 アクティビティ」の 2 つです。':
    'The two to enable in this procedure are "Entra ID admin events" and "Microsoft 365 activity".',
  '**Microsoft 365 アクティビティ** にもチェックを入れる':
    'Also select **Microsoft 365 activity**',
  '2 つ目のチェックです。':
    'This is the second one.',
  '両方にチェックが入りました。':
    'Both are now selected.',
  '**Microsoft 365 の接続** をクリックする':
    'Click **Connect Microsoft 365**',
  'チェックを入れたら接続ボタンを押します。':
    'Once both are selected, press the connect button.',
  '接続処理が開始しました。':
    'The connection has started.',
  '状態が **接続済み** になるまで時間がかかることがあります。Microsoft 365 コネクタを接続しない場合でも Copilot Studio 側のブロックは動作しますが、**アラートが Defender ポータルに表示されません**。':
    'It can take a while before the state becomes **Connected**. Even without the Microsoft 365 connector, blocking still works on the Copilot Studio side — but **alerts will not appear in the Defender portal**.',
  '5.2-C Copilot Studio のリアルタイム保護とアプリ登録':
    '5.2-C Copilot Studio real-time protection and app registration',
  'エンドポイント URL を控え、PowerShell で Entra アプリを登録してアプリ ID を Defender に設定する':
    'Note the endpoint URL, register an Entra app with PowerShell, and set the App ID in Defender',
  'Copilot Studio ステップ／PowerShell Gallery／スクリプトの展開と実行（実画面）':
    'The Copilot Studio step, PowerShell Gallery, and extracting and running the script (actual screens)',
  '接続済み':
    'Connected',
  '設定 > AI のセキュリティ > Copilot Studio':
    'Settings > Security for AI > Copilot Studio',
  'リアルタイム保護':
    'Real-time protection',
  'Copilot Studio エージェントのリアルタイム保護':
    'Real-time protection for Copilot Studio agents',
  'オンにすると、Power Platform 管理者に共有するエンドポイント URL が表示されます。':
    'Turning this on reveals the endpoint URL to share with the Power Platform administrator.',
  'エンドポイント URL':
    'Endpoint URL',
  '共有先':
    'Share with',
  'URL をコピーしてメモする':
    'Copy the URL and note it down',
  'アプリ ID':
    'App ID',
  'PowerShell で Entra にアプリを登録し、表示されたアプリ ID をここに貼り付けます。':
    'Register an app in Entra with PowerShell, then paste the App ID shown here.',
  'アプリケーション（クライアント）ID':
    'Application (client) ID',
  'まだ取得していない場合は PowerShell での登録に進みます。':
    'If you do not have one yet, go on to register it with PowerShell.',
  'PowerShell でアプリを登録する':
    'Register the app with PowerShell',
  'ブラウザー':
    'Browser',
  'Entra にアプリ登録を行うスクリプトを入手します。':
    'Get the script that registers the app in Entra.',
  'PowerShellGet でインストールする':
    'Install with PowerShellGet',
  'スクリプトファイルを直接ダウンロードする':
    'Download the script file directly',
  'ドキュメントを開く':
    'Open the documentation',
  'エクスプローラー':
    'File Explorer',
  'ダウンロード':
    'Downloads',
  'ZIP ファイルの展開':
    'Extracting the ZIP file',
  'ダウンロードした ZIP を展開し、任意の場所に保存します（手順書では `C:\\MSFT`）。':
    'Extract the ZIP you downloaded and save it anywhere you like (the guide uses `C:\\MSFT`).',
  '展開先フォルダー':
    'Extract to folder',
  '手順書と同じ `C:\\MSFT` を入力してください。':
    'Enter `C:\\MSFT`, the same as the guide.',
  '展開後のパス：`C:\\MSFT\\create-copilotwebhookapp.1.0.1`':
    'Path after extraction: `C:\\MSFT\\create-copilotwebhookapp.1.0.1`',
  'Windows PowerShell（管理者として実行）':
    'Windows PowerShell (Run as administrator)',
  'ターミナル':
    'Terminal',
  'スクリプトの実行':
    'Running the script',
  '管理者としてターミナルを起動済みです。実行するコマンドを選んでください。':
    'The terminal is already running as administrator. Choose the command to run.',
  'テナント ID・エンドポイント・表示名・FIC 名をすべて指定':
    'Specifies the tenant ID, endpoint, display name and FIC name in full',
  'パラメーターなしで実行':
    'Runs with no parameters',
  'モジュールをインストールするだけ':
    'Only installs the module',
  'アプリ ID をコピーする':
    'Copy the App ID',
  'クリップボード：`7c91a4e2-3b15-4d8f-9a06-5e2d71c4b8f3`':
    'Clipboard: `7c91a4e2-3b15-4d8f-9a06-5e2d71c4b8f3`',
  '貼り付け':
    'Paste',
  '保存しました。状態が **接続済み** になるまでしばらくかかります。App ID を変更した直後は反映に最大 1 分かかります。':
    'Saved. It takes a while before the state becomes **Connected**. Right after you change the App ID, it can take up to a minute to take effect.',
  'ウィザードの **Copilot Studio** のステップを選択する':
    'Select the **Copilot Studio** step in the wizard',
  '残っている未接続のステップです。':
    'It is the remaining step that is not yet connected.',
  'Copilot Studio の設定が開きました。':
    'The Copilot Studio settings are open.',
  '**リアルタイム保護** をオンにする':
    'Turn on **Real-time protection**',
  'トグルをオンにすると、共有用のエンドポイント URL が表示されます。':
    'Turning the toggle on reveals the endpoint URL to share.',
  'エンドポイント URL が表示されました。':
    'The endpoint URL is displayed.',
  '表示された **URL をコピーしてメモ**する（Power Platform 管理者に共有します）':
    '**Copy the URL and note it down** (you will share it with the Power Platform administrator)',
  '後で Power Platform 管理センターで貼り付けます。必ず控えておきます。':
    'You will paste it later in the Power Platform admin center. Be sure to keep it.',
  'URL を控えました。':
    'You have noted the URL.',
  '**PowerShell でアプリを登録する** に進む':
    'Go on to **Register the app with PowerShell**',
  'アプリ ID はまだ持っていません。先に Entra へのアプリ登録が必要です。':
    'You do not have an App ID yet. The app must be registered in Entra first.',
  'PowerShell Gallery を開きます。':
    'Opening PowerShell Gallery.',
  'PowerShell Gallery で **Manual Download（raw nupkg file）** を選ぶ':
    'In PowerShell Gallery, choose **Manual Download (raw nupkg file)**',
  '手順書では「Manual Download > Download the raw nupkg file」を使います。':
    'The guide uses "Manual Download > Download the raw nupkg file".',
  'ダウンロードしました。':
    'Downloaded.',
  '展開先フォルダーに **C:\\MSFT** と入力する':
    'Enter **C:\\MSFT** as the extract-to folder',
  '半角で `C:\\MSFT` と入力します。':
    'Enter `C:\\MSFT` in single-byte characters.',
  'パスを指定しました。':
    'You have specified the path.',
  '管理者ターミナルで実行する **正しいコマンド**を選ぶ':
    'Choose the **correct command** to run in the administrator terminal',
  'TenantId・Endpoint・DisplayName・FICName のプレースホルダーを置き換えて実行します。':
    'Replace the TenantId, Endpoint, DisplayName and FICName placeholders, then run it.',
  'パラメーターなしでは TenantId やエンドポイントが指定できません。':
    'Without parameters you cannot specify TenantId or the endpoint.',
  'ここでは nupkg を手動展開済みです。インストールではなくスクリプトの実行が必要です。':
    'Here the nupkg is already extracted manually. You need to run the script, not install it.',
  'スクリプトが実行され、アプリ登録が完了しました。':
    'The script ran and the app registration completed.',
  '出力された **アプリ ID をコピー**する':
    '**Copy the App ID** from the output',
  '出力の AppId の値です。Defender のウィザードに貼り付けます。':
    'It is the AppId value in the output. You will paste it into the Defender wizard.',
  'アプリ ID をコピーしました。':
    'You have copied the App ID.',
  'Defender の入力欄に **アプリ ID を貼り付け**る':
    '**Paste the App ID** into the Defender field',
  'クリップボードの値を貼り付けます。':
    'Paste the value from the clipboard.',
  '貼り付けました。':
    'Pasted.',
  '**保存** をクリックする':
    'Click **Save**',
  '最後に保存して反映します。':
    'Save at the end to apply it.',
  '保存しました。':
    'Saved.',
  'アプリ ID の登録手順は Microsoft Learn の「外部セキュリティ プロバイダー」も参照してください：https://learn.microsoft.com/ja-jp/microsoft-copilot-studio/external-security-provider#step-1-configure-a-microsoft-entra-application':
    'For the app registration procedure, see also "External security provider" on Microsoft Learn: https://learn.microsoft.com/en-us/microsoft-copilot-studio/external-security-provider#step-1-configure-a-microsoft-entra-application',
  '5.2-D Power Platform 管理センターで Defender 連携を有効化する':
    '5.2-D Enable Defender integration in the Power Platform admin center',
  '環境ごとに Microsoft Defender 連携を有効にし、接続がオンになることを確認する':
    'Enable Microsoft Defender integration per environment and confirm the connection turns on',
  'Power Platform 管理センターでの有効化と、Defender 側の全ステップ完了（実画面）':
    'Enabling it in the Power Platform admin center, and all steps complete on the Defender side (actual screens)',
  'poc-ppadmin@contoso.com（Power Platform 管理者）':
    'poc-ppadmin@contoso.com (Power Platform Administrator)',
  '管理':
    'Manage',
  '環境':
    'Environments',
  '課金':
    'Billing',
  '脅威の検出':
    'Threat detection',
  'ポリシー':
    'Policies',
  'Defender で控えた **アプリ ID** と **エンドポイント URL** をここで使います。':
    'This is where you use the **App ID** and **endpoint URL** you noted in Defender.',
  'セキュリティ > 脅威の検出':
    'Security > Threat detection',
  'Microsoft Defender – Copilot Studio エージェント':
    'Microsoft Defender – Copilot Studio agents',
  'テナント内の Copilot Studio エージェントを Defender で保護します':
    'Protect the Copilot Studio agents in your tenant with Defender',
  '無効':
    'Off',
  'Microsoft Sentinel 連携':
    'Microsoft Sentinel integration',
  'ログを Sentinel に転送します':
    'Forward logs to Sentinel',
  'セキュリティ > 脅威の検出 > Microsoft Defender':
    'Security > Threat detection > Microsoft Defender',
  'テナント設定':
    'Tenant settings',
  'Microsoft Defender を有効にする – テナント内のすべての Copilot Studio エージェント用':
    'Enable Microsoft Defender – for all Copilot Studio agents in the tenant',
  'テナントレベルで有効化しました。続けて環境ごとに構成します。':
    'Enabled at tenant level. Next, configure it per environment.',
  'セキュリティ > 脅威の検出 > Microsoft Defender > 管理':
    'Security > Threat detection > Microsoft Defender > Manage',
  'リアルタイム保護の構成':
    'Configure real-time protection',
  'リアルタイム保護を有効化する環境':
    'Environment to enable real-time protection for',
  '（選択してください）':
    '(Select one)',
  'Contoso – 運用環境':
    'Contoso – Production',
  'Contoso – 開発環境':
    'Contoso – Development',
  'Contoso（既定）':
    'Contoso (default)',
  'エンドポイント リンク':
    'Endpoint link',
  '接続がオンになりました。有効化したいすべての Power Platform 環境で同じ手順を実施します。':
    'The connection is on. Repeat the same steps for every Power Platform environment you want to enable.',
  'すべてのステップが完了／接続済みになりました。':
    'Every step now shows Complete or Connected.',
  '左ナビの **セキュリティ > 脅威の検出** を開く':
    'Open **Security > Threat detection** in the left navigation',
  '「セキュリティ」グループの中にあります。':
    'It is inside the "Security" group.',
  '脅威の検出が開きました。':
    'Threat detection is open.',
  '**Microsoft Defender – Copilot Studio エージェント** を開く':
    'Open **Microsoft Defender – Copilot Studio agents**',
  'Copilot Studio エージェント向けの項目です。':
    'This is the item for Copilot Studio agents.',
  '設定画面が開きました。':
    'The settings screen is open.',
  'Sentinel 連携はこの手順の対象外です。':
    'Sentinel integration is out of scope for this procedure.',
  '**Microsoft Defender を有効にする – テナント内のすべての Copilot Studio エージェント用** をクリックする':
    'Click **Enable Microsoft Defender – for all Copilot Studio agents in the tenant**',
  'まずテナントレベルで有効化します。':
    'Enable it at tenant level first.',
  'テナントレベルで有効化しました。':
    'Enabled at tenant level.',
  '**管理** をクリックして環境ごとの構成に進む':
    'Click **Manage** to move on to the per-environment configuration',
  '有効化後に表示されるボタンです。':
    'This button appears after you enable it.',
  '環境の構成画面が開きました。':
    'The environment configuration screen is open.',
  'リアルタイム保護を有効化する **環境を選択**する（運用環境）':
    '**Select the environment** to enable real-time protection for (Production)',
  'まずは運用環境から有効にします。':
    'Start by enabling it on the production environment.',
  '環境を選択しました。':
    'You selected the environment.',
  'Defender で取得した **アプリ ID** を入力する':
    'Enter the **App ID** you obtained in Defender',
  'GUID 形式です。練習として `7c91a4e2-3b15-4d8f-9a06-5e2d71c4b8f3` を入力してください。':
    'It is a GUID. For practice, enter `7c91a4e2-3b15-4d8f-9a06-5e2d71c4b8f3`.',
  'アプリ ID を入力しました。':
    'You entered the App ID.',
  '**エンドポイント リンク** を入力する':
    'Enter the **endpoint link**',
  '5.2-C で控えた `https://mcsaiagents.security.core.microsoft/v1/protection` です。':
    'It is `https://mcsaiagents.security.core.microsoft/v1/protection`, which you noted in 5.2-C.',
  'エンドポイントを入力しました。':
    'You entered the endpoint.',
  '保存すると接続がオンになります。':
    'Saving turns the connection on.',
  'Defender ポータルに戻り、すべてのステップが完了／接続済みになったことを確認する（Copilot Studio のステップをクリック）':
    'Return to the Defender portal and confirm every step shows Complete or Connected (click the Copilot Studio step)',
  'Defender 側の最終確認です。':
    'This is the final check on the Defender side.',
  'すべて接続済みになりました。':
    'Everything now shows Connected.',
  '**有効化したい Power Platform 環境すべて**で同じ手順を実施します。接続が Connected にならない場合は、App ID の反映待ち（最大 1 分）か Power Platform 側のオンボード未完了を疑います。':
    'Repeat the same steps for **every Power Platform environment you want to enable**. If the connection does not reach Connected, suspect either the App ID still taking effect (up to a minute) or incomplete onboarding on the Power Platform side.',
  '5.3 ローカルエージェントを検出して台帳に記録する':
    '5.3 Discover local agents and record them in the inventory',
  'パイロット端末上で検出されたローカルエージェントを確認し、記録する':
    'Review the local agents discovered on the pilot devices and record them',
  'Defender ポータルで検出された AI エージェントの一覧（実画面）':
    'The list of discovered AI agents in the Defender portal (actual screen)',
  '検出された AI エージェント':
    'Discovered AI agents',
  'オンボードは完了しています。検出結果を確認しましょう。':
    'Onboarding is complete. Review the discovery results.',
  '設定 > AI のセキュリティ > 検出された AI エージェント':
    'Settings > Security for AI > Discovered AI agents',
  'エージェント名':
    'Agent name',
  '検出日':
    'Discovered on',
  '状態':
    'Status',
  'ローカルエージェント':
    'Local agent',
  '検出':
    'Discovered',
  '営業支援エージェント':
    'Sales support agent',
  '保護中':
    'Protected',
  '契約レビュー Bot':
    'Contract review bot',
  'OpenClaw の詳細':
    'OpenClaw details',
  'アクティブモード':
    'Active mode',
  'ランタイム保護':
    'Runtime protection',
  '未構成':
    'Not configured',
  '台帳に追加（端末名・ユーザー・検出日を記録）':
    'Add to inventory (record device name, user and discovery date)',
  '台帳に追加しました。PoC 期間中は **検出のみ**とし、Intune のブロックポリシーは作成しても割り当てません（Week 4 で判断）。':
    'Added to the inventory. During the PoC this is **discovery only** — create the Intune blocking policy if you like, but do not assign it (decided in Week 4).',
  '**検出された AI エージェント** のタブを開く':
    'Open the **Discovered AI agents** tab',
  'オンボード済みなら検出結果のタブが使えます。':
    'Once onboarding is complete, the discovery results tab is available.',
  '一覧が表示されました。':
    'The list is displayed.',
  'パイロット端末上で検出された **ローカルエージェント**（OpenClaw）を開く':
    'Open the **local agent** discovered on a pilot device (OpenClaw)',
  '種類が「ローカルエージェント」になっている行です。Copilot Studio や Foundry はクラウド側のエージェントです。':
    'It is the row whose type is "Local agent". Copilot Studio and Foundry agents live in the cloud.',
  'これは Copilot Studio のエージェントです。端末上のローカルエージェントを探します。':
    'This is a Copilot Studio agent. Look for the local agent on a device.',
  'これは Foundry のエージェントです。端末上のローカルエージェントを探します。':
    'This is a Foundry agent. Look for the local agent on a device.',
  '詳細が表示されました。':
    'The details are displayed.',
  '**台帳に追加**して端末名・ユーザー・検出日を記録する':
    '**Add it to the inventory** and record the device name, user and discovery date',
  '手順書では検出されたローカルエージェントを台帳に追加します。':
    'The guide has you add discovered local agents to the inventory.',
  '記録しました。':
    'Recorded.',
  'ローカルエージェントが検出されない場合は、Defender for Endpoint がパッシブモードか未オンボードの可能性があります。初期は **OpenClaw** が対象で、他のエージェントは順次対応予定です。':
    'If no local agent is discovered, Defender for Endpoint may be in passive mode or not onboarded. Initially **OpenClaw** is in scope; other agents will follow.',
  '5.5 ランタイム保護（任意）':
    '5.5 Runtime protection (optional)',
  'プロンプトインジェクション等をリアルタイムにブロック／監査する構成の前提を知る':
    'Know the prerequisites for blocking or auditing prompt injection in real time',
  'Microsoft Defender for Endpoint でランタイム保護を有効にすると、プロンプトインジェクションや悪意のあるツール呼び出しなどをリアルタイムにブロックまたは監査できます。':
    'Enabling runtime protection in Microsoft Defender for Endpoint lets you block or audit prompt injection and malicious tool calls in real time.',
  '前提条件（抜粋）':
    'Prerequisites (excerpt)',
  'デバイスが Defender for Endpoint にオンボードされ、Defender ウイルス対策が**リアルタイム保護を有効にしてアクティブモード**で実行されている':
    'The device is onboarded to Defender for Endpoint, and Defender Antivirus is running in **active mode with real-time protection enabled**',
  'Microsoft Defender Antivirus が最新のプラットフォーム・エンジン・セキュリティインテリジェンスに更新されている':
    'Microsoft Defender Antivirus has the latest platform, engine and security intelligence updates',
  'パブリックプレビュー中は**ベータチャネル**の設定が必要':
    'During public preview, the **beta channel** must be configured',
  'デバイスに 1 つ以上の**サポートされているローカル AI エージェント**がインストールされている':
    'At least one **supported local AI agent** is installed on the device',
  '詳細：https://learn.microsoft.com/ja-jp/defender-endpoint/configure-ai-agent-runtime-protection':
    'Details: https://learn.microsoft.com/en-us/defender-endpoint/configure-ai-agent-runtime-protection',
  '更新チャネルの設定：https://learn.microsoft.com/ja-jp/defender-endpoint/configure-updates':
    'Update channel configuration: https://learn.microsoft.com/en-us/defender-endpoint/configure-updates',
  'ランタイム保護の構成（実資料より）':
    'Configuring runtime protection (from the actual document)',
  'Week 1 の理解度チェック':
    'Week 1 knowledge check',
  'オンボードの流れと確認ポイントを定着させる':
    'Lock in the onboarding flow and the checkpoints',
  'Microsoft 365 コネクタで接続時にチェックする 2 項目はどれですか。':
    'Which two items do you select when connecting the Microsoft 365 connector?',
  'Microsoft Entra ID 管理イベント':
    'Microsoft Entra ID admin events',
  'Microsoft 365 アクティビティ':
    'Microsoft 365 activity',
  'デバイス ログ':
    'Device logs',
  'Azure アクティビティ ログ':
    'Azure activity logs',
  'この 2 つにチェックを入れて「Microsoft 365 の接続」をクリックします。接続済みになるまで時間がかかります。':
    'Select these two, then click "Connect Microsoft 365". It takes a while to reach Connected.',
  'Microsoft 365 コネクタを接続しなかった場合に起きることはどれですか。':
    'What happens if you do not connect the Microsoft 365 connector?',
  'Copilot Studio 側のブロックも動作しない':
    'Blocking on the Copilot Studio side also stops working',
  'Copilot Studio 側のブロックは動作するが、アラートが Defender ポータルに表示されない':
    'Blocking on the Copilot Studio side still works, but alerts do not appear in the Defender portal',
  'ライセンスが無効になる':
    'The licence becomes invalid',
  'Agent Registry が表示されない':
    'The Agent Registry is not displayed',
  '6.6 の補足にある既知の挙動です。可視化のためにコネクタは接続しておきます。':
    'This is the known behaviour noted in 6.6. Connect the connector so you keep visibility.',
  'Copilot Studio 連携で PowerShell スクリプトを実行する目的は何ですか。':
    'Why do you run the PowerShell script as part of the Copilot Studio integration?',
  'Defender のライセンスを有効化する':
    'To activate the Defender licence',
  'Entra にアプリ登録を行い、アプリ ID を取得する':
    'To register an app in Entra and obtain the App ID',
  'ローカルエージェントを削除する':
    'To delete local agents',
  'Power Platform 環境を作成する':
    'To create a Power Platform environment',
  '取得したアプリ ID を Defender ポータルのウィザードと Power Platform 管理センターの双方で使用します。':
    'The App ID you obtain is used both in the Defender portal wizard and in the Power Platform admin center.',
  'App ID を変更した直後に接続が Connected にならない場合、まず取るべき対応はどれですか。':
    'The connection does not reach Connected right after you change the App ID. What do you do first?',
  'テナントを作り直す':
    'Recreate the tenant',
  '1 分ほど待ってから再試行する':
    'Wait about a minute, then retry',
  'ライセンスを追加購入する':
    'Buy additional licences',
  'Defender をアンインストールする':
    'Uninstall Defender',
  '反映に最大 1 分かかります。それでも解消しない場合は Power Platform 側のオンボード完了を管理者に確認します。':
    'It takes up to a minute to take effect. If that does not resolve it, ask the administrator to confirm onboarding is complete on the Power Platform side.',
  'PoC 期間中のローカルエージェントの扱いとして正しいものはどれですか。':
    'How should local agents be handled during the PoC?',
  '検出され次第すべてブロックする':
    'Block every one as soon as it is discovered',
  '検出のみとし、Intune のブロックポリシーは作成しても割り当てない':
    'Discovery only — create the Intune blocking policy if you like, but do not assign it',
  '端末から Defender を削除する':
    'Remove Defender from the devices',
  'Intune の管理対象から外す':
    'Take the devices out of Intune management',
  'ブロックの判断は Week 4 に行います。検出結果に正当な開発ツールが含まれていないことを確認してから割り当てます。':
    'The decision to block is made in Week 4. Assign the policy only after confirming the discovery results contain no legitimate developer tools.',
  '手順 3：エージェントレジストリによる棚卸し':
    'Step 3: Take inventory with the Agent Registry',
  'ベースラインの記録、フィルターと列、CSV エクスポート、マップ、オーナー不在の抽出':
    'Record the baseline, use filters and columns, export CSV, review the map, and extract ownerless agents',
  '6.1 レジストリを開いてベースラインを記録する':
    '6.1 Open the Registry and record the baseline',
  'ダッシュボード上部の 4 つの指標を KPI 台帳の「Week 2 時点」に転記する':
    'Copy the four dashboard metrics into the "Week 2" row of the KPI inventory',
  'すべてのエージェント > レジストリ のダッシュボード（実画面）':
    'The All agents > Registry dashboard (actual screen)',
  'Week 2 は「**記録する**」週です。ブロック・削除は利用者への影響があるため、オーナー確認の前には行いません。':
    'Week 2 is the week for **recording**. Blocking and deleting affect users, so do neither before confirming ownership.',
  'ホーム > エージェント > すべてのエージェント':
    'Home > Agents > All agents',
  'レジストリ':
    'Registry',
  'ブロック済み':
    'Blocked',
  'エージェントの追加':
    'Add agent',
  'カスタマイズビュー':
    'Customize view',
  'エクスポート':
    'Export',
  '4 指標を KPI 台帳に転記':
    'Copy the four metrics into the KPI inventory',
  '発行元の種類':
    'Publisher type',
  'プラットフォーム':
    'Platform',
  'チャネル':
    'Channel',
  'リスク':
    'Risks',
  '使用可能':
    'Available',
  'あなたのユーザー':
    'Your users',
  '中':
    'Medium',
  'あなたの組織':
    'Your organization',
  '人事 FAQ エージェント':
    'HR FAQ agent',
  'エージェントビルダー':
    'Agent Builder',
  '高':
    'High',
  '合計 86 ／ リスク 7 ／ オーナー不在 12 ／ 未管理 5 を「Week 2 時点」として台帳に転記しました。Week 4 でこの値と比較します。':
    'Recorded 86 total / 7 at risk / 12 ownerless / 5 unmanaged into the inventory as the "Week 2" figures. You will compare against these in Week 4.',
  '左ナビの **エージェント > すべてのエージェント** を開く':
    'Open **Agents > All agents** in the left navigation',
  '棚卸しに使うのはレジストリです。':
    'The Registry is what you use for the inventory.',
  'レジストリが開きました。':
    'The Registry is open.',
  'マップは 6.4 で使います。まずはレジストリの件数記録からです。':
    'The Map is used in 6.4. Start by recording the Registry counts.',
  'ダッシュボード上部の **4 つの指標を KPI 台帳に転記**する':
    '**Copy the four metrics at the top of the dashboard into the KPI inventory**',
  '合計数・リスキー・オーナー不在・未管理の 4 つです。':
    'The four are total, at risk, ownerless and unmanaged.',
  'エクスポートは 6.3 で行います。先に 4 指標を記録します。':
    'Exporting happens in 6.3. Record the four metrics first.',
  'ベースラインを記録しました。':
    'You have recorded the baseline.',
  'この 4 指標が Week 4 の KPI（棚卸し網羅率、オーナー不在件数、未管理件数 など）の基準値になります。':
    'These four metrics become the reference values for the Week 4 KPIs (inventory coverage, ownerless count, unmanaged count, and so on).',
  '6.2 フィルターと列をカスタマイズして内訳を記録する':
    '6.2 Customize filters and columns and record the breakdown',
  '状態・発行元の種類・プラットフォーム・チャネルで内訳を把握する':
    'Understand the breakdown by status, publisher type, platform and channel',
  'カスタマイズビューと列の表示（実画面）':
    'Customize view and showing columns (actual screens)',
  '既定では一部の列しか表示されていません。内訳を記録するために列を追加します。':
    'By default only some columns are shown. Add columns so you can record the breakdown.',
  'ホーム > エージェント > すべてのエージェント > カスタマイズビュー':
    'Home > Agents > All agents > Customize view',
  '列の表示':
    'Show columns',
  '表示する列を選択':
    'Select the columns to show',
  '状態（使用可能／ブロック済み／使用できません／下書き／アクティブ化されていません）':
    'Status (Available / Blocked / Unavailable / Draft / Not activated)',
  '**発行元の種類**（あなたの組織／あなたのユーザー／Microsoft／サードパーティー）':
    '**Publisher type** (Your organization / Your users / Microsoft / Third party)',
  '**プラットフォーム**（Copilot Studio／エージェントビルダー／SharePoint／その他）':
    '**Platform** (Copilot Studio / Agent Builder / SharePoint / Other)',
  '**チャネル**（Copilot／Teams／Outlook／Microsoft 365 アプリ／SharePoint）':
    '**Channel** (Copilot / Teams / Outlook / Microsoft 365 apps / SharePoint)',
  '適用':
    'Apply',
  'レジストリ（列を追加した状態）':
    'Registry (with the added columns)',
  'フィルター：発行元の種類':
    'Filter: Publisher type',
  'フィルター：プラットフォーム':
    'Filter: Platform',
  '発行元の種類の内訳を記録しました：あなたのユーザー 54／あなたの組織 21／Microsoft 8／サードパーティー 3。「あなたのユーザー」が多いほど、個人作成のエージェントが業務に入り込んでいることを意味します。':
    'Publisher type breakdown recorded: Your users 54 / Your organization 21 / Microsoft 8 / Third party 3. The more "Your users" there are, the more individually built agents have found their way into day-to-day work.',
  '**カスタマイズビュー** を開く':
    'Open **Customize view**',
  'コマンドバーにあります。':
    'It is on the command bar.',
  '列の選択画面が開きました。':
    'The column picker is open.',
  '**発行元の種類** の列を表示する':
    'Show the **Publisher type** column',
  '個人作成のエージェントの多さを測る列です。':
    'This is the column that shows how many agents individuals have built.',
  '**プラットフォーム** の列を表示する':
    'Show the **Platform** column',
  'どこで作られているか＝統制の入口を決める材料です。':
    'Where agents are built tells you where to apply governance.',
  '**チャネル** の列を表示する':
    'Show the **Channel** column',
  'どのアプリでエージェントが使われているかを示します。':
    'It shows which app each agent is used in.',
  '**適用** する':
    '**Apply**',
  '選んだ列を反映します。':
    'Apply the columns you selected.',
  '列が追加されました。':
    'The columns have been added.',
  '**発行元の種類でフィルター**して内訳の件数を記録する':
    '**Filter by publisher type** and record the counts in the breakdown',
  '4 種類のフィルターそれぞれで件数を記録します。まずは発行元の種類から。':
    'Record the counts for each of the four filters. Start with publisher type.',
  '内訳を記録しました。':
    'You have recorded the breakdown.',
  '状態／発行元の種類／プラットフォーム／チャネルの 4 つのフィルターで内訳を記録します。この内訳が「どこから統制するか」の判断材料になります。':
    'Record the breakdown using all four filters: status, publisher type, platform and channel. That breakdown tells you where governance should start.',
  '6.3 CSV をエクスポートして台帳を作る':
    '6.3 Export CSV and build the inventory',
  'All agents を対象に CSV を出力し、規定のファイル名で保存する':
    'Export CSV for All agents and save it with the prescribed file name',
  'エクスポートと保存されたファイル（実画面）':
    'Export and the saved file (actual screens)',
  'エクスポートの対象':
    'Export scope',
  'レジストリのすべてのエージェントを出力（手順書の指定）':
    'Export every agent in the Registry (what the guide specifies)',
  '現在のフィルター結果のみ出力':
    'Export only the current filter results',
  '保存するファイル名':
    'File name to save as',
  'A365_台帳_YYYYMMDD_baseline.csv':
    'A365_Inventory_YYYYMMDD_baseline.csv',
  '手順書の命名規則に従います。日付は 8 桁（例：20261002）。':
    'Follow the naming convention in the guide. The date is 8 digits (for example 20261002).',
  '保存しました。**以降、変更操作の前には必ず最新の台帳を保存**します。':
    'Saved. **From here on, always save the latest inventory before making changes.**',
  '**エクスポート** を選択する':
    'Select **Export**',
  'コマンドバーのエクスポートです。':
    'It is Export on the command bar.',
  '対象の選択が表示されました。':
    'The scope picker is displayed.',
  '対象として **All agents** を選ぶ':
    'Choose **All agents** as the scope',
  '手順書では All agents を対象に出力します。':
    'The guide exports with All agents as the scope.',
  'フィルター結果だけでは棚卸しの網羅率を測れません。All agents を選びます。':
    'Filter results alone cannot tell you the inventory coverage. Choose All agents.',
  '全件を対象にしました。':
    'You scoped it to all agents.',
  'ファイル名を手順書の規則どおりに入力する（例：**A365_台帳_20261002_baseline.csv**）':
    'Enter the file name exactly as the guide prescribes (for example **A365_Inventory_20261002_baseline.csv**)',
  '形式は `A365_台帳_YYYYMMDD_baseline.csv` です。日付は 8 桁の数字。':
    'The format is `A365_Inventory_YYYYMMDD_baseline.csv`. The date is 8 digits.',
  '命名規則どおりです。':
    'That matches the naming convention.',
  '**保存** する':
    '**Save**',
  '最後に保存します。':
    'Save at the end.',
  '台帳のベースラインができました。':
    'Your inventory baseline is ready.',
  '付録 C の列定義に従って Excel に取り込み、レジストリの列に加えて PoC 用の列（**重点フラグ／担当者／対応状況／備考**）を追加します。パイロットユーザーが利用する・オーナー不在・未管理・高リスクのいずれかに該当するものを「重点エージェント」として印を付けます。':
    'Import it into Excel using the column definitions in Appendix C, and add the PoC columns (**priority flag / owner / status / notes**) alongside the Registry columns. Flag an agent as a "priority agent" if it is used by pilot users, is ownerless, is unmanaged, or is high risk.',
  '6.4-6.5 マップの確認とオーナー不在・未管理の抽出':
    '6.4–6.5 Review the Map and extract ownerless and unmanaged agents',
  '重点エージェントの接続先を確認し、オーナー不在／未管理を台帳に記録する':
    'Check what priority agents connect to, and record ownerless and unmanaged agents in the inventory',
  'エージェントマップと、オーナー不在／未管理の一覧（実画面）':
    'The agent map and the ownerless / unmanaged lists (actual screens)',
  'ホーム > エージェント':
    'Home > Agents',
  '重点エージェントの接続先（ツール、データソース、他のエージェント）と依存関係をマップで確認します。':
    'Use the map to check what priority agents connect to — tools, data sources and other agents — and their dependencies.',
  'ホーム > エージェント > マップ':
    'Home > Agents > Map',
  'エージェント マップ':
    'Agent map',
  '接続先：Dynamics 365 / SharePoint（営業資料）':
    'Connects to: Dynamics 365 / SharePoint (sales material)',
  '重点':
    'Priority',
  '接続先：**SharePoint（人事）** / Exchange':
    'Connects to: **SharePoint (HR)** / Exchange',
  '接続先：SharePoint（契約書）':
    'Connects to: SharePoint (contracts)',
  '人事 FAQ エージェント — 依存関係':
    'HR FAQ agent — dependencies',
  '接続ツール':
    'Connected tools',
  'SharePoint 検索、Exchange メール送信':
    'SharePoint search, Exchange send mail',
  'データソース':
    'Data sources',
  '**人事ポータル（機密）**、社内規程ライブラリ':
    '**HR portal (confidential)**, internal policy library',
  '呼び出す他エージェント':
    'Other agents it calls',
  '勤怠照会エージェント':
    'Attendance lookup agent',
  '**なし**':
    '**None**',
  '機密性の高いデータソース（人事）に接続しています。台帳の備考に記録します。':
    'It connects to a highly confidential data source (HR). Record this in the inventory notes.',
  '備考に「人事データ接続」を記録':
    'Record "connects to HR data" in the notes',
  '作成者':
    'Created by',
  '最終更新日':
    'Last modified',
  '利用状況':
    'Usage',
  'yamada@contoso.com（退職）':
    'yamada@contoso.com (left the company)',
  '週 32 回':
    '32 times/week',
  '旧 問い合わせ Bot':
    'Legacy enquiry bot',
  'ito@contoso.com（異動）':
    'ito@contoso.com (transferred)',
  '週 1 回':
    'Once a week',
  'この時点では **削除・ブロックは行いません**。Week 3 で新オーナーを割り当てます。':
    'At this point **do not delete or block anything**. You assign new owners in Week 3.',
  '台帳に「オーナー不在」として記録':
    'Record as "ownerless" in the inventory',
  '記録しました。同様に **アンマネージドエージェント** もクリックして一覧を記録します（接続されたプラットフォームがない場合は表示されません）。':
    'Recorded. Do the same for **Unmanaged agents** — click it and record the list (it is not shown if there is no connected platform).',
  '左ナビの **エージェント > マップ** を開く':
    'Open **Agents > Map** in the left navigation',
  '接続先と依存関係を見る画面です。':
    'This is the screen for connections and dependencies.',
  'マップが開きました。':
    'The map is open.',
  '機密データに接続していそうな **人事 FAQ エージェント** を選ぶ':
    'Select the **HR FAQ agent**, which looks likely to touch confidential data',
  '人事・財務など機密性の高いデータソースに接続しているエージェントを探します。':
    'Look for agents connected to highly confidential data sources such as HR or finance.',
  '依存関係が表示されました。':
    'The dependencies are displayed.',
  '備考に **機密データソースへの接続**を記録する':
    'Record the **connection to a confidential data source** in the notes',
  '台帳の備考欄に記録します。':
    'Record it in the notes column of the inventory.',
  'レジストリに戻り、**所有者のいないエージェント** のタイルをクリックする':
    'Return to the Registry and click the **Agents without owners** tile',
  'まず左ナビでレジストリに戻ります。':
    'First return to the Registry from the left navigation.',
  'レジストリに戻りました。':
    'You are back in the Registry.',
  '**所有者のいないエージェント**（12）のタイルをクリックして一覧を表示する':
    'Click the **Agents without owners** tile (12) to show the list',
  'ダッシュボードのタイルはフィルターとして機能します。':
    'The dashboard tiles act as filters.',
  'リスクの確認は Week 3 で行います。ここではオーナー不在を抽出します。':
    'Reviewing risk happens in Week 3. Here you are extracting ownerless agents.',
  '順番としてはまずオーナー不在からです（この後に未管理も確認します）。':
    'The order is ownerless first (you will check unmanaged afterwards).',
  'オーナー不在の一覧が表示されました。':
    'The ownerless list is displayed.',
  '作成者・最終更新日・利用状況を確認し、**台帳に「オーナー不在」として記録**する':
    'Check the creator, last modified date and usage, then **record them as "ownerless" in the inventory**',
  'この時点では削除・ブロックはしません。':
    'Do not delete or block anything at this point.',
  '**6.6（任意）**：定期棚卸しを自動化する場合は、AI Administrator の権限で Microsoft Graph の `copilotPackages` API（プレビュー）からエージェント一覧を取得できます。PoC ではエクスポート CSV で十分です。':
    '**6.6 (optional)**: to automate the periodic inventory, an AI Administrator can retrieve the agent list from the Microsoft Graph `copilotPackages` API (preview). For the PoC, the CSV export is enough.',
  '棚卸しの理解度チェック':
    'Inventory knowledge check',
  'Week 2 の「記録する」作業の意味を確認する':
    'Confirm what the Week 2 "recording" work is for',
  'レジストリのダッシュボードで記録する 4 つの指標はどれですか。':
    'Which four metrics do you record from the Registry dashboard?',
  '承認済みエージェント':
    'Approved agents',
  'この 4 つを「Week 2 時点」として KPI 台帳に転記し、Week 4 の最終値と比較します。':
    'Copy these four into the KPI inventory as the "Week 2" figures and compare them with the final values in Week 4.',
  '発行元の種類で「あなたのユーザー」が多い場合、何が読み取れますか。':
    'If "Your users" dominates the publisher type, what does that tell you?',
  'Microsoft 製のエージェントが多い':
    'Most agents come from Microsoft',
  '個人が作成したエージェントが業務に入り込んでいる':
    'Individually built agents have found their way into day-to-day work',
  'サードパーティー製が多い':
    'Most agents are third party',
  'エージェントが使われていない':
    'Agents are not being used',
  '統制の入口（どのプラットフォームから作られているか）とあわせて確認します。':
    'Check it together with where agents are built, which tells you where governance should start.',
  'Week 2 の時点でオーナー不在のエージェントに対して行う作業はどれですか。':
    'What do you do with ownerless agents at the Week 2 stage?',
  'すぐにブロックする':
    'Block them immediately',
  'すぐに削除する':
    'Delete them immediately',
  '台帳に記録するのみ':
    'Only record them in the inventory',
  '新オーナーを割り当てる':
    'Assign new owners',
  'Week 2 は「記録する」週です。新オーナーの割り当ては Week 3（8.2）で行います。削除はスポンサー確認後にのみ行います。':
    'Week 2 is the week for recording. Assigning new owners happens in Week 3 (8.2). Delete only after confirming with the sponsor.',
  'CSV エクスポートのファイル名として手順書が指定している形式はどれですか。':
    'Which file name format does the guide prescribe for the CSV export?',
  '最終日には `A365_台帳_YYYYMMDD_final.csv` として出力し、ベースラインと比較します。':
    'On the final day you export it as `A365_Inventory_YYYYMMDD_final.csv` and compare it with the baseline.',
  'エージェントマップで確認する内容はどれですか。':
    'What do you check on the agent map?',
  '接続先のツール':
    'The tools it connects to',
  '接続先のデータソース':
    'The data sources it connects to',
  '他のエージェントとの依存関係':
    'Dependencies on other agents',
  'ライセンスの請求額':
    'The licence invoice amount',
  '機密性の高いデータソース（人事、財務など）に接続しているエージェントは台帳の備考に記録します。':
    'Record agents connected to highly confidential data sources (HR, finance and so on) in the inventory notes.',
  '手順 4：Purview DSPM for AI の確認と検知ポリシー':
    'Step 4: Review Purview DSPM for AI and create detection policies',
  'AI 観測可能性、監査、Risky AI usage、DLP（監査モード）':
    'AI observability, audit, Risky AI usage, and DLP in audit mode',
  '7.1-7.2 AI 観測可能性と監査を確認する':
    '7.1–7.2 Review AI observability and audit',
  '活動のあるエージェントのリスクを把握し、対話の証跡が取れることを確認する':
    'Understand the risks of active agents and confirm you can capture an audit trail of conversations',
  'DSPM > AI 観測可能性 と 監査（実画面）':
    'DSPM > AI observability and Audit (actual screens)',
  'ソリューション':
    'Solutions',
  '監査':
    'Audit',
  'データ損失防止':
    'Data Loss Prevention',
  'インサイダー リスク管理':
    'Insider Risk Management',
  '情報保護':
    'Information Protection',
  'Compliance Administrator でサインインしています。':
    'You are signed in as Compliance Administrator.',
  'AI 利用状況のサマリー':
    'Summary of AI usage',
  '**AI 観測可能性（AI observability）**':
    '**AI observability**',
  '過去 30 日間に活動のあるエージェントをリスク順に表示':
    'Lists agents active in the last 30 days, ordered by risk',
  '推奨ポリシーの適用':
    'Apply recommended policies',
  'DSPM for AI > AI 観測可能性':
    'DSPM for AI > AI observability',
  'AI 観測可能性':
    'AI observability',
  '過去 30 日間に活動のあるエージェントがリスク順に表示されます。':
    'Agents active in the last 30 days are listed in order of risk.',
  '主なリスクの種類':
    'Main risk type',
  '活動数（30 日）':
    'Activity count (30 days)',
  '**人事 FAQ エージェント**':
    '**HR FAQ agent**',
  '過剰共有':
    'Oversharing',
  '持ち出し':
    'Exfiltration',
  '低':
    'Low',
  '不適切な利用':
    'Inappropriate use',
  '人事 FAQ エージェント — 詳細':
    'HR FAQ agent — details',
  'Entra の状態':
    'Entra status',
  '有効':
    'Enabled',
  '作成日':
    'Created on',
  'オーナー':
    'Owner',
  'エージェントのユーザー ID':
    'Agent user ID',
  '推奨される是正策':
    'Recommended remediation',
  'オーナーの割り当て／共有範囲の見直し':
    'Assign an owner / review the sharing scope',
  '台帳に記録':
    'Record in the inventory',
  '監査の検索':
    'Audit search',
  'アクティビティ':
    'Activity',
  'エージェントとの対話（人⇔エージェント、エージェント⇔ツール、エージェント間）':
    'Agent conversations (person ↔ agent, agent ↔ tool, agent ↔ agent)',
  'サインイン アクティビティ':
    'Sign-in activity',
  'ファイル操作':
    'File operations',
  '検索':
    'Search',
  '日時':
    'Timestamp',
  '人からエージェント（プロンプト送信）':
    'Person to agent (prompt sent)',
  'エージェントからツール（SharePoint 検索）':
    'Agent to tool (SharePoint search)',
  '人事ポータル':
    'HR portal',
  'エージェントから人（応答）':
    'Agent to person (response)',
  '人⇔エージェント、エージェント⇔ツール、エージェント間の対話が記録されています。検索結果の一例を保存し、証跡が取れることの確認記録とします。':
    'Conversations between people and agents, agents and tools, and agents and agents are all recorded. Save a sample of the search results as evidence that the audit trail works.',
  '左ナビの **DSPM for AI** を開く':
    'Open **DSPM for AI** in the left navigation',
  'ソリューションの一覧にあります。':
    'It is in the list of solutions.',
  'DSPM for AI が開きました。':
    'DSPM for AI is open.',
  '**AI 観測可能性** を開く':
    'Open **AI observability**',
  '過去 30 日間の活動をリスク順に見る画面です。':
    'This screen shows the last 30 days of activity ordered by risk.',
  'AI 観測可能性が開きました。':
    'AI observability is open.',
  '最もリスクの高い **人事 FAQ エージェント** の詳細を開く':
    'Open the details of the highest-risk **HR FAQ agent**',
  'リスク順に並んでいます。一番上の行です。':
    'They are sorted by risk. It is the top row.',
  '詳細（Entra の状態、作成日、オーナー、推奨される是正策）を **台帳に記録**する':
    '**Record the details** in the inventory (Entra status, created date, owner, recommended remediation)',
  '重点エージェントの情報は必ず台帳に残します。':
    'Always keep information about priority agents in the inventory.',
  '左ナビの **監査** を開く':
    'Open **Audit** in the left navigation',
  '操作証跡を確認します。':
    'Check the audit trail.',
  '監査の検索が開きました。':
    'The audit search is open.',
  'アクティビティで **エージェントとの対話** を選ぶ':
    'Choose **Agent conversations** as the activity',
  '人⇔エージェント、エージェント⇔ツール、エージェント間の対話です。':
    'These are the conversations between people and agents, agents and tools, and agents and agents.',
  '選択しました。':
    'Selected.',
  '**検索** を実行して証跡が記録されていることを確認する':
    'Run the **search** and confirm the audit trail is being recorded',
  '検索を実行します。':
    'Run the search.',
  '証跡を確認できました。':
    'You confirmed the audit trail.',
  '監査が無効だとエージェントの操作証跡が取れません。Week 0 のチェック項目 7 で有効化を確認済みであることが前提です。':
    'Without audit enabled there is no audit trail of agent activity. This assumes you confirmed it was enabled in Week 0, checklist item 7.',
  '7.3 インサイダーリスク：Risky AI usage ポリシーを作る':
    '7.3 Insider risk: create a Risky AI usage policy',
  'クイックポリシーで Risky AI usage を作成し、対象をパイロットグループに限定する':
    'Create Risky AI usage from a quick policy and scope it to the pilot group',
  'クイックポリシーと Risky AI usage テンプレート（実画面）':
    'Quick policy and the Risky AI usage template (actual screens)',
  'アラート':
    'Alerts',
  '検知されたアラートの確認':
    'Review detected alerts',
  '**ポリシー**':
    '**Policies**',
  'ポリシーの作成と管理':
    'Create and manage policies',
  'ケース':
    'Cases',
  '調査中のケース':
    'Cases under investigation',
  'インサイダー リスク管理 > ポリシー':
    'Insider Risk Management > Policies',
  'ポリシーの作成':
    'Create policy',
  '**クイック ポリシー**':
    '**Quick policy**',
  'テンプレートから素早く作成する（手順書の指定）':
    'Create quickly from a template (what the guide specifies)',
  'カスタム ポリシー':
    'Custom policy',
  '条件を個別に設定する':
    'Configure the conditions individually',
  'インサイダー リスク管理 > ポリシー > 新規':
    'Insider Risk Management > Policies > New',
  'テンプレートの選択':
    'Choose a template',
  'プロンプトインジェクションの試行、保護された素材へのアクセスなどを検知':
    'Detects prompt injection attempts, access to protected material and more',
  '機密データの持ち出しを検知':
    'Detects exfiltration of confidential data',
  '退職予定者によるデータ持ち出しを検知':
    'Detects data theft by departing employees',
  'ポリシーの設定':
    'Policy settings',
  '対象ユーザー':
    'Users in scope',
  '組織内のすべてのユーザー':
    'All users in the organization',
  'SG-Agent365-Pilot（パイロット用セキュリティグループ）':
    'SG-Agent365-Pilot (the pilot security group)',
  'プロンプトインジェクションの試行':
    'Prompt injection attempts',
  '保護された素材へのアクセス':
    'Access to protected material',
  'ポリシーを作成':
    'Create policy',
  '作成しました。**PoC 期間中はアラートの確認のみ**を行います。':
    'Created. **During the PoC you only review the alerts.**',
  '左ナビの **インサイダー リスク管理** を開く':
    'Open **Insider Risk Management** in the left navigation',
  'Purview のソリューション一覧にあります。':
    'It is in the list of Purview solutions.',
  '開きました。':
    'It is open.',
  '**ポリシー** を開く':
    'Open **Policies**',
  'アラートではなくポリシーの作成に進みます。':
    'Go to policy creation rather than alerts.',
  'ポリシー一覧が開きました。':
    'The policy list is open.',
  '**ポリシーの作成** を選ぶ':
    'Choose **Create policy**',
  '作成方法の選択が表示されました。':
    'The creation method picker is displayed.',
  '**クイック ポリシー** を選ぶ':
    'Choose **Quick policy**',
  '手順書ではクイックポリシーを使います。':
    'The guide uses a quick policy.',
  '手順書の指定はクイックポリシーです。':
    'The guide specifies a quick policy.',
  'テンプレートの選択に進みました。':
    'You have moved on to choosing a template.',
  'テンプレートで **Risky AI usage** を選ぶ':
    'Choose the **Risky AI usage** template',
  'AI 利用に関するリスクのテンプレートです。':
    'This is the template for risks around AI usage.',
  'Data leaks は一般的な情報漏えい向けです。AI 利用のテンプレートを選びます。':
    'Data leaks is for general information leakage. Choose the template for AI usage.',
  '設定画面が表示されました。':
    'The settings screen is displayed.',
  '対象ユーザーに **パイロット用セキュリティグループ** を指定する':
    'Set the **pilot security group** as the users in scope',
  '本番テナントでの実施です。対象は必ずパイロットグループに限定します。':
    'This runs in a production tenant. Always scope it to the pilot group.',
  '対象を限定しました。':
    'You have narrowed the scope.',
  '検知対象を確認して **ポリシーを作成** する':
    'Review what will be detected, then **create the policy**',
  'プロンプトインジェクションの試行、保護された素材へのアクセスなどを確認します。':
    'Review the detections, such as prompt injection attempts and access to protected material.',
  '作成しました。':
    'Created.',
  'PoC 期間中は **アラートの確認のみ**です。1 週間運用し、アラートの内容を Week 3 のレビューで確認します。':
    'During the PoC you **only review the alerts**. Run it for a week and review the alert content in the Week 3 review.',
  '7.4 DLP を監査モードで構成する':
    '7.4 Configure DLP in audit mode',
  'エージェントとの対話を対象にした DLP を、パイロットグループ限定・監査のみで用意する':
    'Prepare a DLP policy covering agent conversations, scoped to the pilot group and set to audit only',
  'Purview > データ損失防止 > ポリシー（実画面）':
    'Purview > Data Loss Prevention > Policies (actual screen)',
  'データ損失防止 > ポリシー':
    'Data Loss Prevention > Policies',
  'DLP ポリシー':
    'DLP policies',
  'ポリシー名':
    'Policy name',
  '場所':
    'Locations',
  'モード':
    'Mode',
  '既存：機密情報の外部共有制限':
    'Existing: restrict external sharing of confidential information',
  '新しい DLP ポリシー':
    'New DLP policy',
  'PoC 用と分かる命名にします。':
    'Use a name that clearly marks it as PoC.',
  'Teams チャットとチャネル メッセージ':
    'Teams chat and channel messages',
  'Exchange メール':
    'Exchange email',
  'スコープ':
    'Scope',
  '組織全体':
    'Whole organization',
  'SG-Agent365-Pilot に限定':
    'Limited to SG-Agent365-Pilot',
  'アクション':
    'Action',
  'ブロック':
    'Block',
  '監査のみ（ポリシーヒントとアラート）':
    'Audit only (policy tips and alerts)',
  '作成':
    'Create',
  '監査モードで作成しました。1 週間運用し、アラートの内容を Week 3 のレビューで確認します。':
    'Created in audit mode. Run it for a week and review the alert content in the Week 3 review.',
  '既存ポリシーがエージェントとの対話を対象にしているかを確認したうえで、必要なら新規作成します。':
    'Confirm whether existing policies already cover agent conversations, then create a new one if needed.',
  '作成画面が開きました。':
    'The creation screen is open.',
  'ポリシー名に **A365-PoC** で始まる名前を入力する':
    'Enter a policy name beginning with **A365-PoC**',
  '例：`A365-PoC-Agent-DLP-Audit`。撤収時に見分けられる名前にします。':
    'For example `A365-PoC-Agent-DLP-Audit`. Use a name you can pick out at rollback time.',
  'PoC 用と分かる名前です。':
    'That name clearly marks it as PoC.',
  'スコープを **パイロットグループに限定**する':
    '**Scope it to the pilot group**',
  '本番テナントのため、場所とスコープはパイロットグループに限定します。':
    'Because this is a production tenant, keep both the locations and the scope limited to the pilot group.',
  '限定しました。':
    'You have narrowed the scope.',
  'アクションを **監査のみ** にする':
    'Set the action to **Audit only**',
  'エージェントは DLP のブロックを認識できません。PoC 中は監査のみが推奨です。':
    'Agents cannot recognise a DLP block. Audit only is recommended during the PoC.',
  '監査モードにしました。':
    'You set it to audit mode.',
  '**作成** する':
    '**Create** it',
  '最後に作成します。':
    'Create it at the end.',
  '**注意**：エージェントは DLP のブロックを認識できないため、ブロックに切り替えるのはオーナーが監視できる体制ができてからにします。秘密度ラベルで暗号化されたファイルを扱うエージェントには、エージェントインスタンスに **VIEW と EXTRACT** の使用権限を明示的に付与する必要があります。':
    '**Caution**: because agents cannot recognise a DLP block, only switch to blocking once owners are in place to monitor it. For agents that handle files encrypted with a sensitivity label, you must explicitly grant the agent instance the **VIEW and EXTRACT** usage rights.',
  'Purview の理解度チェック':
    'Purview knowledge check',
  '監査モード運用の理由と前提を確認する':
    'Confirm why audit mode is used and what it assumes',
  'PoC 期間中の DLP ポリシーのアクションとして推奨されるのはどれですか。':
    'Which DLP policy action is recommended during the PoC?',
  '削除':
    'Delete',
  '暗号化':
    'Encrypt',
  'エージェントは DLP のブロックを認識できません。オーナーが監視できる体制ができてからブロックに切り替えます。':
    'Agents cannot recognise a DLP block. Switch to blocking only once owners are in place to monitor it.',
  '秘密度ラベルで暗号化されたファイルをエージェントが扱えるようにするために必要な使用権限はどれですか。':
    'Which usage rights does an agent need to handle files encrypted with a sensitivity label?',
  'エージェントインスタンスに VIEW と EXTRACT を明示的に付与し、ファイルを明示的に共有します。':
    'Explicitly grant VIEW and EXTRACT to the agent instance, and share the file explicitly.',
  'Purview の監査で確認する「エージェントとの対話」に含まれないものはどれですか。':
    'Which of these is NOT part of "agent conversations" in the Purview audit?',
  '人からエージェント':
    'Person to agent',
  'エージェントから人':
    'Agent to person',
  'エージェントからツール':
    'Agent to tool',
  'ライセンスの購入履歴':
    'Licence purchase history',
  '人⇔エージェント、エージェント⇔ツール、エージェント間の 4 種類の対話が記録されます。':
    'Four kinds of conversation are recorded: person ↔ agent, agent ↔ tool, and agent ↔ agent.',
  'Risky AI usage テンプレートで対象ユーザーに指定するものはどれですか。':
    'Who do you set as the users in scope for the Risky AI usage template?',
  '管理者のみ':
    'Administrators only',
  '外部ユーザー':
    'External users',
  '本番テナントでの実施のため、対象は必ずパイロット用セキュリティグループに限定します。':
    'Because this runs in a production tenant, always scope it to the pilot security group.',
  'Registry のリスク件数と Defender / Purview の表示が一致しない場合の対処はどれですか。':
    'What do you do when the risk counts in the Registry do not match what Defender or Purview shows?',
  'テナントを再作成する':
    'Recreate the tenant',
  '時間をおいて再確認し、判断は発生元のポータルで行う':
    'Check again later, and make the judgement in the portal where the risk originated',
  'ライセンスを追加する':
    'Add licences',
  'ポリシーを削除する':
    'Delete the policy',
  'ポータル間の反映には最大 1 時間の遅延があります（12 章）。':
    'There is up to an hour of propagation delay between portals (ch. 12).',
  '手順 5：Entra Agent ID とライフサイクル統制':
    'Step 5: Entra Agent ID and lifecycle governance',
  '棚卸しと突合、オーナー／スポンサー、カスタム属性、条件付きアクセス、アクセスパッケージとレビュー':
    'Inventory and reconciliation, owners and sponsors, custom attributes, Conditional Access, access packages and reviews',
  '8.1 Agent identities を棚卸しして台帳と突合する':
    '8.1 Take inventory of agent identities and reconcile with the inventory',
  '必要な列を表示し、Registry 側の台帳と突合して「シャドー」を洗い出す':
    'Show the columns you need and reconcile with the Registry inventory to surface "shadow" agents',
  'Entra ID > エージェント > Agent identities（実画面）':
    'Entra ID > Agents > Agent identities (actual screen)',
  'Agent ID Administrator でサインインしています。Registry 由来の台帳（Week 2）を手元に用意しておきます。':
    'You are signed in as Agent ID Administrator. Keep the Registry inventory from Week 2 to hand.',
  'Entra ID > エージェント > Agent identities':
    'Entra ID > Agents > Agent identities',
  '列のカスタマイズ':
    'Customize columns',
  '台帳と突合する':
    'Reconcile with the inventory',
  '表示する列':
    'Columns to show',
  '突合結果：Registry には存在するが **Agent identity を持たない** エージェントが 4 件あります。台帳に「**Entra Agent ID なし（シャドー）**」として印を付けます。':
    'Reconciliation result: 4 agents exist in the Registry but **have no agent identity**. Flag them in the inventory as **"no Entra Agent ID (shadow)"**.',
  '左ナビの **エージェント > Agent identities** を開く':
    'Open **Agents > Agent identities** in the left navigation',
  'Entra ID グループ内の「エージェント」の下にあります。':
    'It is under "Agents" inside the Entra ID group.',
  '一覧が開きました。':
    'The list is open.',
  'Blueprints はこの後に確認します。まずは Agent identities です。':
    'You will check Blueprints afterwards. Start with Agent identities.',
  '**列のカスタマイズ** を開く':
    'Open **Customize columns**',
  '既定では必要な列が出ていません。':
    'By default the columns you need are not shown.',
  '列の選択が表示されました。':
    'The column picker is displayed.',
  '**Object ID** を表示する':
    'Show **Object ID**',
  '突合のキーになる列です。':
    'This is the key column for reconciliation.',
  '**Blueprint App ID** を表示する':
    'Show **Blueprint App ID**',
  'どの Blueprint から作られたかを示します。':
    'It shows which blueprint the agent was created from.',
  '**Owners and Sponsors** を表示する':
    'Show **Owners and Sponsors**',
  '8.2 のオーナー／スポンサー割り当てで使います。':
    'You will use it for the owner and sponsor assignment in 8.2.',
  '**Created On** を表示して **適用** する':
    'Show **Created On** and then **Apply**',
  '作成日も台帳に記録します。':
    'Record the created date in the inventory as well.',
  '**適用** をクリックする':
    'Click **Apply**',
  '列が表示されました。':
    'The columns are now shown.',
  'Week 2 の台帳（Registry 由来）と **突合** する':
    '**Reconcile** with the Week 2 inventory (from the Registry)',
  'Registry にあるが Agent identity がないものを探します。':
    'Look for entries that exist in the Registry but have no agent identity.',
  '突合が完了しました。':
    'Reconciliation is complete.',
  '続けて **Agent blueprints** を開き、各 Blueprint に紐づく Agent identity の数・オーナー・権限を確認します。':
    'Next, open **Agent blueprints** and check how many agent identities, which owners and which permissions are tied to each blueprint.',
  '8.2 オーナーとスポンサーを割り当てる':
    '8.2 Assign owners and sponsors',
  'オーナー／スポンサーが空のエージェントに責任者を割り当て、オーナー不在を 0 件にする':
    'Assign accountable people to agents with no owner or sponsor and bring the ownerless count to zero',
  'Manage owners and sponsors（実画面）':
    'Manage owners and sponsors (actual screen)',
  'フィルター：オーナーまたはスポンサーが空':
    'Filter: no owner or sponsor',
  '人事 FAQ エージェント — Manage owners and sponsors':
    'HR FAQ agent — Manage owners and sponsors',
  '**オーナー**＝技術的な管理者、**スポンサー**＝「このエージェントは引き続き必要か」を判断する業務上の責任者。':
    '**Owner** = the technical administrator. **Sponsor** = the business owner who decides whether the agent is still needed.',
  'オーナー（技術的な管理者）':
    'Owner (technical administrator)',
  'kobayashi@contoso.com（人事システム担当）':
    'kobayashi@contoso.com (HR systems)',
  'guest@partner.example（外部）':
    'guest@partner.example (external)',
  'スポンサー（業務上の責任者）':
    'Sponsor (business owner)',
  'nakamura@contoso.com（人事部長）':
    'nakamura@contoso.com (HR director)',
  'helpdesk@contoso.com（共有メールボックス）':
    'helpdesk@contoso.com (shared mailbox)',
  '割り当てました。Microsoft 365 管理センター > レジストリ 側でも **Assign new owner** で新オーナーを割り当て、ダッシュボードの「所有者のいないエージェント」が 0 件になったことを確認します。':
    'Assigned. In the Microsoft 365 admin center Registry, also use **Assign new owner** to set the new owner, then confirm the dashboard shows Agents without owners at zero.',
  '**オーナーまたはスポンサーが空**のエージェントをフィルターする':
    'Filter for agents with **no owner or sponsor**',
  'コマンドバーのフィルターです。':
    'It is the filter on the command bar.',
  '該当するエージェントが表示されました。':
    'The matching agents are displayed.',
  'オーナーもスポンサーも空の **人事 FAQ エージェント** を開く':
    'Open the **HR FAQ agent**, which has neither an owner nor a sponsor',
  '両方「なし」になっている行です。':
    'It is the row where both show "None".',
  '割り当て画面が開きました。':
    'The assignment screen is open.',
  '**オーナー**（技術的な管理者）を割り当てる':
    'Assign the **owner** (technical administrator)',
  '社内の技術担当者を選びます。外部ゲストは適切ではありません。':
    'Choose an internal technical contact. An external guest is not appropriate.',
  'オーナーを決めました。':
    'You have chosen an owner.',
  '**スポンサー**（業務上の責任者）を割り当てる':
    'Assign the **sponsor** (business owner)',
  'スポンサーは「このエージェントは引き続き必要か」を判断する人です。共有メールボックスでは判断できません。':
    'The sponsor is the person who decides whether the agent is still needed. A shared mailbox cannot make that call.',
  'スポンサーを決めました。':
    'You have chosen a sponsor.',
  'オーナーが退職・異動した場合にスポンサーを上長へ自動移管する **ライフサイクルワークフロー** は、本展開時の検討事項とします。':
    'A **lifecycle workflow** that automatically reassigns the sponsor to the manager when an owner leaves or transfers is something to consider at full rollout.',
  '8.4 カスタムセキュリティ属性で対象を指定できるようにする':
    '8.4 Use custom security attributes to define scope',
  '属性セット Agent365 と属性 PoCScope / Criticality を定義し、重点エージェントに付与する':
    'Define the Agent365 attribute set with the PoCScope and Criticality attributes, and apply them to priority agents',
  'カスタム セキュリティ属性の属性セットと属性定義（実画面）':
    'The custom security attribute set and attribute definitions (actual screens)',
  'Entra ID > カスタム セキュリティ属性':
    'Entra ID > Custom security attributes',
  'エージェントの数が増えてもポリシーを増やさずに済むよう、**対象指定はカスタムセキュリティ属性**で行います。':
    'So that policies do not multiply as the number of agents grows, **scope is defined with custom security attributes**.',
  '属性セットの追加':
    'Add attribute set',
  '新しい属性セット':
    'New attribute set',
  '属性セット名':
    'Attribute set name',
  '手順書では `Agent365` という名前で作成します。':
    'The guide creates it with the name `Agent365`.',
  '追加':
    'Add',
  '属性の定義':
    'Attribute definitions',
  '値：Pilot / Prod':
    'Values: Pilot / Prod',
  '値：High / Medium / Low':
    'Values: High / Medium / Low',
  '（この PoC では使用しません）':
    '(not used in this PoC)',
  '重点エージェントの Agent identity に **PoCScope = Pilot** を割り当てました。以降、エージェントを追加するときは属性を付けるだけで同じポリシーが適用されます。':
    '**PoCScope = Pilot** has been applied to the agent identities of the priority agents. From now on, adding an agent only requires setting the attribute for the same policy to apply.',
  '左ナビの **カスタム セキュリティ属性** を開く':
    'Open **Custom security attributes** in the left navigation',
  '「保護」グループの中にあります。':
    'It is inside the "Protection" group.',
  '**属性セットの追加** を選ぶ':
    'Choose **Add attribute set**',
  'まず属性セットを作ってから属性を定義します。':
    'Create the attribute set first, then define the attributes.',
  '追加画面が表示されました。':
    'The add screen is displayed.',
  '属性セット名に **Agent365** と入力する':
    'Enter **Agent365** as the attribute set name',
  '半角で `Agent365`。':
    'Enter `Agent365` in single-byte characters.',
  '入力しました。':
    'Entered.',
  '**追加** する':
    '**Add** it',
  '属性セットを作成します。':
    'Create the attribute set.',
  '属性セットができました。':
    'The attribute set is created.',
  '条件付きアクセスの対象指定に使う属性 **PoCScope** を定義する':
    'Define **PoCScope**, the attribute used to scope Conditional Access',
  '値は Pilot / Prod の 2 つです。':
    'It has two values: Pilot and Prod.',
  'Department はこの PoC では使いません。':
    'Department is not used in this PoC.',
  '定義しました。':
    'Defined.',
  '**Criticality**（High / Medium / Low）も同様に定義します。重点エージェントには `PoCScope = Pilot` を割り当て、8.3 のポリシーをこの属性でフィルターします。':
    'Define **Criticality** (High / Medium / Low) the same way. Apply `PoCScope = Pilot` to priority agents and filter the policy in 8.3 by that attribute.',
  '8.3 条件付きアクセスをレポート専用で作成する':
    '8.3 Create a Conditional Access policy in report-only mode',
  'Agents を対象に、高・中リスクをブロックするポリシーをレポート専用で作る':
    'Create a report-only policy targeting Agents that blocks high and medium risk',
  'エージェント向け条件付きアクセスポリシー（実画面）':
    'The Conditional Access policy for agents (actual screen)',
  'Entra ID > 条件付きアクセス > ポリシー':
    'Entra ID > Conditional Access > Policies',
  '新しいポリシー':
    'New policy',
  '既存：すべてのユーザーに MFA を要求':
    'Existing: require MFA for all users',
  'オン':
    'On',
  '「すべてのユーザー」を対象にした既存ポリシーは **エージェントのユーザーアカウントには適用されません**。エージェント用のポリシーを別に作ります。':
    'An existing policy that targets "All users" **does not apply to an agent\'s user account**. Create a separate policy for agents.',
  'Entra ID > 条件付きアクセス > 新しいポリシー':
    'Entra ID > Conditional Access > New policy',
  'PoC 用と分かる命名にします。先頭は `A365-PoC`。':
    'Use a name that clearly marks it as PoC, beginning with `A365-PoC`.',
  'このポリシーの適用対象':
    'What does this policy apply to',
  'エージェント（プレビュー）':
    'Agents (preview)',
  'ワークロード ID':
    'Workload identities',
  '対象の選び方':
    'How to select targets',
  '個別のエージェントを選ぶ':
    'Select individual agents',
  'カスタムセキュリティ属性（PoCScope = Pilot）で指定':
    'By custom security attribute (PoCScope = Pilot)',
  'ターゲット リソース':
    'Target resources',
  '条件とアクセス制御':
    'Conditions and access controls',
  'エージェントのリスクレベル：**高**':
    'Agent risk level: **High**',
  'エージェントのリスクレベル：**中**':
    'Agent risk level: **Medium**',
  'エージェントのリスクレベル：低':
    'Agent risk level: Low',
  'アクセス制御':
    'Access controls',
  'Block access（アクセスをブロック）':
    'Block access',
  'MFA を要求':
    'Require MFA',
  'ポリシーの状態':
    'Enable policy',
  'オン（強制）':
    'On (enforced)',
  'Report-only（レポート専用）':
    'Report-only',
  'オフ':
    'Off',
  'レポート専用で作成しました。1 週間以上運用し、サインインログの「レポート専用」の結果で「ブロックされていたはず」の件数と内訳を確認します。':
    'Created in report-only mode. Run it for at least a week, then use the report-only results in the sign-in logs to review how many sign-ins would have been blocked, and why.',
  '**新しいポリシー** を作成する':
    'Create a **new policy**',
  'PoC 用と分かる名前を入力する（**A365-PoC** で始める）':
    'Enter a name that clearly marks it as PoC (start it with **A365-PoC**)',
  '例：`A365-PoC-Agents-Block-HighRisk（Report-only）`。撤収時に見分けられるようにします。':
    'For example `A365-PoC-Agents-Block-HighRisk (Report-only)`. Make it easy to spot at rollback time.',
  '命名しました。':
    'You have named it.',
  '適用対象で **エージェント（プレビュー）** を選ぶ':
    'Choose **Agents (preview)** as what the policy applies to',
  '「ユーザー、エージェント（プレビュー）、またはワークロード ID」からエージェントを選びます。':
    'Choose Agents from "Users, agents (preview), or workload identities".',
  '対象の選び方を **カスタムセキュリティ属性** にする':
    'Set the target selection to **custom security attribute**',
  '個別のエージェントを選ぶと、増えるたびにポリシーの修正が必要になります。8.4 で作った属性を使います。':
    'Selecting individual agents means editing the policy every time one is added. Use the attribute you created in 8.4.',
  '属性で指定しました。':
    'You scoped it by attribute.',
  'ターゲット リソースに **All agent resources** を選ぶ':
    'Choose **All agent resources** as the target resources',
  '手順書の指定どおりです。':
    'This is what the guide specifies.',
  '条件でリスクレベル **高** を選ぶ':
    'Select risk level **High** in the conditions',
  '高・中のリスクを対象にします。':
    'Target high and medium risk.',
  'リスクレベル **中** も選ぶ':
    'Also select risk level **Medium**',
  'もう 1 つです。':
    'One more.',
  '対象は高・中です。低リスクまで含めると誤検知が増えます。':
    'The targets are high and medium. Including low risk increases false positives.',
  'アクセス制御で **Block access** を選ぶ':
    'Choose **Block access** for the access control',
  'エージェント ID に対しては Block のみが利用可能です。':
    'Block is the only control available for agent identities.',
  'ポリシーの状態を **Report-only** にする':
    'Set the policy state to **Report-only**',
  'PoC 期間中はレポート専用が基本です。強制は Week 4 に判断します。':
    'Report-only is the default during the PoC. Enforcement is decided in Week 4.',
  'レポート専用にしました。':
    'You set it to report-only.',
  '条件付きアクセスが適用されないケース：セキュリティの既定値群が有効／API キーでのアクセス／Blueprint が Microsoft Graph 向けにトークンを取得する場合。':
    'Conditional Access does not apply when: security defaults are enabled, access uses an API key, or the blueprint acquires a token for Microsoft Graph.',
  '8.5-8.6 アクセスパッケージとアクセスレビュー':
    '8.5–8.6 Access packages and access reviews',
  '有効期限と承認者（スポンサー）を設定し、レビューを 1 サイクル回す':
    'Set an expiry and an approver (the sponsor), and run one review cycle',
  'エンタイトルメント管理 > アクセス パッケージ（実画面）':
    'Entitlement management > Access packages (actual screen)',
  'ID ガバナンス > エンタイトルメント管理 > アクセス パッケージ':
    'Identity Governance > Entitlement management > Access packages',
  'アクセス パッケージ':
    'Access packages',
  '新しいアクセス パッケージ':
    'New access package',
  'リソース':
    'Resources',
  'SG-HR-Portal-Access（特定の SharePoint サイトへのアクセス用グループ）':
    'SG-HR-Portal-Access (the group granting access to a specific SharePoint site)',
  'ポリシーの対象':
    'Who the policy applies to',
  'ディレクトリ内のユーザーのみ':
    'Users in the directory only',
  'ディレクトリ内のユーザー、サービス プリンシパル、エージェント ID':
    'Users, service principals and agent identities in the directory',
  '特定のエージェント 1 体':
    'One specific agent',
  '有効期限':
    'Expiration',
  '30 日':
    '30 days',
  '無期限':
    'Never expires',
  '承認者':
    'Approvers',
  'スポンサー':
    'Sponsor',
  'グローバル管理者':
    'Global Administrator',
  '作成しました。重点エージェント 1 体に管理者が直接割り当てを行い、**期限と延長の通知がスポンサーに届く**ことを確認します。':
    'Created. Have an administrator assign it directly to one priority agent, then confirm that **expiry and extension notifications reach the sponsor**.',
  'ID ガバナンス > アクセス レビュー':
    'Identity Governance > Access reviews',
  '新しいアクセス レビュー':
    'New access review',
  'レビュー対象':
    'Review scope',
  '8.5 のアクセス パッケージ':
    'The access package from 8.5',
  '全ユーザーのロール割り当て':
    'Role assignments for all users',
  'レビュー担当者':
    'Reviewers',
  '本人（セルフレビュー）':
    'The agent itself (self-review)',
  '期間と繰り返し':
    'Duration and recurrence',
  '1 週間・1 回限り':
    'One week, one time only',
  '四半期ごと':
    'Quarterly',
  '作成しました。スポンサーがレビューを完了し、結果（承認・拒否）が反映されることを確認します。拒否した割り当ては期限後に削除されます。':
    'Created. Confirm that the sponsor completes the review and that the outcome (approve or deny) is applied. Denied assignments are removed when the period ends.',
  '**新しいアクセス パッケージ** を作成する':
    'Create a **new access package**',
  'リソースとして **エージェントが必要とするセキュリティグループ** を追加する':
    'Add the **security group the agent needs** as a resource',
  '例：特定の SharePoint サイトへのアクセス用グループ。':
    'For example, the group granting access to a specific SharePoint site.',
  'ポリシーの対象で **ユーザー、サービス プリンシパル、エージェント ID** を選ぶ':
    'Choose **users, service principals and agent identities** as who the policy applies to',
  'エージェント ID を含む選択肢です。':
    'This is the option that includes agent identities.',
  '対象を **All agents** にする':
    'Set the target to **All agents**',
  '個別指定にしないのが本 PoC の方針です。':
    'Not selecting individually is the principle of this PoC.',
  '有効期限を **30 日** にする':
    'Set the expiration to **30 days**',
  '期限を設けることで、延長の通知がスポンサーに届きます。':
    'With an expiry in place, extension notifications reach the sponsor.',
  '設定しました。':
    'Set.',
  '承認者を **スポンサー** にする':
    'Set the approver to **Sponsor**',
  'スポンサーは「このエージェントは引き続き必要か」を判断する人です。':
    'The sponsor is the person who decides whether the agent is still needed.',
  '左ナビの **アクセス レビュー** を開く':
    'Open **Access reviews** in the left navigation',
  'ID ガバナンスの中にあります。':
    'It is inside Identity Governance.',
  '**新しいアクセス レビュー** を作成する':
    'Create a **new access review**',
  'レビュー対象を **8.5 のアクセス パッケージ** にする':
    'Set the review scope to **the access package from 8.5**',
  'アクセスパッケージ、またはエージェントが所属するグループが対象です。':
    'The scope is the access package, or the group the agent belongs to.',
  'レビュー担当者を **スポンサー** にする':
    'Set the reviewer to **Sponsor**',
  'セルフレビューでは統制になりません。':
    'A self-review provides no governance.',
  '期間を **1 週間・1 回限り** にする':
    'Set the duration to **one week, one time only**',
  'PoC 期間中に 1 サイクル完了させます。':
    'Complete one cycle within the PoC period.',
  '8.7 確認ポイント':
    '8.7 Checkpoints',
  'Week 3 前半の完了条件を確認する':
    'Confirm the exit criteria for the first half of Week 3',
  '重点エージェントすべてに **オーナーとスポンサー**が割り当てられている':
    'Every priority agent has an **owner and a sponsor**',
  'レポート専用の条件付きアクセスが重点エージェント（**属性で指定**）に適用され、結果がサインインログで確認できる':
    'The report-only Conditional Access policy applies to the priority agents (**scoped by attribute**) and the results are visible in the sign-in logs',
  '**アクセスレビューが 1 サイクル完了**している':
    '**One access review cycle is complete**',
  'Entra Agent ID の理解度チェック':
    'Entra Agent ID knowledge check',
  'オーナー／スポンサーの違いと属性運用を定着させる':
    'Lock in the difference between owner and sponsor, and how attributes are used',
  'スポンサーの役割として正しいものはどれですか。':
    'Which statement describes the sponsor\'s role?',
  'エージェントの技術的な実装を担当する':
    'Responsible for the technical implementation of the agent',
  '「このエージェントは引き続き必要か」を判断し、期限切れ通知やアクセスレビューの判断を担う':
    'Decides whether the agent is still needed, and acts on expiry notifications and access reviews',
  'ライセンスを購入する':
    'Purchases licences',
  'テナントの管理者権限を持つ':
    'Holds tenant administrator permissions',
  'オーナー＝技術的な管理者、スポンサー＝業務上の責任者です。':
    'Owner = the technical administrator. Sponsor = the business owner.',
  '条件付きアクセスの対象をカスタムセキュリティ属性で指定する理由はどれですか。':
    'Why do you scope Conditional Access by custom security attribute?',
  'ポリシーの作成が速くなるから':
    'Because the policy is quicker to create',
  'エージェントが増えてもポリシーを増やさずに済むから':
    'Because policies do not multiply as the number of agents grows',
  '属性が必須項目だから':
    'Because the attribute is a required field',
  '個別指定ができないから':
    'Because individual selection is not possible',
  '以降はエージェントに属性（PoCScope = Pilot）を付けるだけで同じポリシーが適用されます。':
    'From then on, applying the attribute (PoCScope = Pilot) to an agent is all it takes for the same policy to apply.',
  'Registry に存在するが Agent identity を持たないエージェントを、台帳でどう扱いますか。':
    'How do you treat an agent that exists in the Registry but has no agent identity?',
  '即削除する':
    'Delete it immediately',
  '「Entra Agent ID なし（シャドー）」として印を付ける':
    'Flag it as "no Entra Agent ID (shadow)"',
  '無視する':
    'Ignore it',
  '自動的に Agent identity が作られるまで待つ':
    'Wait until an agent identity is created automatically',
  '突合結果を台帳に反映することが Week 3 の棚卸しの目的です。':
    'Reflecting the reconciliation result in the inventory is the point of the Week 3 inventory work.',
  'エージェント ID に対する条件付きアクセスのアクセス制御で利用できるものはどれですか。':
    'Which access control is available in Conditional Access for agent identities?',
  'Block access のみ':
    'Block access only',
  'デバイス準拠を要求':
    'Require device compliance',
  'パスワード変更を要求':
    'Require a password change',
  'アクセスパッケージで有効期限（例：30 日）を設定する目的はどれですか。':
    'Why do you set an expiry (for example 30 days) on the access package?',
  'ライセンス費用を抑えるため':
    'To reduce licence costs',
  '期限と延長の通知がスポンサーに届き、継続要否を判断できるようにするため':
    'So that expiry and extension notifications reach the sponsor, who can decide whether it is still needed',
  'エージェントの性能を上げるため':
    'To improve agent performance',
  '監査ログを減らすため':
    'To reduce audit logs',
  '期限切れ時にスポンサーが判断する運用が、ライフサイクル統制の中核です。':
    'Having the sponsor decide at expiry is the core of lifecycle governance.',
  '手順 6：リアルタイム保護と調査':
    'Step 6: Real-time protection and investigation',
  'Defender のリアルタイム保護ルール作成、脅威検出、高度なハンティング':
    'Creating Defender real-time protection rules, threat detection, and advanced hunting',
  '9.1 AI エージェントのリアルタイム保護ルールを作る':
    '9.1 Create a real-time protection rule for AI agents',
  '名前・スコープ・除外・検出の種類を指定してルールを作成し、有効になったことを確認する':
    'Specify the name, scope, exclusions and detection types, create the rule, and confirm it is enabled',
  '設定 > AI のセキュリティ > ポリシーとルール > リアルタイム保護（実画面）':
    'Settings > Security for AI > Policies & rules > Real-time protection (actual screens)',
  'オンボードは完了しています（Week 1）。':
    'Onboarding is already complete (Week 1).',
  '設定 > AI のセキュリティ > ポリシーとルール':
    'Settings > Security for AI > Policies & rules',
  '**リアルタイム保護**':
    '**Real-time protection**',
  'プロンプトインジェクション等を検出時にブロック／監査する':
    'Blocks or audits prompt injection and similar when detected',
  'アラート チューニング':
    'Alert tuning',
  'アラートの抑制ルール':
    'Alert suppression rules',
  '設定 > AI のセキュリティ > ポリシーとルール > リアルタイム保護':
    'Settings > Security for AI > Policies & rules > Real-time protection',
  'ルールの作成':
    'Create rule',
  '新しいルール':
    'New rule',
  'テナント内のすべてのエージェント':
    'All agents in the tenant',
  'パイロット対象のエージェントに限定':
    'Limited to the pilot agents',
  '脱獄（jailbreak）の試行':
    'Jailbreak attempts',
  '**間接プロンプト注入（XPIA）の試行**':
    '**Indirect prompt injection (XPIA) attempts**',
  '秘密情報・認証情報の漏えい':
    'Leakage of secrets or credentials',
  '除外（任意）':
    'Exclusions (optional)',
  '例：開発用エージェント':
    'For example, development agents',
  'ルールが有効になりました。Copilot Studio エージェントや Foundry エージェントに対して **プロンプトインジェクションのテスト**を実行し、リアルタイム保護が動作することを確認します。':
    'The rule is enabled. Run a **prompt injection test** against a Copilot Studio agent or a Foundry agent and confirm real-time protection works.',
  '**ポリシーとルール** のタブを開く':
    'Open the **Policies & rules** tab',
  '設定 > AI のセキュリティ の中にあります。':
    'It is inside Settings > Security for AI.',
  '**リアルタイム保護** を開く':
    'Open **Real-time protection**',
  'プロンプトインジェクション等をリアルタイムに扱う項目です。':
    'This is the item that handles prompt injection and similar in real time.',
  '**ルールの作成** を選ぶ':
    'Choose **Create rule**',
  'ルール名を **A365-PoC** で始まる名前にする':
    'Give the rule a name beginning with **A365-PoC**',
  '例：`A365-PoC-RTP-Pilot`。':
    'For example `A365-PoC-RTP-Pilot`.',
  'スコープを **パイロット対象に限定**する':
    '**Limit the scope to the pilot agents**',
  '本番テナントです。いきなり全社に広げません。':
    'This is a production tenant. Do not widen it company-wide straight away.',
  '検出の種類で **間接プロンプト注入（XPIA）の試行** を選ぶ':
    'Select **indirect prompt injection (XPIA) attempts** as the detection type',
  'Defender が検出する代表的な脅威の 1 つです。':
    'It is one of the signature threats Defender detects.',
  '詳細：https://learn.microsoft.com/ja-jp/defender-xdr/security-for-ai/ai-agent-real-time-protection':
    'Details: https://learn.microsoft.com/en-us/defender-xdr/security-for-ai/ai-agent-real-time-protection',
  '9.2 脅威の検出と調査（高度なハンティング）':
    '9.2 Threat detection and investigation (advanced hunting)',
  'Defender が検出する脅威の種類と、KQL による調査方法を知る':
    'Know the kinds of threat Defender detects and how to investigate with KQL',
  'ほぼリアルタイムで AI エージェントの脅威を検出':
    'Near real-time detection of AI agent threats',
  'Microsoft Defender は AI エージェントの活動を継続的に監視し、すべての Agent 365 管理エージェントに対して不審かつ悪意のある行動を検出します。エージェントのテレメトリ、ツールの使用、実行パターンを分析します。':
    'Microsoft Defender continuously monitors AI agent activity and detects suspicious and malicious behaviour across every Agent 365 managed agent, analysing agent telemetry, tool use and execution patterns.',
  '脱獄（jailbreak）試み':
    'Jailbreak attempts',
  '間接プロンプト注入（XPIA）試み':
    'Indirect prompt injection (XPIA) attempts',
  '悪意あるコンテンツの伝播':
    'Propagation of malicious content',
  '秘密情報や認証情報の漏えい':
    'Leakage of secrets or credentials',
  '回避技術':
    'Evasion techniques',
  '大規模言語モデル（LLM）偵察':
    'Large language model (LLM) reconnaissance',
  '疑わしいユーザーや IP アクセス':
    'Suspicious user or IP access',
  'AI エージェントの脅威検出（実画面）':
    'AI agent threat detection (actual screen)',
  '高度なハンティングで調査する':
    'Investigate with advanced hunting',
  'AI エージェントのアラートはインシデントに関連付けられ、関連コンテキストが表示されるため、影響の評価と対応の優先順位付けが素早く行えます。アナリストは **KQL（Kusto クエリ言語）** で Agent 365 の監視データにクエリを実行できます。':
    'AI agent alerts are correlated into incidents with the related context displayed, so you can assess impact and prioritise response quickly. Analysts can query Agent 365 monitoring data with **KQL (Kusto Query Language)**.',
  '高度なハンティングでの調査（実画面）':
    'Investigating with advanced hunting (actual screen)',
  '参考：https://learn.microsoft.com/ja-jp/defender-xdr/security-for-ai/ai-agent-detection-protection':
    'Reference: https://learn.microsoft.com/en-us/defender-xdr/security-for-ai/ai-agent-detection-protection',
  'リアルタイム保護と調査の理解度チェック':
    'Real-time protection and investigation knowledge check',
  '検出される脅威と調査手段を確認する':
    'Review the threats detected and the means of investigation',
  'Defender が AI エージェントに対して検出する脅威に含まれるものをすべて選んでください。':
    'Select every threat Defender detects for AI agents.',
  'LLM 偵察':
    'LLM reconnaissance',
  'ライセンスの期限切れ':
    'Licence expiry',
  'ほかに悪意あるコンテンツの伝播、回避技術、疑わしいユーザーや IP アクセスも検出対象です。':
    'It also detects propagation of malicious content, evasion techniques, and suspicious user or IP access.',
  '高度なハンティングで Agent 365 の監視データを調査するときに使う言語はどれですか。':
    'Which language do you use to investigate Agent 365 monitoring data in advanced hunting?',
  'KQL（Kusto クエリ言語）':
    'KQL (Kusto Query Language)',
  'アラートはインシデントに関連付けられ、KQL でクエリして調査できます。':
    'Alerts are correlated into incidents and can be investigated by querying with KQL.',
  'リアルタイム保護ルールのスコープとして PoC で適切なのはどれですか。':
    'Which scope is appropriate for a real-time protection rule during the PoC?',
  '外部テナントのエージェント':
    'Agents in an external tenant',
  '設定しない':
    'Do not set a scope',
  '本番テナントでの実施のため、影響範囲を限定します。':
    'Because this runs in a production tenant, keep the blast radius small.',
  '手順 7：運用プロセスの確定と KPI 測定':
    'Step 7: Finalise the operating model and measure KPIs',
  '承認フロー、是正フロー、強制への切替判断、KPI の算出':
    'Approval workflow, remediation workflow, the decision to enforce, and calculating KPIs',
  '10.1 新規エージェントの承認フローを組み立てる':
    '10.1 Build the approval workflow for new agents',
  '申請から記録までの 5 ステップを正しい順序に並べる':
    'Put the five steps from request to record in the correct order',
  '新規エージェントの承認フロー（サンプル）のステップを、正しい順序に並べ替えてください。上下ボタンまたはドラッグで入れ替えられます。':
    'Put the steps of the sample approval workflow for new agents into the correct order. Use the up and down buttons, or drag to reorder.',
  '**申請**（作成者）：Copilot Studio / Agent Builder から公開申請、または Registry の Add agent で ZIP をアップロード':
    '**Request** (creator): submit for publishing from Copilot Studio or Agent Builder, or upload a ZIP with Add agent in the Registry',
  '**審査**（AI Administrator）：Registry の承認待ち一覧で詳細ペインを開き、権限とデータソースを確認':
    '**Review** (AI Administrator): open the details pane in the Registry pending-approval list and check permissions and data sources',
  '**属性付与**（Agent ID Administrator）：Agent identity にカスタムセキュリティ属性（PoCScope、Criticality）を付与':
    '**Attribute assignment** (Agent ID Administrator): apply the custom security attributes (PoCScope, Criticality) to the agent identity',
  '**公開**（AI Administrator）：Registry で承認し、対象グループに公開（必要に応じてピン留め）':
    '**Publish** (AI Administrator): approve in the Registry and publish to the target group (pin it if appropriate)',
  '**記録**（情シス）：台帳に追記し、台帳と Registry の件数が一致することを確認':
    '**Record** (IT): add it to the inventory and confirm the inventory count matches the Registry',
  '属性付与を公開の前に行うのがポイントです。属性が付くことで条件付きアクセスの対象になります。公開範囲は個人ではなく必ずグループで指定します。':
    'The key point is applying attributes before publishing. Applying the attribute is what brings the agent into scope for Conditional Access. Always publish to a group, never to individuals.',
  '10.2-10.4 是正・対応・定期棚卸しのフロー':
    '10.2–10.4 Remediation, response and periodic inventory workflows',
  '日次・週次・月次・四半期で何をするかを把握する':
    'Know what happens daily, weekly, monthly and quarterly',
  '10.2 オーナー不在エージェントの是正フロー':
    '10.2 Remediation workflow for ownerless agents',
  '週次で レジストリ の **所有者のいないエージェント** を確認する（ユーザーの完全削除時にはリアルタイムで反映される）':
    'Check **Agents without owners** in the Registry weekly (it updates in real time when a user is permanently deleted)',
  '元の作成者の上長または業務部門に新オーナー候補を確認する':
    'Ask the original creator\'s manager or the business unit for a new owner candidate',
  '候補が見つかれば **Assign new owner** で割り当て、見つからなければ**ブロック**する。**削除はスポンサー確認後にのみ**行う':
    'If a candidate is found, assign them with **Assign new owner**; if not, **block** the agent. **Delete only after confirming with the sponsor.**',
  '台帳に対応内容と日付を記録する':
    'Record the action taken and the date in the inventory',
  '10.3 高リスク検知時の対応フロー':
    '10.3 Response workflow for high-risk detections',
  'Registry の Agents at risk、Defender のアラート、Purview のアラートを**日次**で確認する（担当：セキュリティ部門）':
    'Check Agents at risk in the Registry, Defender alerts and Purview alerts **daily** (owner: the security team)',
  'Registry のリスク件数からセキュリティ詳細を開き、発生元のポータル（Defender / Purview / Entra）で内容を確認する':
    'Open the security details from the Registry risk count and review the content in the portal where it originated (Defender / Purview / Entra)',
  '一次対応の目安：**高リスクは当日中にオーナーへ連絡**、必要に応じてブロック。**中リスクは週次レビュー**で扱う':
    'Guideline for first response: **contact the owner the same day for high risk**, blocking if necessary. **Handle medium risk in the weekly review.**',
  '対応結果を台帳に記録し、KPI「高リスク検知の対応率」に反映する':
    'Record the outcome in the inventory and reflect it in the "high-risk detection response rate" KPI',
  '10.4 定期棚卸し':
    '10.4 Periodic inventory',
  '頻度':
    'Frequency',
  '実施内容':
    'What to do',
  '月次':
    'Monthly',
  'Registry の CSV エクスポートと台帳の突合、オーナー不在・未管理の確認':
    'Export the Registry to CSV, reconcile with the inventory, and check ownerless and unmanaged agents',
  '四半期':
    'Quarterly',
  'アクセスレビューの実施（レビュー担当はスポンサー）':
    'Run the access review (sponsors are the reviewers)',
  '随時':
    'As needed',
  'ユーザーの退職・異動時に、そのユーザーがオーナーのエージェントを確認':
    'When a user leaves or transfers, check the agents they own',
  'リスクの判断は必ず**発生元のポータル**で行います。Registry の表示と Defender / Purview の表示には最大 1 時間の遅延があります。':
    'Always make the risk judgement **in the portal where it originated**. There is up to an hour of delay between what the Registry shows and what Defender or Purview shows.',
  '10.5 監査モードから強制への切替判断':
    '10.5 Deciding when to move from audit to enforcement',
  'どの条件が揃ったら強制に切り替えてよいかを判断できるようにする':
    'Be able to judge which conditions allow a switch to enforcement',
  '条件付きアクセス（高リスクエージェントのブロック）を強制に切り替える条件はどれですか。':
    'Which condition allows you to switch Conditional Access (blocking high-risk agents) to enforcement?',
  'レポート専用の結果で、正当なエージェントの誤検知が 1 週間以上ゼロ':
    'Zero false positives on legitimate agents in the report-only results for at least a week',
  'エージェントの総数が 100 件を超えた':
    'The total number of agents exceeds 100',
  'ライセンスを追加購入した':
    'Additional licences were purchased',
  '経営層の承認が得られた':
    'Executive approval was obtained',
  '切替方法はポリシーの状態を On にするだけです。対象は属性 PoCScope = Pilot のままにします。':
    'Switching is simply a matter of setting the policy state to On. Leave the target as the attribute PoCScope = Pilot.',
  'DLP（エージェント対話）をブロックに切り替える条件はどれですか。':
    'Which condition allows you to switch DLP (agent conversations) to blocking?',
  'アラートが 0 件になったとき':
    'When alerts reach zero',
  '監査アラートの内容をオーナーが確認し、ブロック時の連絡先が決まっているとき':
    'When owners have reviewed the audit alerts and a contact point for blocked users has been agreed',
  '月末になったとき':
    'When the month ends',
  'エージェントが DLP に対応したとき':
    'When agents start supporting DLP',
  'エージェントは DLP のブロックを認識できないため、ブロック時に利用者へ連絡できる体制が前提です。場所はパイロットグループのままにします。':
    'Because agents cannot recognise a DLP block, the prerequisite is a way to contact users when a block happens. Leave the locations scoped to the pilot group.',
  'ローカルエージェントのブロック（Intune）を適用する条件はどれですか。':
    'Which condition allows you to apply local agent blocking (Intune)?',
  '検出結果に正当な開発ツールが含まれていないことを確認済み':
    'You have confirmed the discovery results contain no legitimate developer tools',
  '端末台数が 100 台を超えた':
    'The number of devices exceeds 100',
  'Defender がパッシブモードになった':
    'Defender went into passive mode',
  'ユーザーから要望があった':
    'A user asked for it',
  '確認後、ポリシーを**パイロット端末グループにのみ**割り当てます。':
    'After confirming, assign the policy **only to the pilot device group**.',
  'Week 4 に強制へ切り替える際の共通ルールとして正しいものはどれですか。':
    'Which common rule applies when switching to enforcement in Week 4?',
  '全社に一括適用する':
    'Apply it company-wide in one go',
  '対象を限定したまま切り替える':
    'Switch while keeping the scope limited',
  'すべてのポリシーを同時に切り替える':
    'Switch every policy at the same time',
  'レポート専用のまま残す':
    'Leave everything report-only',
  '「強制（ブロック）は Week 4 に対象を限定して判断する」が本 PoC の基本方針です。':
    '"Enforcement (blocking) is decided in Week 4 for a limited scope" is the core principle of this PoC.',
  '10.6 最終エクスポートと KPI の算出':
    '10.6 Final export and KPI calculation',
  'final の CSV を出力し、ベースラインと比較して KPI を算出する':
    'Export the final CSV and calculate KPIs against the baseline',
  'レジストリ（Week 4 最終日）':
    'Registry (final day of Week 4)',
  'A365_台帳_YYYYMMDD_final.csv':
    'A365_Inventory_YYYYMMDD_final.csv',
  '最終日は `final` を付けます。':
    'On the final day, use the `final` suffix.',
  'KPI の算出（Week 2 ベースラインとの比較）':
    'Calculating KPIs (compared with the Week 2 baseline)',
  '棚卸し網羅率':
    'Inventory coverage',
  '台帳の件数 ÷ Registry の Total agents':
    'Inventory count ÷ Total agents in the Registry',
  'オーナー不在件数':
    'Ownerless count',
  '**12 件 → 0 件**':
    '**12 → 0**',
  '未管理件数':
    'Unmanaged count',
  '**5 件 → 1 件**':
    '**5 → 1**',
  '高リスク検知の対応率':
    'High-risk detection response rate',
  '対応済み件数 ÷ 検知件数':
    'Responded ÷ detected',
  '条件付きアクセス適用率':
    'Conditional Access coverage',
  '属性付与済みエージェント ÷ 重点エージェント':
    'Agents with the attribute ÷ priority agents',
  'スポンサー割り当て率':
    'Sponsor assignment rate',
  'スポンサー設定済み ÷ 重点エージェント':
    'Agents with a sponsor ÷ priority agents',
  '最終日の **エクスポート** を実行する':
    'Run the **export** on the final day',
  'Week 4 の最終日に CSV を出力します。':
    'Export the CSV on the final day of Week 4.',
  'エクスポートを開始しました。':
    'The export has started.',
  'ファイル名を **A365_台帳_YYYYMMDD_final.csv** の形式で入力する':
    'Enter the file name in the format **A365_Inventory_YYYYMMDD_final.csv**',
  'ベースラインは `baseline`、最終日は `final` です。日付は 8 桁。':
    'The baseline uses `baseline`; the final day uses `final`. The date is 8 digits.',
  '**保存**して KPI を算出する':
    '**Save** it and calculate the KPIs',
  'Week 2 のベースラインと比較します。':
    'Compare against the Week 2 baseline.',
  'KPI を算出しました。':
    'You have calculated the KPIs.',
  '算出する指標：**棚卸し網羅率／オーナー不在件数／未管理件数／高リスク検知の対応率／条件付きアクセス適用率／スポンサー割り当て率**。運用フローごとに担当者と手順が確定しているかを確認し、評価レポートにまとめます。':
    'Metrics to calculate: **inventory coverage / ownerless count / unmanaged count / high-risk detection response rate / Conditional Access coverage / sponsor assignment rate**. Confirm that each operational workflow has an assigned owner and a defined procedure, then write it up in the assessment report.',
  '検証シナリオ S1〜S10':
    'Validation scenarios S1–S10',
  '各シナリオの期待結果を押さえ、PoC の成果を説明できるようにする':
    'Know the expected result of each scenario so you can explain the PoC outcome',
  '検証シナリオ一覧':
    'Validation scenario list',
  '何を、いつ、どう確かめるのかを一覧で把握する':
    'See at a glance what to verify, when, and how',
  'シナリオ':
    'Scenario',
  '手順':
    'Steps',
  '期待結果':
    'Expected result',
  '全件棚卸し':
    'Full inventory',
  'Registry の件数記録と CSV エクスポート':
    'Record the Registry counts and export CSV',
  '台帳の件数が Registry の Total agents と一致する':
    'The inventory count matches Total agents in the Registry',
  'オーナー不在の検出':
    'Detecting ownerless agents',
  'テスト用に共有エージェントを作成後にユーザーを削除、または既存のオーナー不在を確認':
    'Create a shared test agent and then delete the user, or confirm an existing ownerless agent',
  'Agents without owners に表示される':
    'It appears under Agents without owners',
  'Defender との接続':
    'Connecting to Defender',
  'Microsoft 365 connector を接続後、リスクのあるエージェントを確認':
    'Connect the Microsoft 365 connector, then review agents at risk',
  'Registry の Risks 列にリスクが表示され、Defender ポータルへのリンクが開く（最大 1 時間の遅延）':
    'Risks appear in the Registry Risks column, and the link opens the Defender portal (up to an hour\'s delay)',
  'ローカルエージェントの検出':
    'Discovering local agents',
  'パイロット端末で対象のローカルエージェントを起動':
    'Start the target local agent on a pilot device',
  'Defender の AI エージェント一覧に端末とともに表示される':
    'It appears in the Defender AI agent list together with the device',
  'Purview による検知':
    'Detection by Purview',
  'パイロットユーザーが機密情報（テスト用 SIT）を含むプロンプトを送る':
    'A pilot user sends a prompt containing confidential information (a test SIT)',
  'AI observability に活動が記録され、Risky AI usage または DLP のアラートが発生する':
    'The activity is recorded in AI observability and a Risky AI usage or DLP alert fires',
  'スポンサー割り当て':
    'Assigning a sponsor',
  'オーナー不在エージェントに新オーナーとスポンサーを割り当て':
    'Assign a new owner and sponsor to an ownerless agent',
  'Registry と Entra の両方でオーナーが表示され、Agents without owners が減る':
    'The owner appears in both the Registry and Entra, and Agents without owners decreases',
  '条件付きアクセス（レポート専用）':
    'Conditional Access (report-only)',
  '属性 PoCScope = Pilot のエージェントにリスク条件のポリシーを適用':
    'Apply the risk-condition policy to agents with the attribute PoCScope = Pilot',
  'サインインログのレポート専用タブに評価結果が記録される':
    'The evaluation result is recorded on the report-only tab of the sign-in logs',
  'アクセスレビュー':
    'Access review',
  'スポンサーがレビューを完了':
    'The sponsor completes the review',
  '拒否した割り当てが期限後に削除される':
    'Denied assignments are removed once the period ends',
  '承認フロー':
    'Approval workflow',
  '作成者が新規エージェントを申請':
    'A creator submits a new agent',
  'AI Administrator の承認後に対象グループへ公開され、台帳と Registry が一致する':
    'After AI Administrator approval it is published to the target group, and the inventory matches the Registry',
  'ブロックと解除':
    'Block and unblock',
  '重点エージェント 1 体をブロックし、利用者の画面で確認後に解除':
    'Block one priority agent, confirm on a user\'s screen, then unblock it',
  'ブロック中は利用者から利用できず、解除後に復帰する':
    'While blocked it is unavailable to users, and it returns after unblocking',
  'シナリオと期待結果の対応づけ':
    'Match scenarios to expected results',
  '各シナリオの合否判定基準を覚える':
    'Memorise the pass criteria for each scenario',
  '左のシナリオに対応する期待結果を右から選んでください。':
    'Pick the expected result on the right that matches each scenario on the left.',
  '**S1** 全件棚卸し':
    '**S1** Full inventory',
  '**S3** Defender との接続':
    '**S3** Connecting to Defender',
  '**S4** ローカルエージェントの検出':
    '**S4** Discovering local agents',
  '**S5** Purview による検知':
    '**S5** Detection by Purview',
  '**S7** 条件付きアクセス（レポート専用）':
    '**S7** Conditional Access (report-only)',
  '**S8** アクセスレビュー':
    '**S8** Access review',
  '**S10** ブロックと解除':
    '**S10** Block and unblock',
  'トラブルシューティングと既知の制限':
    'Troubleshooting and known limitations',
  '現場でよく起きる 9 つの事象と対処を、原因から説明できるようにする':
    'Be able to explain the cause and resolution of the nine most common symptoms',
  '事象と対処の対応づけ':
    'Match symptoms to resolutions',
  'トラブル時に迷わず一次対応できるようにする':
    'Be able to take first-line action without hesitation',
  '左の事象に対する正しい対処を右から選んでください。':
    'Pick the correct resolution on the right for each symptom on the left.',
  '事象':
    'Symptom',
  '対処':
    'Resolution',
  '管理センターに **Agents メニューが表示されない**':
    'The **Agents menu is not visible** in the admin center',
  'AI Administrator または Global Administrator でサインインし、Agent 365 ライセンスの割り当てを確認する':
    'Sign in as AI Administrator or Global Administrator and check the Agent 365 licence assignment',
  'Registry で**承認・オーナー割り当てができない**':
    'You **cannot approve or assign owners** in the Registry',
  'AI Administrator に切り替える。PIM のアクティブ化を確認する':
    'Switch to AI Administrator. Check the role is activated in PIM.',
  'Registry のリスク件数と Defender・Purview の**表示が一致しない**':
    'The Registry risk counts **do not match** what Defender or Purview shows',
  '時間をおいて再確認する（最大 1 時間の遅延）。判断は発生元のポータルで行う':
    'Check again later (up to an hour\'s delay). Make the judgement in the portal where it originated.',
  '**Purview 由来のリスク詳細が開けない**':
    '**Purview-sourced risk details will not open**',
  'Insider Risk Management Analyst / Investigator ロールを付与する':
    'Assign the Insider Risk Management Analyst / Investigator role',
  '**条件付きアクセスがエージェントに適用されない**':
    '**Conditional Access does not apply to agents**',
  'セキュリティの既定値群を無効にし、対象を Agents（Blueprint または属性）で指定したポリシーを作る':
    'Disable security defaults and create a policy that targets Agents (by blueprint or attribute)',
  'Copilot Studio の**接続が Connected にならない**':
    'Copilot Studio **does not reach Connected**',
  '1 分待って再試行する。Power Platform 管理者にオンボード完了を確認する':
    'Wait a minute and retry. Ask the Power Platform administrator to confirm onboarding is complete.',
  '**ローカルエージェントが検出されない**':
    '**No local agents are discovered**',
  '端末をアクティブモードでオンボードする（パッシブモード・未オンボードが原因）':
    'Onboard the device in active mode (passive mode or no onboarding is the cause)',
  'エージェントが**ラベル付きファイルを読めない**':
    'The agent **cannot read a labelled file**',
  'エージェントインスタンスに VIEW / EXTRACT の使用権限を付与し、ファイルを明示的に共有する':
    'Grant the agent instance the VIEW / EXTRACT usage rights and share the file explicitly',
  'DLP でブロックされたが**エージェントが反応しない**':
    'DLP blocked something but **the agent does not react**',
  'エージェントはブロックを認識しない仕様。オーナーが DLP アラートを監視する運用にする（PoC 中は監査のみ推奨）':
    'By design the agent cannot recognise a block. Have owners monitor DLP alerts instead (audit only is recommended during the PoC).',
  'トラブル対応の理解度チェック':
    'Troubleshooting knowledge check',
  '原因の切り分けを素早くできるようにする':
    'Be able to isolate causes quickly',
  'ポータル間でリスク件数が一致しないとき、判断はどこで行いますか。':
    'When risk counts differ between portals, where do you make the judgement?',
  '発生元のポータル（Defender / Purview / Entra）':
    'In the portal where it originated (Defender / Purview / Entra)',
  'Registry は集約表示です。最大 1 時間の反映遅延があるため、判断は発生元のポータルで行います。':
    'The Registry is an aggregated view. Because there is up to an hour of propagation delay, make the judgement in the portal where the risk originated.',
  'ローカルエージェントが検出されない原因として最も可能性が高いものはどれですか。':
    'What is the most likely cause when no local agents are discovered?',
  'Defender for Endpoint がパッシブモード、または未オンボード':
    'Defender for Endpoint is in passive mode, or not onboarded',
  'Purview の監査が無効':
    'Purview audit is disabled',
  'ライセンス不足':
    'Not enough licences',
  'Copilot Studio が未使用':
    'Copilot Studio is not in use',
  '初期は OpenClaw が対象で、他のエージェントは順次対応予定です。':
    'Initially OpenClaw is in scope; other agents will follow.',
  'Registry で承認操作ができない場合、まず疑うべきことはどれですか。':
    'What do you suspect first when you cannot approve in the Registry?',
  'ブラウザーのキャッシュ':
    'The browser cache',
  '閲覧系ロール（Global Reader / Security Reader）でサインインしている':
    'You are signed in with a read-only role (Global Reader / Security Reader)',
  'ネットワーク障害':
    'A network outage',
  'エージェント数の上限':
    'A limit on the number of agents',
  'AI Administrator に切り替え、PIM のアクティブ化も確認します。':
    'Switch to AI Administrator, and check the role is activated in PIM as well.',
  '撤収・原状復帰手順':
    'Rollback and restore',
  'PoC 終了時に戻すもの・残すものを正しい順序で判断する':
    'Decide, in the right order, what to revert and what to keep when the PoC ends',
  '撤収の手順を正しい順序に並べる':
    'Put the rollback steps in the correct order',
  '最終記録 → ポリシーの無効化 → ロール・ライセンスの棚卸しの流れを押さえる':
    'Learn the flow: final record → disable policies → review roles and licences',
  'PoC 終了時、本展開に引き継がない設定を戻す順序に並べ替えてください。引き継ぐ設定は台帳と運用設計書に記録して残します。':
    'Put the settings you will not carry into full rollout into the order you should revert them at the end of the PoC. Settings you do carry forward are recorded in the inventory and the operations design document.',
  '最終台帳（`A365_台帳_YYYYMMDD_final.csv`）をエクスポートし、評価レポートに添付する':
    'Export the final inventory (`A365_Inventory_YYYYMMDD_final.csv`) and attach it to the assessment report',
  'レポート専用の条件付きアクセスポリシーを無効化または削除する（本展開で使う場合は名前を変更して残す）':
    'Disable or delete the report-only Conditional Access policy (rename and keep it if you will use it at full rollout)',
  'PoC 用のインサイダーリスクポリシー、DLP ポリシーを無効化する':
    'Disable the PoC insider risk policy and DLP policy',
  'Intune のローカルエージェント制御ポリシーの割り当てを解除する':
    'Remove the assignment of the Intune local agent control policy',
  'カスタムセキュリティ属性 PoCScope の割り当てを見直す（本展開で使う場合は Prod に更新）':
    'Review the PoCScope custom security attribute assignments (update to Prod if you will use them at full rollout)',
  'PoC のために付与した管理ロールを PIM で棚卸しし、不要なものを解除する':
    'Review the admin roles granted for the PoC in PIM and remove the ones no longer needed',
  'パイロット用グループのライセンス割り当てを、本展開の方針に従って維持または解除する':
    'Keep or remove the pilot group\'s licence assignment, according to your full rollout plan',
  'まず記録（証跡）を確定させてから、影響の大きいポリシー → 属性 → ロール → ライセンスの順に戻します。なお **Defender security for AI のデータ収集と Microsoft 365 コネクタは原則として維持**します（可視化を止める理由がないため）。':
    'First lock down the record (the evidence), then revert in order of impact: policies → attributes → roles → licences. Note that **Defender security for AI data collection and the Microsoft 365 connector are kept as a rule** (there is no reason to stop visibility).',
  '撤収時の判断':
    'Rollback decisions',
  '何を残し、何を戻すかを判断できるようにする':
    'Be able to decide what to keep and what to revert',
  'PoC 終了後も原則として維持するものはどれですか。':
    'What do you keep as a rule after the PoC ends?',
  'レポート専用の条件付きアクセスポリシー':
    'The report-only Conditional Access policy',
  'Defender security for AI のデータ収集と Microsoft 365 コネクタ':
    'Defender security for AI data collection and the Microsoft 365 connector',
  'PoC 用の DLP ポリシー':
    'The PoC DLP policy',
  'PIM で付与した一時的な管理ロール':
    'The temporary admin roles granted in PIM',
  '可視化を止める理由がないためです。止める場合は Settings > Security for AI で Enable をオフにします。':
    'Because there is no reason to stop visibility. To stop it, turn Enable off under Settings > Security for AI.',
  '本展開でもカスタムセキュリティ属性を使う場合、PoCScope はどう扱いますか。':
    'If you will use custom security attributes at full rollout, what do you do with PoCScope?',
  '削除する':
    'Delete it',
  '値を Prod に更新する':
    'Update the value to Prod',
  'Pilot のまま残す':
    'Leave it as Pilot',
  '属性セットごと削除する':
    'Delete the whole attribute set',
  '値は Pilot / Prod の 2 つを定義しています。本展開では Prod に更新します。':
    'Two values are defined: Pilot and Prod. At full rollout you update it to Prod.',
  '撤収時に最初に行うことはどれですか。':
    'What do you do first at rollback?',
  '管理ロールの解除':
    'Remove the admin roles',
  '最終台帳のエクスポートと評価レポートへの添付':
    'Export the final inventory and attach it to the assessment report',
  'ライセンスの解除':
    'Remove the licences',
  'ポリシーの削除':
    'Delete the policies',
  '証跡を確定させてから設定を戻します。':
    'Lock down the evidence before you revert any settings.',
  '付録：ポータル・ロール・台帳・参考資料':
    'Appendix: portals, roles, inventory and references',
  'いつでも参照できる早見表':
    'A quick-reference you can consult at any time',
  '付録 A：ポータルと URL 一覧':
    'Appendix A: portals and URLs',
  '目的からポータルを引けるようにする':
    'Be able to find the portal from the task',
  'パス':
    'Path',
  'エージェントの棚卸し・承認':
    'Agent inventory and approval',
  'https://admin.cloud.microsoft/ > エージェント > 概要／すべてのエージェント（レジストリ）／マップ':
    'https://admin.cloud.microsoft/ > Agents > Overview / All agents (Registry) / Map',
  'Defender のオンボード':
    'Defender onboarding',
  'https://security.microsoft.com/ > 設定 > AI のセキュリティ > 開始する':
    'https://security.microsoft.com/ > Settings > Security for AI > Get started',
  'AI の可視化・監査・DLP':
    'AI visibility, audit and DLP',
  'https://purview.microsoft.com/ > DSPM > AI 観測可能性／監査／データ損失防止／インサイダーリスク管理':
    'https://purview.microsoft.com/ > DSPM > AI observability / Audit / Data Loss Prevention / Insider Risk Management',
  'エージェント ID':
    'Agent identities',
  'https://entra.microsoft.com/ > Entra ID > エージェント > Agent identities／Agent blueprints':
    'https://entra.microsoft.com/ > Entra ID > Agents > Agent identities / Agent blueprints',
  'ID ガバナンス > エンタイトルメント管理／アクセス レビュー／PIM':
    'Identity Governance > Entitlement management / Access reviews / PIM',
  'ローカルエージェント制御':
    'Local agent control',
  'Copilot Studio 連携':
    'Copilot Studio integration',
  '付録 B：ロールと操作の対応表':
    'Appendix B: roles and operations matrix',
  '誰がどの操作をできるかを即座に確認する':
    'Check instantly who can perform which operation',
  'Registry の閲覧':
    'View the Registry',
  'Defender 由来リスクの確認':
    'Review Defender-sourced risks',
  'Purview DSPM / DLP / 監査の設定':
    'Configure Purview DSPM / DLP / audit',
  'Purview 由来リスクの確認':
    'Review Purview-sourced risks',
  '○（IRM ロール要）':
    '○ (IRM role required)',
  '条件付きアクセスの作成':
    'Create Conditional Access policies',
  'Agent identities / Blueprints の管理':
    'Manage agent identities / blueprints',
  'Agent identities の閲覧':
    'View agent identities',
  '付録 C：台帳テンプレートの列定義':
    'Appendix C: inventory template column definitions',
  '台帳の列と出典を揃える':
    'Keep the inventory columns and their sources consistent',
  '列':
    'Column',
  '出典':
    'Source',
  'Registry エクスポート':
    'Registry export',
  'Registry の値をそのまま保持する':
    'Keep the Registry values as they are',
  'Entra Agent ID 有無':
    'Entra Agent ID present',
  'Object ID があるか。ないものはシャドーとして扱う':
    'Whether an Object ID exists. Those without one are treated as shadow agents.',
  'どの Blueprint から作られたか':
    'Which blueprint it was created from',
  '業務上の責任者':
    'The business owner',
  'カスタムセキュリティ属性（PoCScope / Criticality）':
    'Custom security attributes (PoCScope / Criticality)',
  '条件付きアクセスの対象指定に使う':
    'Used to scope Conditional Access',
  '重点フラグ':
    'Priority flag',
  'PoC 判断':
    'PoC judgement',
  'パイロット利用・オーナー不在・未管理・高リスクのいずれかに該当':
    'Used by pilot users, ownerless, unmanaged or high risk',
  'データソース（機密）':
    'Data sources (confidential)',
  '人事・財務など機密性の高い接続先':
    'Highly confidential connections such as HR or finance',
  '対応状況 / 担当 / 対応日 / 備考':
    'Status / owner / date / notes',
  'PoC 運用':
    'PoC operations',
  '是正・承認の記録':
    'Record of remediation and approval',
  'KPI：棚卸し網羅率、オーナー不在件数、未管理件数、高リスク検知の対応率、条件付きアクセス適用率、スポンサー割り当て率。':
    'KPIs: inventory coverage, ownerless count, unmanaged count, high-risk detection response rate, Conditional Access coverage, sponsor assignment rate.',
  '付録 D：参考ドキュメント':
    'Appendix D: reference documentation',
  '最新情報の確認先を知る':
    'Know where to check the latest information',
  '本書に記載のポータル名称・メニュー名は 2026 年 9〜10 月時点の情報に基づきます。プレビュー機能は名称や配置が変更される場合があるため、実施時に Microsoft Learn で最新を確認してください。':
    'The portal and menu names in this guide reflect September–October 2026. Preview features may be renamed or moved, so check Microsoft Learn for the latest when you run the PoC.',
  '総合演習：4 週間の流れを再構成する':
    'Comprehensive exercise: reconstruct the four-week flow',
  '全体の順序とポータルの対応を仕上げ確認する':
    'Final check on the overall order and which portal does what',
  '手順 1〜7 を実施順に並べる':
    'Put Steps 1–7 in the order they are carried out',
  'PoC 全体のシーケンスを説明できるようにする':
    'Be able to explain the full PoC sequence',
  '手順書の 4〜10 章に対応する作業を、実施する順序に並べ替えてください。':
    'Put the tasks that correspond to chapters 4–10 of the guide into the order you carry them out.',
  '**手順 1**：Agent 365 の有効化確認（Week 1）':
    '**Step 1**: confirm Agent 365 is enabled (Week 1)',
  '**手順 2**：ローカルエージェントの検出／Defender のオンボード（Week 1）':
    '**Step 2**: discover local agents / onboard Defender (Week 1)',
  '**手順 3**：エージェントレジストリによる棚卸し（Week 2）':
    '**Step 3**: take inventory with the Agent Registry (Week 2)',
  '**手順 4**：Purview DSPM for AI の確認と検知ポリシー（Week 2）':
    '**Step 4**: review Purview DSPM for AI and create detection policies (Week 2)',
  '**手順 5**：Entra Agent ID とライフサイクル統制（Week 3）':
    '**Step 5**: Entra Agent ID and lifecycle governance (Week 3)',
  '**手順 6**：リアルタイム保護と調査（Week 3）':
    '**Step 6**: real-time protection and investigation (Week 3)',
  '**手順 7**：運用プロセスの確定（Week 4）':
    '**Step 7**: finalise the operating model (Week 4)',
  'Week 1 で「見える化の土台」、Week 2 で「記録」、Week 3 で「統制と保護」、Week 4 で「運用化と判断」という流れです。':
    'The flow is: Week 1 builds the foundation for visibility, Week 2 records, Week 3 governs and protects, and Week 4 operationalises and decides.',
  '作業とポータルの対応づけ':
    'Match tasks to portals',
  'どの作業をどのポータルで行うかを即答する':
    'Answer instantly which portal each task is done in',
  '左の作業を行うポータルを右から選んでください。':
    'Pick the portal on the right where each task on the left is carried out.',
  'エージェントの棚卸し・CSV エクスポート・承認':
    'Agent inventory, CSV export and approval',
  'Security for AI のオンボードとリアルタイム保護ルール':
    'Security for AI onboarding and real-time protection rules',
  'AI 観測可能性・監査・DLP・インサイダーリスク':
    'AI observability, audit, DLP and insider risk',
  'Agent identities、条件付きアクセス、アクセスレビュー':
    'Agent identities, Conditional Access and access reviews',
  'Copilot Studio エージェントの Defender 連携を環境ごとに有効化':
    'Enabling Defender integration for Copilot Studio agents per environment',
  'ローカルエージェントの制御ポリシー':
    'Local agent control policies',
  '仕上げの総合クイズ':
    'Final comprehensive quiz',
  'PoC 全体を通した判断力を確認する':
    'Check your judgement across the whole PoC',
  '本 PoC で「個別選択をしない」と定めている対象をすべて選んでください。':
    'Select everything this PoC says must never be selected individually.',
  'ライセンスを割り当てるユーザー':
    'Users who receive a licence',
  'ポリシーの対象となるエージェント':
    'Agents targeted by a policy',
  'アクセスレビューの対象':
    'The scope of an access review',
  'エクスポートする CSV の列':
    'The columns in the exported CSV',
  'ユーザーはセキュリティグループ、エージェントは Blueprint またはカスタムセキュリティ属性で指定します。':
    'Users are scoped by security group; agents are scoped by blueprint or custom security attribute.',
  'Week 2 と Week 4 で同じ 4 指標を記録する理由はどれですか。':
    'Why do you record the same four metrics in Week 2 and Week 4?',
  'レポートの体裁を整えるため':
    'To make the report look tidy',
  'ベースラインと最終値を比較して KPI を算出するため':
    'To calculate KPIs by comparing the baseline with the final values',
  'ライセンス数を調整するため':
    'To adjust the number of licences',
  'Microsoft に報告するため':
    'To report to Microsoft',
  '台帳の列定義と KPI は最初に固定し、範囲が広がっても同じ定義で測ります。':
    'Fix the inventory columns and KPI definitions up front, and measure with the same definitions even as scope widens.',
  '新規エージェントの承認フローで、属性付与を公開より前に行う理由はどれですか。':
    'In the approval workflow for new agents, why do you apply attributes before publishing?',
  '属性が付くことで条件付きアクセスの対象になるから':
    'Because applying the attribute brings the agent into scope for Conditional Access',
  '公開後は属性を付けられないから':
    'Because attributes cannot be applied after publishing',
  '属性付与に時間がかかるから':
    'Because applying attributes takes time',
  'ライセンスが必要だから':
    'Because a licence is required',
  '公開前に PoCScope / Criticality を付与することで、公開と同時にポリシーが効きます。':
    'Applying PoCScope and Criticality before publishing means the policy takes effect the moment it goes live.',
  'PoC 期間中に「削除」を行ってよいのはどのような場合ですか。':
    'In what circumstances may you delete during the PoC?',
  'オーナー不在と分かった時点':
    'As soon as you find it is ownerless',
  'スポンサーの確認が取れた後':
    'After confirming with the sponsor',
  '高リスクが検知された時点':
    'As soon as high risk is detected',
  '未管理と分かった時点':
    'As soon as you find it is unmanaged',
  '候補が見つからなければまずブロックし、削除はスポンサー確認後にのみ行います。':
    'If no candidate owner is found, block it first; delete only after confirming with the sponsor.',
  'エージェントのリスク対応で「高リスク」の一次対応の目安はどれですか。':
    'What is the guideline for first response to a "high risk" agent detection?',
  '当日中にオーナーへ連絡、必要に応じてブロック':
    'Contact the owner the same day, blocking if necessary',
  '週次レビューで扱う':
    'Handle it in the weekly review',
  '月次棚卸しで扱う':
    'Handle it in the monthly inventory',
  '四半期のアクセスレビューで扱う':
    'Handle it in the quarterly access review',
  '中リスクは週次レビューで扱います。対応結果は台帳に記録し、KPI に反映します。':
    'Medium risk is handled in the weekly review. Record the outcome in the inventory and reflect it in the KPIs.',
  'PowerShell（管理者）':
    'PowerShell (Administrator)',
  '1〜2':
    '1–2',
  '付録 A〜D':
    'Appendices A–D',
  '総合':
    'Wrap-up'
});
