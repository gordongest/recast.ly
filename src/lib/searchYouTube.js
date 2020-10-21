var searchYouTube = ({ key, query, max = 5 }, callback) => {

  //options is an object -> query: string to search for, max: the maximum number of videos to get, which should default to 5, key: an authorized YouTube Browser API key

  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done((data) => {
      if (callback) {
        callback(data.items);
      }
    })
    .fail(err => console.log('GET failed', err));
};

export default searchYouTube;