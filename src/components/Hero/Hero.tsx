import { useState } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Header from "../Header/Header";
import { ScrollDown, useStyles } from "./config";
import Dropdown from "../Dropdown/Dropdown";

function Hero() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box component={"main"} className={classes.main}>
      <Box className={"padding"}>
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Header toggle={toggle} />
        <Box className={classes.HeroContainer}>
          <Box className={classes.HeroWrapper}>
            <Box className={classes.HeroLeft}>
              <Typography
                variant="h1"
                className={classes.h1}
                sx={{
                  "&.MuiTypography-root": {
                    fontSize: "2.8rem",
                    color: "#f6f6f6",
                    opacity: "0.98",
                    fontWeight: 400,
                  },
                }}
              >
                Hi, I'm Ajay
              </Typography>
              <Typography
                variant="h5"
                className={classes.h5}
                sx={{
                  "&.MuiTypography-root": {
                    fontSize: "1.6rem",
                    color: "rgb(119, 119, 121)",
                    marginBottom: "1rem",
                    fontWeight: 400,
                  },
                }}
              >
                Frontend Developer
              </Typography>
              <Typography
                variant="body1"
                className={classes.p}
                sx={{
                  "&.MuiTypography-root": {
                    fontSize: "17px",
                    color: "#f6f6f6",
                    opacity: "0.85",
                  },
                }}
              >
                I design and code beautifully simple things, and I love what I
                do.{" "}
              </Typography>
            </Box>
            <Box className={classes.HeroRight}>
              <Avatar
                src="https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/man-svgrepo-com.svg"
                alt="man-svgrepo"
                sx={{
                  "&.MuiAvatar-root": { height: "300px", width: "auto" },
                }}
              />
            </Box>
          </Box>

          <ScrollDown to="projects" smooth={true}>
            <Box className={classes.ScrollLink}>
              Scroll down
              <img
                src="https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/scroll-down.svg"
                alt="scroll-down"
              />
            </Box>
          </ScrollDown>
        </Box>
      </Box>
    </Box>
  );
}

export default Hero;
