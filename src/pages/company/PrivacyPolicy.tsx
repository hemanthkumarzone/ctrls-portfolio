import PolicySidebar from "@/components/sections/PolicySidebar";
import { useEffect, useState } from "react";
const PrivacyPolicy = () => {
   const [activeSection, setActiveSection] = useState("overview");
   const [isClicking, setIsClicking] = useState(false);

   useEffect(() => {
  const handleScroll = () => {

    // 🚫 STOP scroll update during click scroll
    if (isClicking) return;

    const sections = document.querySelectorAll("section[id]");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= 120 && rect.bottom >= 120) {
        currentSection = section.id;
      }
    });

    if (currentSection) {
      setActiveSection(currentSection);
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, [isClicking]);
  return (
    <div className="w-full min-h-screen">

      <div className="max-w-[1200px] mx-auto px-6 py-16 flex gap-10">

        <PolicySidebar
  activeSection={activeSection}
  setActiveSection={setActiveSection}
  setIsClicking={setIsClicking}
/>

        {/* RIGHT SIDE */}
        <div className="flex-1">

          {/* ================= HEADER ================= */}
          <div className="mb-12">

            <div className="px-4 py-1 inline-block rounded-full bg-[#77B900]/10 border border-[#77B900]/30 text-[#9fdc00] text-xs tracking-widest uppercase">
              Legal
            </div>

            <h1 className="mt-6 text-3xl md:text-5xl font-semibold text-white">
              Privacy Policy
            </h1>

            <p className="mt-6 text-white/60 text-lg max-w-[700px] leading-relaxed">
              This policy explains what data we collect when you use our AI FinOps platform,
              how we use it to power monitoring, optimization, orchestration, and waste elimination —
              and the rights you have over that data.
            </p>

            <div className="mt-6 inline-block px-4 py-2 rounded-full bg-[#1a1a1a] text-white/60 text-sm">
              Last updated: April 18, 2026 · Version 3.2
            </div>

            <div className="w-full h-[1px] bg-[#1f2d00] mt-10"></div>

          </div>

          {/* ================= SUMMARY CARDS ================= */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

            <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
              <div className="text-xl mb-4">🔒</div>
              <h3 className="text-white font-semibold text-lg">
                Your data stays yours
              </h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                We never sell or use your infrastructure data to train models or benchmark against other customers.
              </p>
            </div>

            <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
              <div className="text-xl mb-4">🌍</div>
              <h3 className="text-white font-semibold text-lg">
                GDPR & DPDPA ready
              </h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                Full compliance with EU GDPR, India DPDPA, CCPA, and SOC 2 Type II standards.
              </p>
            </div>

            <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
              <div className="text-xl mb-4">🗑️</div>
              <h3 className="text-white font-semibold text-lg">
                Delete on request
              </h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                Request deletion of all your data at any time. We action it within 30 days.
              </p>
            </div>

            <div className="bg-[#0F1800] border border-[#1f2d00] rounded-xl p-6">
              <div className="text-xl mb-4">📍</div>
              <h3 className="text-white font-semibold text-lg">
                Data residency options
              </h3>
              <p className="text-white/60 text-sm mt-3 leading-relaxed">
                Choose where your data is stored — US, EU, APAC, or in your own cloud account.
              </p>
            </div>

          </div>

          <section id="overview" className="mt-16 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">

    {/* NUMBER */}
    <div className="
      w-10 h-10
      rounded-full
      bg-black
      text-white
      flex items-center justify-center
      text-sm font-medium
    ">
      1
    </div>

    {/* TITLE */}
    <h2 className="text-2xl font-semibold text-white">
      Overview and scope
    </h2>

  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* CONTENT */}
  <div className="space-y-6 text-white/60 leading-[1.8] text-[15px]">

    <p>
      AIFinOps, Inc. ("we", "our", or "the Company") operates an AI financial operations platform that provides
      monitoring, optimization, orchestration, and waste elimination services for AI workloads across cloud,
      on-premises, and hybrid environments ("the Platform"). This Privacy Policy applies to all users of the Platform,
      including customers, administrators, and end users whose data may be processed through the Platform.
    </p>

    <p>
      This policy applies to data collected through our web application, APIs, command-line tools, integrations with
      third-party cloud providers, and any other service that links to this policy. It does not apply to third-party
      services you connect to the Platform — those are governed by their own privacy policies.
    </p>

  </div>

  {/* CALLOUT BOX (MATCH YOUR THEME) */}
  <div className="
    mt-6
    border-l-4 border-[#77B900]
    bg-[#0F1800]
    p-5
    rounded-md
  ">
    <p className="text-white/80 text-sm leading-[1.7]">
      If you are a business customer using the Platform on behalf of your organisation,
      our Data Processing Agreement (DPA) governs the processing of your customers' or
      employees' personal data. Contact admin@ctrls.co to obtain or review your DPA.
    </p>
  </div>

</section>

<section id="data" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      2
    </div>
    <h2 className="text-2xl font-semibold text-white">
      Data we collect
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* INTRO */}
  <p className="text-white/60 mb-10 leading-relaxed">
    We collect data in two categories: data you provide directly when creating and managing your account,
    and data generated automatically when the Platform connects to and analyses your AI infrastructure.
  </p>

  {/* ================= ACCOUNT DATA ================= */}
  <h3 className="text-white font-medium mb-4">
    Account and identity data
  </h3>

  <div className="overflow-hidden rounded-xl border border-[#1f2d00] mb-10">
    <table className="w-full text-sm">

      <thead className="bg-[#111] text-white/70">
        <tr>
          <th className="text-left px-4 py-3">Data type</th>
          <th className="text-left px-4 py-3">Examples</th>
          <th className="text-left px-4 py-3">Purpose</th>
        </tr>
      </thead>

      <tbody className="text-white/60">

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Contact information</td>
          <td className="px-4 py-3">Name, email address, job title</td>
          <td className="px-4 py-3">Account creation, communications, billing</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Organisation details</td>
          <td className="px-4 py-3">Company name, industry, size, billing address</td>
          <td className="px-4 py-3">Account setup, invoicing, support triage</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Authentication data</td>
          <td className="px-4 py-3">Hashed passwords, SSO tokens, MFA settings</td>
          <td className="px-4 py-3">Secure access to the Platform</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Payment information</td>
          <td className="px-4 py-3">
            Card last four digits, billing email (full card data held by Stripe)
          </td>
          <td className="px-4 py-3">Subscription billing and invoicing</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Support communications</td>
          <td className="px-4 py-3">Tickets, chat logs, email correspondence</td>
          <td className="px-4 py-3">Issue resolution and product improvement</td>
        </tr>

      </tbody>

    </table>
  </div>

  {/* ================= INFRASTRUCTURE DATA ================= */}
  <h3 className="text-white font-medium mb-4">
    Infrastructure and workload data
  </h3>

  <p className="text-white/60 mb-6 leading-relaxed">
    When you connect your cloud accounts, on-premises infrastructure, or AI model providers to the Platform,
    we ingest technical telemetry to power our core capabilities. This data is infrastructure metadata — it
    does not include the content of your AI model inputs, outputs, or training datasets unless you explicitly
    configure the Platform to collect it for cost attribution purposes.
  </p>

  <div className="overflow-hidden rounded-xl border border-[#1f2d00] mb-10">
    <table className="w-full text-sm">

      <thead className="bg-[#111] text-white/70">
        <tr>
          <th className="text-left px-4 py-3">Data type</th>
          <th className="text-left px-4 py-3">Examples</th>
          <th className="text-left px-4 py-3">Capability</th>
        </tr>
      </thead>

      <tbody className="text-white/60">

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Cloud billing data</td>
          <td className="px-4 py-3">
            Cost and usage reports, invoice line items, reserved instance data
          </td>
          <td className="px-4 py-3">Monitoring, Optimization</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Compute telemetry</td>
          <td className="px-4 py-3">
            GPU utilisation, CPU/memory metrics, instance types, job durations
          </td>
          <td className="px-4 py-3">Monitoring, Orchestration</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">AI model usage</td>
          <td className="px-4 py-3">
            API call counts, token volumes, model names, latency, error rates
          </td>
          <td className="px-4 py-3">
            Monitoring, Optimization, Waste elimination
          </td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Resource metadata</td>
          <td className="px-4 py-3">
            Resource IDs, tags, labels, project names, team assignments
          </td>
          <td className="px-4 py-3">Cost attribution, Governance</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Job and pipeline metadata</td>
          <td className="px-4 py-3">
            Job names, durations, schedules, completion status, queue times
          </td>
          <td className="px-4 py-3">Orchestration, Waste elimination</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Network and storage metrics</td>
          <td className="px-4 py-3">
            Egress volumes, storage class usage, data transfer costs
          </td>
          <td className="px-4 py-3">Monitoring, Optimization</td>
        </tr>

      </tbody>

    </table>
  </div>

  {/* ================= PLATFORM USAGE ================= */}
  <h3 className="text-white font-medium mb-4">
    Platform usage data
  </h3>

  <ul className="text-white/60 space-y-3 list-disc pl-5 leading-relaxed">

    <li>
      Log data including IP addresses, browser type, pages visited, and feature interactions — used to improve
      platform reliability and user experience.
    </li>

    <li>
      Feature usage analytics such as which dashboards, reports, and automation rules are used most —
      aggregated and anonymised, used for product development.
    </li>

    <li>
      Error and crash reports used to diagnose and fix platform issues, containing no personal infrastructure data.
    </li>

  </ul>

</section>

<section id="usage" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      3
    </div>

    <h2 className="text-2xl font-semibold text-white">
      How we use your data
    </h2>
  </div>

  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  <p className="text-white/60 mb-8 leading-relaxed">
    We use data solely to deliver, operate, and improve the Platform. The lawful bases for processing under GDPR are:
    contract performance (delivering the service you purchased), legitimate interests (platform security and reliability),
    legal obligation (compliance with applicable law), and consent where explicitly obtained.
  </p>

  {/* TABLE */}
  <div className="overflow-hidden rounded-xl border border-[#1f2d00] mb-8">

    <table className="w-full text-sm">

      <thead className="bg-[#111] text-white/70">
        <tr>
          <th className="text-left px-4 py-3">Purpose</th>
          <th className="text-left px-4 py-3">Legal basis</th>
        </tr>
      </thead>

      <tbody className="text-white/60">

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Providing monitoring, optimization, orchestration, and waste elimination services</td>
          <td className="px-4 py-3">Contract performance</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Generating cost allocation reports and governance dashboards</td>
          <td className="px-4 py-3">Contract performance</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Sending product alerts, anomaly notifications, and usage summaries</td>
          <td className="px-4 py-3">Contract performance</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Processing payments and managing subscriptions</td>
          <td className="px-4 py-3">Contract performance</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Detecting and preventing fraud, abuse, and security threats</td>
          <td className="px-4 py-3">Legitimate interests</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Improving platform reliability, performance, and features</td>
          <td className="px-4 py-3">Legitimate interests</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Complying with legal obligations, court orders, or regulatory requests</td>
          <td className="px-4 py-3">Legal obligation</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Sending marketing communications about new features or products</td>
          <td className="px-4 py-3">Consent (opt-in)</td>
        </tr>

      </tbody>

    </table>

  </div>

  {/* CALLOUT */}
  <div className="border-l-4 border-[#77B900] bg-[#0F1800] p-5 rounded-md">
    <p className="text-white/80 text-sm leading-relaxed">
      We do not use your infrastructure data, billing data, or AI workload telemetry to train machine learning models,
      benchmark your performance against other customers, or generate industry reports without your explicit written consent.
    </p>
  </div>

</section>

<section id="monitoring" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      4
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Data collected for monitoring
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* DESCRIPTION */}
  <p className="text-white/60 mb-6 leading-relaxed">
    Our monitoring capability ingests real-time and historical telemetry from your connected cloud accounts,
    AI model providers, and on-premises infrastructure. This data is used exclusively to generate the dashboards,
    alerts, anomaly detections, and cost attribution reports visible in your account.
  </p>

  {/* BULLETS */}
  <ul className="text-white/60 space-y-4 list-disc pl-5 leading-relaxed">

    <li>
      Cloud provider cost and usage reports (AWS CUR, Azure Cost Management exports, GCP Billing exports)
      are ingested via read-only IAM roles and stored encrypted in your designated data residency region.
    </li>

    <li>
      AI model provider usage data (token counts, API call volumes, latency) is collected via read-only API keys
      that you provide. We do not store the content of prompts or completions unless you explicitly enable
      prompt logging for cost attribution.
    </li>

    <li>
      Hardware telemetry from on-premises infrastructure (GPU utilisation, node health) is collected via a
      lightweight agent installed in your environment. The agent transmits metrics over TLS and stores no data
      locally beyond a 60-second buffer.
    </li>

    <li>
      Monitoring data is retained for the duration of your subscription plus 90 days, after which it is permanently
      deleted from all systems unless you request an earlier deletion.
    </li>

  </ul>

</section>
<section id="optimization" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      5
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Data collected for optimization
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* DESCRIPTION */}
  <p className="text-white/60 mb-6 leading-relaxed">
    Our optimization engine analyses your historical usage patterns, resource configurations, and cost data to generate right-sizing recommendations, model routing suggestions, and reserved capacity guidance. This analysis is performed within your data residency boundary and uses only your own data.
  </p>

  {/* BULLETS */}
  <ul className="text-white/60 space-y-4 list-disc pl-5 leading-relaxed">

    <li>
      Historical compute utilisation patterns are analysed to identify over-provisioned resources. This data never leaves your designated storage region.
    </li>

    <li>
      Model usage patterns (which models are called, at what frequency, with what latency requirements) are analysed to generate routing recommendations. No prompt content is used in this analysis.
    </li>

    <li>
      Cost efficiency scores are calculated using only your own billing and usage data — they are not compared to other customers' data without your explicit opt-in to benchmarking features.
    </li>

    <li>
      Optimization recommendations are generated by models running within our platform infrastructure. Your workload metadata is not shared with any third-party AI provider to generate these recommendations.
    </li>

  </ul>

  {/* GREEN NOTE BOX */}
  <div className="mt-8 p-5 rounded-xl bg-[#0F1800] border-l-4 border-[#77B900]">
    <p className="text-white/70 leading-relaxed">
      All optimization recommendations are advisory by default. Automated actions (such as auto-scaling or instance termination) only occur within the explicit permissions and guardrails you configure in your account settings.
    </p>
  </div>

</section>
<section id="orchestration" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      6
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Data collected for orchestration
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* DESCRIPTION */}
  <p className="text-white/60 mb-6 leading-relaxed">
    Our orchestration capability schedules, routes, and manages AI workloads across your infrastructure. To do this effectively, the Platform collects and processes job metadata, resource availability signals, and scheduling configurations.
  </p>

  {/* BULLETS */}
  <ul className="text-white/60 space-y-4 list-disc pl-5 leading-relaxed">

    <li>
      Job metadata including job names, owner tags, priority levels, duration estimates, and completion status is stored to enable scheduling decisions and audit trails.
    </li>

    <li>
      Resource availability data (which compute nodes or cloud regions have capacity) is polled continuously from connected environments using read-only API access.
    </li>

    <li>
      Scheduling policies and routing rules you define are stored in encrypted configuration storage and applied only within your account context.
    </li>

    <li>
      Workload execution logs (start time, end time, resource consumed, exit status) are retained for 12 months to support chargebacks, compliance reporting, and scheduling optimisation.
    </li>

    <li>
      Data residency tags attached to your jobs are strictly respected — jobs tagged for specific regions will never be routed outside those regions by our orchestration engine.
    </li>

  </ul>

