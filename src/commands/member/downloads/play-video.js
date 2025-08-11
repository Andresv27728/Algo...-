const { PREFIX } = require(`${BASE_DIR}/config`);
import fetch from 'node-fetch';
import yts from 'yt-search';

module.exports = {
  name: "play-video",
  description: "Descargo videos con la API que usas",
  commands: ["play-video", "pv"],
  usage: `${PREFIX}play-video MC Hariel`,
  /**
   * @param {CommandHandleProps} props
   * @returns {Promise<void>}
   */
  handle: async ({
    conn,
    m,
    fullArgs,
    sendWaitReact,
    sendSuccessReact,
    sendErrorReply,
  }) => {
    if (!fullArgs.length) {
      await sendErrorReply("¡Necesitas decirme qué quieres buscar!");
      return;
    }

    if (fullArgs.some(arg => arg.includes("http://") || arg.includes("https://"))) {
      await sendErrorReply(
        `¡No puedes usar enlaces para descargar videos! Usa ${PREFIX}yt-mp4 enlace`
      );
      return;
    }

    await sendWaitReact();

    try {
      // Buscamos el video con yt-search
      const search = await yts(fullArgs.join(" "));
      if (!search.videos || search.videos.length === 0) {
        await sendErrorReply("⚠️ No se encontraron resultados.");
        return;
      }
      const video = search.videos[0];

      // Limite de duración 63 min (3780 seg)
      if (video.seconds > 3780) {
        await sendErrorReply("⛔ El video supera el límite de duración permitido (63 minutos).");
        return;
      }

      const url = video.url;

      // Construimos la url para la API de video
      const apiUrl = `https://myapiadonix.vercel.app/api/ytmp4?url=${encodeURIComponent(url)}`;

      const res = await fetch(apiUrl);
      if (!res.ok) throw new Error("Error al conectar con la API.");
      const json = await res.json();
      if (!json.success) throw new Error("No se pudo obtener información del video.");

      const { title, thumbnail, quality, download } = json.data;

      await sendSuccessReact();

      // Mandamos info del video como imagen con texto
      await conn.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: `*Título*: ${title}
*Duración*: ${video.timestamp}
*Calidad*: ${quality}
*Canal*: ${video.author.name}`,
      }, { quoted: m });

      // Mandamos el video
      await conn.sendMessage(m.chat, {
        video: { url: download },
        mimetype: "video/mp4",
        fileName: `${title}.mp4`,
      }, { quoted: m });
    } catch (error) {
      console.log(error);
      await sendErrorReply("❌ Error: " + error.message);
    }
  },
};