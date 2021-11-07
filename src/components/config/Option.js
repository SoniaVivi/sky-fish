import React, { useState } from "react";
import PropTypes from "prop-types";
import useOption from "../useOption";
import Tag from "./Tag";

const Option = (props) => {
  const [mode, setMode] = useState(0);
  const [option, setOption] = useOption(props.name);

  return (
    <div>
      <span>{props.displayName}</span>
      <div>
        <div>
          {option.map((tagName, i) => (
            <Tag
              key={i}
              name={tagName}
              onChange={(text) =>
                setOption((options) => {
                  let newOptions = options;
                  i < newOptions.length
                    ? (newOptions[i] = text)
                    : newOptions.append(text);

                  return [...newOptions];
                })
              }
              onRemove={() =>
                setOption((options) => {
                  let newOptions = options;
                  newOptions.splice(i, 1);
                  return [...newOptions];
                })
              }
              mode={mode}
            />
          ))}
        </div>
        <div>
          <button onClick={() => setMode((prev) => (prev == 1 ? 0 : 1))}>
            {mode == 0 ? "Remove" : "Edit"}
          </button>
          <button onClick={() => setOption((prev) => [...prev, ""])}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Option;

Option.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
};
