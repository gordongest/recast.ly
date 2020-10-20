// Responsible for knowing and communicating information about the search input field
class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      current: ''
    };
  }
  // searchYT(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
  //   searchYouTube({});
  // }

  render() {
    return (
      <form className="search-bar form-inline">
        <input className="form-control" type="text" />
        <button className="btn hidden-sm-down" type="submit">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </form>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
