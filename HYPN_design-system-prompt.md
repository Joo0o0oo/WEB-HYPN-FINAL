# HYPN — Design System Prompt
> Pasale este archivo completo a cualquier IA para que reproduzca la estética visual del proyecto HYPN con exactitud. Incluye los dos modos visuales del sistema.

---

## IDENTIDAD DEL PROYECTO

HYPN es una plataforma digital con temática onírica — sueños, mercado de sueños, IA conversacional. Tiene **dos modos visuales** que conviven en el mismo proyecto:

- **Light Mode** → Páginas institucionales / marketing (Home, Suscripciones, Experiencias, Mercado, Tecnología). Limpio, editorial, moderno. Como una fintech de lujo.
- **Dark Mode** → Páginas de producto / app (Sleep Stock, Fever IA, Constelación Onírica). Espacial, técnico, inmersivo. Como un dashboard cripto en el espacio.

El color de marca `#8A38F5` (violeta HYPN) es el único acento en **ambos modos**.

---

# MODO LIGHT — Páginas institucionales

## Paleta Light

```
Fondo principal:     #ffffff         ← blanco puro
Fondo con aura:      radial-gradient(ellipse at 75% 40%, rgba(138,56,245,.07) 0%, transparent 55%), #fff
Fondo card:          #ffffff         ← blanco, con borde o sombra
Fondo card alt:      #f9f8ff         ← blanco con tinte lavanda muy sutil

Texto principal:     #0a0a0f         ← negro casi puro
Texto secundario:    #555566         ← gris oscuro
Texto terciario:     #8888a0         ← gris medio, placeholders, labels
Texto desactivado:   #bbbbcc

Acento primario:     #8A38F5         ← violeta HYPN, usado para highlights y CTAs
Acento hover:        #7B2BE0
Acento suave:        rgba(138,56,245,.08)   ← fondo de tags y badges

Borde sutil:         rgba(0,0,0,.07)
Borde medio:         rgba(0,0,0,.12)
Borde violeta:       rgba(138,56,245,.2)

Verde (live/ok):     #22c55e
```

## Tipografía Light

Las fuentes son las mismas que en dark mode. Importar:
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet"/>
```

```
Space Grotesk  → Logo, nav, títulos hero, nombres
Inter          → Cuerpo, descripciones, labels
JetBrains Mono → Datos, precios, números técnicos
```

### Escala Light
```
Logo "HYPn":         32–40px  Space Grotesk 700, color #0a0a0f
Nav items:           12px     Space Grotesk 600–700, UPPERCASE, letter-spacing .08em, color #888
Nav item active:     color #0a0a0f, underline sólido 2px #0a0a0f abajo
Hero title:          56–80px  Space Grotesk 800–900 o Inter 800, color #0a0a0f, line-height 1
Hero accent word:    mismo tamaño, color #8A38F5 (el violeta HYPN)
Subtítulo hero:      16–18px  Inter 400, color #555566, line-height 1.6
Body:                14–15px  Inter 400, color #555566
Label sección:       10–11px  Space Grotesk 700, UPPERCASE, letter-spacing .12em, color #8888a0
Datos / monospace:   13–16px  JetBrains Mono 600
```

### Regla tipográfica clave — Light
El hero siempre tiene **dos capas**: las primeras líneas en negro pesado `#0a0a0f`, y la última línea o la palabra de mayor impacto en violeta `#8A38F5`. Ambas en el mismo tamaño y weight. Esto es la firma visual del proyecto.

Ejemplo:
```
EXPERIENCIAS DE
SUEÑO QUE
[GENERAN VALOR]  ← esta línea en #8A38F5
```

## Componentes Light

### Nav / Header
```css
position: sticky; top: 0; z-index: 100;
background: rgba(255,255,255,.92);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(0,0,0,.06);
height: 56–64px;
padding: 0 32–48px;
display: flex; align-items: center; gap: 40px;

/* Logo */
font-family: 'Space Grotesk'; font-size: 28px; font-weight: 700; color: #0a0a0f;

/* Nav links */
font-size: 12px; font-weight: 700; text-transform: uppercase;
letter-spacing: .08em; color: #8888a0;
text-decoration: none; padding-bottom: 4px;
transition: color .2s;

/* Nav link active */
color: #0a0a0f;
border-bottom: 2px solid #0a0a0f;

/* Nav link hover */
color: #0a0a0f;
```

