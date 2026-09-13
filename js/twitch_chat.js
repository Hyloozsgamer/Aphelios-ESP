// js/twitch_chat.js

class TwitchChat {
    constructor(channel) {
        this.channel = channel;
        this.client = new tmi.Client({
            channels: [this.channel]
        });
        
        this.chatContainer = document.getElementById('chat-messages');
        
        this.client.connect().then(() => {
            // Add a welcome message so the chat container is immediately visible and not empty
            this.handleMessage({
                'display-name': 'System',
                'color': '#8a2be2'
            }, "¡Bienvenido a Lunar Whispers! El chat está conectado.");
        }).catch((err) => {
            this.handleMessage({
                'display-name': 'Error',
                'color': 'red'
            }, "Error conectando al chat: " + err);
        });
        
        this.client.on('message', (channel, tags, message, self) => {
            this.handleMessage(tags, message);
        });
    }

    handleMessage(tags, message) {
        const username = tags['display-name'] || tags.username;
        const color = tags.color || '#00e5ff';
        const avatarUrl = `https://decapi.me/twitch/avatar/${username}`;
        
        const messageEl = document.createElement('div');
        messageEl.classList.add('chat-message');
        
        messageEl.innerHTML = `
            <img src="${avatarUrl}" class="chat-avatar" alt="${username}" onerror="this.src='assets/sprites/alune_spritesheet.png';">
            <span class="chat-username" style="color: ${color};">${username}:</span>
            <span class="chat-text">${message}</span>
        `;
        
        this.chatContainer.appendChild(messageEl);
        
        // Scroll to bottom
        this.chatContainer.scrollTop = this.chatContainer.scrollHeight;
        
        // Remove old messages
        while (this.chatContainer.children.length > CONFIG.MAX_CHAT_MESSAGES) {
            this.chatContainer.removeChild(this.chatContainer.firstChild);
        }

        // Fade out messages after timeout
        setTimeout(() => {
            if (this.chatContainer.contains(messageEl)) {
                messageEl.style.transition = 'opacity 1s';
                messageEl.style.opacity = '0';
                setTimeout(() => {
                    if (this.chatContainer.contains(messageEl)) {
                        this.chatContainer.removeChild(messageEl);
                    }
                }, 1000);
            }
        }, CONFIG.CHAT_FADE_TIMEOUT_MS);

        // Alune reacts to certain words
        const lowerMsg = message.toLowerCase();
        
        // Command handling
        if (message.startsWith('!') && window.sprites) {
            const parts = lowerMsg.split(' ');
            window.sprites.handleCommand(parts[0], username);
        }
        
        if (lowerMsg.includes('aphelios') || lowerMsg.includes('phel')) {
            if (window.sprites && Math.random() > 0.5) {
                window.sprites.aluneSpeak(`¡${username} está hablando de ti!`, 3000);
            }
        }
    }
}

// Initialize chat if channel is set
if (CONFIG.TWITCH_CHANNEL && CONFIG.TWITCH_CHANNEL !== 'YOUR_TWITCH_CHANNEL') {
    window.twitchChat = new TwitchChat(CONFIG.TWITCH_CHANNEL);
}
