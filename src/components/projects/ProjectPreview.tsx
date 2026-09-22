import { BookOpen, GraduationCap, LayoutDashboard, TerminalSquare } from "lucide-react";

interface Props {
  variant: "learning";
}

export default function ProjectPreview({ variant }: Props) {
  return (
    <div className="relative h-full overflow-hidden bg-[#07101f] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.2),transparent_40%)]" />
      <div className="relative flex h-full">
        <aside className="hidden w-20 border-r border-white/10 bg-black/20 p-3 sm:block">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300">
            <GraduationCap size={18} />
          </div>
          <div className="mt-8 space-y-3">
            {[LayoutDashboard, BookOpen, TerminalSquare].map((Icon, index) => (
              <div key={index} className={`flex h-9 items-center justify-center rounded-xl ${index === 0 ? "bg-blue-500/15 text-blue-300" : "text-slate-500"}`}>
                <Icon size={16} />
              </div>
            ))}
          </div>
        </aside>
        <div className="min-w-0 flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-300">Utech Learning Hub</div>
              <div className="mt-1 text-sm font-semibold">Learning dashboard</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[9px] text-slate-400">ONLINE</div>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {[
              ["12", "Courses"],
              ["05", "Completed"],
              ["48h", "Learning"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-xl border border-white/10 bg-white/[0.04] p-2.5">
                <div className="text-sm font-bold">{value}</div>
                <div className="mt-1 text-[8px] uppercase tracking-wider text-slate-500">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="flex items-center justify-between text-[9px]">
              <span className="font-semibold">Linux Essentials</span>
              <span className="text-emerald-300">35%</span>
            </div>
            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[35%] rounded-full bg-emerald-400" />
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <div className="rounded-xl border border-blue-400/10 bg-blue-500/5 p-3">
              <div className="text-[9px] text-blue-300">NETWORKING</div>
              <div className="mt-1 text-xs font-semibold">Topology Lab</div>
            </div>
            <div className="rounded-xl border border-emerald-400/10 bg-emerald-500/5 p-3">
              <div className="text-[9px] text-emerald-300">SECURITY</div>
              <div className="mt-1 text-xs font-semibold">Cyber Lab</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}