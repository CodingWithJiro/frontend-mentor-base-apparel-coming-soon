import heroImageMobile from "../assets/img/hero-mobile_375x250.jpg";

const HeroImageMobile = () => {
  return (
    <img
      className="mb-16 w-full md:hidden"
      src={heroImageMobile}
      alt=""
      width="375"
      height="250"
    />
  );
};

export default HeroImageMobile;