### Botón primario (CTA principal)
```css
background: #0a0a0f;       ← negro, NO violeta — así se ve en el home
color: #ffffff;
border: none;
border-radius: 100px;      ← siempre pill
font-family: 'Space Grotesk', sans-serif;
font-size: 14px; font-weight: 700;
padding: 14px 28px;
cursor: pointer;
transition: background .2s, transform .2s;

/* hover */
background: #1a1a2e;
transform: scale(1.02);
```

### Botón secundario (text link con flecha)
```css
background: none; border: none;
font-size: 14px; font-weight: 500; color: #0a0a0f;
cursor: pointer;
display: flex; align-items: center; gap: 6px;

/* Incluye → o > al final */
/* hover: color #8A38F5 */
```

### Botón outline violeta
```css
background: transparent;
border: 1.5px solid #8A38F5;
border-radius: 100px;
color: #8A38F5;
font-size: 13px; font-weight: 700;
padding: 10px 22px;

/* hover */
background: rgba(138,56,245,.08);
```

### Cards (Light)
```css
background: #ffffff;
border: 1px solid rgba(0,0,0,.08);
border-radius: 16–20px;
padding: 20–28px;
box-shadow: 0 4px 24px rgba(138,56,245,.08), 0 1px 4px rgba(0,0,0,.06);

/* Card hover */
box-shadow: 0 8px 40px rgba(138,56,245,.14), 0 2px 8px rgba(0,0,0,.08);
transform: translateY(-2px);
transition: all .25s ease;
```

### Tags / Pills (Light)
```css
padding: 4px 12px;
border-radius: 100px;
font-size: 11px; font-weight: 700; letter-spacing: .06em;
text-transform: uppercase;
background: rgba(138,56,245,.08);
border: 1px solid rgba(138,56,245,.2);
color: #8A38F5;

/* Tag vivo (con punto verde) */
background: rgba(34,197,94,.1);
border-color: rgba(34,197,94,.3);
color: #16a34a;
/* + punto: width:6px height:6px border-radius:50% background:#22c55e */
```

### Inputs (Light)
```css
background: #fff;
border: 1.5px solid rgba(0,0,0,.12);
border-radius: 10px;
padding: 12px 16px;
font-size: 14px; color: #0a0a0f;
outline: none;
transition: border-color .2s;

/* placeholder */
color: #8888a0;

/* focus */
border-color: #8A38F5;
box-shadow: 0 0 0 3px rgba(138,56,245,.1);
```

### Charts / Gráficos (Light)
```css
/* Línea del chart */
stroke: #8A38F5; stroke-width: 2; fill: none;
stroke-linecap: round; stroke-linejoin: round;

/* Área bajo la línea */
fill: url(#grad); /* gradiente de rgba(138,56,245,.15) → transparent */

/* Puntos en la línea */
fill: #8A38F5; stroke: #fff; stroke-width: 2; r: 5–6px;

/* Ejes y grid */
stroke: rgba(0,0,0,.06); stroke-width: 1;

/* Labels del chart */
font-size: 11px; fill: #8888a0; font-family: 'Inter';
```

### Aura / Gradiente de fondo (Light)
```css
/* Elemento decorativo en esquina superior derecha — característico del home */
position: absolute; top: 0; right: 0;
width: 50%; height: 80%;
background: radial-gradient(ellipse at top right, rgba(138,56,245,.1) 0%, transparent 65%);
pointer-events: none;
```

### Nav lateral (scroll indicator — característica del home)
```css
/* Línea vertical fina + dots en el lado izquierdo */
position: fixed; left: 20–32px; top: 50%; transform: translateY(-50%);

/* Línea */
width: 1px; height: 120px; background: rgba(0,0,0,.1);

/* Dot activo */
width: 6px; height: 6px; border-radius: 50%;
background: #8A38F5;

/* Números de sección */
font-size: 10px; font-weight: 700; color: #8888a0;
font-family: 'JetBrains Mono'; letter-spacing: .1em;
```

