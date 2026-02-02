import Header from "./components/header";
import SearchBar from "./components/searchBar";
import ArticlePreview from "./components/articlePreview";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />
      <SearchBar />
      <ArticlePreview />
    </div>
  );
}

export default App;
