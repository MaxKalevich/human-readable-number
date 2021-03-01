module.exports = function toReadable (number) {

    const arrNumber0 = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine",];
    const arrNumber1 = ["", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine",];

    const arrNumber11 = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen",];

    const arrNumberTenths = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    const arrNumberTenths1 = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety",];

    const numHundred = "hundred";

        if (number === 0) {
            return "zero"
        }

    for (let i = number; i < arrNumber0.length; i++) {
            if (number >= 0 && number <= 9) {
                return arrNumber0[i]
            }
        }

        for (let i = 0; i < arrNumber11.length; i++) {
            if (number >= 10 && number <= 19) {
                let newNum = number - 10;
                return arrNumber11[newNum]

            } else if (number === 100) {

                return `one hundred`
            }
            else if (number >= 101 && number <= 999) {
                let a = number.toString()[1]
                if (a === "1") {
                    let newNum0 = number.toString()[0];
                    let newNum1 = number.toString()[2]
                    return (`${arrNumber0[newNum0]} ${numHundred}` + ` ${arrNumber11[newNum1]}`)
                }
                if (a === "0") {
                    let newNum0 = number.toString()[0];
                    let newNum1 = number.toString()[2]
                    return (`${arrNumber0[newNum0]} ${numHundred}` + `${arrNumber1[newNum1]}`)
                }
                let newNum0 = number.toString()[0]
                let newNum = number.toString()[1]
                let newNum1 = number.toString()[2]
                return (`${arrNumber0[newNum0]} ${numHundred} ${arrNumberTenths1[newNum]}` + `${arrNumber1[newNum1]}`)
            }
        }

        for (let i = 0; i < arrNumberTenths.length; i++) {
            if (number >= 20 && number <= 99) {
                let newN0 = number.toString()[0]
                let newN1 = number.toString()[1]
                return (`${arrNumberTenths1[newN0]}` + "" + `${arrNumber1[newN1]}`)
            }
        }

}

