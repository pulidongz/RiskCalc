import React, { useEffect, useState, useRef } from "react";
import {
    Grid,
    Paper,
    Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import result from "../assets/images/result.png"

import cdos from "./formulas/cdos";
import cdcs from "./formulas/cdcs";
import wdos from "./formulas/wdos";
import wdcs from "./formulas/wdcs";


const useStyles = makeStyles({
	root:{
			maxWidth: 750,
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
			if(user === "Owner" && criteria === "Construction Delay"){
				setGetResult(cdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
			}
			else if(user === "Owner" && criteria === "Workmanship Defects"){
				setGetResult(wdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
			}
			else if(user === "Contractor" && criteria === "Construction Delay"){
				setGetResult(cdcs(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
			}
			// user === "Contractor" && criteria === "Workmanship Defects"
			else {
				setGetResult(wdcs(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
			}
		}, []); 

		const handleResult = (result) => {
			if(result >= 1 && result <= 2){
				return (<u>unlikely to happen</u>);
			}
			else if(result >= 2 && result <= 3){
				return (<u>likely to happen</u>);
			}
			else if(result >= 3 && result <= 4){
				return (<u>more likely to happen</u>);
			}
			else{
				return (<u>most definitely will happen</u>);
			}
		}

    return(
			<Paper elevation={3} style={{height: 400}}>
				<Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h6" gutterBottom>{user} Side: {criteria}</Typography>
					</Grid>
					<Grid item xs={6}>
						<Paper variant="outlined">
							<img src={result} />
						</Paper>
					</Grid>
					<Grid container direction="column" justify="flex-start" alignItems="center">
						<Grid item xs={12}>
						<Typography variant="h4" gutterBottom>Value: {getResult}</Typography>
						</Grid>
						<Grid item xs={12}>
							<Typography>The probability of encountering {criteria === "Construction Delay" ? "construction delay in your project": "workmanship defects in your project"} is {handleResult(getResult)}.</Typography>
						</Grid>
					</Grid>
        </Grid>
			</Paper>
    );
}