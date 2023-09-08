import { useEffect, useState } from "react";

const SimpleInput = (props) => {

   const [enteredName,setEnteredName] = useState('');
   const [enetedNameisTouched, setEnteredNameisTouched] = useState(false);
   const [formIsValid, setFormIsValid] = useState(false);

   const enteredNameisValid = enteredName.trim() !== '';
   const enteredInputIsInvalid = !enteredNameisValid && enetedNameisTouched;

   useEffect(() => {
    if (enteredNameisValid)
    {setFormIsValid(true);
    } else {
      setFormIsValid(false);
    }
   }, [enteredNameisValid])

   const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
   };

   const nampeInputBlurHandler = event => {
    setEnteredNameisTouched(true)

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
         onBlur={nampeInputBlurHandler}
         value={enteredName}
        />
      </div>

      {enteredInputIsInvalid && <p className='error-text'>Name can't be empty!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
