// 🎵 ═══════════════════════════════════════════════════════════════
// ║                    🎶 MUSIC BOT Gawr Gura 🎶                 ║
// ║              ✨ Reproductor Musical Avanzado ✨              ║
// ╚═══════════════════════════════════════════════════════════════╝

const axios = require('axios');
const { InvalidParameterError } = require(`${BASE_DIR}/errors`);

// 🌟 APIs MUSICALES GRATUITAS INTEGRADAS 🌟
const MUSIC_APIS = {
  // 🎵 API Principal - Deezer
  deezer: {
    name: "🎵 Deezer Music",
    baseUrl: "https://api.deezer.com/search",
    getUrl: (query) => `https://api.deezer.com/search?q=${encodeURIComponent(query)}&limit=1`
  },
  
  // 🎶 API Secundaria - iTunes
  itunes: {
    name: "🍎 iTunes Store",
    baseUrl: "https://itunes.apple.com/search",
    getUrl: (query) => `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&media=music&limit=1`
  },
  
  // 🎧 API de Respaldo - Last.fm (info musical)
  lastfm: {
    name: "🎧 Last.fm",
    baseUrl: "https://ws.audioscrobbler.com/2.0/",
    getUrl: (query) => `https://ws.audioscrobbler.com/2.0/?method=track.search&track=${encodeURIComponent(query)}&api_key=YOUR_LASTFM_KEY&format=json&limit=1`
  }
};

// 🎨 Función para buscar música con múltiples APIs
async function searchMusic(query) {
  console.log(`🔍 Buscando: "${query}" en múltiples plataformas...`);
  
  try {
    // 🎵 Intentar con Deezer primero
    const deezerResponse = await axios.get(MUSIC_APIS.deezer.getUrl(query));
    if (deezerResponse.data.data && deezerResponse.data.data.length > 0) {
      const track = deezerResponse.data.data[0];
      return {
        title: track.title,
        artist: track.artist.name,
        album: track.album.title,
        duration: track.duration,
        thumbnail: track.album.cover_medium,
        preview: track.preview,
        source: "🎵 Deezer"
      };
    }
    
    // 🍎 Si Deezer falla, intentar con iTunes
    const itunesResponse = await axios.get(MUSIC_APIS.itunes.getUrl(query));
    if (itunesResponse.data.results && itunesResponse.data.results.length > 0) {
      const track = itunesResponse.data.results[0];
      return {
        title: track.trackName,
        artist: track.artistName,
        album: track.collectionName,
        duration: Math.floor(track.trackTimeMillis / 1000),
        thumbnail: track.artworkUrl100,
        preview: track.previewUrl,
        source: "🍎 iTunes"
      };
    }
    
    return null;
  } catch (error) {
    console.error("❌ Error en búsqueda musical:", error.message);
    return null;
  }
}

module.exports = {
  name: "play-audio",
  description: "🎵 ¡Descarga y reproduce tu música favorita! ✨",
  commands: ["play-audio", "play", "pa", "música", "canción"],
  usage: "🎵 !play-audio [nombre de la canción] - Ejemplo: !play-audio Bad Bunny",
  
  /**
   * 🎶 MANEJADOR PRINCIPAL DEL REPRODUCTOR MUSICAL 🎶
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({
    sendAudioFromURL,
    sendImageFromURL,
    fullArgs,
    sendWaitReact,
    sendSuccessReact,
    sendErrorReply,
  }) => {
    
    // 🚫 Validación de parámetros
    if (!fullArgs.length) {
      throw new InvalidParameterError(
        "🎵 ¡Oops! 🎵\n\n" +
        "📝 *Necesitas decirme qué canción quieres buscar*\n\n" +
        "💡 *Ejemplos:*\n" +
        "• `!play Bad Bunny - Tití Me Preguntó`\n" +
        "• `!play The Weeknd Blinding Lights`\n" +
        "• `!play Shakira Bzrp`\n\n" +
        "🎶 *¡Escribe el nombre de tu canción favorita!* ✨"
      );
    }

    // 🚫 Validación de enlaces
    if (fullArgs.includes("http://") || fullArgs.includes("https://")) {
      throw new InvalidParameterError(
        "🚫 *¡Enlaces no permitidos!* 🚫\n\n" +
        "📝 *Solo escribe el nombre de la canción*\n" +
        "🎵 *Ejemplo:* `!play Dua Lipa Levitating`\n\n" +
        "💡 *Tip:* Para descargar desde YouTube usa `!yt-mp3 [enlace]`"
      );
    }

    // ⏳ Iniciando búsqueda
    await sendWaitReact();
    
    const searchQuery = fullArgs;
    console.log(`🎵 Iniciando búsqueda musical para: "${searchQuery}"`);

    try {
      // 🔍 Buscar en múltiples APIs
      const musicData = await searchMusic(searchQuery);

      if (!musicData) {
        await sendErrorReply(
          "😔 *¡No se encontraron resultados!* 😔\n\n" +
          "🔍 *Intenta con:*\n" +
          "• Nombre del artista + canción\n" +
          "• Solo el título de la canción\n" +
          "• Verificar la ortografía\n\n" +
          "🎵 *¡Prueba con otra búsqueda!* ✨"
        );
        return;
      }

      // ✅ Éxito en la búsqueda
      await sendSuccessReact();

      // 🖼️ Enviar información de la canción con imagen
      const songInfo = `
🎵 ═══════════════════════════════════════
║            🎶 *CANCIÓN ENCONTRADA* 🎶            ║
╚═══════════════════════════════════════

🎤 *Artista:* ${musicData.artist}
🎵 *Título:* ${musicData.title}
💿 *Álbum:* ${musicData.album}
⏱️ *Duración:* ${Math.floor(musicData.duration / 60)}:${(musicData.duration % 60).toString().padStart(2, '0')} min
🌐 *Fuente:* ${musicData.source}

🎧 *¡Preparando tu audio...!* ✨
      `.trim();

      await sendImageFromURL(musicData.thumbnail, songInfo);

      // 🎵 Enviar audio si está disponible
      if (musicData.preview) {
        await sendAudioFromURL(musicData.preview);
        console.log(`✅ Audio enviado exitosamente desde ${musicData.source}`);
      } else {
        await sendErrorReply(
          "🎵 *Información encontrada* ✅\n\n" +
          "⚠️ *Audio preview no disponible*\n" +
          "🔍 *Intenta con otra canción o fuente*"
        );
      }

    } catch (error) {
      console.error("❌ Error en el reproductor musical:", error);
      await sendErrorReply(
        "🚫 *¡Oops! Algo salió mal* 🚫\n\n" +
        "⚠️ *Error del sistema musical*\n" +
        "🔄 *Intenta nuevamente en unos momentos*\n\n" +
        "🎵 *¡Gracias por tu paciencia!* ✨"
      );
    }
  },
};

// 🎵 ═══════════════════════════════════════════════════════════════
// ║                    ✨ FIN DEL MÓDULO ✨                     ║
// ╚═══════════════════════════════════════════════════════════════╝
