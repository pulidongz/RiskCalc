import React, { useEffect, useState } from "react";
import {
    Grid,
    Paper,
    Typography,
		CardMedia,
		Table,
		TableBody,
		TableCell,
		TableContainer,
		TableHead,
		TableRow,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import prob_value from "../assets/images/prob_value.png";
import impact_value from "../assets/images/impact_value.png";
import rifcdos from "../assets/images/RIFCDOS.png";
import rifcdcs from "../assets/images/RIFCDCS.png";
import rifwdos from "../assets/images/RIFWDOS.png";
import rifwdcs from "../assets/images/RIFWDCS.png";

import cdos from "./formulas/cdos";
import cdcs from "./formulas/cdcs";
import wdos from "./formulas/wdos";
import wdcs from "./formulas/wdcs";

import rifa_cdos from "./formulas/rifa_cdos";
import rifa_cdcs from "./formulas/rifa_cdcs";
import rifa_wdos from "./formulas/rifa_wdos";
import rifa_wdcs from "./formulas/rifa_wdcs";

const useStyles = makeStyles({
	root:{
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
		height: 400,
		width: '100%',
	},
	table: {
    minWidth: 190,
		height: 200,
  },
});

function createData(range, description) {
  return { range, description };
}

const rows_deffect = [
  createData('Between 1 to 2', '0-25% Deffective'),
  createData('Between 2 to 3', '25-50% Deffective'),
  createData('Between 3 to 4', '50-75% Deffective'),
  createData('Between 4 to 5', '75-100% Deffective'),
];

const rows_delay = [
  createData('Between 1 to 2', '0-25% Delayed'),
  createData('Between 2 to 3', '25-50% Delayed'),
  createData('Between 3 to 4', '50-75% Delayed'),
  createData('Between 4 to 5', '75-100% Delayed'),
];

const rows_probability = [
	createData('Between 1 to 2', 'Unlikely to happen'),
  createData('Between 2 to 3', 'Likely to happen'),
  createData('Between 3 to 4', 'More likely to happen'),
  createData('Between 4 to 5', 'Most definitely will happen'),
];


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
		const [graph, setGraph] = useState(null);
		const [probValue, setProbValue] = useState(null);
		const [impactValue, setImpactValue] = useState(null);

		
		useEffect(() => {
			//setConstdelayos(computeCDOS());
			if(user === "Owner" && criteria === "Construction Delay"){
				setProbValue(cdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setImpactValue(rifa_cdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setGraph(rifcdos);
			}
			else if(user === "Owner" && criteria === "Workmanship Defects"){
				setProbValue(wdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setImpactValue(rifa_wdos(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setGraph(rifwdos);
			}
			else if(user === "Contractor" && criteria === "Construction Delay"){
				setProbValue(cdcs(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setImpactValue(rifa_cdcs(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setGraph(rifcdcs);
			}
			// user === "Contractor" && criteria === "Workmanship Defects"
			else {
				setProbValue(wdcs(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setImpactValue(rifa_wdcs(val1, val2, val3, val4, val5, val6, val7, val8).toFixed(6));
				setGraph(rifwdcs);
			}
		}, []); 

		const handleProbValue = (result) => {
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
		const handleImpactValue = (result) => {
			if(result >= 0 && result <= 2){
				if(criteria === "Workmanship Defects"){
					return (<b>0-25% Defects</b>);
				} else {
					return (<b>0-25% Delay</b>);
				}
			}
			else if(result >= 2 && result <= 3){
				if(criteria === "Workmanship Defects"){
					return (<b>25-50% Defects</b>);
				} else {
					return (<b>25-50% Delay</b>);
				}
			}
			else if(result >= 3 && result <= 4){
				if(criteria === "Workmanship Defects"){
					return (<b>50-75% Defects</b>);
				} else {
					return (<b>50-75% Delay</b>);
				}
			}
			else{
				if(criteria === "Workmanship Defects"){
					return (<b>75-100% Defects</b>);
				} else {
					return (<b>75-100% Delay</b>);
				}
			}
		}

    return(
			<Paper elevation={3} className={classes.root}>
				<Grid container direction="row" justifyContent="center" alignItems="center" spacing={2}>
					<Grid item xs={12}>
						<Typography variant="h6" gutterBottom style={{fontWeight: 600}}>{user.toUpperCase()} SIDE: {criteria.toUpperCase()}</Typography>
					</Grid>
					<Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
						<Grid item xs={6}>
							<Paper variant="outlined">
								<CardMedia
									className={classes.media}
									image={graph}
									title={criteria}
								/>
							</Paper>
						</Grid>
						<Grid item xs={6}>
							{/* IMPACT AND PROBABILITY VALUES */}
							<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
								<Grid item xs={6}>
									<Typography variant="h5" gutterBottom style={{fontWeight: 600}}>Impact Value: {impactValue}</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="h5" gutterBottom style={{fontWeight: 600}}>Probability Value: {probValue}</Typography>
								</Grid>
							</Grid>
							{/* IMPACT AND PROBABILITY TABLES */}
							<Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table className={classes.table} aria-label="simple table">
											<TableHead>
												<TableRow>
													<TableCell><b>Output Range</b></TableCell>
													<TableCell><b>Description</b></TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{criteria == "Workmanship Defects" ?
												rows_deffect.map((row, i) => (
													<TableRow key={i}>
														<TableCell component="th" scope="row">
															{row.range}
														</TableCell>
														<TableCell>{row.description}</TableCell>
													</TableRow>
												))
												:
												rows_delay.map((row, i) => (
													<TableRow key={i}>
														<TableCell component="th" scope="row">
															{row.range}
														</TableCell>
														<TableCell>{row.description}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
								<Grid item xs={6}>
									<TableContainer component={Paper}>
										<Table className={classes.table} aria-label="simple table">
											<TableHead>
												<TableRow>
													<TableCell><b>Output Range</b></TableCell>
													<TableCell><b>Description</b></TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												{rows_probability.map((row, i) => (
													<TableRow key={i}>
														<TableCell component="th" scope="row">
															{row.range}
														</TableCell>
														<TableCell>{row.description}</TableCell>
													</TableRow>
												))}
											</TableBody>
										</Table>
									</TableContainer>
								</Grid>
							</Grid>
							{/* IMPACT AND PROBABILITY TEXTS */}
							<Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
								<Grid item xs={6}>
									<Typography variant="body2" paragraph>
										The project will experience approximately {handleImpactValue(impactValue)} from the scope of works. This result is influenced by the artifical neural network model for {criteria} in housing developments.
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<Typography variant="body2" paragraph>
										The probability of encountering {criteria === "Construction Delay" ? "construction delay in your project": "workmanship defects in your project"} is {handleProbValue(probValue)}.
									</Typography>
								</Grid>
							</Grid>
							<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
								<Grid item xs={12}>
									<Typography style={{fontWeight: 600, textAlign: 'center'}}>
										The degree of {criteria.toLowerCase()} and its probability can be mitigated by addressing the factors that have higher impact and relative importance.
									</Typography>
								</Grid>
						</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
    );
}