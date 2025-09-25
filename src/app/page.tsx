export default function Page() {
  return (
    <section className="space-y-6">
      <h2 className="text-3xl font-bold">hello 👋</h2>
      <p className="opacity-80">
        This is the Week 3 Next.js + Tailwind skeleton. Supabase clients are wired in
        <code className="mx-1 rounded bg-white/10 px-1 py-0.5">lib/supabase.ts</code>.
      </p>
      <div className="rounded-xl border border-white/10 p-4">
        <p className="text-sm opacity-80">
          KPI check: You’re seeing a live “hello” page.
        </p>
      </div>
    </section>
  );
}