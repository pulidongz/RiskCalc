import React from "react";
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Grid,
    Typography,
} from "@material-ui/core";

import owner from "../assets/images/owner.jpg"
import contractor from "../assets/images/contractor.jpg"

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
        maxWidth: 750,
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
			height: 220,
			textAlign: "center"
		}
  });

export default function ProfessionPage(props){
    const classes = useStyles();
    const { user, setUser, selectUserType } = props;

    console.log(JSON.stringify(props));

    return(
        <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6}>
            <Card className={classes.card}>
                <CardActionArea onClick={()=>{selectUserType("Owner")}}>
                    <CardMedia
                    className={classes.media}
                    image={owner}
                    title="Owner/Developer"
                    />
                    <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        Owner/Developer
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Professionals in the field of construction involved in the development and management of construction projects, coming from the different fields of engineering, architecture, or even business and finance management, as long as property development is concerned. They are the ones in charge of the development of a project, from conceptualization, planning, implementation, and management.
                    </Typography>
                    </CardContent>
                </CardActionArea>
                </Card>
            </Grid>

            <Grid item xs={6}>
                <Card className={classes.card}>
                    <CardActionArea onClick={()=>{selectUserType("Contractor")}}>
                        <CardMedia
                        className={classes.media}
                        image={contractor}
                        title="Contractor"
                        />
                        <CardContent className={classes.cardContent}>
                        <Typography gutterBottom variant="h5" component="h2">
                            Contractor
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Professionals in the field of construction who do the implementation works of a construction project, composed of professionals and workers who conduct site works to complete the construction project. Contractors also come in different classifications, depending on the type of services and products they are able to offer.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
}