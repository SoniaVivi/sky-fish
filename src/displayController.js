import React from "react";
import ReactDOM from "react-dom";
import getTitle from "./getTitle";
import Popup from "./components/Popup";
import "./style.scss";
import { loadOption } from "./storage";

const displayController = (() => {
  const _filterHotKeys = (hotKeys) =>
    Object.keys(hotKeys).filter((key) => !!hotKeys[key]);
  let points = [0, 0];
  let _started = false;
  let _popupContainer = null;
  let hotKeys = [];
  loadOption("hotKeys").then((r) => (hotKeys = _filterHotKeys(r)));

  const _removePopup = () => {
    _popupContainer.remove();
    _popupContainer = null;
  };

  const _allKeysPressed = (event) => hotKeys.every((key) => !!event[key]);

  const _onMouseMove = (event) => {
    if (!_allKeysPressed(event) && !_started) return;
    const target = event.originalTarget;
    const getPoint = () =>
      document.caretPositionFromPoint(event.clientX, event.clientY);

    if (!_started) {
      _popupContainer && _removePopup();
      points[0] = getPoint().offset;
      _started = true;
    } else if (!_allKeysPressed(event) && _started) {
      _started = false;
      points[1] = getPoint().offset;
      const min = Math.min(...points);
      const max = Math.max(...points);
      let searchOptions = [...getTitle(target.textContent)];

      _createPopup(
        max - min < 5
          ? searchOptions
          : [getPoint().offsetNode.data.slice(min, max), ...searchOptions],
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

  const _watch = () => {
    //eslint-disable-next-line no-undef
    browser.storage.onChanged.addListener((e) => {
      if (e?.hotKeys?.newValue) {
        hotKeys = _filterHotKeys(e?.hotKeys?.newValue);
      }
    });
  };

  const start = () => {
    document.querySelector("body").addEventListener("mousemove", _onMouseMove);
    _watch();
  };

  return { start, getTitle };
})();

window.setTimeout(() => displayController.start(), 500);
