import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  ContentWrapper: {
    marginTop: "5rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  Container: {
    width: "100%",
    // paddingLeft: "1rem",
    // paddingRight: "1rem",
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
  SectionTitle: {
    fontSize: `28px`,
    color: `#151418`,
    fontWeight: 700,
    marginBottom: `3.5rem`,
  },
  Image: {
    "&.MuiAvatar-root": {
      width: "100%",
      height: "auto",
    },
    "&.MuiAvatar-root img": {
      maxWidth: "120px",
      margin: "0 auto",
      marginBottom: "1rem",
    },
  },
  BigCard: {
    padding: "3rem 2rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
  },
  AboutBio: {
    textAlign: "center",
    maxWidth: 650,
    margin: "0 auto",
    color: "#151418",
    lineHeight: 1.6,
  },
  tagline2: {
    marginTop: "1rem",
    marginBottom: "2rem",
    textAlign: "center",
    maxWidth: 650,
    margin: "0 auto",
    color: "#151418",
    lineHeight: 1.6,
  },
  Technologies: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "-2rem",
  },
  Tech: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    maxWidth: "100px",
    minWidth: "100px",
    marginBottom: "2rem",
  },
  TechImg: {
    "&.MuiAvatar-root": {
      height: "50px",
      width: "50px",
    },
  },
  TechName: {
    "&.MuiTypography-root": {
      fontSize: "14px",
    },
  },
}));
