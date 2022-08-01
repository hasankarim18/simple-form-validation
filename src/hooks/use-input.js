import React, { useReducer } from 'react'

const initialState = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    if (action.type === 'INPUT') {

        return {
            ...state,
            value: action.payload,
            isTouched: state.isTouched
        }
    }


    if (action.type === 'BLUR') {
        return {
            ...state,
            isTouched: true
        }

    }
    return state
}


const useInput = (validateValue) => {

    const [inputState, dispatch] = useReducer(inputReducer, initialState)



    const valueIsValid = validateValue(inputState.value)
    const hasError = !valueIsValid && inputState.isTouched

    const valueChangeHandler = event => {
        dispatch({
            type: 'INPUT',
            payload: event.target.value
        })
    }

    const onBlurHandler = () => {
        dispatch({
            type: "BLUR"
        })
    }


    return (
        {
            value: inputState.value, hasError: hasError, valueChangeHandler, onBlurHandler, valueIsValid
        }
    )
}

export default useInput