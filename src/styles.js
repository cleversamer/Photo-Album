import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    brand: {
      marginLeft: "10px",
    },
    container: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    description: {
      marginTop: "10px",
    },
    buttons: {
      marginTop: "40px",
    },
    cardGrid: {
      padding: "20px 0",
    },
    card: {
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    cardMedia: {
      paddingTop: "56.25%", // Gives us a 16:9 aspect ratio
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: "50px 0",
    },
  };
});

export default useStyles;
