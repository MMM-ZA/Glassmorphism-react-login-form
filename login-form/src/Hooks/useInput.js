import { useState } from "react";

const useInput = (ValidateValue) => {


  const [enteredValue,setEnteredValue] = useState('');
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const valueIsValid =  ValidateValue(enteredValue);
  const hasError = !valueIsValid && valueIsTouched;

     const inputChangeHandler = event => {
    setEnteredValue(event.target.value);
   };

   const inputBlurHandler = event => {
    setValueIsTouched(true);
   };

    const reset = () => {
      setEnteredValue('');
      setValueIsTouched(false);
    };



   return {
    value: enteredValue,
    isValid:valueIsValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    reset


   };

};



export default useInput;
