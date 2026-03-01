import { useState } from "react"
import { Link } from "react-router-dom"
import SearchBar from "../components/SearchBar"

function Home() {
    const [searchTerm, setSearchTerm] = useState("")
    const articles = [
        {id: 1, title: "Purdue", summary: "Purdue University is a public land-grant research university in West Lafayette, Indiana, United States, and the flagship campus of the Purdue University system." },
        {id: 2, title: "Sports", summary: "A physical activity or game, often competitive and organized, that maintains or improves physical ability and skills." },
        {id: 3, title: "Indiana", summary: "Indiana is a state in the Midwestern region of the United States. It borders Lake Michigan to the northwest, Michigan to the north and northeast, Ohio to the east, the Ohio River and Kentucky to the south and southeast, and the Wabash River and Illinois to the west." },
        {id: 4, title: "Dog", summary: "The dog is a domesticated descendant of wolves. Also called the domestic dog, it was selectively bred during the Late Pleistocene by hunter-gatherers. Dogs and the modern gray wolf share a common ancestor." }
    ]
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
  return (
    <div>
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      {filteredArticles.map(article => (
        <div key={article.id} className="article-preview">
          <Link to={`/article/${article.id}`}>
            <h2>{article.title}</h2>
          </Link>
          <p>{article.summary}</p>
        </div>
      ))}

      {filteredArticles.length === 0 && (
        <p>No results found.</p>
      )}
    </div>
  );
}

export default Home;