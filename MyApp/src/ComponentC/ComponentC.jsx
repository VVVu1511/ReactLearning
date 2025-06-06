import styles from './ComponentC.module.css'
import ComponentD from '../ComponentD/ComponentD'
import React , {useContext} from 'react'
import { UserContext } from '../ComponentA/ComponentA'

function ComponentC(){
    
    const user = useContext(UserContext);
    
    return (
        <div className={styles.box}>
            <h1>ComponentC</h1>
            <h2>{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    )
}

export default ComponentC