import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  SocialDiv: {
    marginTop: "2rem",
    display: "none",
    justifyContent: "center",
    alignItems: "center",

    "& .item + .item": {
      marginLeft: "2rem",
    },

    '& ul':{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      width: 'max-content',
    },

    '& li':{
      width: 'max-content !important',
      padding: '0'
    },

    '& a':{
      fontSize: '2.5rem',
      color: '#151418',
      transition: '0.2s ease-in',
      '&:hover':{
        color: 'rgb(57, 134, 250)',
      },
    },
    
    '@media (max-width: 768px)': {
      display: 'flex !important',
    }
  },
  ListItem:{
    '&.MuiListItem-root':{
      padding: '0',
    }
  },
  Social:{
    display: 'block',
    position: 'fixed',
    top: '48%',
    left: '1.5rem',
    transform: 'translateY(-50%)',

    '& ul': {
      display: 'block',
    },

    '& .item + .item': {
      marginTop: '1rem',
    },

    '& a': {
      fontSize: '2rem',
      color: 'rgb(119, 119, 121)',
      transition: '0.2s ease-in',
      '&:hover': {
        color: 'rgb(57, 134, 250)',
      },
    },

    '@media (max-width: 768px)': {
      display: 'none !important',
    },
  },
}));
