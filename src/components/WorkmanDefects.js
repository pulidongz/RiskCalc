import React, { useEffect, useState, useRef } from "react";
import {
    Avatar,
    Box,
    Button,
    CssBaseline,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Image,
    Grid,
    Slider,
    Paper,
    Typography,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,

} from "@material-ui/core";

import cons_delay from "../assets/images/cons_delay.jpg"
import workman_defects from "../assets/images/workman_defects.jpg"

// import { useCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
			maxWidth:700,
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
    questionnaire:{
      paddingLeft: 10,
			paddingRight: 40
    },
    slider: {
        width: 200
    },
    media: {
      height: 200,
    },
  });

  const marks = [
    {
      value: 1,
      label: '1 (Lowest)',
    },
    {
        value: 2,
        label: '2',
      },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5 (Highest)',
    },
  ];

function valuetext(value) {
return `${value}`;
}

export default function WorkmanDefects(props){
    const classes = useStyles();
    
    return(
        <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
					<Paper>
            <Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
                Construction Delays
            </Typography>
            <Typography variant="body2" gutterBottom>
                Select probability of the following cases (1 being least probable):
            </Typography>
            </Grid>
            <Grid className={classes.questionnaire} container direction="row" justify="center" alignItems="flex-start">
							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
										1. Owner Payment Processing Delays
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
										2. Owner Decision Making Delays
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
										3. Owner Document Preparation Delays
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
									4. Choosing Inefficient Contractor
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
									5. Insufficient Alloted Construction Schedule
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
									6. Poor Information Dissemination
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
										7. Possible Political Situtation
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>
						
							<Grid item xs={6}>
								<Typography variant="body2" gutterBottom>
										8. Possible Neighbor Problems
								</Typography>
							</Grid>
							<Grid className={classes.slider} item xs={6}>
								<Slider
										defaultValue={1}
										getAriaValueText={valuetext}
										aria-labelledby="discrete-slider"
										valueLabelDisplay="auto"
										step={1}
										marks
										min={1}
										max={5}
										marks={marks}
								/>
							</Grid>

						</Grid>
					</Paper>
        </Grid>
    );
}