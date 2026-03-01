import { useParams, Link } from "react-router-dom";

function Article() {
  const { id } = useParams();

  const articles = [
    {
      id: 1,
      title: "Purdue",
      content: "Purdue University is a public land-grant research university in West Lafayette, Indiana, United States, and the flagship campus of the Purdue University system,[6] which also includes Purdue University in Indianapolis as an ongoing expansion of the West Lafayette campus.[7] The university was founded in 1869 after Lafayette businessman John Purdue donated land and money to establish a college of science, technology, and agriculture;[8] the first classes were held on September 16, 1874.[8]", url: "https://en.wikipedia.org/wiki/Purdue_University"
    },
    {
      id: 2,
      title: "Sports",
      content: "Sport is a physical activity or game,[1] often competitive and organized, that maintains or improves physical ability and skills. Sport may provide enjoyment to participants and entertainment to spectators.[2] The number of participants in a particular sport can vary from hundreds of people to a single individual.", url: "https://en.wikipedia.org/wiki/Sport"
    },
    {
      id: 3,
      title: "Indiana",
      content: "Indiana is a state in the Midwestern region of the United States. It borders Lake Michigan to the northwest, Michigan to the north and northeast, Ohio to the east, the Ohio River and Kentucky to the south and southeast, and the Wabash River and Illinois to the west. Nicknamed the Hoosier State,[16] Indiana is the 38th-largest by area and the 17th-most populous of the 50 states. Its capital and largest city is Indianapolis, and other cities include Fort Wayne, Evansville, South Bend, and Carmel. Indiana was admitted to the Union as the 19th state on December 11, 1816.", url: "https://en.wikipedia.org/wiki/Indiana"
    },
    {
      id: 4,
      title: "Dog",
      content: "The dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of wolves. Also called the domestic dog, it was selectively bred during the Late Pleistocene by hunter-gatherers. Dogs and the modern gray wolf share a common ancestor.[4] Dogs were the first species to be domesticated over 14,000 years ago, before the development of agriculture, though genetic studies suggest the domestication process may have begun over 25,000 years ago. Due to their long association with humans, dogs have gained the ability to thrive on a starch-rich diet that would be inadequate for other canids.", url:"https://en.wikipedia.org/wiki/Dog" 
    }
  ];

  const article = articles.find(
    a => a.id === parseInt(id)
  );

  if (!article) {
    return <p>Article not found.</p>;
  }

  return (
    <div className="article-page">
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <div className="article-links">
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Full Article
        </a>

        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
}

export default Article;