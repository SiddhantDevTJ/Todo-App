import { useEffect } from "react";
import { useState } from "react";
import "./Todo.css";

export const TodoDate = () => {
  const [date, setDate] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const formattedDate = date.toLocaleDateString();

      const formattedTime = date.toLocaleTimeString();
      setDate(`${formattedDate}-${formattedTime}`);
      console.log(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return <h2 className="date-time">{date}</h2>;
};
