import styles from './ComponentA.module.css'
import ComponentB from '../ComponentB/ComponentB'
import React, { useState, createContext } from 'react'

export const UserContext = createContext();

function ComponentA(){
    const [user, setUser] = useState('Vu Vu');

    return (
        <div className={styles.box}>
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value = {user}>
                <ComponentB />
            </UserContext.Provider>
        </div>
    )
}

export default ComponentA