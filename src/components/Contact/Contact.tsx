import { Box, Link, Typography } from "@mui/material";
import { useStyles } from "./config";
import SocialIcon from "../SocialIcon/SocialIcon";

function Contact() {
  const classes = useStyles();
  return (
    <Box className={classes.ContactWrapper} id={'contact'}>
      <Box className={classes.Container}>
        <Box className={classes.SectionTitle}>Get In Touch</Box>
        <Box className={classes.BigCard}>
          <Box className={classes.Email}>
            <Typography component={"span"}>palrawatajay@gmail.com</Typography>
            <Link
              target={"_blank"}
              className={`${classes.btn} ${classes.PrimaryBtn} ${classes.Link}`}
              href={"mailto:palrawatajay@gmail.com"}
            >
              Send Mail
            </Link>
          </Box>
        </Box>
        <SocialIcon />
      </Box>
    </Box>
  );
}

export default Contact;
