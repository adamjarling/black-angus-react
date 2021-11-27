import React from "react";
import { Link } from "react-router-dom";
import {
  jQueryFullHeight,
  jQueryBurgerMenu,
  jQueryShowHideNavMenu,
} from "../services/jquery-to-refactor";
import { useNavigate, useLocation } from "react-router-dom";

const NavContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    jQueryFullHeight();
    jQueryBurgerMenu();
  }, []);

  const styles = {
    navButton: {
      border: "0",
    },
  };

  const handleClick = (e) => {
    e.preventDefault();

    const { pathname } = location;

    if (e.target.innerHTML === "Home" && pathname !== "/") {
      navigate("/");
    } else if (
      e.target.innerHTML === "Press Kit" &&
      pathname !== "/press-kit"
    ) {
      navigate("/press-kit");
    } else if (e.target.innerHTML === "Shows" && pathname !== "/shows") {
      navigate("/shows");
    } else if (e.target.innerHTML === "Photos" && pathname !== "/photos") {
      navigate("/photos");
    } else if (e.target.innerHTML === "Booking" && pathname !== "/booking") {
      navigate("/booking");
    }
    jQueryShowHideNavMenu();
  };

  return (
    <nav id="colorlib-main-nav" role="navigation">
      <button
        className="js-colorlib-nav-toggle colorlib-nav-toggle active"
        style={styles.navButton}
      >
        <i />
      </button>
      <div className="js-fullheight colorlib-table">
        <div className="colorlib-table-cell js-fullheight">
          <ul>
            <li>
              <Link to="/" onClick={handleClick}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/press-kit" onClick={handleClick}>
                Press Kit
              </Link>
            </li>
            <li>
              <Link to="/shows" onClick={handleClick}>
                Shows
              </Link>
            </li>
            <li>
              <Link to="/photos" onClick={handleClick}>
                Photos
              </Link>
            </li>
            <li>
              <Link to="/booking" onClick={handleClick}>
                Booking
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavContainer;
