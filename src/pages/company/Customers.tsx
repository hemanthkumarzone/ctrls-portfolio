import { useState } from "react";
const CustomersPage = () => {
   const [activeTab, setActiveTab] = useState<"startups" | "enterprise" | "dataCenters">("startups");


  return (
    <div className="w-full min-h-screen flex flex-col">

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* ───────── HERO ───────── */}
        <div className="w-full flex flex-col items-center text-center pt-10 md:pt-16">

          {/* TAG */}
          <div className="px-4 py-1 rounded-full bg-[#77B900]/10 border border-[#77B900]/30 text-[#9fdc00] text-xs tracking-widest uppercase">
            Our Customers
          </div>

          {/* TITLE */}
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-white leading-snug max-w-[900px]">
            Trusted by teams building the{" "}
            <span className="text-[#77B900]">future of AI</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-white/60 text-lg max-w-[700px] leading-relaxed">
            From seed-stage startups watching every dollar to global enterprises
            governing thousands of AI workloads and data centre operators
            maximising every GPU rack — our customers share one goal:
            get more from their AI investment.
          </p>

        </div>


        {/* ───────── STATS BAR (REUSED STYLE) ───────── */}
        <div className="w-full mt-16 bg-[#0B1200] border-y border-[#1f2d00] py-12">
          <div className="w-full px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

            <div>
              <p className="text-3xl font-semibold text-white">500+</p>
              <p className="text-white/50 mt-2">Customers worldwide</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-white">40%</p>
              <p className="text-white/50 mt-2">Average cost reduction</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-white">$2B+</p>
              <p className="text-white/50 mt-2">AI spend optimised</p>
            </div>

            <div>
              <p className="text-3xl font-semibold text-white">&lt;30 days</p>
              <p className="text-white/50 mt-2">Average payback period</p>
            </div>

          </div>
        </div>

      


      
    <div className="w-full pt-20">
  <div className="max-w-[1200px] mx-auto px-6">

  {/* HEADER */}
  <div className="max-w-[700px]">
    <p className="text-[#77B900] tracking-widest text-sm uppercase mb-4">
      Customer stories
    </p>

    <h2 className="text-3xl md:text-4xl font-semibold text-white">
      See how customers like you succeed
    </h2>

    <p className="mt-4 text-white/60 leading-relaxed">
      Explore real-world outcomes across monitoring, optimization,
      orchestration, and waste elimination — for every type of AI team.
    </p>
  </div>


  {/* TABS */}
  <div className="flex gap-4 mt-10 flex-wrap">

    {/* STARTUPS */}
    <button
      onClick={() => setActiveTab("startups")}
      className={`
        px-5 py-2 rounded-full border transition
        ${activeTab === "startups"
          ? "bg-[#111] border-[#1f2d00] text-white"
          : "border-white/10 text-white/60 hover:bg-white/5"}
      `}
    >
      🚀 Startups
    </button>


    {/* ENTERPRISE */}
    <button
      onClick={() => setActiveTab("enterprise")}
      className={`
        px-5 py-2 rounded-full border transition
        ${activeTab === "enterprise"
          ? "bg-[#111] border-[#1f2d00] text-white"
          : "border-white/10 text-white/60 hover:bg-white/5"}
      `}
    >
      🏢 Enterprise
    </button>


    <button
  onClick={() => setActiveTab("dataCenters")}
  className={`
    px-5 py-2 rounded-full border transition
    ${activeTab === "dataCenters"
      ? "bg-[#111] border-[#1f2d00] text-white"
      : "border-white/10 text-white/60 hover:bg-white/5"}
  `}
>
  🏗️ Data centers
</button>

  </div>


  {/* CONTENT BASED ON STATE */}
  <div className="mt-12">

    {activeTab === "startups" && (
  <div className="grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div>

      {/* TAG */}
      <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#77B900]/10 text-[#77B900] text-sm">
        🚀 Startups
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
        Ship faster. Spend smarter. Protect your runway.
      </h2>

      {/* TEXT */}
      <p className="mt-6 text-white/60 leading-relaxed">
        Startups using our platform stop flying blind on AI costs from day one.
        With automatic guardrails, token-level attribution, and smart compute
        routing, early-stage teams can run ambitious AI products without the
        surprise invoices that kill momentum — and budgets.
      </p>

      <p className="mt-4 text-white/50 leading-relaxed">
        From solo founders integrating their first LLM API to Series B teams
        managing multiple model providers, our customers consistently cut AI
        spend by 35–50% within the first month — without reducing product
        capability.
      </p>

    </div>


    {/* RIGHT SIDE */}
    <div className="space-y-4">

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#77B900] text-1xl font-semibold min-w-[90px]">
          47%
        </div>
        <div>
          <p className="text-white font-medium">Average cost reduction</p>
          <p className="text-white/60 text-sm mt-1">
            Achieved by startup customers in the first 30 days.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#77B900] text-1xl font-semibold min-w-[90px]">
          3 days
        </div>
        <div>
          <p className="text-white font-medium">Time to first saving</p>
          <p className="text-white/60 text-sm mt-1">
            Median time from signup to first automated waste action.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#77B900] text-1xl font-semibold min-w-[90px]">
          $0
        </div>
        <div>
          <p className="text-white font-medium">Cost to get started</p>
          <p className="text-white/60 text-sm mt-1">
            Full monitoring and anomaly alerts on the free tier, no card required.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#77B900] text-1xl font-semibold min-w-[90px]">
          8×
        </div>
        <div>
          <p className="text-white font-medium">Average ROI</p>
          <p className="text-white/60 text-sm mt-1">
            Return on platform cost across active startup customers.
          </p>
        </div>
      </div>

    </div>

  </div>
)}


    {activeTab === "enterprise" && (
  <div className="grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div>

      {/* TAG */}
      <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#7C6CFF]/10 text-[#7C6CFF] text-sm">
        🏢 Enterprise
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
        Govern AI at scale. Align cost with business value.
      </h2>

      {/* TEXT */}
      <p className="mt-6 text-white/60 leading-relaxed">
        Large organisations are deploying AI across dozens of teams, hundreds
        of models, and multiple cloud providers — often without a unified view
        of what it costs or what it delivers. Our enterprise customers use our
        platform to bring financial accountability, governance, and intelligent
        automation to every AI workload across the organisation.
      </p>

      <p className="mt-4 text-white/50 leading-relaxed">
        From global banks running risk models to retailers personalising at
        scale, enterprise customers see an average 38% reduction in AI
        infrastructure costs alongside measurable improvements in compliance
        posture and engineering velocity.
      </p>

    </div>


    {/* RIGHT SIDE */}
    <div className="space-y-4">

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#7C6CFF] text-1xl font-semibold min-w-[90px]">
          38%
        </div>
        <div>
          <p className="text-white font-medium">Average cost reduction</p>
          <p className="text-white/60 text-sm mt-1">
            Across enterprise customers after full platform deployment.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#7C6CFF] text-1xl font-semibold min-w-[90px]">
          6 weeks
        </div>
        <div>
          <p className="text-white font-medium">Time to full deployment</p>
          <p className="text-white/60 text-sm mt-1">
            From contract to organisation-wide rollout, including integrations.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#7C6CFF] text-1xl font-semibold min-w-[90px]">
          100%
        </div>
        <div>
          <p className="text-white font-medium">Audit trail coverage</p>
          <p className="text-white/60 text-sm mt-1">
            Every AI action, cost event, and policy change logged and exportable.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#7C6CFF] text-1xl font-semibold min-w-[90px]">
          $4.2M
        </div>
        <div>
          <p className="text-white font-medium">Avg annual saving</p>
          <p className="text-white/60 text-sm mt-1">
            Median annual AI cost reduction for enterprise customers with 500+ users.
          </p>
        </div>
      </div>

    </div>

  </div>
)}

  
  
{activeTab === "dataCenters" && (
  <div className="grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT SIDE */}
    <div>

      {/* TAG */}
      <div className="inline-block mb-4 px-4 py-1 rounded-full bg-[#00FFA3]/10 text-[#00FFA3] text-sm">
        🏗️ Data centers
      </div>

      {/* TITLE */}
      <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
        Maximise utilisation. Recover idle capacity. Grow margin.
      </h2>

      {/* TEXT */}
      <p className="mt-6 text-white/60 leading-relaxed">
        Data centre operators and colocation providers face a challenge unique
        to their business model: every underutilised GPU rack is lost revenue
        that can never be recovered. Our platform gives infrastructure teams
        the real-time telemetry, intelligent scheduling, and automated waste
        recovery tools needed to run AI infrastructure at peak efficiency — and
        prove it to every tenant.
      </p>

      <p className="mt-4 text-white/50 leading-relaxed">
        Our data centre customers have improved average GPU utilisation from
        54% to over 87%, directly increasing revenue capacity without adding a
        single new rack.
      </p>

    </div>


    {/* RIGHT SIDE */}
    <div className="space-y-4">

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#00FFA3] text-1xl font-semibold min-w-[110px]">
          87%
        </div>
        <div>
          <p className="text-white font-medium">Average GPU utilisation</p>
          <p className="text-white/60 text-sm mt-1">
            Up from a typical 54% baseline before platform deployment.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#00FFA3] text-1xl font-semibold min-w-[110px]">
          33%
        </div>
        <div>
          <p className="text-white font-medium">Idle capacity recovered</p>
          <p className="text-white/60 text-sm mt-1">
            Average reclaimed compute made available for billable workloads.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#00FFA3] text-1xl font-semibold min-w-[110px]">
          12%
        </div>
        <div>
          <p className="text-white font-medium">Energy cost reduction</p>
          <p className="text-white/60 text-sm mt-1">
            Via workload consolidation and cooling-aware scheduling.
          </p>
        </div>
      </div>

      <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-3 flex items-start gap-3">
        <div className="text-[#00FFA3] text-1xl font-semibold min-w-[110px]">
          Real-time
        </div>
        <div>
          <p className="text-white font-medium">Tenant billing accuracy</p>
          <p className="text-white/60 text-sm mt-1">
            Per-workload chargeback with zero manual reconciliation.
          </p>
        </div>
      </div>

    </div>
    

  </div>
  
)}
</div>

<div className="w-full px-6 py-20 border-t border-[#1f2d00]">

  {/* SECTION HEADER */}
  <div className="max-w-[1200px] mx-auto">

    <p className="text-[#77B900] text-sm tracking-widest uppercase mb-6">
      Use cases — how data centers use the platform
    </p>

    {/* CARDS GRID */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

      {/* CARD 1 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#00FFA3]/10 text-[#00FFA3] text-xs">
          📊 Monitoring
        </div>

        <h3 className="text-lg font-semibold text-white">
          Per-rack, per-tenant hardware telemetry
        </h3>

        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          A colocation provider with 2,400 GPU nodes across three facilities
          had no standardised way to report utilisation to tenants. Our
          monitoring layer ingested DCGM and IPMI metrics to deliver per-rack
          dashboards and automated SLA reporting for each tenant contract.
        </p>

        <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-[#00FFA3]/10 text-[#00FFA3] text-xs">
          Tenant SLA automated
        </div>

      </div>


      {/* CARD 2 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#7C6CFF]/10 text-[#7C6CFF] text-xs">
          ⚙️ Optimization
        </div>

        <h3 className="text-lg font-semibold text-white">
          Cooling-aware workload consolidation
        </h3>

        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          A private AI cloud operator was running workloads evenly distributed
          across all nodes, causing cooling inefficiencies. Our optimization
          engine introduced thermal-aware bin-packing, consolidating jobs onto
          fewer nodes during off-peak hours and reducing cooling overhead by 18%.
        </p>

        <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-[#7C6CFF]/10 text-[#7C6CFF] text-xs">
          18% cooling saving
        </div>

      </div>


      {/* CARD 3 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#00BFFF]/10 text-[#00BFFF] text-xs">
          🔁 Orchestration
        </div>

        <h3 className="text-lg font-semibold text-white">
          Deadline-driven job scheduling across bare metal
        </h3>

        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          An AI infrastructure provider supporting 60 research tenants struggled
          with job queue fairness and SLA misses during demand spikes. Our
          orchestration engine introduced cost-aware priority scheduling,
          cutting average queue wait time by 64% and SLA breaches to zero.
        </p>

        <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-[#00BFFF]/10 text-[#00BFFF] text-xs">
          Zero SLA breaches
        </div>

      </div>


      {/* CARD 4 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <div className="inline-block mb-4 px-3 py-1 rounded-full bg-[#77B900]/10 text-[#77B900] text-xs">
          🧹 Waste elimination
        </div>

        <h3 className="text-lg font-semibold text-white">
          Reclaiming stranded capacity from zombie jobs
        </h3>

        <p className="mt-4 text-white/60 text-sm leading-relaxed">
          A hyperscale AI facility discovered that 19% of reserved GPU capacity
          was held by jobs that had stalled or completed without releasing
          resources — invisible to operators. Our waste module detected,
          flagged, and auto-terminated stranded jobs, recovering 340 GPU nodes
          for billable use.
        </p>

        <div className="mt-4 inline-block px-3 py-1 rounded-lg bg-[#77B900]/10 text-[#77B900] text-xs">
          340 GPUs recovered
        </div>

      </div>

    </div>
  </div>
</div>

<div className="w-full px-6 py-20 border-t border-[#1f2d00]">

  <div className="max-w-[1200px] mx-auto">

    {/* HEADER */}
    <p className="text-[#77B900] text-sm tracking-widest uppercase mb-10">
      What data center customers say
    </p>

    {/* CARDS */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {/* CARD 1 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <p className="text-white/70 italic leading-relaxed">
          “We went from 52% average GPU utilisation to 89% in three months.
          That translates directly to revenue — we now serve 70% more billable
          workloads from the same physical infrastructure we had before.
          The ROI case was closed in the first billing cycle.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#00FFA3]/10 text-[#00FFA3] flex items-center justify-center text-sm font-semibold">
            RP
          </div>
          <div>
            <p className="text-white font-medium">Rohan Pillai</p>
            <p className="text-white/50 text-sm">
              VP Infrastructure, CoreVault AI (Colo)
            </p>
          </div>
        </div>

      </div>


      {/* CARD 2 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <p className="text-white/70 italic leading-relaxed">
          “Tenant billing used to take our ops team four days at the end of
          each month. Now it runs automatically — per-workload, per GPU-hour,
          with a full audit trail each tenant can log into and verify
          themselves. Disputes dropped to zero in the first quarter.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#7C6CFF]/10 text-[#7C6CFF] flex items-center justify-center text-sm font-semibold">
            SI
          </div>
          <div>
            <p className="text-white font-medium">Sara Ingvarsson</p>
            <p className="text-white/50 text-sm">
              Director of Operations, NordAI Datacenter
            </p>
          </div>
        </div>

      </div>


      {/* CARD 3 */}
      <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6 hover:border-[#77B900]/40 transition">

        <p className="text-white/70 italic leading-relaxed">
          “The zombie job detection alone justified the entire contract.
          We had no idea 340 GPUs worth of capacity was tied up in stalled
          jobs at any given time. Recovering that was like building a new
          wing of our facility for free.”
        </p>

        <div className="mt-6 flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-[#77B900]/10 text-[#77B900] flex items-center justify-center text-sm font-semibold">
            DM
          </div>
          <div>
            <p className="text-white font-medium">David Moreau</p>
            <p className="text-white/50 text-sm">
              CTO, Argon Compute (AI Cloud)
            </p>
          </div>
        </div>

      </div>

    </div>
  </div>
</div>

<div className="w-full bg-[#0B0F0C] py-20">

  <div className="w-full text-center px-6">

    {/* HEADING */}
    <h2 className="text-3xl md:text-3xl font-semibold text-white leading-tight">
      Join 500+ teams already cutting AI waste
    </h2>

    {/* SUBTEXT */}
    <p className="mt-6 text-white/60 text-sm max-w-[550px] mx-auto leading-relaxed">
      See how our platform performs against your specific workloads — no
      commitment required.
    </p>

    {/* BUTTONS */}
    <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">

      <button className="
        bg-[#E6E3DC]
        text-black
        px-8 py-3
        rounded-xl
        text-lg
        font-medium
        hover:opacity-90
        transition
      ">
        Request a demo
      </button>

      <button className="
        border border-white/20
        text-white
        px-8 py-3
        rounded-xl
        text-lg
        font-medium
        hover:bg-white/10
        transition
      ">
        View case studies
      </button>

    </div>

  </div>

</div>

  </div>

</div>
</div>
    </div>
  );
};

export default CustomersPage;