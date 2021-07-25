export default function rifa_cdos(val1, val2, val3, val4, val5, val6, val7, val8) {
    
    val1 = 0.175244 * val1;
    val2 = 0.18132 * val2;
    val3 = 0.1685 * val3;
    val4 = 0.1215 * val4;
    val5 = 0.05599 * val5;
    val6 = 0.124 * val6;
    val7 = 0.1321 * val7;
    val8 = 0.0413 * val8;

    var result = val1 + val2 + val3 + val4 + val5 + val6 + val7 + val8;
    
    return result;
}