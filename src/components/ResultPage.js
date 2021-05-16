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
			setGetResult(cdos(val1, val2, val3, val4, val5, val6, val7, val8));
		}, []); 

		const computeCDOS = () => {
		//------------------------------------------START OF CALCULATIONS------------------------------------------//
		
		// CONVERT STRING TO INTEGER
		var tval1 = parseInt(val1);
		var tval2 = parseInt(val2);
		var tval3 = parseInt(val3);
		var tval4 = parseInt(val4);
		var tval5 = parseInt(val5);
		var tval6 = parseInt(val6);
		var tval7 = parseInt(val7);
		var tval8 = parseInt(val8);
		

		// NORMALIZED VALUES
		var OPPDn = 0.5*(tval1-1)-1;
		var ODMDn = 0.5*(tval2-1)-1;
		var ODPDn = 0.5*(tval3-1)-1;
		var CICn = 0.5*(tval4-1)-1;
		var IACSn = 0.5*(tval5-1)-1;
		var PCIDn = 0.5*(tval6-1)-1;
		var PSn = 0.5*(tval7-1)-1;
		var NPn = 0.5*(tval8-1)-1;


		// GREEK VALUES - CONSTRUCTION DELAY
		var cd_a = 0.58551*OPPDn + 0.56023*ODMDn - 0.64149*ODPDn - 0.040093*CICn + 0.10457*IACSn + 0.031359*PCIDn + 0.45703*PSn - 0.17032*NPn - 1.8498;

		var cd_b = 0.15769*OPPDn + 0.43467*ODMDn + 0.34215*ODPDn + 0.53135*CICn + 0.053462*IACSn + 0.32618*PCIDn + 0.349*PSn - 0.079944*NPn - 0.75369;

		var cd_g = -Math.abs(0.45043)*OPPDn - 0.76694*ODMDn + 0.61899*ODPDn + 0.13261*CICn - 0.22672*IACSn + 0.15984*PCIDn - 0.54776*PSn - 0.21265*NPn + 1.3961;

		var cd_d = 0.15964*OPPDn + 0.3555*ODMDn + 0.33444*ODPDn + 0.46211*CICn + 0.0059993*IACSn + 0.53318*PCIDn + 0.1585*PSn - 0.078339*NPn - 0.91647;

		var cd_e = -Math.abs(1.3076)*OPPDn + 1.2664*ODMDn + 0.49101*ODPDn + 2.1571*CICn + 0.35441*IACSn - 2.0085*PCIDn - 0.13073*PSn + 0.03479*NPn - 0.24313;

		var cd_z = -Math.abs(0.70623)*OPPDn + 0.49539*ODMDn - 0.48514*ODPDn + 0.34646*CICn - 0.24829*IACSn + 0.057684*PCIDn - 0.66786*PSn - 0.089281*NPn - 1.3112;

		var cd_h = -Math.abs(1.76)*OPPDn + 0.81515*ODMDn + 0.92478*ODPDn - 0.33256*CICn + 0.92847*IACSn + 0.07867*PCIDn - 0.54034*PSn - 0.4924*NPn - 0.072979;

		var cd_th = 0.79609*OPPDn - 0.69284*ODMDn + 0.89944*ODPDn + 0.051006*CICn + 0.10291*IACSn + 1.0061*PCIDn + 0.64369*PSn - 0.027278*NPn + 2.8591;


		//HIDDEN NEURONS
		var HN1 = (Math.exp(cd_a) - Math.exp(-Math.abs(cd_a))) / (Math.exp(cd_a) + Math.exp(-Math.abs(cd_a)));

		var HN2 = (Math.exp(cd_b) - Math.exp(-Math.abs(cd_b))) / (Math.exp(cd_b) + Math.exp(-Math.abs(cd_b)));

		var HN3 = (Math.exp(cd_g) - Math.exp(-Math.abs(cd_g))) / (Math.exp(cd_g) + Math.exp(-Math.abs(cd_g)));

		var HN4 = (Math.exp(cd_d) - Math.exp(-Math.abs(cd_d))) / (Math.exp(cd_d) + Math.exp(-Math.abs(cd_d)));

		var HN5 = (Math.exp(cd_e) - Math.exp(-Math.abs(cd_e))) / (Math.exp(cd_e) + Math.exp(-Math.abs(cd_e)));

		var HN6 = (Math.exp(cd_z) - Math.exp(-Math.abs(cd_z))) / (Math.exp(cd_z) + Math.exp(-Math.abs(cd_z)));

		var HN7 = (Math.exp(cd_h) - Math.exp(-Math.abs(cd_h))) / (Math.exp(cd_h) + Math.exp(-Math.abs(cd_h)));

		var HN8 = (Math.exp(cd_th) - Math.exp(-Math.abs(cd_th))) / (Math.exp(cd_th) + Math.exp(-Math.abs(cd_th)));


	// NORMALIZED CONSTRUCTION DELAYS RATING MODEL - OWNER SIDE
	var K = -Math.abs(1.1976)*HN1 - 1.3398*HN2 - 1.8781*HN3 + 1.6952*HN4 + 0.14742*HN5 - 0.55561*HN6 + 0.0050434*HN7 + 1.2913*HN8 - 0.80824;
	var CDOSn = (Math.exp(K) - Math.exp(-Math.abs(K))) / (Math.exp(K) + Math.exp(-Math.abs(K)));
	// FINAL - CONSTRUCTION DELAY OWNER SIDE
	var CDOS = 2*(CDOSn+1)+1;
	//------------------------------------------END OF CALCULATIONS------------------------------------------//
	return CDOS;
	}
 
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