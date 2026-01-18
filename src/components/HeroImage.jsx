const HeroImage = () => {
  return (
    <picture>
      <source
        media="(min-width: 48rem)"
        srcSet="/src/assets/img/hero-desktop_610x800.jpg"
      />
      <img src="/src/assets/img/hero-mobile_375x250.jpg" alt="" />
    </picture>
  );
};

export default HeroImage;
