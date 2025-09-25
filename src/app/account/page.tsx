export default function AccountPage() {
  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Plans</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {[
          {name:"Free", price:"$0", features:["5 uploads / mo","Basic scoring"], cta:"Current"},
          {name:"Pro", price:"$49", features:["100 uploads / mo","Advanced prediction","CSV export"], cta:"Start trial"},
          {name:"Enterprise", price:"Custom", features:["Unlimited","API access","SLA"], cta:"Contact sales"},
        ].map((p)=>(
          <div key={p.name} className="rounded-2xl border hr border-[var(--line)] p-6">
            <div className="text-lg font-medium">{p.name}</div>
            <div className="mt-1 text-3xl font-semibold text-[var(--brand)]">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              {p.features.map(f=> <li key={f}>• {f}</li>)}
            </ul>
            <button className="mt-6 w-full rounded-2xl bg-white/90 px-4 py-2 text-sm font-medium text-black hover:bg-white">
              {p.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
