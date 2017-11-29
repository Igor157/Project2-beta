import React from "react";
import ReactDOM from "react-dom";
import styles from './ik-currency-tabs.style.css';
import { services } from '../../services/Services.js';


export class CurrencyTabs extends React.Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
        let target = e.target;
        let needToClose = false;
        console.log(this.props, 'this');
        if (target.className === 'ik-currency-tab__close') {
            needToClose = !needToClose;
        }
        while (target !== this) {
            if (target.className === 'ik-currency-tab' || target.className === 'ik-currency-tab ik-currency-tab--selected') {
                let indexOfSelected = 0;
                let targetId = target.getAttribute('id');
                console.log(this, 'this');
                this.props.selectFavoriteCur(targetId);
                if (needToClose) {
                    this.props.removeFromFavorite(targetId);
                }
                return;
            }
            target = target.parentNode;
        }
    }
    render() {
        const pageElementClass = this.props.className;
        let favoriteCurArr = this.props.favoriteCurData;
        let currencyTabs = favoriteCurArr.map((item, index) =>
            <div
                key={index}
                className={`ik-currency-tab${item.selected ? ' ik-currency-tab--selected' : ''}`}
                id={item.favoriteId}
                abr={item.favoriteAbr}
            >
                <div
                    className="ik-currency-tab__new">
                    {item.new ? '!' : ''}
                </div>
                <div
                    className="ik-currency-tab__abr">
                    {item.favoriteAbr}
                </div>
                <div
                    className="ik-currency-tab__close">
                    x
        </div>
            </div>
        );
        return (
            <div onClick={this.clickHandler} className={`ik-currency-tabs  ${pageElementClass}`}>
                {currencyTabs}
            </div>
        );
    }
}