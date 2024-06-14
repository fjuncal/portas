import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import Link from "next/link";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";
import styles from "../../../styles/Jogo.module.css";
import { useRouter } from "next/router";

export default function jogo() {
  const router = useRouter();
  const [portas, setPortas] = useState([]);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    setPortas(criarPortas(+router.query.portas, +router.query.temPresente));
  }, [router?.query]);

  useEffect(() => {
    const portas = +router.query.portas;
    const temPresente = +router.query.temPresente;

    const qtdePortasValidas = portas >= 3 && portas <= 100;
    const temPresenteValido = temPresente >= 1 && temPresente <= portas;

    setValido(qtdePortasValidas && temPresenteValido);
  }, [portas, router.query.portas, router.query.temPresente]);

  function renderizarPortas() {
    return portas.map((porta) => {
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
      <div id={styles.jogo}>
        <div className={styles.portas}>
          {valido ? renderizarPortas() : <h1>Valores inválidos</h1>}
        </div>

        <div className={styles.botoes}>
          <Link href={"/"} passHref={true}>
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>
    </>
  );
}
