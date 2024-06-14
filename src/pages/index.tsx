import { useState } from "react";
import { PortaModel } from "../../model/portaModel";
import Porta from "../components/Porta";
import { log } from "console";
import { atualizarPortas, criarPortas } from "../../functions/portas";
export default function Home() {
  const [portas, setPortas] = useState(criarPortas(4, 3));

  function renderizarPortas() {
    return portas.map((porta) => {
      console.log(porta.numero);

      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }
  return (
    <>
      <div style={{ display: "flex" }}>{renderizarPortas()}</div>
    </>
  );
}
