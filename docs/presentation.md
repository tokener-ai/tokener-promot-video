# Presentation script and Japanese captions

Timing follows the 90-second web-capture film. The Chinese presenter text is retained for live narration; use `pnpm render --props='{"voiceover":false,"music":false}'` for a silent export. Japanese voiceover and background music are included by default. Enable the optional bottom caption track with `pnpm render --props='{"captions":true}'`. All seven web-capture scenes include gray Japanese subtitles beneath their titles, separate from the bottom caption track. Human review of meaning, Japanese phrasing and live delivery timing is still required.

[Film](../exports/tokener-ifcon-preview.mp4)

## Chinese presenter script

| 时间 | 当前画面 | 中文讲解稿 | 讲解提示 |
| --- | --- | --- | --- |
| 00:00–00:01.5 | 蓝底 Tokener 封面 | 不讲话。 | 给观众识别品牌。 |
| 00:01.5–00:05.2 | 六个模型名称与 Logo | AI 模型的选择，越来越多。 | 说完留一点时间看 Logo。 |
| 00:05.2–00:12 | 接入、余额、用量三个痛点 | 但每增加一家供应商，就多一套接入配置，余额和用量也分散在不同平台。 | 重音放在“分散”。 |
| 00:12–00:20 | 模型汇集、入口大字、Tokener 揭晓 | Tokener，把主流模型的接入，汇集到一个入口。 | 品牌揭晓附近再说 Tokener，允许短停顿。 |
| 00:20–00:28 | 官网与 Console 模型目录 | 在这里，可以选择不同供应商的模型，并查看对应价格。 | 不逐行念型号或价格。 |
| 00:28–00:32 | 模型 Logo 和官方价格大字 | Claude、GPT、Grok 等主流模型，按各家供应商的官方价格使用。 | 型号以目录为准，不口播未经核定的版本名。 |
| 00:32–00:40 | Tokener 连到 Dify；供应商列表 | 接入 Dify，选择模型，就能放进熟悉的工作流。 | 箭头完成、Dify 出现时接着讲。 |
| 00:40–00:47 | Dify 节点配置与试运行 | 这里展示的是一个翻译工作流。模型负责不同步骤，在同一条流程里协作。 | 指向节点，不讲填写配置的步骤。 |
| 00:47–00:58 | 多节点翻译流程与结果输出 | 从直接翻译，到检查和改写，工作流逐步执行，最后得到输出结果。 | 说完让观众看运行和输出，不做速度对比。 |
| 00:58–01:04 | 消费总览与图表 | 用了哪些模型、消耗了多少，都能集中查看。 | 指向趋势图和模型用量。 |
| 01:04–01:09 | 调用日志 | 每次调用的用量和成本，也有明细。 | 一句话即可。 |
| 01:09–01:17 | 六个 AI 开发工具 Logo | 除了 Dify，也能接入 Claude Code、Codex 等日常使用的 AI 开发工具。 | 不必念完六个名字；这里展示接入范围，不是工具实机。 |
| 01:17–01:27 | 日本上线日期、日本语支持、二维码 | 9 月 10 日，Tokener 面向日本开放服务，提供日语支持。扫码访问 tokener.ai，注册即可领取试用。 | 指向二维码，最后留约 2 秒扫码。 |
| 01:27–01:30 | Tokener 品牌与 slogan | 不讲话。 | 留时间记住品牌。 |

## Japanese caption track

| 时间 | 底部日文字幕 | 中文含义 |
| --- | --- | --- |
| 00:00–00:01.5 | 不添加 | 使用现有封面文字。 |
| 00:01.5–00:05.2 | AIモデルの選択肢は、増え続けています。 | AI 模型的选择越来越多。 |
| 00:05.2–00:08.5 | サービスごとに増える接続設定。 | 每个服务都要增加接入配置。 |
| 00:08.5–00:12 | 残高も、利用状況も、別々の場所に。 | 余额、用量也分散在不同地方。 |
| 00:12–00:15 | 不添加 | 给模型汇集与入口大字留空间。 |
| 00:15–00:20 | モデルへのアクセスを、ひとつに。 | 把模型接入汇集到一起。 |
| 00:20–00:24 | 主要なAIモデルを、ひとつの窓口から。 | 从一个入口使用主流 AI 模型。 |
| 00:24–00:28 | モデルと価格を、一覧で確認できます。 | 可以集中查看模型和价格。 |
| 00:28–00:32 | 各モデル提供元の公式価格で利用できます。 | 按各模型供应商的官方价格使用。 |
| 00:32–00:36 | 不添加 | 使用现有 Dify 连接画面大字。 |
| 00:36–00:40 | Difyに接続し、使いたいモデルを選択。 | 接入 Dify，选择想使用的模型。 |
| 00:40–00:44 | いつものワークフローで使い始められます。 | 可以在熟悉的工作流里开始使用。 |
| 00:44–00:47 | 複数のモデルで、翻訳の各ステップを実行。 | 用多个模型执行翻译的各个步骤。 |
| 00:47–00:52 | 翻訳、チェック、書き直し。 | 翻译、检查、改写。 |
| 00:52–00:58 | ワークフローを実行し、結果を確認。 | 运行工作流，查看结果。 |
| 00:58–01:04 | モデルごとの利用量とコストを、一か所で。 | 集中查看各模型的用量与成本。 |
| 01:04–01:09 | リクエストごとの利用量とコストも確認できます。 | 也可查看每次请求的用量与成本。 |
| 01:09–01:13 | Claude CodeやCodexなど、 | Claude Code、Codex 等， |
| 01:13–01:17 | いつものAI開発ツールにも接続できます。 | 也可以接入平时使用的 AI 开发工具。 |
| 01:17–01:22 | 9月10日、日本向けにサービス開始。 | 9 月 10 日面向日本开放服务。 |
| 01:22–01:27 | 日本語サポート対応。登録して、無料でお試しください。 | 提供日语支持，注册免费试用。 |
| 01:27–01:30 | 不添加 | 使用现有品牌与 slogan。 |

## Review before presentation

- The film already contains scene titles, model and tool names, the date and registration CTA. Additional captions should avoid duplicating these, especially during the brand reveal, Dify connection and closing.
- The opening says ChatGPT; the reveal uses GPT. This describes model access, not inclusion of a ChatGPT subscription.
- Confirm official provider pricing, September 10 launch, Japanese support and the registration trial against the live offering before presentation.
- Claude Code, Codex, OpenCode and Pi were confirmed by the product owner as tested. Cline and Kilo Code appear based on compatible-interface documentation; this production did not perform end-to-end Tokener validation for those two tools.
- The workflow illustrates translation, checking and rewriting. It does not claim automatic workflow optimization or measured speed improvements.
- Review the Chinese speaking points first, then Japanese meaning and naturalness, then rehearse against the film. Japanese live narration would need its own timed speaking script.