</section>
<section id="waste" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      7
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Data collected for waste elimination
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* DESCRIPTION */}
  <p className="text-white/60 mb-6 leading-relaxed">
    Our waste elimination module identifies idle resources, stalled jobs, orphaned storage, and unsanctioned AI tool usage within your connected environments. The data collected for this purpose is limited to what is necessary to detect and act on waste.
  </p>

  {/* BULLETS */}
  <ul className="text-white/60 space-y-4 list-disc pl-5 leading-relaxed">

    <li>
      Resource activity signals (last accessed time, CPU/GPU utilisation thresholds, network activity) are used to identify idle or abandoned resources. No data content is accessed — only activity metadata.
    </li>

    <li>
      SaaS spend discovery works by analysing invoice line items and expense reports you choose to upload. The Platform identifies AI-related vendor charges but does not store financial data beyond the detection analysis window of 30 days.
    </li>

    <li>
      Automated waste actions (suspending idle environments, terminating zombie jobs) are logged with a full audit trail that includes who authorised the policy, when the action was triggered, and what resource was affected.
    </li>

    <li>
      Shadow AI tool discovery is performed by scanning connected expense management and procurement systems using read-only access. No employee personal financial data is retained — only vendor names, spend categories, and aggregate amounts.
    </li>

  </ul>

