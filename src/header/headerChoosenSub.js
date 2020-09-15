import React from "react";
import DefaultImg from "../pages/allSubreddits/img/defaultImg.svg";

export default class headerChoosenSub extends React.Component {
  render() {
    return (
      <div className='header_bottom-content_favourite'>
        <img
          alt=""
          src={
            this.props.clickedSubreddit.header_img != null
              ? this.props.clickedSubreddit.header_img
              : DefaultImg
          }
          className='header_bottom-content_img'
        />
        <div className="header_bottom-content_text">{this.props.clickedSubreddit.display_name}</div>
        <div className="header_bottom-content_context">{this.props.clickedSubreddit.display_name_prefixed}</div>
      </div>
    );
  }
}

