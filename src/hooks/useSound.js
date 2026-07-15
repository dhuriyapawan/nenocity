import { useEffect, useRef } from 'react';

function useSound(src) {
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
    }
  }, [src]);

  return audioRef;
}

export default useSound;