</section>
<section id="sharing" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      8
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Sharing and disclosure
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* DESCRIPTION */}
  <p className="text-white/60 mb-6 leading-relaxed">
    We do not sell your personal data or infrastructure data to any third party. We share data only in the following circumstances:
  </p>

  {/* SUB TITLE */}
  <h3 className="text-white font-semibold mb-3">
    Service providers (sub-processors)
  </h3>

  <p className="text-white/60 mb-6 leading-relaxed">
    We use a limited set of trusted third-party service providers to operate the Platform. All sub-processors are contractually bound to process data only on our instructions and to the same security standards we apply.
  </p>

  {/* TABLE */}
  <div className="overflow-x-auto mb-8">
    <table className="w-full border border-[#1f2d00] rounded-xl overflow-hidden text-sm">
      
      <thead className="bg-[#0F1800] text-white/60">
        <tr>
          <th className="text-left px-4 py-3">Sub-processor</th>
          <th className="text-left px-4 py-3">Purpose</th>
          <th className="text-left px-4 py-3">Data shared</th>
          <th className="text-left px-4 py-3">Location</th>
        </tr>
      </thead>

      <tbody className="text-white/70">
        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Amazon Web Services</td>
          <td className="px-4 py-3">Cloud infrastructure & storage</td>
          <td className="px-4 py-3">Encrypted platform data</td>
          <td className="px-4 py-3">US, EU, APAC (your choice)</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Stripe</td>
          <td className="px-4 py-3">Payment processing</td>
          <td className="px-4 py-3">Billing & payment info</td>
          <td className="px-4 py-3">US, EU</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Datadog</td>
          <td className="px-4 py-3">Platform observability</td>
          <td className="px-4 py-3">Anonymised platform logs</td>
          <td className="px-4 py-3">US</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Intercom</td>
          <td className="px-4 py-3">Customer support</td>
          <td className="px-4 py-3">Name, email, support tickets</td>
          <td className="px-4 py-3">US</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">SendGrid</td>
          <td className="px-4 py-3">Transactional email</td>
          <td className="px-4 py-3">Email address, notification content</td>
          <td className="px-4 py-3">US</td>
        </tr>
      </tbody>

    </table>
  </div>

  {/* NOTE */}
  <p className="text-white/60 mb-8 leading-relaxed">
    A full and current list of sub-processors is available at aifinops.com/legal/sub-processors and is updated whenever a sub-processor is added or changed.
  </p>

  {/* SUB TITLE */}
  <h3 className="text-white font-semibold mb-3">
    Legal and regulatory disclosure
  </h3>

  {/* BULLETS */}
  <ul className="text-white/60 space-y-4 list-disc pl-5 leading-relaxed">
    <li>
      We may disclose data if required by applicable law, court order, or regulatory requirement — and will notify you in advance where legally permitted.
    </li>
    <li>
      In the event of a merger, acquisition, or asset sale, your data may be transferred to the acquiring entity subject to the same privacy protections described in this policy.
    </li>
  </ul>

