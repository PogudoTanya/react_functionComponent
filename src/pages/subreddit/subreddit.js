import React from "react";
import  "../subreddit/subreddit.css";
import moment from "moment";
import Comment from "../subreddit/img/comment.svg";

function Subreddit (props) {
//      <div className={styles['header-bottom']}></div>
    return (
      <div className='body-content'>
        <div className="body-content_creator">
          Created by {props.data.author}
          {moment.unix(props.data.created_utc).startOf("day").fromNow()}
        </div>
        <div className="body-content__title">{props.data.title}</div>
        <div className="body-content__text">
          {props.data.selftext
            ? props.data.selftext
            : props.data.url}
        </div>
        <div className="body-content__comment">
          <img alt="" src={Comment} />
          <div className="body-content__comment-text">
            {props.data.score} Comments
          </div>
        </div>
      </div>
    );
  }

  export default Subreddit;