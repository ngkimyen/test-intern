import React, { useEffect, useState } from "react";

const useViewPort = () => {
  const [width, setWith] = useState(window.innerWidth);

  const handleResize = () => {
    setWith(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    isMobile: width < 739,
    isSmallDesktop: (width >= 740) && (width < 1300 )
  };
};

export default useViewPort;
