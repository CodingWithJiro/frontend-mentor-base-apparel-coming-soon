const MainLayout = ({ children }) => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-115 md:flex md:max-w-360 md:flex-row md:items-center md:justify-center">
      {children}
    </div>
  );
};

export default MainLayout;
