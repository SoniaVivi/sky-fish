import { useState } from "react";
import { loadOption } from "../storage";

const useOption = (optionName) => {
  const [option, setOption] = useState(null);
  if (!option) {
    loadOption(optionName)
      .then((data) => setOption(data))
      .catch((e) => console.log(e));
  }

  return option ?? [];
};

export default useOption;
