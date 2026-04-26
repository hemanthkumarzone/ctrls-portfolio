const AboutPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col px-0 py-0">
    <div className="flex-1">


      {/* HERO */}
      <div className="w-full flex flex-col items-center text-center pt-10 md:pt-16">

  {/* TAG */}
  <div className="px-4 py-1 rounded-full bg-[#77B900]/10 border border-[#77B900]/30 text-[#9fdc00] text-xs tracking-widest uppercase">
    About us
  </div>

  {/* TITLE */}
  <h1 className="mt-6 text-3xl md:text-5xl font-semibold text-white leading-snug max-w-[900px]">
    We make AI spending{" "}
    <span className="text-[#77B900]">work harder</span>{" "}
    for your business
  </h1>

  {/* DESCRIPTION */}
  <p className="mt-6 text-white/60 text-lg max-w-[700px] leading-relaxed">
    We are an AI FinOps platform built to give enterprises complete visibility,
    intelligent control, and zero-waste efficiency across every AI workload —
    from training runs to production inference.
  </p>

  {/* BUTTONS */}
  <div className="mt-8 flex gap-4 flex-wrap justify-center">

    {/* PRIMARY */}
    <button className="px-6 py-3 bg-[#77B900] border border-[#436900] text-white rounded-xl hover:bg-[#1a2a00] transition">
      Request a demo
    </button>

    {/* OUTLINE */}
    <button className="px-6 py-3 border border-[#436900] text-white rounded-xl hover:bg-[#77B900]/10 transition">
      Learn how it works
    </button>

  </div>

</div>


<div className="w-full mt-16 bg-[#0B1200] border-y border-[#1f2d00] py-12">
  <div className="w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

    <div>
      <p className="text-3xl font-semibold text-white">40%</p>
      <p className="text-white/50 mt-2">Average AI cost saved</p>
    </div>

    <div>
      <p className="text-3xl font-semibold text-white">500+</p>
      <p className="text-white/50 mt-2">Enterprises served</p>
    </div>

    <div>
      <p className="text-3xl font-semibold text-white">$2B+</p>
      <p className="text-white/50 mt-2">AI spend optimized</p>
    </div>

    <div>
      <p className="text-3xl font-semibold text-white">99.9%</p>
      <p className="text-white/50 mt-2">Platform uptime</p>
    </div>

  </div>
</div>

