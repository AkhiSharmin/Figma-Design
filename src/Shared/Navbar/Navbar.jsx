const Navbar = () => {
  const navItem = (
    <>
      <li>
        <a className="hover:text-red-500">Home</a>
      </li>

      <li>
        <a>Service</a>
      </li>
      <li>
        <a>Portfolio</a>
      </li>
      <li>
        <a>Community</a>
      </li>
      <li>
        <a>Blog</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#131514] text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow rounded-box w-52 text-left text-xl"
          >
            {navItem}
          </ul>
        </div>

        <img src="https://i.ibb.co/qsL0k9s/Fliqa-India-Logo-1.png" alt="" />

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl ">{navItem}</ul>
        </div>
      </div>
      <div className="navbar-end">
        <a className="nav-button mr-5">Sign Up</a>
        <a className="nav-button">Sign In</a>
      </div>
    </div>
  );
};

export default Navbar;
