import React, { useEffect, useState, useRef } from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
		Stepper,
		Step,
		StepLabel,
		StepContent,
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

import owner from "../assets/images/owner.jpg";
import contractor from "../assets/images/contractor.jpg";

function handleContent(app_key) {
	let return_feat = [];
    const lookup_obj = {
        profPage: <ProfessionPage />,
        criteriaOwner: <CriteriaPage />,
        workmanDefects: <WorkmanDefects />,
        constDelays: <ConstDelays />,
        resultPage: <ResultPage />,


			// switch (app_key) {
			// 	case "criteria":
			// 		return_feat = [<CriteriaPage />];
			// 		break
			// 	case "workmanship_defects":
			// 		return_feat = [<WorkmanDefects />];
			// 		break
			// 	case "construction_delays":
			// 		return_feat = [<ConstDelays />];
			// 		break
			// 	case "result":
			// 		return_feat = [<WorkmanDefects />];
			// 		break
			// 	default:
			// 		break
			// }
    };
    return lookup_obj[app_key];
}

function Content({ app_key }) {
    return <React.Fragment>{handleContent(app_key)}</React.Fragment>;
}

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
    const [appKey, setAppKey] = useState("profPage");
    const [body, setBody] = useState(<ProfessionPage />);

	const getStepContent = (step) => {
		switch (step) {
			case 0:
				return <ProfessionPage/>;
			case 1:
				return <CriteriaPage user={user}/>;
			case 2:
				return <WorkmanDefects {...props}/>;
			case 3:
				return <ResultPage {...props}/>;
			default:
				return 'Unknown step';
		}
	};

    const handleChangeBodyContent = (user, app_key) => {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
			setUser(user);
			setAppKey(app_key);

			let return_feat = [];
			switch (app_key) {
				case "criteria":
					return_feat = [<CriteriaPage user={user}/>];
					break
				case "workmanship_defects":
					return_feat = [<WorkmanDefects {...props}/>];
					break
				case "construction_delays":
					return_feat = [<ConstDelays {...props}/>];
					break
				case "result":
					return_feat = [<WorkmanDefects {...props}/>];
					break
				default:
					return_feat = [<ProfessionPage {...props}/>];
					break
			}
			alert(JSON.stringify(return_feat));
			setBody(return_feat);
    };

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