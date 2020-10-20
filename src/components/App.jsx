import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

// The top level container for the entire application. This is the component that will be rendered to the DOM

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      videoList: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };

    this.onVideoListClick = this.onVideoListClick.bind(this);
  }

  onVideoListClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {

    return (

      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList onVideoListClick={this.onVideoListClick} videos={this.state.videoList}/>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;