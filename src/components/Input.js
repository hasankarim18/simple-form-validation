import React, { useState, useEffect } from 'react'
import classes from './Input.module.css'



const Input = () => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)
    const [email, setEmail] = useState('')
    const [emailTouch, setEamilTouched] = useState(false)


    const isEnteredNameValid = enteredName.trim() !== ''
    const isNameInvalid = !isEnteredNameValid && enteredNameIsTouched
    const isEmailInvalid = !email.includes('@') && emailTouch
    const isEmailValid = email.includes('@')

    let formIsValid = false;
    if (isEnteredNameValid && isEmailValid) {
        formIsValid = true;
    }


    const nameBlurHandler = () => {
        setEnteredNameIsTouched(true)
    }

    const emailBlurHandler = () => {
        setEamilTouched(true)
    }
    const inputNameHandler = event => {
        setEnteredName(event.target.value)
    }

    const inputEmailHandler = event => {
        setEmail(event.target.value)
    }

    const onSubmitHandler = event => {
        event.preventDefault()

        if (enteredName.trim().length === 0 || !email.includes('@')) {
            return
        }
        console.log(enteredName, email)
        setEnteredName('')
        setEmail('')
        setEnteredNameIsTouched(false)
        setEamilTouched(false)
    }


    return (
        <form onSubmit={onSubmitHandler} >
            <div className={isNameInvalid ? `${classes.formControl} ${classes.invalid}` : classes.formControl} >
                <label htmlFor='name'>Your Name</label>
                <input
                    onChange={inputNameHandler}
                    value={enteredName}
                    onBlur={nameBlurHandler}
                    type='text' id='name' />
                {
                    isNameInvalid ?
                        <p className={classes['error-text']}> Name is not valid </p>
                        : ''
                }
            </div>

            <div className={isEmailInvalid ? `${classes.formControl} ${classes.invalid}` : classes.formControl} >
                <label htmlFor='email'>Your Name</label>
                <input
                    onChange={inputEmailHandler}
                    value={email}
                    onBlur={emailBlurHandler}
                    type='text' id='email' />
                {
                    isEmailInvalid ?
                        <p className={classes['error-text']}> Email is not valid </p>
                        : ''
                }
            </div>
            <div className="form-actions">
                <button type='submit' disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    )
}

export default Input