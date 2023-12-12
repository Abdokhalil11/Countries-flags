/* eslint-disable react/prop-types */

const Header = ({ themeSwitch }) => {
  return (
    <header>
      <div className="logo">Where in the world?</div>
      <div className="theme-toggle" onClick={themeSwitch}>
        <div className="moon"></div>
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;
