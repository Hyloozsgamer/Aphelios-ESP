document.addEventListener('DOMContentLoaded', () => {
    // Current Patch is statically set to 16.18.1 per requirements, but date is dynamic.
    const dateSpan = document.getElementById('current-date');
    if (dateSpan) {
        const today = new Date();
        dateSpan.textContent = today.toLocaleDateString('es-ES', { day: '2-digit', month: '2-digit', year: 'numeric' });
    }

    // Smooth Scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Simple interaction for weapon cards
    const weaponCards = document.querySelectorAll('.weapon-card');
    weaponCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            // Future logic for weapon hover tooltips
        });
    });

    // --- Weapon Rotation Simulator ---
    const WEAPONS = {
        CALIBRUM: { id: 'calibrum', name: 'Calibrum', class: 'calibrum-bg' },
        SEVERUM: { id: 'severum', name: 'Severum', class: 'severum-bg' },
        GRAVITUM: { id: 'gravitum', name: 'Gravitum', class: 'gravitum-bg' },
        INFERNUM: { id: 'infernum', name: 'Infernum', class: 'infernum-bg' },
        CRESCENDUM: { id: 'crescendum', name: 'Crescendum', class: 'crescendum-bg' }
    };

    let state = {
        main: WEAPONS.SEVERUM,
        off: WEAPONS.CRESCENDUM,
        queue: [WEAPONS.CALIBRUM, WEAPONS.INFERNUM, WEAPONS.GRAVITUM]
    };

    const simMain = document.getElementById('sim-main-weapon');
    const simOff = document.getElementById('sim-offhand-weapon');
    const simQueue = document.getElementById('sim-queue-weapons');
    const simLog = document.getElementById('sim-log');

    function renderSimulator() {
        if(!simMain) return;
        simMain.className = `weapon-circle ${state.main.class}`;
        simMain.textContent = state.main.name;

        simOff.className = `weapon-circle ${state.off.class}`;
        simOff.textContent = state.off.name;

        simQueue.innerHTML = '';
        state.queue.forEach(w => {
            const span = document.createElement('span');
            span.className = `weapon-dot ${w.class}`;
            span.title = w.name;
            simQueue.appendChild(span);
        });
    }

    function logAction(msg) {
        if(!simLog) return;
        simLog.innerHTML = `<em>${msg}</em>`;
    }

    const btnEmptyMain = document.getElementById('btn-empty-main');
    const btnEmptyOff = document.getElementById('btn-empty-off');
    const btnResetSim = document.getElementById('btn-reset-sim');

    if(btnEmptyMain) {
        btnEmptyMain.addEventListener('click', () => {
            const oldMain = state.main;
            const nextWeapon = state.queue.shift();
            state.main = nextWeapon;
            state.queue.push(oldMain);
            logAction(`Vaciaste ${oldMain.name}. Entra ${nextWeapon.name}.`);
            renderSimulator();
        });
    }

    if(btnEmptyOff) {
        btnEmptyOff.addEventListener('click', () => {
            const oldOff = state.off;
            const nextWeapon = state.queue.shift();
            state.off = nextWeapon;
            state.queue.push(oldOff);
            logAction(`Vaciaste ${oldOff.name}. Entra ${nextWeapon.name}.`);
            renderSimulator();
        });
    }

    if(btnResetSim) {
        btnResetSim.addEventListener('click', () => {
            state = {
                main: WEAPONS.SEVERUM,
                off: WEAPONS.CRESCENDUM,
                queue: [WEAPONS.CALIBRUM, WEAPONS.INFERNUM, WEAPONS.GRAVITUM]
            };
            logAction('Simulador reseteado a rotación estándar (Red-White).');
            renderSimulator();
        });
    }

    renderSimulator();

    // --- Dynamic Data Fetching (Architecture 100%) ---
    async function fetchAndRenderData() {
        try {
            // Fetch Builds
            const buildsRes = await fetch('data/builds.json');
            const builds = await buildsRes.json();
            const buildsContainer = document.getElementById('dynamic-builds');
            if (buildsContainer) {
                let html = '';
                builds.forEach(b => {
                    html += `
                    <div class="matchup-card glass-section">
                        <h3 class="text-glow">${b.name}</h3>
                        <p><strong>Core:</strong> ${b.core.join(' &rarr; ')}</p>
                        <p><strong>Cuándo usarla:</strong> ${b.whenToUse}</p>
                        <p><em>Por qué:</em> ${b.why}</p>
                    </div>`;
                });
                buildsContainer.innerHTML = html;
            }

            // Fetch Combos
            const combosRes = await fetch('data/combos.json');
            const combos = await combosRes.json();
            const combosContainer = document.getElementById('dynamic-combos');
            if (combosContainer) {
                let html = '';
                combos.forEach(c => {
                    html += `
                    <div class="matchup-card glass-section">
                        <h3 class="text-glow">${c.level} - ${c.weapons}</h3>
                        <p><strong>Secuencia:</strong> ${c.sequence}</p>
                        <p><strong>Dificultad:</strong> ${c.difficulty}</p>
                        <p><em>Uso:</em> ${c.usage}</p>
                    </div>`;
                });
                combosContainer.innerHTML = html;
            }

            // Fetch Supports
            const supRes = await fetch('data/supports.json');
            const supports = await supRes.json();
            const supContainer = document.getElementById('dynamic-supports');
            if (supContainer) {
                let html = '';
                supports.forEach(s => {
                    html += `
                    <div class="matchup-card glass-section">
                        <h3 class="text-glow">${s.name} (Tier ${s.tier})</h3>
                        <p><strong>Sinergia:</strong> ${s.synergy}</p>
                        <p><strong>Plan de Línea:</strong> ${s.lanePlan}</p>
                        <p><strong>Combo Ideal:</strong> ${s.combo}</p>
                    </div>`;
                });
                supContainer.innerHTML = html;
            }

            // Fetch Glossary
            const gloRes = await fetch('data/glossary.json');
            const glossary = await gloRes.json();
            const gloContainer = document.getElementById('dynamic-glossary');
            if (gloContainer) {
                let html = '';
                glossary.forEach(g => {
                    html += `
                    <div class="matchup-card glass-section">
                        <h3 class="text-glow">${g.term}</h3>
                        <p>${g.definition}</p>
                    </div>`;
                });
                gloContainer.innerHTML = html;
            }

        } catch (error) {
            console.error("Error loading JSON data:", error);
        }
    }
    
    fetchAndRenderData();
});
