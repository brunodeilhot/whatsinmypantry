import { useEffect, useState } from "react";

// Hook that returns the width of a given ref element

export function useParentSize(ref) {
  const [parentSize, setWidth] = useState();

  useEffect(() => {
    const getSize = () => {
      if (ref.current === null) {
        return;
      }
      setWidth({
        width: ref.current.clientWidth,
        height: ref.current.clientHeight,
      });
    };
    
    getSize();
    window.addEventListener("resize", getSize);
  }, [ref]);

  return parentSize;
}

const hooks = {
  useParentSize,
};

export default hooks;
