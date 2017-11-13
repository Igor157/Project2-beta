
class Services {
    moneyConvert(value, currency1, currency2) {
        return value * currency1 / currency2;
    }
    tryConvert(value, currency1, currency2, convert) {
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
    reqCur(url) {
        this.url = url;
        return fetch(this.url)
            .then((result) => {
                return result.json();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    getUrl() {
        let date = new Date;
        let today = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
        let daysArr = [];
        let currencyCollection = [];
        for (let i = 0; i < 10; i++) {
            daysArr.push(`${date.getFullYear()}-${date.getMonth()}-${date.getDate() - i}`);
        }
        let urlArr = daysArr.map((item) => `http://www.nbrb.by/API/ExRates/Rates?onDate=${item}&Periodicity=0`);
        return urlArr
    }
    curTendetionDetermination(item, index, yesterdayCurrency) {
        return Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000;
    }
};
export let services = new Services();
