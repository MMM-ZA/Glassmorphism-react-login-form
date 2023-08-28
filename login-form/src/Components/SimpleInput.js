import { useState } from "react";

const SimpleInput = (props) => {
   const [enteredName,setEnteredName] = useState('');
  //  const [enteredNameisValid, setEnteredNameisValid] = useState(true);


   const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
   };

   const submitFormHandler = (event) => {
    event.preventDefault();

    console.log(enteredName)


   };


  return (
    <form onSubmit={submitFormHandler}>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
