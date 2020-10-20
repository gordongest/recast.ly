// import YOUTUBE_API_KEY from './lib/youtube.js';

var searchYouTube = ({ key, query, max = 5 }, callback) => {
  // console.log('A:', options, 'B:',callback)
  //options is an object -> query: string to search for, max: the maximum number of videos to get, which should default to 5, key: an authorized YouTube Browser API key
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({ items }) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({ responseJSON }) => {
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
  // .done(data => callback(data.items))
  // .fail(err => console.log('GET failed', err));
};

// componentDidMount: function () {
//   $.ajax({
//     url: this.props.url,
//     dataType: 'json',
//     cache: false,
//     success: function(data) {
//       this.setState({data: data});
//     }.bind(this),
//     error: function(xhr, status, err) {
//       console.error(this.props.url, status, err.toString());
//     }.bind(this)
//   });
// },

//   $.ajax({
//     url: n,
//     type: 'GET',
//     data: { order: '-createdAt' },
//     contentType: 'application/json',
//     success: callback,
//     error: function(error) {
//       console.error('recast.ly: Failed to find videos', error);
//     }
//   });
// };

export default searchYouTube;