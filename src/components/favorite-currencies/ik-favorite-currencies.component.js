import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './ik-favorite-currencies.style.css';
import { ConnectedCurrencyTabs } from '../../containers/ik-connected-currency-tabs.container.js';
import { EmptyTemplate } from '../empty-template';
import { ConnectedFavoriteCurrencyDynamicForDates } from '../../containers/ik-connected-favorite-currency-for-dates.container.js';


export class FavoriteCurrencies extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.empty);
        const pageElementClass = this.props.className;
        if (this.props.empty) {
            return (
                <EmptyTemplate />
            );
        }
        return (
            <div className={`ik-favorite-currencies ${pageElementClass}`}>
                <ConnectedCurrencyTabs
                    className="ik-favorite-currencies__currency-tabs"
                />
                <ConnectedFavoriteCurrencyDynamicForDates
                    className="ik-favorite-currencies__dynamic-for-dates"
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        empty: state.curToFavorite.empty
    };
};
export const ConnectedFavoriteCurrencies = connect(
    mapStateToProps
)(FavoriteCurrencies);