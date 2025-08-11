
/**
 * Servicio para comunicación con Delirius API
 * https://delirius-apiofc.vercel.app/home
 */
const axios = require("axios");
const { DELIRIUS_API_BASE_URL } = require("../config");

// URL base configurable desde config.js
const API_BASE_URL = DELIRIUS_API_BASE_URL || "https://delirius-apiofc.vercel.app";

/**
 * Realizar petición GET a la API
 */
const apiRequest = async (endpoint, params = {}) => {
  try {
    const queryParams = new URLSearchParams(params).toString();
    const url = `${API_BASE_URL}${endpoint}${queryParams ? `?${queryParams}` : ''}`;
    
    const { data } = await axios.get(url, {
      timeout: 30000, // 30 segundos timeout
      headers: {
        'User-Agent': 'TakeshiBot/6.0.0'
      }
    });

    return data;
  } catch (error) {
    console.error(`Error en API request a ${endpoint}:`, error.message);
    throw new Error(`Error en la API: ${error.response?.data?.message || error.message}`);
  }
};

/**
 * Descargar audio/video de YouTube
 */
exports.youtubeDl = async (url, format = "mp4") => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de YouTube!");
  }

  const endpoint = `/download/ytmp${format === "mp3" ? "3" : "4"}`;
  return await apiRequest(endpoint, { url });
};

/**
 * Descargar video de TikTok
 */
exports.tiktokDl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de TikTok!");
  }

  return await apiRequest("/download/tiktok", { url });
};

/**
 * Descargar video de Instagram
 */
exports.instagramDl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de Instagram!");
  }

  return await apiRequest("/download/instagram", { url });
};

/**
 * Descargar video de Facebook
 */
exports.facebookDl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de Facebook!");
  }

  return await apiRequest("/download/facebook", { url });
};

/**
 * Descargar video de Twitter/X
 */
exports.twitterDl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL de Twitter!");
  }

  return await apiRequest("/download/twitter", { url });
};

/**
 * Buscar en YouTube
 */
exports.youtubeSearch = async (query) => {
  if (!query) {
    throw new Error("¡Necesitas proporcionar un término de búsqueda!");
  }

  return await apiRequest("/search/ytsearch", { q: query });
};

/**
 * ChatGPT
 */
exports.chatgpt = async (text) => {
  if (!text) {
    throw new Error("¡Necesitas proporcionar un texto!");
  }

  return await apiRequest("/ai/chatgpt", { q: text });
};

/**
 * Generador de imágenes AI
 */
exports.textToImage = async (prompt) => {
  if (!prompt) {
    throw new Error("¡Necesitas proporcionar una descripción!");
  }

  return await apiRequest("/ai/text2img", { q: prompt });
};

/**
 * Generador de imágenes AI v2
 */
exports.textToImageV2 = async (prompt) => {
  if (!prompt) {
    throw new Error("¡Necesitas proporcionar una descripción!");
  }

  return await apiRequest("/ai/txt2img", { q: prompt });
};

/**
 * Upscale de imágenes
 */
exports.upscaleImage = async (imageUrl) => {
  if (!imageUrl) {
    throw new Error("¡Necesitas proporcionar una URL de imagen!");
  }

  return await apiRequest("/ai/upscale", { url: imageUrl });
};

/**
 * Eliminar fondo de imagen
 */
exports.removeBg = async (imageUrl) => {
  if (!imageUrl) {
    throw new Error("¡Necesitas proporcionar una URL de imagen!");
  }

  return await apiRequest("/ai/removebg", { url: imageUrl });
};

/**
 * Traducir texto
 */
exports.translate = async (text, targetLang = "es") => {
  if (!text) {
    throw new Error("¡Necesitas proporcionar un texto para traducir!");
  }

  return await apiRequest("/tools/translate", { q: text, lang: targetLang });
};

/**
 * Obtener información de una página web
 */
exports.webInfo = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL!");
  }

  return await apiRequest("/tools/webinfo", { url });
};

/**
 * Crear sticker animado (ATTP)
 */
exports.attp = async (text) => {
  if (!text) {
    throw new Error("¡Necesitas proporcionar un texto!");
  }

  return await apiRequest("/sticker/attp", { text });
};

/**
 * Crear sticker de texto (TTP)
 */
exports.ttp = async (text) => {
  if (!text) {
    throw new Error("¡Necesitas proporcionar un texto!");
  }

  return await apiRequest("/sticker/ttp", { text });
};

/**
 * Obtener información del clima
 */
exports.weather = async (city) => {
  if (!city) {
    throw new Error("¡Necesitas proporcionar el nombre de una ciudad!");
  }

  return await apiRequest("/tools/clima", { q: city });
};

/**
 * Acortar URL
 */
exports.shortUrl = async (url) => {
  if (!url) {
    throw new Error("¡Necesitas proporcionar una URL!");
  }

  return await apiRequest("/tools/short", { url });
};
