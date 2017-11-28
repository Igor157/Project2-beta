import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-favorite-currencies.style.css';
import { CurrencyTabs } from '../currency-tabs';
import { EmptyTemplate } from '../empty-template';
import {CurrencyDateTable} from '../currency-date-table';


export class FavoriteCurrencies extends React.Component {
    constructor(props) {
        super(props);
        // this.onValueChange = this.onValueChange.bind(this);
        // this.onAbrChange = this.onAbrChange.bind(this);
        // this.state = { inputValue: '', choosenAbr: '' };
    }

    // onValueChange(target) {
    //   this.setState({ inputValue: target });
    // }
    // onAbrChange(target) {
    //   this.setState({ choosenAbr: target });
    // }

    render() {
        const pageElementClass = this.props.className;
        console.log(this.props.favoriteCurData.dynamic, 'this.props.favoriteCurData.dynamic');
        console.log(this.props.favoriteCurData, 'this.props.favoriteCurData.dynamic');
        return (
            <div className={`ik-favorite-currencies ${pageElementClass}`}>
                <CurrencyTabs
                    className="ik-favorite-currencies__currency-tabs"
                    favoriteCurData={this.props.favoriteCurData}
                />
                <CurrencyDateTable
                    className="ik-favorite-currencies__date-table"
                    dynamic={this.props.favoriteCurData.dynamic}
                />
            </div>
        );
    }
}