<div className="w-full  px-6 py-16 grid md:grid-cols-2 gap-16 items-start">

  {/* LEFT SIDE */}
  <div>
    <p className="text-[#77B900] tracking-widest text-sm uppercase mb-4">
      Our Mission
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
      Eliminating waste from the AI economy
    </h2>

    <p className="mt-6 text-white/60 leading-relaxed">
      AI is the most powerful technology lever enterprises have today — but unchecked,
      it is also one of the most expensive. Idle GPU clusters, over-provisioned models,
      redundant pipelines, and invisible cost sprawl silently drain budgets that should
      be funding innovation.
    </p>

    <p className="mt-4 text-white/60 leading-relaxed">
      We built this platform to change that. Our mission is simple: help every team
      get maximum value from every dollar they invest in AI — without slowing down
      engineering or compromising on performance.
    </p>
  </div>


  {/* RIGHT SIDE (CARDS) */}
  <div className="flex flex-col gap-6">

    {/* CARD 1 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
      <div className="flex items-start gap-3">
        <div className="w-3 h-3 mt-2 rounded-full bg-blue-500"></div>
        <div>
          <p className="text-white font-medium">Transparency first</p>
          <p className="text-white/60 text-sm mt-1">
            Every cost, every model run, every resource — visible and attributed to the team that owns it.
          </p>
        </div>
      </div>
    </div>

    {/* CARD 2 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
      <div className="flex items-start gap-3">
        <div className="w-3 h-3 mt-2 rounded-full bg-green-500"></div>
        <div>
          <p className="text-white font-medium">Automation over alerts</p>
          <p className="text-white/60 text-sm mt-1">
            We don’t just notify you about waste — we eliminate it automatically, in real time.
          </p>
        </div>
      </div>
    </div>

    {/* CARD 3 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
      <div className="flex items-start gap-3">
        <div className="w-3 h-3 mt-2 rounded-full bg-yellow-600"></div>
        <div>
          <p className="text-white font-medium">Built for engineers</p>
          <p className="text-white/60 text-sm mt-1">
            FinOps insights surfaced where engineering decisions are made — in CI/CD, dashboards, and APIs.
          </p>
        </div>
      </div>
    </div>

    {/* CARD 4 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
      <div className="flex items-start gap-3">
        <div className="w-3 h-3 mt-2 rounded-full bg-lime-500"></div>
        <div>
          <p className="text-white font-medium">Outcome-driven</p>
          <p className="text-white/60 text-sm mt-1">
            We measure success in dollars saved, models shipped, and business value delivered — not dashboards opened.
          </p>
        </div>
      </div>
    </div>

  </div>

</div>

<div className="w-full flex justify-center mt-12 mb-8">
  <div className="w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/30 to-transparent" />
</div>

<div className="max-w-[1400px] mx-auto px-6 py-16">

  {/* HEADER */}
  <div className="max-w-[700px]">
    <p className="text-[#77B900] tracking-widest text-sm uppercase mb-4">
      What we do
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      Four pillars. One platform.
    </h2>

    <p className="mt-4 text-white/60 leading-relaxed">
      Our platform unifies monitoring, optimization, orchestration, and waste elimination
      into a single intelligent layer across your entire AI infrastructure.
    </p>
  </div>


  {/* CARDS */}
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

    {/* CARD 1 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(119,185,0,0.1)] transition">

      <div className="w-12 h-12 rounded-xl bg-[#1a2a00] flex items-center justify-center mb-6">
        🛰️
      </div>

      <h3 className="text-white text-lg font-semibold">Monitoring</h3>

      <p className="text-white/60 text-sm mt-3 leading-relaxed">
        Real-time visibility into every AI workload, model call, GPU hour, and token consumed — across cloud providers and on-prem.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="px-3 py-1 text-xs bg-[#77B900]/20 text-[#9fdc00] rounded-full">Real-time dashboards</span>
        <span className="px-3 py-1 text-xs bg-[#77B900]/20 text-[#9fdc00] rounded-full">Cost attribution</span>
        <span className="px-3 py-1 text-xs bg-[#77B900]/20 text-[#9fdc00] rounded-full">Usage anomaly detection</span>
        <span className="px-3 py-1 text-xs bg-[#77B900]/20 text-[#9fdc00] rounded-full">Multi-cloud visibility</span>
      </div>
    </div>


    {/* CARD 2 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(119,185,0,0.1)] transition">

      <div className="w-12 h-12 rounded-xl bg-[#1a2a00] flex items-center justify-center mb-6">
        ⚙️
      </div>

      <h3 className="text-white text-lg font-semibold">Optimization</h3>

      <p className="text-white/60 text-sm mt-3 leading-relaxed">
        AI-driven recommendations and auto-scaling that continuously right-size your models, compute, and data pipelines for peak efficiency.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Right-sizing</span>
        <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Auto-scaling</span>
        <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Model compression</span>
        <span className="px-3 py-1 text-xs bg-green-500/20 text-green-400 rounded-full">Spot routing</span>
      </div>
    </div>


    {/* CARD 3 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(119,185,0,0.1)] transition">

      <div className="w-12 h-12 rounded-xl bg-[#1a2a00] flex items-center justify-center mb-6">
        🔀
      </div>

      <h3 className="text-white text-lg font-semibold">Orchestration</h3>

      <p className="text-white/60 text-sm mt-3 leading-relaxed">
        Intelligent workload scheduling and routing that prioritizes jobs by cost-performance ratio — so the right work runs at the right time.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Workload scheduling</span>
        <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Model routing</span>
        <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Priority queuing</span>
        <span className="px-3 py-1 text-xs bg-yellow-500/20 text-yellow-400 rounded-full">Cloud arbitrage</span>
      </div>
    </div>


    {/* CARD 4 */}
    <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6 hover:shadow-[0_0_25px_rgba(119,185,0,0.1)] transition">

      <div className="w-12 h-12 rounded-xl bg-[#1a2a00] flex items-center justify-center mb-6">
        🗑️
      </div>

      <h3 className="text-white text-lg font-semibold">Eliminating AI waste</h3>

      <p className="text-white/60 text-sm mt-3 leading-relaxed">
        Automated detection and removal of idle resources, duplicate pipelines, over-provisioned clusters, and shadow AI spend before it hits your bill.
      </p>

      <div className="flex flex-wrap gap-2 mt-5">
        <span className="px-3 py-1 text-xs bg-lime-500/20 text-lime-400 rounded-full">Idle cleanup</span>
        <span className="px-3 py-1 text-xs bg-lime-500/20 text-lime-400 rounded-full">Shadow detection</span>
        <span className="px-3 py-1 text-xs bg-lime-500/20 text-lime-400 rounded-full">Pipeline dedup</span>
        <span className="px-3 py-1 text-xs bg-lime-500/20 text-lime-400 rounded-full">Budget guardrails</span>
      </div>
    </div>

  </div>
