import { useState } from "react";
import { PortaModel } from "../../model/portaModel";
import Porta from "../components/Porta";
import { log } from "console";
import { atualizarPortas, criarPortas } from "../../functions/portas";
export default function Home() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <h1>Formulário de início</h1>
      </div>
    </>
  );
}
