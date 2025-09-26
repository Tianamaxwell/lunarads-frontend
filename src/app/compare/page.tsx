import Container from "@/components/snowui/Container";
import { Card, CardBody, CardHeader } from "@/components/snowui/Card";
import Badge from "@/components/snowui/Badge";

export default function ComparePage(){
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-semibold">Compare</h1>
      <div className="grid gap-6 md:grid-cols-[2fr,1fr]">
        <Card><CardHeader title="Preview" /><CardBody>
          <div className="aspect-video rounded-[12px] border border-[var(--su-line)]" />
        </CardBody></Card>
        <Card><CardHeader title="Lunar Score" /><CardBody>
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-blue-600/10">
            <span className="text-3xl font-bold text-blue-700">88</span>
          </div>
          <p className="mt-3 text-sm text-[var(--su-muted)] text-center">Top 15% in hook strength</p>
        </CardBody></Card>
      </div>

      <Card className="mt-6"><CardHeader title="Attributes" /><CardBody>
        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {["Ad type: Demo","Tags: Lifestyle","Appeal: Pathos","Industry: E-commerce"].map(t=>(
            <div key={t} className="rounded-[12px] border border-[var(--su-line)] p-4 text-sm">{t}</div>
          ))}
        </div>
        <div className="mt-6 rounded-[12px] border border-[var(--su-line)] p-4 text-sm text-[var(--su-muted)]">
          Strong hook in first 3s. Try a clearer CTA in the last third.
        </div>
        <div className="mt-4 flex gap-2">
          <Badge>Hook +12%</Badge><Badge>Pacing +7%</Badge><Badge>Captions +4%</Badge>
        </div>
      </CardBody></Card>
    </Container>
  );
}