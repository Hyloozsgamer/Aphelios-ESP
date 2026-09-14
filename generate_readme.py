import json

adcs = [
    ('Ashe', 6, 'Su rango de 600 supera tu base (550). Usa Fleet Footwork. No puedes huir de ella sin Severum Q.', 'Purificar (Cleanse) obligatorio. Juega al escalado.'),
    ('Caitlyn', 7, '650 de rango base (18% más que tú). Sufres hasta el nivel 6. Usa Severum para el sustain.', 'Sobrevive la fase de líneas. Ganas en las teamfights agrupadas.'),
    ('Draven', 8, 'Daño ridículo en early. Su Q inflige hasta un +115% de AD extra. Juega atrás y busca peleas 3v2.', 'No le des la primera sangre. Escalas mejor en front-to-back.'),
    ('Ezreal', 3, 'Severum Q out-sustains su poke. Empuja la oleada detrás de tus minions.', 'DPS muy superior en peleas estáticas y late game.'),
    ('Jhin', 4, 'Su recarga te da ventanas de 2.5s para tradear gratis con Calibrum.', 'Evita su 4to disparo (ejecución basada en vida faltante). Usa Crescendum a corta distancia.'),
    ('Jinx', 5, 'Rango similar pero gana AOE con los cohetes. Usa Calibrum para castigarla cuando usa minigun.', 'Destrózala con Infernum R antes de que consiga su pasiva.'),
    ('KaiSa', 6, 'Rango corto (525). Mantén siempre minions entre ambos para evitar su Q aislada (Iso Q).', 'Tethering perfecto. Usa Gravitum si ella hace su R hacia tu backline.'),
    ('Kalista', 7, 'Difícil de acertar skills (Calibrum Q). Su daño base en early es mejor.', 'Gravitum es tu mejor arma. La ralentización reduce pasivamente su velocidad de salto.'),
    ('KogMaw', 7, 'Con W tiene más rango y derrite tanques más rápido. Pelea cuando su W esté en CD (17s).', 'Usa Severum para correr y esquivar su daño. Búscale el 1v1 melee con Crescendum.'),
    ('Lucian', 8, 'Burst altísimo con PTA y dashes. No puedes pelear contra su dash+AA corto.', 'Respeta su rango de iniciación (E + Flash). Juega pasivo hasta tener escudo de Overheal.'),
    ('MissFortune', 5, 'Nunca te pongas directamente detrás de un minion moribundo (rebote de Q).', 'Cuidado con su R. Guarda Severum Q o Flash para salir de su cono.'),
    ('Nilah', 6, 'Rango melee. Castígala cada vez que quiera farmear. Su W bloquea tus autos.', 'Usa Gravitum para hacerle kite. Si activa su W, corre con Severum.'),
    ('Samira', 7, 'Su W bloquea Gravitum Q e Infernum R. Juega con la oleada congelada cerca de torre.', 'Rootearla con Gravitum ANTES de que consiga la S. Crescendum DPS puro.'),
    ('Sivir', 4, 'Empuja más rápido que tú en early. Su E (Escudo) puede bloquear Calibrum Q.', 'Usa ataques básicos para quitar su escudo. Gánale en DPS a partir del minuto 25.'),
    ('Smolder', 4, 'Débil en early, pero infinito en late. Castígalo mucho pre-nivel 6 con Calibrum.', 'Termina la partida antes de 35 mins. Usa Severum Q para esquivar su bola de fuego.'),
    ('Tristana', 8, 'All-in explosivo nivel 2 (W + E). Juega hacia atrás. No puedes pelear su burst.', 'Cleanse o Exhaust vital. Severum te da velocidad para intentar escapar de su salto.'),
    ('Twitch', 6, 'Cuidado con sus emboscadas de invisibilidad (Q). Compra un pink ward en línea.', 'Si se hace visible a corta distancia, castígalo con Crescendum. A larga distancia pierdes.'),
    ('Varus', 7, 'Mismo rango base (575) pero su poke penetra minions. Cuidado con su R a nivel 6.', 'Usa Fleet para sustain o Cleanse para su R. Pelea cuerpo a cuerpo con Crescendum si falla la R.'),
    ('Vayne', 5, 'Puedes abusar de ella en línea por su rango (550 y solo target único).', 'Nunca intentes hacer un duelo 1v1 aislado contra ella en late game. Juega con el equipo (Infernum).'),
    ('Xayah', 5, 'Su daño viene de las plumas traseras. No corras en línea recta alejándote de ella.', 'Rango superior con Calibrum. Evita agruparte en pasillos estrechos.'),
    ('Zeri', 5, 'Su Q es esquivable. Párate detrás de los minions para bloquear su daño.', 'Puedes ganarle en daño puro con Crescendum si se acerca demasiado.'),
    ('Karthus', 8, 'Su Q aislada hace doble daño. Empujará incesantemente.', 'Sustain extremo con Severum y Fleet. Esquiva o muere.'),
    ('Ziggs', 6, 'Destruye torres rápido. Juega al centro de la línea para esquivar bombas.', 'Sustain con Severum y esquiva su centro. A corta distancia lo destruyes.'),
    ('Syndra', 7, 'Stun largo y burst mágico inevitable a nivel 6.', 'Construye Hexdrinker/Shieldbow. No puedes recibir su combo completo.'),
    ('Seraphine', 4, 'Poke molesto pero poco daño sostenido real en 1v1.', 'Farmear tranquilamente. En late game eres superior en daño.')
]

