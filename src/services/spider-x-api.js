
/**
 * Servicio multi-API con diferentes proveedores públicos
 * Cada servicio tiene su propia API de respaldo
 */
const axios = require("axios");

// Configuración de timeouts y headers comunes
const DEFAULT_TIMEOUT = 30000;
const DEFAULT_HEADERS = {
  'User-Agent': 'TakeshiBot/6.0.0'
};

/**
 * Función auxiliar para peticiones HTTP con manejo de errores
 */
const makeRequest = async (url, options = {}) => {
  try {
    const response = await axios({
      method: 'GET',
      url,
      timeout: DEFAULT_TIMEOUT,
      headers: DEFAULT_HEADERS,
      ...options
    });
    return response.data;
  } catch (error) {
    console.error(`Error en request a ${url}:`, error.message);
    throw new Error(`Error en la API: ${error.response?.data?.message || error.message}`);
  }
};

// ===== SERVICIOS DE DESCARGA =====

/**
 * API 1: YouTube Downloader (y2mate API pública)
 */
const YouTubeService = {
  primaryAPI: "https://y2mate.nu/api/json/convert",
  fallbackAPI: "https://api.cobalt.tools/api/json",
  
  async download(url, format = "mp4") {
    // Intentar con API principal
    try {
      const response = await makeRequest(this.primaryAPI, {
        method: 'POST',
        data: { 
          url: url,
          format: format === "mp3" ? "mp3" : "mp4",
          quality: "720"
        }
      });
      return response;
    } catch (error) {
      // Fallback a segunda API
      console.log("YouTube API principal falló, usando fallback...");
      const response = await makeRequest(this.fallbackAPI, {
        method: 'POST',
        data: { url: url }
      });
      return response;
    }
  }
};

/**
 * API 2: TikTok Downloader (ssstik API)
 */
const TikTokService = {
  primaryAPI: "https://api.ssstik.io/tiktok",
  fallbackAPI: "https://tiktok-scraper7.p.rapidapi.com/tiktok",
  
  async download(url) {
    try {
      const response = await makeRequest(`${this.primaryAPI}?url=${encodeURIComponent(url)}`);
      return response;
    } catch (error) {
      console.log("TikTok API principal falló, usando fallback...");
      const response = await makeRequest(this.fallbackAPI, {
        headers: {
          ...DEFAULT_HEADERS,
          'X-RapidAPI-Key': 'demo-key' // En producción usar key real
        },
        params: { url }
      });
      return response;
    }
  }
};

/**
 * API 3: Instagram Downloader (insta-dl API)
 */
const InstagramService = {
  primaryAPI: "https://instagram-downloader-download-instagram-videos-stories.p.rapidapi.com",
  fallbackAPI: "https://api.instagram-scraper.com/v1.0/media",
  
  async download(url) {
    try {
      const response = await makeRequest(`${this.primaryAPI}/index`, {
        params: { url },
        headers: {
          ...DEFAULT_HEADERS,
          'X-RapidAPI-Key': 'demo-key'
        }
      });
      return response;
    } catch (error) {
      console.log("Instagram API principal falló, usando fallback...");
      const response = await makeRequest(`${this.fallbackAPI}?url=${encodeURIComponent(url)}`);
      return response;
    }
  }
};

// ===== SERVICIOS DE IA =====

/**
 * API 4: ChatGPT Free (multiple providers)
 */
const ChatGPTService = {
  primaryAPI: "https://api.pawan.krd/chat/completions",
  fallbackAPI: "https://api.chatanywhere.com.cn/v1/chat/completions",
  backupAPI: "https://free.churchless.tech/v1/chat/completions",
  
  async chat(message) {
    const apis = [this.primaryAPI, this.fallbackAPI, this.backupAPI];
    
    for (const api of apis) {
      try {
        const response = await makeRequest(api, {
          method: 'POST',
          data: {
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: message }],
            temperature: 0.7
          },
          headers: {
            ...DEFAULT_HEADERS,
            'Content-Type': 'application/json',
            'Authorization': 'Bearer free-key'
          }
        });
        
        return {
          response: response.choices?.[0]?.message?.content || response.result || "Sin respuesta"
        };
      } catch (error) {
        console.log(`ChatGPT API ${api} falló, probando siguiente...`);
        continue;
      }
    }
    
    throw new Error("Todas las APIs de ChatGPT fallaron");
  }
};

