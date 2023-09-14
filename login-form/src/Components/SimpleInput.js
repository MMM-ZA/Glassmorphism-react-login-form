import { useState } from "react";
import useInput from '../Hooks/useInput';

const SimpleInput = (props) => {

  const {value:enteredValue,
      isValid: enteredNameisValid,
       hasError:nameInputHasError,
       inputChangeHandler:nameChangedHandler,
       inputBlurHandler:nameBlurHandler,
       reset:resetNameInput,
        } = useInput(value => value.trim() !== '');

   const [enteredEmail,setEnteredEmail] = useState('');
   const [enteredEmailisTouched, setEnteredEmailisTouched] = useState(false);


  //  const enteredInputIsInvalid = !enteredNameisValid && enteredNameisTouched;

   const enteredEmailIsValid = enteredEmail.includes('@');
   const enteredEmailInputIsInvalid = !enteredEmailIsValid && enteredEmailisTouched;


   let formIsValid = false ;

   if (enteredNameisValid && enteredEmailIsValid) {
    formIsValid = true
   }


   const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
   };

   const emailInputBlurHandler = event => {
    setEnteredEmailisTouched(true)

   }

   const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredNameisValid) {
    return;
    }

    console.log(enteredValue)

    resetNameInput();

    setEnteredEmail ('');
    setEnteredEmailisTouched(false)

   };

   const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

    const EmailInputClasses = enteredEmailIsValid ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         type='text'
         id='name'
         onChange={nameChangedHandler}
         onBlur={nameBlurHandler}
         value={enteredValue}
        />
      </div>


      {nameInputHasError && <p className='error-text'>Name can't be empty!</p>}

      <div className={EmailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
         type='text'
         id='email'
         onChange={emailInputChangeHandler}
         onBlur={emailInputBlurHandler}
         value={enteredEmail}
        />
      </div>

      {enteredEmailInputIsInvalid && <p className='error-text'>Please enter a vaild email!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
