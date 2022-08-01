import React, { useEffect, useRef, useState } from 'react'





const SimpleInput = (props) => {

  const nameInputRef = useRef()

  const [enterenName, setEnteredName] = useState('')
  const [enterednNameIsValid, setEnteredNameIsValid] = useState(false)
  const [enteredNameTouched, setEnteredNameTouched] = useState(false)

  useEffect(() => {
    if (enterednNameIsValid) {
      console.log('name is valid')
    }
  }, [enterednNameIsValid])


  const nameChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(false)
    if (enterenName.trim().length === 0) {
      setEnteredNameIsValid(false)
      return
    }
  }



  const formSubmissionHandler = event => {
    event.preventDefault()
    setEnteredNameTouched(true)

    if (enterenName.trim().length === 0) {

      setEnteredNameIsValid(false)
      return
    }
    setEnteredNameIsValid(true)
    console.log(enterenName)


    // console.log(nameInputRef.current.value)
    //   nameInputRef.current.value = '' // not ideal , dont manupulate the dom
    // setEnteredName('')
  }

  const enterednNameIsInValid = !enterednNameIsValid && enteredNameTouched

  const nameInputClasses = enterednNameIsInValid ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler} >
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          ref={nameInputRef}
          value={enterenName}
          onChange={nameChangeHandler}
          onBlur={nameInputBlurHandler}
          type='text' id='name' />
        <div>
          {
            enterednNameIsInValid ? <p className="error-text">Name must not be empty</p> : ""
          }

        </div>
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
