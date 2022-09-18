import { signInWithPopup } from "firebase/auth"
import React from 'react'
import { auth, provider } from "../firebase"
import { useNavigate } from "react-router-dom"


const Login = ({ setIsAuth }) => {
  const navigate = useNavigate()
  const loginInwihGoogle = () => {
    //Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate("/")
    })
  }

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={loginInwihGoogle}>Googleでログイン</button>
    </div>
  )
}

export default Login