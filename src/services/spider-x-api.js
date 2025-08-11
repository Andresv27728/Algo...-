
/**
 * Servicio para comunicación con Delirius API
 * https://delirius-apiofc.vercel.app/home
 */
const axios = require("axios");

const DELIRIUS_API_BASE_URL = "https://delirius-apiofc.vercel.app";

/**
 * Descargar audio/video de YouTube
 */
exports.youtubeDl = async (url, format = "mp4") => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de YouTube!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/download/ytmp${format === "mp3" ? "3" : "4"}?url=${encodeURIComponent(url)}`
  );

  return data;
};

/**
 * Descargar video de TikTok
 */
exports.tiktokDl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de TikTok!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/download/tiktok?url=${encodeURIComponent(url)}`
  );

  return data;
};

/**
 * Descargar video de Instagram
 */
exports.instagramDl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de Instagram!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/download/instagram?url=${encodeURIComponent(url)}`
  );

  return data;
};

/**
 * Buscar en YouTube
 */
exports.youtubeSearch = async (query) => {
  if (!query) {
    throw new Error("¡Necesitas proporcionar un término de búsqueda!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/search/ytsearch?q=${encodeURIComponent(query)}`
  );

  return data;
};

/**
 * ChatGPT
 */
exports.chatgpt = async (text) => {
  if (!text) {
    throw new Error("¡Necesitas proporcionar un texto!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/ai/chatgpt?q=${encodeURIComponent(text)}`
  );

  return data;
};

/**
 * Generador de imágenes AI
 */
exports.textToImage = async (prompt) => {
  if (!prompt) {
    throw new Error("¡Necesitas proporcionar una descripción!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/ai/text2img?q=${encodeURIComponent(prompt)}`
  );

  return data;
};

/**
 * Upscale de imágenes
 */
exports.upscaleImage = async (imageUrl) => {
  if (!imageUrl) {
    throw new Error("¡Necesitas proporcionar una URL de imagen!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/ai/upscale?url=${encodeURIComponent(imageUrl)}`
  );

  return data;
};

/**
 * Eliminar fondo de imagen
 */
exports.removeBg = async (imageUrl) => {
  if (!imageUrl) {
    throw new Error("¡Necesitas proporcionar una URL de imagen!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/ai/removebg?url=${encodeURIComponent(imageUrl)}`
  );

  return data;
};

/**
 * Traducir texto
 */
exports.translate = async (text, targetLang = "es") => {
  if (!text) {
    throw new Error("¡Necesitas proporcionar un texto para traducir!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/tools/translate?q=${encodeURIComponent(text)}&lang=${targetLang}`
  );

  return data;
};

/**
 * Obtener información de una página web
 */
exports.webInfo = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL!");
  }

  const { data } = await axios.get(
    `${DELIRIUS_API_BASE_URL}/tools/webinfo?url=${encodeURIComponent(url)}`
  );

  return data;
};
