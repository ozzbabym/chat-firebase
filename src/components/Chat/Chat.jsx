import React, { useContext, useEffect, useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import styles from './Chat.module.css'
import {useAuthState} from 'react-firebase-hooks/auth'
import {Context} from '../../index'
import {useCollectionData} from 'react-firebase-hooks/firestore'
import firebase from 'firebase'
import Loader from '../Loader/Loader'

function Chat() {
    const {auth, firestore} = useContext(Context)
    const [user] = useAuthState(auth)
    const [text, setText] = useState('')
    const [messages, loading] = useCollectionData (
        firestore.collection('messages').orderBy('createdAt')
    )

    const sendMessage = async () => {
        firestore.collection('messages').add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        })
        setText('')
    }
    let messageRef = useRef(null)
    
    useEffect(()=>{
        if(messageRef.current){
            messageRef.current.scrollTo(0,9999)
        }
    },[messages])

    if(loading) return <Loader />

    if(!user) return <Redirect to={'/'}/>
    return (
        <div>
            <div className={styles.chatWrapper}>
                <div ref={messageRef} className={styles.windowChat}>
                    {messages.map((item, index)=> 
                        <div key={index} className={styles.message} style={{
                            border: item.uid === user.uid ? "4px solid green" : "4px solid blue",
                            marginLeft: item.uid === user.uid ? "auto" : "10px",
                        }}>
                            <div>
                                <img src={item.photoURL} alt="Картинка" />
                            </div>
                            <div style={{marginLeft: 10}}>
                                <div style={{fontSize: 30}}>{item.displayName}</div>
                                <div style={{fontSize: 20}}>{item.text}</div>
                            </div>
                        </div>)}
                </div>
            </div>
            <div className={styles.input}>
                <input onChange={e=>setText(e.currentTarget.value)} type="text" value={text} /><span onClick={sendMessage}>Отправить</span>
            </div>
        </div>
    )
}

export default Chat
