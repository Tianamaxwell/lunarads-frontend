export default function HistoryPage() {
  const rows = [
    ["Summer_Campaign_v2.mp4","88","Demo","Beauty","Jul 28, 2025"],
    ["Product_Launch_Ad.mp4","76","Lifestyle","Tech","Jul 25, 2025"],
    ["Brand_Story_Final.mp4","92","Story","Fashion","Jul 22, 2025"],
  ];
  return (
    <section>
      <h1 className="mb-6 text-2xl font-semibold">History</h1>
      <div className="overflow-hidden rounded-2xl border hr border-[var(--line)]">
        <table className="w-full text-sm">
          <thead className="bg-[var(--card)] text-left text-[var(--muted)]">
            <tr>
              {["Name","Score","Type","Industry","Date"].map(h=>(
                <th key={h} className="px-5 py-3">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y hr divide-[var(--line)]">
            {rows.map(r=>(
              <tr key={r[0]}>
                {r.map((c,i)=>(
                  <td key={i} className="px-5 py-3">{c}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}