import { useEffect, useState } from "react";

export default function useWidth(): number {
  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    setCurrentWidth(window.innerWidth);
  }, [window.innerWidth]);

  return currentWidth;
}
