// js/main.js

document.addEventListener('DOMContentLoaded', () => {
    console.log("EspetosMaker Overlay Loaded.");
    
    // Simple Parallax Effect based on mouse movement (optional, if testing in browser)
    // In OBS this won't trigger unless interacted with, but looks cool for testing.
    if (CONFIG.ENABLE_PARALLAX) {
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            const sky = document.querySelector('.layer-sky');
            const moon = document.querySelector('.layer-moon');
            const mountains = document.querySelector('.layer-mountains');
            
            if (sky) sky.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            if (moon) moon.style.transform = `translate(${x * 0.5}px, ${y * 0.5}px)`;
            if (mountains) mountains.style.transform = `translate(${x * 1.5}px, ${y * 1.5}px)`;
        });
    }

    // Initialize Particles (optional, simulating particle effect without external library)
    const particleContainer = document.getElementById('particles-js');
    if (particleContainer) {
        for (let i = 0; i < 50; i++) {
            let p = document.createElement('div');
            p.style.position = 'absolute';
            p.style.width = Math.random() * 3 + 'px';
            p.style.height = p.style.width;
            p.style.background = '#fff';
            p.style.borderRadius = '50%';
            p.style.boxShadow = '0 0 5px #fff, 0 0 10px var(--primary-color)';
            p.style.left = Math.random() * 100 + '%';
            p.style.top = Math.random() * 100 + '%';
            p.style.opacity = Math.random() * 0.5 + 0.2;
            
            // Simple animation
            let duration = Math.random() * 10 + 5;
            p.style.transition = `top ${duration}s linear, opacity ${duration}s ease-in-out`;
            
            particleContainer.appendChild(p);

            // Animate upwards
            setTimeout(() => {
                p.style.top = '-10%';
                p.style.opacity = '0';
            }, 100);

            // Reset loop
            setInterval(() => {
                p.style.transition = 'none';
                p.style.top = '110%';
                p.style.left = Math.random() * 100 + '%';
                p.style.opacity = Math.random() * 0.5 + 0.2;
                
                setTimeout(() => {
                    p.style.transition = `top ${duration}s linear, opacity ${duration}s ease-in-out`;
                    p.style.top = '-10%';
                    p.style.opacity = '0';
                }, 50);
            }, duration * 1000);
        }
    }

    // Promotional Banners Logic
    const bannerLeft = document.getElementById('promo-banner-left');
    const bannerRight = document.getElementById('promo-banner-right');
    
    if (bannerLeft && bannerRight) {
        // Interval: show banners every 3 minutes (180,000 ms)
        const bannerInterval = 180000;
        
        const showBanners = () => {
            // Show TikTok (left) banner
            setTimeout(() => {
                bannerLeft.classList.add('show');
                setTimeout(() => bannerLeft.classList.remove('show'), 15000); // hide after 15s
            }, 1000);
            
            // Show YouTube (right) banner 4 seconds later
            setTimeout(() => {
                bannerRight.classList.add('show');
                setTimeout(() => bannerRight.classList.remove('show'), 15000);
            }, 5000);
        };

        // Start cycle
        setInterval(showBanners, bannerInterval);
        
        // Initial trigger after 20 seconds so the streamer doesn't have to wait 3 mins to test it
        setTimeout(showBanners, 20000);
    }
});

