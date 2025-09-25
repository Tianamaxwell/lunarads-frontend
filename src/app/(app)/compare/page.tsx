export default function ComparePage() {
  return (
    <section className="grid gap-8 md:grid-cols-[2fr,1fr]">
      <div className="rounded-2xl border hr border-[var(--line)] p-6">
        <div className="aspect-video rounded-xl border hr border-[var(--line)]" />
        <p className="mt-3 text-sm text-[var(--muted)]">Preview</p>
      </div>
      <div className="rounded-2xl border hr border-[var(--line)] p-6 text-center">
        <div className="mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full bg-white/10">
          <span className="text-3xl font-bold">88</span>
        </div>
        <div className="text-sm text-[var(--muted)]">Lunar Score</div>
      </div>

      <div className="md:col-span-2 rounded-2xl border hr border-[var(--line)] p-6">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {["Ad type: Demo","Tags: Lifestyle","Appeal: Pathos","Industry: Beauty"].map((t)=>(
            <div key={t} className="rounded-xl border hr border-[var(--line)] p-4 text-sm">{t}</div>
          ))}
        </div>
        <div className="mt-6 rounded-xl border hr border-[var(--line)] p-4 text-sm text-[var(--muted)]">
          Strong hook in first 3s. Try a more explicit CTA in the last third.
        </div>
      </div>
    </section>
  );
}