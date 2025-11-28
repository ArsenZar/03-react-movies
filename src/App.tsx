// src/components/App.tsx
import axios from "axios";
import SearchForm from "./components/SearchForm";
import { useState } from "react";

interface Article {
  objectID: string;
  title: string;
  url: string;
}

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {

  const [articles, setArticles] = useState<Article[]>([]);

  const handleSearch = async (topic: string) => {
    // Тут будемо виконувати HTTP-запит
    const response = await axios.get<ArticlesHttpResponse>(
      `https://hn.algolia.com/api/v1/search?query=${topic}`
    );
    setArticles(response.data.hits); 
  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {articles.length > 0 && (
        <ul>
          {articles.map(({ objectID, url, title }) => (
            <li key={objectID}>
              <a href={url} target="_blank">{title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
