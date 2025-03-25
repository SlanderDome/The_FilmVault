import { useState } from "react";
import './search.css'

function SearchComponent({ searchMovies }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevents accidental form submission
      if (searchTerm.trim() !== "") {
        searchMovies(searchTerm); // Call the search function
      }
    }
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={handleKeyDown} // Calls searchMovies on Enter
      />
      <button onClick={() => searchMovies(searchTerm)} disabled={!searchTerm.trim()}>
        Search
      </button>
    </div>
  );
}

export default SearchComponent;
