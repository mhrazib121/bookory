import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../components/ui/Logo";
import ProfileDropdown from "./ProfileDropdown";
import useProfile from "../hooks/useProfile";

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState<boolean>();
  const { profile } = useProfile();

  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center space-x-6">
          <a
            className="font-semibold cursor-pointer"
            href="/"
            id="mhr-bookStore"
          >
            <li>Home</li>
          </a>
          <Link to="/all-books" className="cursor-pointer" id="mhr-addBook">
            <li>All Book</li>
          </Link>
          <Link
            to={`${profile?.data?.email ? "/wishlist" : "/login"}`}
            className="cursor-pointer"
            id="mhr-addBook"
          >
            <li>Wishlist</li>
          </Link>
        </ul>

        <div>
          <ul className="hidden md:flex items-center space-x-6">
            {profile?.success === true ? (
              <div className="relative">
                <img
                  onClick={() => setOpenProfile(!openProfile)}
                  className="inline-block h-9 w-9 cursor-pointer rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
                {openProfile && (
                  <ProfileDropdown
                    setOpenProfile={setOpenProfile}
                    data={profile}
                  />
                )}
              </div>
            ) : (
              <Link to="/login" className="cursor-pointer" id="mhr-addBook">
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
