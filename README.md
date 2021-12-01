# Ticket templates

This <ins>**public**</ins> repository hosts a small website which helps with writing the text for development tickets.

## Features

- The website is rendering a Markdown editor with a template for the selected ticket type.
- The user is expected to edit the text on the website and eventually copy it into a project management tool which supports Markdown.
- Templates for user stories, bugs, APIs, and generic tasks are available.

## Development

### Dependencies

To work on the website, you need to have the current [LTS version of NodeJS](https://nodejs.org/en/download/) installed on your laptop.

### Start app

To start the development server, clone the repository, install the dependencies, and then call the `start` task.

```shell
git clone git@github.com:ePages-de/ticket-templates.git
# https://github.com/ePages-de/ticket-templates.git
cd google-app
npm install
npm start
```

Then, the app will be accessible at http://localhost:3000 .

### Update the templates

To update the text for the templates, edit the Markdown files in [`src/templates`](./src/templates).

## Deployment

### Publish to GitHub Pages

Every commit in the repository triggeres the "Build & deploy" action defined in [`gh-pages.yaml`](.github/workflows/gh-pages.yaml).

If you want to trigger the deployment to GitHub Pages manually, you could do so by calling the `deploy` task.

```
npm run deploy
```

## Copyright

© ePages GmbH 2021. All rights reserved.

