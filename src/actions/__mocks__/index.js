

// const action = jest.genMockFromModule('../index');

export function getCur() {

    return (dispatch) => {
        dispatch({
            type: 'GET_CUR_REQUEST'
        });
        dispatch({
            type: 'GET_CUR_SUCCESS',
            payload: [{
                "Cur_ID": 170,
                "Date": "2018-02-20T00:00:00",
                "Cur_Abbreviation": "AUD",
                "Cur_Scale": 1,
                "Cur_Name": "Австралийский доллар",
                "Cur_OfficialRate": 1.5533
            },
            {
                "Cur_ID": 191,
                "Date": "2018-02-20T00:00:00",
                "Cur_Abbreviation": "BGN",
                "Cur_Scale": 1,
                "Cur_Name": "Болгарский лев",
                "Cur_OfficialRate": 1.2443
            }]
        });
    };
}

export function filterAvailableCur(value) {
    return {
        type: 'FILTER_AVAILABLE_CUR',
        payload: {
            filterText: value
        }
    };
}

export function changeCurForDynamic(id, abr) {
    return {
        type: 'CHANGE_CUR_FOR_DYNAMIC',
        payload: {
            changedId: id,
            changedAbr: abr
        }
    };
}

export function getDynamic(curID, start, end) {

    return (dispatch) => {
        dispatch({
            type: 'GET_DYNAMIC_REQUEST'
        });
        dispatch({
            type: 'GET_DYNAMIC_SUCCESS',
            payload: 'someData'
        });
    };
}