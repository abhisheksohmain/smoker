import { useEffect, useRef, useState } from 'react';

export default function useCountUp(end, duration = 1800) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  useEffect(() => {
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const p = Math.min((now - start) / duration, 1);
        setValue(end * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);
  return [ref, Number.isInteger(end) ? Math.round(value) : value.toFixed(1)];
}
