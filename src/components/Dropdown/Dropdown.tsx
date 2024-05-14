import { Box, Link } from "@mui/material";
import { useStyles } from "./config";
import { FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import Resume from '../../assets/Resume1.pdf'
interface DropdownProps {
  isOpen: boolean;
  toggle: () => void;
}

function Dropdown({ isOpen, toggle }: DropdownProps) {
  const classes = useStyles();
  return (
    <Box
      className={classes.SideBar}
      onClick={toggle}
      sx={{ top: isOpen ? "0" : "-100%", opacity: isOpen ? "1" : "0" }}
    >
      <FaTimes onClick={toggle} className={"CloseIcon"} />
      <Box className={classes.NavMenu}>
        <ScrollLink
          // component={Link}
          className={`${classes.NavLink} menu-item`}
          to={"projects"}
          smooth={true}
          onClick={toggle}
        >
          Projects
        </ScrollLink>
        <ScrollLink
          className={`${classes.NavLink} menu-item`}
          to="about"
          smooth={true}
          onClick={toggle}
        >
          About
        </ScrollLink>
        <ScrollLink
          className={`${classes.NavLink} menu-item`}
          to="contact"
          smooth={true}
          onClick={toggle}
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
    </Box>
  );
}

export default Dropdown;
