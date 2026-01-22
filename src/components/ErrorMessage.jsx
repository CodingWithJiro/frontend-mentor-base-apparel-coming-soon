const ErrorMessage = () => {
  return (
    <p
      className="md:tracking-tightest absolute -bottom-7 left-0 w-full px-5.5 text-sm tracking-tight text-(--RED-500) md:px-8"
      id="email-error"
      role="alert"
    >
      Please provide a valid email
    </p>
  );
};

export default ErrorMessage;
