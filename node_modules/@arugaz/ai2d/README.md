<div align="center">
  <a href="https://github.com/arugaz"><img width="90%" src="https://raw.githubusercontent.com/arugaz/ArugaZ/d813ebf4caf9f2855451b81fa6f539254210e64d/assets/ai2d.svg" /></a>
</div>
<div align="center">

[![npm version](https://img.shields.io/npm/v/@arugaz/ai2d.svg?style=flat-square)](https://npmjs.org/package/@arugaz/ai2d)
[![install size](https://img.shields.io/badge/dynamic/json?url=https://packagephobia.com/v2/api.json?p=@arugaz/ai2d&query=$.install.pretty&label=install%20size&style=flat-square)](https://packagephobia.now.sh/result?p=@arugaz/ai2d)
[![npm downloads](https://img.shields.io/npm/dm/@arugaz/ai2d.svg?style=flat-square)](https://npm-stat.com/charts.html?package=@arugaz/ai2d)

</div>
<div align="center">
Generate a hyper-realistic photo an anime style!
</div>

## Table of Contents

- [Features](#features)
- [Installing](#install)
- [Usage](#usage)
- [License](#license)

## Features

- Generate a hyper-realistic photo an anime style

## Install

```
$ npm install --save @arugaz/ai2d
$ yarn add @arugaz/ai2d
```

> **Before use this package, You have to add [sharp](https://www.npmjs.com/package/sharp) or [jimp](https://www.npmjs.com/package/jimp) to dependencies.**

## Usage

```js
import AI2D from "@arugaz/ai2d";

await AI2D(`Buffer | Base64 | Url | Path`, options);

// default
await AI2D("https://nekopoi.care/image.png"); //=> Buffer

// crop
await AI2D("https://nekopoi.care/image.png", {
  crop: "SINGLE", // SINGLE | COMPARED
}); //=> Buffer

// proxy
await AI2D("https://nekopoi.care/image.png", {
  proxy: {
    url: "http://101.32.184.53:3128",
    chinese: true,
    image: false,
  }, // support http & socks
}); //=> Buffer

// with async-retry opts
await AI2D("https://nekopoi.care/image.png", {
  crop: "COMPARED",
  retries: 100,
  factor: 3,
  randomize: false,
}); //=> Buffer
```

### Options

The `options` are

- `crop`: COMPARED | SINGLE. Default didnt crop the image.
- `proxy`: Support http?s or socks proxy
  - `url`: Your proxy url.
  - `chinese`: Boolean, is your proxy from chinese?
  - `image`: Boolean, download the image with proxy?
- `retries`: The maximum amount of times to retry the operation. Default is `10`.
- `factor`: The exponential factor to use. Default is `1`.
- `minTimeout`: The number of milliseconds before starting the first retry. Default is `1000`.
- `maxTimeout`: The maximum number of milliseconds between two retries. Default is `Infinity`.
- `randomize`: Randomizes the timeouts by multiplying with a factor between `1` to `2`. Default is `true`.
- `onRetry`: an optional `Function` that is invoked after a new retry is performed. It's passed the `Error` that triggered it as a parameter.
- `forever`: Whether to retry forever.
- `unref`: Whether to [unref](https://nodejs.org/api/timers.html#timers_unref) the setTimeout's.

### Tldr

> From `December 6` to `December 15` the AI had been available only in `China` or with `Chinese proxies`.
> Since `December 16` the AI `works` for the rest of the world (UPD: still doesn't work in some countries) again so using proxies is not needed anymore, but it's limited and allows you to generate only one type of media.
> Seems like `it's impossible` to find `FREE alive proxies`. Don't waste your time searching and `just buy it` somewhere.

## License

[MIT](https://gitlab.com/arugaz/ai2d/blob/main/LICENSE)
