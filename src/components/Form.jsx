import { useState, useRef } from "react";
import ErrorMessage from "./ErrorMessage";
import InputEmail from "./InputEmail";
import SubmitButton from "./SubmitButton";
import SuccessMessage from "./SuccessMessage";
import Loading from "./Loading";

const Form = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [shouldShake, setShouldShake] = useState(false);
  const [errorType, setErrorType] = useState(null);
  const inputRef = useRef(null);

  const isValid = (input) => {
    const emailRegex =
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-.]*)[a-z0-9_'+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i;
    const isEmpty = input.length === 0;
    const isCorrect = emailRegex.test(input.trim());
    const isValidEmail = !isEmpty && isCorrect;

    return isValidEmail;
  };
  const getSavedEmails = () => {
    const savedEmails = JSON.parse(localStorage.getItem("emails")) || [];
    return savedEmails;
  };
  const getNormalizedEmail = (input) => {
    return input.trim().toLowerCase();
  };
  const saveEmail = (input) => {
    const savedEmails = getSavedEmails();
    const normalizedEmail = getNormalizedEmail(input);
    const updatedEmails = [...savedEmails, normalizedEmail];
    localStorage.setItem("emails", JSON.stringify(updatedEmails));
  };
  const isDuplicate = (input) => {
    const savedEmails = getSavedEmails();
    const normalizedEmail = getNormalizedEmail(input);
    return savedEmails.includes(normalizedEmail);
  };
  const getRandomDelay = () => {
    const delay = Math.ceil(Math.random() * 2000 + 1500);
    return delay;
  };
  const removeInputFocus = () => {
    inputRef.current.blur();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    removeInputFocus();

    if (!isValid(email)) {
      setStatus("error");
      setShouldShake(true);
      setErrorType("invalid");
      return;
    }

    if (isDuplicate(email)) {
      setStatus("error");
      setShouldShake(true);
      setErrorType("duplicate");
      return;
    }

    setStatus("loading");
    setTimeout(() => {
      saveEmail(email);
      setStatus("success");
    }, getRandomDelay());
  };
  const handleChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  const handleFocus = () => {
    if (status === "error") {
      setStatus("idle");
    }
  };
  const handleBlur = () => {
    const isInvalid = !isValid(email);
    const isNotEmpty = email.length > 0;

    if (isInvalid && isNotEmpty) {
      setStatus("warning");
    }
  };
  const handleAnimationEnd = () => {
    setShouldShake(false);
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
          onAnimationEnd={handleAnimationEnd}
          shouldShake={shouldShake}
          email={email}
          status={status}
          inputRef={inputRef}
        />
        <SubmitButton
          status={status}
          shouldShake={shouldShake}
          onAnimationEnd={handleAnimationEnd}
        />
        {status === "error" && <ErrorMessage error={errorType} />}
        {status === "success" && <SuccessMessage />}
      </form>
    </div>
  );
};

export default Form;
