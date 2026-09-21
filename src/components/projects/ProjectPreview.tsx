import { BookOpen, Cpu, Gamepad2, GraduationCap, LayoutDashboard, Search, ShoppingBag, Sparkles, TerminalSquare } from "lucide-react";

interface Props {
  variant: "store" | "learning";
}

export default function ProjectPreview({ variant }: Props) {
  if (variant === "learning") {
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

  return (
    <div className="relative h-full overflow-hidden bg-[#060b16] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(37,99,235,0.22),transparent_35%),radial-gradient(circle_at_10%_90%,rgba(14,165,233,0.12),transparent_40%)]" />
      <div className="relative p-4 sm:p-5">
        <div className="flex items-center gap-1.5 border-b border-white/10 pb-3">
          <span className="h-2 w-2 rounded-full bg-red-400/70" />
          <span className="h-2 w-2 rounded-full bg-amber-400/70" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          <div className="ml-3 flex-1 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 text-[8px] text-slate-500">utech-e-commerce.vercel.app</div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-500/15 text-blue-300">
              <ShoppingBag size={14} />
            </div>
            <span className="text-xs font-bold tracking-tight">UTECH Store</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <Search size={13} />
            <span className="text-[8px]">CART</span>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
          <div className="max-w-[70%]">
            <div className="text-[8px] font-semibold uppercase tracking-[0.2em] text-blue-300">Tech marketplace</div>
            <div className="mt-1.5 text-lg font-black leading-tight">Build your setup.</div>
            <div className="mt-1 text-[9px] leading-4 text-slate-500">Gaming, hardware and tech essentials in one storefront.</div>
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex items-center gap-1 rounded-lg bg-blue-600 px-2.5 py-1.5 text-[8px] font-semibold"><Sparkles size={10} /> Shop now</div>
            <div className="rounded-lg border border-white/10 px-2.5 py-1.5 text-[8px] text-slate-400">Explore</div>
          </div>
        </div>
        <div className="mt-3 grid grid-cols-3 gap-2">
          {[
            [Gamepad2, "Gaming"],
            [Cpu, "Hardware"],
            [ShoppingBag, "Essentials"],
          ].map(([Icon, label]) => {
            const CategoryIcon = Icon as typeof Gamepad2;
            return (
              <div key={label as string} className="rounded-xl border border-white/10 bg-white/[0.035] p-2.5">
                <CategoryIcon size={14} className="text-blue-300" />
                <div className="mt-2 text-[8px] font-semibold">{label as string}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
