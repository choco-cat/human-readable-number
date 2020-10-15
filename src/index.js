module.exports = function toReadable(number) {
    let numbersArr = number.toString().split('').reverse();
    let units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven',
        'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let ranks = ['', '', ' hundred', ' thousand', '', ' hundred'];
    let result = [];
    let unitsF = false;

    numbersArr.forEach((element, index) => {
        if (numbersArr.length === 1 && element === "0") {
            result.push("zero");
        }
        if (unitsF) {
            result.push(units[element + numbersArr[index - 1]]);
            unitsF = false;
        } else {
            if (numbersArr.length > 1 && index === 0 && numbersArr[1] === "1") {
                unitsF = true;
            } else {
                if (index % 3 !== 1) {
                    result.push(units[element] + ranks[index]);
                } else {
                    result.push(tens[element] + ranks[index]);
                }
            }
        }
    });

    return result.filter(element => element !== "").reverse().join(' ');
}

