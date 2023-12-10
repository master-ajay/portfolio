import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  FooterSection: {
    backgroundImage: `url(https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/footer_wave.svg)`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "250px",
    position: "relative",
    "& span": {
      position: "absolute",
      bottom: "4rem",
      color: "#fff",

      "& a": {
        textDecoration: "underline",
        color: "#fff",
      },
    },
  },
  Link: {
    textDecoration: "none",
  },
  Container: {
    width: "100%",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
      ProjectWrapper: {
        marginTop: "-5rem",
      },
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1000px",
    },
  },
});
