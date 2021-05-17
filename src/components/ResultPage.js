import React, { useEffect, useState, useRef } from "react";
import {
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import cdos from "./formulas/cdos";
import cdcs from "./formulas/cdcs";

const useStyles = makeStyles({
	root:{
	maxWidth: 600,
			padding: 20,
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

export default function ResultPage(props){
    const classes = useStyles();
    const {
		user, criteria,
		val1, setVal1,
		val2, setVal2,
		val3, setVal3,
		val4, setVal4,
		val5, setVal5,
		val6, setVal6,
		val7, setVal7,
		val8, setVal8, } = props;
		const [getResult, setGetResult] = useState(null);
		
		// Construction Delay, Owner Side
		// <cdos val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} />;
		//setConstdelayos(cdos);
		// Construction Delay, Contractor Side
		// const cdcs = <cdos val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} />;
		// Workmanship Defects, Owner Side
		// const wdos = <cdos val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} />;
		// Workmanship Defects, Contractor Side
		// const wdcs = <cdos val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} />;
		
		useEffect(() => {
			//setConstdelayos(computeCDOS());
			setGetResult(cdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
		}, []); 

    return(
			<Paper elevation={3} style={{height: 300}}>
				<Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h6" gutterBottom>{user} Side: {criteria}</Typography>
					</Grid>
					<Grid container direction="column" justify="flex-start" alignItems="center">
						<Grid item xs={12}>
						<Typography variant="h4" gutterBottom>{getResult}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography>is the most probable {criteria === "Construction Delay" ? "rate of delay for your project" : "degree of workmanship defects you will encounter in your project."}</Typography>
					</Grid>
					</Grid>
        </Grid>
			</Paper>
    );
}