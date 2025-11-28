import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(1);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    console.log('Effect ran!');
  }, [count]);

  console.log('App rendered!');

  return (
    <>
      <button onClick={() => setCount(count + 1)}>The count is {count}</button>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
