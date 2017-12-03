import React from 'react';
import ReactDOM from 'react-dom';
import styles from './ik-about.style.css';


export class About extends React.Component {
  render() {
    const pageElementClass = this.props.className;
    return (
      <div className={`ik-about ${pageElementClass}`} >
        <div className="ik-about__author">This site was designed and developed by: Igor Kazakov</div>
        <div className="ik-about__link">GitHub URL:
          <a href="https://github.com/Igor157/FrontEnd-Project-2">
            https://github.com/Igor157/FrontEnd-Project-2
          </a>
        </div>
        <div className="ik-about__link">GitHub pages:
          <a href="https://igor157.github.io/Currencies-project/#/">
            https://github.com/Igor157/FrontEnd-Project-2
          </a>
        </div>
        <div className="ik-about__link">Design:
          <a href="https://github.com/Igor157/Project2-beta/blob/master/files%20for%20download/Currency.pdf" download>
            Currency.pdf
          </a>
        </div>
      </div>
    );
  }
}