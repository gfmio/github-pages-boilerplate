# github-pages-boilerplate

A (fairly) minimal example of how to host a modern single page app on Github Pages.

See live at [github-pages-spa.gfm.io](https://github-pages-spa.gfm.io).

The idea for this setup comes from and part of the code base is based on [a minimal example by @rafrex](https://github.com/rafrex/spa-github-pages).

## Overview

This repository provides a working configuration for building a modern single page app using TypeScript, SCSS, React, react-router and webpack. `tslint` is set up and configured and so are `mocha` and `chai` as test suites. `webpack-dev-server` can be used during development for live reload. `Favicons, app icons, manifests and other static files are generated automatically. Webpack is configured for code splitting to enable better caching. All production assets are named to include a content hash for aggressive caching.

The `release` script is confiugured to lint the source code, run the tests, build a production build and push all generated output to the `gh-pages` branch, from which the app gets served on Github Pages. SSL should work out of the box, including with custom domains. "Nice URLs" are supported via a small hack enabling URL rewriting using a `404.html` page and then regular routing using `react-router`.

## Directory structure

* `config`: Contains all build config
* `src`: All source files and assets
* `src/app`: All TypeScript source code of the actual app
* `src/scss`: SCSS source code for the stylesheet (the webpack loaders that automatically compile and include the stylesheets are of course configured)
* `src/favicon/favicon.png`: The base graphic for all favicons and web app icons
* `src/html`: HTML files
* `src/html/404.html`: Helper file that fill receive all HTTP requests that do not resolve to an actual file in Github pages. It extracts the URL and redirects to the `index.html` with an appropriate URL parameter.
* `src/html/index.html`: The template of the actual entrypoint file to the app. It will process the URL parameter from `404.html`, if present, and rewrite it to the original URL in the URL bar in the browser. It then loads the single page app, which will display the desired page.
* `src/assets`: For image assets and similar
* `src/CNAME`: The CNAME file containing the custom URL to use with Github pages.
* `src/.nojekyll`: Helper file to disable Jekyll on Github Pages.

## Commands

...

## To Do

* Better design
* Write the README / docs
* Add docs to actual page
* Add development and set up branch protection

## License: MIT