matchup_html = ""
for name, diff, plan, win_cond in adcs:
    color = '🔴' if diff >= 7 else ('🟡' if diff >= 5 else '🟢')
    
    # Using reliable DDragon URLs for champions
    if name == "KaiSa":
        img_name = "Kaisa"
    elif name == "KogMaw":
        img_name = "KogMaw"
    elif name == "MissFortune":
        img_name = "MissFortune"
    else:
        img_name = name

    icon_url = f"https://ddragon.leagueoflegends.com/cdn/14.18.1/img/champion/{img_name}.png"
    
    # Add a space for display names
    display_name = name
    if name == "MissFortune": display_name = "Miss Fortune"
    if name == "KaiSa": display_name = "Kai'Sa"
    if name == "KogMaw": display_name = "Kog'Maw"

    matchup_html += f"| <img src='{icon_url}' width='40' style='border-radius: 50%;'> **{display_name}** | {color} ({diff}/10) | {plan} | {win_cond} |\n"

content = f"""<div align="center">
  <img src="https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Aphelios_0.jpg" alt="Aphelios Banner" width="100%" style="border-radius: 15px; box-shadow: 0 4px 8px rgba(0,0,0,0.5);">
  
  # 🌙 La Guía Definitiva de Aphelios
  **El Arma de los Fieles | Guía Nivel Challenger (Parche 16.18)**
</div>

---

## 📌 Enlaces Rápidos (Páginas Externas)
- ➡️ **[Ver: Runas y Rutas de Builds](./docs/runas_y_builds.md)** *(Actualizado con Iconos Oficiales y Diseño Profesional)*
- ➡️ **[Ver: Sinergias (Supports) y Composiciones de Equipo](./docs/composiciones.md)**

---

## 📐 Estructura del Campeón y Fase de Líneas (Didáctica)

### 📊 Base Matemática y Porcentajes Reales
Aphelios no tiene habilidad 'E', sus habilidades escalan pasivamente con tu nivel:
* **Daño Base (AD):** Empiezas con solo 55 de AD (escala +3 por nivel). Es de los más bajos del juego.
* **Velocidad de Ataque (AS):** 0.640 base (+2.1% por nivel).
* **Curación de Severum:** El autoataque te cura pasivamente un **2% al 7.1%** del daño infligido. La habilidad Q cura entre un **9% y 30%** (escala brutalmente).
* **Daño Infernum:** Infliges **110% de tu AD total** al objetivo principal y un **75%-100%** a los enemigos que estén en el cono de explosión.

### <img src="https://ddragon.leagueoflegends.com/cdn/14.18.1/img/item/3340.png" width="30"> Fase de Líneas y Posicionamiento Geométrico
<div align="center">
  <img src="https://static.wikia.nocookie.net/leagueoflegends/images/0/04/Summoner%27s_Rift_Minimap.png" alt="Mapa Grieta" width="350" style="border-radius: 10px; border: 2px solid #555;">
  <br><i>(El posicionamiento ideal siempre es formar un triángulo con tu support detrás de los minions magos)</i>
</div>

1. **Jugar detrás de la Línea de Minions Magos:** Al tener 550 de rango base, nunca debes pararte al lado de los minions cuerpo a cuerpo. Usa a tus propios súbditos como escudo humano contra ganchos enemigos.
2. **Triangulación (Tethering):** Siempre debes mantenerte en paralelo diagonal con tu support. Si tu Support retrocede, tú retrocedes inmediatamente la misma distancia. Si avanzas tú solo, te harán el famoso *Focus 2v1*.
3. **Peligro con Infernum:** A partir de nivel 3, el arma azul empujará pasivamente la oleada de súbditos cada vez que ataques. No ataques sin visión del Jungla enemigo, porque Aphelios no tiene "dashes" para escapar de emboscadas.

---

## ⚡ Cancelación de Animaciones y Mecánicas (Input Buffering)

Aphelios te recompensa por tu habilidad mecánica al cancelar animaciones muertas (Animation Canceling):

### 1. El Reset de Calibrum (AA -> Q -> AA Inmediato)
Al usar la Q de Calibrum, colocas una marca visible en el enemigo. Puedes cancelar tu propia animación de "recarga" de autoataque haciendo click derecho instantáneamente.
> **Comando de Botones:** `Autoataque` -> `Q` -> `Click Derecho sobre la marca`. Dispararás la bala de la marca instantáneamente sin esperar el retraso natural de tu velocidad de ataque.

### 2. El Reset de Crescendum (El Truco de la Torreta)
Colocar una torreta (Q de Crescendum) resetea inmediatamente tu "timer" de ataque básico. 
> **Comando de Botones:** `Autoataque` -> `Q` -> `Autoataque`. A corta distancia (Melee), esta ráfaga de tres impactos en menos de 1 segundo destroza a cualquiera.

### 3. Cancelación por Cambio de Arma Rápido (W Cancel)
Al vaciar un arma (0 municiones), Aphelios hace una animación inútil de ~0.8s para tirar el arma al suelo. Puedes saltarte esta animación presionando `W` instantáneamente para usar tu arma secundaria de inmediato y seguir haciendo DPS constante.

---

## ⚔️ La Biblia Completa de Matchups (Todos los ADCs y APCs)

Aquí tienes cómo contrarrestar matemáticamente a cualquier campeón que pise la *Botlane*.

| Campeón | Dificultad | Análisis Técnico y Plan de Línea (Challenger) | Condición de Victoria y Hechizo |
|---------|------------|-----------------------------------------------|---------------------------------|
{matchup_html}
---

## 🧠 Macro y Posicionamiento

### La "Threat Zone" (Zona de Amenaza)
Antes de una pelea, calcula la Threat Zone del enemigo iniciador principal.
**Threat Zone = Rango de la Habilidad Iniciadora + Rango de Destello (Flash 400).**
* Ejemplo: Malphite (R: 1000 + Flash: 400) = Threat Zone de **1400**.
* **Regla de Supervivencia:** Si entras en ese radio de 1400 unidades y no tienes destello, ya estás muerto virtualmente. Espera siempre que tus aliados frontales absorban las definitivas enemigas.

### Preparación de Objetivos (Regla de T-60s)
1 minuto exacto antes de que aparezca un Dragón o Barón en el mapa, observa tu munición. Tienes 60 segundos vitales para disparar al aire o a monstruos para organizar tu rotación y llegar a la fosa con:
* **Crescendum + Infernum:** Para "derretir" de daño al dragón.
* **Infernum + Gravitum:** Para combates inminentes 5v5 (hacer daño en área y aturdir a todos).
"""

with open('README.md', 'w', encoding='utf-8') as f:
    f.write(content)

print('README.md generated successfully!')
