import { makeStyles } from "@mui/styles";
import { Link as ScrollLink } from "react-scroll";
import { styled, keyframes } from "@mui/system";

export const useStyles = makeStyles(() => ({
  main: {
    background: "#151418",
    backgroundImage: `url(https://raw.githubusercontent.com/master-ajay/Assets/main/Assets/Assets/blob-haikei.svg)`,
    backgroundRepeat: `no-repeat`,
    backgroundSize: `cover`,
    width: `100%`,
  },
  RightSideImage: {
    height: "300px",
    width: "auto",
  },
  HeroRight: {
    flex: 1,
    justifyContent: "center",
    display: "flex",
  },
  HeroLeft: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    textAlign: "left",
    flex: 1,

    "@media (max-width: 992px)": {
      alignItems: "center",
      textAlign: "center",
      marginBottom: "2rem",
    },

    "& h1": {
      fontSize: "2.8rem",
      color: "#f6f6f6",
      opacity: "0.98",
      fontWeight: 400,
    },

    "& h5": {
      fontSize: "1.6rem",
      color: "rgb(119, 119, 121)",
      marginBottom: "1rem",
      fontWeight: 400,
    },

    "& p": {
      fontSize: "17px",
      color: "#f6f6f6",
      opacity: "0.85",
    },
  },
  HeroWrapper: {
    display: "flex",
    flexDirection: "row",
    "@media (max-width: 992px)": {
      flexDirection: "column",
    },
  },
  HeroContainer: {
    paddingBottom: "2rem",
    paddingTop: "4rem",
    paddingRight: "1rem",
    paddingLeft: "1rem",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexDirection: "column",

    "@media (min-width: 576px)": {
      maxWidth: "540px",
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px",
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px",
    },
    "@media (min-width: 1200px)": {
      maxWidth: "1000px",
    },
  },
  h1: {
    fontSize: "2.8rem",
    color: "#f6f6f6",
    opacity: "0.98",
    fontWeight: 400,
  },
  h5: {
    fontSize: "1.6rem",
    color: "rgb(119, 119, 121)",
    marginBottom: "1rem",
    fontWeight: 400,
  },
  p: { fontSize: "17px", color: "#f6f6f6", opacity: "0.85" },
  ScrollLink: {
    display: "flex",
    alignItems: "center",
    fontSize: "1.3rem",
    color: "#f6f6f6",
    "& img": {
      height: "35px",
      width: "35px",
      marginLeft: "6px",
    },
  },
  // Other styles...
}));

const ScrollAnimation = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(ScrollLink)(() => ({
  marginTop: "3rem",
  display: "flex",
  justifyContent: "flex-start",
  cursor: "pointer",
  animation: `${ScrollAnimation} 2s linear 0s infinite`,
  '@media (max-width: 992px)': {
    justifyContent: "center",
  },
}));
