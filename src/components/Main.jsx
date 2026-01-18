import BackgroundPattern from "./BackgroundPattern";
import Form from "./Form";
import HeroImage from "./HeroImage";
import MainText from "./MainText";

const Main = () => {
  return (
    <main id="main">
      <HeroImage />
      <MainText />
      <Form />
      <BackgroundPattern />
    </main>
  );
};

export default Main;
