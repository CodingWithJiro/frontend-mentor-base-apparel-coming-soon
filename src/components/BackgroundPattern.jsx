const BackgroundPattern = () => {
  return (
    <div className="absolute top-0 left-0 -z-1 hidden h-full w-[57.75%] bg-[url('/src/assets/img/bg-pattern-desktop_830x800.svg')] bg-cover bg-center bg-no-repeat after:pointer-events-none after:absolute after:inset-0 after:bg-[linear-gradient(to_right,transparent_85%,hsl(0,100%,98%)_100%)] after:content-[''] md:block"></div>
  );
};

export default BackgroundPattern;
