import { useRef, useEffect } from "react";

type setTimerCallback = (callback: () => void, timeout: number) => void;

export function useTimer(): setTimerCallback {
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        window.clearTimeout(timer.current);
      }
    };
  }, []);

  const setTimer = (callback: () => void, timeout: number): void => {
    timer.current = window.setTimeout(callback, timeout);
  };
  return setTimer;
}
