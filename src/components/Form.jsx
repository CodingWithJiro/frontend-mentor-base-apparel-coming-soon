import { useState } from "react";
import ErrorMessage from "./ErrorMessage";
import InputEmail from "./InputEmail";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";

const Form = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");

  const isValid = (input) => {
    const emailRegex =
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_'+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i;
    const isEmpty = input.length === 0;
    const isCorrect = emailRegex.test(input);
    const isValidEmail = !isEmpty && isCorrect;

    return isValidEmail;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValid(email)) {
      setStatus("success");
    } else {
      setStatus("error");
    }

    // TODO: BORDER CHANGES TO RED WHEN IT IS IN ERROR, TO BE DONE AFTER TAILWIND CSS STYLING
  };
  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  const handleFocus = () => {
    setStatus("idle");
  };
  const handleBlur = () => {
    const isInvalid = !isValid(email);
    const isNotEmpty = email.length > 0;

    if (isInvalid && isNotEmpty) {
      // TODO: I WILL NOT AGGRESSIVELY SET THE STATUS TO ERROR THIS TIME BUT WILL ONLY TRIGGER RED BORDERS SO AS TO GUIDE THE USER THAT THE CURRENT EMAIL WHEN THEY LOSE FOCUS ON THE INPUT IS AN INVALID EMAIL. ONLY MAKE THE LOGO AND ERROR MESSAGE APPEAR WHEN THE USER ACTUALLY SUBMIT THE EMAIL INPUT
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <InputEmail
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        email={email}
        status={status}
      />
      <SubmitButton status={status} />
      {status === "error" && <ErrorMessage />}
      {status === "success" && <SuccessMessage />}
    </form>
  );
};

export default Form;
