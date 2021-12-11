import { Link } from "react-router-dom";
import { NavBarData } from "./NavBarData";
import NavClasses from "./NavBar.module.css";
import { Button } from "@material-ui/core";

const NavBar = () => {
  return (
    <nav className={NavClasses.navbar}>
      <ul className={NavClasses.navbar__items}>
        {NavBarData.map((item, index) => {
          return (
            <li className={NavClasses.navbar__item} key={index}>
              {/* <Link to={item.path}>
                <span className={NavClasses.linkcontainer}>
                  <span className={NavClasses.icon}>{item.img}</span>
                  {item.title}
                </span>
              </Link> */}
              <Button
                size="medium"
                color={item.color}
                href={item.path}
                variant="contained"
                startIcon={item.img}
              >{item.title}
                {/* <Link to={item.path}></Link> */}
              </Button>
              {/* <Button href="\register">Register</Button> */}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
