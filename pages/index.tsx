import styles from "../styles/Formulario.module.css";
import Cartao from "../components/Cartao";

export default function Formulario() {   
    return (
    <div className={styles.formulario}>
      <div>       
        <Cartao bgcolor="#c0392c" >
          <h1>Porta dos desesperado</h1>
        </Cartao>
        <Cartao></Cartao>  
      </div>
      <div>
        <Cartao></Cartao>
        <Cartao bgcolor="#28a085"></Cartao>
      </div>
    </div>
  )
}
