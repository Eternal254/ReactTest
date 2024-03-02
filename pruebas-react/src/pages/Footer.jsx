import React, { useEffect } from 'react';
import { fetchYouTubeVideo, mostrarVideo } from './youtubeAPI';
import './Footer.css';

function Footer() {
  useEffect(() => {
    // Código de conexión a la API de YouTube
    const apiKey = 'AIzaSyBQ6cl0swbmQgolbPEosEUebLuN0GHCKy4';
    const videoId = 'PlPZAHsGqOg';

    fetchYouTubeVideo(apiKey, videoId)
      .then(data => {
        console.log(data);
        // Llamar a la función para mostrar el video cuando se recibe la respuesta
        mostrarVideo(data, 'video-container');
      })
      .catch(error => {
        console.error('Error al conectar con la API de YouTube:', error);
        // Puedes manejar el error aquí
      });
  }, []); // Llamar solo una vez al cargar el componente

  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; 2024 Eternals Inc. No te robes mi codigo</p>
      </div>
      <div id="video-container" className="video-container"></div> 
    </footer>
  );
}

export default Footer;
