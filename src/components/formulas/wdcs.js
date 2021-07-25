export default function wdcs(val1, val2, val3, val4, val5, val6, val7, val8) {

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
    var CRSCn = 0.5*(tval1-1)-1
    var LLSWn = 0.5*(tval2-1)-1
    var UCEn = 0.5*(tval3-1)-1
    var PHSMn = 0.5*(tval4-1)-1
    var LCBn = 0.5*(tval5-1)-1
    var PWCn = 0.5*(tval6-1)-1
    var Vn = 0.5*(tval7-1)-1
    var NCAn = 0.5*(tval8-1)-1

    // GREEK VALUES - WORKMANSHIP DEFECTS
    var cd_a = -(0.0078971*CRSCn)+(0.67225*LLSWn)-(0.76731*UCEn)-(0.68126*PHSMn)-(0.26849*LCBn)-(0.65753*PWCn)+(0.60504*Vn)+(0.9133*NCAn)-1.91
    console.log("cd_a", cd_a);
    var cd_b = -(0.75129*CRSCn)-(0.37181*LLSWn)-(0.023135*UCEn)+(0.27219*PHSMn)-(0.30332*LCBn)-(0.35081*PWCn)-(0.20618*Vn)-(0.51278*NCAn)+1.7428
    console.log("cd_b", cd_b);
    var cd_g = (0.17254*CRSCn)+(0.29871*LLSWn)-(0.57789*UCEn)-(1.7858*PHSMn)-(0.5895*LCBn)-(0.25852*PWCn)+(0.75065*Vn)+(0.16296*NCAn)-1.7499
    console.log("cd_g", cd_g);
    var cd_d = -(0.048*CRSCn)+(0.44815*LLSWn)-(0.8544*UCEn)+(0.75872*PHSMn)-(0.11737*LCBn)+(0.17436*PWCn)+(0.38465*Vn)+(0.11816*NCAn)-0.1665
    console.log("cd_d", cd_d);
    var cd_e = (0.6304*CRSCn)+(0.56463*LLSWn)+(0.97369*UCEn)-(0.73707*PHSMn)+(0.33088*LCBn)-(0.029907*PWCn)+(0.57279*Vn)+(0.37834*NCAn)+0.45795
    console.log("cd_e", cd_e);
    var cd_z = (0.64338*CRSCn)+(0.20554*LLSWn)-(1.08*UCEn)-(0.86735*PHSMn)-(0.41048*LCBn)+(0.27634*PWCn)+(0.27499*Vn)+(0.31636*NCAn)+1.0729
    console.log("cd_z", cd_z);
    var cd_h = (0.44693*CRSCn)+(0.45795*LLSWn)-(0.30434*UCEn)+(0.9841*PHSMn)+(0.47169*LCBn)-(0.89083*PWCn)-(0.13196*Vn)+(0.10401*NCAn)+1.5469
    console.log("cd_h", cd_h);
    var cd_th = -(0.21024*CRSCn)+(0.34678*LLSWn)-(0.45742*UCEn)+(1.1541*PHSMn)+(0.13141*LCBn)-(0.36995*PWCn)-(0.42071*Vn)-(0.11434*NCAn)-1.5646
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
    var K = (0.018067*HN1)-(0.66131*HN2)-(1.2553*HN3)+(0.27226*HN4)+(0.17159*HN5)-(0.31297*HN6)-(0.18856*HN7)-(0.30688*HN8)-0.47056
    console.log(K);
	var WDCSn = (Math.exp(K) - Math.exp(-K)) / (Math.exp(K) + Math.exp(-K));
	// FINAL - CONSTRUCTION DELAY OWNER SIDE
	var WDCSn = 2*(WDCSn+1)+1;

	return WDCSn;
}