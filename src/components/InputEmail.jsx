const InputEmail = ({ onChange, onFocus, onBlur, email, status }) => {
  const getInputStyle = () => {
    if (status === "error" || status === "warning") {
      return "border-(--RED-500) outline-2 outline-solid -outline-offset-2 outline-(--RED-500)";
    } else {
      return "border-(--PINK-400)";
    }
  };
  const getAriaDescribedBy = () => {
    if (status === "error") {
      return "email-error";
    }
    if (status === "success") {
      return "email-success";
    }
  };

  return (
    <>
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        className={`w-full rounded-full border border-solid ${getInputStyle()} px-5.5 py-[0.7rem] placeholder:text-sm placeholder:text-(--PINK-400) placeholder:opacity-50 focus-visible:outline-hidden`}
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        aria-invalid={status === "error"}
        aria-describedby={getAriaDescribedBy()}
        placeholder="Email Address"
      />
    </>
  );
};

export default InputEmail;
