import styles from "../styles/Cartao.module.css"

interface CartaoProps {
    bgcolor?: string
    children?: any
}

export default function Cartao({bgcolor , children}: CartaoProps) {
    return (
        <div className={styles.cartao}
            style={{
                backgroundColor: bgcolor ?? "#fff"
            }}>
            {children}
        </div>
    )
}