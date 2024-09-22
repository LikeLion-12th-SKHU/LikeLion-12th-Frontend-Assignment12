import { useState, useEffect } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => setOpacity(1), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);

  return { style: { transition: `opacity ${duration}s`, opacity } };
};

export default useFadeIn;
