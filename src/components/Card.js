import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import ShareIcon from "@mui/icons-material/Share";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import { makeStyles } from '@mui/styles';
import Chip from '@mui/material/Chip';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';

const useStyles = makeStyles({
  scrollBar: {
    "&::-webkit-scrollbar": {
      width: "3px",
    },

    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 5px rgb(255, 251, 251)",
      borderRadius: "10px",
    },
 
    "&::-webkit-scrollbar-thumb": {
      background: "#077DFA",
      borderRadius: "10px",
    },

    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgb(255, 251, 251)",
    }
  }
});


const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));


export default function MediaCard(props) {
  const classes = useStyles()
  
  return (
    <Grid item md={4} >
       <div
          style={{
            position: "relative",
            display: "flex",
            top : "1.5rem",
            // flexDirection:"column",
            // alignItems:"end"
          }}
        >
        <Chip color="secondary" size="small" avatar={<Avatar src={props.sourcelogo} />} label={props.sourceName} />
        </div>
          <Card className={classes.scrollBar} sx={{ maxWidth: 345 , maxHeight : 345, overflowY: "scroll"}}>
            <CardMedia
              component="img"
              height="190"
              image={props.img}
              alt={props.alt}
              
            />
          
        <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {props.headline}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.content}
          </Typography>
          
          <Div sx={{marginTop : "1rem"}}> Published by {props.author} at {new Date(props.publishedAt).toGMTString()}</Div> 
              
            </CardContent>
            <CardActions>
              <Button
                size="small"
                href=""
                variant="contained"
                endIcon={<ShareIcon />}
              >
                {" "}
                Share
              </Button>
              <Button
                sx={{ marginLeft: ".5rem" }}
                target="_blank"
                size="small"
                variant="contained"
                href={props.learnMore}
                endIcon={<LocalLibraryIcon />}
              >
                Learn More
              </Button>
            </CardActions>
        </Card>
  
        </Grid>     
  );
}
