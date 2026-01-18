import CompanyLogo from "./CompanyLogo";
import HeaderTitle from "./HeaderTitle";
import HeroImage from "./HeroImage";
import SkipLink from "./SkipLink";
import Theme from "./Theme";

const Header = () => {
  return (
    <header>
      <SkipLink />
      <HeaderTitle />
      <CompanyLogo />
      <Theme />
      <HeroImage />
    </header>
  );
};

export default Header;
