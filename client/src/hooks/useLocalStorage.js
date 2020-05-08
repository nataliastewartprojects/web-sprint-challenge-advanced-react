import { useState } from "react";

export const useLocalStorage = (key, initialValue = "") => {
  const [values, setValues] = useState(() => {
    if (window.localStorage.getItem(key)) {
      return window.localStorage.getItem(key);
    } else {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    }
  });

  const setValue = (value) => {
    setValues(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [values, setValue];
};
