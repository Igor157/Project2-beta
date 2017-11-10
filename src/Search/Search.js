import React from "react";
import ReactDOM from "react-dom";
import styles from './.ik-search.css';

export class Search extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <form className={`ik-search ${pageElementClass}`}>
        <input className="ik-search__search-place" type="text" placeholder="Search input" />
        <input className="ik-search__search-button" type="button" value="Search" />
      </form>
    );
  }
}
