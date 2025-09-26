export function Table({ children }:{children:React.ReactNode}){
  return <div className="overflow-hidden rounded-[var(--su-radius)] border border-[var(--su-line)]">{children}</div>;
}
export function TInner({ children }:{children:React.ReactNode}){
  return <table className="w-full text-sm">{children}</table>;
}
export function THead({ headers }:{headers:string[]}) {
  return (
    <thead className="bg-slate-50 dark:bg-slate-900/40 text-left text-[var(--su-muted)]">
      <tr>{headers.map(h=><th key={h} className="px-5 py-3">{h}</th>)}</tr>
    </thead>
  );
}
export function TBody({ rows }:{rows:(string|number)[][]}){
  return (
    <tbody className="divide-y divide-[var(--su-line)]">
      {rows.map((r,i)=>(
        <tr key={i}>{r.map((c,j)=><td key={j} className="px-5 py-3">{c}</td>)}</tr>
      ))}
    </tbody>
  );
}