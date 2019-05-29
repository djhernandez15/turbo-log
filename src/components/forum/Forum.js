import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AddComment from "@material-ui/icons/AddComment";
import TextField from "@material-ui/core/TextField";
import "./Forum.css";
import NavBar from "../navbar/NavBar";

const useStyles = makeStyles(theme => ({
  // card: {
  //   maxWidth: 400,
  // },
  hart: {
    color: red
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    // backgroundColor: red[500],
    backgroundImage: "url(https://popingservers.com/images/1.png)"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "80%",
    textAlign: "center"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: 200
  }
}));

const Forum = () => {
  const [comment, setComment] = React.useState("");

  const handleComment = event => {
    setComment(event.target.value);
  };

  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [hart, setHart] = React.useState(false);
  const handleHartClick = () => {
    setHart(!hart);
  };
  return (
    <Grid>
      <NavBar />
      <Card style={{ margin: "20px", border: "2px black solid" }}>
        <CardHeader
          avatar={
            <Avatar>
              <img src="https://popingservers.com/images/1.png" />
            </Avatar>
          }
          title="neaj mahmud"
          subheader="September 14, 2016"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardContent>
          <Typography variant="h5" color="textSecondary" component="p">
            how do change blinker fluid onmy 04 acura tl?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <AddComment />
            {/* <ExpandMoreIcon /> */}
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <hr style={{ border: "1px black dotted", width: "70%" }} />
            <Card
              style={{
                margin: "20px",
                border: ".1px black solid",
                paddingLeft: "20px"
              }}
            >
              <Typography variant="h6" color="textprimary" component="p">
                commenter name
              </Typography>
              <Typography paragraph>
                wait change what? i have never heard of blinker fluid
              </Typography>
            </Card>

            <Typography>{comment}</Typography>
            <TextField
              id="standard-dense"
              label="Add Comment"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              onChange={handleComment}
            />
          </CardContent>
        </Collapse>
      </Card>

      <Card style={{ margin: "20px", border: "2px black solid" }}>
        <CardHeader
          avatar={
            <Avatar>
              <img src="https://popingservers.com/images/1.png" />
            </Avatar>
          }
          title="neaj mahmud"
          subheader="September 14, 2016"
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
        />

        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="Show more"
          >
            <AddComment />
            {/* <ExpandMoreIcon /> */}
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Heat 1/2 cup of the broth in a pot until simmering, add saffron
              and set aside for 10 minutes.
            </Typography>
            <Typography paragraph>
              Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet
              over medium-high heat. Add chicken, shrimp and chorizo, and cook,
              stirring occasionally until lightly browned, 6 to 8 minutes.
              Transfer shrimp to a large plate and set aside, leaving chicken
              and chorizo in the pan. Add pimentón, bay leaves, garlic,
              tomatoes, onion, salt and pepper, and cook, stirring often until
              thickened and fragrant, about 10 minutes. Add saffron broth and
              remaining 4 1/2 cups chicken broth; bring to a boil.
            </Typography>

            <Typography />
            <TextField
              id="standard-dense"
              label="Add Comment"
              className={clsx(classes.textField, classes.dense)}
              margin="dense"
              onChange={handleComment}
            />
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
};

export default Forum;
