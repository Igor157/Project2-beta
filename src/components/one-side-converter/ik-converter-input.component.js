import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-convert-input.style.css';

export class ConverterInput extends React.Component {
    constructor(props) {
        super(props);
        this.onChangeValue = this.onChangeValue.bind(this);
        this.onChangeAbr = this.onChangeAbr.bind(this);
    }
    onChangeValue(e) {
        this.props.onValueChange(e.target.value);
    }
    onChangeAbr(e) {
        this.props.onAbrChange(e.target.value);
    }
    render() {
        const pageElementClass = this.props.className;
        const operation = this.props.operation;
        const currentValue = this.props.currentValue;
        let abr = this.props.currency.map(function (item, index) {
            return (
                <option key={index} value={item.curAbr}>
                    {item.curAbr}
                </option>
            );
        });
        return (
            <div className={`ik-converter-input ${pageElementClass}`}>
                <div className="ik-converter-input__label">{operation}</div>
                <form className="ik-converter-input__form">
                    <input
                        className="ik-converter-input__textarea"
                        type="text"
                        placeholder="InputNumbers"
                        onChange={this.onChangeValue}
                        value={currentValue}
                    />
                    {operation === "Destination" ?
                        <div className="ik-converter__value-abr">{valueAbr}</div> :
                        <select className="ik-converter-select" onChange={this.onChangeAbr}>
                            {/* <option>select currency</option> */}
                            {abr}
                        </select>
                    }
                </form>
            </div>
        );
    }
}