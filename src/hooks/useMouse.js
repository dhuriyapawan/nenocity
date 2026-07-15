import { useEffect, useState } from 'react';

function useMouse() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event) => setMouse({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return mouse;
}

export default useMouse;
