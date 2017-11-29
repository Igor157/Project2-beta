import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-favorite-currencies.style.css';
import { CurrencyTabs } from '../currency-tabs';
import { EmptyTemplate } from '../empty-template';
import { CurrencyDateTable } from '../currency-date-table';


export class FavoriteCurrencies extends React.Component {
    constructor(props) {
        super(props);
        this.selectFavoriteCur = this.selectFavoriteCur.bind(this);
        this.removeFromFavorite = this.removeFromFavorite.bind(this);
    }
    selectFavoriteCur(targetId) {
        this.props.selectFavoriteCur(targetId);
    }
    removeFromFavorite(targetId) {
        this.props.removeFromFavorite(targetId);
    }
    render() {
        const pageElementClass = this.props.className;
        console.log(this.props.favoriteCurData.dynamic, 'this.props.favoriteCurData.dynamic');
        console.log(this.props.favoriteCurData, 'this.props.favoriteCurData.dynamic');
        return (
            <div className={`ik-favorite-currencies ${pageElementClass}`}>
                <CurrencyTabs
                    className="ik-favorite-currencies__currency-tabs"
                    favoriteCurData={this.props.favoriteCurData}
                    selectFavoriteCur={this.selectFavoriteCur}
                    removeFromFavorite={this.removeFromFavorite}
                />
                {/* <CurrencyDateTable
                    className="ik-favorite-currencies__date-table"
                    dynamic={this.state.currentDynamic}
                /> */}
            </div>
        );
    }
}