import { Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme: Theme) => ({
  NavMenu: {
    display: "flex",
    alignItems: "center",
    marginRight: -24,
    "& .menu-item + .menu-item": {
      marginLeft: "1rem",
    },
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  NavLink: {
    color: "rgb(119, 119, 121)",
    display: "flex",
    fontSize: "1.2rem",
    alignItems: "center",
    height: "100%",
    cursor: "pointer",
    "&:hover": {
      color: "#f6f6f6",
    },
    "&.MuiTypography-root": {
      fontSize: "1.2rem",
    },
  },
  Nav: {
    background: "transparent",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 10,
  },
  Resume: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(3), // Adjust the margin as needed
    "@media (max-width: 768px)": {
      display: "none",
    },
    '& a':{
      textDecoration: "none",
    }
  },
  btn: {
    border: "2px solid rgb(57, 134, 250)",
    padding: "10px 1rem",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontWeight: 400,
    outline: "none",
    textDecoration: "none",
    "@media (max-width: 768px)": {
      display: "none",
    },
  },
  PrimaryBtn: {
    background: "rgb(57, 134, 250)",
    color: "#f6f6f6",
    "&:hover": {
      background: "#fff",
      color: "#010606",
    },
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
  // Other styles...
}));
