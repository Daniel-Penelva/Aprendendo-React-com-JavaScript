import styles from './Frase.module.css'

function Frase(){

    return(
        <div className={styles.fraseContainer}>
            <h2>Esse é um componente que contém uma frase</h2>
        </div>
    )
}

export default Frase