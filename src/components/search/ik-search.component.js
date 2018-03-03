import React from 'react';
import ReactDOM from "react-dom";
import styles from './ik-search.style.scss';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-search ${pageElementClass}`}>
        <form className="ik-search__form">
          <input className="ik-search__search-place"
            type="text"
            placeholder="Search input"
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
          <div
            className="ik-search__search-button"
          >
            Search
        </div>
        </form>
      </div >
    );
  }
}

