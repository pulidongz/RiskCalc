export default function rifa_cdcs(val1, val2, val3, val4, val5, val6, val7, val8) {
    
    val1 = 0.1303 * val1;
    val2 = 0.15984 * val2;
    val3 = 0.172295 * val3;
    val4 = 0.100773 * val4;
    val5 = 0.087546 * val5;
    val6 = 0.07822 * val6;
    val7 = 0.167107 * val7;
    val8 = 0.103907 * val8;

    var result = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8;
    
    return result;
}