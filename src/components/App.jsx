import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

// The top level container for the entire application. This is the component that will be rendered to the DOM

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

  }

  componentDidMount() {
    this.getVideos('bootstrap tutorial');
  }

  getVideos(query) {
    console.log('props:', this.props);
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      // console.log(videos);
      this.setState({
        videoList: videos,
        currentVideo: videos[0]
      });
    });
  }

  onVideoListClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  debounce(func, wait) {
    let timer = null;
    return function() {
      clearTimeout(timer);
      timer = setTimeout(function() {
        func.apply(this, arguments);
      }, wait);
    };
  }

  render() {

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search debounce={this.debounce} handleSearchInputChange={this.getVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onVideoListClick={this.onVideoListClick.bind(this)} videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;