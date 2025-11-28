import { useState } from 'react';
import axios from 'axios';

export default function App() {
  const [person, setPerson] = useState(null);

  // console.log('App rendred!');

  axios
    .get('https://swapi.info/api/people/1')
    .then((response) => setPerson(response.data));

  return (
    <>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </>
  );
}
