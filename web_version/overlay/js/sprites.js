// js/sprites.js

class Sprite {
    constructor(containerId, imageId, x, y, speed, cols, rows, totalFrames) {
        this.containerEl = document.getElementById(containerId);
        this.imageEl = document.getElementById(imageId);
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.targetX = x;
        this.targetY = y;
        this.state = 'idle'; // idle, walking, celebrating, waving
        this.flipX = false;
        
        // Grid Spritesheet configuration
        this.cols = cols;
        this.rows = rows;
        this.totalFrames = totalFrames;
        
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.frameDuration = 60; // ms per frame (fast for smooth pixel art running)
        this.lastTime = performance.now();

        // Apply grid dimensions to background size
        this.imageEl.style.backgroundSize = `${this.cols * 100}% ${this.rows * 100}%`;
        this.imageEl.style.imageRendering = 'pixelated'; // Keep pixel art sharp

        this.updatePosition();
    }

    setTarget(x, y) {
        this.targetX = x;
        this.targetY = y;
    }

    animateSprite(time) {
        let deltaTime = time - this.lastTime;
        this.frameTimer += deltaTime;

        if (this.frameTimer >= this.frameDuration) {
            this.frameTimer = 0;
            
            if (this.state === 'walking') {
                // Loop through all frames to simulate running
                this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
            } else if (this.state === 'idle') {
                this.currentFrame = 0; // Frame 0 for standing still
            } else {
                // For celebrate/wave, maybe loop rapidly or stick to a random frame for now since we only have running sprites
                this.currentFrame = (this.currentFrame + 2) % this.totalFrames; 
            }
            
            // Calculate Grid Position
            let col = this.currentFrame % this.cols;
            let row = Math.floor(this.currentFrame / this.cols);
            
            // Map to percentage (0% to 100%)
            let xPos = this.cols > 1 ? (col / (this.cols - 1)) * 100 : 0;
            let yPos = this.rows > 1 ? (row / (this.rows - 1)) * 100 : 0;
            
            this.imageEl.style.backgroundPosition = `${xPos}% ${yPos}%`;
        }
        this.lastTime = time;
    }

    update(time) {
        this.animateSprite(time);

        if (this.state === 'celebrating' || this.state === 'waving') return;

        let dx = this.targetX - this.x;
        let dy = this.targetY - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance > this.speed) {
            this.x += (dx / distance) * this.speed;
            this.y += (dy / distance) * this.speed;
            
            // Flip logic
            if (dx > 0) this.flipX = false;
            else if (dx < 0) this.flipX = true;

            this.imageEl.style.transform = this.flipX ? 'scaleX(-1)' : 'scaleX(1)';
            this.state = 'walking';
        } else {
            this.x = this.targetX;
            this.y = this.targetY;
            this.state = 'idle';
        }

        this.updatePosition();
    }

    updatePosition() {
        this.containerEl.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    celebrate() {
        let previousState = this.state;
        this.state = 'celebrating';
        setTimeout(() => {
            this.state = previousState;
        }, 3000);
    }
    
    wave() {
        let previousState = this.state;
        this.state = 'waving';
        // Force face front or specific direction if wanted
        setTimeout(() => {
            this.state = previousState;
        }, 3000);
    }
}

class SpriteManager {
    constructor() {
        // Waypoints matching the 1120x630 game window perimeter, relative to the container!
        // Screen bounds: 1920x1080
        // Container size is 250x250. To keep it fully inside the screen:
        // Max X = 1920 - 250 = 1670
        // Max Y = 1080 - 250 = 830
        this.waypoints = [
            { x: 1670, y: 830 }, // Bottom Right
            { x: 1670, y: 0 },   // Top Right
            { x: 0,  y: 0 },   // Top Left
            { x: 0,  y: 830 }  // Bottom Left
        ];
        
        // Aphelios: 5x5 grid, 23 frames total
        this.aphelios = new Sprite('aphelios-container', 'aphelios-sprite', 0, 830, 2, 5, 5, 23);
        
        // Alune: 5x3 grid, 14 frames total
        this.alune = new Sprite('alune-container', 'alune-sprite', 140, 830, 1.8, 5, 3, 14);
        
        this.aluneBubble = document.getElementById('alune-bubble');
        this.bubbleTimeout = null;

        this.currentWaypointIndex = 0;

        this.tips = [
            "¡No olvides poner centinelas!",
            "¡Aphelios, rota tus armas!",
            "¡Mira el minimapa!",
            "La luna nos guía.",
            "Estoy contigo, hermano.",
            "No nos verán venir.",
            "Calibrum nos da alcance.",
            "Severum para curarnos.",
            "Gravitum los inmoviliza.",
            "Infernum arde con fuerza.",
            "Crescendum está listo.",
            "Nuestra fe es nuestra arma.",
            "El silencio es nuestro grito más fuerte.",
            "Somos el arma de los Lunari.",
            "Las sombras nos ocultan.",
            "Confía en la luz de la luna.",
            "Cinco armas, un propósito.",
            "Temen lo que no pueden ver.",
            "Un sacrificio necesario.",
            "La noche es nuestro escudo.",
            "Con cada paso, el eclipse se acerca."
        ];

        this.loop();
        this.behaviorLoop();
    }

    loop(time) {
        if (!time) time = performance.now();
        this.aphelios.update(time);
        this.alune.update(time);
        requestAnimationFrame((t) => this.loop(t));
    }

