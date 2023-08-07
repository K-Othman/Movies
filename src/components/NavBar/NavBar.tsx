import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-nav_color text-text_color h-[97vh] w-16 m-5  flex  flex-col pt-5 items-center rounded-xl">
      <Link to="/">
        <svg
          className="text-2xl text-red-600 mx-auto hover:text-slate-500 transition-all mb-10"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="1em"
          width="1em"
        >
          <path fill="none" d="M0 0h24v24H0z" />
          <path d="M17.998 7l2.31-4h.7c.548 0 .992.445.992.993v16.014a1 1 0 01-.992.993H2.992A.993.993 0 012 20.007V3.993A1 1 0 012.992 3h3.006l-2.31 4h2.31l2.31-4h3.69l-2.31 4h2.31l2.31-4h3.69l-2.31 4h2.31z" />
        </svg>
      </Link>
      <section className="flex flex-col mt-8 items-center gap-10">
        <Link to={"/movies"}>
          <svg
            className="text-2xl mx-auto hover:text-slate-500 transition-all"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1em"
            width="1em"
          >
            <path d="M19 4v1h-2V3H7v2H5V3H3v18h2v-2h2v2h10v-2h2v2h2V3h-2v1zM5 7h2v2H5V7zm0 4h2v2H5v-2zm0 6v-2h2v2H5zm12 0v-2h2v2h-2zm2-4h-2v-2h2v2zm-2-4V7h2v2h-2z" />
          </svg>
        </Link>
        <Link to={"/series"}>
          <svg
            className="text-2xl mx-auto hover:text-slate-500 transition-all"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
          >
            <path stroke="none" d="M0 0h24v24H0z" />
            <path d="M5 7 H19 A2 2 0 0 1 21 9 V18 A2 2 0 0 1 19 20 H5 A2 2 0 0 1 3 18 V9 A2 2 0 0 1 5 7 z" />
            <path d="M16 3l-4 4-4-4M15 7v13M18 15v.01M18 12v.01" />
          </svg>
        </Link>
        <Link to={"/favorites"}>
          {" "}
          <svg
            className="text-2xl mx-auto hover:text-slate-500 transition-all"
            fill="currentColor"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path d="M2 2v13.5a.5.5 0 00.74.439L8 13.069l5.26 2.87A.5.5 0 0014 15.5V2a2 2 0 00-2-2H4a2 2 0 00-2 2z" />
          </svg>
        </Link>
      </section>
      {/* </div> */}
    </nav>
  );
};

export default NavBar;
