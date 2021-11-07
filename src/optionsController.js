import React from "react";
import ReactDOM from "react-dom";
import Option from "./components/config/Option";

ReactDOM.render(
  <div id="root">
    <Option name="matchTags" displayName="Match Tags" />
    <Option name="matchGenres" displayName="Match Genres" />
  </div>,
  document.querySelector("body")
);