    behaviorLoop() {
        setInterval(() => {
            // Aphelios moves to the next waypoint
            let distanceToWaypoint = Math.sqrt(
                Math.pow(this.waypoints[this.currentWaypointIndex].x - this.aphelios.x, 2) +
                Math.pow(this.waypoints[this.currentWaypointIndex].y - this.aphelios.y, 2)
            );

            if (distanceToWaypoint < 50) {
                this.currentWaypointIndex = (this.currentWaypointIndex + 1) % this.waypoints.length;
            }

            // Occasionally Aphelios stops
            if (Math.random() > 0.05) {
                this.aphelios.setTarget(this.waypoints[this.currentWaypointIndex].x, this.waypoints[this.currentWaypointIndex].y);
            } else {
                this.aphelios.setTarget(this.aphelios.x, this.aphelios.y); // Stop
            }

            // Alune chases Aphelios
            let aluneTargetX = this.aphelios.x;
            let aluneTargetY = this.aphelios.y;
            
            let distBetween = Math.sqrt(
                Math.pow(this.aphelios.x - this.alune.x, 2) + 
                Math.pow(this.aphelios.y - this.alune.y, 2)
            );

            if (distBetween > 150) {
                // Alune tries to catch up
                this.alune.speed = 2.5;
            } else {
                // Alune reaches Aphelios and stays behind
                this.alune.speed = 1.5;
                // Offset target slightly based on direction
                aluneTargetX -= 80 * (this.aphelios.x > this.alune.x ? 1 : -1);
                aluneTargetY -= 80 * (this.aphelios.y > this.alune.y ? 1 : -1);
            }

            this.alune.setTarget(aluneTargetX, aluneTargetY);

            // Random Alune Tips
            if (Math.random() < 0.05 && this.aluneBubble.classList.contains('hidden')) {
                let randomTip = this.tips[Math.floor(Math.random() * this.tips.length)];
                this.aluneSpeak(randomTip, 4000);
            }

        }, 1000);
    }

    aluneSpeak(text, duration = 4000) {
        this.aluneBubble.textContent = text;
        this.aluneBubble.classList.remove('hidden');
        
        if (this.bubbleTimeout) clearTimeout(this.bubbleTimeout);
        
        this.bubbleTimeout = setTimeout(() => {
            this.aluneBubble.classList.add('hidden');
        }, duration);
    }

    triggerEventReaction(type, username) {
        let message = "";
        
        switch (type) {
            case 'follow': 
                this.alune.celebrate();
                message = `¡Gracias por el follow, ${username}!`; 
                break;
            case 'sub': 
                this.aphelios.wave();
                message = `¡Bienvenido a los Lunari, ${username}!`; 
                this.explodeEmotes('assets/images/moon_icon.png'); // Default fallback emote
                break;
            case 'dono': 
                this.aphelios.celebrate();
                this.alune.celebrate();
                message = `¡Agradecemos tu ofrenda, ${username}!`; 
                break;
            case 'bits': 
                this.alune.wave();
                message = `¡Gracias por los bits, ${username}!`; 
                break;
        }

        if (message) {
            this.aluneSpeak(message, 5000);
        }
    }

    handleCommand(command, username) {
        if (command === '!poro') {
            this.spawnPoro();
            this.aluneSpeak(`¡Un poro salvaje apareció gracias a ${username}!`, 3000);
        } else if (command === '!arma') {
            this.aluneSpeak(`¡Aphelios cambia de arma!`, 3000);
            this.aphelios.celebrate();
            // Screen flash effect
            let flash = document.createElement('div');
            flash.style.position = 'absolute';
            flash.style.top = '0'; flash.style.left = '0';
            flash.style.width = '100%'; flash.style.height = '100%';
            flash.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            flash.style.zIndex = '9000';
            flash.style.pointerEvents = 'none';
            flash.style.transition = 'opacity 0.5s';
            document.body.appendChild(flash);
            setTimeout(() => { flash.style.opacity = '0'; }, 50);
            setTimeout(() => { flash.remove(); }, 600);
        }
    }

    spawnPoro() {
        let poro = document.createElement('div');
        poro.innerText = '🐹'; // Using emoji for now, user can replace with image later
        poro.style.fontSize = '40px';
        poro.style.position = 'absolute';
        poro.style.left = (Math.random() * (window.innerWidth - 50)) + 'px';
        poro.style.top = '-50px';
        poro.style.zIndex = '200';
        document.body.appendChild(poro);

        let y = -50;
        let velocityY = 0;
        let gravity = 0.5;
        let bounce = -0.7;

        let anim = setInterval(() => {
            velocityY += gravity;
            y += velocityY;
            if (y > window.innerHeight - 50) {
                y = window.innerHeight - 50;
                velocityY *= bounce;
                // If velocity is very small, stop bouncing and remove
                if (Math.abs(velocityY) < 2) {
                    clearInterval(anim);
                    setTimeout(() => {
                        poro.style.transition = 'opacity 1s';
                        poro.style.opacity = '0';
                        setTimeout(() => poro.remove(), 1000);
                    }, 2000);
                }
            }
            poro.style.top = y + 'px';
        }, 20);
    }

    explodeEmotes(imageUrl) {
        const canvas = document.getElementById('fx-canvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let particles = [];
        for (let i = 0; i < 50; i++) {
            particles.push({
                x: canvas.width / 2,
                y: canvas.height / 2,
                vx: (Math.random() - 0.5) * 20,
                vy: (Math.random() - 0.5) * 20 - 5,
                life: 1.0,
                size: Math.random() * 20 + 10,
                color: `hsl(${Math.random() * 60 + 200}, 100%, 70%)` // cosmic blues/purples
            });
        }

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let alive = false;
            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                p.vy += 0.5; // gravity
                p.life -= 0.01;
                
                if (p.life > 0) {
                    alive = true;
                    ctx.globalAlpha = p.life;
                    ctx.fillStyle = p.color;
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            
            if (alive) {
                requestAnimationFrame(render);
            } else {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
        }
        render();
    }
}

window.sprites = new SpriteManager();
