import classes from '../module/Log.module.scss'
import {useState} from "react";
import Home from "./Home.jsx";


const Log = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isSignedIn, setIsSignedIn] = useState(false)
    const [validationMessage, setValidationMessage] = useState("")

    const usernameChangeHandler = (event) => {
        setUsername(event.target.value)
        setValidationMessage("")
    }

    const passwordChangeHandler = (event) => {
        setValidationMessage("")
        setPassword(event.target.value)
    }

    const signInHandler = (event) => {
        event.preventDefault()

        if (username.length < 6 ) {
            setValidationMessage("Username isn't Valid, Username must be at least 6 letter.")
            return;
        } else if (username.length === 0) {
            setValidationMessage("Username can't be empty.")
            return;
        }

        if (password.length < 8 && password.length > 0) {
            setValidationMessage("Password must be at least 8 characters.")
            return;
        } else if (password.length === 0) {
            setValidationMessage("Password can't be empty.")
            return;
        }

        setIsSignedIn(true)
    }

    const logoutHandler = () => {
        console.log('onLogout')
        setIsSignedIn(false)
    }

    return (
        <>

            {!isSignedIn ? <div className={classes["login-wrapper"]}>
            <h3>      welcome to Dekos Shop
                please sign up to visit our website</h3>
                <form className={classes["login-form"]}>
                    <h1>Sign In</h1>
                    <input onChange={usernameChangeHandler} placeholder={"Username"} className={classes["username"]}
                           type="text"/>
                    <input onChange={passwordChangeHandler} placeholder={"Password"} className={classes["password"]}
                           type="password"/>
                    <span className={classes['validation-error-message']}>{validationMessage}</span>
                    <button onClick={signInHandler} className={classes['sign-in-btn']}>Sign In</button>
                </form>
            </div> : <Home username={username} logoutHandler={logoutHandler}/>}
        </>
    );
}

export default Log

