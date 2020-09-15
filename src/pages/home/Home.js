import React from "react";
import { withRedditApi } from "hooks/useRedditApi";
import Header from "../../header/Header";
import Subreddit from "../subreddit/subreddit";
import AllSubreddits from "../allSubreddits/AllSubreddits";
import NotFound from "../notFound/NotFound.js";
import "../home/home.css";

class Home extends React.Component {
  state = {
    reactSubreddit: null,
    showAllSubreddits: false,
    value: "",
    chooseSubreddit: "react",
  };

  async componentDidMount() {
    const { fetchReddit } = this.props;
    const data = await fetchReddit("/r/react/hot").then((res) => res.json());
    this.setState({ reactSubreddit: data });
  }

  searchSubreddits = async (value) => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(
      `/subreddits/search?q=${value}`
    ).then((res) => res.json());
    this.setState({ reactSubreddit: data, showAllSubreddits: true, value });
  };

  chooseSubreddit = async (value) => {
    const { fetchReddit } = this.props;
    const data = await fetchReddit(`/r/${value.display_name}/hot`).then((res) => res.json());
    this.setState({ reactSubreddit: data, showAllSubreddits: false, clickedSubreddit: value});
  };

  render() {
    const { reactSubreddit } = this.state;
    if (!reactSubreddit) {
      return <p>Loading...</p>;
    }

    return (
      <section className="body">
        <Header
          value={this.state.value}
          onClick={this.searchSubreddits}
          showAllSubreddits={this.state.showAllSubreddits}
          data={this.state.reactSubreddit}
          clickedSubreddit={this.state.clickedSubreddit}
        />
        <div className="title-text">
          {reactSubreddit.data.children.length !== 0
            ? this.state.showAllSubreddits
              ? "Communities and users"
              : null
            : null}
        </div>

        {this.state.reactSubreddit.data.children.length !== 0 ? (
          reactSubreddit.data.children.map((child, index) =>
            this.state.showAllSubreddits ? (
              index < 10 ? (
                <AllSubreddits
                  data={child.data}
                  chooseSubreddit={this.chooseSubreddit}
                />
              ) : null
            ) : index < 10 ? (
              <Subreddit data={child.data} />
            ) : (
              <null />
            )
          )
        ) : (
          <NotFound value={this.state.value} />
        )}
      </section>
    );
  }
}

export default withRedditApi(Home);
