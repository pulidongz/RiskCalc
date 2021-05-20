export default function wdos(val1, val2, val3, val4, val5, val6, val7, val8) {

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
    var PPMSn = 0.5*(val1-1)-1
    var DSPn = 0.5*(val2-1)-1
    var ORPAWn = 0.5*(val3-1)-1
    var OAAMn = 0.5*(val4-1)-1
    var SICDn = 0.5*(val5-1)-1
    var TULCUn = 0.5*(val6-1)-1
    var TCUMUn = 0.5*(val7-1)-1
    var PDPMMn = 0.5*(val8-1)-1

    // GREEK VALUES - CONSTRUCTION DELAY
    var cd_a = -(0.15603*PPMSn)+(0.64301*DSPn)+(1.5799*ORPAWn)+(0.048474*OAAMn)-(1.0547*SICDn)+(0.027591*TULCUn)+(0.72992*TCUMUn)-(1.2281*PDPMMn)-1.6007
    console.log("cd_a", cd_a);
    var cd_b = -(0.54331*PPMSn)-(0.38317*DSPn)+(0.65526*ORPAWn)+(0.15353*OAAMn)-(0.75461*SICDn)+(0.48348*TULCUn)-(0.58554*TCUMUn)+(0.22862*PDPMMn)+2.1226
    console.log("cd_b", cd_b);
    var cd_g = (0.83519*PPMSn)+(0.85329*DSPn)+(1.5118*ORPAWn)-(0.3033*OAAMn)+(0.046571*SICDn)+(0.40574*TULCUn)+(0.18658*TCUMUn)-(0.30062*PDPMMn)-0.41207
    console.log("cd_g", cd_g);
    var cd_d = (0.17282*PPMSn)+(0.20194*DSPn)+(0.16919*ORPAWn)+(0.16932*OAAMn)+(0.10985*SICDn)-(0.39127*TULCUn)+(0.81319*TCUMUn)+(0.15461*PDPMMn)-1.5326
    console.log("cd_d", cd_d);
    var cd_e = -(0.56722*PPMSn)-(0.19621*DSPn)-(0.878*ORPAWn)-(0.72694*OAAMn)-(0.27539*SICDn)+(0.11684*TULCUn)-(0.59655*TCUMUn)-(0.17203*PDPMMn)-0.36998
    console.log("cd_e", cd_e);
    var cd_z = -(0.5816*PPMSn)-(0.79763*DSPn)+(1.4293*ORPAWn)+(0.10892*OAAMn)+(1.5455*SICDn)-(0.17892*TULCUn)-(0.91188*TCUMUn)+(0.45597*PDPMMn)-0.48579
    console.log("cd_z", cd_z);
    var cd_h = (0.977*PPMSn)-(0.51766*DSPn)+(1.3201*ORPAWn)-(1.3061*OAAMn)-(0.18298*SICDn)-(0.029898*TULCUn)-(0.3273*TCUMUn)+(0.15971*PDPMMn)+2.2606
    console.log("cd_h", cd_h);
    var cd_th = (1.0297*PPMSn)+(0.40438*DSPn)+(0.22505*ORPAWn)+(0.24342*OAAMn)-(0.36931*SICDn)+(0.4449*TULCUn)+(0.98481*TCUMUn)+(0.21727*PDPMMn)+2.4162
    console.log("cd_th", cd_th);

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

    // NORMALIZED CONSTRUCTION DELAYS RATING MODEL - CONTRACTOR SIDE
    var K = -(0.038338*HN1)-(0.40723*HN2)-(0.038691*HN3)+(1.907*HN4)-(0.18*HN5)+(0.059572*HN6)-(0.035893*HN7)+(1.3319*HN8)+0.77992
    console.log(K);
	var WDOSn = (Math.exp(K) - Math.exp(-K)) / (Math.exp(K) + Math.exp(-K));
	// FINAL - CONSTRUCTION DELAY OWNER SIDE
	var WDOS = 2*(WDOSn+1)+1;

	return WDOS;
}