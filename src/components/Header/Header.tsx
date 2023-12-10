import { Box, Link } from "@mui/material";
import { useStyles } from "./config";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Resume from "../../assets/Resume.pdf";
// import { Link } from "react-router-dom";

interface HeaderProps {
  toggle: () => void;
}

function Header({ toggle }: HeaderProps) {
  const classes = useStyles();

  return (
    <Box className={classes.Container}>
      <Box className={classes.Nav}>
        <Box
          component={"img"}
          src="https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/logo.png"
          alt="logo"
        />
        <Box className={classes.NavMenu}>
          <ScrollLink
            // component={Link}
            className={`${classes.NavLink} menu-item`}
            to={"projects"}
            smooth={true}
          >
            Projects
          </ScrollLink>
          <ScrollLink
            className={`${classes.NavLink} menu-item`}
            to="about"
            smooth={true}
          >
            About
          </ScrollLink>
          <ScrollLink
            className={`${classes.NavLink} menu-item`}
            to="contact"
            smooth={true}
          >
            Contact
          </ScrollLink>
        </Box>
        <Box className={`${classes.Resume}`}>
          <Link
            // target="_blank"
            className={`${classes.btn} ${classes.PrimaryBtn}`}
            // component={Link}
            href={Resume}
          >
            Resume
          </Link>
        </Box>
        <FaBars onClick={toggle} className={"FaBars"} />
      </Box>
    </Box>
  );
}

export default Header;
