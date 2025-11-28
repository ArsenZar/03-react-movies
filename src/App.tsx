import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Effect ran for: ${count}`);

    // Повертаємо функцію очищення ефекта
    return () => {
      console.log(`Clean up for ${count}`);
    };
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Count is {count}</button>
    </>
  );
}
