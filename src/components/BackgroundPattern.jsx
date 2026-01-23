const BackgroundPattern = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 hidden h-full w-[57.75%] bg-(image:--BG-PATTERN-URL) bg-cover bg-center bg-no-repeat after:pointer-events-none after:absolute after:inset-0 after:bg-(image:--GRADIENT-PATTERN) after:content-[''] md:block"></div>
  );
};

export default BackgroundPattern;
