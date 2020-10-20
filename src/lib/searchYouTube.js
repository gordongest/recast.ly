import YOUTUBE_API_KEY from './lib/youtube.js';

var searchYouTube = (options, callback) => {
  //options is an object -> query: string to search for, max: the maximum number of videos to get, which should default to 5, key: an authorized YouTube Browser API key
  $.get('https://www.googleapis.com/youtube/v3/search', {
    key: key,
    maxResults: max,
    type: video,
    query: query,
    videoEmbeddable: 'true'

  });


  $.ajax({
    url: n,
    type: 'GET',
    data: { order: '-createdAt' },
    contentType: 'application/json',
    success: callback,
    error: function(error) {
      console.error('recast.ly: Failed to find videos', error);
    }
  });
};

export default searchYouTube;
