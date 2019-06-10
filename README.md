# rollup-plugin-jsdoc

[![Build Status](https://travis-ci.org/fralonra/rollup-plugin-jsdoc.svg?branch=master)](https://travis-ci.org/fralonra/rollup-plugin-jsdoc)
[![npm version](https://img.shields.io/npm/v/rollup-plugin-jsdoc.svg)](https://www.npmjs.com/package/rollup-plugin-jsdoc)

Rollup plugin of [JSDoc](https://jsdoc.app/), generating an API documentation for your library.

## Installation

```bash
npm install -D rollup-plugin-jsdoc
```

## Usage

```js
// rollup.config.js
import jsdoc from 'rollup-plugin-jsdoc';

export default {
  input: './src/index.js',
  plugins: [
    jsdoc({
      args: ['-d', 'doc'],  // Command-line options passed to JSDoc, Note: use "config" to indicate configuration file, do not use "-c" or "--configure" in "args"
      config: 'jsdoc.config.json',  // Path to the configuration file for JSDoc. Default: jsdoc.json
    })
  ]
};
```

## License

MIT