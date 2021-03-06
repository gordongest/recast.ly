// Responsible for knowing and communicating information about the search input field
var Search = ({debounce, handleSearchInputChange}) => (

  <div className="search-bar form-inline">
    <input
      className="form-control"
      type="text"
      onChange={(event) => debounce(handleSearchInputChange(event.target.value), 500)}
    />
    <button className="btn hidden-sm-down" type="submit">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>

);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
