import { useEffect, useState } from "react";

// Hook that returns the width of a given ref element

export function useParentWidth(ref) {
  const [parentWidth, setWidth] = useState();

  useEffect(() => {
    const getWidth = () => {
      const widthRef = ref.current;
      if (widthRef === null) {
        return;
      }
      setWidth(widthRef.clientWidth);
    };

    getWidth();
    window.addEventListener("resize", getWidth);

    return () => {
      window.removeEventListener("resize", getWidth);
    };
  }, [ref]);

  return parentWidth;
}

const hooks = {
  useParentWidth,
};

export default hooks;
