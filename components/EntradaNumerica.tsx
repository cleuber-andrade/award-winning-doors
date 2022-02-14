import styles from "../styles/EntradaNumerica.module.css"

interface EntradaNumericaProps {
    text: string
    value: number
    onChange: (newValue: number) => void
}

export default function EntradaNumerica({text, value, onChange}: EntradaNumericaProps) {
    const dec = () => onChange(value - 1)
    const inc = () => onChange(value + 1)

    return (
        <div className={styles.entradaNumerica}>
            <span className={styles.text}>{text}</span>
            <span className={styles.value}>{value}</span>
            <div className={styles.botoes}>
                <button className={styles.btn} onClick={dec}>-</button>
                <button className={styles.btn} onClick={inc}>+</button>
            </div>
        </div>
    )
}