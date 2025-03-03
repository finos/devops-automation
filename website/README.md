# FINOS DevOps Automation Website

This website is built using [Docusaurus 3.7.0](https://docusaurus.io/), a modern static website generator.

In order to start working with Docusaurus, please read the [Getting Started guide](https://docusaurus.io/docs/installation) and browse through the following folders and files:
- `website` - contains the Node/React code to build the website
- `website/docusaurus.config.js` - contains the Docusaurus configuration; you'll need to edit this file.
- `website/static` - contains images, PDF and other static assets used in the website; if you add a `file.pdf` in this folder, it will be served as `https://<your_host>/file.pdf`.
- `docs` - contains the `.md` and `.mdx` files that are served as `https://<your_host>/<file_id>` ; the `file_id` is defined at the top of the file.

## Installation

```console
npm install
```

## Local Development

```console
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

[Netlify] (https://www.netlify.com/) is the default way to serve FINOS websites publicly. Find docs [here] (https://docs.netlify.com/configure-builds/get-started/).

You can configure Netlify using your own GitHub account, pointing to a personal repository (or fork); when adding a new site, please use the following configuration:
- Working directory: `website`
- Build command: `npm run build`
- Build directory: `website/build`

If you want to serve your website through `https://<project_name>.finos.org`, please email [help@finos.org](mailto:help@finos.org). To check a preview, visit https://project-blueprint.finos.org .

