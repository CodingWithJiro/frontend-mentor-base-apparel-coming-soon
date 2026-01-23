const MainText = () => {
  return (
    <>
      <h2 className="mb-4 px-4 text-center text-[2.5rem]/[1.05] font-semibold tracking-[0.275em] text-(--GREY-900) uppercase motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out md:mb-5 md:px-[clamp(2rem,-7.4286rem+19.6429vw,10.25rem)] md:text-start md:text-[4rem]/[1.075]">
        <span className="font-light text-(--PINK-400) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out">
          We're
        </span>{" "}
        coming soon
      </h2>
      <p className="mb-8.5 px-9.5 text-center text-[0.885rem] font-normal text-(--PINK-400) motion-safe:transition-colors motion-safe:duration-300 motion-safe:ease-in-out md:mb-10.25 md:max-w-190 md:px-[clamp(2rem,-7.4286rem+19.6429vw,10.25rem)] md:text-start md:text-[1rem]/[1.75]">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
    </>
  );
};

export default MainText;
