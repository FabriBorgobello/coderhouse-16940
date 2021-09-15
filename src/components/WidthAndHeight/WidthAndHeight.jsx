import React from "react";
import useWindowSize from "../../hooks/useWindowSize";

const WidthAndHeight = () => {
  const windowSize = useWindowSize();

  return (
    <div>
      <p>Height: {windowSize.height}</p>
      <p>Width: {windowSize.width}</p>
    </div>
  );
};

export default WidthAndHeight;
