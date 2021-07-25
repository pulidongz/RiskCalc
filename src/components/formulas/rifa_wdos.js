export default function rifa_wdos(val1, val2, val3, val4, val5, val6, val7, val8) {
    
    val1 = 0.1453 * val1;
    val2 = 0.1128 * val2;
    val3 = 0.2122 * val3;
    val4 = 0.09405 * val4;
    val5 = 0.115 * val5;
    val6 = 0.07324 * val6;
    val7 = 0.167837 * val7;
    val8 = 0.0796 * val8;

    var result = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8;
    
    return result;
}