</section>
<section id="retention" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      9
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Data retention
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* TABLE */}
  <div className="overflow-x-auto mb-8">
    <table className="w-full border border-[#1f2d00] rounded-xl overflow-hidden text-sm">

      <thead className="bg-[#0F1800] text-white/60">
        <tr>
          <th className="text-left px-4 py-3">Data category</th>
          <th className="text-left px-4 py-3">Retention period</th>
          <th className="text-left px-4 py-3">Basis</th>
        </tr>
      </thead>

      <tbody className="text-white/70">
        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Account and identity data</td>
          <td className="px-4 py-3">Duration of account + 90 days after closure</td>
          <td className="px-4 py-3">Contract, legal obligation</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Monitoring telemetry (cost & usage)</td>
          <td className="px-4 py-3">Subscription duration + 90 days</td>
          <td className="px-4 py-3">Contract performance</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Orchestration execution logs</td>
          <td className="px-4 py-3">12 months rolling</td>
          <td className="px-4 py-3">Compliance, audit</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Waste elimination audit trail</td>
          <td className="px-4 py-3">24 months rolling</td>
          <td className="px-4 py-3">Compliance, dispute resolution</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">SaaS spend discovery data</td>
          <td className="px-4 py-3">30 days from analysis</td>
          <td className="px-4 py-3">Minimum necessary</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Support communications</td>
          <td className="px-4 py-3">3 years from ticket closure</td>
          <td className="px-4 py-3">Legal obligation</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Payment records</td>
          <td className="px-4 py-3">7 years</td>
          <td className="px-4 py-3">Financial regulation</td>
        </tr>

        <tr className="border-t border-[#1f2d00]">
          <td className="px-4 py-3">Anonymised platform analytics</td>
          <td className="px-4 py-3">Indefinite (no personal data)</td>
          <td className="px-4 py-3">Product improvement</td>
        </tr>
      </tbody>

    </table>
  </div>

  {/* NOTE */}
  <p className="text-white/60 leading-relaxed">
    On account closure, all personal and infrastructure data is deleted within 90 days of account termination. You may request expedited deletion at any time by contacting <span className="text-[#77B900]">admin@ctrls.co</span>.
  </p>

