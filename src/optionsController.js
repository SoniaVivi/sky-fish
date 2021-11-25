import React from "react";
import ReactDOM from "react-dom";
import KeyOption from "./components/config/KeyOption";
import Option from "./components/config/Option";

ReactDOM.render(
  <div id="root">
    <Option name="matchTags" displayName="Match Tags" />
    <Option name="matchGenres" displayName="Match Genres" />
    <KeyOption />
  </div>,
  document.querySelector("body")
);
