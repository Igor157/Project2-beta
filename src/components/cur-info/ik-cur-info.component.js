import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-cur-info.style.css';


export class CurInfo extends React.Component {
  componentDidMount() {
    this.props.getInfo(this.props.choosenId);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.choosenId !== this.props.choosenId) {
      this.props.getInfo(this.props.choosenId);
    }
  }
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-cur-info ${pageElementClass}`} >
        <div className="ik-cur-info__text">
          Currency Name:{this.props.info.curName}
        </div>
        <div className="ik-cur-info__text">
          Currency Abbreviatation:{this.props.info.curAbr}
        </div>
        <div className="ik-cur-info__text">
          Start date:{this.props.info.startDate}
        </div>
        <div className="ik-cur-info__text">
          End date:{this.props.info.endDate}
        </div>
      </div>
    );
  }
}