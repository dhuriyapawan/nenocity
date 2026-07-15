import { useEffect, useState } from 'react';

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const value = height > 0 ? (scrollTop / height) * 100 : 0;
      setProgress(value);
    };

    update();
    window.addEventListener('scroll', update);
    return () => window.removeEventListener('scroll', update);
  }, []);

  return <div className="scroll-progress" style={{ width: `${progress}%` }} />;
}

export default ScrollProgress;
