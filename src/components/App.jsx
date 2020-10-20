import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import exampleVideoData from '../data/exampleVideoData.js';

// The top level container for the entire application. This is the component that will be rendered to the DOM

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      videoList: [],
      currentVideo: exampleVideoData[0]
    };

    this.onVideoListClick = this.onVideoListClick.bind(this);
  }

  componentDidMount() {
    this.getVideos('good doggo');
  }

  getVideos(query) {
    var options = {
      key: this.props.API_KEY,
      query: query
    };

    this.props.searchYouTube(options, (videos) => {
      console.log(videos);
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

  render() {

    return (

      <div>
        {console.log(this.props)}
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search handleSearchInputChange={this.getVideos.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onVideoListClick={this.onVideoListClick} videos={this.state.videoList} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;