import moment from 'moment';

class MathService {
    curTendetionDetermination(cur) {
        return Math.round(cur * 10000) / 10000;
    }
}
export let mathService = new MathService();

class RequestServices {
    reqCur(url) {
        return fetch(url)
            .then((result) => {
                return result.json();
            })
            .catch((err) => {
                console.log(err);
            });
    }
    getCurrenciesForDate(year, month, date) {
        let reqDate = `${year}-${month + 1}-${date}`;
        let urlForDate = `https://www.nbrb.by/API/ExRates/Rates?onDate=${reqDate}&Periodicity=0`;
        return this.reqCur(urlForDate);
    }
    getTodaysCurrencies() {
        let today = new Date(Date.now());
        let currentCurrencies = this.getCurrenciesForDate(today.getFullYear(), today.getMonth(), today.getDate());
        let yesterday = new Date(today);
        yesterday.setDate(yesterday.getDate() - 1);
        let prevCurrencies = this.getCurrenciesForDate(yesterday.getFullYear(), yesterday.getMonth(), yesterday.getDate());
        return Promise.all([currentCurrencies, prevCurrencies])
            .then(([current, previous]) => {
                let result = current.map((item) => new MapperService(item));
                let previousRate = previous.map((item) => new MapperService(item).curRate);
                result.forEach((item, index) => {
                    item.curDifference = item.curRate - previousRate[index];
                });
                return result;
            });
    }
    getDynamicOfCurrencie(reqId, startMoment, endMoment) {
        let start = startMoment.toDate();
        let end = endMoment.toDate();
        let startDate = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`;
        let endDate = `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`;
        let urlForPeriod = `https://www.nbrb.by/API/ExRates/Rates/Dynamics/${reqId}?startDate=${startDate}&endDate=${endDate}`;
        return this.reqCur(urlForPeriod);
    }
    getDynamicForCurId(id, start, end) {
        let dynamicOfCurrencie = this.getDynamicOfCurrencie(id, start, end);
        return dynamicOfCurrencie
            .then((data = []) => {
                let result = data.map((item) => new MapperService(item));
                return result;
            });
    }
    getCurrencyInfo(reqId) {
        let urlForInfo = `https://www.nbrb.by/API/ExRates/Currencies/${reqId}`;
        let curInfoPromise = this.reqCur(urlForInfo);
        return curInfoPromise
            .then((data = []) => {
                let result = new MapperService(data);
                return result;
            });
    }
}
export let requestServices = new RequestServices();

class MapperService {
    constructor(entity) {
        this.curAbr = entity.Cur_Abbreviation || '';
        this.curRate = entity.Cur_OfficialRate || '';
        this.date = entity.Date || '';
        this.curId = entity.Cur_ID || '';
        this.curName = entity.Cur_Name_Eng || '';
        this.startDate = entity.Cur_DateStart || '';
        this.endDate = entity.Cur_DateEnd || '';
    }
}

class ConverterServices {

    filterCurForTarget(cur, target) {
        return cur.filter((item) => item.curAbr === target)[0];
    }
    moneyConvert(value, currency1, currency2) {
        return value * currency1 / currency2;
    }
    tryConvert(value, currency1, currency2, convert) {
        const input = parseFloat(value);
        const cur1 = parseFloat(currency1);
        const cur2 = parseFloat(currency2);
        if (Number.isNaN(input)) {
            return '';
        }
        const output = convert(input, cur1, cur2);
        const rounded = Math.round(output * 1000) / 1000;
        return Number.isNaN(rounded) ? 'select currency' : rounded;
    }
    getRates(allCurrencies, abr) {
        const filteredArr = this.filterCurForTarget(allCurrencies, abr);
        let rate = 1;
        if (filteredArr) {
            rate = filteredArr.curRate;
        }
        else {
            rate = allCurrencies[0] ?
                allCurrencies[0].curRate :
                1;
        }
        return rate;
    }

}


export let converterServices = new ConverterServices();

class FaService {
    chooseIco(abr) {
        switch (abr) {
            case 'EUR':
                return 'eur';
            case 'BTC':
                return 'btc';
            case 'KRW':
                return 'krw';
            case 'RUB':
                return 'rub';
            case 'TRY':
                return 'try';
            case 'YEN':
                return 'yen';
            case 'CNY':
                return 'cny';
            case 'GBP':
                return 'gbp';
            case 'INR':
                return 'inr';
            case 'FPY':
                return 'jpy';
            case 'USD':
                return 'usd';
            default:
                return 'money';
        }
    }

}
export let faService = new FaService();