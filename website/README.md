# FINOS DevOps Automation Website

This website is built using [Docusaurus 3](https://docusaurus.io/), a modern static website generator.

## Installation

```console
npm install
```

## Local Development

```console
npm start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```console
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

```console
npm run deploy
```

This command builds the website and pushes it to the `gh-pages` branch, which is then deployed to GitHub Pages.

## Upgrading Docusaurus

This website has been upgraded to Docusaurus v3. If you need to upgrade to a newer version in the future, follow these steps:

1. Update the Docusaurus dependencies in `package.json`
2. Run `npm install` to install the updated dependencies
3. Make any necessary changes to the configuration files
4. Test the website locally with `npm start`
5. Deploy the updated website with `npm run deploy`
