import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkState, setDarkState] = useState<boolean>(false);

  useEffect(
    () => {
      const className = "dark-mode";
      const element = window.document.body;
      if (darkState) {
        element.classList.add(className);
      } else {
        element.classList.remove(className);
      }
    },
    [darkState] // Only re-call effect when value changes
  );
  // Return enabled state and setter
  return {
    darkState,
    setDarkState,
  };
};

export default useDarkMode;
