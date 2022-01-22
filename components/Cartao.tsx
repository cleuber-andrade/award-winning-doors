import styles from "../styles/Cartao.module.css";

export default function Cartao(props){
  return (
    <div className={styles.cartao} style={{
      backgroundColor: props.bgcolor ?? "#fff" }}>
      <h1>Fomulário de Início</h1>
    </div>
  )
}