
// Title component for display logo
const Title = () => (
    <a href="/">
      <img 
      className="logo" 
      src="https://fooodvilla.netlify.app/logo.2e81ae67.png" 
      alt="Logo" />
    </a>
  );

// Header component for header section: Logo, Nav Items
const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;