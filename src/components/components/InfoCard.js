import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    height: 220,
    marginTop:20
  },
  image: {
    margin: 15,
    borderRadius: 15,
  },
  description: {
    height: 80,
  },
  date: {
    textAlign: "left",
  },
  seeMore: {
    textAlign: "right",
  },
});

export const InfoCard = (props) => {
  const classes = useStyles();
  return (
      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <CardMedia
              className={classes.image}
              component="img"
              height="175"
              image={props.urlToImage}
               
            />
          </Grid>
          <Grid item xs={7}>
            <CardContent>
              <Grid
                container
                spacing={2}
              >
                <Grid item xs={12}>
                  <Typography gutterBottom variant="h6" component="h8">
                    {props.title}
                  </Typography>
                  <Typography
                    className={classes.description}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {props.description}
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.date}>{props.date}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.seeMore}>ver mas</Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Grid>
        </Grid>
      </CardActionArea>
 
    </Card>
    </div>
  );
};
