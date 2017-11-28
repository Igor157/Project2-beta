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
        while (target !== this) {
          if (target.className === 'ik-avaible-currencies__row') {
            let end = new Date(Date.now());
            let start = new Date(end);
            start.setDate(start.getDate() - 20);
            this.props.getDynamic(target.getAttribute('id'), this.props.startDate, this.props.endDate);
            this.props.changeCurForDynamic(target.getAttribute('id'), target.getAttribute('abr'));
            return;
          }
          target = target.parentNode;
        }
    }
    // componentDidMount() {
    //   this.props.getCur();
    // }
    render() {
        const pageElementClass = this.props.className;
        let favoriteCurArr = this.props.favoriteCurData;
        let currencyTabs = favoriteCurArr.map((item, index) =>
            <div
                key={index}
                className="ik-currency-tab"
                id={item.favoriteId}
                abr={item.favoriteAbr}
                onClick = {this.clickHandler}
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