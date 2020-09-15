import React from "react";
import "../subreddit/subreddit.css";
import moment from "moment";
import Comment from "../subreddit/img/comment.svg";

export default class Subreddit extends React.Component {
  render() {
    return (
      <div className="body-content">
        <div className="body-content_creator">
          Created by {this.props.data.author}
          {moment.unix(this.props.data.created_utc).startOf("day").fromNow()}
        </div>
        <div className="body-content__title">{this.props.data.title}</div>
        <div className="body-content__text">
          {this.props.data.selftext
            ? this.props.data.selftext
            : this.props.data.url}
        </div>
        <div className="body-content__comment">
          <img alt="" src={Comment} />
          <div className="body-content__comment-text">
            {this.props.data.score} Comments
          </div>
        </div>
      </div>
    );
  }
}
