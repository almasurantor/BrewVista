export const SearchBar = ({ searchTerm, setSearchTerm }) => {
    return (
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search breweries..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    );
  };