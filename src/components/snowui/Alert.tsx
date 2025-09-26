export default function Alert({ tone="info", children }:{tone?:"info"|"success"|"warn"|"danger"; children:React.ReactNode}){
  const map = {
    info:   "border-slate-300 bg-slate-50 text-slate-700",
    success:"border-green-300 bg-green-50 text-green-800",
    warn:   "border-orange-300 bg-orange-50 text-orange-800",
    danger: "border-red-300 bg-red-50 text-red-800",
  } as const;
  return <div className={`rounded-lg border px-4 py-2 text-sm ${map[tone]}`}>{children}</div>;
}