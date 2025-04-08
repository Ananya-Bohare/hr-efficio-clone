import { useRef, useState, useEffect } from 'react';

export const useCenteredTree = (defaultTranslate = { x: 0, y: 0 }) => {
  const [translate, setTranslate] = useState(defaultTranslate);
  const containerRef = useRef(null);

  useEffect(() => {
    const dimensions = containerRef.current.getBoundingClientRect();
    setTranslate({
      x: dimensions.width / 2,
      y: dimensions.height / 5
    });
  }, []);

  return [translate, containerRef];
};