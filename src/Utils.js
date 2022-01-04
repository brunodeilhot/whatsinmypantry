import { useEffect, useState } from "react";

// Hook that returns the width of a given ref element

export function useParentWidth(ref) {
  const [parentWidth, setWidth] = useState();

  useEffect(() => {
    const getWidth = () => {
      setWidth(ref === undefined ? 0 : ref.current.clientWidth);
    };

    getWidth();
    window.addEventListener("resize", getWidth);

  }, [ref]);

  return parentWidth;
}

const hooks = {
  useParentWidth,
};

export default hooks;
