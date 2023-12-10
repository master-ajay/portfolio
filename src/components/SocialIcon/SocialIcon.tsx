import { Box, Link, List, ListItem } from "@mui/material";
import React from "react";
import { useStyles } from "./config";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

function SocialIcon() {
  const classes = useStyles();
  return (
    <Box className={classes.SocialDiv}>
      <List>
        <ListItem className="item">
          <Link
            href="https://www.linkedin.com/in/ajay-pal-rawat/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </Link>
        </ListItem>
        <ListItem className="item">
          <Link
            href="https://github.com/master-ajay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
        </ListItem>
        <ListItem className="item">
          <Link
            href="https://instagram.com/codewith_ajay"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
        </ListItem>
      </List>
    </Box>
  );
}

export default SocialIcon;
