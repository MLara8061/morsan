# 🚀 Landing Page - Agencia de Seguridad Privada

Landing page profesional para agencia de seguridad privada construida con **[Astro 5.0](https://astro.build/)**, **React**, **[Tailwind CSS](https://tailwindcss.com/)** y **Swiper**.

## ✨ Características principales

- ✅ **Hero Slider** interactivo con Swiper (autoplay, navegación, responsive)
- ✅ **Production-ready** - Build estático optimizado para Hostinger
- ✅ **SEO optimizado** con metadatos personalizados
- ✅ **Paleta profesional** - Azul profundo/grafito + acento ámbar
- ✅ **Trust badges** - 24/7, +500 clientes, 15+ años experiencia
- ✅ **Image Optimization** automática por Astro
- ✅ **Responsive design** - Móvil, tablet, desktop
- ✅ **TypeScript** para código más robusto

<br>

## 🎨 Stack Tecnológico

- **Astro** 5.0 - Framework estático de alto rendimiento
- **React** 19 - Componente slider interactivo
- **TailwindCSS** - Estilos utility-first
- **Swiper** - Slider hero de imágenes con autoplay
- **TypeScript** - Tipado estático

<br>

<details open>
<summary>Table of Contents</summary>

## 🛠️ Comandos

```bash
# Desarrollo local (http://localhost:4321)
npm run dev

# Build para producción (genera carpeta dist/)
npm run build

# Preview del build local
npm run preview
```

## 📦 Despliegue en Hostinger

### Hosting Compartido (recomendado para esta landing)

1. **Build del proyecto:**
   ```bash
   npm run build
   ```

2. **Subir archivos:** Sube todo el contenido de la carpeta `dist/` a `public_html/` usando:
   - FTP (FileZilla, WinSCP)
   - Git deploy desde hPanel
   - File Manager de Hostinger

3. **Configurar dominio:** 
   - Apunta el dominio en hPanel
   - Activa HTTPS (Let's Encrypt gratuito)

4. **Formularios de contacto:**
   - Crear endpoint PHP en `public_html/api/form.php`
   - O usar servicio externo (Formspree, Getform)

## 🎨 Personalización

### 1. Cambiar slides del hero

Edita [src/components/widgets/SliderHero.tsx](src/components/widgets/SliderHero.tsx):

```tsx
const slides = [
  {
    title: 'Tu título personalizado',
    desc: 'Tu descripción',
    cta: 'Texto del botón',
    img: 'URL de tu imagen',
  },
  // Añade más slides aquí
];
```

### 2. Reemplazar imágenes

Las imágenes actuales son placeholders de Unsplash. Reemplázalas con fotos profesionales del cliente:
- Personal uniformado
- Instalaciones / vehículos
- Operaciones / monitoreo

### 3. Actualizar teléfono de contacto

En [SliderHero.tsx](src/components/widgets/SliderHero.tsx) línea ~74:

```tsx
href="tel:+525512345678"  // Cambia al número real
```

### 4. Personalizar colores

La paleta actual (azul profundo + ámbar) está en clases Tailwind:
- `bg-slate-950` - Fondo oscuro principal
- `text-amber-400` - Acentos y badges
- `bg-amber-500` - Botones CTA principales

### 5. Metadata SEO

Edita [src/pages/index.astro](src/pages/index.astro):

```ts
const metadata = {
  title: 'Tu título personalizado | Nombre Empresa',
  description: 'Descripción optimizada para SEO (máx. 160 caracteres)',
};
```

## 📁 Estructura del Proyecto

```
├── src/
│   ├── components/
│   │   └── widgets/
│   │       ├── SliderHero.tsx     ← Nuevo componente slider
│   │       ├── Features.astro     ← Secciones de servicios
│   │       ├── FAQs.astro         ← Preguntas frecuentes
│   │       └── CallToAction.astro ← CTA final
│   ├── pages/
│   │   └── index.astro            ← Página principal (modificada)
│   ├── layouts/
│   ├── assets/
│   └── config.yaml                ← Configuración global
├── public/
│   └── images/                     ← Añade imágenes aquí
└── dist/                           ← Build estático (subir a Hostinger)
```

## 📝 Próximos pasos sugeridos

- [ ] Reemplazar imágenes placeholder por fotos reales del cliente
- [ ] Actualizar número de teléfono en CTAs
- [ ] Personalizar secciones Features (servicios ofrecidos)
- [ ] Configurar formulario de contacto
- [ ] Ajustar trust badges (24/7, +500 clientes, etc.) con datos reales
- [ ] Añadir testimonios de clientes
- [ ] Configurar Google Analytics
- [ ] Dominio personalizado y SSL en Hostinger

## 🔗 Recursos

- [Documentación Astro](https://docs.astro.build)
- [Swiper React](https://swiperjs.com/react)
- [TailwindCSS Docs](https://tailwindcss.com/docs)
- [AstroWind Original](https://github.com/onwidget/astrowind)

---

**✅ Proyecto listo para desplegar** 🚀

Build generado exitosamente en `/dist/`. Sube el contenido a tu hosting Hostinger y personaliza con los datos del cliente.

| `npm run fix`       | Run Eslint and format codes with Prettier          |
| `npm run astro ...` | Run CLI commands like `astro add`, `astro preview` |

<br>

### Configuration

Basic configuration file: `./src/config.yaml`

```yaml
site:
  name: 'Example'
  site: 'https://example.com'
  base: '/' # Change this if you need to deploy to Github Pages, for example
  trailingSlash: false # Generate permalinks with or without "/" at the end

  googleSiteVerificationId: false # Or some value,

# Default SEO metadata
metadata:
  title:
    default: 'Example'
    template: '%s — Example'
  description: 'This is the default meta description of Example website'
  robots:
    index: true
    follow: true
  openGraph:
    site_name: 'Example'
    images:
      - url: '~/assets/images/default.png'
        width: 1200
        height: 628
    type: website
  twitter:
    handle: '@twitter_user'
    site: '@twitter_user'
    cardType: summary_large_image

i18n:
  language: en
  textDirection: ltr

apps:
  blog:
    isEnabled: true # If the blog will be enabled
    postsPerPage: 6 # Number of posts per page

    post:
      isEnabled: true
      permalink: '/blog/%slug%' # Variables: %slug%, %year%, %month%, %day%, %hour%, %minute%, %second%, %category%
      robots:
        index: true

    list:
      isEnabled: true
      pathname: 'blog' # Blog main path, you can change this to "articles" (/articles)
      robots:
        index: true

    category:
      isEnabled: true
      pathname: 'category' # Category main path /category/some-category, you can change this to "group" (/group/some-category)
      robots:
        index: true

    tag:
      isEnabled: true
      pathname: 'tag' # Tag main path /tag/some-tag, you can change this to "topics" (/topics/some-category)
      robots:
        index: false

    isRelatedPostsEnabled: true # If a widget with related posts is to be displayed below each post
    relatedPostsCount: 4 # Number of related posts to display

analytics:
  vendors:
    googleAnalytics:
      id: null # or "G-XXXXXXXXXX"

ui:
  theme: 'system' # Values: "system" | "light" | "dark" | "light:only" | "dark:only"
```

<br>

#### Customize Design

To customize Font families, Colors or more Elements refer to the following files:

- `src/components/CustomStyles.astro`
- `src/assets/styles/tailwind.css`

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
npm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

#### Deploy to Netlify

Clone this repository on your own GitHub account and deploy it to Netlify:

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/arthelokyo/astrowind)

#### Deploy to Vercel

Clone this repository on your own GitHub account and deploy to Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farthelokyo%2Fastrowind)

<br>

## Frequently Asked Questions

- Why?
-
-

<br>

## Related projects

- [TailNext](https://tailnext.vercel.app/) - Free template using Next.js 14 and Tailwind CSS with the new App Router.
- [Qwind](https://qwind.pages.dev/) - Free template to make your website using Qwik + Tailwind CSS.

## Contributing

If you have any ideas, suggestions or find any bugs, feel free to open a discussion, an issue or create a pull request.
That would be very useful for all of us and we would be happy to listen and take action.

## Acknowledgements

Initially created by **Arthelokyo** and maintained by a community of [contributors](https://github.com/arthelokyo/astrowind/graphs/contributors).

## License

**AstroWind** is licensed under the MIT license — see the [LICENSE](./LICENSE.md) file for details.
