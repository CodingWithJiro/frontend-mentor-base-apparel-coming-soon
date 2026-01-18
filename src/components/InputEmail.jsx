const InputEmail = () => {
  return (
    <>
      <label className="sr-only" htmlFor="email">
        Email address
      </label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        required
      />
    </>
  );
};

export default InputEmail;