</div>

<div className="w-full flex justify-center mt-12 mb-8">
  <div className="w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/30 to-transparent" />
</div>
<div className="max-w-[1100px] mx-auto px-6 py-24">

  {/* HEADER */}
  <div className="mb-16">
    <p className="text-[#77B900] tracking-widest text-sm uppercase mb-4">
      How it works
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      From connection to savings in four steps
    </h2>

    <p className="mt-4 text-white/60 leading-relaxed max-w-[700px]">
      Connect your cloud accounts, and our platform starts delivering value from day one —
      no lengthy onboarding, no professional services required.
    </p>
  </div>


  {/* STEPS */}
  <div className="flex flex-col gap-10">

    {/* STEP 1 */}
    <div className="flex gap-6">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-white font-medium">
        1
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">
          Connect your infrastructure
        </h3>

        <p className="text-white/60 mt-2 leading-relaxed">
          Link your AWS, Azure, GCP, or on-prem environments in minutes via our API connectors
          or native integrations. We ingest billing, usage, and telemetry data automatically.
        </p>
      </div>
    </div>

    <div className="border-b border-[#1f2d00]" />



    {/* STEP 2 */}
    <div className="flex gap-6">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-white font-medium">
        2
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">
          Gain instant visibility
        </h3>

        <p className="text-white/60 mt-2 leading-relaxed">
          Our monitoring layer maps every AI workload to a team, project, and cost centre.
          You get a unified view of spend, utilisation, and model performance across all environments.
        </p>
      </div>
    </div>

    <div className="border-b border-[#1f2d00]" />



    {/* STEP 3 */}
    <div className="flex gap-6">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-white font-medium">
        3
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">
          Apply intelligent optimizations
        </h3>

        <p className="text-white/60 mt-2 leading-relaxed">
          Our engine analyses usage patterns, recommends right-sizing actions, auto-routes workloads
          to cost-efficient compute, and enforces budget guardrails — all with one-click approval or automation.
        </p>
      </div>
    </div>

    <div className="border-b border-[#1f2d00]" />



    {/* STEP 4 */}
    <div className="flex gap-6">
      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#1a1a1a] text-white font-medium">
        4
      </div>

      <div>
        <h3 className="text-white font-semibold text-lg">
          Measure and reinvest savings
        </h3>

        <p className="text-white/60 mt-2 leading-relaxed">
          Track realised savings in real time. Generate executive-ready reports on cost avoidance,
          efficiency trends, and ROI — and redirect reclaimed budget toward AI initiatives that drive growth.
        </p>
      </div>
    </div>

  </div>
</div>
<div className="w-full flex justify-center mt-12 mb-8">
  <div className="w-full max-w-[1200px] h-[1px] bg-gradient-to-r from-transparent via-[#77B900]/30 to-transparent" />
