import React from "react";
import useOption from "../useOption";

const KeyOption = () => {
  const [hotKeys, setHotKeys] = useOption("hotKeys");
  const toggle = (option) => () =>
    setHotKeys((prevState) => ({
      ...prevState,
      [option]: !prevState[option],
    }));

  return (
    <div>
      <span>Bind Keys</span>
      <div>
        <div>Ctrl Key: {hotKeys.ctrlKey ? "True" : "False"}</div>
        <button onClick={toggle("ctrlKey")}>Toggle</button>
      </div>
      <div>
        <div>Shift Key: {hotKeys.shiftKey ? "True" : "False"}</div>
        <button onClick={toggle("shiftKey")}>Toggle</button>
      </div>
      {!hotKeys.ctrlKey && !hotKeys.shiftKey ? (
        <h5>Extension is disabled</h5>
      ) : null}
    </div>
  );
};

export default KeyOption;
