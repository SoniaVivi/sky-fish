import React, { useState, useMemo } from "react";
import PropTypes from "prop-types";

const Tags = (props) => {
  const [totalHighlighted, setTotalHighlighted] = useState(0);
  const tags = useMemo(
    () =>
      props.tags
        .map((tag) => ({
          name: tag,
          highlight: props.match.includes(tag)
            ? setTotalHighlighted((prev) => prev + 1) || true
            : false,
        }))
        .sort((a, b) => {
          if (a.highlight && b.highlight) {
            return 0;
          } else if (b.highlight && !a.highlight) {
            return 1;
          } else if (a.highlight && !b.highlight) {
            return -1;
          }
        }),
    [props.tags, props.match]
  );

  return (
    <div className={`sky-fish ${props.className}`}>
      {tags
        ? tags.slice(0, totalHighlighted + 4).map(({ name, highlight }, i) => (
            <span
              key={i}
              className={`sky-fish${highlight ? " highlight" : ""}`}
            >
              {name}
            </span>
          ))
        : null}
    </div>
  );
};

export default Tags;

Tags.propTypes = {
  match: PropTypes.array.isRequired,
  tags: PropTypes.array.isRequired,
  className: PropTypes.string.isRequired,
};
