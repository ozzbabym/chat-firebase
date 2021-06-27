import React, { useContext } from 'react'
import { Context } from '../..'
import styles from './Registration.module.css'
import firebase from 'firebase'
import { Redirect } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'



function Registration() {
    const {auth} = useContext(Context) //Авторизован или нет
    //далее регистрируемся в Гугле
    const login = async() => {
        const provider = await new firebase.auth.GoogleAuthProvider()
        await auth.signInWithPopup(provider)
    }

    // получаем авторизовался юзер или нет
    const [user] = useAuthState(auth)
    //если не авторизован редиректим на главную страницу
    if(user) return <Redirect to={'/chat'} />

    return (
        <div className={{}}>
            <div className={styles.registrationWrapper}>
                <div>
                    <div>Войти с помощью Google Account</div>
                    <div><div onClick={login} className={styles.button}>Войти</div></div>
                </div>    
            </div>
        </div>
    )
}

export default Registration
