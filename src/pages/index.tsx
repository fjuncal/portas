import { useState } from "react";
import { PortaModel } from "../../model/portaModel";
import Porta from "../components/Porta";
import { log } from "console";
export default function Home() {
  const [p1, setP1] = useState(new PortaModel(1));
  const [texto, setTexto] = useState("...");

  return (
    <>
      <div>
        <Porta value={p1} onChange={(novaPorta) => setP1(novaPorta)} />
      </div>
    </>
  );
}
