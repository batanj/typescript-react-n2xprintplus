import React, { useEffect, useState } from "react";
import { getTime, ampm } from "../utils/date";

export default function Clock() {
  const [time, setTime] = useState(new Date().toLocaleString());

  useEffect(() => {
    let intervalID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(intervalID);
    };
  });

  function tick() {
    setTime(new Date().toLocaleString());
  }

  return (
    <span>
      {getTime(time)} {ampm(time)}
    </span>
  );
}
