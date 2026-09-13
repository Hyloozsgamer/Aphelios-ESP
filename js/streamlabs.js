// js/streamlabs.js

class StreamlabsAlerts {
    constructor(token) {
        if (!token || token === "YOUR_STREAMLABS_TOKEN_HERE") {
            console.warn("Streamlabs token not configured.");
            return;
        }

        this.socket = io(`https://sockets.streamlabs.com?token=${token}`, { transports: ['websocket'] });
        this.alertContainer = document.getElementById('alert-container');
        this.alertTitle = document.getElementById('alert-title');
        this.alertMessage = document.getElementById('alert-message');

        this.currentGoal = 0;
        this.maxGoal = 50;
        this.updateGoalBar();

        this.socket.on('event', (eventData) => {
            // Socket.IO for Streamlabs wraps the event in an array usually, but according to docs it might be passed directly or as eventData.message
            let data = eventData.message ? eventData.message[0] : eventData;
            this.handleEvent(data);
        });
    }

    handleEvent(eventData) {
        if (!eventData) return;

        let type = eventData.type;
        let name = eventData.name || "Someone";
        let title = "";
        let message = "";
        let spriteEventType = "";

        switch(type) {
            case 'follow':
                title = "New Follower!";
                message = `${name} has joined the Lunari.`;
                document.getElementById('latest-follow').innerText = name;
                spriteEventType = 'follow';
                break;
            case 'subscription':
                title = "New Subscriber!";
                message = `${name} just subscribed!`;
                document.getElementById('latest-sub').innerText = name;
                spriteEventType = 'sub';
                this.currentGoal += 1;
                this.updateGoalBar();
                break;
            case 'donation':
                title = "Donation!";
                let amount = eventData.formatted_amount || eventData.amount;
                message = `${name} donated ${amount}!`;
                document.getElementById('latest-dono').innerText = `$${eventData.amount || 0}`;
                spriteEventType = 'dono';
                break;
            case 'bits':
                title = "Bits!";
                let bits = eventData.amount;
                message = `${name} cheered ${bits} bits!`;
                document.getElementById('latest-bits').innerText = eventData.amount || 0;
                spriteEventType = 'bits';
                break;
            default:
                return; // Ignore other events
        }

        this.showAlert(title, message);
        this.playSound();
        
        // Trigger Alune/Aphelios reaction
        if (window.sprites) {
            window.sprites.triggerEventReaction(spriteEventType, name);
        }
    }

    updateGoalBar() {
        const fill = document.getElementById('goal-fill');
        const text = document.getElementById('goal-text');
        if (fill && text) {
            let percentage = (this.currentGoal / this.maxGoal) * 100;
            if (percentage > 100) percentage = 100;
            fill.style.width = `${percentage}%`;
            text.innerText = `${this.currentGoal} / ${this.maxGoal}`;
        }
    }

    playSound() {
        // Attempt to play an alert sound if the user has added one to assets/sounds/
        try {
            let audio = new Audio('assets/sounds/alert.mp3');
            audio.volume = 0.5;
            audio.play().catch(e => {
                // Silently fail if file doesn't exist yet
                console.log("Audio file not found or browser blocked autoplay.");
            });
        } catch (e) {}
    }

    showAlert(title, message) {
        this.alertTitle.textContent = title;
        this.alertMessage.textContent = message;
        
        this.alertContainer.classList.remove('hidden');
        
        setTimeout(() => {
            this.alertContainer.classList.add('hidden');
        }, 5000);
    }
}

window.streamlabs = new StreamlabsAlerts(CONFIG.STREAMLABS_SOCKET_TOKEN);
