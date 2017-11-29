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
        console.log(this.props.favoriteCurData);
        let filterForSelected = this.props.favoriteCurData.filter((item) => { return item.selected; });
        let dynamic = filterForSelected[0] ? filterForSelected[0].dynamic : [];
        const pageElementClass = this.props.className;
        return (
            <div className={`ik-favorite-currencies ${pageElementClass}`}>
                <CurrencyTabs
                    className="ik-favorite-currencies__currency-tabs"
                    favoriteCurData={this.props.favoriteCurData}
                    selectFavoriteCur={this.selectFavoriteCur}
                    removeFromFavorite={this.removeFromFavorite}
                />
                <CurrencyDateTable
                    className="ik-favorite-currencies__date-table"
                    dynamic={dynamic}
                />
            </div>
        );
    }
}