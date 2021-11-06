import React from "react";
import ReactDOM from "react-dom";
import getTitle from "./getTitle";
import Popup from "./components/Popup";
import "./style.scss";

const displayController = (() => {
  let points = [0, 0];
  let _started = false;
  let _popupContainer = null;

  const _removePopup = () => {
    _popupContainer.remove();
    _popupContainer = null;
  };

  const _onMouseMove = (event) => {
    if (!event.ctrlKey && !_started) return;
    const validTargets = ["EM", "A", "H1", "STRONG", "P"];
    const target = event.originalTarget;
    const getPoint = () =>
      document.caretPositionFromPoint(event.clientX, event.clientY);

    if (validTargets.includes(target.nodeName) && !_started) {
      _popupContainer && _removePopup();
      points[0] = getPoint().offset;
      _started = true;
    } else if (!event.ctrlKey && _started) {
      _started = false;
      points[1] = getPoint().offset;
      const min = Math.min(...points);
      const max = Math.max(...points);

      _createPopup(
        max - min < 5
          ? getTitle(target.textContent)
          : getPoint().offsetNode.data.slice(min, max),
        { x: event.pageX, y: event.pageY }
      );
    }
  };

  const _createPopup = (title, position) => {
    _popupContainer = document
      .querySelector("body")
      .appendChild(document.createElement("div"));
    ReactDOM.render(
      <Popup title={title} position={position} close={_removePopup} />,
      _popupContainer
    );
  };

  const start = () => {
    document.querySelector("body").addEventListener("mousemove", _onMouseMove);
  };

  return { start, getTitle };
})();

window.setTimeout(() => displayController.start(), 500);
