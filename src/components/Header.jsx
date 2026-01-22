import CompanyLogo from "./CompanyLogo";
import HeaderTitle from "./HeaderTitle";
import Theme from "./Theme";

const Header = () => {
  return (
    <header className="px-8 py-6.5 md:mb-17 md:px-[clamp(2rem,-7.4286rem+19.6429vw,10.25rem)] md:py-16.25">
      <HeaderTitle />
      <CompanyLogo />
      <Theme />
    </header>
  );
};

export default Header;
