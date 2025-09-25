export default function UploadPage() {
  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Upload your ad</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Drop a video or paste a link to score it before you spend.</p>
      </div>

      <div className="rounded-2xl border hr border-[var(--line)] bg-[var(--card)]/50 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border hr border-[var(--line)] p-8 text-center">
            <div className="text-2xl mb-2">⬆️</div>
            <div className="text-sm text-[var(--muted)]">Drag & drop video here</div>
          </div>
          <div className="space-y-3">
            <label className="text-sm text-[var(--muted)]">TikTok / URL</label>
            <input
              placeholder="https://www.tiktok.com/@user/video/..."
              className="w-full rounded-xl border hr border-[var(--line)] bg-transparent px-4 py-3 outline-none"
            />
            <div className="flex gap-3">
              <select className="w-40 rounded-xl border hr border-[var(--line)] bg-transparent px-3 py-2 text-sm text-[var(--muted)]">
                <option>Platform</option><option>TikTok</option><option>Meta</option><option>YouTube</option>
              </select>
              <select className="w-40 rounded-xl border hr border-[var(--line)] bg-transparent px-3 py-2 text-sm text-[var(--muted)]">
                <option>Industry</option><option>Beauty</option><option>Fashion</option><option>Tech</option>
              </select>
            </div>
            <button className="rounded-2xl bg-white/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-white">
              Score creative
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-2xl border hr border-[var(--line)] p-6">
        <div className="mb-4 text-sm font-medium">Recent uploads</div>
        <div className="divide-y hr divide-[var(--line)] text-sm">
          {[
            ["Summer_Campaign_v2.mp4", "Complete", "88"],
            ["Product_Launch_Ad.mp4", "Processing", "—"],
            ["Brand_Story_Final.mp4", "Complete", "76"],
          ].map(([name, status, score]) => (
            <div key={name} className="flex items-center justify-between py-3">
              <div className="truncate">{name}</div>
              <div className="flex items-center gap-6">
                <span className="text-[var(--muted)]">{status}</span>
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs">
                  {score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
