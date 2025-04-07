import styles from './ComponentB.module.css'
import ComponentC from '../ComponentC/ComponentC'

function ComponentB(){
    return (
        <div className={styles.box}>
            <h1>ComponentB</h1>
            <ComponentC />
        </div>
    )
}

export default ComponentB