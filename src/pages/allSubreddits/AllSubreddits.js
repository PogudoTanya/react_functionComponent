import React from "react";
import "../allSubreddits/allSubreddits.css";
import defaultImg from "../allSubreddits/img/defaultImg.svg";

function AllSubreddits(props) {
  return (
    <div className="block">
      {props.data.header_img ? (
        <img alt="" src={props.data.header_img} className="block__img" />
      ) : (
        <img alt="" src={defaultImg} className="block__img" />
      )}
      <div className="block__name">
        <button
          type="button"
          onClick={() => {
            props.chooseSubreddit(props.data);
          }}
        >
         {props.data.url}
        </button>
      </div>
      <div className="block__description">
        {props.data.public_description ? props.data.public_description : null}
      </div>
    </div>
  );
}

export default AllSubreddits;
