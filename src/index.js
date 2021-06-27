import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'
import {HashRouter} from 'react-router-dom'


//инициализируем firebase
firebase.initializeApp({
  apiKey: "AIzaSyCmciKAlqKvGbzLtiQc68rSgpWfhf43MFA",
  authDomain: "chat-firebase-42eec.firebaseapp.com",
  projectId: "chat-firebase-42eec",
  storageBucket: "chat-firebase-42eec.appspot.com",
  messagingSenderId: "482906442540",
  appId: "1:482906442540:web:4a5144eab850b76bd8ba89",
  measurementId: "G-PCYG3KQVHP"
});

export const Context = createContext(null) //создаем контект для легкого пробрасования данных
const auth = firebase.auth() //Получаем авторизован или нет
const firestore = firebase.firestore() //хранилище

ReactDOM.render(
    <Context.Provider value ={{
      firebase,
      auth,
      firestore
    }}>
      <HashRouter>
        <App />
      </HashRouter>
    </Context.Provider>,
  document.getElementById('root')
);
