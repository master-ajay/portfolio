import { Box, Stack, Typography, Link } from "@mui/material";
import { ProjectList } from "../../../data/ProjectData";

import React from "react";
import { useStyles } from "../config";

function ProjectCard() {
  const classes = useStyles();
  return (
    <>
      {ProjectList.map((list, index) => (
        <Box key={index} className={classes.Card}>
          <Box className={classes.CardLeft}>
            <img src={list.img} alt={list.title} />
          </Box>
          <Box className={classes.CardRight}>
            <Typography variant={"h4"}>{list.title}</Typography>
            <Typography variant={"body2"}>{list.description}</Typography>
            <Box className={classes.Stack}>
              <Typography component={"span"} className={classes.stackTitle}>
                Tech Stack - 
              </Typography>
              <Typography component={"span"} className={classes.tags}>
                {list.tech_stack}
              </Typography>
              </Box>
              <Box className={classes.BtnGroup}>
                <Link
                  href={`${list.github_url}`}
                  className={`${classes.btn} ${classes.btn2} ${classes.SecondarBtn} ${classes.Link}`}
                  target="_blank"
                  sx={{
                    '&.MuiLink-root':{
                      textDecoration: 'none',
                      marginRight: '1rem'
                    }
                  }}
                >
                  Github
                </Link>
                <Link
                  href={`${list.demo_url}`}
                  className={`${classes.btn} ${classes.PrimaryBtn} ${classes.Link}}`}
                  target="_blank"
                  sx={{
                    '&.MuiLink-root':{
                      textDecoration: 'none',
                    }
                  }}
                >
                  Demo
                </Link>
              </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default ProjectCard;
