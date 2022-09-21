import React from "react";
import { Box } from "@chakra-ui/react";
import { NavLink, Link } from "react-router-dom";
import { useContext } from "react";
import GlobalContext from "../GlobalState";
import { ImFire } from "react-icons/im";

function Header() {
  const { setResults } = useContext(GlobalContext);
  return (
    <div>
      <nav className="navbar">
        <div>
          <Link to="/">
            <ImFire onClick={() => setResults("")} className="fire" />
          </Link>
        </div>
        <Box p={7}>
          <NavLink className="navLink" to="/">
            {" "}
            Home{" "}
          </NavLink>
          <NavLink className="navLink" to="/watched">
            {" "}
            watched{" "}
          </NavLink>
          <NavLink className="navLink" to="/watchlist">
            {" "}
            Watchlist{" "}
          </NavLink>
        </Box>
      </nav>
    </div>
  );
}

export default Header;
