function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <div className="content">
      <div className="search-bar">
        <input type="text" placeholder="Search WikiLite..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button>Search</button>
      </div>
    </div>
  );
}

export default SearchBar;