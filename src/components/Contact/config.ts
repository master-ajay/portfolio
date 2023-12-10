import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  ContactWrapper: {
    margin: "5rem 0",
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
  BigCard: {
    padding: "3rem 2rem",
    borderRadius: "1rem",
    display: "flex",
    flexDirection: "column",
    background: "#fff",
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.05)",
  },
  Email: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "space-around",
    "& span": {
      fontSize: "1rem",
      fontWeight: 500,
      marginBottom: "1rem",
      "@media (min-width: 576px)": {
        fontSize: "1.5rem",
      },
      "@media (min-width: 992px)": {
        marginBottom: 0,
        fontSize: "3rem",
      },
    },
    "@media (min-width: 992px)": {
      flexDirection: "row",
    },
  },
  btn: {
    border: "2px solid rgb(57, 134, 250)",
    padding: "10px 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontWeight: 400,
    outline: "none",
    fontSize: "1.7rem !important",
  },
  PrimaryBtn: {
    background: "rgb(57, 134, 250)",
    color: "#f6f6f6",
    "&:hover": {
      background: "#fff",
      color: "#010606",
    },
  },
  Link:{
    '&.MuiLink-root':{
      textDecoration: 'none',
      marginRight: '1rem'
    }
  }
}));
