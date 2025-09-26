import Container from "@/components/snowui/Container";
import { Card, CardBody, CardHeader } from "@/components/snowui/Card";
import Button from "@/components/snowui/Button";

export default function AccountPage(){
  const plans = [
    {name:"Free", price:"$0", features:["5 uploads / mo","Basic scoring"], cta:"Current", variant:"secondary" as const},
    {name:"Pro", price:"$49", features:["100 uploads / mo","Advanced prediction","CSV export"], cta:"Start trial", variant:"primary" as const},
    {name:"Enterprise", price:"Custom", features:["Unlimited","API access","SLA"], cta:"Contact sales", variant:"secondary" as const},
  ];
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-semibold">Plans</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map(p=>(
          <Card key={p.name}><CardHeader title={p.name} /><CardBody>
            <div className="text-3xl font-semibold text-blue-700">{p.price}</div>
            <ul className="mt-4 space-y-2 text-sm text-[var(--su-muted)]">
              {p.features.map(f=><li key={f}>• {f}</li>)}
            </ul>
            <Button variant={p.variant} className="mt-6 w-full">{p.cta}</Button>
          </CardBody></Card>
        ))}
      </div>
    </Container>
  );
}