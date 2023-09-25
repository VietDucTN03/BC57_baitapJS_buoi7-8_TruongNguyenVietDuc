function checkPrimeNumber(number) {
    var output = false;
    var divisor = 1;
    var countingWishes = 0;

    while (divisor <= number) {
        if (number % divisor === 0) {
            countingWishes++;
        }
        divisor++;
    }

    if (countingWishes == 2) {
        output = true
    } else {
        output = false;
    }
    return output;
}