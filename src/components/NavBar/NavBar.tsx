import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-main_color text-text_color h-[80vh] w-16 m-5 flex flex-col pt-5 pb-5 items-center rounded-xl">
      <Link to="/">Logo</Link>
      <section className="flex flex-col mt-5 items-center">
        <Link to={"/movies"}>Movies</Link>
        <Link to={"/series"}>Series</Link>
        <Link to={"/favorites"}>Favorites</Link>
      </section>
    </nav>
  );
};

export default NavBar;
