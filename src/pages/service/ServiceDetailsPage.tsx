import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServiceDetails } from "../../services/serviceApi";
import CostBreakdownCard from "../../components/ui/CostBreakdownCard";
import API from "../../api/api";
import { Cloud,Database,BarChart3,Bell,MessageSquare,Mail,Activity,Layers,Plug,LineChart,BrainCircuit} from "lucide-react";
type TagColor = "blue" | "green" | "yellow" | "red" | "pink" | "purple" | "teal";

const tagStyles: Record<TagColor, string> = {
  blue: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  green: "bg-green-500/10 text-green-400 border-green-500/20",
  yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  red: "bg-red-500/10 text-red-400 border-red-500/20",
  pink: "bg-pink-500/10 text-pink-400 border-pink-500/20",
  purple: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  teal: "bg-teal-500/10 text-teal-400 border-teal-500/20",
};
const capabilities = [
  {
    icon: "📊",
    title: "Unified cost dashboard",
    desc: "One view of all AI spend — across AWS Bedrock, Azure OpenAI, GCP Vertex, self-hosted models, and on-prem GPU clusters. Filter by team, project, model, or time period in seconds.",
    tags: [
      { label: "Multi-cloud", color: "blue" as TagColor },
      { label: "Real-time", color: "blue" as TagColor },
    ],
  },
  {
    icon: "🔬",
    title: "Token-level attribution",
    desc: "Break AI API costs down to the individual token, request, and model call. Know precisely which product feature, team, or customer is driving every line of your bill.",
    tags: [
      { label: "LLM-native", color: "green" as TagColor },
      { label: "Per-request", color: "green" as TagColor },
    ],
  },
  {
    icon: "📈",
    title: "Cost forecasting",
    desc: "Predictive 90-day cost models built on your actual usage patterns. Forecast accurately across different growth scenarios and flag budget overruns before they happen.",
    tags: [
      { label: "90-day horizon", color: "yellow" as TagColor },
      { label: "Scenario modelling", color: "yellow" as TagColor },
    ],
  },
  {
    icon: "🚨",
    title: "Anomaly detection",
    desc: "ML-powered spend anomaly detection that learns your usage patterns and fires alerts the moment something unusual appears — not at the end of the billing cycle.",
    tags: [
      { label: "15-min latency", color: "green" as TagColor },
      { label: "Auto-baseline", color: "green" as TagColor },
    ],
  },
  {
    icon: "🏷️",
    title: "Smart tagging & attribution",
    desc: "Automatically infer missing tags from resource names, deployment patterns, and team ownership signals. Fill attribution gaps without requiring engineers to re-tag everything.",
    tags: [
      { label: "Auto-enrichment", color: "red" as TagColor },
      { label: "Gap detection", color: "red" as TagColor },
    ],
  },
  {
    icon: "💰",
    title: "Chargeback & showback",
    desc: "Allocate AI costs to business units, teams, products, and cost centres with full audit trails. Generate finance-ready reports with one click — no more manual spreadsheets.",
    tags: [
      { label: "Finance-ready", color: "purple" as TagColor },
      { label: "Audit trails", color: "purple" as TagColor },
    ],
  },
  {
    icon: "📉",
    title: "Cost efficiency scoring",
    desc: "Score every AI workload, model, and team on cost efficiency relative to their output value. Identify which investments deliver ROI and which are simply expensive.",
    tags: [
      { label: "ROI visibility", color: "blue" as TagColor },
      { label: "Per-workload", color: "blue" as TagColor },
    ],
  },
  {
    icon: "📋",
    title: "Executive reporting",
    desc: "Board-ready AI cost reports — cost-to-revenue ratio, trend analysis, savings achieved, waste eliminated, and forecast vs actual — scheduled and delivered automatically.",
    tags: [
      { label: "Scheduled reports", color: "teal" as TagColor },
      { label: "Export to PDF/CSV", color: "teal" as TagColor },
    ],
  },
];
const integrations = [
  { name: "AWS Bedrock", type: "AI / Cloud", icon: "https://img.icons8.com/color/48/amazon-web-services.png" },
  { name: "Azure OpenAI", type: "AI / Cloud", icon: "https://img.icons8.com/color/48/azure-1.png" },
  { name: "GCP Vertex AI", type: "AI / Cloud", icon: "https://img.icons8.com/color/48/google-cloud.png" },
  { name: "OpenAI", type: "AI Provider", icon: "https://img.icons8.com/fluency/48/chatgpt.png" },
  { name: "Anthropic", type: "AI Provider", icon: "https://img.icons8.com/fluency/48/artificial-intelligence.png" },
  { name: "Hugging Face", type: "AI Provider", icon: "https://img.icons8.com/color/48/happy.png" },

  { name: "Cohere", type: "AI Provider", icon: "https://img.icons8.com/fluency/48/brain.png" },
  { name: "Mistral AI", type: "AI Provider", icon: "https://img.icons8.com/fluency/48/artificial-intelligence.png" },
  { name: "Snowflake", type: "Data Platform", icon: "https://img.icons8.com/color/48/snowflake.png" },
  { name: "Databricks", type: "Data Platform", icon: "https://img.icons8.com/color/48/data-configuration.png" },
  { name: "Grafana", type: "Observability", icon: "https://img.icons8.com/color/48/combo-chart.png" },
  { name: "Datadog", type: "Observability", icon: "https://img.icons8.com/color/48/dog.png" },

  { name: "Slack", type: "Alerts", icon: "https://img.icons8.com/color/48/slack-new.png" },
  { name: "PagerDuty", type: "Alerts", icon: "https://img.icons8.com/color/48/alarm.png" },
  { name: "Email / Webhook", type: "Alerts", icon: "https://img.icons8.com/color/48/new-post.png" },
  { name: "Microsoft Teams", type: "Alerts", icon: "https://img.icons8.com/color/48/microsoft-teams.png" },
  { name: "Looker", type: "BI / Reporting", icon: "https://img.icons8.com/color/48/line-chart.png" },
  { name: "Tableau", type: "BI / Reporting", icon: "https://img.icons8.com/color/48/combo-chart--v1.png" },

  { name: "Power BI", type: "BI / Reporting", icon: "https://img.icons8.com/color/48/power-bi.png" },
  { name: "REST API", type: "Custom", icon: "https://img.icons8.com/color/48/api.png" },
];
function IntegrationsSection() {
  return (
    <section className="w-full bg-[#020a05] py-24 border-t border-white/10">

      <div className="max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 max-w-[650px]">
          <p className="text-[#4f7cff] text-sm tracking-widest uppercase mb-4">
            Integrations
          </p>

          <h2 className="text-[40px] md:text-[46px] font-semibold leading-tight text-white mb-6">
            Works with your entire <br /> AI stack, out of the box
          </h2>

          <p className="text-[#9a9a9a] text-[15px] leading-relaxed">
            Cost Analyzer connects natively to 50+ AI providers, cloud platforms,
            BI tools, and alerting systems.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

          {integrations.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="bg-[#07110a] border border-[#77B900]/20 rounded-xl p-5 text-center 
                           hover:border-[#77B900] hover:shadow-[0_0_15px_rgba(119,185,0,0.2)] 
                           transition duration-300"
              >
                <div className="flex justify-center mb-4 text-[#9fdc00]">
                  <div className="flex justify-center mb-4">
  <img
    src={item.icon}
    alt={item.name}
    className="w-8 h-8 object-contain"
  />
</div>
                </div>

                <h3 className="text-white text-sm font-medium">
                  {item.name}
                </h3>

                <p className="text-[#6f6f6f] text-xs">
                  {item.type}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

const ServiceDetailsPage = () => {

  const { type } = useParams();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetchData();
  }, [type]);

  const fetchData = async () => {
    try {
      const dropdownRes = await API.get("/dropdowns/");

      const match = dropdownRes.data.find((item: any) => {
        const slug = item.path.split("/").pop();
        return slug === type;
      });

      if (!match) {
        console.error("Dropdown not found");
        return;
      }

      const res = await getServiceDetails(match.id);
      setData(res[0]);
    } catch (err) {
      console.error("Service Details Error:", err);
    }
  };

  if (!data) {
    return <div className="text-white p-10">Loading...</div>;
  }

  return (
    <div className="w-full bg-[#020a05] text-white">

      {/* ================= HERO (FULL WIDTH) ================= */}
      <div className="w-full pt-32 md:pt-36 pb-16">

        <div className="max-w-[1200px] mx-auto px-6 lg:px-10">

          {/* BACK */}
          <div
            className="text-[#9fdc00] mb-6 cursor-pointer hover:underline"
            onClick={() => window.history.back()}
          >
            ← Back
          </div>

          {/* BREADCRUMB */}
          <div className="text-white/50 text-sm mb-6 flex items-center gap-4 flex-wrap">
            <span>Services / Cost Analyzer</span>

            <span className="px-4 py-1 border border-[#77B900]/40 text-[#9fdc00] rounded-full text-xs tracking-wider">
              SERVICE — COST ANALYZER
            </span>
          </div>

          {/* HEADING */}
          <h1 className="text-[46px] md:text-[60px] font-semibold leading-[1.1] mb-5 max-w-[780px]">
            Know exactly where every
            <br />
            AI dollar goes —{" "}
            <span className="text-[#9fdc00] italic">
              before it's spent
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-[#929292] text-[17px] max-w-[640px] leading-relaxed mb-8">
            Cost Analyzer gives your engineering, finance, and FinOps teams a
            single, real-time source of truth for every token, GPU hour, model call,
            and pipeline run across your entire AI infrastructure.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-3 flex-wrap">
            <button className="bg-[#77B900] text-black px-6 py-3 rounded-md font-medium hover:shadow-[0_0_20px_rgba(119,185,0,0.5)] transition duration-300">
              Start analysing free
            </button>

            <button className="border border-[#77B900]/40 text-white px-6 py-3 rounded-md hover:border-[#77B900] hover:shadow-[0_0_15px_rgba(119,185,0,0.3)] transition duration-300">
              Watch a 3-min demo →
            </button>
          </div>

        </div>
      </div>

      {/* ================= STATS (FULL WIDTH) ================= */}
      <div className="w-full border-t border-white/10 border-b border-white/10">

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">

          {[
            ["40%", "Average AI cost reduction within 30 days"],
            ["$2B+", "AI spend analysed across customer accounts"],
            ["3 days", "Median time to first cost insight"],
            ["50+", "AI providers and cloud sources supported"],
            ["99.9%", "Data freshness — updated every 15 minutes"],
          ].map((item, i) => (
            <div
              key={i}
              className="p-6 text-center border-r border-white/10 last:border-none"
            >
              <h3 className="text-2xl font-semibold text-[#4f7cff] mb-2">
                {item[0]}
              </h3>
              <p className="text-xs text-[#929292]">
                {item[1]}
              </p>
            </div>
          ))}

        </div>
      </div>

      {/* ================= CENTERED CONTENT ================= */}
      <div className="max-w-[1100px] mx-auto px-6 lg:px-8 mt-20 pb-20">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
           <div className="max-w-[560px]">

            <p className="text-[#4f7cff] text-sm tracking-widest mb-5 uppercase">
              What is Cost Analyzer
            </p>

            <h2 className="text-[40px] md:text-[40px] font-semibold leading-tight mb-6">
              AI cost intelligence,
              <br />
              not just cost reporting
            </h2>

            <p className="text-[#a1a1a1] text-base leading-relaxed mb-6">
              Most cloud billing dashboards tell you what you spent. Cost Analyzer tells
              you why you spent it, what drove the change, which team owns it, and what
              to do about it — automatically.
            </p>

            <h3 className="text-[24px] font-semibold mt-10 mb-4">
              From raw billing data to actionable intelligence
            </h3>

            <p className="text-[#a1a1a1] text-sm leading-relaxed mb-6">
              Cost Analyzer ingests billing exports, API usage logs, and hardware telemetry
              from every connected source — then normalises, attributes, and enriches the data.
            </p>

            <ul className="space-y-4">
              {[
                "Token-level cost attribution per API call, model, and team",
                "GPU utilisation efficiency scoring per workload",
                "Anomaly detection within 15 minutes",
                "Cost forecasting with 90-day horizon",
                "Automatic tagging enrichment",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-[#cfcfcf] text-[13px]">
                  <span className="w-2 h-2 mt-2 bg-[#77B900] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT */}
          <div className="flex justify-center lg:justify-end lg:-ml-6">
            <CostBreakdownCard />
          </div>

        </div>
       

        <div className="max-w-[1100px] mx-auto px-6 pb-20">

  <h2 className="text-3xl font-semibold mb-10">
    Core capabilities
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {capabilities.map((item, i) => (
      <div
        key={i}
        className="bg-[#07110a] border border-[#77B900]/20 rounded-xl p-5"
      >
        <div className="text-2xl mb-3">{item.icon}</div>

        <h3 className="font-semibold mb-2">{item.title}</h3>

        <p className="text-sm text-gray-400 mb-4">
          {item.desc}
        </p>

        <div className="flex gap-2 flex-wrap">
          {item.tags.map((tag, j) => (
            <span
              key={j}
              className={`px-2 py-1 text-xs rounded border ${tagStyles[tag.color]}`}
            >
              {tag.label}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>

</div>

{/* ================= PLATFORM PILLAR ANALYSIS (DARK THEME) ================= */}
<div className="w-full bg-[#020a05] py-24">

  <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

    {/* HEADER */}
    <div className="max-w-[650px] mb-16">
      <p className="text-[#4f7cff] text-sm tracking-widest uppercase mb-4">
        Analysis by platform pillar
      </p>

      <h2 className="text-[40px] md:text-[46px] font-semibold leading-tight mb-6 text-white">
        Cost visibility built into
        <br />
        every capability
      </h2>

      <p className="text-[#9a9a9a] text-[15px] leading-relaxed">
        Cost Analyzer surfaces financial intelligence inside each of the four
        platform pillars — so cost context is always present when decisions are made.
      </p>
    </div>

    {/* TABLE HEADER */}
    <div className="grid md:grid-cols-3 text-xs uppercase tracking-wider text-[#6f6f6f] border-b border-[#77B900]/20 pb-4">
      <div>Capability</div>
      <div>What Cost Analyzer surfaces</div>
      <div>Business outcome</div>
    </div>

    {/* ROWS */}
    <div className="divide-y divide-[#77B900]/10">

      {/* ROW 1 */}
      <div className="grid md:grid-cols-3 gap-6 py-8 items-start">
        <div>
          <span className="px-4 py-2 rounded-full bg-[#0d1a10] text-[#4f7cff] text-sm border border-[#4f7cff]/20">
            📡 Monitoring
          </span>
        </div>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Real-time spend per model, team, and cloud source. Anomaly alerts within
          15 minutes. Cost attribution for every API call and GPU-hour consumed.
        </p>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Zero surprise bills. Finance and engineering always aligned on current spend.
        </p>
      </div>

      {/* ROW 2 */}
      <div className="grid md:grid-cols-3 gap-6 py-8 items-start">
        <div>
          <span className="px-4 py-2 rounded-full bg-[#0d1a10] text-[#2ecc71] text-sm border border-[#2ecc71]/20">
            ⚙️ Optimization
          </span>
        </div>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Cost-performance ratio per model route. Savings estimates for each recommendation.
          Before/after cost comparison for every automated or manual action taken.
        </p>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Optimization decisions backed by financial data, not just performance metrics.
        </p>
      </div>

      {/* ROW 3 */}
      <div className="grid md:grid-cols-3 gap-6 py-8 items-start">
        <div>
          <span className="px-4 py-2 rounded-full bg-[#0d1a10] text-[#f4c542] text-sm border border-[#f4c542]/20">
            🔀 Orchestration
          </span>
        </div>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Cost per job across compute types. Spot vs on-demand cost comparison.
          Cross-region and cross-cloud cost arbitrage opportunities identified automatically.
        </p>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Every scheduling decision accounts for both cost and latency — not one or the other.
        </p>
      </div>

      {/* ROW 4 */}
      <div className="grid md:grid-cols-3 gap-6 py-8 items-start">
        <div>
          <span className="px-4 py-2 rounded-full bg-[#0d1a10] text-[#77B900] text-sm border border-[#77B900]/20">
            🗑️ Waste elimination
          </span>
        </div>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Dollar value of idle resources identified. Shadow AI spend uncovered.
          Monthly savings achieved through automated waste remediation actions with full audit trail.
        </p>

        <p className="text-[#b5b5b5] text-[14px] leading-relaxed">
          Measurable, auditable savings — not projected efficiency gains.
        </p>
      </div>

    </div>

  </div>
</div>
{/* ================= HOW IT WORKS ================= */}
<div className="w-full bg-[#020a05] py-24">

  <div className="max-w-[1100px] mx-auto px-6 lg:px-8">

    {/* HEADER */}
    <div className="max-w-[650px] mb-16">
      <p className="text-[#4f7cff] text-sm tracking-widest uppercase mb-4">
        How it works
      </p>

      <h2 className="text-[40px] md:text-[46px] font-semibold leading-tight mb-6 text-white">
        Up and running in minutes,
        <br />
        insights within hours
      </h2>

      <p className="text-[#9a9a9a] text-[15px] leading-relaxed">
        No lengthy onboarding. No data warehousing project. No professional services required.
        Connect your accounts and Cost Analyzer starts working immediately.
      </p>
    </div>

    {/* STEPS */}
    <div className="grid md:grid-cols-4 gap-6">

      {[
        {
          step: "01",
          title: "Connect your sources",
          desc: "Link AWS, Azure, GCP, OpenAI, Anthropic, Bedrock, Vertex AI, Hugging Face, and on-prem clusters via read-only API keys or IAM roles.",
        },
        {
          step: "02",
          title: "Ingest and normalise",
          desc: "Cost Analyzer pulls billing exports, usage logs, and hardware telemetry and normalises everything into a unified cost model.",
        },
        {
          step: "03",
          title: "Attribute and enrich",
          desc: "Costs are automatically attributed to teams, projects, and cost centres using existing tags, enriched with inferred ownership signals.",
        },
        {
          step: "04",
          title: "Analyse and alert",
          desc: "Dashboards, anomaly alerts, efficiency scores, and forecasts are immediately available. Set budget alerts instantly.",
        },
      ].map((item, i) => (

        <div
          key={i}
          className="relative pl-6 border-l border-[#77B900]/20"
        >

          {/* DOT */}
          <div className="absolute -left-[6px] top-2 w-3 h-3 bg-[#77B900] rounded-full"></div>

          {/* STEP NUMBER */}
          <p className="text-[#2b2b2b] text-[28px] font-bold mb-2">
            {item.step}
          </p>

          {/* TITLE */}
          <h3 className="text-white font-semibold mb-2">
            {item.title}
          </h3>

          {/* DESC */}
          <p className="text-[#8a8a8a] text-[13px] leading-relaxed">
            {item.desc}
          </p>

        </div>
      ))}

    </div>

    {/* STEP 05 FULL WIDTH */}
    <div className="mt-12 max-w-[500px]">
      <p className="text-[#2b2b2b] text-[28px] font-bold mb-2">
        05
      </p>

      <h3 className="text-white font-semibold mb-2">
        Act and measure
      </h3>

      <p className="text-[#8a8a8a] text-[13px] leading-relaxed">
        Cost insights flow directly into Optimization, Orchestration, and Waste
        Elimination capabilities — so savings aren't just identified, they're executed
        and measured.
      </p>
    </div>

    {/* NOTE BOX */}
    <div className="mt-16 p-6 rounded-xl border border-[#77B900]/20 bg-[#07110a]">
      <p className="text-[#9a9a9a] text-[13px] leading-relaxed">
        Cost Analyzer is read-only by default. It never modifies, scales, or terminates
        any resource in your environment unless you explicitly enable automation permissions.
      </p>
    </div>

  </div>
</div>
<IntegrationsSection />



      </div>

    </div>
    
  );
};

export default ServiceDetailsPage;