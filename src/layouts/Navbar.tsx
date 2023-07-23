import { Link } from "react-router-dom";
import Logo from "../components/ui/Logo";

const Navbar = () => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Logo />

        <ul className="hidden md:flex items-center space-x-6">
          <a
            className="font-semibold cursor-pointer"
            href="index.html"
            id="mhr-bookStore"
          >
            <li>Book Store</li>
          </a>
          <Link to="/add-book" className="cursor-pointer" id="mhr-addBook">
            <li>Add Book</li>
          </Link>
        </ul>

        <div>
          <ul className="hidden md:flex items-center space-x-6">
            <Link to="/login" className="cursor-pointer" id="mhr-addBook">
              <li>Login</li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
