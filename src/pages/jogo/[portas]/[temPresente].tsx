import { useEffect, useState } from "react";
import Porta from "../../../components/Porta";
import Link from "next/link";
import { atualizarPortas, criarPortas } from "../../../../functions/portas";
import styles from "../../../styles/Jogo.module.css";
import { useRouter } from "next/router";

export default function jogo() {
  const [portas, setPortas] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setPortas(criarPortas(+router.query.portas, +router.query.temPresente));
  }, [router?.query]);
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
        <div className={styles.portas}>{renderizarPortas()}</div>

        <div className={styles.botoes}>
          <Link href={"/"} passHref={true}>
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>
    </>
  );
}
