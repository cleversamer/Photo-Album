import React, { Fragment } from "react";
import { PhotoCamera } from "@material-ui/icons";
import useStyles from "./styles";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
  ButtonGroup,
} from "@material-ui/core";

function App() {
  const classes = useStyles("");

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography className={classes.brand} variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>

            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello Everyone! This is a photo album, and I'm trying to make this
              sentence as logn as possible, so we can see how does it look like
              on the screen.
            </Typography>

            <div className={classes.buttons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>

                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            <Grid item>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardMedia}
                  image="https://source.unsplash.com/random"
                  title="Image title"
                />

                <CardContent className={classes.cardContent}>
                  <Typography gutterButtom variant="h5">
                    Heading
                  </Typography>

                  <Typography>
                    This is a media card. You can use the section to describe
                    the card.
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button size="sm" color="primary">
                    View
                  </Button>

                  <Button size="sm" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </Fragment>
  );
}

export default App;
