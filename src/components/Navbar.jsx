import { MdFavorite } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItem = (
    <>
      <li className="hover:bg-[#36A754]">
        <p className="text-lg">Nature</p>
      </li>
      <li className="hover:bg-[#36A754]">
        <p className="text-lg">Cat</p>
      </li>
      <li className="hover:bg-[#36A754]">
        <p className="text-lg">Dog</p>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar max-w-screen-lg mx-auto px-0 bg-transparent">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-white lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 ml-4 w-52 p-2"
            >
              {navItem}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost text-white text-3xl">ImageLoft</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          {/* <ul className="menu menu-horizontal px-1">{navItem}</ul> */}
        </div>
        <div className="navbar-end">
          <a className="btn btn-ghost bg-transparent">
            <MdFavorite className="text-3xl text-white " />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
