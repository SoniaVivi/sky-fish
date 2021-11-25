import React from "react";
import PropTypes from "prop-types";
import Tags from "./Tags";
import useOption from "./useOption";

const Description = (props) => {
  const matchTags = useOption("matchTags")[0];
  const matchGenres = useOption("matchGenres")[0];
  const data = props.data;

  return (
    <div className="sky-fish">
      <Tags className="genres" tags={data.tags} match={matchTags} />
      <Tags className="tags" tags={data.genres} match={matchGenres} />
      <p className="sky-fish">
        {props.data.description
          .replace(/(<br>)+/g, "\n")
          .replace(/(<\/*\w+>)/g, "")}
      </p>
      <div className="sky-fish footer">
        <span className="sky-fish status">
          {data.status.slice(0, 1) + data.status.slice(1).toLowerCase()}
        </span>
        <span className="sky-fish volumes">{data.volumes ?? "?"} Volumes</span>
        <span className="sky-fish chapters">
          {data.chapters ?? "?"} Chapters
        </span>
      </div>
    </div>
  );
};

export default Description;

Description.propTypes = {
  data: PropTypes.object.isRequired,
};
