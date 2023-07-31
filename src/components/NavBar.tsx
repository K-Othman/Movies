import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Logo</Link>
      <section>
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/series"}>Series</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </section>
    </nav>
  );
};

export default NavBar;
