import { useState, useEffect } from "react";

export default function App() {
  const [clicks, setClicks] = useState(0);

  // 1. Тільки один раз після монтування
  useEffect(() => {
    console.log("You can see me only once!");
  }, []);

  // 2. Кожного разу, коли змінюється clicks
  useEffect(() => {
    console.log("Clicks updated:", clicks);
  }, [clicks]);

  // 3. При кожному рендері (бо без залежностей)
  useEffect(() => {
    document.title = `You clicked ${clicks} times`;
  });

  return (
    <button onClick={() => setClicks(clicks + 1)}>
      You clicked {clicks} times
    </button>
  );
}
