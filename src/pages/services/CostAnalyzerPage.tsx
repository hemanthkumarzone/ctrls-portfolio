export default function CostAnalyzerPage() {
  return (
    <div className="bg-[#020a05] min-h-screen text-white">
      
      {/* HERO */}
      <section className="pt-28 pb-20 px-6">
        <div className="max-w-[1100px] mx-auto">

          <p className="text-xs uppercase tracking-widest text-green-400 mb-3">
            Service — Cost Analyzer
          </p>

          <h1 className="text-5xl leading-tight font-semibold mb-6">
            Know exactly where every AI dollar goes —{" "}
            <span className="text-green-400 italic">before it's spent</span>
          </h1>

          <p className="text-white/60 max-w-2xl mb-10">
            Cost Analyzer gives your engineering, finance, and FinOps teams a
            single, real-time source of truth.
          </p>

        </div>
      </section>

    </div>
  );
}