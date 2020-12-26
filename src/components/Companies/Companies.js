import React from 'react';
import PropTypes from 'prop-types';
import {AppBar} from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import { Button, Grid, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    display: "flex",
  },
  button: {
    marginRight: theme.spacing(1),
    color: 'white'
  },
  title: {
    flexGrow: 1,
  },
  cardGrid: {
    display: "block",
  },
  CardMedia:{
    paddingTop: "90.25%",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    gridGap: "10px",
  }
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const cards = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,];

export default function BackToTop(props) {
  const classes = useStyles();
  return (
    <React.Fragment aria-labelledby="nested-list-subheader" position="fixed">
      <CssBaseline />
      <AppBar position="fixed" >
        <Toolbar edge="center" >
          <Button className={classes.button}></Button>
          <Typography  variant="h6" className={classes.title}></Typography>
          <Button variant="secondary" className={classes.button}>eeeee</Button>
          <Button className={classes.button}>eeee</Button>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid Container className={classes.container} spacing={4}>
          {cards.map((card) => (
              <Grid item key={card} xs={10} sm={5} md={3}>
                  <Card className={classes.car}>
                    <CardMedia
                      className={classes.CardMedia}
                      image="https://www.photoshopessentials.com/newsite/wp-content/uploads/2018/08/resize-images-print-photoshop-f.jpg"
                      title="Image title"
                    />
                    <CardContent>
                      <Typography variant="h5" gutterBottom>
                          Blog post
                      </Typography>
                      <Typography >
                          Blog post. web
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary">
                        Посмотреть
                      </Button>
                      <Button size="small" color="primary">
                        Edit
                      </Button>
                      <LayerIcon/>
                      <PlayCircleFilledIcon/>
                    </CardActions>
                  </Card>
              </Grid>
            )
            )}
        </Grid>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}
