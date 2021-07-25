export default function rifa_wdcs(val1, val2, val3, val4, val5, val6, val7, val8) {
    
    val1 = 0.101971 * val1;
    val2 = 0.114101 * val2;
    val3 = 0.164368 * val3;
    val4 = 0.237942 * val4;
    val5 = 0.085079 * val5;
    val6 = 0.101377 * val6;
    val7 = 0.108913 * val7;
    val8 = 0.08625 * val8;

    var result = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8;
    
    return result;
}