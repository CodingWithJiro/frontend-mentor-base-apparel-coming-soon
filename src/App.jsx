import Header from "./components/Header";
import Main from "./components/Main";
import SkipLink from "./components/SkipLink";
import MainLayout from "./components/MainLayout";
import BackgroundPattern from "./components/BackgroundPattern";
import LeftPanel from "./components/LeftPanel";
import HeroImageDesktop from "./components/HeroImageDesktop";

const App = () => {
  return (
    <MainLayout>
      <LeftPanel>
        <SkipLink />
        <Header />
        <Main />
      </LeftPanel>
      <HeroImageDesktop />
      <BackgroundPattern />
    </MainLayout>
  );
};

export default App;