/**
 * API 5: Text to Image (multiple free providers)
 */
const TextToImageService = {
  primaryAPI: "https://api.limewire.com/api/image/generation",
  fallbackAPI: "https://pollinations.ai/p",
  backupAPI: "https://image.pollinations.ai/prompt",
  
  async generate(prompt) {
    // Intentar con Pollinations (más confiable y gratuito)
    try {
      const encodedPrompt = encodeURIComponent(prompt);
      const imageUrl = `${this.fallbackAPI}/${encodedPrompt}?width=512&height=512&nologo=true`;
      
      // Verificar que la imagen se genere correctamente
      await makeRequest(imageUrl, { method: 'HEAD' });
      
      return {
        image: imageUrl,
        prompt: prompt
      };
    } catch (error) {
      // Fallback a backup API
      try {
        const encodedPrompt = encodeURIComponent(prompt);
        const imageUrl = `${this.backupAPI}/${encodedPrompt}?width=512&height=512`;
        
        await makeRequest(imageUrl, { method: 'HEAD' });
        
        return {
          image: imageUrl,
          prompt: prompt
        };
      } catch (backupError) {
        throw new Error("Todas las APIs de generación de imágenes fallaron");
      }
    }
  }
};

// ===== SERVICIOS ADICIONALES =====

/**
 * Servicio de traducción (Google Translate API gratuita)
 */
const TranslateService = {
  primaryAPI: "https://translate.googleapis.com/translate_a/single",
  fallbackAPI: "https://api.mymemory.translated.net/get",
  
  async translate(text, targetLang = "es") {
    try {
      const params = new URLSearchParams({
        client: 'gtx',
        sl: 'auto',
        tl: targetLang,
        dt: 't',
        q: text
      });
      
      const response = await makeRequest(`${this.primaryAPI}?${params}`);
      const translatedText = response[0]?.[0]?.[0] || text;
      
      return {
        translatedText,
        sourceLanguage: response[2] || 'auto',
        targetLanguage: targetLang
      };
    } catch (error) {
      console.log("Google Translate falló, usando fallback...");
      const response = await makeRequest(`${this.fallbackAPI}?q=${encodeURIComponent(text)}&langpair=auto|${targetLang}`);
      
      return {
        translatedText: response.responseData?.translatedText || text,
        sourceLanguage: 'auto',
        targetLanguage: targetLang
      };
    }
  }
};

/**
 * Servicio para remover fondos (remove.bg alternatives)
 */
const RemoveBgService = {
  primaryAPI: "https://api.remove.bg/v1.0/removebg",
  fallbackAPI: "https://background-removal.p.rapidapi.com/remove",
  
  async removeBg(imageUrl) {
    // Nota: Estas APIs requieren keys, implementar lógica básica
    return {
      message: "Servicio de remoción de fondo requiere configuración de API key",
      originalImage: imageUrl,
      processedImage: null
    };
  }
};

// ===== EXPORTACIONES PÚBLICAS =====

// YouTube
exports.youtubeDl = async (url, format = "mp4") => {
  if (!url) throw new Error("¡Necesitas proporcionar una URL de YouTube!");
  return await YouTubeService.download(url, format);
};

