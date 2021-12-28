import { Link } from "react-router-dom";
// import { NavBarData } from "./NavBarData";
import NavClasses from "./NavBar.module.css";
import { Button } from "@material-ui/core";
import { useContext } from "react";
import AuthContext from "../../../store/authContext";

const NavBar = () => {
  const authCtx = useContext(AuthContext);
  let buttons;
  if (!authCtx.isLoggedIn) {
    buttons = (
      <>
        <div className={NavClasses.navbar__logged}>
          <Button
            component={Link}
            size="medium"
            color="primary"
            to={"/login"}
            variant="contained"
            // startIcon={item.img}
          >
            Login
          </Button>        
          <Button
            component={Link}
            size="medium"
            color="success"
            to={"/register"}
            variant="contained"
            // startIcon={item.img}
          >
            Register
          </Button>
        </div>
      </>
    );
  } else {
    buttons = (
      <Button
        size="medium"
        color="primary"
        onClick={authCtx.logout}
        variant="contained"
      >
        Logout
      </Button>
    );
  }
  return (
    <nav className={NavClasses.navbar}>
      {/* <ul className={NavClasses.navbar__items}> */}
        {buttons}
      {/* </ul> */}
    </nav>
  );
};

export default NavBar;
