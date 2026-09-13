// config.example.js
// Rename this file to config.js and add your real keys.
// DO NOT commit config.js to version control.

const CONFIG = {
    // Streamlabs Socket API Token (for alerts)
    // Find this in your Streamlabs Dashboard -> API -> Socket API
    STREAMLABS_SOCKET_TOKEN: "YOUR_STREAMLABS_TOKEN_HERE",

    // Twitch Channel for chat integration
    TWITCH_CHANNEL: "espetosmaker",

    // General overlay settings
    ENABLE_PARALLAX: true,
    MAX_CHAT_MESSAGES: 50,
    CHAT_FADE_TIMEOUT_MS: 30000 // 30 seconds
};
