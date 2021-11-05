import React from "react";
import ReactDOM from "react-dom";
import getTitle from "./getTitle";
import "./style.scss";

const displayController = (() => {
  let points = [0, 0];
  let _started = false;
  let _popupContainer;

  const _onMouseMove = (event) => {
    if (!event.ctrlKey && !_started) return;
    const validTargets = ["EM", "A", "H1", "STRONG", "P"];
    const target = event.originalTarget;
    const getPoint = () =>
      document.caretPositionFromPoint(event.clientX, event.clientY);
    if (validTargets.includes(target.nodeName) && !_started) {
      points[0] = getPoint().offset;
      _started = true;
    } else if (!event.ctrlKey && _started) {
      _started = false;
      points[1] = getPoint().offset;
      let min = Math.min(...points);
      let max = Math.max(...points);
      _createPopup(
        getTitle(
          max - min < 5
            ? target.textContent
            : getPoint().offsetNode.data.slice(min, max)
        ),
        { x: event.pageX, y: event.pageY }
      );
    }
  };

  const _createPopup = (title, position) => {
    _popupContainer = document
      .querySelector("body")
      .appendChild(document.createElement("div"));
    ReactDOM.render(
      <Popup title={title} position={position} />,
      _popupContainer
    );
  };

  const Popup = (props) => (
    <div
      style={{
        position: "absolute",
        top: props.position.y,
        left: props.position.x,
      }}
    >
      <h1>{props.title}</h1>
      {props.description ? (
        <div>
          <p>Lorem ipsum dolor sit amet, congue oportere voluptatum vis et,</p>
        </div>
      ) : null}
    </div>
  );

  const start = () => {
    document.querySelector("body").addEventListener("mousemove", _onMouseMove);
  };

  return { start, getTitle };
})();

if (typeof window != "undefined") {
  window.setTimeout(() => displayController.start(), 500);
}
