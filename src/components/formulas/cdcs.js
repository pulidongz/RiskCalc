export default function cdcs(val1, val2, val3, val4, val5, val6, val7, val8) {

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
    var IPPSn = 0.5*(tval1-1)-1
    var FDn = 0.5*(tval2-1)-1
    var PICn = 0.5*(tval3-1)-1
    var BRPWn = 0.5*(tval4-1)-1
    var PILn = 0.5*(tval5-1)-1
    var PWCn = 0.5*(tval6-1)-1
    var DDSCMn = 0.5*(tval7-1)-1
    var USCn = 0.5*(tval8-1)-1

    // GREEK VALUES - CONSTRUCTION DELAY
    var cd_a = 2.1628*IPPSn - 0.42624*FDn - 1.9894*PICn + 1.0021*BRPWn - 0.18223*PILn + 0.34223*PWCn + 1.6394*DDSCMn + 1.6108*USCn - 2.2042
    console.log("cd_a", cd_a);
    var cd_b = -0.32452*IPPSn + 0.79003*FDn + 0.24089*PICn + 0.1362*BRPWn - 0.49543*PILn - 0.21731*PWCn + 0.58051*DDSCMn + 0.11335*USCn - 2.0605
    console.log("cd_b", cd_b);
    var cd_g = -1.1229*IPPSn - 0.87852*FDn + 1.3363*PICn + 0.25199*BRPWn - 0.28083*PILn + 0.014104*PWCn - 0.88146*DDSCMn - 0.24463*USCn + 0.66452
    console.log("cd_g", cd_g);
    var cd_d = (0.055263*IPPSn)+(0.50851*FDn)+(0.34514*PICn)+(0.14621*BRPWn)+(0.12291*PILn)+(0.13773*PWCn)+(0.41341*DDSCMn)+(0.33927*USCn)-2.2728
    console.log("cd_d", cd_d);
    var cd_e = -(0.2817*IPPSn)+(0.82009*FDn)+(0.68614*PICn)+(0.61241*BRPWn)+(0.18031*PILn)-(0.24361*PWCn)+(0.66416*DDSCMn)+(0.35963*USCn)-0.2717
    console.log("cd_e", cd_e);
    var cd_z = -(0.68219*IPPSn)-(0.60925*FDn)-(1.307*PICn)+(0.39975*BRPWn)-(0.39183*PILn)-(0.1372*PWCn)-(0.16214*DDSCMn)-(0.5213*USCn)-2.776
    console.log("cd_z", cd_z);
    var cd_h = (0.27031*IPPSn)-(0.52033*FDn)+(0.99002*PICn)+(0.89593*BRPWn)+(0.49941*PILn)+(1.6994*PWCn)-(2.1436*DDSCMn)-(0.37313*USCn)-1.1798
    console.log("cd_h", cd_h);
    var cd_th = -(1.321*IPPSn)-(0.83125*FDn)+(0.19734*PICn)-(1.1646*BRPWn)-(1.3978*PILn)+(0.88959*PWCn)-(0.63122*DDSCMn)-(1.0418*USCn)+0.80668
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
	console.log("HN8",HN8);

    // NORMALIZED CONSTRUCTION DELAYS RATING MODEL - CONTRACTOR SIDE
    var K = (0.038164*HN1)-(1.5905*HN2)-(0.12548*HN3)+(2.1144*HN4)+(0.29506*HN5)-(1.3015*HN6)+(0.12602*HN7)+(0.092585*HN8)-0.57873
    console.log(K);
	var CDCSn = (Math.exp(K) - Math.exp(-K)) / (Math.exp(K) + Math.exp(-K));
	// FINAL - CONSTRUCTION DELAY OWNER SIDE
	var CDCS = 2*(CDCSn+1)+1;

	return CDCS;
}