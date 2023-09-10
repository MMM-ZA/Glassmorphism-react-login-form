import { useState } from "react";

const SimpleInput = (props) => {

   const [enteredName,setEnteredName] = useState('');
   const [enteredNameisTouched, setEnteredNameisTouched] = useState(false);
   const [enteredEmail,setEnteredEmail] = useState('');
   const [enteredEmailisTouched, setEnteredEmailisTouched] = useState(false);

   const enteredNameisValid = enteredName.trim() !== '';
   const enteredInputIsInvalid = !enteredNameisValid && enteredNameisTouched;




   let formIsValid = false ;

   if (enteredNameisValid) {
    formIsValid = true
   }

   const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
   };
   const emailInputChangeHandler = event => {
    setEnteredEmail(event.target.value);
   };


   const nameInputBlurHandler = event => {
    setEnteredNameisTouched(true)

   }
   const emailInputBlurHandler = event => {
    setEnteredEmailisTouched(true)

   }

   const submitFormHandler = (event) => {
    event.preventDefault();

    setEnteredNameisTouched(true);

    if (!enteredNameisValid) {
    return;
    }

    console.log(enteredName)

    setEnteredName('');
    setEnteredNameisTouched(false)

   };

   const nameInputClasses = enteredNameisValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         type='text'
         id='name'
         onChange={nameInputChangeHandler}
         onBlur={nameInputBlurHandler}
         value={enteredName}
        />
      </div>


      {enteredInputIsInvalid && <p className='error-text'>Name can't be empty!</p>}

      <div className={nameInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
         type='text'
         id='email'
         onChange={emailInputChangeHandler}
         onBlur={emailInputBlurHandler}
         value={enteredEmail}
        />
      </div>


      {enteredInputIsInvalid && <p className='error-text'>Please enter a vaild email!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