---

# MODO DARK — Páginas de producto/app

## Paleta Dark

```
Fondo base:     #07050f   ← negro profundo con tinte índigo
Texto:          #ffffff   ← blanco puro
Acento:         #8A38F5 / #9d50ff / #b96fff   ← mismo violeta, distintos niveles
```

*(El Dark Mode completo ya está documentado en la sección original del archivo — ver abajo)*

---

# REGLAS QUE APLICAN A AMBOS MODOS

## El color violeta HYPN
`#8A38F5` es el único color de marca. Siempre el mismo hex, en ambos modos. Solo cambia su uso: en light es el acento editorial principal; en dark es el borde, glow y elemento técnico.

## Tipografía — siempre las mismas 3 fuentes
Space Grotesk + Inter + JetBrains Mono. Sin excepciones.

## Border-radius
```
Pill / botones:    border-radius: 100px
Cards grandes:     border-radius: 16–20px
Cards pequeñas:    border-radius: 10–12px
Inputs:            border-radius: 10–12px
Avatares / logos:  border-radius: 50% o 10px
```

## Animaciones
```css
/* Transición base */
transition: all .25s cubic-bezier(.4, 0, .2, 1);

/* Fade-in de página */
html { opacity: 0; transition: opacity .4s ease; }
html.ready { opacity: 1; }
/* JS: setTimeout(() => document.documentElement.classList.add('ready'), 30) */

/* Hover en cards */
transform: translateY(-2px);

/* Hover en botones */
transform: scale(1.02–1.05);
```

## Anti-aliasing
```css
body { -webkit-font-smoothing: antialiased; }
```

---

# CSS VARIABLES — AMBOS MODOS

```css
/* LIGHT MODE */
:root {
  --bg: #ffffff;
  --bg-card: #ffffff;
  --bg-aura: rgba(138,56,245,.07);

  --t0: #0a0a0f;          /* texto principal */
  --t60: #555566;         /* texto secundario */
  --t40: #8888a0;         /* texto terciario */
  --t20: rgba(0,0,0,.12); /* bordes */

  --p:   #8A38F5;         /* violeta HYPN */
  --ph:  #7B2BE0;         /* violeta hover */
  --ps:  rgba(138,56,245,.08); /* violeta suave bg */

  --border: rgba(0,0,0,.08);
  --shadow: 0 4px 24px rgba(138,56,245,.08), 0 1px 4px rgba(0,0,0,.06);

  --green: #22c55e;

  --f-head: 'Space Grotesk', sans-serif;
  --f-body: 'Inter', sans-serif;
  --f-mono: 'JetBrains Mono', monospace;
  --ease: cubic-bezier(.4, 0, .2, 1);
  --t: .25s;
}

/* DARK MODE */
.dark, [data-theme="dark"] {
  --bg: #07050f;
  --bg-card: rgba(255,255,255,.03);

  --t0: #ffffff;
  --t60: rgba(255,255,255,.60);
  --t40: rgba(255,255,255,.40);
  --t20: rgba(255,255,255,.20);
  --t10: rgba(255,255,255,.10);

  --p4: #8A38F5;
  --p5: #9d50ff;
  --p6: #b96fff;

  --border: rgba(138,56,245,.20);
  --border-h: rgba(138,56,245,.45);
  --shadow: none; /* en dark no hay sombras, solo bordes */

  --green: #22c55e;
  --red: #f87171;
}
```

---

# TEMPLATE BASE — LIGHT MODE

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>HYPN — [Nombre de sección]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #ffffff;
      --p: #8A38F5;
      --t0: #0a0a0f;
      --t60: #555566;
      --t40: #8888a0;
      --border: rgba(0,0,0,.08);
      --shadow: 0 4px 24px rgba(138,56,245,.08), 0 1px 4px rgba(0,0,0,.06);
      --f-head: 'Space Grotesk', sans-serif;
      --f-body: 'Inter', sans-serif;
      --f-mono: 'JetBrains Mono', monospace;
      --ease: cubic-bezier(.4, 0, .2, 1);
    }
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { opacity: 0; transition: opacity .4s ease; }
    html.ready { opacity: 1; }
    body {
      background: var(--bg);
      color: var(--t0);
      font-family: var(--f-body);
      -webkit-font-smoothing: antialiased;
    }
  </style>
