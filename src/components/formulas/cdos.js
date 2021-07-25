export default function cdos(val1, val2, val3, val4, val5, val6, val7, val8) {

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
	console.log("cd_a", cd_a);
	var cd_b = 0.15769*OPPDn + 0.43467*ODMDn + 0.34215*ODPDn + 0.53135*CICn + 0.053462*IACSn + 0.32618*PCIDn + 0.349*PSn - 0.079944*NPn - 0.75369;
	console.log("cd_b", cd_b);
	var cd_g = -Math.abs(0.45043)*OPPDn - 0.76694*ODMDn + 0.61899*ODPDn + 0.13261*CICn - 0.22672*IACSn + 0.15984*PCIDn - 0.54776*PSn - 0.21265*NPn + 1.3961;
	console.log("cd_g", cd_g);
	var cd_d = 0.15964*OPPDn + 0.3555*ODMDn + 0.33444*ODPDn + 0.46211*CICn + 0.0059993*IACSn + 0.53318*PCIDn + 0.1585*PSn - 0.078339*NPn - 0.91647;
	console.log("cd_d", cd_d);
	var cd_e = -Math.abs(1.3076)*OPPDn + 1.2664*ODMDn + 0.49101*ODPDn + 2.1571*CICn + 0.35441*IACSn - 2.0085*PCIDn - 0.13073*PSn + 0.03479*NPn - 0.24313;
	console.log("cd_e", cd_e);
	var cd_z = -Math.abs(0.70623)*OPPDn + 0.49539*ODMDn - 0.48514*ODPDn + 0.34646*CICn - 0.24829*IACSn + 0.057684*PCIDn - 0.66786*PSn - 0.089281*NPn - 1.3112;
	console.log("cd_z", cd_z);
	var cd_h = -Math.abs(1.76)*OPPDn + 0.81515*ODMDn + 0.92478*ODPDn - 0.33256*CICn + 0.92847*IACSn + 0.07867*PCIDn - 0.54034*PSn - 0.4924*NPn - 0.072979;
	console.log("cd_h", cd_h);
	var cd_th = 0.79609*OPPDn - 0.69284*ODMDn + 0.89944*ODPDn + 0.051006*CICn + 0.10291*IACSn + 1.0061*PCIDn + 0.63469*PSn + 0.027278*NPn + 2.8591;
	console.log("cd_th",cd_th);

	//HIDDEN NEURONS
	var HN1 = (Math.exp(cd_a) - Math.exp(-cd_a)) / (Math.exp(cd_a) + Math.exp(-cd_a));
	console.log("HN1",HN1);
	var HN2 = (Math.exp(cd_b) - Math.exp(-cd_b)) / (Math.exp(cd_b) + Math.exp(-cd_b));
	console.log("HN2",HN2);
	var HN3 = (Math.exp(cd_g) - Math.exp(-cd_g)) / (Math.exp(cd_g) + Math.exp(-cd_g));
	console.log("HN3",HN3);
	var HN4 = (Math.exp(cd_d) - Math.exp(-cd_d)) / (Math.exp(cd_d) + Math.exp(-cd_d));
	console.log("HN4",HN4);
	var HN5 = (Math.exp(cd_e) - Math.exp(-cd_e)) / (Math.exp(cd_e) + Math.exp(-cd_e));
	console.log("HN5",HN5);
	var HN6 = (Math.exp(cd_z) - Math.exp(-cd_z)) / (Math.exp(cd_z) + Math.exp(-cd_z));
	console.log("HN6",HN6);
	var HN7 = (Math.exp(cd_h) - Math.exp(-cd_h)) / (Math.exp(cd_h) + Math.exp(-cd_h));
	console.log("HN7",HN7);
	var HN8 = (Math.exp(cd_th) - Math.exp(-cd_th)) / (Math.exp(cd_th) + Math.exp(-cd_th));
	console.log(Math.exp(-cd_th));
	console.log("HN8",HN8);


	// NORMALIZED CONSTRUCTION DELAYS RATING MODEL - OWNER SIDE
	var K = -1.1976*HN1 - 1.3398*HN2 - 1.8781*HN3 + 1.6952*HN4 + 0.14742*HN5 - 0.55561*HN6 + 0.0050434*HN7 + 1.2913*HN8 - 0.80824;
	console.log(K);
	var CDOSn = (Math.exp(K) - Math.exp(-K)) / (Math.exp(K) + Math.exp(-K));
	// FINAL - CONSTRUCTION DELAY OWNER SIDE
	var CDOS = 2*(CDOSn+1)+1;

	return CDOS;
}