</section>
<section id="security" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      10
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Security
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* INTRO */}
  <p className="text-white/70 leading-relaxed mb-6">
    We apply industry-standard and enterprise-grade security controls to protect your data at every layer of the Platform.
  </p>

  {/* BULLETS */}
  <ul className="space-y-5 text-white/70">

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">Encryption in transit:</span>{" "}
        All data transmitted between your infrastructure and our Platform is encrypted using TLS 1.2 or higher. We do not support legacy TLS 1.0 or 1.1.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">Encryption at rest:</span>{" "}
        All stored data is encrypted using AES-256. Encryption keys are managed using AWS KMS or your own customer-managed keys (CMK) if you use the BYOK option.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">Access control:</span>{" "}
        Access to customer data within our systems is restricted to authorised personnel on a least-privilege, need-to-know basis, enforced via RBAC and logged in immutable audit trails.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">SOC 2 Type II:</span>{" "}
        We maintain a current SOC 2 Type II attestation covering Security, Availability, and Confidentiality trust service criteria. Reports are available to customers under NDA.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">Penetration testing:</span>{" "}
        We commission independent penetration tests at least annually and after significant platform changes. Findings are remediated within defined SLAs.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">Incident response:</span>{" "}
        We maintain a documented incident response plan. In the event of a breach affecting your data, we will notify you within 72 hours in line with GDPR Article 33 requirements.
      </p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>
        <span className="font-semibold text-white">Agent security:</span>{" "}
        Our on-premises monitoring agent operates with read-only system permissions, transmits only metric data (no file contents or network payloads), and can be audited or removed at any time.
      </p>
    </li>

  </ul>

