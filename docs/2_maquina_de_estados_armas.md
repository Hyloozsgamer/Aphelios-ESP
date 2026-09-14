# <img src="https://ddragon.leagueoflegends.com/cdn/14.18.1/img/item/1038.png" width="25" style="vertical-align: middle; border-radius: 5px;"> Módulo 2: Ingeniería de Armas y Objetivos

## 1. Weapon State Machine (La Máquina de Estados)
No analices tus armas como parejas estáticas (A + B). El verdadero desafío de Aphelios es la progresión de la máquina de estados: `A + B → C`.

**Ejemplo Analítico:**
Tienes *Infernum* (10 balas) y *Gravitum* (35 balas). Tu siguiente arma en cola es *Calibrum*.
* Si un jugador de elo bajo ve a un objetivo, gastará *Infernum* pegándole y terminará con *Gravitum* + *Calibrum*.
* **El Pensamiento Challenger (Weapon Exit Planning):** ¿Qué tipo de pelea viene? Si vamos a pelear un Dragón en 10 segundos, no quiero estar atascado con *Gravitum* (arma de utilidad) y *Calibrum* (arma de poke). Necesito purgar mi *Gravitum* disparando al aire para obtener *Crescendum* (Daño en Área y DPS masivo). 
* **Regla de Salida:** Calcula qué arma se agotará en medio de la teamfight y pregúntate cómo cambiará tu patrón de combate repentinamente en el milisegundo en que se equipe la nueva arma.

## 2. El Sistema T-90 para Objetivos
Elimina la simplificación de "T-60s". Preparar un Dragón o Barón toma 90 segundos.

* **T-90 (Macro Tracking):** ¿Qué armas tengo, cuánta munición y cuál es el estado de la oleada de súbditos en Medio y Bot? Si tienes las armas incorrectas (Ej: *Gravitum + Severum* sin munición a punto de agotarse), este es el momento de planear un *Recall* (regresar a base).
* **T-75 (Weapon Burning):** Calcula exactamente cuántos disparos necesitas "quemar" (disparar al aire o a los súbditos mágicos) para forzar la rotación perfecta antes de llegar al río.
* **T-60 (Manipulación Activa):** Último momento para arreglar la munición de tus armas ideales.
* **T-45 (Wave Prep):** Empuja tu oleada bajo la torre enemiga para forzar que el ADC rival pierda experiencia si decide rotar al dragón.
* **T-30 (River Movement):** Empieza el movimiento físico hacia la zona del objetivo. No quemes más armas innecesariamente.
* **T-20 (Threat Priority):** Identifica desde dónde puede flanquear el enemigo. Pon *Wards* en tu retaguardia.
* **T-10 (Fog Tracking):** Busca al asesino. Si no lo ves, asume que está en el arbusto más cercano a tu ruta de escape.
* **T-5 (Lockdown):** Deja de intentar optimizar munición. Prioriza tu supervivencia, tu posicionamiento y el estado de tu *Flash*.
* **T0 (Teamfight):** Ejecución mecánica pura.

## 3. Armas Ideales según el Contexto (No existe una receta única)
*Dragón = Crescendum + Infernum* es un mito de Elo Bajo. La combinación óptima es `f(Objetivo, Terreno, Composición, Amenazas)`.

* **Severum + Crescendum (El Duelista):** Ideal si el enemigo es una composición de *Dive* y van a saltar directamente sobre ti. Te da curación absurda, DPS a corta distancia y supervivencia bruta sin depender tanto del *Peel* de tu soporte.
* **Infernum + Gravitum (Control de Masas 5v5):** Ideal si peleas en cuellos de botella (Choke points de la Jungla). Una definitiva de *Infernum* seguida de la inmovilización global de *Gravitum* gana la teamfight instantáneamente para tu equipo de daño de área (Ej: Orianna/Viktor).
* **Calibrum + Crescendum (Torreta de Asedio):** Ideal para asediar torretas o pelear contra campeones de bajo rango cuando tienes un tanque fuerte delante.
* **Calibrum + Gravitum (Catcher Range):** Supremo si tu equipo necesita forzar cazadas (Picks) antes de la pelea.

## 4. El Terreno como Multiplicador
* **Pasillos de la Jungla:** *Infernum* multiplica su valor porque los enemigos no pueden separarse (Split).
* **Midlane Abierta:** *Calibrum* y *Severum* dominan debido al amplio espacio para hacer "Kiting" (golpear y correr).
* **Fosa del Barón:** *Crescendum* es rey para derretir el objetivo estático a melé.

[⬅️ Volver al Índice Principal](../README.md)
