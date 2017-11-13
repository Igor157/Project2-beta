import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-search.css';

export class Search extends React.Component {
  constructor(props) {
    super(props);
    // this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }
  // handleFilterTextChange(e) {
  //   this.props.onFilterTextChange(e.target.value);
  // }
  render() {
    const pageElementClass = this.props.className;
    return (
      <form className={`ik-search ${pageElementClass}`}>
        <input className="ik-search__search-place"
          type="text"
          placeholder="Search input"
          value={this.props.filterText}
          onChange={this.handleFilterTextChange}
        />
        <input
          className="ik-search__search-button"
          type="button"
          value="Search" />
      </form>
    );
  }
}
