import React, { useState, useEffect } from "react";
import { withRedditApi } from "hooks/useRedditApi";
import Header from "../../header/Header";
import Subreddit from "../subreddit/subreddit";
import AllSubreddits from "../allSubreddits/AllSubreddits";
import NotFound from "../notFound/NotFound.js";
import { Link } from "react-router-dom";
import "../home/home.css";

function Home(props) {
  const [reactSubreddit, setReactSubreddit] = useState(null);
  const [showAllSubreddits, setShowAllSubreddits] = useState(false);
  const [value, setValue] = useState("");
  const [clickedSubreddit, setClickedSubreddit] = useState(undefined);

  useEffect(async () => {
    const { fetchReddit } = props;
    const data = await fetchReddit("/r/react/hot").then((res) => res.json());
    setReactSubreddit(data);
  }, []);

  let searchSubreddits = async (value) => {
    const { fetchReddit } = props;
    const data = await fetchReddit(
      `/subreddits/search?q=${value}`
    ).then((res) => res.json());
    setReactSubreddit(data);
    setShowAllSubreddits(true);
    setValue(value);
  };

  let chooseSubreddit = async (value) => {
    const { fetchReddit } = props;
    const data = await fetchReddit(`/r/${value.display_name}/hot`).then((res) =>
      res.json()
    );
    setReactSubreddit(data);
    setShowAllSubreddits(false);
    setClickedSubreddit(value);
  };

  if (!reactSubreddit) {
    return <p>Loading...</p>;
  }

  return (
    <section className="body">
      <Header
        value={value}
        onClick={searchSubreddits}
        showAllSubreddits={showAllSubreddits}
        data={reactSubreddit}
        clickedSubreddit={clickedSubreddit}
      />
      <div className="title-text">
        {reactSubreddit.data.children.length !== 0
          ? showAllSubreddits
            ? "Communities and users"
            : null
          : null}
      </div>

      {reactSubreddit.data.children.length !== 0 ? (
        reactSubreddit.data.children.map((child, index) =>
          showAllSubreddits ? (
            index < 10 ? (
              <AllSubreddits
                data={child.data}
                chooseSubreddit={chooseSubreddit}
              />
            ) : null
          ) : index < 10 ? (
            <Subreddit data={child.data} />
          ) : (
            <null />
          )
        )
      ) : (
        <NotFound value={value} />
      )}
    </section>
  );
}

export default withRedditApi(Home);
