import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-avaible-currencies.css';

export class AvaibleCurrencies extends React.Component {
    constructor(props) {
      super(props);
      this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(e) {
      this.props.currencyOnclick(e.target.getAttribute("abr"));
    }
  
    render() {
      const yesterdayCurrency = this.props.yesterdayCurrency;
      const pageElementClass = this.props.className;
      const rizeStyle = "ik-avaible-currencies__day-progress--green";
      const downStyle = "ik-avaible-currencies__day-progress--red";
      let currency = this.props.currency.map(function (item, index) {
        return (
          <div key={index} className="ik-avaible-currencies__row">
            <div className="ik-avaible-currencies__abr">{item.Cur_Abbreviation}</div>
            <div className="ik-avaible-currencies__rate">{item.Cur_OfficialRate}</div>
            <button abr={item.Cur_Abbreviation} className={`ik-avaible-currencies__day-progress  ${Math.round(((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000 > 0) ? rizeStyle : downStyle}`}>
              {Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000 > 0 ? "+" + Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000 : Math.round((item.Cur_OfficialRate - yesterdayCurrency[index].Cur_OfficialRate) * 10000) / 10000}</button>
          </div>
        )
      });
      return (
        <div onClick={this.clickHandler} className={`ik-avaible-currencies  ${pageElementClass}`}>
          {currency}
        </div>
      );
    }
  }