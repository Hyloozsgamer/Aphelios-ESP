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
});
