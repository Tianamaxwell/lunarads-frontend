import { redirect } from "next/navigation";
import { createAdminClient } from "@/lib/supabase";

export async function submitCreative(formData: FormData) {
  "use server";

  const email = String(formData.get("email") ?? "").trim();
  const url = String(formData.get("url") ?? "").trim();
  const platform = String(formData.get("platform") ?? "");
  const industry = String(formData.get("industry") ?? "");

  if (!email || !url) redirect("/?error=missing");

  const supa = createAdminClient();
  const { error } = await supa.from("submissions").insert({ email, url, platform, industry });
  if (error) redirect("/?error=insert");

  redirect("/?submitted=1");
}

export default function UploadPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const ok = searchParams?.submitted === "1";
  const err = searchParams?.error;

  return (
    <section className="space-y-8">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">Upload your ad</h1>
        <p className="mt-2 text-sm text-[var(--muted)]">Drop a video or paste a link to score it before you spend.</p>
      </div>

      {ok && (
        <div className="rounded-xl border border-[var(--line)] bg-[var(--card)]/50 p-3 text-sm">
          ✅ Got it — we saved your submission.
        </div>
      )}
      {err && (
        <div className="rounded-xl border border-[var(--line)] bg-[var(--card)]/50 p-3 text-sm">
          ⚠️ Something went wrong ({String(err)}). Try again.
        </div>
      )}

      <form action={submitCreative} className="rounded-2xl border border-[var(--line)] bg-[var(--card)]/50 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-[var(--line)] p-8 text-center">
            <div className="text-2xl mb-2">⬆️</div>
            <div className="text-sm text-[var(--muted)]">Drag & drop video here</div>
          </div>

          <div className="space-y-3">
            <label className="text-sm text-[var(--muted)]">Email</label>
            <input
              name="email" type="email" required placeholder="you@brand.com"
              className="w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 outline-none"
            />

            <label className="mt-4 text-sm text-[var(--muted)]">TikTok / URL</label>
            <input
              name="url" required placeholder="https://www.tiktok.com/@user/video/..."
              className="w-full rounded-xl border border-[var(--line)] bg-transparent px-4 py-3 outline-none"
            />

            <div className="mt-2 flex gap-3">
              <select name="platform" className="w-40 rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 text-sm text-[var(--muted)]">
                <option value="">Platform</option><option>TikTok</option><option>Meta</option><option>YouTube</option>
              </select>
              <select name="industry" className="w-40 rounded-xl border border-[var(--line)] bg-transparent px-3 py-2 text-sm text-[var(--muted)]">
                <option value="">Industry</option><option>Beauty</option><option>Fashion</option><option>Tech</option>
              </select>
            </div>

            <button type="submit" className="mt-2 rounded-2xl bg-white/90 px-5 py-2.5 text-sm font-medium text-black hover:bg-white">
              Score creative
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}
