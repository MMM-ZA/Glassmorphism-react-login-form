import { useRef, useState } from "react";

const SimpleInput = (props) => {

   const nameInputRef = useRef();
   const [enteredName,setEnteredName] = useState('');
   const [enteredNameisValid, setEnteredNameisValid] = useState(false);

   const [enetedNameisTouched, setEnteredNameisTouched] = useState(false);


   const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
   };

   const submitFormHandler = (event) => {
    event.preventDefault();

    setEnteredNameisTouched(true);

    if (enteredName.trim() === '') {
       setEnteredNameisValid(false);
    return;
    }

    setEnteredNameisValid(true)

    console.log(enteredName)

    const eneteredValue = nameInputRef.current.value;
    console.log(eneteredValue)

    setEnteredName('');

   };

   const enteredInputIsInvalid = !enteredNameisValid && enetedNameisTouched;

   const nameInputClasses = enteredNameisValid ? 'form-control invalid' : 'form-control';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef}
         type='text'
         id='name'
         onChange={nameInputChangeHandler}
         value={enteredName}
        />
      </div>

      {enteredInputIsInvalid && <p className='error-text'>Name can't be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
