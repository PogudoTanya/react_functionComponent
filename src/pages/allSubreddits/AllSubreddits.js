import React from "react";
import "../allSubreddits/allSubreddits.css";
import defaultImg from "../allSubreddits/img/defaultImg.svg";

export default class AllSubreddits extends React.Component {
  render() {

    return (
      <div className="block">
        {this.props.data.header_img ? (
          <img alt="" src={this.props.data.header_img} className="block__img" />
        ) : (
          <img alt="" src={defaultImg} className="block__img" />
        )}
        <div className="block__name">
          <button
            type="button"
            onClick={() => {
              this.props.chooseSubreddit(this.props.data);
            }}
          >
            {this.props.data.url}
          </button>
        </div>
        <div className="block__description">
          {this.props.data.public_description
            ? this.props.data.public_description
            : null}
        </div>
      </div>
    );
  }
}
