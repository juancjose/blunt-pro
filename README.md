# BLUNT — Pro

Rediseño de galería para **BLUNT**, galería de arte online de Buenos Aires. Sitio estático en GitHub Pages; el catálogo vivo sigue en https://blunt-gallery.vercel.app/.

**En vivo:** https://juancjose.github.io/blunt-pro/

## Dirección de diseño
*White cube*: blanco de museo, serif clásica (Cormorant Garamond) a escala monumental, grotesca Manrope, salas numeradas, obras con passepartout y sombra de pared, un único acento bermellón.

## Destacado
- **Enmarcador en vivo**: marco (negro/roble/blanco/dorado), passepartout y obra sobre un ambiente real.
- Carrusel con scroll-snap y flechas, muro masonry de clásicos de dominio público (no a la venta), artistas en B/N que toman color al pasar.
- Imágenes extraídas de SVG con JPEG embebido → WebP responsivo (de ~2,5 MB a <1,7 MB en total).
- JSON-LD `ArtGallery`, OG, sitemap, accesible (botones con `aria-pressed`, foco visible, `prefers-reduced-motion`).

## Placeholders
- WhatsApp `5491100000000` y `hola@blunt.com`. Las fichas de cada obra (título, artista, medidas, precio) se leen del catálogo en vivo.

## Performance
- Fuentes self-hosted (woff2, subset latin) con `preload`: sin dependencias de terceros en el render.
- Imágenes WebP con `srcset`/`sizes`, `width`/`height` explícitos (CLS ≈ 0) y `fetchpriority` en la imagen principal.
