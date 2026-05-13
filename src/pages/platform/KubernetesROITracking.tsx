import KoreValueSection from "../../components/sections/KoreValueSection";
import { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Cell,
  Area,
  AreaChart,
} from "recharts";
const KubernetesROITracking = () => {
  const tags = [
    "Kubernetes",
    "ROI tracking",
    "FinOps",
    "Monitoring",
    "Waste elimination",
    "Optimization",
  ];
  const chartData = [
  { month: "Jan", spend: 78, roi: 78 },
  { month: "Feb", spend: 80, roi: 82 },
  { month: "Mar", spend: 83.5, roi: 86 },
  { month: "Apr", spend: 86, roi: 84 },
  { month: "May", spend: 88.5, roi: 88 },
  { month: "Jun", spend: 90.5, roi: 90.5 },
];
const wasteData = [
  {
    name: "CPU over-provision",
    value: 43,
    fill: "#84D000",
  },
  {
    name: "Idle nodes",
    value: 31,
    fill: "#5D8F00",
  },
  {
    name: "Memory usage",
    value: 20,
    fill: "#73B000",
  },
  {
    name: "Orphaned storage",
    value: 12,
    fill: "#507B00",
  },
];
const [activeTab, setActiveTab] = useState("All");

const tabs = [
  "All",
  "Monitoring",
  "Optimization",
  "Orchestration",
  "Waste elimination",
  "ROI tracking",
];

const coreUseCases = [
  {
    category: "ROI tracking",
    title: "Workload-level ROI scoring",
    description:
      "Calculate a real-time ROI score for every K8s workload — factoring cost, utilization, and business output — and rank them from highest to lowest value.",
    tag: "ROI tracking",
  },

  {
    category: "Monitoring",
    title: "Namespace cost attribution",
    description:
      "Assign infrastructure costs to namespaces, teams, and projects with granular label-based allocation across CPU, memory, GPU, and storage.",
    tag: "Monitoring",
  },

  {
    category: "Waste elimination",
    title: "Idle pod termination",
    description:
      "Detect pods consuming resources with zero meaningful output — zombie jobs, stale experiments — and auto-terminate after configurable inactivity windows.",
    tag: "Waste elimination",
  },

  {
    category: "Optimization",
    title: "Pod rightsizing engine",
    description:
      "Analyze historical CPU and memory usage per pod and recommend precise resource requests and limits to eliminate over-provisioning waste.",
    tag: "Optimization",
  },

  {
    category: "Orchestration",
    title: "Node pool cost arbitrage",
    description:
      "Dynamically route workloads across on-demand, spot, and reserved node pools based on live pricing, priority class, and SLA requirements.",
    tag: "Orchestration",
  },

  {
    category: "ROI tracking",
    title: "Cost-per-inference tracking",
    description:
      "Track end-to-end cost of each AI inference request from pod scheduling through GPU execution — enabling true unit economics for model serving teams.",
    tag: "ROI tracking",
  },

  {
    category: "Monitoring",
    title: "Multi-cluster cost consolidation",
    description:
      "Unify cost visibility across EKS, GKE, AKS, and on-premise clusters into a single normalized ROI dashboard with drill-down capability.",
    tag: "Monitoring",
  },

  {
    category: "Optimization",
    title: "GPU node bin-packing",
    description:
      "Unify cost visibility across EKS, GKE, AKS, and on-premise clusters into a single normalized ROI dashboard with drill-down capability.",
    tag: "Optimization",
  },

  {
    category: "Waste elimination",
    title: "Orphaned PVC detection",
    description:
      "Surface PersistentVolumeClaims with no active pod attachment — a silent cost source that accumulates unnoticed across long-running AI clusters.",
    tag: "Waste elimination",
  },

  {
    category: "Orchestration",
    title: "HPA & VPA ROI governance",
    description:
      "Instrument Horizontal and Vertical Pod Autoscaler decisions with cost impact scoring so scaling events are always financially justified.",
    tag: "Orchestration",
  },

  {
    category: "ROI tracking",
    title: "Training job ROI comparison",
    description:
      "Instrument Horizontal and Vertical Pod Autoscaler decisions with cost impact scoring so scaling events are always financially justified.",
    tag: "ROI tracking",
  },

  {
    category: "Waste elimination",
    title: "Namespace budget enforcement",
    description:
      "Instrument Horizontal and Vertical Pod Autoscaler decisions with cost impact scoring so scaling events are always financially justified.",
    tag: "Waste elimination",
  },
];
const filteredCards =
  activeTab === "All"
    ? coreUseCases
    : coreUseCases.filter(
        (card) => card.category === activeTab
      );
const cardPositions: Record<string, string> = {
  "Workload-level ROI scoring": "left-[20px] top-[0px]",
  "Namespace cost attribution": "left-[310px] top-[0px]",
  "Idle pod termination": "left-[600px] top-[0px]",
  "Pod rightsizing engine": "left-[890px] top-[0px]",

  "Node pool cost arbitrage": "left-[20px] top-[190px]",
  "Cost-per-inference tracking": "left-[310px] top-[190px]",
  "Multi-cluster cost consolidation": "left-[600px] top-[190px]",
  "GPU node bin-packing": "left-[890px] top-[190px]",

  "Orphaned PVC detection": "left-[20px] top-[380px]",
  "HPA & VPA ROI governance": "left-[310px] top-[380px]",
  "Training job ROI comparison": "left-[600px] top-[380px]",
  "Namespace budget enforcement": "left-[890px] top-[380px]",
};
  return (
    <div className="w-full px-6 pt-[100px] pb-[40px]">

      <div className="max-w-[1400px] mx-auto text-center">

        {/* HEADING */}
        <h1 className="text-white font-bold text-[15px] md:text-[40px]">
          Kubernetes ROI tracking — AI FinOps platform
        </h1>

        {/* DESCRIPTION */}
        <p className="mt-6 max-w-[940px] mx-auto text-gray-300 text-[10px] md:text-[15px] leading-[1.5]">
          Business requirements and use cases for a Kubernetes ROI Tracking
          module within an AI FinOps platform focused on monitoring,
          optimization, orchestration, and waste elimination across GPU,
          TPU, and LPU workloads.
        </p>

        {/* TAGS */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">

          {tags.map((tag) => (
            <div
              key={tag}
              className="
                px-6
                py-2
                rounded-full
                border
                border-[#77B900]
                bg-[#131814]
                text-white
                text-sm
                shadow-[0_0_12px_rgba(119,185,0,0.15)]
              "
            >
              {tag}
            </div>
          ))}
          

        </div>
        {/* PLATFORM KEY METRIC */}
<div className="mt-16">

  {/* TITLE */}
  <h3 className="text-white text-[20px] mb-5 pl-4 text-left">
    Platform Key Metric
  </h3>

  {/* METRIC CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2">

    {[
      {
        title: "Avg K8s Resource Waste",
        value: "38%",
        desc: "Across all namespaces",
      },
      {
        title: "Over-provisioned pods",
        value: "52%",
        desc: "CPU/memory headroom unused",
      },
      {
        title: "Cost saved post-ROI tracking",
        value: "44%",
        desc: "After module adoption",
      },
      {
        title: "Avg node utilization",
        value: "41%",
        desc: "Industry benchmark",
      },
      {
        title: "Idle node cost/mo",
        value: "$18K",
        desc: "Per 50-node AI cluster",
      },
      {
        title: "ROI visibility gain",
        value: "89%",
        desc: "After module deployment",
      },
    ].map((item, index) => (

      <div
        key={index}
        className="
          rounded-[20px]
          border
          border-[#77B900]/30
          bg-[#131814]
          px-5
          py-5
          h-[110px]
          flex
          flex-col
          justify-between
        "
        style={{
          boxShadow: "0px 4px 4px rgba(119,185,0,0.30)",
        }}
      >

        {/* TITLE */}
        <p className="text-white text-[12px] leading-[12px]">
          {item.title}
        </p>

        {/* VALUE */}
        <h2 className="text-[#84ff00] text-[21px] font-semibold mt-2">
          {item.value}
        </h2>

        {/* DESCRIPTION */}
        <p className="text-[#D1D5DB] text-[12px] leading-[18px] mt-1">
          {item.desc}
        </p>

      </div>

    ))}

  </div>
</div>
{/* NAMESPACE LEVEL ROI SNAPSHOT */}
<div className="mt-14 px-6">

  {/* HEADING */}
  <h3 className="text-white text-[18px] mb-5 pl-3 text-left">
  Namespace-level ROI snapshot
</h3>

  {/* SNAPSHOT CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

    {[
      {
        name: "ml-training",
        utilization: "72%",
        roi: "High",
        progress: "72%",
      },
      {
        name: "inference-prod",
        utilization: "88%",
        roi: "Optimal",
        progress: "88%",
      },
      {
        name: "data-pipeline",
        utilization: "45%",
        roi: "Medium",
        progress: "45%",
      },
      {
        name: "experimentation",
        utilization: "22%",
        roi: "Low",
        progress: "22%",
      },
      {
        name: "model-serving",
        utilization: "81%",
        roi: "High",
        progress: "81%",
      },
      {
        name: "dev-sandbox",
        utilization: "14%",
        roi: "Critical",
        progress: "14%",
      },
    ].map((item, index) => (

      <div
        key={index}
        className="
          rounded-[20px]
          p-[2px]
          bg-gradient-to-b
          from-[#283E00]
          to-[#182500]
        "
      >

        {/* INNER CARD */}
        <div
          className="
            rounded-[18px]
            bg-[#131814]
            px-4
            py-4
            h-[92px]
            flex
            flex-col
            justify-between
          "
        >

          {/* TITLE */}
          <p className="text-white text-[12px]">
            {item.name}
          </p>

          {/* PROGRESS BAR */}
          <div className="w-full h-[12px] bg-[#1D241D] rounded-full overflow-hidden">

            <div
              className="h-full rounded-full bg-[#84ff00]"
              style={{
                width: item.progress,
              }}
            />

          </div>

          {/* FOOTER */}
          <div className="flex items-center gap-4 text-[11px] text-[#D1D5DB]">

            <p>
              Utilization: {item.utilization}
            </p>

            <p>
              ROI: {item.roi}
            </p>

          </div>

        </div>

      </div>

    ))}

  </div>
