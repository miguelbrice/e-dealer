# MIGUELBRICE | Landing para GitHub Pages

Landing page estática multilingüe, lista para publicar en GitHub Pages sin backend ni build step.

## Conteúdo

- `index.html`: landing principal y presentación de la marca
- `services.html`: sesiones de introducción en front-end, back-end y cybersecurity
- `work.html`: página de oportunidades profesionales
- `contact.html`: canales directos, perfiles y proyectos
- `assets/css/main.css`: sistema visual, layout y responsive
- `assets/css/components.css`: componentes complementarios
- `assets/js/router.js`: transición animada entre páginas
- `assets/js/app.js`: traducciones, selector de idioma y contacto
- `assets/images/hero-laptop.jpeg`: imagen principal del hero

## Publicação no GitHub Pages

1. Envie os arquivos para o repositório.
2. Abra as configurações do repositório no GitHub.
3. Em Pages, escolha a branch `main` e a pasta raiz.
4. Salve e aguarde a publicação.

## Observações

- El selector permite portugués, inglés, español, chino, ruso, alemán, francés, italiano y árabe libanés.
- La navegación tiene animación de salida y entrada entre páginas.
- El idioma seleccionado se conserva con `localStorage`.

## Estrutura

```text
/
├── assets/
│   ├── css/
│   │   ├── components.css
│   │   └── main.css
│   ├── images/
│   │   └── hero-laptop.jpeg
│   └── js/
│       ├── app.js
│       └── router.js
├── contact.html
├── index.html
├── services.html
└── work.html
```
