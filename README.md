# 🌙 Aphelios ESP — La Guía Definitiva

> *Desde los fundamentos hasta las decisiones de un jugador profesional (Challenger / Pro Play).*

Bienvenido a la **Guía Definitiva de Aphelios en español**, una referencia técnica y visual interactiva diseñada para dominar al Arma de los Fieles. Esta guía está orientada tanto a jugadores principiantes como a profesionales.

---

## ☄️ Estado Actual
- **Parche:** `16.18.1`
- **Fuente de Datos:** LoLalytics (Emerald+)
- **Actualización:** Automática / Semi-automática a través de API y archivos JSON.

---

## ✨ Características de la Guía

1. **Simulador Interactivo de Rotaciones:** Un simulador JavaScript nativo que te permite entender matemáticamente la gestión de munición, planificar tu "Weapon Queue" y arreglar rotaciones rotas en tiempo real.
2. **Matchups Estructurados:** Base de datos separada (arquitectura JSON en `/data/`) que proporciona un plan de juego y condiciones de victoria para cada ADC en el meta actual.
3. **Secciones de Macro / Micro:** Explicaciones visuales del *Spacing*, *Tethering*, y diagramas interactivos sobre el posicionamiento óptimo en Teamfights según tus armas actuales.
4. **Diseño Premium Targon:** Estética construida 100% en Vanilla CSS con estilo *Glassmorphism*, Dark Mode por defecto, y tipografías inmersivas.
5. **Data Separation:** Toda la información estadística y estratégica reside en la carpeta `/data/` (ej. `meta.json`, `matchups.json`) para actualizar la guía fácilmente en cada parche sin romper los componentes web.

---

## 🚀 Arquitectura Técnica

Este proyecto está construido para ser rápido, escalable y alojado estáticamente en **GitHub Pages**.

- **HTML5 Semántico:** Estructura orientada al SEO y la accesibilidad.
- **Vanilla CSS:** Sin frameworks pesados. Animaciones optimizadas.
- **Vanilla JS:** Lógica interactiva nativa (Simulador, Tooltips, Lectura de JSON).

### Estructura de Directorios:
```text
/
├── assets/          # Imágenes y recursos visuales permitidos (Data Dragon)
├── css/             # Diseño Targon y sistema de Grid
├── js/              # Lógica del simulador interactivo
├── data/            # Bases de datos JSON (Matchups, Meta, Builds)
├── overlay/         # [LEGACY] El overlay de Twitch original de EspetosMaker V4
├── index.html       # La aplicación principal (Single Page Application estructurada)
└── README.md
```

---

## ⚙️ Desarrollo Local

1. Clona el repositorio: `git clone https://github.com/Hyloozsgamer/Aphelios-ESP.git`
2. Puesto que es HTML/JS puro, no necesitas instalar NodeJS ni dependencias.
3. Puedes utilizar la extensión **Live Server** de VSCode, o simplemente abrir `index.html` en tu navegador para ver la guía, aunque algunas lecturas de archivos JSON locales (`/data/`) podrían requerir un servidor HTTP ligero (ej: `python -m http.server`).

---

## 📜 Disclaimer
*Aphelios ESP no está afiliado directamente con Riot Games. Utilizamos recursos autorizados provistos públicamente por Data Dragon y CommunityDragon bajo los términos de uso legales.*