</section>
<section id="rights" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      11
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Your rights
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* INTRO */}
  <p className="text-white/70 leading-relaxed mb-10">
    Depending on your location, you have specific legal rights over your personal data. We honour all of the following rights regardless of your jurisdiction.
  </p>

  {/* GRID CARDS */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

    {/* CARD */}
    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to access</h3>
      <p className="text-white/60 text-sm">
        Request a copy of all personal data we hold about you, including what was collected and how it was used.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to rectification</h3>
      <p className="text-white/60 text-sm">
        Request correction of inaccurate or incomplete personal data held in your account at any time.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to erasure</h3>
      <p className="text-white/60 text-sm">
        Request deletion of your personal data. We will action this within 30 days and confirm in writing.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to portability</h3>
      <p className="text-white/60 text-sm">
        Request an export of your data in a structured, machine-readable format (JSON or CSV).
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to restrict processing</h3>
      <p className="text-white/60 text-sm">
        Ask us to pause processing of your data while a dispute or complaint is being resolved.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to object</h3>
      <p className="text-white/60 text-sm">
        Object to processing based on legitimate interests, including direct marketing at any time.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right to withdraw consent</h3>
      <p className="text-white/60 text-sm">
        Withdraw consent for any processing based on consent (such as marketing emails) at any time.
      </p>
    </div>

    <div className="p-6 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
      <h3 className="text-white font-semibold mb-2">Right not to be profiled</h3>
      <p className="text-white/60 text-sm">
        Opt out of any automated profiling or decision-making that produces legal or significant effects.
      </p>
    </div>

  </div>

  {/* FOOTER TEXT */}
  <p className="text-white/70 leading-relaxed mt-10">
    To exercise any of these rights, email{" "}
    <span className="text-[#77B900]">admin@ctrls.co</span>{" "}
    or use the Data & Privacy section within your account settings. We respond to all requests within 30 days and will never charge a fee for exercising your rights.
  </p>

</section>
<section id="cookies" className="mt-20 scroll-mt-24">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      12
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Cookies and tracking
    </h2>
  </div>

  {/* DIVIDER */}
  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* INTRO */}
  <p className="text-white/70 leading-relaxed mb-6">
    We use a minimal set of cookies to operate the Platform. We do not use third-party advertising cookies or cross-site tracking technologies.
  </p>

  {/* TABLE */}
  <div className="border border-[#1f2d00] rounded-xl overflow-hidden">

    {/* HEADER */}
    <div className="grid grid-cols-4 bg-[#1a2600] text-white/60 text-sm px-4 py-3">
      <span>Cookie</span>
      <span>Type</span>
      <span>Purpose</span>
      <span>Expiry</span>
    </div>

    {/* ROW */}
    <div className="grid grid-cols-4 px-4 py-4 border-t border-[#1f2d00] text-white/80 text-sm">
      <span>session_id</span>
      <span>Strictly necessary</span>
      <span>Maintains your authenticated session</span>
      <span>Session</span>
    </div>

    <div className="grid grid-cols-4 px-4 py-4 border-t border-[#1f2d00] text-white/80 text-sm">
      <span>csrf_token</span>
      <span>Strictly necessary</span>
      <span>Prevents cross-site request forgery</span>
      <span>Session</span>
    </div>

    <div className="grid grid-cols-4 px-4 py-4 border-t border-[#1f2d00] text-white/80 text-sm">
      <span>preferences</span>
      <span>Functional</span>
      <span>Stores UI preferences (theme, language, timezone)</span>
      <span>1 year</span>
    </div>

    <div className="grid grid-cols-4 px-4 py-4 border-t border-[#1f2d00] text-white/80 text-sm">
      <span>_analytics</span>
      <span>Analytics (opt-in)</span>
      <span>Aggregate product usage analytics (no personal data)</span>
      <span>90 days</span>
    </div>

  </div>

  {/* FOOTER TEXT */}
  <p className="text-white/70 leading-relaxed mt-6">
    You can manage cookie preferences at any time from the Cookie Settings link in the Platform footer. Strictly necessary cookies cannot be disabled as they are required for the Platform to function securely.
  </p>

