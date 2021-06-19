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
			maxWidth: 750,
			minHeight: '100vh',
			display: 'flex',
			margin: 'auto',
    	flexWrap: 'wrap',
    },
    card: {
      display: 'flex',
	    margin: 'auto',
    	flexWrap: 'wrap',
			padding: 0,
    },
    media: {
      height: 200,
    },
    cardContent: {
        height: 140,
        textAlign: "center"
    }
  });

export default function CriteriaPage(props){
    const classes = useStyles();
    const {criteria, setCriteria, selectCriteriaType} = props;
    console.log(JSON.stringify(props));
    return(
        <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6}>
            <Card className={classes.card}>
                <CardActionArea onClick={()=>{selectCriteriaType("Construction Delay")}}>
                    <CardMedia
                    className={classes.media}
                    image={cons_delay}
                    title="Construction Delay"
                    />
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Construction Delay
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Deficiencies in construction where events do not happen according to plan or as scheduled, more specific in causing delay.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={6}>
                
            <Card className={classes.card}>
                <CardActionArea onClick={()=>{selectCriteriaType("Workmanship Defects")}}>
                    <CardMedia
                    className={classes.media}
                    image={workman_defects}
                    title="Workmanship Defects"
                    />
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Workmanship Defects
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Construction deficiencies that occur when a contractor fails to build a structure or a component part in accordance with the construction documents, and with the defects showing within the warranty period.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>

            </Grid>
        </Grid>
    );
}