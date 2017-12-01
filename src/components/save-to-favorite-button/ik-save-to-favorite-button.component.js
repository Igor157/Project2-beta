import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-save-to-favorite-button.style.css';


export class SaveToFavoriteButton extends React.Component {
    constructor(props) {
        super(props);
        this.clickToFavorite = this.clickToFavorite.bind(this);
    }
    clickToFavorite() {
        this.props.addCurToFavorite();
    }

    render() {
        const pageElementClass = this.props.className;
        return (
            <button
                onClick={this.clickToFavorite} className={`ik-save-to-favorite-button ${pageElementClass}`}
            >To Favorite
             </button>
        );
    }
}