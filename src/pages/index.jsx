import Porta from "@/components/Porta";
import Presente from "@/components/Presente";

export default function Home() {
  return (
    <>
      <div>
        <Porta selecionada={true} />
        <Porta selecionada={false} />
      </div>
    </>
  );
}
