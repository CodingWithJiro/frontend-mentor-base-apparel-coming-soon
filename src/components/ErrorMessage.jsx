const ErrorMessage = () => {
  return (
    <p
      className="absolute -bottom-7 left-0 w-full px-5.5 text-sm tracking-tight text-(--RED-500)"
      id="email-error"
      role="alert"
    >
      Please provide a valid email
    </p>
  );
};

export default ErrorMessage;