</div>
<div className="max-w-[1200px] mx-auto px-6 py-20">

  {/* HEADER */}
  <div className="mb-16">
    <p className="text-[#77B900] tracking-widest text-sm uppercase mb-4">
      Why choose us
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      What sets us apart
    </h2>

    <p className="mt-4 text-white/60 leading-relaxed max-w-[700px]">
      We are not a generic cloud cost tool retrofitted for AI. We were built specifically
      for the economics of AI workloads from day one.
    </p>
  </div>


  {/* GRID */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* CARD 1 */}
    <div className="bg-[#111] border border-[#1f2d00] rounded-xl p-6">
      <div className="w-10 h-[3px] bg-blue-500 mb-4 rounded" />

      <h3 className="text-white font-semibold text-lg">
        AI-native, not cloud-generic
      </h3>

      <p className="text-white/60 mt-3 leading-relaxed text-sm">
        Purpose-built for GPU clusters, LLM inference, training pipelines, and token-based billing — not repurposed EC2 dashboards.
      </p>
    </div>


    {/* CARD 2 */}
    <div className="bg-[#111] border border-[#1f2d00] rounded-xl p-6">
      <div className="w-10 h-[3px] bg-green-500 mb-4 rounded" />

      <h3 className="text-white font-semibold text-lg">
        Autonomous, not advisory
      </h3>

      <p className="text-white/60 mt-3 leading-relaxed text-sm">
        We act on waste automatically. Most platforms show you charts. We fix the problem — with guardrails you define and approve.
      </p>
    </div>


    {/* CARD 3 */}
    <div className="bg-[#111] border border-[#1f2d00] rounded-xl p-6">
      <div className="w-10 h-[3px] bg-yellow-600 mb-4 rounded" />

      <h3 className="text-white font-semibold text-lg">
        Multi-model, multi-cloud
      </h3>

      <p className="text-white/60 mt-3 leading-relaxed text-sm">
        Works across OpenAI, Anthropic, Bedrock, Vertex AI, Azure AI, Hugging Face, and self-hosted models in one unified view.
      </p>
    </div>


    {/* CARD 4 */}
    <div className="bg-[#111] border border-[#1f2d00] rounded-xl p-6">
      <div className="w-10 h-[3px] bg-green-700 mb-4 rounded" />

      <h3 className="text-white font-semibold text-lg">
        Engineering-led design
      </h3>

      <p className="text-white/60 mt-3 leading-relaxed text-sm">
        Surfaced in CI/CD pipelines, Slack alerts, and developer dashboards — not locked behind a separate finance portal.
      </p>
    </div>


    {/* CARD 5 */}
    <div className="bg-[#111] border border-[#1f2d00] rounded-xl p-6">
      <div className="w-10 h-[3px] bg-indigo-500 mb-4 rounded" />

      <h3 className="text-white font-semibold text-lg">
        Governance built in
      </h3>

      <p className="text-white/60 mt-3 leading-relaxed text-sm">
        Policy enforcement, audit trails, RBAC, and compliance reporting come standard — no add-ons required.
      </p>
    </div>


    {/* CARD 6 */}
    <div className="bg-[#111] border border-[#1f2d00] rounded-xl p-6">
      <div className="w-10 h-[3px] bg-orange-500 mb-4 rounded" />

      <h3 className="text-white font-semibold text-lg">
        ROI from day one
      </h3>

      <p className="text-white/60 mt-3 leading-relaxed text-sm">
        Customers see measurable savings within the first week of connecting their accounts. Average payback period is under 30 days.
      </p>
    </div>

  </div>
</div>
</div>

<div className="w-full bg-[#0A0F0B] py-10 mt-auto">
  <div className="max-w-[900px] mx-auto text-center">

    {/* HEADING */}
    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      Ready to stop wasting AI spend?
    </h2>

    {/* SUBTEXT */}
    <p className="mt-4 text-white/60 text-lg leading-relaxed">
      Join hundreds of enterprises already running leaner, smarter AI
      operations with our platform.
    </p>

    {/* BUTTON */}
    <div className="mt-10">
      <button className="
        bg-[#E6E3DC]
        text-black
        px-8 py-4
        rounded-xl
        text-lg
        font-medium
        hover:opacity-90
        transition
      ">
        Get started for free
      </button>
    </div>

  </div>
</div>


    </div>
  );
};

export default AboutPage;