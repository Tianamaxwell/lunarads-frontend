import Container from "@/components/snowui/Container";
import { Table, TInner, THead, TBody } from "@/components/snowui/Table";

export default function HistoryPage(){
  const rows = [
    ["Summer_Campaign_v2.mp4","88","Demo","Beauty","Jul 28, 2025"],
    ["Product_Launch_Ad.mp4","76","Lifestyle","Tech","Jul 25, 2025"],
    ["Brand_Story_Final.mp4","92","Story","E-commerce","Jul 22, 2025"],
  ];
  return (
    <Container>
      <h1 className="mb-6 text-2xl font-semibold">History</h1>
      <Table>
        <TInner>
          <THead headers={["Name","Score","Type","Industry","Date"]} />
          <TBody rows={rows} />
        </TInner>
      </Table>
    </Container>
  );
}