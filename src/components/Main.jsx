import Form from "./Form";
import HeroImageMobile from "./HeroImageMobile";
import MainText from "./MainText";

const Main = () => {
  return (
    <main
      className="flex flex-col items-center justify-start font-(family-name:--FF) md:items-start"
      id="main"
    >
      <HeroImageMobile />
      <MainText />
      <Form />
    </main>
  );
};

export default Main;
