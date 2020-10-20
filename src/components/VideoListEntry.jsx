import App from './App.js';

// A component that shows a thumbnail view for a single video. When the title of this video is clicked, that video will be played in the VideoPlayer component

var VideoListEntry = (props) => (

  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="<VideoListEntry key={video.etag} video={video} />" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" onClick={() => props.onVideoListClick(props.video)}>{props.video.snippet.title}</div>
      <div className="video-list-entry-detail">{props.video.snippet.description}</div>
    </div>
  </div>

);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;