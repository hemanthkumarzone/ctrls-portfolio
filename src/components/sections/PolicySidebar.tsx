type Props = {
  activeSection: string;
  setActiveSection: (id: string) => void;
  setIsClicking: (val: boolean) => void;
};

const sections = [
  { id: "overview", label: "Overview" },
  { id: "data", label: "Data we collect" },
  { id: "usage", label: "How we use your data" },
  { id: "monitoring", label: "Monitoring data" },
  { id: "optimization", label: "Optimization data" },
  { id: "orchestration", label: "Orchestration data" },
  { id: "waste", label: "Waste elimination data" },
  { id: "sharing", label: "Sharing & disclosure" },
  { id: "retention", label: "Data retention" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "cookies", label: "Cookies" },
  { id: "children", label: "Children's privacy" },
  { id: "international", label: "International transfers" },
  { id: "changes", label: "Policy changes" },
  { id: "contact", label: "Contact us" },
];

const PolicySidebar = ({ activeSection, setActiveSection }: Props) => {
  return (
    <aside className="hidden lg:block w-[260px]">

      {/* STICKY + CONTROLLED SCROLL */}
      <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto pr-2 scrollbar-hide">

        <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
          On this page
        </p>

        <div className="flex flex-col gap-2">

          {sections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setActiveSection(item.id)} // ✅ click highlight
              className={`
                text-sm px-3 py-2 rounded-lg transition block
                ${activeSection === item.id
                  ? "bg-[#77B900]/20 text-white border-l-2 border-[#77B900]"
                  : "text-white/50 hover:bg-[#77B900]/10 hover:text-white"}
              `}
            >
              {item.label}
            </a>
          ))}

        </div>

        {/* CONTACT BOX */}
        <div className="mt-6 p-4 rounded-xl border border-[#1f2d00] bg-[#0F1800]">
          <p className="text-white/60 text-sm">
            Questions about this policy?
          </p>

          <p className="text-[#77B900] text-sm mt-2">
            admin@ctrls.co
          </p>
        </div>

      </div>

    </aside>
  );
};

export default PolicySidebar;