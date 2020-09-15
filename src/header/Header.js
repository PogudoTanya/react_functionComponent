import React from "react";
import "header/header.css";
import Reddit from "../header/img/reddit.svg";
import HeaderChoosenSub from "header/headerChoosenSub";
import HeaderFavouriteSub from "header/headerFavouriteSub";

export default class Header extends React.Component {
  state = {
    value: "",
  };

  render() {
    console.log(this.props.clickedSubreddit, "miii");
    return (
      <div className="header">
        <div className="header_top-content">
          <img alt="" src={Reddit} className="header_img" />
          <input
            placeholder="Search"
            value={this.state.value}
            onChange={(event) => {
              this.setState({
                value: event.target.value,
              });
            }}
            className="header__input"
          />
          <button
            value={this.state.value}
            className="header__button"
            onClick={() => {
              this.props.onClick(this.state.value);
            }}
          >
            Search
          </button>
        </div>
        <div className="header_center-content" />
        <div className="header_bottom-content">
          {this.props.showAllSubreddits ? (
            `Search results for ${this.props.value}`
          ) : this.props.clickedSubreddit != undefined ? (
            <HeaderChoosenSub clickedSubreddit={this.props.clickedSubreddit} />
          ) : (
            <HeaderFavouriteSub />
          )}
        </div>
      </div>
    );
  }
}
