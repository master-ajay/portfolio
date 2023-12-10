import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  main: {
    background: "#151418",
    backgroundImage: `url(https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/blob-haikei.svg)`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    width: `100%`,
  },
  SectionTitle: {
    fontSize: `28px`,
    color: `#151418`,
    fontWeight: 700,
    marginBottom: `3.5rem`,
  },
  Container: {
    // width: `100%`,
    marginRight: `auto`,
    marginLeft: `auto`,
    paddingLeft: "1rem",
    paddingRight: "1rem",
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
  ProjectWrapper: {
    marginTop: "-1rem",
    "@media (min-width: 768px)": {
      marginTop: "-5rem",
    },
  },
  Card: {
    display: "grid",
    gridGap: "2rem",
    marginBottom: "4rem",
    gridTemplateColumns: "1fr",
    borderBottom: "1px solid rgb(0, 0, 0)",
    paddingBottom: "2rem",
    "@media (min-width: 992px)": {
      gridTemplateColumns: "1fr 1fr",
      borderBottom: 0,
      paddingBottom: 0,
    },
  },
  CardLeft: {
    background: "#151418",
    borderRadius: "5px",
    padding: "5px",
    justifySelf: "center",

    "& img": {
      borderRadius: "3px",
      height: "auto",
      maxWidth: "100%",
    },
  },
  CardRight: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    "& h4": {
      // fontSize: "1.5rem",
      fontWeight: 400,
    },

    "& p": {
      fontWeight: 400,
      maxWidth: "400px",
      marginTop: "10px",
      marginBottom: "1rem",
      color: "rgba(0, 0, 0, 0.815)",
      textAlign: "center",
      "@media (min-width: 992px)": {
        textAlign: "start",
      },
    },
    "@media (min-width: 992px)": {
      alignItems: "flex-start",
      marginTop: "1rem",
    },
  },
  Stack: {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
  },
  stackTitle: {
    "&.MuiTypography-root": {
      fontWeight: 500,
      marginRight: "10px",
      fontSize: "1.1rem",
    },
  },
  tags: {
    "&.MuiTypography-root": {
      fontSize: "1rem",
      fontWeight: 400,
    }

  },
  BtnGroup: {
    height: "70px",
    display: "flex",
    alignItems: "center",
  },
  btn: {
    border: `2px solid rgb(57, 134, 250)`,
    padding: `10px 1rem`,
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontWeight: 400,
    outline: "none",
  },
  btn2: {
    marginRight: "1rem",
  },
  PrimaryBtn: {
    background: "rgb(57, 134, 250)",
    color: "#f6f6f6",
    "&:hover": {
      background: "#fff",
      color: "#010606",
    },
  },
  SecondarBtn: {
    "&:hover": {
      background: "rgb(57, 134, 250)",
      color: "#fff",
    },
  },
  Link: {
    textDecoration: "none",
    color: "inherit",
    backgroundColor: "transparent",
  },
  // Other styles...
}));
