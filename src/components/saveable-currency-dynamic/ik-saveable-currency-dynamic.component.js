import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import styles from './ik-saveable-currency-dynamic.style.css';
import {ConnectedSaveToFavoriteButton} from '../../containers/ik-connected-save-to-favorite-button.container.js';
import {ConnectedMainCurrencyDynamicForDates} from '../../containers/ik-connected-main-currency-for-dates.container';
import {EmptyTemplate} from '../empty-template';


export class SaveableCurrencyDynamic extends React.Component {
    render() {
        const pageElementClass = this.props.className;
        if (this.props.choosenId === undefined) {
            return (
                <EmptyTemplate />
            );
        }
        return (
            <div className={`ik-saveable-currency-dynamic ${pageElementClass}`}>
                <ConnectedSaveToFavoriteButton
                    className="ik-saveable-currency-dynamic__button"
                />
                <ConnectedMainCurrencyDynamicForDates
                    className="ik-saveable-currency-dynamic__currency-dynamic-for-dates"
                />
            </div>

        );
    }
}





const mapStateToProps = (state) => {
  return {
    choosenId: state.availableCurrencies.choosenId
  };
};


export const ConnectedSaveableCurrencyDynamic = connect(
  mapStateToProps
)(SaveableCurrencyDynamic);