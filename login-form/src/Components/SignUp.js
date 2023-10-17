import React from 'react';
import useInput from "../Hooks/useInput";

const SignUp = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    inputChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput
  } = useInput((value) => value.trim() !== '');

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    inputChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastNameInput
  } = useInput((value) => value.trim() !== '');

  const {
    value: enteredEmailAdd,
    isValid: enteredEmailAddIsValid,
    hasError: emailAddInputHasError,
    inputChangeHandler: emailAddChangedHandler,
    inputBlurHandler: emailAddBlurHandler,
    reset: resetEmailAddInput,
  } = useInput((value) => value.includes('@'));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && enteredEmailAddIsValid) {
    formIsValid = true;
  }

  const signUpSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid) {
      return;
    }

    console.log(firstNameValue);


    resetFirstNameInput();
    resetLastNameInput();
    resetEmailAddInput();
  };

  const firstNameInputClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
  const lastNameInputClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
  const emailAddInputClasses = emailAddInputHasError ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={signUpSubmitHandler}>
      <div className='control-group'>
        <div className={firstNameInputClasses}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' onChange={firstNameChangedHandler}
          onBlur={firstNameBlurHandler} />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' onChange={lastNameChangedHandler}
          onBlur={lastNameBlurHandler}
          value={lastNameValue}/>
        </div>
      </div>
      <div className={emailAddInputClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input type='text' id='email' onChange={emailAddChangedHandler}
        onBlur={emailAddBlurHandler}
        value={enteredEmailAdd} />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SignUp;
