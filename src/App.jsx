import Header from "./components/Header";
import Main from "./components/Main";
import SkipLink from "./components/SkipLink";
import MainLayout from "./components/MainLayout";

const App = () => {
  return (
    <MainLayout>
      <SkipLink />
      <Header />
      <Main />
    </MainLayout>
  );
};

export default App;
