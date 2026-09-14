# <img src="https://ddragon.leagueoflegends.com/cdn/14.18.1/img/item/3086.png" width="25" style="vertical-align: middle; border-radius: 5px;"> Módulo 3: Ejecución Mecánica y Teamfights

## 1. Teamfight State Machine (Fases del Combate)
Las peleas de equipo no son un caos continuo, son una máquina de estados predecible.

1. **STATE 0 — WAIT:** Evalúas las Amenazas Disponibles. Estás en la *Layer 1 o 2* de Posicionamiento.
2. **STATE 1 — BAIT:** Tu Frontline (Tanque) absorbe o provoca los Cooldowns enemigos clave (Ej: *Malphite* falla su R).
3. **STATE 2 — FIRST WINDOW:** La primera habilidad vital enemiga ha sido gastada. El Espacio se ha abierto. 
4. **STATE 3 — DPS:** Aphelios entra en rango y comienza a aplicar daño según su ventana permisible.
5. **STATE 4 — AGGRESSIVE DPS:** Los asesinos y amenazas de engage han desaparecido (están muertos o escaparon). Entras en *Layer 4* a borrar el mapa.
6. **STATE 5 — CLEANUP:** Persecución.

## 2. Target Selection (Matemática del Objetivo)
Elimina el pensamiento binario de "Tengo que matar al ADC enemigo". Como Aphelios (y como cualquier ADC), pegas a lo que la geometría te permita.

**Fórmula Conceptual de Target Score:**
`Valor = (Prioridad del Objetivo × Accesibilidad × Probabilidad de Kill) ÷ Riesgo Asumido`

* **Front-to-back:** Golpear al tanque que está en tu cara (Bajo Riesgo, Baja Prioridad, pero Alta Accesibilidad). Es la base del juego.
* **Threat Target:** Golpear a la amenaza principal que trata de entrar en tu zona (Ej: Un Kha'zix que saltó cerca).
* **Oportunistic Target:** Un ADC enemigo cruzó a la *Frontline* por error y puedes castigarlo en un instante.

## 3. Auto-Attack Permission System
Antes de cada click de autoataque, pregunta mentalmente: **"¿Tengo permiso para atacar?"**

1. **1-AA Window:** Puedes dar *un* disparo y debes retroceder instantáneamente (Poke con *Calibrum*).
2. **Short DPS Window:** Tienes 1-2 segundos. El enemigo está bajo CC corto. Entras, pegas 3 veces, sales.
3. **Full DPS Window:** Un tanque falló su iniciación principal. Tienes unos 4-5 segundos de vía libre.
4. **All-in DPS Window:** La amenaza de *One-Shot* (Muerte súbita) ha sido eliminada por tu equipo. Puedes gastar todos tus recursos ofensivos.

## 4. Flash Economy
El Destello (Flash) no es solo un botón de escape. Es una herramienta de manipulación de la geometría del mapa.

* **Positioning With Flash:** Tienes Flash activo. Puedes permitirte jugar agresivamente en la *Layer 3*, sabiendo que si el enemigo usa un recurso extremo para alcanzarte, puedes anularlo de un click.
* **Positioning Without Flash:** Tu Threat Zone se infla enormemente. Zonas enteras del mapa se vuelven radiactivas y prohíbidas. 
* **Anticipación (Pre-Flash) vs Reacción:** Contra habilidades como la `R` de Malphite, a distancia media no confíes en tu reacción visual humana. Si él entra en rango y detiene su movimiento, haz *Flash* preventivo. Si esperas a ver la animación visual de la embestida a corta distancia, morirás por la latencia humana.

## 5. Damage Greed (Avaricia de Daño) y Survival Value
**"Un autoataque más."** Es la frase que destruye el 90% de las partidas en Elo bajo.

* **Bad Greed:** Perseguir a un soporte que escapa a 100 de vida hacia la niebla de guerra, atravesando una *Threat Zone* sin visión. Si el jungla enemigo te mata, tu equipo pierde el Barón. Intercambiaste el objetivo de la partida por 300 de oro inútil.
* **Calculated Greed:** Avanzar a la zona de peligro temporalmente sabiendo que el *Cleanse* (Purificar) de tu support de Thresh y tu *Flash* te permitirán sobrevivir la trampa.
* **Survival Value Matemático:**
  - *Opción A:* Dar 3 ataques básicos extras (arriesgándote al límite) -> Resultado: Mueres. Infligiste 1000 de daño.
  - *Opción B:* Retrocedes (perdiendo 2 segundos de DPS pasivo). Esperas que el asesino se rinda. Vuelves y atacas durante 10 segundos. Resultado: Infligiste 4000 de daño sostenido y estás vivo para tomar la torre. 
  - **La paciencia es el arma con más DPS del juego.**

[⬅️ Volver al Índice Principal](../README.md)
