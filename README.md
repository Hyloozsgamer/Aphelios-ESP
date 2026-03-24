# <p align="center">🔮 ALUNE.SYS - APHELIOS SYSTEM OS 🔮</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Initializing...-blueviolet?style=for-the-badge" alt="Status">
  <img src="https://img.shields.io/badge/Season-2026-teal?style=for-the-badge" alt="Season">
  <img src="https://img.shields.io/badge/Role-HyperCarry-red?style=for-the-badge" alt="Role">
</p>

---

## `[//] INICIANDO SECUENCIA DE ARRANQUE...`

```javascript
/* ORACLE_RIFT_CORE_INITIALIZATION */
const Aphelios = {
    passive: "The Hitman and the Seer",
    weapons: ["Calibrum", "Severum", "Gravitum", "Infernum", "Crescendum"],
    ammo: 50,
    status: "READY_FOR_ASCENSION"
};

console.log(`[SYS] Alune: "So many weapons, Aphelios. You have the deadliest."`);
```

---

## 🌀 1. Ciclo Perfecto de Armas (The Apex Rotation)

El orden de las armas es lo que separa a un usuario de Aphelios de un **System Master**. 

Este diagrama muestra la rotación óptima para mantener la sinergia de combos en cada fase de la partida.

```mermaid
graph TD
    classDef main fill:#d4af37,stroke:#333,stroke-width:2px,color:#000;
    classDef red fill:#ff4d4d,stroke:#333,stroke-width:1px,color:#fff;
    classDef green fill:#4caf50,stroke:#333,stroke-width:1px,color:#fff;
    classDef purple fill:#9c27b0,stroke:#333,stroke-width:1px,color:#fff;
    classDef blue fill:#2196f3,stroke:#333,stroke-width:1px,color:#fff;
    classDef white fill:#ffffff,stroke:#333,stroke-width:1px,color:#000;

    Severum["🔴 SEVERUM (Pistola)") ::: red --> Calibrum;
    Calibrum["🟢 CALIBRUM (Rifle)") ::: green --> Gravitum;
    Gravitum["🟣 GRAVITUM (Cañón)") ::: purple --> Infernum;
    Infernum["🔵 INFERNUM (Lanzallamas)") ::: blue --> Severum;
    Infernum --> Crescendum;
    Crescendum["⚪ CRESCENDUM (Chakram)") ::: white --> Severum;

    subgraph Combos_Core
        style Combos_Core fill:#1a1a1a,stroke:#444,color:#fff
        Calibrum -.-> |"Burst"| Crescendum
        Severum -.-> |"Chakram Stack"| Crescendum
    end
```

---

## 📊 2. Matriz de Matchups (Master+ Global)

Base de datos analítica sobre el meta actual.

| ADC Enemigo | Clase de Riesgo | Support Synergy | Win Rate | Micro-Strategy (2026) |
| :--- | :---: | :--- | :---: | :--- |
| **Zeri** | 🟡 Tier B | Milio / Lulu | 51.5% | Castigar early con Calibrum. Gravitum para detener su R/E. |
| **Jinx** | 🔴 Tier S | Thresh / Nautilus | 48.2% | Escala igual. Infernum R en teamfights gana la pelea sola. |
| **Draven** | 💀 Tier S+ | Pyke / Leona | 45.0% | **PELIGRO**. Sobrevivir con Severum. No tradear antes de nivel 6. |
| **Ezreal** | 🟢 Tier C | Karma / Bard | 53.8% | Free lane. Stackear Crescendum detrás de minions y obligar a dive. |

---

## ⚔️ 3. Ejecución Mecánica (Visual Database)

Sección reservada para demostraciones técnicas de combos avanzados.

### 🌟 Combo: "Moonshot Burst" (Verde 🟢 + Azul 🔵)
> **Secuencia**: Calibrum Q -> Auto -> Cambiar Arma -> Infernum R -> Burst.
> 
> [INSERTAR_GIF_MOONSHOT_BURST_AQUÍ]

### 🛡️ Combo: "God Duelist" (Roja 🔴 + Blanca ⚪)
> **Secuencia**: Severum Q (Stack Chakrams) -> Cambiar a Crescendum -> Auto-attacks cercanos.
> 
> [INSERTAR_GIF_GOD_DUELIST_AQUÍ]

---

## 💡 4. Protocolos de Combate (Consejos del Analista)

> [!IMPORTANT]
> **Gestión de Munición**: Nunca entres a una pelea de dragón con menos de 10 balas en tu arma actual si no tienes la rotación lista. Una mala transición de armas en teamfight es muerte segura.

> [!TIP]
> **Crescendum Sinergy**: El daño de Crescendum aumenta exponencialmente con cada Chakram activo. Usa habilidades de soporte (como torretas de Calibrum o Severum Q) para cargar el stack antes de hacer el *all-in*.

---

## 🛠️ 5. Estructura del Sistema

- [`matchups.json`](./matchups.json): Base de datos en JSON con estadísticas de campeones.
- [`builds.yml`](./builds.yml): Configuraciones de objetos dinámicas.
- [`scripts/combos.md`](./scripts/combos.md): Manual de mecánicas para el campo de pruebas.

---
<p align="center"><i>"The moon will guide us." - Alune</i></p>