</div>
{/* ROI TRACKING PIPELINE */}
<div className="mt-14 px-6 text-left">

  {/* HEADING */}
  <h3 className="text-white text-[18px] mb-5 pl-1">
    ROI tracking pipeline
  </h3>

  {/* PIPELINE CARDS */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

    {[
      {
        number: "01",
        title: "Collect K8s metrics",
      },
      {
        number: "02",
        title: "Map cost to workload",
      },
      {
        number: "03",
        title: "Score ROI by namespace",
      },
      {
        number: "04",
        title: "Detect waste patterns",
      },
      {
        number: "05",
        title: "Auto-remediate",
      },
      {
        number: "06",
        title: "Report & govern",
      },
    ].map((item, index) => (

      <div
        key={index}
        className="
          rounded-[20px]
          p-[2px]
          bg-gradient-to-b
          from-[#283E00]
          to-[#182500]
        "
      >

        {/* INNER CARD */}
        <div
          className="
            rounded-[18px]
            bg-[#131814]
            h-[92px]
            px-4
            py-4
            flex
            flex-col
            items-center
            justify-center
            text-center
          "
        >

          {/* NUMBER */}
          <p className="text-white text-[20px] leading-none mb-3">
            {item.number}
          </p>

          {/* TITLE */}
          <p className="text-white text-[14px] leading-[20px]">
            {item.title}
          </p>

        </div>

      </div>

    ))}

  </div>
</div>
{/* ROI TRACKING PIPELINE */}
<div className="mt-14 px-6">

  {/* SECTION TITLE */}
  <h3 className="text-white text-[18px] mb-4 pl-1 text-left">
  ROI tracking pipeline
</h3>

  {/* TWO GRAPH LAYOUT */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">

    {/* LEFT GRAPH */}
    <div
      className="
        rounded-[10px]
        p-[2px]
        bg-gradient-to-b
        from-[#283E00]
        to-[#182500]
      "
    >
      <div className="bg-[#131814] rounded-[8px] px-[22px] pt-[18px] pb-[16px]">

        {/* TITLE */}
        <h3 className="text-white text-[14px] leading-none mb-[10px] text-left">
          Monthly K8s spend vs ROI score
        </h3>

        {/* LEGEND */}
        <div className="flex items-center flex-wrap gap-4 mb-[12px]">

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#4F7A00]" />
            <p className="text-[#E5E7EB] text-[12px]">
              Spend ($K)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#84ff00]" />
            <p className="text-[#E5E7EB] text-[12px]">
              ROI score
            </p>
          </div>

        </div>

        {/* CHART */}
        <div className="w-full h-[250px] mt-2">

          <ResponsiveContainer width="100%" height="100%">

            <LineChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: -15,
                bottom: 0,
              }}
            >

              {/* GRID */}
              <CartesianGrid
                stroke="#223000"
                strokeWidth={1}
                vertical={true}
                horizontal={true}
              />

              {/* X AXIS */}
              <XAxis
                dataKey="month"
                tick={{
                  fill: "#5E6472",
                  fontSize: 11,
                }}
                axisLine={false}
                tickLine={false}
              />

              {/* Y AXIS */}
              <YAxis
                domain={[78, 92]}
                ticks={[78, 80, 82, 84, 86, 88, 90, 92]}
                tickFormatter={(value) => `$${value}K`}
                tick={{
                  fill: "#5E6472",
                  fontSize: 11,
                }}
                axisLine={false}
                tickLine={false}
              />

              {/* DOTTED LINE */}
              <Line
                type="monotone"
                dataKey="roi"
                stroke="#5E8B00"
                strokeWidth={2}
                strokeDasharray="3 3"
                dot={{
                  r: 2,
                  fill: "#5E8B00",
                  strokeWidth: 0,
                }}
                activeDot={false}
              />

              {/* SOLID LINE */}
              <Line
                type="monotone"
                dataKey="spend"
                stroke="#84ff00"
                strokeWidth={2}
                dot={{
                  r: 2,
                  fill: "#84ff00",
                  strokeWidth: 0,
                }}
                activeDot={false}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>
    </div>

    
   {/* RIGHT GRAPH */}
<div
  className="
    rounded-[10px]
    p-[2px]
    bg-gradient-to-b
    from-[#283E00]
    to-[#182500]
  "
>
  <div className="bg-[#131814] rounded-[8px] p-[22px] pt-[18px] pb-[16px]">

    {/* TITLE */}
    <h3 className="text-white text-[14px] leading-none mb-[10px] text-left">
      Waste by K8s resource type ($K/mo)
    </h3>

    {/* LEGEND */}
    <div className="flex items-center flex-wrap gap-4 mb-[12px]">

      {[
        {
          label: "CPU over-provision",
          color: "#84D000",
        },
        {
          label: "Memory usage",
          color: "#73B000",
        },
        {
          label: "Idle nodes",
          color: "#5D8F00",
        },
        {
          label: "Orphaned storage",
          color: "#507B00",
        },
      ].map((item, index) => (

        <div
          key={index}
          className="flex items-center gap-2"
        >
          <div
            className="w-3 h-3"
            style={{
              background: item.color,
            }}
          />

          <p className="text-[#E5E7EB] text-[12px]">
            {item.label}
          </p>
        </div>

      ))}

    </div>

    {/* BAR CHART */}
    {/* BAR CHART */}
<div className="w-full h-[250px] mt-2">

  <ResponsiveContainer width="100%" height="100%">

    <BarChart
      data={wasteData}
      layout="vertical"
      margin={{
        top: 20,
        right: 0,
        left: -18,
        bottom: 0,
      }}
      barCategoryGap={24}
    >

      {/* AXIS LINE */}
      <CartesianGrid
        stroke="#2A3130"
        horizontal={false}
        vertical={false}
      />

      {/* X AXIS */}
      <XAxis
        type="number"
        domain={[0, 45]}
        ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45]}
        tickFormatter={(value) => `$${value}K`}
        tick={{
          fill: "#5E6472",
          fontSize: 11,
        }}
        axisLine={{
          stroke: "#54555A",
          strokeWidth: 1,
        }}
        tickLine={false}
      />

      {/* Y AXIS */}
      <YAxis
        dataKey="name"
        type="category"
        tick={{
          fill: "#5E6472",
          fontSize: 11,
        }}
        axisLine={{
          stroke: "#54555A",
          strokeWidth: 1,
        }}
        tickLine={false}
        width={150}
      />

      {/* BARS */}
      <Bar
        dataKey="value"
        radius={[2, 2, 2, 2]}
        barSize={30}
      >

        <Cell fill="#77B900" />
        <Cell fill="#436900" />
        <Cell fill="#659D00" />
        <Cell fill="#416600" />

      </Bar>

    </BarChart>

  </ResponsiveContainer>

</div>

  </div>
  
</div>


  </div>

</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] mt-[18px] px-6">

  {/* LEFT CARD */}
  <div
    className="
      rounded-[10px]
      p-[2px]
      bg-gradient-to-b
      from-[#283E00]
      to-[#182500]
    "
  >
    <div className="bg-[#131814] rounded-[8px] px-[22px] pt-[18px] pb-[16px]">

      {/* TITLE */}
      <h3 className="text-white text-[14px] leading-none mb-[10px] text-left">
        Node utilization before vs after ROI tracking
      </h3>

      {/* LEGEND */}
      <div className="flex items-center gap-[40px] mb-[8px] pl-[2px]">

        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] bg-[#416600]" />
          <p className="text-white text-[11px]">
            Before
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] bg-[#77B900]" />
          <p className="text-white text-[11px]">
            After
          </p>
        </div>

      </div>

      {/* CHART */}
      <div className="w-full h-[250px] mt-2">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart
            data={[
              {
                name: "GPU\nnodes",
                before: 37,
                after: 71,
              },
              {
                name: "CPU\nnodes",
                before: 43,
                after: 77,
              },
              {
                name: "Memory\nopt",
                before: 35,
                after: 68,
              },
              {
                name: "Spot\nnodes",
                before: 27,
                after: 64,
              },
              {
                name: "Mixed",
                before: 43,
                after: 80,
              },
              {
                name: "Dev",
                before: 15,
                after: 52,
              },
            ]}
            margin={{
              top: 8,
              right: 0,
              left: 8,
              bottom: -4,
            }}
            barGap={2}
            barCategoryGap={10}
          >

            <CartesianGrid
              vertical={false}
              horizontal={false}
            />

            <XAxis
              dataKey="name"
              tick={{
                fill: "#54555A",
                fontSize: 11,
              }}
              tickLine={false}
              axisLine={{
                stroke: "#54555A",
                strokeWidth: 1,
              }}
            />

            <YAxis
              domain={[0, 80]}
              ticks={[0, 10, 20, 30, 40, 50, 60, 70, 80]}
              tickFormatter={(value) => `${value}%`}
              tick={{
                fill: "#54555A",
                fontSize: 11,
              }}
              tickLine={false}
              axisLine={{
                stroke: "#54555A",
                strokeWidth: 1,
              }}
              width={40}
            />

            <Bar
              dataKey="before"
              fill="#416600"
              barSize={36}
              radius={[0, 0, 0, 0]}
            />

            <Bar
              dataKey="after"
              fill="#77B900"
              barSize={36}
              radius={[0, 0, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  </div>

  {/* RIGHT CARD */}
 {/* RIGHT CARD */}
<div
  className="
    rounded-[10px]
    p-[2px]
    bg-gradient-to-b
    from-[#283E00]
    to-[#182500]
  "
>
  <div className="bg-[#131814] rounded-[8px] px-[22px] pt-[18px] pb-[16px]">

    {/* TITLE */}
    <h3 className="text-white text-[14px] leading-none mb-[10px] text-left">
      Savings by optimization action ($K)
    </h3>

    {/* LEGEND */}
    <div className="flex items-center gap-2 mb-[14px]">

      <div className="w-[12px] h-[12px] bg-[#77B900]" />

      <p className="text-white text-[11px]">
        Savings realized
      </p>

    </div>

    {/* CHART */}
    <div className="w-full h-[255px]">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart
          layout="vertical"
          data={[
            {
              name: "Pod rightsizing",
              value: 43,
            },
            {
              name: "Node consolidation",
              value: 32,
            },
            {
              name: "Idle termination",
              value: 24,
            },
            {
              name: "Spot node usage",
              value: 18,
            },
            {
              name: "PVC cleanup",
              value: 13,
            },
          ]}
          margin={{
            top: 4,
            right: 16,
            left: -8,
            bottom: -6,
          }}
          barCategoryGap={22}
        >

          {/* GRID */}
          <CartesianGrid
            vertical={false}
            horizontal={false}
          />

          {/* X AXIS */}
          <XAxis
            type="number"
            domain={[0, 45]}
            ticks={[0, 5, 10, 15, 20, 25, 30, 35, 40, 45]}
            tickFormatter={(value) => `$${value}K`}
            tick={{
              fill: "#54555A",
              fontSize: 11,
            }}
            tickLine={false}
            axisLine={{
              stroke: "#54555A",
              strokeWidth: 1,
            }}
          />

          {/* Y AXIS */}
          <YAxis
            dataKey="name"
            type="category"
            width={145}
            tick={{
              fill: "#54555A",
              fontSize: 11,
            }}
            tickLine={false}
            axisLine={{
              stroke: "#54555A",
              strokeWidth: 1,
            }}
          />

          {/* BAR */}
          <Bar
            dataKey="value"
            fill="#77B900"
            radius={[2, 2, 2, 2]}
            barSize={28}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>

  </div>
</div>

</div>
{/* THIRD ROW */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px] mt-[18px] px-6">

  {/* LEFT CARD */}
  <div
    className="
      rounded-[10px]
      p-[2px]
      bg-gradient-to-b
      from-[#283E00]
      to-[#182500]
    "
  >
    <div className="bg-[#131814] rounded-[8px] px-[22px] pt-[18px] pb-[16px]">

      {/* TITLE */}
      <h3 className="text-white text-[14px] leading-none mb-[12px] text-left">
        Cost per namespace trend ($K)
      </h3>

      {/* LEGEND */}
      <div className="flex items-center gap-6 mb-[10px]">

        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] bg-[#84D000]" />
          <p className="text-white text-[11px]">
            ml_training
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] bg-[#77B900]" />
          <p className="text-white text-[11px]">
            inference-prod
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[12px] h-[12px] bg-[#5E8F00]" />
          <p className="text-white text-[11px]">
            experimentation
          </p>
        </div>

      </div>

      {/* CHART */}
      <div className="w-full h-[290px]">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            margin={{
              top: 10,
              right: 10,
              left: -10,
              bottom: -6,
            }}
            data={[
              {
                month: "Jan",
                ml_training: 42,
                inference_prod: 18,
                experimentation: 22,
              },
              {
                month: "Feb",
                ml_training: 45,
                inference_prod: 20,
                experimentation: 20,
              },
              {
                month: "Mar",
                ml_training: 44,
                inference_prod: 24,
                experimentation: 16,
              },
              {
                month: "Apr",
                ml_training: 41,
                inference_prod: 25,
                experimentation: 14,
              },
              {
                month: "May",
                ml_training: 40,
                inference_prod: 28,
                experimentation: 10,
              },
              {
                month: "Jun",
                ml_training: 39,
                inference_prod: 30,
                experimentation: 9,
              },
            ]}
          >

            <CartesianGrid
              stroke="#243000"
              vertical={true}
              horizontal={true}
            />

            <XAxis
              dataKey="month"
              tick={{
                fill: "#54555A",
                fontSize: 11,
              }}
              tickLine={false}
              axisLine={{
                stroke: "#54555A",
                strokeWidth: 1,
              }}
            />

            <YAxis
              domain={[5, 45]}
              ticks={[5, 10, 15, 20, 25, 30, 35, 40, 45]}
              tickFormatter={(value) => `$${value}K`}
              tick={{
                fill: "#54555A",
                fontSize: 11,
              }}
              tickLine={false}
              axisLine={{
                stroke: "#54555A",
                strokeWidth: 1,
              }}
              width={52}
            />

            {/* TOP DOTTED */}
            <Line
              type="monotone"
              dataKey="ml_training"
              stroke="#84D000"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={{
                r: 2,
                stroke: "#84D000",
                strokeWidth: 1,
                fill: "#131814",
              }}
            />

            {/* NORMAL */}
            <Line
              type="monotone"
              dataKey="inference_prod"
              stroke="#77B900"
              strokeWidth={2}
              dot={{
                r: 2,
                stroke: "#77B900",
                strokeWidth: 1,
                fill: "#131814",
              }}
            />

            {/* LOWER DOTTED */}
            <Line
              type="monotone"
              dataKey="experimentation"
              stroke="#5E8F00"
              strokeWidth={2}
              strokeDasharray="4 4"
              dot={{
                r: 2,
                stroke: "#5E8F00",
                strokeWidth: 1,
                fill: "#131814",
              }}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  </div>

  {/* RIGHT CARD */}
  {/* RIGHT CARD */}
<div
  className="
    rounded-[10px]
    p-[2px]
    bg-gradient-to-b
    from-[#283E00]
    to-[#182500]
  "
>
  <div className="bg-[#131814] rounded-[8px] px-[22px] pt-[18px] pb-[16px]">

    {/* TITLE */}
    <h3 className="text-white text-[14px] leading-none mb-[10px] text-left">
      Cumulative ROI recovered ($K)
    </h3>

    {/* LEGEND */}
    <div className="flex items-center gap-2 mb-[10px]">

      <div className="w-[12px] h-[12px] bg-[#84D000]" />

      <p className="text-white text-[11px]">
        Cumulative savings
      </p>

    </div>

    {/* CHART */}
    <div className="w-full h-[290px]">

  <ResponsiveContainer width="100%" height="100%">

    <AreaChart
      data={[
        {
          month: "Jan",
          savings: 20,
        },
        {
          month: "Feb",
          savings: 45,
        },
        {
          month: "Mar",
          savings: 92,
        },
        {
          month: "Apr",
          savings: 140,
        },
        {
          month: "May",
          savings: 176,
        },
        {
          month: "Jun",
          savings: 210,
        },
      ]}
      margin={{
        top: 10,
        right: 8,
        left: -4,
        bottom: -6,
      }}
    >

      {/* GRADIENT */}
      <defs>

        <linearGradient
          id="roiGradient"
          x1="0"
          y1="0"
          x2="1"
          y2="0"
        >

          <stop
            offset="0%"
            stopColor="#77B900"
            stopOpacity={0.02}
          />

          <stop
            offset="45%"
            stopColor="#77B900"
            stopOpacity={0.12}
          />

          <stop
            offset="100%"
            stopColor="#77B900"
            stopOpacity={0.45}
          />

        </linearGradient>

      </defs>

      {/* GRID */}
      <CartesianGrid
        stroke="#243000"
        vertical={true}
        horizontal={true}
      />

      {/* X AXIS */}
      <XAxis
        dataKey="month"
        tick={{
          fill: "#54555A",
          fontSize: 11,
        }}
        tickLine={false}
        axisLine={{
          stroke: "#54555A",
          strokeWidth: 1,
        }}
      />

      {/* Y AXIS */}
      <YAxis
        domain={[0, 250]}
        ticks={[0, 50, 100, 150, 200, 250]}
        tickFormatter={(value) => `$${value}K`}
        tick={{
          fill: "#54555A",
          fontSize: 11,
        }}
        tickLine={false}
        axisLine={{
          stroke: "#54555A",
          strokeWidth: 1,
        }}
        width={50}
      />

      {/* AREA */}
      <Area
        type="monotone"
        dataKey="savings"
        stroke="none"
        fill="url(#roiGradient)"
        fillOpacity={1}
      />

      {/* LINE */}
      <Line
        type="monotone"
        dataKey="savings"
        stroke="#84D000"
        strokeWidth={2}
        dot={{
          r: 2,
          fill: "#84D000",
          strokeWidth: 0,
        }}
        activeDot={{
          r: 4,
          fill: "#84D000",
        }}
      />

    </AreaChart>

  </ResponsiveContainer>

</div>
  </div>
</div>

</div>
{/* BUSINESS REQUIREMENTS */}
<div className="mt-14 px-6">

  {/* SECTION TITLE */}
  <h3 className="text-white text-[18px] mb-5 pl-1 text-left">
    Business Requirements
  </h3>

  {/* TWO CARDS */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-[18px]">

    {/* LEFT CARD */}
    <div
      className="
        rounded-[20px]
        p-[2px]
        bg-gradient-to-b
        from-[#283E00]
        to-[#182500]
      "
    >

      <div
        className="
          bg-[#131814]
          rounded-[18px]
          px-[28px]
          pt-[24px]
          pb-[22px]
          h-full
        "
      >

        {/* CARD TITLE */}
        <h4 className="text-white text-[14px] mb-[18px]">
          Functional requirements
        </h4>

        {/* LIST */}
        <ul className="space-y-[16px]">

          {[
            "Real-time cost-per-pod and cost-per-namespace attribution",
            "Node utilization tracking with GPU/CPU/memory breakdown",
            "ROI score calculation per workload, team, and cluster",
            "Idle pod and zombie workload detection with auto-alerts",
            "Rightsizing recommendations with confidence scores",
            "Spot and preemptible node blending suggestions",
            "Multi-cluster and multi-cloud K8s cost consolidation",
            "Budget guardrails enforced at namespace level",
            "Chargeback and showback by team and project label",
            "Integration with Prometheus, Grafana, and Datadog",
          ].map((item, index) => (

            <li
              key={index}
              className="
                flex
                items-start
                gap-3
                text-[#F3F4F6]
                text-[12px]
                leading-[18px]
              "
            >

              {/* BULLET */}
              <div className="w-[5px] h-[5px] rounded-full bg-white mt-[7px] shrink-0" />

              {/* TEXT */}
              <span>
                {item}
              </span>

            </li>

          ))}

        </ul>

      </div>

    </div>

    {/* RIGHT CARD */}
    <div
      className="
        rounded-[20px]
        p-[2px]
        bg-gradient-to-b
        from-[#283E00]
        to-[#182500]
      "
    >

      <div
        className="
          bg-[#131814]
          rounded-[18px]
          px-[28px]
          pt-[24px]
          pb-[22px]
          h-full
        "
      >

        {/* CARD TITLE */}
        <h4 className="text-white text-[14px] mb-[18px]">
          Non-functional requirements
        </h4>

        {/* LIST */}
        <ul className="space-y-[16px]">

          {[
            "Sub-5-minute telemetry latency from cluster to dashboard",
            "Support for 500+ node clusters without performance degradation",
            "99.9% uptime SLA for cost data ingestion pipeline",
            "Role-based access control per namespace and team",
            "SOC 2 Type II and ISO 27001 compliant data handling",
            "Kubernetes versions 1.24+ and all major distributions",
            "Agent-based and agentless deployment options",
            "API-first architecture with Terraform and Helm support",
            "Data retention configurable from 90 days to 3 years",
            "Exportable reports in CSV, PDF, and webhook format",
          ].map((item, index) => (

            <li
              key={index}
              className="
                flex
                items-start
                gap-3
                text-[#F3F4F6]
                text-[12px]
                leading-[18px]
              "
            >

              {/* BULLET */}
              <div className="w-[5px] h-[5px] rounded-full bg-white mt-[7px] shrink-0" />

              {/* TEXT */}
              <span>
                {item}
              </span>

            </li>

          ))}

        </ul>

      </div>

    </div>

  </div>

</div>
{/* CORE USE CASES */}
<div className="mt-14 px-6">

  {/* TITLE */}
  <h3 className="text-white text-[18px] mb-5 text-left pl-6">
    Core use cases
  </h3>

  {/* TABS */}
 <div className="flex flex-wrap gap-[22px] mb-8 pl-6">

  {tabs.map((tab) => {

    const active = activeTab === tab;

    return (

      <button
        key={tab}
        onClick={() => setActiveTab(tab)}
        className={`
          relative
          w-[144px]
          h-[34px]
          border
          text-[12px]
          text-white
          overflow-hidden
          transition-all
          duration-300
          flex
          items-center
          justify-center

          ${
            active
              ? "bg-[#131814] border-[#77B900]"
              : "bg-[#131814] border-[#1C2C00]"
          }
        `}
        style={{
          boxShadow: active
            ? "0px 4px 4px rgba(119,185,0,0.30)"
            : "0px 4px 4px rgba(119,185,0,0.10)",
        }}
      >

        {/* ACTIVE OVERLAY */}
        {active && (
          <div
            className="
              absolute
              inset-0
              bg-[#77B90026]
            "
          />
        )}

        {/* TEXT */}
        <span className="relative z-10">
          {tab}
        </span>

      </button>

    );
  })}

</div>

  {/* CARDS */}
 {/* CARDS */}
<div className="relative w-full h-[560px]">

  {filteredCards.map((card, index) => {

    return (

      <div
        key={index}
        className={`
          absolute
          w-[260px]
          h-[170px]
          transition-all
          duration-500
          ${cardPositions[card.title]}
        `}
      >

        {/* OUTER BORDER */}
        <div
          className="
            rounded-[20px]
            p-[1px]
            h-full
            bg-[#77B90080]
          "
        >

          {/* INNER CARD */}
          <div
            className="
              bg-[#131814]
              rounded-[20px]
              h-full
              px-[18px]
              pt-[16px]
              pb-[14px]
              flex
              flex-col
            "
          >

            {/* TITLE */}
            <h4
              className="
                text-white
                text-[14px]
                leading-[1.2]
                mb-[12px]
                font-normal
              "
            >
              {card.title}
            </h4>

            {/* DESCRIPTION */}
            <p
              className="
                text-white
                text-[11px]
                leading-[16px]
                tracking-[0px]
                flex-1
              "
            >
              {card.description}
            </p>

            {/* TAG */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                h-[24px]
                px-[14px]
                rounded-full
                bg-[#77B900]
                text-black
                text-[11px]
                mt-[10px]
                self-start
                shadow-[0_4px_4px_rgba(119,185,0,0.30)]
              "
            >
              {card.tag}
            </div>

          </div>

        </div>

      </div>

    );
  })}

</div>

</div>

        

      </div>
      {/* K8s ROI MATURITY MODEL */}
<div className="mt-12 px-6">

  {/* TITLE */}
  <h2 className="text-white text-[22px] mb-6">
    K8s ROI maturity model
  </h2>

  {/* 4 CARDS IN SINGLE ROW */}
  <div className="grid grid-cols-4 gap-[14px]">

    {[
      {
        level: "L1",
        title: "Untracked",
        desc: "No cost visibility, manual kubectl queries, billing surprises",
      },
      {
        level: "L2",
        title: "Instrumented",
        desc: "Prometheus metrics, basic namespace costs, monthly review only",
      },
      {
        level: "L3",
        title: "ROI-aware",
        desc: "Real-time ROI scores, rightsizing active, chargeback operational",
      },
      {
        level: "L4",
        title: "Self-optimizing",
        desc: "AI-driven auto-remediation, zero waste policy, predictive ROI",
      },
    ].map((card, index) => (

      <div
        key={index}
        className="
          rounded-[20px]
          p-[2px]
          w-full
          h-[118px]
          bg-gradient-to-br
          from-[#182500]
          to-[#77B900]
        "
      >

        {/* INNER CARD */}
        <div
          className="
            w-full
            h-full
            rounded-[18px]
            bg-[#131814]
            px-[18px]
            pt-[14px]
          "
        >

          {/* LEVEL */}
          <p className="text-white text-[11px] mb-[4px]">
            {card.level}
          </p>

          {/* TITLE */}
          <h3
            className="
              text-white
              text-[15px]
              leading-none
              mb-[10px]
            "
          >
            {card.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
              text-[#D4D4D4]
              text-[11px]
              leading-[16px]
            "
          >
            {card.desc}
          </p>

        </div>

      </div>

    ))}

  </div>

</div>
{/* KEY FACTORS DRIVING K8s ROI COMPLEXITY */}
<div className="mt-[60px] px-6">

  {/* TITLE */}
  <h2 className="text-white text-[22px] mb-[18px]">
    Key factors driving K8s ROI complexity
  </h2>

  {/* CARDS */}
  <div className="grid grid-cols-4 gap-[18px]">

    {[
      {
        title: "Infrastructure factors",
        points: [
          "Over-provisioned resource requests",
          "No GPU-aware scheduling policy",
          "Multi-cluster cost fragmentation",
          "Mixed on-demand and spot node",
        ],
      },

      {
        title: "Workload factors",
        points: [
          "Zombie training jobs never terminated",
          "Dev sandboxes running 24/7 in prod clusters",
          "No resource limits on experiment pods",
          "Bursty inference traffic over-provisioned",
        ],
      },

      {
        title: "Organizational factors",
        points: [
          "No namespace ownership model",
          "ML engineers unaware of infrastructure cost",
          "Finance teams lack K8s vocabulary",
          "No cross-team ROI accountability",
        ],
      },

      {
        title: "Tooling gaps",
        points: [
          "Prometheus shows utilization, not cost",
          "No workload-to-business-value mapping",
          "Kubecost used in isolation, not unified",
          "No AI-specific cost unit ($/inference)",
        ],
      },
    ].map((card, index) => (

      <div
        key={index}
        className="
          rounded-[10px]
          p-[2px]
          h-[190px]
          bg-gradient-to-b
          from-[#283E00]
          to-[#182500]
        "
      >

        {/* INNER CARD */}
        <div
          className="
            h-full
            rounded-[8px]
            bg-[#131814]
            px-[16px]
            pt-[16px]
          "
        >

          {/* CARD TITLE */}
          <h3
            className="
              text-white
              text-[15px]
              leading-none
              mb-[16px]
            "
          >
            {card.title}
          </h3>

          {/* BULLETS */}
          <ul className="space-y-[6px]">

            {card.points.map((point, i) => (

              <li
                key={i}
                className="
                  flex
                  items-start
                  gap-[10px]
                  text-[#D1D5DB]
                  text-[13px]
                  leading-[18px]
                "
              >

                {/* BULLET */}
                <div
                  className="
                    w-[4px]
                    h-[4px]
                    rounded-full
                    bg-white
                    mt-[7px]
                    shrink-0
                  "
                />

                {/* TEXT */}
                <span>
                  {point}
                </span>

              </li>

            ))}

          </ul>

        </div>

      </div>

    ))}

  </div>

</div>
{/* ROI MODEL BY CLUSTER SCALE */}
<div className="mt-[60px] px-6">

  {/* TITLE */}
  <h2 className="text-white text-[22px] mb-[18px]">
    ROI model by cluster scale
  </h2>

  {/* INFO BOX */}
  <div
    className="
      w-full
      rounded-[10px]
      border
      border-[#2E4A00]
      bg-[#131814]
      px-[18px]
      py-[14px]
      mb-[20px]
    "
  >
    <p
      className="
        text-[#D1D5DB]
        text-[15px]
        leading-[28px]
      "
    >
      Organizations running AI workloads on Kubernetes waste an average
      of $18,000/month per 50-node cluster in idle and over-provisioned
      resources. The ROI Tracking module typically recovers 35–44% of
      this within the first 30 days of deployment.
    </p>
  </div>

  {/* TABLE WRAPPER */}
  <div
    className="
      w-full
      overflow-hidden
      rounded-[10px]
      border
      border-[#243600]
      bg-[#0D140F]
    "
  >

    {/* HEADER */}
    <div
      className="
        grid
        grid-cols-6
        h-[48px]
        border-b
        border-[#2A3B00]
        bg-[#08110B]
      "
    >

      {[
        "Cluster scale",
        "Monthly K8s spend",
        "Waste %",
        "Wasted $/mo",
        "ROI recovered",
        "Annual saving",
      ].map((head, index) => (

        <div
          key={index}
          className="
            flex
            items-center
            justify-center
            text-white
            text-[15px]
            font-medium
          "
        >
          {head}
        </div>

      ))}

    </div>

    {/* ROWS */}
    {[
      [
        "Small (10 nodes)",
        "$8,000",
        "40%",
        "$3,200",
        "38%",
        "$14,600",
      ],

      [
        "Medium (50 nodes)",
        "$42,000",
        "38%",
        "$15,960",
        "42%",
        "$80,400",
      ],

      [
        "Large (200 nodes)",
        "$175,000",
        "35%",
        "$61,250",
        "44%",
        "$324,000",
      ],

      [
        "Hyperscale (1000+ nodes)",
        "$900,000+",
        "30%",
        "$270,000+",
        "44%",
        "$1.4M+",
      ],
    ].map((row, rowIndex) => (

      <div
        key={rowIndex}
        className="
          grid
          grid-cols-6
          min-h-[58px]
          border-b
          border-[#243600]
          last:border-b-0
        "
      >

        {row.map((cell, cellIndex) => (

          <div
            key={cellIndex}
            className="
              flex
              items-center
              justify-center
              px-[10px]
              py-[12px]
              text-[#E5E7EB]
              text-[15px]
              text-center
              leading-[22px]
            "
          >
            {cell}
          </div>

        ))}

      </div>

    ))}

  </div>

</div>
{/* FAQ SECTION */}
<div className="mt-[60px] px-6 pb-[80px]">

  {/* TITLE */}
  <h2 className="text-white text-[22px] mb-[22px]">
    Frequently asked questions
  </h2>

  {/* FAQ LIST */}
  <div className="flex flex-col gap-[18px]">

    {[
      "What makes Kubernetes ROI tracking different from standard K8s cost monitoring?",

      "How does the module handle GPU cost attribution in multi-tenant K8s clusters?",

      "What Kubernetes distributions and versions are supported?",

      "How are ROI scores calculated for AI training workloads?",

      "Can the module integrate with existing FinOps tools like Kubecost or OpenCost?",

      "How does namespace-level budget enforcement work in practice?",

      "How long does it take to see meaningful ROI data after deployment?",

      "Does the module support cost allocation for shared infrastructure like ingress controllers and monitoring stacks?",
    ].map((question, index) => (

      <div
        key={index}
        className="
          w-full
          h-[64px]
          rounded-[8px]
          border
          border-[#243800]
          bg-[#131814]
          px-[24px]
          flex
          items-center
          justify-between
          transition-all
          duration-300
          hover:border-[#77B900]
        "
      >

        {/* QUESTION */}
        <p
          className="
            text-[#E5E7EB]
            text-[15px]
            leading-none
          "
        >
          {question}
        </p>

        {/* PLUS ICON */}
        <div
          className="
            text-white
            text-[16px]
            leading-none
          "
        >
          +
        </div>

      </div>

    ))}

  </div>

</div>
{/* SCHEDULE A DEMO */}
<div className="mt-[60px] px-6 pb-[100px]">

  {/* TITLE */}
  <h2 className="text-white text-[22px] mb-[20px]">
    Schedule a demo
  </h2>

  {/* MAIN CONTAINER */}
  <div
    className="
      w-full
      rounded-[12px]
      border
      border-[#2B4500]
      bg-[#131814]
      px-[44px]
      py-[34px]
      shadow-[0_0_30px_rgba(119,185,0,0.18)]
    "
  >

    <div className="grid grid-cols-2 gap-[70px]">

      {/* LEFT SIDE */}
      <div>

        {/* HEADING */}
        <h3
          className="
            text-white
            text-[20px]
            mb-[28px]
          "
        >
          Book your K8s ROI tracking demo
        </h3>

        {/* FORM */}
        <div className="flex flex-col gap-[16px]">

          {[
            {
              label: "Full name",
              placeholder: "your Name",
            },

            {
              label: "Work email",
              placeholder: "you@company.com",
            },

            {
              label: "Company",
              placeholder: "company name",
            },

            {
              label: "Cluster size",
              placeholder: "1 - 10 Nodes",
            },

            {
              label: "K8s distribution",
              placeholder: "Amazon EKS",
            },

            {
              label: "Primary goal",
              placeholder: "Name space cost attribution",
            },
          ].map((field, index) => (

            <div key={index}>

              {/* LABEL */}
              <p
                className="
                  text-[#E5E7EB]
                  text-[14px]
                  mb-[8px]
                "
              >
                {field.label}
              </p>

              {/* INPUT */}
              <input
                type="text"
                placeholder={field.placeholder}
                className="
                  w-full
                  h-[44px]
                  rounded-[8px]
                  border
                  border-[#243800]
                  bg-[#111714]
                  px-[16px]
                  text-[14px]
                  text-white
                  outline-none
                  placeholder:text-[#8A8F87]
                  focus:border-[#77B900]
                "
              />

            </div>

          ))}

          {/* BUTTON */}
          <button
            className="
              mt-[8px]
              w-full
              h-[44px]
              rounded-[8px]
              bg-[#77B900]
              text-black
              text-[15px]
              font-medium
              shadow-[0_0_18px_rgba(119,185,0,0.45)]
              transition-all
              duration-300
              hover:scale-[1.01]
            "
          >
            Request Demo ↗
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div>

        {/* HEADING */}
        <h3
          className="
            text-white
            text-[20px]
            mb-[28px]
          "
        >
          What you will get
        </h3>

        {/* BULLETS */}
        <ul className="space-y-[18px] mb-[42px]">

          {[
            "45-min live K8s ROI walkthrough",
            "Live namespace waste audit",
            "Pod rightsizing recommendations",
            "GPU cost attribution demo",
            "ROI score model for your cluster",
            "Multi-cluster consolidation setup",
            "Free 14-day trial offer",
          ].map((item, index) => (

            <li
              key={index}
              className="
                flex
                items-start
                gap-[10px]
                text-[#E5E7EB]
                text-[15px]
                leading-[22px]
              "
            >

              {/* BULLET */}
              <div
                className="
                  w-[4px]
                  h-[4px]
                  rounded-full
                  bg-white
                  mt-[9px]
                  shrink-0
                "
              />

              {item}

            </li>

          ))}

        </ul>

        {/* INFO BLOCKS */}
        <div className="space-y-[28px]">

          {/* BLOCK 1 */}
          <div>

            <p className="text-white text-[16px] mb-[6px]">
              Avg waste surfaced per demo
            </p>

            <p
              className="
                text-[#E5E7EB]
                text-[15px]
                leading-[24px]
              "
            >
              $38,000
              <br />
              in idle pods and over-provisioned nodes identified per
              session
            </p>

          </div>

          {/* BLOCK 2 */}
          <div>

            <p className="text-white text-[16px] mb-[6px]">
              Time to first ROI insight
            </p>

            <p
              className="
                text-[#E5E7EB]
                text-[15px]
                leading-[24px]
              "
            >
              48 hours
              <br />
              from agent deployment to first actionable waste finding
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>

    <KoreValueSection />
      
    </div>
  );
};

export default KubernetesROITracking;