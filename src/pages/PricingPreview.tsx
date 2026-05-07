import KoreValueSection from "../components/sections/KoreValueSection";
export default function PricingPreview() {
  return (
    <div className="min-h-screen text-white px-4 py-16">

      {/* TOP CONTENT */}
      <div className="text-center max-w-2xl mx-auto">

        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-3 py-[4px] border border-[#77B900]/40 rounded-full text-[11px] text-[#77B900] mb-5">
          <span className="w-1.5 h-1.5 bg-[#77B900] rounded-full"></span>
          Transparent Pricing
        </div>

        {/* TITLE */}
        <h1 className="text-[28px] md:text-[42px] font-semibold leading-[1.2] tracking-tight">
          Plans built for every
          <br />
          <span className="italic text-gray-300 font-medium">
            stage of FinOps maturity
          </span>
        </h1>

        {/* SUBTEXT */}
        <p className="mt-5 text-[13px] text-gray-400 leading-relaxed max-w-lg mx-auto">
          From early-stage visibility to enterprise-grade AI cost governance —
          choose the plan that fits where you are today.
        </p>

        {/* TOGGLE */}
        <div className="mt-6 flex items-center justify-center gap-3">
          <span className="text-[12px] text-gray-400">Monthly</span>

          <div className="w-9 h-5 bg-gray-700 rounded-full relative">
            <div className="w-4 h-4 bg-[#77B900] rounded-full absolute top-[2px] left-[2px]" />
          </div>

          <span className="text-[12px] text-white">Annual</span>

          <span className="ml-2 text-[10px] px-2 py-[3px] rounded-full bg-[#0f2a0f] text-[#77B900] border border-[#77B900]/30">
            Save up to 20%
          </span>
        </div>
      </div>

      {/* 👇 ADD CARDS HERE (OUTSIDE TOP DIV) */}
      {/* PRICING CARDS */}
<div className="mt-20 flex flex-col md:flex-row gap-6 justify-center items-start max-w-[1150px] mx-auto">

  {/* STARTER */}
  <div className="relative w-full md:w-[300px] rounded-[18px] border border-[#77B900]/40 bg-[#061206]/95 p-2 flex flex-col overflow-hidden">

    {/* glow strip */}
    <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#77B900] to-transparent blur-sm opacity-70"></div>

    <div>
      {/* ICON */}
      <div className="w-[40px] h-[40px] rounded-[14px] bg-[#2a3f0a] flex items-center justify-center text-[22px] mb-3">
        🔭
      </div>

      <h3 className="text-[18px] font-medium mb-2">Starter</h3>

      <p className="text-[13px] text-gray-400 leading-[1.2] mb-3">
        Get full visibility into your AI spend with zero friction setup.
      </p>

      <div className="text-[11px] text-[#77B900] border border-[#77B900]/30 px-3 py-[5px] rounded-full inline-block mb-1">
        Ideal for <span className="text-white">Small teams & PoC projects</span>
      </div>

      <div className="border-t border-[#77B900]/10 my-2"></div>

      <p className="text-[13px] mb-1">What's included</p>

      <ul className="space-y-1 text-[13px] text-gray-300">
        {[
          "Unified AI cost dashboard across providers",
          "Connect up to 3 AI provider accounts (OpenAI, Anthropic, AWS Bedrock)",
          "Token-level usage tracking per model and endpoint",
          "Basic cost attribution by team or project",
          "Pre-built spending alerts via email",
          "30-day historical data retention",
          "Single-user access with community support"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-[18px] h-[18px] rounded-full bg-[#77B900]/20 flex items-center justify-center">
              <span className="text-[#77B900] text-[12px]">✔</span>
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <button className="mt-5 w-full border border-[#77B900] text-[#77B900] py-2.5 rounded-lg text-[13px] hover:bg-[#77B900]/10">
      Get started free →
    </button>
  </div>


  {/* GROWTH */}
<div className="relative w-full md:w-[300px] rounded-[18px] border border-[#2a3f0a] bg-[#061206] p-2  justify-between overflow-hidden">
 <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#77B900] to-transparent blur-sm opacity-70"></div>
  {/* badge */}
  <div className="absolute top-4 right-4 text-[10px] px-3 py-[3px] bg-[#77B900] text-black rounded-full font-medium">
    MOST POPULAR
  </div>

  <div>
    {/* ICON */}
    <div className="w-[40px] h-[40px] rounded-[14px] bg-[#2a3f0a] flex items-center justify-center text-[22px] mb-3">
      ⚡
    </div>

    {/* TITLE */}
    <h3 className="text-[18px] font-medium mb-2 text-white">Growth</h3>

    {/* DESCRIPTION */}
    <p className="text-[13px] text-gray-400 leading-[1.2] mb-3">
      Optimize spend and govern AI usage across growing engineering teams.
    </p>

    {/* TAG */}
    <div className="text-[11px] text-[#77B900] border border-[#2a3f0a] px-3 py-[5px] rounded-full inline-block mb-1">
      Ideal for <span className="text-white">Scaling teams & multi-product orgs</span>
    </div>

    {/* DIVIDER */}
    <div className="border-t border-[#1a2a0a] my-2"></div>

    {/* SECTION */}
    <p className="text-[13px] mb-1 text-white">Everything in Starter, plus</p>

    <ul className="space-y-1 text-[13px] text-gray-300 mb-4">
      {[
        "Unlimited AI provider integrations",
        "AI-powered anomaly detection with root-cause analysis",
        "Granular cost allocation by service, feature, and environment",
        "Automated budget enforcement with configurable guardrails",
        "Model benchmarking — cost vs. quality trade-off recommendations",
        "1-year historical data with trend forecasting"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-[#1f2f0a] flex items-center justify-center mt-[2px]">
            <span className="text-[#77B900] text-[10px]">✔</span>
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
       {/* DIVIDER */}
    <div className="border-t border-[#77B900]/10 my-3"></div>

    {/* SECTION */}
    <p className="text-[13px] mb-2 text-white">Collaboration & Access</p>

    <ul className="space-y-1 text-[13px] text-gray-300">
      {[
        "Up to 15 team members with role-based access",
        "Slack & MS Teams alerting integrations",
        "Exportable reports (CSV, PDF)",
        "Priority email & chat support"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-[#1f2f0a] flex items-center justify-center mt-[2px]">
            <span className="text-[#77B900] text-[10px]">✔</span>
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* BUTTON */}
  <button className="mt-4 w-full bg-[#77B900] text-black py-2.5 rounded-lg text-[13px] font-medium hover:opacity-90 transition">
    Start free trial →
  </button>
</div>


  {/* ENTERPRISE */}
  <div className="relative w-full md:w-[300px] rounded-[18px] border border-[#77B900]/40 bg-[#061206]/95 p-2 justify-between overflow-hidden">

    {/* glow strip */}
    <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#77B900] to-transparent blur-sm opacity-70"></div>

    <div>
      {/* ICON */}
      <div className="w-[40px] h-[40px] rounded-[14px] bg-[#2a3f0a] flex items-center justify-center text-[22px] mb-3">
        🏛️
      </div>

      <h3 className="text-[18px] font-medium mb-2">Enterprise</h3>

      <p className="text-[13px] text-gray-400 leading-[1.2] mb-3">
        Full governance, compliance, and executive-level AI financial control.
      </p>

      <div className="text-[11px] text-[#77B900] border border-[#77B900]/30 px-3 py-[5px] rounded-full inline-block mb-1">
        Ideal for <span className="text-white">Large orgs & regulated industries</span>
      </div>

      <div className="border-t border-[#77B900]/10 my-2"></div>

      <p className="text-[13px] mb-1">Everything in Growth, plus</p>

      <ul className="space-y-0 text-[13px] text-gray-300 mb-1">
        {[
          "Unlimited users with SSO & SCIM provisioning",
          "Custom chargeback & showback models by BU or product line",
          "Multi-cloud & on-premise LLM cost tracking",
          "Compliance reporting — SOC 2, ISO 27001, GDPR-ready exports",
          "AI contract & commitment management with optimization",
          "Custom data retention policies & audit logs"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-[16px] h-[16px] rounded-full bg-[#77B900]/20 flex items-center justify-center mt-[2px]">
              <span className="text-[#77B900] text-[10px]">✔</span>
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>

         {/* DIVIDER */}
    <div className="border-t border-[#77B900]/10 my-3"></div>

      <p className="text-[13px] mb-1">Advanced Intelligence</p>

      <ul className="space-y-0 text-[13px] text-gray-300">
        {[
          "Predictive cost modeling for roadmap planning",
          "Automated rightsizing recommendations across models",
          "Dedicated Customer Success Manager",
          "SLA-backed uptime guarantee"
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className="w-[16px] h-[16px] rounded-full bg-[#77B900]/20 flex items-center justify-center mt-[2px]">
              <span className="text-[#77B900] text-[10px]">✔</span>
            </div>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <button className="mt-4 w-full border border-[#77B900] text-[#77B900] py-2.5 rounded-lg text-[13px] hover:bg-[#77B900]/10 transition">
      Talk to sales →
    </button>
  </div>
  <div className="relative w-[300px] rounded-[18px] border border-[#77B900]/40 bg-[#061206]/95 p-2 flex flex-col justify-between overflow-hidden">

  {/* glow strip */}
  <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-transparent via-[#77B900] to-transparent blur-sm opacity-70"></div>

  <div>
    {/* ICON */}
    <div className="w-[40px] h-[40px] rounded-[14px] bg-[#2a3f0a] flex items-center justify-center text-[20px] mb-3">
      🛰️
    </div>

    {/* TITLE */}
    <h3 className="text-[18px] font-medium mb-2">Platform</h3>

    {/* DESCRIPTION */}
    <p className="text-[14px] text-gray-400 leading-[1.2] mb-3">
      Build AI FinOps capabilities into your own product or managed service.
    </p>

    {/* TAG */}
    <div className="text-[11px] text-[#77B900] border border-[#77B900]/30 px-3 py-[4px] rounded-full inline-block mb-1">
      Ideal for <span className="text-white">SaaS platforms & MSPs</span>
    </div>

    {/* DIVIDER */}
    <div className="border-t border-[#77B900]/10 my-2"></div>

    {/* SECTION */}
    <p className="text-[13px] mb-1">Everything in Enterprise, plus</p>

    <ul className="space-y-1 text-[13px] text-gray-300 mb-4">
      {[
        "Full white-label dashboard & reporting",
        "Embeddable React / Web Component SDK",
        "Multi-tenant architecture — manage end-customer accounts",
        "Custom AI cost taxonomies per tenant",
        "Webhook-driven event streaming for real-time integrations"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-[#77B900]/20 flex items-center justify-center mt-[2px]">
            <span className="text-[#77B900] text-[10px]">✔</span>
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>

    {/* DIVIDER */}
    <div className="border-t border-[#77B900]/10 my-3"></div>

    {/* SECTION */}
    <p className="text-[13px] mb-2">Deployment & Support</p>

    <ul className="space-y-1 text-[13px] text-gray-300">
      {[
        "Private cloud or on-premise deployment option",
        "Custom SLAs & enterprise MSA",
        "Dedicated engineering integration support",
        "Co-marketing & partner program access"
      ].map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <div className="w-[16px] h-[16px] rounded-full bg-[#77B900]/20 flex items-center justify-center mt-[2px]">
            <span className="text-[#77B900] text-[10px]">✔</span>
          </div>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>

  {/* BUTTON */}
  <button className="mt-4 w-full border border-[#77B900] text-[#77B900] py-2.5 rounded-lg text-[13px] hover:bg-[#77B900]/10 transition">
    Request partnership →
  </button>

</div>
  

</div>



{/* ================= COMPARE TABLE ================= */}
<div className="mt-24 max-w-[1150px] mx-auto">

  {/* TITLE */}
  <h2 className="text-center text-[22px] font-semibold mb-2">
    Compare all plans
  </h2>
  <p className="text-center text-gray-400 text-[13px] mb-8">
    A full feature breakdown across every tier.
  </p>

  <div className="border border-[#77B900]/30 rounded-lg overflow-hidden">

    <table className="w-full text-[13px]">

      {/* HEADER */}
      <thead className="bg-[#071407] text-[#77B900]">
        <tr>
          <th className="text-left px-6 py-3">Feature</th>
          <th className="py-3">Starter</th>
          <th>Growth</th>
          <th>Enterprise</th>
          <th>Platform</th>
        </tr>
      </thead>

      <tbody>

        {/* ================= COST VISIBILITY ================= */}
        <tr className="bg-[#071407] text-[#77B900]">
          <td colSpan={5} className="px-6 py-3">Cost Visibility</td>
        </tr>

        {[
          ["Unified multi-provider dashboard", "✔", "✔", "✔", "✔"],
          ["Token-level usage tracking", "✔", "✔", "✔", "✔"],
          ["Provider integrations", "Up to 3", "Unlimited", "Unlimited", "Unlimited"],
          ["Historical data retention", "30 days", "1 year", "Custom", "Custom"],
          ["On-premise / private LLM tracking", "—", "—", "✔", "✔"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-[#77B900]/10">
            <td className="px-6 py-3 text-gray-400">{row[0]}</td>
            {row.slice(1).map((col, j) => (
              <td key={j} className="text-center text-white">
                {col === "✔" ? <span className="text-[#77B900]">✔</span> : col}
              </td>
            ))}
          </tr>
        ))}

        {/* ================= OPTIMIZATION ================= */}
        <tr className="bg-[#071407] text-[#77B900]">
          <td colSpan={5} className="px-6 py-3">Optimization & Intelligence</td>
        </tr>

        {[
          ["Spending alerts", "✔", "✔", "✔", "✔"],
          ["AI-powered anomaly detection", "—", "✔", "✔", "✔"],
          ["Model benchmarking & recommendations", "—", "✔", "✔", "✔"],
          ["Predictive cost modeling", "—", "—", "✔", "✔"],
          ["Automated rightsizing", "—", "—", "✔", "✔"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-[#77B900]/10">
            <td className="px-6 py-3 text-gray-400">{row[0]}</td>
            {row.slice(1).map((col, j) => (
              <td key={j} className="text-center">
                {col === "✔" ? (
                  <span className="text-[#77B900]">✔</span>
                ) : (
                  <span className="text-gray-500">{col}</span>
                )}
              </td>
            ))}
          </tr>
        ))}

        {/* ================= GOVERNANCE ================= */}
        <tr className="bg-[#071407] text-[#77B900]">
          <td colSpan={5} className="px-6 py-3">Governance & Compliance</td>
        </tr>

        {[
          ["Budget guardrails & enforcement", "—", "✔", "✔", "✔"],
          ["Chargeback / showback models", "—", "—", "✔", "✔"],
          ["Compliance reporting (SOC 2, GDPR)", "—", "—", "✔", "✔"],
          ["Audit logs & data retention policies", "—", "—", "✔", "✔"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-[#77B900]/10">
            <td className="px-6 py-3 text-gray-400">{row[0]}</td>
            {row.slice(1).map((col, j) => (
              <td key={j} className="text-center">
                {col === "✔" ? (
                  <span className="text-[#77B900]">✔</span>
                ) : (
                  <span className="text-gray-500">{col}</span>
                )}
              </td>
            ))}
          </tr>
        ))}

        {/* ================= ACCESS ================= */}
        <tr className="bg-[#071407] text-[#77B900]">
          <td colSpan={5} className="px-6 py-3">Access & Collaboration</td>
        </tr>

        {[
          ["Team members", "1 user", "Up to 15", "Unlimited", "Unlimited"],
          ["Role-based access control", "—", "✔", "✔", "✔"],
          ["SSO & SCIM provisioning", "—", "—", "✔", "✔"],
          ["Multi-tenant management", "—", "—", "—", "✔"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-[#77B900]/10">
            <td className="px-6 py-3 text-gray-400">{row[0]}</td>
            {row.slice(1).map((col, j) => (
              <td key={j} className="text-center">
                {col === "✔" ? (
                  <span className="text-[#77B900]">✔</span>
                ) : (
                  <span className="text-gray-400">{col}</span>
                )}
              </td>
            ))}
          </tr>
        ))}

        {/* ================= PLATFORM ================= */}
        <tr className="bg-[#071407] text-[#77B900]">
          <td colSpan={5} className="px-6 py-3">Platform & APIs</td>
        </tr>

        {[
          ["Exportable reports", "—", "✔", "✔", "✔"],
          ["REST & GraphQL API access", "—", "—", "Partial", "✔"],
          ["Embeddable SDK (white-label)", "—", "—", "—", "✔"],
          ["Webhook & event streaming", "—", "—", "—", "✔"],
          ["Private cloud / on-premise deploy", "—", "—", "✔", "✔"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-[#77B900]/10">
            <td className="px-6 py-3 text-gray-400">{row[0]}</td>
            {row.slice(1).map((col, j) => (
              <td key={j} className="text-center">
                {col === "✔" ? (
                  <span className="text-[#77B900]">✔</span>
                ) : col === "Partial" ? (
                  <span className="text-[#77B900]">Partial</span>
                ) : (
                  <span className="text-gray-500">—</span>
                )}
              </td>
            ))}
          </tr>
        ))}

        {/* ================= SUPPORT ================= */}
        <tr className="bg-[#071407] text-[#77B900]">
          <td colSpan={5} className="px-6 py-3">Support</td>
        </tr>

        {[
          ["Community support", "✔", "✔", "✔", "✔"],
          ["Priority email & chat", "—", "✔", "✔", "✔"],
          ["Dedicated Customer Success Manager", "—", "—", "✔", "✔"],
          ["Custom SLA & enterprise MSA", "—", "—", "—", "✔"],
        ].map((row, i) => (
          <tr key={i} className="border-t border-[#77B900]/10">
            <td className="px-6 py-3 text-gray-400">{row[0]}</td>
            {row.slice(1).map((col, j) => (
              <td key={j} className="text-center">
                {col === "✔" ? (
                  <span className="text-[#77B900]">✔</span>
                ) : (
                  <span className="text-gray-500">—</span>
                )}
              </td>
            ))}
          </tr>
        ))}

      </tbody>
    </table>
  </div>
</div>
{/* ================= FOOTER CTA ================= */}
<div className="mt-16 text-center max-w-[800px] mx-auto px-4">

  <p className="text-[13px] text-gray-400 leading-relaxed">
    All plans include a free onboarding session, data privacy guarantees, and no lock-in contracts. 
    Enterprise and Platform pricing is custom — built around your team size, provider usage, and deployment preferences.
  </p>

  <button className="mt-5 text-[#77B900] text-[14px] font-medium hover:underline">
    Talk to our FinOps team →
  </button>

</div>

{/* ✅ ADD THIS EXACTLY HERE */}
<KoreValueSection />

</div>

    
    
  );
}