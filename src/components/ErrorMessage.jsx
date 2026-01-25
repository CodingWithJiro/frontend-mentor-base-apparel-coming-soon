const ErrorMessage = ({ error }) => {
  return (
    <p
      className="md:tracking-tightest absolute -bottom-7 left-0 w-full px-5.5 text-sm tracking-tight text-(--RED-500) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out md:px-8"
      id="email-error"
      role="alert"
    >
      {error === "invalid" && "Please provide a valid email"}
      {error === "duplicate" && "Email already sent!"}
    </p>
  );
};

export default ErrorMessage;
