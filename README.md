# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Translation

For each time there is a new content in the website, copy the Markdown files from
the original directory into the corresponding locale directory in [`i18n`](./i18n/en/)
directory. The Markdown files from [`docs`](./docs/) must be copied into
[`docusaurus-plugin-content-docs`](./i18n/en/docusaurus-plugin-content-docs/).
Similarly, the Markdown files from [`assignments`](./assignments/) must be copied into
[`docusaurus-plugin-content-assignments`](./i18n/en/docusaurus-plugin-content-docs-assignments/).
The translator then may begin translating the document in [`i18n`](./i18n/en/)
directory.

To live preview the changes made in the English locale directory, use the
following command:

```
$ yarn start-en
```

This command starts a local development server that renders the Markdown files
in the English locale directory instead of the default Indonesian version.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
