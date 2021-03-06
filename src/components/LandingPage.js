import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
		Stepper,
		Step,
		StepLabel,
		Typography,
		Button,
} from "@material-ui/core";

import ProfessionPage from './ProfessionPage';
import CriteriaPage from './CriteriaPage';
import ConstDelays from './ConstDelays';
import WorkmanDefects from './WorkmanDefects';
import ResultPage from './ResultPage';

// import { useCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";

function getSteps() {
	return ['Select your profession',
					'Choose criteria',
					'Answer the questionnaire',
					'View result'];
}

const useStyles = makeStyles({
    root:{
        maxWidth: 1400,
        paddingTop: 50,
        display: 'flex',
        margin: 'auto',
        flexWrap: 'wrap',
    },
	stepper: {
		paddingBottom: 10
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
	backButton: {
		textAlign: 'right'
	}
  });

export default function LandingPage(props){
  const classes = useStyles();

	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();
	const [user, setUser] = useState("");
	const [criteria, setCriteria] = useState("");
	const [val1, setVal1] = useState(0);
	const [val2, setVal2] = useState(0);
	const [val3, setVal3] = useState(0);
	const [val4, setVal4] = useState(0);
	const [val5, setVal5] = useState(0);
	const [val6, setVal6] = useState(0);
	const [val7, setVal7] = useState(0);
	const [val8, setVal8] = useState(0);


	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <ProfessionPage user={user} setUser={setUser} selectUserType={selectUserType} />;
			case 1:
				return <CriteriaPage criteria={criteria} setCriteria={setCriteria} selectCriteriaType={selectCriteriaType} />;
			case 2:
				if(criteria === "Construction Delay"){
					return <ConstDelays user={user} criteria={criteria} val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} setVal1={setVal1} setVal2={setVal2} setVal3={setVal3} setVal4={setVal4} setVal5={setVal5} setVal6={setVal6} setVal7={setVal7} setVal8={setVal8} handleNextMainContent={handleNext}
					/>;
				}else{
					return <WorkmanDefects user={user} criteria={criteria} val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} setVal1={setVal1} setVal2={setVal2} setVal3={setVal3} setVal4={setVal4} setVal5={setVal5} setVal6={setVal6} setVal7={setVal7} setVal8={setVal8} 
					/>;
				}
			case 3:
				return <ResultPage user={user} criteria={criteria} val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} />;
		}
	};

	const getButtonContent = (step) => {
		switch (step) {
			case 0:
				return null;
			case 1:
				return (
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={6}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Button variant="contained" onClick={handleBack} className={classes.backButton}>
									Back
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Button variant="contained" disabled={true} color="primary" onClick={handleNext}>
									Next
								</Button>
							</Grid>
						</Grid>
					</Grid>
				);
			case 2:
				return (
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={6}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Button variant="contained" onClick={handleBack} className={classes.backButton}>
									Back
								</Button>
							</Grid>
						</Grid>
						<Grid item xs={6}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Button variant="contained" disabled={[val1, val2, val3, val4, val5, val6, val7, val8].includes(0)} color="primary" onClick={handleNext}>
									Next
								</Button>
							</Grid>	
						</Grid>
					</Grid>
				);
			case 3:
				return (
					<Grid container direction="row" justify="center" alignItems="center">
						<Grid item xs={6}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Button variant="contained" disabled={true} onClick={handleBack} className={classes.backButton}>
									Back
								</Button>
							</Grid>	
						</Grid>		
						<Grid item xs={6}>
							<Grid container direction="row" justify="center" alignItems="center">
								<Button variant="contained" color="primary" onClick={handleReset}>
									Try Again
								</Button>
							</Grid>
						</Grid>
					</Grid>
				);
		}
	};

	const selectUserType = (user) => {
		setUser(user);
		handleNext();
	}

	const selectCriteriaType = (criteria) => {
		setCriteria(criteria);
		handleNext();
	}

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
		setUser("");
		setCriteria("");
		setVal1(0);
		setVal2(0);
		setVal3(0);
		setVal4(0);
		setVal5(0);
		setVal6(0);
		setVal7(0);
		setVal8(0);
	};

    return(
      <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
				<Grid item xs={12} style={{textAlign: 'center'}}>
					<Typography variant="h5" gutterBottom>CONSTRUCTION DELAYS AND WORKMANSHIP DEFECTS IMPACT AND PROBABILITY CALCULATOR</Typography>
					<Typography variant="body1" gutterBottom>For mass housing developments</Typography>
					<Typography variant="h6" gutterBottom>To view the Supplementary Construction Guidelines, click <a href="https://docs.google.com/document/d/1op7l2_3-OP8-dr85IZ3D_r_F0d_cb5ytei3s1UmqhGE/edit" target="_blank">HERE</a></Typography>
					<Typography variant="caption" gutterBottom>(Use desktop browser for a better experience)</Typography>
				</Grid>
			
				{/* STEPPER COMPONENT */}
				<Grid item xs={12}>
					<Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel >
						{steps.map((label, index) => (
							<Step key={label}>
								<StepLabel>{label}</StepLabel>
							</Step>
						))}
					</Stepper>
				</Grid>

				{/* BLOCK CONTENT */}
				<Grid item xs={12}>
					{getStepContent(activeStep)}
				</Grid>
			
				{/* BUTTON GROUP */}
				<Grid item xs={12}>
					{getButtonContent(activeStep)}
				</Grid>
      </Grid>
    );
}