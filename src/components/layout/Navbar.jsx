import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="navbar">
      <div className="brand">Neon City</div>
      <nav>
        <a href="#story">Story</a>
        <a href="#characters">Characters</a>
        <a href="#vehicles">Vehicles</a>
        <a href="#gallery">Gallery</a>
      </nav>
      <Link to="/" className="btn btn-secondary">Enter</Link>
    </header>
  );
}

export default Navbar;
