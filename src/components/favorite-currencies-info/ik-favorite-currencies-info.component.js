import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-favorite-currencies-info.style.scss';
import { ConnectedFavoriteCurrencyDynamicForDates } from '../../containers/ik-connected-favorite-currency-for-dates.container.js';
import { ConnectedCurInfo } from '../../containers/ik-connected-cur-info.container.js';


export class FavoriteCurrenciesInfo extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const pageElementClass = this.props.className;
        return (
            <div className={`ik-favorite-currencies-info ${pageElementClass}`}>
                <ConnectedCurInfo
                    className="ik-favorite-currencies-info__info-table"
                />
                <ConnectedFavoriteCurrencyDynamicForDates
                    className="ik-favorite-currencies-info__dynamic-for-dates"
                />
            </div>
        );
    }
}
