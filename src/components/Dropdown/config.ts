import { makeStyles } from "@mui/styles";

// interface SideBarProps {
//   isOpen: boolean;
// }

export const useStyles = makeStyles(() => ({
  SideBar: {
    background: "#151418",
    position: "fixed",
    height: "100%",
    width: "100%",
    left: 0,
    zIndex: 999,
    transition: "0.3s ease-in-out",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    // opacity: ({ isOpen }: SideBarProps) => (isOpen ? '1' : '0'),
    // top: ({ isOpen }: SideBarProps) => (isOpen ? '0' : '-100%'),
  },
  NavMenu: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& .menu-item + .menu-item": {
      marginTop: "2rem",
    },
  },
  NavLink: {
    color: "#fff",
    cursor: "pointer",
    fontSize: "1.7rem !important",
    "&:hover": {
      color: "#f6f6f6",
    },
  },
  Resume: {
    display: "flex",
    alignItems: "center",
    marginTop: "5rem",
    justifyContent: "center",
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
  // Other styles...
}));
