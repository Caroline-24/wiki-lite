import Header from "./components/header";
import SearchBar from "./components/searchBar";
import ArticlePreview from "./components/articlePreview";
import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("")

  const articles = [
    {id: 1, title: "Wikiquote", summary: "A collaborative online compendium of sourced quotations from notable people, films, books, and other creative works." },
    {id: 2, title: "Wiktionary", summary: "A multilingual, online dictionary designed to define, translate, and describe all words in all languages." },
    {id: 3, title: "Purdue", summary: "Purdue University is a public land-grant research university in West Lafayette, Indiana, United States, and the flagship campus of the Purdue University system." },
    {id: 4, title: "Sports", summary: "A physical activity or game, often competitive and organized, that maintains or improves physical ability and skills." }
  ]

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="app">
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {filteredArticles.map(article => (
        <div key={article.id} className="article-preview">
          <h2>{article.title}</h2>
          <p>{article.summary}</p>
        </div>
      ))}
      {filteredArticles.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default App;
