import React from "react";
import NotFoundImg from "../notFound/img/NotFoundImg.svg";
import "../notFound/notFound.css";

export default function NotFound (props) {
    return (
      <div className="error-block">
        <img alt="" src={NotFoundImg}  className="error-block__img"/>
        <div className="error-block__text">
          Sorry, there were no community results for {props.value}
        </div>
      </div>
    );
  }

