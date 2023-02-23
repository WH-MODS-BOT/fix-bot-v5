#!/usr/bin/env node

const path = require('path');
const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpegDir = path.dirname(ffmpegPath);
console.log(`${ffmpegDir}`);
