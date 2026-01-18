import ErrorMessage from "./ErrorMessage";
import InputEmail from "./InputEmail";
import SubmitButton from "./SubmitButton";

const Form = () => {
  return (
    <form noValidate>
      <InputEmail />
      <SubmitButton />
      <ErrorMessage />
    </form>
  );
};

export default Form;
