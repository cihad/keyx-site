import { useState } from "react";

export function useDefaultState(defaultValue) {
  const [value, set] = useState(defaultValue);

  return {
    value,
    set,
  };
}
