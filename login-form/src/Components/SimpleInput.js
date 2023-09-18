
import useInput from '../Hooks/useInput';

const SimpleInput = (props) => {

  const {value:enteredValue,
      isValid: enteredNameisValid,
       hasError:nameInputHasError,
       inputChangeHandler:nameChangedHandler,
       inputBlurHandler:nameBlurHandler,
       reset:resetNameInput,
        } = useInput((value) => value.trim() !== '');

  const {value:enteredEmail,
      isValid: enteredEmailIsValid,
       hasError:emailInputHasError,
       inputChangeHandler:emailChangedHandler,
       inputBlurHandler:emailBlurHandler,
       reset:resetEmailInput,
        } = useInput((value) => value.includes('@'));


   let formIsValid = false ;

   if (enteredNameisValid && enteredEmailIsValid) {
    formIsValid = true
   }

   const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredNameisValid) {
    return;
    }

    console.log(enteredValue)

    resetNameInput();
    resetEmailInput();

    // setEnteredEmail ('');
    // setEnteredEmailisTouched(false)

   };

   const nameInputClasses = nameInputHasError ? 'form-control invalid' : 'form-control';

    const EmailInputClasses = emailInputHasError ? 'form-control invalid' : 'form-control';


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
         onChange={emailChangedHandler}
         onBlur={emailBlurHandler}
         value={enteredEmail}
        />
      </div>

      {emailInputHasError && <p className='error-text'>Please enter a vaild email!</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
