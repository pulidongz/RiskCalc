import React, { useEffect, useState, useRef } from "react";
import {
    Grid,
    Slider,
    Paper,
    Typography,
} from "@material-ui/core";

// import { useCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
		maxWidth: 600,
        paddingTop: 10,
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

export default function ConstDelays(props){
    const classes = useStyles();
    const { 
		val1, setVal1,
		val2, setVal2,
		val3, setVal3,
		val4, setVal4,
		val5, setVal5,
		val6, setVal6,
		val7, setVal7,
		val8, setVal8, } = props;

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
                    value={val1}
                    onChange={setVal1}
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
                    value={val2}
                    onChange={setVal2}
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
                    value={val3}
                    onChange={setVal3}
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
                    value={val4}
                    onChange={setVal4}
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
                    value={val5}
                    onChange={setVal5}
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
                    value={val6}
                    onChange={setVal6}
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
                    value={val7}
                    onChange={setVal7}
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
                    value={val8}
                    onChange={setVal8}
								/>
							</Grid>

						</Grid>
					</Paper>
        </Grid>
    );
}