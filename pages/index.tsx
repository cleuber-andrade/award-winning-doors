import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";
import Link from "next/link";

export default function Formulario() {   
    return (
    <div className={styles.formulario}>
      <div>       
        <Cartao bgcolor="#c0392c" >
          <h1>Porta Premiada</h1>
        </Cartao>
        <Cartao></Cartao>  
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/4/2`} passHref>
            <h2 style={{ flex: "1" }}>Iniciar</h2>
          </Link>          
        </Cartao>
      </div>
    </div>
  )
}
