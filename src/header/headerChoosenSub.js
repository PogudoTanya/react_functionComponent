import React from "react";
import DefaultImg from "../pages/allSubreddits/img/defaultImg.svg";

export default function headerChoosenSub (props) {
    return (
      <div className='header_bottom-content_favourite'>
        <img
          alt=""
          src={
            props.clickedSubreddit.header_img != null
              ? props.clickedSubreddit.header_img
              : DefaultImg
          }
          className='header_bottom-content_img'
        />
        <div className="header_bottom-content_text">{props.clickedSubreddit.display_name}</div>
        <div className="header_bottom-content_context">{props.clickedSubreddit.display_name_prefixed}</div>
      </div>
    );
  }

