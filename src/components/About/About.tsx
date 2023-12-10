import { Avatar, Box, Typography } from "@mui/material";
import { useStyles } from "./config";
import { stackList } from "../../data/ProjectData";

function About() {
  const classes = useStyles();
  return (
    <Box className={classes.ContentWrapper} id="about">
      <Box className={classes.Container}>
        <Box className={classes.SectionTitle}>About Me</Box>
        <Box className={classes.BigCard}>
          <Avatar
            className={classes.Image}
            alt="Description of the image"
            src="https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/man-svgrepo-com.svg"
          />
          <Box className={classes.AboutBio}>
            Hello! My name is <strong>Ajay Rawat</strong> and I enjoy creating
            things that live on the internet. My interest in web development
            started back in 2021 when I decided to try editing custom Blogger
            themes — redesigning & modifying blogger themes taught me a lot
            about HTML & CSS!
          </Box>
          <Box className={`${classes.AboutBio} ${classes.tagline2}`}>
            I have become confident using the following technologies.
          </Box>
          <Box className={classes.Technologies}>
            {stackList.map((stack) => (
              <Box className={classes.Tech}>
                <Avatar
                  className={classes.TechImg}
                  src={stack.img}
                  alt={stack.name}
                />
                <Typography className={classes.TechName}>
                  {stack.name}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
