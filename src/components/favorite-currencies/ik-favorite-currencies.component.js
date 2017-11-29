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
        // this.onAbrChange = this.onAbrChange.bind(this);
        // this.state = { currentDynamic: [] };
    }
    selectFavoriteCur(targetId) {
        this.props.selectFavoriteCur(targetId);
    }
    removeFromFavorite(targetId) {
        this.props.removeFromFavorite(targetId);
    }
    // clickOnTabHandler(e) {
    //     let target = e.target;
    //     let needToClose = false;
    //     console.log(this.props, 'this');
    //     if (target.className === 'ik-currency-tab__close') {
    //         needToClose = !needToClose;
    //     }
    //     while (target !== this) {
    //         if (target.className === 'ik-currency-tab') {
    //             let indexOfSelected = 0;
    //             let targetId = target.getAttribute('id');
    //             console.log(this, 'this');
    //             this.props.selectFavoriteCur(targetId);
    //             if (needToClose) {
    //                 this.props.removeFromFavorite();
    //             }
    //             return;
    //         }
    //         target = target.parentNode;
    //     }
    // }
    filterFavoriteData(id) {
        let filteredData = this.props.favoriteCurData.filter((item) => item.favoriteId === id);
        console.log(filteredData, "filteredData");
        let dynamic = filteredData[0].dynamic;
        console.log(dynamic, 'dynamic');
        this.setState({ currentDynamic: dynamic });
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