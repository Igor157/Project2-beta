import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-favorite-currencies.style.css';
import { CurrencyTabs } from '../currency-tabs';
import { EmptyTemplate } from '../empty-template';


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
        return (
            <div className={`ik-favorite-currencies ${pageElementClass}`}>
                <CurrencyTabs
                    className="ik-favorite-currencies__currency-tabs"
                    favoriteCurData={this.props.favoriteCurData}
                />
                <EmptyTemplate
                />
            </div>
        );
    }
}