import React, { useState } from "react";
import "header/header.css";
import Reddit from "../header/img/reddit.svg";
import HeaderChoosenSub from "header/headerChoosenSub";
import HeaderFavouriteSub from "header/headerFavouriteSub";

export default function Header(props) {
  const [value, setValue] = useState("");
  return (
    <div className="header">
      <div className="header_top-content">
        <img alt="" src={Reddit} className="header_img" />
        <input
          placeholder="Search"
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
          }}
          className="header__input"
        />
        <button
          value={value}
          className="header__button"
          onClick={() => {
            props.onClick(value);
          }}
        >
          Search
        </button>
      </div>
      <div className="header_center-content" />
      <div className="header_bottom-content">
        {props.showAllSubreddits ? (
          `Search results for ${props.value}`
        ) : props.clickedSubreddit !== undefined ? (
          <HeaderChoosenSub clickedSubreddit={props.clickedSubreddit} />
        ) : (
          <HeaderFavouriteSub />
        )}
      </div>
    </div>
  );
}
