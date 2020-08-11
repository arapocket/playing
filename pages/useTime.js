//
// useTime hook
//
import { useEffect, useRef, useState } from "react";

export const useTime = (refreshCycle = 1000) => {
  // Returns the current time
  // and queues re-renders every `refreshCycle` milliseconds (default: 100ms)

  const [now, setNow] = useState(getTime());
  //   const timeRef = useRef(getTime());

  useEffect(() => {
    console.log("useEffect in hook called");
    // Regularly set time in state
    // (this will cause your component to re-render frequently)
    const intervalId = setInterval(
      () => setNow(getTime()),
      //   () => {
      //     timeRef.current = getTime();
      //     console.log(timeRef.current);
      //   },
      1000
    );

    // Cleanup interval
    return () => {
      console.log("cleanup in hook called");
      clearInterval(intervalId);
    };

    // Specify dependencies for useEffect
  }, [refreshCycle, setInterval, clearInterval, setNow, getTime]);
  //   }, [refreshCycle, setInterval, clearInterval, getTime]);

  return now;
  //   return timeRef.current;
};

//
// getTime helper function
// (helpful for testing)
// (and for showing that this hook isn't specific to any datetime library)
//
import { DateTime } from "luxon";

export const getTime = () => {
  // This implementation uses Luxon: https://moment.github.io/luxon/
  return DateTime.local();

  // You can also use moment: https://momentjs.com
  // return moment();

  // Or just use native Date objects (in general, not a good move)
  // return new Date();

  // Or just use unix epoch timestamps (integers, no timezones)
  // return (new Date()).getTime();
};

//
// Sample usage
//
// import React from "react";
// import { useRef } from "react";

// `end` prop should also be a Luxon DateTime, preferably in the future.
export const Countdown = ({ end }) => {
  const now = useTime(200); // this countdown will queue a re-render every 200ms.
  // (it will try to update every 200ms)

  // Luxon `DateTime`: https://moment.github.io/luxon/docs/class/src/datetime.js~DateTime.html#instance-method-diff
  const diff = end.diff(now);
  // Luxon `Duration`: https://moment.github.io/luxon/docs/class/src/duration.js~Duration.html#instance-method-toFormat
  const formattedDuration = diff.toFormat("h:m:s");

  return <h1>{formattedDuration}</h1>;
};
