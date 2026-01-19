const InputEmail = ({ onChange, onFocus, onBlur, email, status }) => {
  return (
    <>
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-invalid={status === "error"}
        aria-describedby={
          status === "error"
            ? "email-error"
            : status === "success"
              ? "email-success"
              : undefined
        }
        placeholder="Email Address"
      />
    </>
  );
};

export default InputEmail;
