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

// import { useCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
			maxWidth: 600,
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

export default function ProfessionPage(props){
    const classes = useStyles();
    const { user, setUser, selectUserType } = props;

    console.log(JSON.stringify(props));

    return(
        <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
            <Grid item xs={6}>
            <Card className={classes.paper}>
                <CardActionArea onClick={()=>{selectUserType("Owner")}}>
                    <CardMedia
                    className={classes.media}
                    image={owner}
                    title="Owner/Developer"
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                        Owner/Developer
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
                    <CardActionArea onClick={()=>{selectUserType("Contractor")}}>
                        <CardMedia
                        className={classes.media}
                        image={contractor}
                        title="Contractor"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Contractor
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