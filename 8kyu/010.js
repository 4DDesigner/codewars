Math.roundTo = function (number, precision) {
    return Math.round(number * (10 ** precision )) / (10 ** precision );
}