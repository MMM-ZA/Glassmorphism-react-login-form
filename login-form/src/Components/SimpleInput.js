import { useState } from "react";

const SimpleInput = (props) => {
   const [enteredName,setEnteredName] = useState('');
   const [enteredNameisValid, setEnteredNameisValid] = useState(false);


   const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
   };

   const submitFormHandler = (event) => {
    event.preventDefault();


    if (enteredName.trim() === '') {
       setEnteredNameisValid(false);
    return;
    }

    setEnteredNameisValid(true)

    console.log(enteredName)



   };

   const nameInputClasses = enteredNameisValid ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={submitFormHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} />
      </div>

      {!enteredNameisValid && <p className='error-text'>Name can't be empty!</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
