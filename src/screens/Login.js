import React from 'react'
import "./Login.css"
import { auth, provider } from "../Firebase"
import { Button } from '@material-ui/core'

function Login() {

    const signIn = () => {
      auth.signInWithPopup(provider).catch((error) =>
      alert(error.message));
    }

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" />
        </div>
        <Button onClick={signIn} >Sign In</Button>
    </div>
  )
}

export default Login