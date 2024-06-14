import { useState } from "react";
import { PortaModel } from "../../model/portaModel";
import Porta from "../components/Porta";
export default function Home() {
  const [p1, setp1] = useState(new PortaModel(1));

  return (
    <>
      <div>
        <Porta porta={p1} />
      </div>
    </>
  );
}
