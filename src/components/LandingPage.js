import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
		Stepper,
		Step,
		StepLabel,
		Typography,
		Button,
		Card,
		CardActionArea,
		CardMedia,
		CardContent,
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
					'Answer questionnaire',
					'Result'];
}

const useStyles = makeStyles({
    root:{
        maxWidth: 600,
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
				if(criteria === "construction_delay"){
					return <ConstDelays val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8}
						setVal1={setVal1} setVal2={setVal2} setVal3={setVal3} setVal4={setVal4} setVal5={setVal5} setVal6={setVal6} setVal7={setVal7} setVal8={setVal8} 
					/>;
				}else{
					return <WorkmanDefects val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8}
						setVal1={setVal1} setVal2={setVal2} setVal3={setVal3} setVal4={setVal4} setVal5={setVal5} setVal6={setVal6} setVal7={setVal7} setVal8={setVal8} 
					/>;
				}
			case 3:
				return <ResultPage user={user} criteria={criteria} val1={val1} val2={val2} val3={val3} val4={val4} val5={val5} val6={val6} val7={val7} val8={val8} />;
			default:
				return 'Unknown step';
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
	};

    return(
        <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
			<Typography variant="h6" gutterBottom>Construction Duration and Workmanship Calculator</Typography>
			<Typography variant="subtitle2" gutterBottom>For mass housing developments</Typography>

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

					{/* SELECT PROFESSION */}
					{getStepContent(activeStep)}

					{/* BUTTON GROUP */}
					<Grid item xs={12}>
						{activeStep === steps.length ? (
						<div>
							<Button onClick={handleReset}>Try Again</Button>
						</div>
					) : (
						<div>
							<Button
								disabled={activeStep === 0}
								onClick={handleBack}
								className={classes.backButton}
							>
								Back
							</Button>
							<Button variant="con
							tained" color="primary" onClick={handleNext}>
								{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
							</Button>
						</div>
					)}
					</Grid>
        </Grid>
    );
}