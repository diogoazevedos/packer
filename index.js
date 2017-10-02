const { PPM } = require('compressjs');

exports.encode = PPM.compressFile;

exports.decode = PPM.decompressFile;