exports.youtubeSearch = async (query) => {
  if (!query) throw new Error("¡Necesitas proporcionar un término de búsqueda!");
  
  try {
    const response = await makeRequest(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&key=demo&maxResults=5`);
    return response;
  } catch (error) {
    // Fallback simple
    return {
      message: "Búsqueda de YouTube requiere API key de Google",
      query: query
    };
  }
};

// TikTok
exports.tiktokDl = async (url) => {
  if (!url) throw new Error("¡Necesitas proporcionar una URL de TikTok!");
  return await TikTokService.download(url);
};

// Instagram
exports.instagramDl = async (url) => {
  if (!url) throw new Error("¡Necesitas proporcionar una URL de Instagram!");
  return await InstagramService.download(url);
};

// ChatGPT
exports.chatgpt = async (text) => {
  if (!text) throw new Error("¡Necesitas proporcionar un texto!");
  return await ChatGPTService.chat(text);
};

// Text to Image
exports.textToImage = async (prompt) => {
  if (!prompt) throw new Error("¡Necesitas proporcionar una descripción!");
  return await TextToImageService.generate(prompt);
};

exports.textToImageV2 = exports.textToImage; // Alias

// Translate
exports.translate = async (text, targetLang = "es") => {
  if (!text) throw new Error("¡Necesitas proporcionar un texto para traducir!");
  return await TranslateService.translate(text, targetLang);
};

// Remove Background
exports.removeBg = async (imageUrl) => {
  if (!imageUrl) throw new Error("¡Necesitas proporcionar una URL de imagen!");
  return await RemoveBgService.removeBg(imageUrl);
};

// Servicios adicionales básicos
exports.attp = async (text) => {
  if (!text) throw new Error("¡Necesitas proporcionar un texto!");
  const encodedText = encodeURIComponent(text);
  return {
    sticker: `https://api.erdwpe.com/api/maker/attp?text=${encodedText}&apikey=erdwpe`
  };
};

exports.ttp = async (text) => {
  if (!text) throw new Error("¡Necesitas proporcionar un texto!");
  const encodedText = encodeURIComponent(text);
  return {
    sticker: `https://api.erdwpe.com/api/maker/ttp?text=${encodedText}&apikey=erdwpe`
  };
};

exports.weather = async (city) => {
  if (!city) throw new Error("¡Necesitas proporcionar el nombre de una ciudad!");
  
  try {
    // OpenWeatherMap API gratuita (requiere key en producción)
    const response = await makeRequest(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=demo&units=metric&lang=es`);
    return response;
  } catch (error) {
    return {
      message: "Servicio de clima requiere API key de OpenWeatherMap",
      city: city
    };
  }
};

exports.shortUrl = async (url) => {
  if (!url) throw new Error("¡Necesitas proporcionar una URL!");
  
  try {
    // TinyURL API gratuita
    const response = await makeRequest(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    return {
      originalUrl: url,
      shortUrl: response
    };
  } catch (error) {
    return {
      originalUrl: url,
      shortUrl: url,
      message: "Error al acortar URL"
    };
  }
};

// Función de prueba para verificar todas las APIs
exports.testAllAPIs = async () => {
  const results = {};
  
  console.log("🧪 Iniciando pruebas de APIs...");
  
  // Test YouTube
  try {
    console.log("Testing YouTube API...");
    await YouTubeService.download("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    results.youtube = "✅ OK";
  } catch (error) {
    results.youtube = `❌ Error: ${error.message}`;
  }
  
  // Test TikTok
  try {
    console.log("Testing TikTok API...");
    await TikTokService.download("https://www.tiktok.com/@test/video/123");
    results.tiktok = "✅ OK";
  } catch (error) {
    results.tiktok = `❌ Error: ${error.message}`;
  }
  
  // Test ChatGPT
  try {
    console.log("Testing ChatGPT API...");
    await ChatGPTService.chat("Hola");
    results.chatgpt = "✅ OK";
  } catch (error) {
    results.chatgpt = `❌ Error: ${error.message}`;
  }
  
  // Test Text to Image
  try {
    console.log("Testing Text to Image API...");
    await TextToImageService.generate("cat");
    results.textToImage = "✅ OK";
  } catch (error) {
    results.textToImage = `❌ Error: ${error.message}`;
  }
  
  // Test Translate
  try {
    console.log("Testing Translate API...");
    await TranslateService.translate("Hello", "es");
    results.translate = "✅ OK";
  } catch (error) {
    results.translate = `❌ Error: ${error.message}`;
  }
  
  console.log("🏁 Pruebas completadas");
  return results;
};
