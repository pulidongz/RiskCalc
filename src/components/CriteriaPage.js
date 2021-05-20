import React, { useEffect, useState, useRef } from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";

import cons_delay from "../assets/images/cons_delay.jpg"
import workman_defects from "../assets/images/workman_defects.jpg"

// import { useCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
			maxWidth: 600,
			minHeight: '100vh',
			display: 'flex',
			margin: 'auto',
    	flexWrap: 'wrap',
    },
    card: {
      display: 'flex',
	    margin: 'auto',
    	flexWrap: 'wrap',
			padding: 10,
    },
    media: {
      height: 200,
    },
  });

export default function CriteriaPage(props){
    const classes = useStyles();
    const {criteria, setCriteria, selectCriteriaType} = props;
    console.log(JSON.stringify(props));
    return(
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6}>
            <Card className={classes.paper}>
                <CardActionArea onClick={()=>{selectCriteriaType("Construction Delay")}}>
                    <CardMedia
                    className={classes.media}
                    image={cons_delay}
                    title="Construction Delay"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Construction Delay
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={6}>
                
            <Card className={classes.paper}>
                <CardActionArea onClick={()=>{selectCriteriaType("Workmanship Defects")}}>
                    <CardMedia
                    className={classes.media}
                    image={workman_defects}
                    title="Workmanship Defects"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Workmanship Defects
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

            </Grid>
        </Grid>
    );
}