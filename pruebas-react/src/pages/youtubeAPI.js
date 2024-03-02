export function fetchYouTubeVideo(apiKey, videoId) {
    const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${apiKey}&part=snippet`;
  
    return fetch(url)
      .then(response => response.json())
      .catch(error => {
        console.error('Error al conectar con la API de YouTube:', error);
        throw error;
      });
  }
  
  export function mostrarVideo(response, containerId) {
    const videoInfo = response.items[0];
    const videoId = videoInfo.id;
  
    const player = document.createElement('iframe');
    player.width = '205';
    player.height = '115';
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`; 
    player.allow = 'autoplay'; 
    player.frameBorder = '0';
    player.allowFullscreen = true;
  
    const videoContainer = document.getElementById(containerId);
    videoContainer.appendChild(player);
  }
  
// Esperamos que la respuesta de la API tenga la siguiente estructura:
// {
//    kind: String,
//    etag: String,
//    items: [
//        {
//            kind: String,
//            etag: String,
//            id: String,
//            snippet: {
//                publishedAt: String,
//                channelId: String,
//                title: String,
//                description: String,
//                thumbnails: Object,
//                channelTitle: String,
//                tags: Array,
//                categoryId: String,
//                liveBroadcastContent: String,
//                localized: Object,
//                defaultAudioLanguage: String
//            }
//        }
//    ],
//    pageInfo: {
//        totalResults: Number,
//        resultsPerPage: Number
//    }
// }