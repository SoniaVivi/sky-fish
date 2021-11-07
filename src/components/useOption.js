import { useState, useEffect } from "react";
import { loadOption, saveOption } from "../storage";

const useOption = (optionName) => {
  const [stateOption, setStateOption] = useState(null);
  useEffect(() => {
    stateOption ? saveOption(optionName, stateOption) : null;
  }, [stateOption, optionName]);

  if (!stateOption) {
    loadOption(optionName)
      .then((data) => setStateOption(data))
      .catch((e) => console.log(e));
  }

  return [stateOption ?? [], setStateOption];
};

export default useOption;
