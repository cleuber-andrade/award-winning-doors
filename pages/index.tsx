import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";
import EntradaNumerica from "../components/EntradaNumerica";
import Link from "next/link";
import { useState } from "react";

export default function Formulario() {  
  const [ qdtsPortas, setQdtsPortas ] = useState(3);
  const [ comPresente, setcomPresente ] = useState(1);    
  
    return (
    <div className={styles.formulario}>
      <div>       
        <Cartao bgcolor="#c0392c" >
          <h1>Porta Premiada</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Qtds Portas?" value={qdtsPortas} onChange={novaQtds => setQdtsPortas(novaQtds)}/>
        </Cartao>  
      </div>
      <div>
        <Cartao>
          <EntradaNumerica text="Porta com Presente?" value={comPresente} onChange={novaPortaComPresente => setcomPresente(novaPortaComPresente)}/>
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>          
        </Cartao>
      </div>
    </div>
  )
}
