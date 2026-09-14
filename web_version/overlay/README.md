# 🌙 Aphelios & Alune Pro-Tier Twitch Overlay V4

Bienvenido a la **Versión 4** del overlay definitivo para OTP Aphelios. Diseñado meticulosamente para streamers de alto nivel y pro-players, este overlay combina una estética inmersiva de Targon con funcionalidades interactivas de última generación.

---

## ✨ Características Premium
- **Fondo Parallax 2.5D**: Un entorno cósmico de Targon con múltiples capas de profundidad y efectos atmosféricos. Adaptado con recorte (clip-path) para integrar el cliente del juego limpiamente.
- **Marcos Dinámicos**: Soporte para marcos de video (WebM) o marcos estáticos personalizados de alta calidad.
- **Sprites Inteligentes (Aphelios & Alune)**: Chibis animados que patrullan tu pantalla. Alune persigue a Aphelios y ambos reaccionan en tiempo real a los eventos del stream.
- **Chat Interactivo (Lunar Whispers)**:
  - Chat nativo de Twitch con sistema anti-spam (fade-out automático).
  - Comandos integrados (ej. `!poro`, `!arma`) que activan animaciones en pantalla y efectos de sonido.
  - Alune reacciona dinámicamente cuando tu chat menciona a "Aphelios" o "Phel".
- **Integración con Streamlabs (HUD)**: Alertas instantáneas y elegantes para Follows, Subs, Donaciones y Bits. Interfaz minimalista de cristal (Glassmorphism).

---

## 🚀 Instalación en OBS / Streamlabs
1. Extrae el contenido en una carpeta dedicada de tu PC.
2. Abre tu software de transmisión (OBS Studio o Streamlabs Desktop) y añade una nueva **Fuente de Navegador (Browser Source)**.
3. Marca la casilla **"Archivo Local"**.
4. Haz clic en **Examinar** y selecciona el archivo `index.html` de este proyecto.
5. Ajusta la **Resolución**: Ancho `1920` / Alto `1080`.
6. Habilita las opciones:
   - *"Apagar fuente cuando no sea visible"*
   - *"Actualizar el navegador cuando la escena se active"* (ideal para recargar las animaciones).
7. Sitúa tu captura de juego (Game Capture) **debajo** de esta Fuente de Navegador para aprovechar el recorte de la ventana central.

---

## ⚙️ Configuración del Stream
Para enlazar tu chat y tus alertas:
1. Renombra `config.example.js` a **`config.js`**.
2. Ábrelo con un editor de texto o código (ej. VSCode).
3. Cambia `TWITCH_CHANNEL` por tu nombre de usuario exacto en Twitch.
4. Vincula tu **Streamlabs Socket Token**:
   - Inicia sesión en tu Dashboard de Streamlabs.
   - Ve a `Ajustes -> API Tokens -> Socket API`.
   - Copia tu token y pégalo en el archivo `config.js`.

---

## 🎨 Personalización (Assets)
- **Fondo y Marco**: Ubicados en `assets/images/`. Para cambiar el marco, reemplaza `custom_frame.png`.
- **Sprites**: Las animaciones de los personajes están en `assets/sprites/`. Para modificarlos, reemplaza las hojas de sprites correspondientes respetando la cuadrícula.

---

*Diseñado para la comunidad Lunari. Que la luna guíe tus partidas.*
