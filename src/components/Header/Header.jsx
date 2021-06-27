import React, { useContext } from 'react'
import styles from './Header.module.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../../index'

function Header() {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)


    return (
        <div className={styles.header}>
            <div>Чат для всех</div>
            <div>{user 
                ?<div onClick={()=>auth.signOut()} className={styles.button}>Выйти</div>
                :<div className={styles.button}>Войти</div>}
            </div>
        </div>
    )
}

export default Header