</section>
<section id="children" className="mt-20 scroll-mt-24">

  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      13
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Children's privacy
    </h2>
  </div>

  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  <p className="text-white/70 leading-relaxed">
    The Platform is intended for use by businesses and professionals and is not directed at individuals under the age of 18. We do not knowingly collect personal data from anyone under 18. If you believe a minor has provided us with personal data, please contact{" "}
    <span className="text-[#77B900]">admin@ctrls.co</span> and we will delete it promptly.
  </p>

</section>
<section id="international" className="mt-20 scroll-mt-24">

  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      14
    </div>

    <h2 className="text-2xl font-semibold text-white">
      International data transfers
    </h2>
  </div>

  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  <p className="text-white/70 leading-relaxed mb-4">
    Our infrastructure is globally distributed. If you select a data residency region at account setup, your infrastructure and billing data is stored and processed within that region. Account and identity data may be processed in the United States where our primary operations are based.
  </p>

  <p className="text-white/70 leading-relaxed mb-4">
    For transfers of personal data from the European Economic Area (EEA) to countries without an adequacy decision, we rely on Standard Contractual Clauses (SCCs) approved by the European Commission. Our Data Processing Agreement incorporates the applicable SCCs and is available on request.
  </p>

  <p className="text-white/70 leading-relaxed">
    For Indian customers, we comply with the Digital Personal Data Protection Act 2023 (DPDPA) including requirements around cross-border data transfers and data fiduciary obligations.
  </p>

