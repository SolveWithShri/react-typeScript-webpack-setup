import { useEffect, useRef, useState } from 'react';

function MutableRef() {
  const [timer, setTimer] = useState<number>(0);
  const timerRef = useRef<number>(null);

  const stopTimer = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => stopTimer();
  }, []);

  return (
    <div>
      <div>Timer - {timer}</div>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default MutableRef;
