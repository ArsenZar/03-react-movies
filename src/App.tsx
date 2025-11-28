// src/components/App.tsx
import axios from "axios";
import SearchForm from "./components/SearchForm";
import { useState } from "react";
import ArticleList from "./components/ArticleList";
import type { Article } from "./types/article";

interface ArticlesHttpResponse {
  hits: Article[];
}

export default function App() {

  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);



  const handleSearch = async (topic: string) => {
    try {
      // Тут будемо виконувати HTTP-запит
      setIsLoading(true);
      const response = await axios.get<ArticlesHttpResponse>(
        `https://hn.algolia.com/api/v1/search?query=${topic}`
      );
      setIsLoading(false);
      setArticles(response.data.hits);
    } catch {
      // 4. Встановлюємо стан isError в true
      setIsError(true);
    } finally {
      // 5. Встановлюємо стан isLoading в false
      // після будь якого результату запиту
      setIsLoading(false);
    }

  };

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {isLoading && <p>Loading data, please wait...</p>}
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
