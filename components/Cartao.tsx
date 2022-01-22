import styles from "../styles/Cartao.module.css";

interface CartaoProps {
  bgcolor?: string
}

export default function Cartao(props: CartaoProps){
  return (
    <div className={styles.cartao} style={{
      backgroundColor: props.bgcolor ?? "#fff" }}>
      <h1>Fomulário de Início</h1>
    </div>
  )
}