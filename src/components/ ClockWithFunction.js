import { useState, useEffect } from 'react';

const ClockWithFunction = () => {
  // Destructuring assginment
  const [date, setDate] = useState(new Date()); // returns an array

  const tick = () => setDate(new Date());
  // useEffect with empty array of dependencies only runs once when the component mounts
  // useEffect with a populated array of dependencies will run when it mounts and on every subsequent update to its values
  // useEffect without an array of dependencies will run on EVERY render
  // useEffect's callback function can return a value, this will run when the component is about to be unmounted
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  }, []);

  return <h2>Functional based: It is {date.toLocaleTimeString()}</h2>;
};

export default ClockWithFunction;
