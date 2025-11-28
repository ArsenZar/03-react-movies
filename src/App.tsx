// src/components/App.tsx

import SearchForm from "./components/SearchForm";

export default function App() {

  const handleSearch = async (topic: string) => {
    // Тут будемо виконувати HTTP-запит
    console.log(topic);
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
    </>
  );
}
