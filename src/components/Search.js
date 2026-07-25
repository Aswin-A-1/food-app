const Search = ({searchText, setSearchText, onSearch}) => {
  return (
    <div className="search">
      <input value={searchText} onChange={(e) => {
        setSearchText(e.target.value)
      }}></input>
      <button onClick={onSearch}>Search</button>
    </div>
  );
};

export default Search;