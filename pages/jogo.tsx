import styles from "../styles/Jogo.module.css";
import Porta from "../components/Porta";
import { useState } from "react";
import { criarPortas, atulizarPortas } from "../function/portas"
import Link from "next/link";


export default function Jogo(){
  const [ portas, setPortas ] = useState(criarPortas(5, 2));

  const renderizarPortas = () => {
    return portas.map(porta =>{
      return <Porta key={porta.numero} value={porta} onChange={novaPorta => setPortas(atulizarPortas(portas, novaPorta))}/>
    })
  }
  
  return (
    <div id={styles.jogo}>
      <div className={styles.portas}>
        {renderizarPortas()}  
      </div> 
      <div className={styles.botoes}>
        <Link href="/" passHref>
          <button>Reiniciar</button>
        </Link>
      </div>             
    </div>    
  )
}