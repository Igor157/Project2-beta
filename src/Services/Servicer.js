
export function moneyConvert(value, currency1, currency2) {
    return value * currency1 / currency2;
  }
export function tryConvert(value, currency1, currency2, convert) {
    const input = parseFloat(value);
    console.dir(currency1)
    const cur1 = currency1;
    const cur2 = currency2;
    console.log(input);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input, cur1, cur2);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
    }
