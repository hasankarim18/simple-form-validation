import React, { useState } from 'react'

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)


    const valueIsValid = validateValue(enteredValue)
    const hasError = !valueIsValid && isTouched

    const valueChangeHandler = event => {
        setEnteredValue(event.target.value)
    }

    const onBlurHandler = () => {
        setIsTouched(true)
    }


    return (
        {
            value: enteredValue, hasError: hasError, valueChangeHandler, onBlurHandler, valueIsValid
        }
    )
}

export default useInput