import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './ik-favorite-currencies.style.scss';
import { ConnectedCurrencyTabs } from '../../containers/ik-connected-currency-tabs.container.js';
import { EmptyTemplate } from '../empty-template';
import { FavoriteCurrenciesInfo } from '../favorite-currencies-info';


export class FavoriteCurrencies extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const pageElementClass = this.props.className;
        if (this.props.empty) {
            return (
                <EmptyTemplate
                    className={pageElementClass}
                />
            );
        }
        return (
            <div className={`ik-favorite-currencies ${pageElementClass}`}>
                <ConnectedCurrencyTabs
                    className="ik-favorite-currencies__currency-tabs"
                />
                <FavoriteCurrenciesInfo
                    className="ik-favorite-currencies__currency-info"
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