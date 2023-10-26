import { useEffect } from "react";

function Timer({ dispatch, secondsRemaining }) {
  const min = Math.floor(secondsRemaining / 60);
  const sec = secondsRemaining % 60;
  useEffect(
    function () {
      const intervalId = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(intervalId);
    },
    [dispatch]
  );
  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}:{sec < 10 && "0"}
      {sec}
    </div>
  );
}

export default Timer;
