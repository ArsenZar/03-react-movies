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
      {articles.length > 0 && <ArticleList items={articles} />}
    </>
  );
}