</head>
<body>
  <!-- Nav -->
  <nav style="position:sticky;top:0;z-index:100;background:rgba(255,255,255,.92);backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,.06);height:60px;display:flex;align-items:center;padding:0 40px;gap:40px;">
    <span style="font-family:var(--f-head);font-size:26px;font-weight:700;color:var(--t0);">HYPn</span>
    <a href="#" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--t0);text-decoration:none;border-bottom:2px solid var(--t0);padding-bottom:2px;">HOME</a>
    <a href="#" style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--t40);text-decoration:none;">SUSCRIPCIONES</a>
    <!-- más links... -->
  </nav>

  <!-- Hero -->
  <section style="min-height:90vh;display:flex;align-items:center;padding:0 80px;position:relative;overflow:hidden;">
    <!-- Aura decorativa -->
    <div style="position:absolute;top:0;right:0;width:55%;height:100%;background:radial-gradient(ellipse at top right,rgba(138,56,245,.1) 0%,transparent 65%);pointer-events:none;"></div>

    <div style="max-width:600px;position:relative;z-index:1;">
      <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--t40);margin-bottom:24px;">— EL INCONSCIENTE ES EL NUEVO ACTIVO</p>
      <h1 style="font-family:var(--f-head);font-size:72px;font-weight:800;line-height:1;color:var(--t0);margin-bottom:24px;">
        EXPERIENCIAS DE<br>SUEÑO QUE<br>
        <span style="color:var(--p);">GENERAN VALOR</span>
      </h1>
      <p style="font-size:17px;color:var(--t60);line-height:1.6;margin-bottom:40px;">
        Transformá tu actividad onírica en crecimiento personal, creatividad e insights accionables
      </p>
      <div style="display:flex;align-items:center;gap:20px;">
        <button style="background:#0a0a0f;color:#fff;border:none;border-radius:100px;font-family:var(--f-head);font-size:14px;font-weight:700;padding:14px 28px;cursor:pointer;">Explorar suscripciones ›</button>
        <button style="background:none;border:none;font-size:14px;font-weight:500;color:var(--t0);cursor:pointer;">Cómo funciona →</button>
      </div>
    </div>
  </section>

  <script>
    setTimeout(() => document.documentElement.classList.add('ready'), 30);
  </script>
</body>
</html>
```

---

# TEMPLATE BASE — DARK MODE

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>HYPN — [Nombre de sección]</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet"/>
  <style>
    :root {
      --bg: #07050f;
      --p4: #8A38F5; --p5: #9d50ff; --p6: #b96fff;
      --t0: #fff; --t60: rgba(255,255,255,.6); --t40: rgba(255,255,255,.4); --t20: rgba(255,255,255,.2);
      --border: rgba(138,56,245,.20); --border-h: rgba(138,56,245,.45);
      --green: #22c55e; --red: #f87171;
      --f-head: 'Space Grotesk', sans-serif;
      --f-body: 'Inter', sans-serif;
      --f-mono: 'JetBrains Mono', monospace;
      --ease: cubic-bezier(.4, 0, .2, 1);
    }
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
    html { opacity: 0; transition: opacity .4s ease; }
    html.ready { opacity: 1; }
    body {
      background: var(--bg);
      color: var(--t0);
      font-family: var(--f-body);
      -webkit-font-smoothing: antialiased;
    }
  </style>
</head>
<body>
  <!-- contenido dark -->
  <script>
    setTimeout(() => document.documentElement.classList.add('ready'), 30);
  </script>
</body>
</html>
```

---

## CUÁNDO USAR CADA MODO

| Sección | Modo |
|---|---|
| Home | Light |
| Suscripciones | Light |
| Experiencias | Light |
| Mercado (institucional) | Light |
| Tecnología | Light |
| Sleep Stock (app) | Dark |
| Fever / Constelación IA | Dark |
| Cualquier dashboard / datos en vivo | Dark |
| Onboarding / formularios | Light |

---

*Design system generado a partir del código fuente real del proyecto HYPN.*
