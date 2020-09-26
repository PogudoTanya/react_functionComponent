import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import useRedditApi from "hooks/useRedditApi";

import Login from "pages/login";
import Callback from "pages/callback";
import Home from "pages/home";
import AllSubreddits from "pages/allSubreddits";
import Subreddit from "pages/subreddit";
import Example from 'pages/home/example'

function Routes() {
  const [, , isLoggedIn] = useRedditApi();
  if (isLoggedIn) {
    return (
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/allSubreddits" exact component={AllSubreddits} />
        {/* <Route path="/subreddit" exact component={Subreddit} /> */}
        <Route path="/subreddit" component={Subreddit}/>
        <Route path="/example" component={Example}/>
        {/* <Route path="/subreddit" render={() => <Subreddit />} /> */}
        {/* <Route path='/notFound' component={NotFound} /> */}
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/login" exact component={Login} />
      <Route path="/callback" exact component={Callback} />
      <Redirect to="/login" />
    </Switch>
  );
}

export default Routes;
