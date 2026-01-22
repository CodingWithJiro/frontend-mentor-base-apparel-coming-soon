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
      setStatus("warning");
    }
  };

  return (
    <div className="flex w-full items-center justify-center px-8 pb-10 md:justify-start md:px-[clamp(2rem,-7.5rem+19.7917vw,10.3125rem)]">
      <form
        className="relative flex w-full flex-col items-center justify-center md:max-w-111.25"
        onSubmit={handleSubmit}
        noValidate
      >
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
    </div>
  );
};

export default Form;
