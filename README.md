# 🤖 Takeshi Bot

<div align="center">
    <img src="./assets/images/takeshi-bot.png" width="500">
</div>

<br />

<div align="center">
    <a href="https://github.com/guiireal/takeshi-bot">
        <img alt="Version" src="https://img.shields.io/badge/Vers%C3%A3o-5.2.1-blue">
    </a>
</div>

<br />

## Bot de WhatsApp multifunción, desarrollado en el video:

[CREANDO UN BOT DE WHATSAPP DESDE CERO (GUÍA DEFINITIVA) - BASE COMPLETA + 6 COMANDOS - JAVASCRIPT](https://youtu.be/6zr2NYIYIyc)

![Logger](./assets/images/logger.png)

## 🌐 Accede a Takeshi Bot en otros idiomas

<ul style="list-style: none; padding-left: 0;">
  <li>
    <img src="https://flagcdn.com/w40/br.png" width="24" alt="Português (BR)">
    <strong>Português (BR)</strong> — <a href="https://github.com/guiireal/takeshi-bot">clique aqui</a>
  </li>
  <li>
    <img src="https://flagcdn.com/w40/us.png" width="24" alt="English">
    <strong>English</strong> — <a href="https://github.com/guiireal/takeshi-bot-english">click here</a>
  </li>
  <li>
    <img src="https://flagcdn.com/w40/id.png" width="24" alt="Bahasa Indonesia">
    <strong>Bahasa Indonesia</strong> — <a href="https://github.com/guiireal/takeshi-bot-bahasa-indonesia">klik disini</a>
  </li>
</ul>

## 💻 Tecnologías involucradas

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Baileys 6.7.18](https://github.com/WhiskeySockets/Baileys)
- [FFMPEG](https://ffmpeg.org/)
- [Node.js >= 22.14.0](https://nodejs.org/en)
- [Spider X API](https://api.spiderx.com.br)

## ⚠ Atención

No brindamos soporte gratuito si has adquirido esta base de terceros y has pagado por ella. Solicita que **la persona que te vendió el bot te proporcione soporte**. No tenemos ningún vínculo con terceros y no nos hacemos responsables de ello, ni brindamos soporte en estas condiciones.

Si tu bot es el oficial de Bronxys, interactúa con nosotros y recibe soporte a través del grupo:
[https://chat.whatsapp.com/J5OewHvweK1Kf7RGXAwIYM](https://chat.whatsapp.com/J5OewHvweK1Kf7RGXAwIYM)

## Sobre este proyecto

Este proyecto no tiene ningún vínculo oficial con WhatsApp. Fue desarrollado de forma independiente para interacciones automatizadas a través de la plataforma.

No nos hacemos responsables de cualquier uso indebido de este bot. Es responsabilidad exclusiva del usuario garantizar que su utilización cumpla con los términos de uso de WhatsApp y la legislación vigente.

## Instalación en Termux

1 - Abre Termux y ejecuta los siguientes comandos.
_¿No tienes Termux? [Haz clic aquí para descargar la última versión](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk) o [haz clic aquí para descargar la versión de Play Store](https://play.google.com/store/apps/details?id=com.termux) si la versión de MediaFire anterior no funciona._

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y
````

2 - Habilita el acceso a la carpeta storage en Termux.

```sh
termux-setup-storage
```

3 - Entra en la carpeta sdcard.

```sh
cd /sdcard
```

4 - Clona el repositorio.

```sh
git clone https://github.com/guiireal/takeshi-bot-espanol.git
```

5 - Entra en la carpeta clonada.

```sh
cd takeshi-bot
```

6 - Habilita permisos de lectura y escritura (haz este paso solo 1 vez).

```sh
chmod -R 755 ./*
```

7 - Ejecuta el bot.

```sh
npm start
```

8 - Inserta el número de teléfono y presiona `enter`.

9 - Informa el código que aparece en Termux en tu WhatsApp, [mira aquí si no encuentras esta opción](https://youtu.be/6zr2NYIYIyc?t=5395).

10 - Espera 10 segundos, luego escribe `CTRL + C` para detener el bot.

11 - Configura el archivo `config.js` que se encuentra dentro de la carpeta `src`.

```js
// Prefijo de los comandos
exports.PREFIX = "/";

// Emoji del bot (cambia si lo prefieres).
exports.BOT_EMOJI = "🤖";

// Nombre del bot (cambia si lo prefieres).
exports.BOT_NAME = "Takeshi Bot";

// Número del bot. Coloca el número del bot
// (solo números, exactamente como está en WhatsApp).
exports.BOT_NUMBER = "558112345678";

// Número del dueño del bot. Coloca el número del dueño del bot
// (solo números, exactamente como está en WhatsApp).
exports.OWNER_NUMBER = "5521950502020";

// LID del dueño del bot.
// Para obtener el LID del dueño del bot, usa el comando <prefijo>get-lid @mencionar o +teléfono del dueño.
exports.OWNER_LID = "219999999999999@lid";
```

12 - Inicia el bot nuevamente.

```sh
npm start
```

## Instalación en VPS (Debian/Ubuntu)

1 - Abre una nueva terminal y ejecuta los siguientes comandos.

```sh
sudo apt update && sudo apt upgrade && sudo apt-get update && sudo apt-get upgrade && sudo apt install ffmpeg
```

2 - Instala `curl` si no lo tienes.

```sh
sudo apt install curl
```

3 - Instala `git` si no lo tienes.

```sh
sudo apt install git
```

4 - Instala NVM.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

5 - Actualiza el source de tu entorno.

```sh
source ~/.bashrc
```

6 - Instala la versión 22 más reciente de Node.js.

```sh
nvm install 22
```

7 - Verifica si la versión fue instalada y está activa.

```sh
node -v # Debe mostrar la versión 22
```

8 - Verifica si npm fue instalado junto.

```sh
npm -v # Deberá mostrar la versión de npm
```

9 - Instala PM2 (recomendado).

```sh
npm install pm2 -g
```

10 - Clona el repositorio del bot donde desees.

```sh
git clone https://github.com/guiireal/takeshi-bot-espanol.git
```

11 - Entra en la carpeta clonada.

```sh
cd takeshi-bot
```

12 - Escribe el siguiente comando.

```sh
npm start
```

13 - El bot te pedirá que ingreses tu número de teléfono.
Ingresa **exactamente** como está en WhatsApp y solo números.

![tutorial-vps-1](./assets/images/tutorial-vps-1.png)

14 - Conecta el bot a PM2.

```sh
pm2 start npm --name "takeshi-bot" -- start
```

15 - El bot mostrará un **código de emparejamiento** que debe colocarse en `dispositivos vinculados` en tu WhatsApp.

![tutorial-vps-2](./assets/images/tutorial-vps-2.png)

16 - Ve a `dispositivos vinculados` en tu WhatsApp.

![tutorial-vps-3](./assets/images/tutorial-vps-3.png)

17 - Haz clic en `Vincular un dispositivo`.

![tutorial-vps-4](./assets/images/tutorial-vps-4.png)

18 - En la esquina inferior, haz clic en `Vincular con número de teléfono`.

![tutorial-vps-5](./assets/images/tutorial-vps-5.png)

19 - Coloca el **código de emparejamiento** que recibiste en la terminal, que se generó en el paso `15`.

![tutorial-vps-6](./assets/images/tutorial-vps-6.png)

20 - Después de esto, en la terminal que quedó detenida, debería mostrar que **se conectó con éxito**.

![tutorial-vps-7](./assets/images/tutorial-vps-7.png)

21 - Escribe `CTRL + C` para detener el bot.

22 - Ahora, inícialo con `PM2`, ejecutando el siguiente código.

```sh
pm2 start npm --name "takeshi-bot" -- start
```

![tutorial-vps-8](./assets/images/tutorial-vps-8.png)

23 - Configura el archivo `config.js` que se encuentra dentro de la carpeta `src`.

```js
// Prefijo de los comandos
exports.PREFIX = "/";

// Emoji del bot (cambia si lo prefieres).
exports.BOT_EMOJI = "🤖";

// Nombre del bot (cambia si lo prefieres).
exports.BOT_NAME = "Takeshi Bot";

// Número del bot. Coloca el número del bot (solo números).
exports.BOT_NUMBER = "5511920202020";

// Número del dueño del bot. Coloca el número del dueño del bot (solo números).
exports.OWNER_NUMBER = "5511999999999";
```

24 - Finalmente, ¡prueba el bot!

![tutorial-vps-9](./assets/images/tutorial-vps-9.png)

## Algunos comandos requieren API

Edita el archivo `config.js` que se encuentra dentro de la carpeta `src` y pega tu clave API de la plataforma Spider X API, según el código a continuación.
Para obtener tu token, accede a: [https://api.spiderx.com.br](https://api.spiderx.com.br) ¡y crea tu cuenta gratuitamente!

```js
exports.SPIDER_API_TOKEN = "tu_token_aqui";
```

## Funcionalidades generales

| Función | Contexto | ¿Requiere Spider X API?
| ------------ | --- | ---
| Cambiar imagen del bot | Dueño | ❌
| Apagar el bot en el grupo | Dueño | ❌
| Ejecutar comandos de infraestructura | Dueño | ❌
| Encender el bot en el grupo | Dueño | ❌
| Obtener el ID del grupo | Dueño | ❌
| Abrir grupo | Admin | ❌
| Programar mensaje | Admin | ❌
| Anti-enlace | Admin | ❌
| Banear miembros | Admin | ❌
| Cerrar grupo | Admin | ❌
| Activar/desactivar auto-respuesta | Admin | ❌
| Activar/desactivar bienvenida | Admin | ❌
| Activar/desactivar salida de grupo | Admin | ❌
| Limpiar chat | Admin | ❌
| Mencionar a todos | Admin | ❌
| Cambiar nombre del grupo | Admin | ❌
| Silenciar/desmutear | Admin | ❌
| Revelar | Admin | ❌
| Difuminar imagen | Miembro | ❌
| Lienzo cárcel | Miembro | ✅
| Lienzo invertir | Miembro | ✅
| Lienzo RIP | Miembro | ✅
| Comandos de diversión/juegos | Miembro |❌
| Espejar imagen | Miembro | ❌
| Chat falso | Miembro | ❌
| Sticker de texto animado | Miembro | ✅
| Generación de imágenes con IA | Miembro | ✅
| Generar enlace | Miembro | ❌
| Google Gemini | Miembro | ✅
| Google Search | Miembro | ✅
| Imagen con contraste | Miembro | ❌
| Imagen IA PixArt | Miembro | ✅
| Imagen IA Stable Diffusion Turbo | Miembro | ✅
| Imagen pixelada | Miembro | ❌
| Imagen blanco/negro | Miembro | ❌
| Ping | Miembro | ❌
| Reproducir audio | Miembro | ✅
| Reproducir video | Miembro | ✅
| Renombrar sticker | Miembro | ❌
| Sticker | Miembro | ❌
| Sticker IA  | Miembro | ✅
| Sticker a imagen | Miembro | ❌
| Descarga de video TikTok | Miembro | ✅
| YT MP3 | Miembro | ✅
| YT MP4 | Miembro | ✅
| YT Search | Miembro | ✅

## Funcionalidades de envío (Ejemplos)

### 🎵 Ejemplos de audio

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-audio-from-file` | Enviar audio desde archivo | Demuestra el envío de archivos de audio desde el almacenamiento local | Opción de mensaje de voz, respuesta citada |
| `/send-audio-from-url` | Enviar audio desde URL | Demuestra el envío de archivos de audio desde URLs externas | Opción de mensaje de voz, respuesta citada |
| `/send-audio-from-buffer` | Enviar audio desde buffer | Demuestra el envío de archivos de audio desde buffers de memoria | Opción de mensaje de voz, respuesta citada, buffer de archivo o URL |

### 🖼️ Ejemplos de imagen

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-image-from-file` | Enviar imagen desde archivo | Demuestra el envío de archivos de imagen desde el almacenamiento local | Soporte para subtítulo personalizado, menciones, respuesta citada |
| `/send-image-from-url` | Enviar imagen desde URL | Demuestra el envío de archivos de imagen desde URLs externas | Envío directo desde URL, soporte para menciones, respuesta citada |
| `/send-image-from-buffer` | Enviar imagen desde buffer | Demuestra el envío de archivos de imagen desde buffers de memoria | Buffer de archivo o URL, subtítulo opcional, menciones, respuesta citada |

### 🎬 Ejemplos de video

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-video-from-file` | Enviar video desde archivo | Demuestra el envío de archivos de video desde el almacenamiento local | Soporte para subtítulo personalizado, menciones, respuesta citada |
| `/send-video-from-url` | Enviar video desde URL | Demuestra el envío de archivos de video desde URLs externas | Envío directo desde URL, soporte para menciones, respuesta citada |
| `/send-video-from-buffer` | Enviar video desde buffer | Demuestra el envío de archivos de video desde buffers de memoria | Buffer de archivo o URL, subtítulo opcional, menciones, respuesta citada |

### 🎞️ Ejemplos de GIF

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-gif-from-file` | Enviar GIF desde archivo | Demuestra el envío de archivos GIF desde el almacenamiento local | Soporte para subtítulo, menciones, respuesta citada |
| `/send-gif-from-url` | Enviar GIF desde URL | Demuestra el envío de archivos GIF desde URLs externas | Soporte para subtítulo, menciones, respuesta citada |
| `/send-gif-from-buffer` | Enviar GIF desde buffer | Demuestra el envío de archivos GIF desde buffers de memoria | Buffer de archivo o URL, subtítulo, menciones, respuesta citada |

### 🎭 Ejemplos de sticker

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-sticker-from-file` | Enviar sticker desde archivo | Demuestra el envío de archivos de sticker desde el almacenamiento local | Formato WebP |
| `/send-sticker-from-url` | Enviar sticker desde URL | Demuestra el envío de archivos de sticker desde URLs externas | Formato WebP |
| `/send-sticker-from-buffer` | Enviar sticker desde buffer | Demuestra el envío de archivos de sticker desde buffers de memoria | Buffer de archivo o URL |

### 📊 Ejemplos de encuesta/votación

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-poll` | Enviar encuesta | Demuestra cómo crear y enviar encuestas/votaciones en grupos | Soporte para selección única o múltiple |

### 📄 Ejemplos de documento

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-document-from-file` | Enviar documento desde archivo | Demuestra el envío de archivos de documento desde el almacenamiento local | Especificación de tipo MIME, nombre de archivo personalizado |
| `/send-document-from-url` | Enviar documento desde URL | Demuestra el envío de archivos de documento desde URLs externas | Especificación de tipo MIME, nombre de archivo personalizado |
| `/send-document-from-buffer` | Enviar documento desde buffer | Demuestra el envío de archivos de documento desde buffers de memoria | Buffer de archivo o URL, tipo MIME, nombre de archivo personalizado |

### 💬 Ejemplos de mensaje

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/send-text` | Enviar texto | Demuestra el envío de mensajes de texto simples | Soporte para menciones |
| `/send-quoted` | Enviar respuesta | Demuestra el envío de mensajes de respuesta | Respuestas de éxito/error/advertencia |
| `/send-reaction` | Enviar reacciones | Demuestra el envío de emojis de reacción | Varias reacciones emoji, reacciones de éxito/error/advertencia |

### 📊 Ejemplos de metadatos

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/get-message-data` | Obtener metadatos del mensaje | Demuestra la extracción avanzada de metadatos de mensaje o mensaje citado | Análisis detallado, soporte para respuesta de mensajes, información técnica, menciones automáticas |
| `/get-group-data` | Obtener datos del grupo | Demuestra la extracción de información del grupo | Metadatos del grupo, lista de participantes, información de administrador |
| `/group-functions` | Funciones del grupo | Demuestra el uso de funciones de utilidad del grupo | Extracción de nombre, dueño, administradores, participantes del grupo |

### 🎯 Centro de ejemplos

| Comando | Función | Descripción | Características |
|---------|---------|-----------|-----------------|
| `/samples-of-messages` | Centro de ejemplos | Centro con lista de todos los ejemplos disponibles | Menú interactivo, acceso directo a todos los ejemplos |

## Auto-respuesta

Takeshi Bot tiene un auto-respondedor incorporado, edita el archivo en `./database/auto-responder.json`:

```json
[
    {
        "match": "Hola",
        "answer": "¿Hola, cómo estás?"
    },
    {
        "match": "Todo bien",
        "answer": "Estoy bien, gracias por preguntar"
    },
    {
        "match": "¿Cuál es tu nombre?",
        "answer": "Mi nombre es Takeshi Bot"
    }
]
```

## Implementación técnica de los ejemplos

### 📁 Ubicación de los comandos de ejemplo

Todos los comandos de ejemplo se encuentran en: `src/commands/member/samples/`

### 🛠️ Funciones disponibles

Todos los comandos de ejemplo utilizan funciones de `src/utils/loadCommonFunctions.js`:

#### Funciones de audio

  - `sendAudioFromFile(filePath, asVoice, quoted)`
  - `sendAudioFromURL(url, asVoice, quoted)`
  - `sendAudioFromBuffer(buffer, asVoice, quoted)`

#### Funciones de imagen

  - `sendImageFromFile(filePath, caption, mentions, quoted)`
  - `sendImageFromURL(url, caption, mentions, quoted)`
  - `sendImageFromBuffer(buffer, caption, mentions, quoted)`

#### Funciones de video

  - `sendVideoFromFile(filePath, caption, mentions, quoted)`
  - `sendVideoFromURL(url, caption, mentions, quoted)`
  - `sendVideoFromBuffer(buffer, caption, mentions, quoted)`

#### Funciones de GIF

  - `sendGifFromFile(file, caption, mentions, quoted)`
  - `sendGifFromURL(url, caption, mentions, quoted)`
  - `sendGifFromBuffer(buffer, caption, mentions, quoted)`

#### Funciones de sticker

  - `sendStickerFromFile(filePath, quoted)`
  - `sendStickerFromURL(url, quoted)`
  - `sendStickerFromBuffer(buffer, quoted)`

#### Funciones de documento

  - `sendDocumentFromFile(filePath, mimetype, fileName, quoted)`
  - `sendDocumentFromURL(url, mimetype, fileName, quoted)`
  - `sendDocumentFromBuffer(buffer, mimetype, fileName, quoted)`

#### Funciones de mensaje

  - `sendText(text, mentions)`
  - `sendReply(text, mentions)`
  - `sendReact(emoji)`
  - `sendSuccessReply(text, mentions)`, `sendErrorReply(text, mentions)`, `sendWarningReply(text, mentions)`, `sendWaitReply(text, mentions)`
  - `sendSuccessReact()`, `sendErrorReact()`, `sendWarningReact()`, `sendWaitReact()`

#### Funciones de utilidad de grupo

  - `getGroupMetadata()` - Obtener metadatos completos del grupo
  - `getGroupName()` - Obtener solo el nombre del grupo
  - `getGroupOwner()` - Obtener información del dueño del grupo
  - `getGroupParticipants()` - Obtener todos los participantes del grupo
  - `getGroupAdmins()` - Obtener administradores del grupo

### 🎯 Ejemplos de uso con menciones

#### Enviar imagen con menciones

```javascript
await sendImageFromFile("./assets/image.jpg", "¡Hola @5511999999999!", ["5511999999999@s.whatsapp.net"]);

await sendImageFromURL("https://exemplo.com/imagem.png", 
  "¡Hola @5511999999999 y @5511888888888!", 
  ["5511999999999@s.whatsapp.net", "5511888888888@s.whatsapp.net"]
);
```

#### Enviar video con menciones

```javascript
await sendVideoFromFile("./assets/video.mp4", "¡Mira este video @5511999999999!", ["5511999999999@s.whatsapp.net"]);

const buffer = fs.readFileSync("./video.mp4");
await sendVideoFromBuffer(
  buffer, 
  "¡Video especial para @5511999999999 y @5511888888888!", 
  ["5511999999999@s.whatsapp.net", "5511888888888@s.whatsapp.net"]
);
```

#### Enviar GIF con menciones

```javascript
await sendGifFromFile(
  "./assets/gif.mp4", 
  "¡Aquí tienes @5511999999999!", 
  ["5511999999999@s.whatsapp.net"]
);
```

### 🎯 Soporte TypeScript

Definiciones completas de TypeScript están disponibles en `src/@types/index.d.ts` con:

  - Firmas de función detalladas
  - Descripciones de parámetros
  - Ejemplos de uso
  - Especificaciones de tipo de retorno

### 📁 Archivos de ejemplo

Todos los archivos de ejemplo se almacenan en `assets/samples/`:

  - `sample-audio.mp3` - Archivo de audio para prueba
  - `sample-document.pdf` - Documento PDF para prueba
  - `sample-document.txt` - Documento de texto para prueba
  - `sample-image.jpg` - Archivo de imagen para prueba
  - `sample-sticker.webp` - Archivo de sticker para prueba
  - `sample-video.mp4` - Archivo de video para prueba

## Estructura de carpetas

- 📁 assets ➔ _archivos multimedia_
    - 📁 auth ➔ _archivos de conexión de bots_
    - 📁 images ➔ _archivos de imagen_
        - 📁 funny ➔ _GIFs divertidos de comandos_
    - 📁 samples ➔ _archivos de muestra para pruebas_
    - 📁 temp ➔ _archivos temporales_
- 📁 database ➔ _archivos de datos_
- 📁 node_modules ➔ _módulos de Node.js_
- 📁 src ➔ _código fuente del bot (normalmente aquí es donde más te meterás)_
    - 📁 @types ➔ _carpeta donde se encuentran las definiciones de tipo_
    - 📁 commands ➔ _carpeta donde se encuentran los comandos_
        - 📁 admin ➔ _carpeta donde se encuentran los comandos administrativos_
        - 📁 member ➔ _carpeta donde se encuentran los comandos generales (todos pueden usarlos)_
            - 📁 samples ➔ _carpeta con comandos de ejemplo_
        - 📁 owner ➔ _carpeta donde están los comandos del propietario (grupo y bot)_
        - 📝🤖-como-criar-comandos.js ➔ _archivo de ejemplo de cómo crear un comando_
    - 📁 errors ➔ _clases de error utilizadas en comandos_
    - 📁 middlewares ➔ _interceptores de solicitudes_
    - 📁 services ➔ _servicios varios_
    - 📁 utils ➔ _utilidades_
    - 📝 config.js ➔ _archivo de configuración del robot_
    - 📝 connection.js ➔ _script de conexión de bot con la biblioteca Baileys_
    - 📝 index.js ➔ _script de punto de entrada de bot_
    - 📝 loader.js ➔ _script de carga de función_
    - 📝 menu.js ➔ _menú de robots_
    - 📝 test.js ➔ _guión de prueba_
- ⚡-cases-estao-aqui ➔ _easter egg_ 
- 📝 index.js ➔ _script de punto de entrada de bot para alojamiento_
- 📝.gitignore ➔ _archivo para no cargar ciertas carpetas a GitHub_
- 📝LICENSE ➔ _archivo de licencia_
- 📝package-lock.json ➔ _archivo de caché de dependencias del bot_
- 📝package.json ➔ _archivo de definición de dependencias del bot_
- 📝README.md ➔ _esta documentación_

## Errores comunes

### Operación denegada al extraer la carpeta

El error a continuación ocurre cuando se descarga el archivo ZIP directamente en el celular en algunas versiones del apk ZArchiver y también en celulares sin root.

Para resolverlo, sigue el [tutorial de instalación vía git clone](https://www.google.com/search?q=%23instalacin-en-termux).

![erro comum 1](./assets/images/erro-comum-1.jpg)

### Eliminación de los archivos de sesión y reconexión

Si ocurre algún error en la conexión, puedes borrar los archivos dentro de la carpeta `/assets/auth/baileys`.

```sh
rm -rf ./asset/auth/baileys
```

Luego, elimina el dispositivo de WhatsApp yendo a la configuración de WhatsApp en "dispositivos vinculados".

Agrega un nuevo dispositivo nuevamente.

### Permission denied (permiso denegado) al acceder a `cd /sdcard`

<br/>

![erro comum 2](./assets/images/erro-comum-2.png)

Abre Termux, escribe `termux-setup-storage` y luego, acepta los permisos.

## ¡Suscríbete al canal!

<a href="https://www.youtube.com/@devgui_?sub_confirmation=1" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white" alt="YouTube"></a>

## Licencia

[GPL-3.0](https://github.com/guiireal/takeshi-bot-espanol/blob/main/LICENSE)

Este proyecto está licenciado bajo la Licencia Pública General GNU (GPL-3.0).
Esto significa que:

  - Puedes usar este código como quieras, ya sea para proyectos personales o comerciales.
  - Puedes modificar el código para adaptarlo a tus necesidades.
  - Puedes compartir o vender el código, incluso modificado, pero debes:
        - Mantener los créditos al autor original (Guilherme França - Dev Gui).
        - Hacer que el código modificado esté disponible bajo la misma licencia GPL-3.0.

Lo que no puedes hacer:

  - No puedes transformar este código en algo propietario (cerrado) e impedir que otras personas lo accedan o lo usen.

Esta licencia garantiza que todos tengan acceso al código fuente y puedan colaborar libremente, promoviendo el intercambio y la mejora del proyecto.

## ⚠ Descargo de responsabilidad

En este proyecto, tuve que alojar `node_modules` para ayudar a quienes ejecutan el bot desde el celular, ya que muchos de ellos podrían no ejecutar `npm install` correctamente a través de Termux.
