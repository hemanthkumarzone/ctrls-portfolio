const GovernanceSection = () => {
  return (
    <div className="w-full px-6 py-24 border-t border-[#1f2d00]">

      <div className="max-w-[1200px] mx-auto">

        {/* HEADER */}
        <p className="text-[#77B900] tracking-widest text-sm uppercase mb-4">
          Platform capability
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-white">
          Governance
        </h2>

        <p className="mt-6 text-white/60 max-w-[800px] leading-relaxed text-lg">
          A responsible AI FinOps platform requires robust governance across six
          core pillars — ensuring your AI investments are secure, compliant,
          transparent, and aligned with business outcomes.
        </p>


        {/* CARDS */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* ───────── CARD 1 ───────── */}
          <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#4DA3FF]/10 flex items-center justify-center">
                📊
              </div>
              <h3 className="text-lg font-semibold text-white">
                Data governance
              </h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Ensure quality, lineage, and responsible use of financial and
              operational data that powers AI models and cost decisions.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Data quality",
                "Data lineage",
                "Metadata standards",
                "Data residency",
                "Privacy controls",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-[#E6F0FA]/10 text-[#2B6CB0]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>


          {/* ───────── CARD 2 ───────── */}
          <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#FF8A4C]/10 flex items-center justify-center">
                🔐
              </div>
              <h3 className="text-lg font-semibold text-white">
                Security
              </h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Protect AI workloads, cost data, and infrastructure from
              unauthorized access, breaches, and policy violations.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "Access controls",
                "Encryption at rest",
                "Audit logging",
                "Threat detection",
                "Zero trust",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-[#FF8A4C]/10 text-[#FF8A4C]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>


          {/* ───────── CARD 3 ───────── */}
          <div className="bg-[#0B1200] border border-[#1f2d00] rounded-2xl p-6">

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-[#9B8CFF]/10 flex items-center justify-center">
                📋
              </div>
              <h3 className="text-lg font-semibold text-white">
                Regulatory compliance
              </h3>
            </div>

            <p className="text-white/60 text-sm leading-relaxed">
              Maintain adherence to financial regulations, AI-specific laws,
              and industry standards across all jurisdictions you operate in.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {[
                "GDPR / DPDPA",
                "SOC 2 / ISO 27001",
                "AI Act readiness",
                "Audit trails",
                "Licensing compliance",
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 rounded-full text-xs bg-[#9B8CFF]/10 text-[#9B8CFF]"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>

        </div>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* ───────── CARD 4 ───────── */}
  <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6">

    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-lg bg-[#77B900]/20 flex items-center justify-center">
        💰
      </div>
      <h3 className="text-lg font-semibold text-white">
        Cost governance
      </h3>
    </div>

    <p className="text-white/60 text-sm leading-relaxed">
      Define policies, guardrails, and accountability structures to manage AI
      spend against business value and defined thresholds.
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {[
        "Budget guardrails",
        "Tagging policies",
        "Cost ownership",
        "Anomaly thresholds",
        "Showback / chargeback",
      ].map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full text-xs bg-[#2F855A]/10 text-[#2F855A]"
        >
          {item}
        </span>
      ))}
    </div>

  </div>


  {/* ───────── CARD 5 ───────── */}
  <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6">

    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-lg bg-[#FF8A4C]/20 flex items-center justify-center">
        🤖
      </div>
      <h3 className="text-lg font-semibold text-white">
        AI model governance
      </h3>
    </div>

    <p className="text-white/60 text-sm leading-relaxed">
      Govern the AI models your platform deploys — from bias detection and
      explainability to version control and performance benchmarks.
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {[
        "Model explainability",
        "Bias & fairness",
        "Version control",
        "Drift monitoring",
        "Ethical guardrails",
      ].map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full text-xs bg-[#B7791F]/10 text-[#B7791F]"
        >
          {item}
        </span>
      ))}
    </div>

  </div>


  {/* ───────── CARD 6 ───────── */}
  <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6">

    <div className="flex items-center gap-4 mb-4">
      <div className="w-10 h-10 rounded-lg bg-[#A3E635]/20 flex items-center justify-center">
        📊
      </div>
      <h3 className="text-lg font-semibold text-white">
        Policy & risk management
      </h3>
    </div>

    <p className="text-white/60 text-sm leading-relaxed">
      Establish accountability frameworks, risk registers, and escalation paths
      across engineering, finance, and leadership stakeholders.
    </p>

    <div className="mt-4 flex flex-wrap gap-2">
      {[
        "Risk register",
        "Policy enforcement",
        "Cross-functional ownership",
        "Exception management",
        "Compliance KPIs",
      ].map((item) => (
        <span
          key={item}
          className="px-3 py-1 rounded-full text-xs bg-[#A3E635]/10 text-[#A3E635]"
        >
          {item}
        </span>
      ))}
    </div>

  </div>

</div>


{/* ───────── BOTTOM HIGHLIGHT ───────── */}

<div className="mt-12">
  <div className="bg-[#0F1800] border border-[#1f2d00] rounded-2xl p-6 flex items-start gap-4">

    <div className="text-[#77B900] text-2xl">💡</div>

    <div>
      <h4 className="text-lg font-semibold text-white">
        Built for enterprise-grade accountability
      </h4>

      <p className="text-white/60 mt-2 leading-relaxed">
        Our governance framework aligns with the FinOps Foundation's Governance,
        Policy & Risk capability — covering cloud, SaaS, AI/ML, and hybrid
        environments under a single unified policy layer.
      </p>
    </div>

  </div>
</div>

      </div>
    </div>
  );
};

export default GovernanceSection;