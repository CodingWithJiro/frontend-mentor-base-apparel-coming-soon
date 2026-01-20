import CompanyLogo from "./CompanyLogo";
import HeaderTitle from "./HeaderTitle";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className="px-8 py-6.5">
      <HeaderTitle />
      <CompanyLogo />
      <Theme />
    </header>
  );
};

export default Header;
