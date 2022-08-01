import React, { useState, useEffect } from 'react'
import classes from './Input.module.css'



const Input = () => {

    const [enteredName, setEnteredName] = useState('')
    const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false)


    const isEnteredNameValid = enteredName.trim() !== ''
    const isNameInvalid = !isEnteredNameValid && enteredNameIsTouched

    let formIsValid = false;
    if (isEnteredNameValid) {
        formIsValid = true;
    }


    const onBlurHandler = () => {
        setEnteredNameIsTouched(true)
    }

    const inputNameHandler = event => {
        setEnteredName(event.target.value)
    }

    const onSubmitHandler = event => {
        event.preventDefault()

        if (enteredName.trim().length === 0) {
            return
        }

        console.log(enteredName)

        setEnteredName('')
        setEnteredNameIsTouched(false)
    }


    return (
        <form onSubmit={onSubmitHandler} >
            <div className={isNameInvalid ? `${classes.formControl} ${classes.invalid}` : classes.formControl} >
                <label htmlFor='name'>Your Name</label>
                <input
                    onChange={inputNameHandler}
                    value={enteredName}
                    onBlur={onBlurHandler}
                    type='text' id='name' />
                <div>
                    <div>
                        {
                            isNameInvalid ?
                                <p className={classes['error-text']}> Name is not valid </p>
                                : ''
                        }

                    </div>


                </div>
            </div>
            <div className="form-actions">
                <button disabled={!formIsValid} >Submit</button>
            </div>
        </form>
    )
}

export default Input