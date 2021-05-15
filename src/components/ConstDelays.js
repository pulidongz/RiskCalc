import React, { useEffect, useState, useRef } from "react";
import clsx from 'clsx';
import {
    Grid,
    Slider,
    Paper,
    Typography,
		Divider,
} from "@material-ui/core";

import Radio, { RadioProps } from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

// import { useCookies } from "react-cookie";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    root:{
		maxWidth: 600,
        padding: 10,
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
      paddingLeft: 40,
			paddingRight: 40
    },
    slider: {
        width: 200
    },
    media: {
      height: 200,
    },

		radio_button: {
			'&:hover': {
				backgroundColor: 'transparent',
			},
		}, 
		icon: {
			borderRadius: '50%',
			width: 16,
			height: 16,
			boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
			backgroundColor: '#f5f8fa',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
			'$root.Mui-focusVisible &': {
				outline: '2px auto rgba(19,124,189,.6)',
				outlineOffset: 2,
			},
			'input:hover ~ &': {
				backgroundColor: '#ebf1f5',
			},
			'input:disabled ~ &': {
				boxShadow: 'none',
				background: 'rgba(206,217,224,.5)',
			},
		},
		checkedIcon: {
			backgroundColor: '#137cbd',
			backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
			'&:before': {
				display: 'block',
				width: 16,
				height: 16,
				backgroundImage: 'radial-gradient(#fff,#fff 28%,transparent 32%)',
				content: '""',
			},
			'input:hover ~ &': {
				backgroundColor: '#106ba3',
			},
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

// Inspired by blueprintjs
function StyledRadio(props: RadioProps) {
  const classes = useStyles();

  return (
    <Radio
      className={classes.radio_button}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
}

export default function ConstDelays(props){
    const classes = useStyles();
		const [activeStep, setActiveStep] = React.useState(1);
    const { 
		val1, setVal1,
		val2, setVal2,
		val3, setVal3,
		val4, setVal4,
		val5, setVal5,
		val6, setVal6,
		val7, setVal7,
		val8, setVal8,
		handleNextMainContent, } = props;

		const handleNext = () => {
			setActiveStep((prevActiveStep) => prevActiveStep + 1);
		};
	
		const handleBack = () => {
			setActiveStep((prevActiveStep) => prevActiveStep - 1);
		};

    return(
			<Paper>
        <Grid className={classes.root} container direction="row" justify="center" alignItems="center" spacing={2}>
					<Grid item xs={12}>
            <Typography variant="h6" gutterBottom>
                Construction Delays
            </Typography>
            <Typography variant="body2" gutterBottom>
                Select probability of the following cases (<strong>1</strong> being the <u>least</u> probable):
            </Typography>
            </Grid>
						<Divider variant="middle" />
						<Grid container direction="row" justify="flex-end" alignItems="flex-start">
							<Grid item xs={7}></Grid>
							<Grid item xs={1}>
								<Typography variant="body2" gutterBottom>1</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography variant="body2" gutterBottom>2</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography variant="body2" gutterBottom>3</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography variant="body2" gutterBottom>4</Typography>
							</Grid>
							<Grid item xs={1}>
								<Typography variant="body2" gutterBottom>5</Typography>
							</Grid>
						</Grid>




						{/* QUESTION 1 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>1. Owner Payment Processing Delays</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item1" fullWidth="true">
									<RadioGroup aria-label="gender" name="item1_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0}}
										onChange={(event)=>{
											setVal1(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 2 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>2. Owner Decision Making Delays</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item2" fullWidth="true">
									<RadioGroup aria-label="gender" name="item2_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal2(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 3 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>3. Owner Document Preparation Delays</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item3" fullWidth="true">
									<RadioGroup aria-label="gender" name="item3_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal3(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 4 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>4. Choosing Inefficient Contractor</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item4" fullWidth="true">
									<RadioGroup aria-label="gender" name="item4_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal4(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 5 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>5. Insufficient Alloted Construction Schedule</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item5" fullWidth="true">
									<RadioGroup aria-label="gender" name="item5_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal5(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 6 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>6. Poor Information Dissemination</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item6" fullWidth="true">
									<RadioGroup aria-label="gender" name="item6_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal6(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 7 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>7. Possible Political Situtation</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item7" fullWidth="true">
									<RadioGroup aria-label="gender" name="item7_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal7(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
						{/* QUESTION 8 */}
						<Grid container direction="row" justify="center" alignItems="center" spacing={1}>
							<Grid item xs={7}>
								<Typography variant="body2" gutterBottom>8. Possible Neighbor Problems</Typography>
							</Grid>
							<Grid item xs={5}>
								<FormControl component="Item8" fullWidth="true">
									<RadioGroup aria-label="gender" name="item8_radiogroup" style={{display: 'flex', flexDirection: 'row', padding: 0,}}
										onChange={(event)=>{
											setVal3(event.target.value);
											handleNext();
										}}>
										<Grid xs={3}><FormControlLabel value="1" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="2" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="3" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="4" control={<StyledRadio />} /></Grid>
										<Grid xs={3}><FormControlLabel value="5" control={<StyledRadio />} /></Grid>
									</RadioGroup>
								</FormControl>
							</Grid>
						</Grid>
        </Grid>
			</Paper>
    );
}