</section>
<section id="changes" className="mt-20 scroll-mt-24">

  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      15
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Changes to this policy
    </h2>
  </div>

  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  <p className="text-white/70 leading-relaxed mb-6">
    We may update this Privacy Policy to reflect changes in our practices, technology, legal requirements, or for other operational reasons. When we make material changes, we will:
  </p>

  <ul className="space-y-3 text-white/70 mb-6">
    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>Post the updated policy at aifinops.com/legal/privacy with a new "Last updated" date.</p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>Send an email notification to the registered account administrator at least 14 days before the changes take effect.</p>
    </li>

    <li className="flex gap-3">
      <span className="text-[#77B900] mt-2">•</span>
      <p>Display an in-platform banner for 30 days after the policy change goes live.</p>
    </li>
  </ul>

  <p className="text-white/70 leading-relaxed">
    Your continued use of the Platform after the effective date of any update constitutes your acceptance of the revised policy. If you do not agree with the changes, you may close your account and request data deletion before the effective date.
  </p>

</section>
<section id="contact" className="mt-20 scroll-mt-24 mb-20">

  {/* HEADER */}
  <div className="flex items-center gap-4 mb-6">
    <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-sm">
      16
    </div>

    <h2 className="text-2xl font-semibold text-white">
      Contact us
    </h2>
  </div>

  <div className="w-full h-[1px] bg-[#1f2d00] mb-6"></div>

  {/* DESCRIPTION */}
  <p className="text-white/70 leading-relaxed mb-8">
    If you have any questions about this Privacy Policy, wish to exercise your data rights, or want to report a privacy concern, please contact our Data Protection team:
  </p>

  {/* TABLE STYLE */}
  <div className="divide-y divide-white/10 text-sm">

    <div className="flex py-4">
      <p className="w-[220px] text-white/50">Email</p>
      <p className="text-[#77B900]">admin@ctrls.co</p>
    </div>

    <div className="flex py-4 bg-white/5 px-3 rounded-md">
      <p className="w-[220px] text-white/50">Data Protection Officer</p>
      <p className="text-white/80">dpo@aifinops.com</p>
    </div>

    <div className="flex py-4">
      <p className="w-[220px] text-white/50">Postal address</p>
      <p className="text-white/80">
        AIFinOps, Inc., Privacy Team, 100 Technology Drive, Suite 400, San Francisco, CA 94105, USA
      </p>
    </div>

    <div className="flex py-4 bg-white/5 px-3 rounded-md">
      <p className="w-[220px] text-white/50">EU Representative</p>
      <p className="text-white/80">
        AIFinOps EU Ltd., 1 Grand Canal Square, Dublin 2, Ireland
      </p>
    </div>

    <div className="flex py-4">
      <p className="w-[220px] text-white/50">Response time</p>
      <p className="text-white/80">
        We aim to respond to all privacy enquiries within 5 business days.
      </p>
    </div>

  </div>

  {/* FOOTER TEXT */}
  <p className="text-white/70 leading-relaxed mt-8">
    If you are located in the EEA and are unsatisfied with our response, you have the right to lodge a complaint with your local supervisory authority. In Ireland, this is the Data Protection Commission (dataprotection.ie). In India, matters may be referred to the Data Protection Board under the DPDPA 2023.
  </p>

</section>
        </div>

      </div>

    </div>
  );
};

export default PrivacyPolicy;