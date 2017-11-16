
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
        return fetch(url)
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
    curTendetionDetermination(cur) {
        return Math.round((cur) * 10000) / 10000;
    }
};
export let services = new Services();

class RequestServices {
    reqCur(url) {
        return fetch(url)
            .then((result) => {
                return result.json();
            })
            .catch((err) => {
                console.log(err);
            })
    }
    getCurrenciesForDate(year, month, date) {
        let reqDate = (`${year}-${month + 1}-${date}`);
        let urlForDate = `http://www.nbrb.by/API/ExRates/Rates?onDate=${reqDate}&Periodicity=0`;
        return this.reqCur(urlForDate);
    }
    getTodaysCurrencies() {
        let today = new Date(Date.now());
        let currentCurrencies = this.getCurrenciesForDate(today.getFullYear(), today.getMonth(), today.getDate());
        console.log(currentCurrencies, 'currentCurrencies');

        let yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        console.log(yesterday, 'yesterday')

        let prevCurrencies = this.getCurrenciesForDate(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
        console.log(prevCurrencies, 'prevCurrencies');
        return Promise.all([currentCurrencies, prevCurrencies])
            .then(([current, previous]) => {
                let result = current.map((item) => new MapperService(item));
                let previousRate = previous.map((item) => new MapperService(item).curRate);
                result.forEach((item, index) => {
                    console.log(index.curRate, 'index.curRate');
                    console.log(previousRate[1], 'previousRate');
                    item.curDifference = item.curRate - previousRate[index];
                });
                return result;
            });
        // .catch(err => { console.log(err) });
    }
    getDynamicOfCurrencie(reqId, start, end) {
        let startDate = (`${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`)
        let endDate = (`${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`);
        // http://www.nbrb.by/API/ExRates/Rates/Dynamics/190?startDate=2016-6-1&endDate=2016-6-30
        let urlForPeriod = `http://www.nbrb.by/API/ExRates/Rates/Dynamics/${reqId}?startDate=${startDate}&endDate=${endDate}`;
        return this.reqCur(urlForPeriod);
    }
    getDynamicForCurId(id) {
        let end = new Date(Date.now());
        let start = new Date(end);
        start.setDate(start.getDate() - 20);
        let dynamicOfCurrencie = this.getDynamicOfCurrencie(id, start, end);
        return dynamicOfCurrencie
            .then((data = []) => {
                let result = data.map((item) => new MapperService(item));
                return result;
            })
    }
}
export let requestServices = new RequestServices();

class MapperService {
    constructor(entity) {
        this.curAbr = entity.Cur_Abbreviation || '';
        this.curRate = entity.Cur_OfficialRate || '';
        this.date = entity.Date || '';
        this.curId = entity.Cur_ID || '';
    }

    toEntity() {
        return {
            Cur_Abbreviation: this.curAbr,
            Cur_OfficialRate: this.curRate,
            Date: this.date
        };
    }

    fromEntity(entity) {
        return new Entity(entity);
    }
}
