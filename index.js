const LZW = require('node-lzw');
const { PPM } = require('compressjs');

/**
 * Encode the given buffer.
 *
 * @param  {Buffer}  buffer
 * @return {Buffer}
 */
exports.encode = (buffer) => {
  const content = buffer.toString('utf8');
  const encoded = Buffer.from(LZW.encode(content), 'utf8');

  return PPM.compressFile(encoded);
};

/**
 * Decode the given buffer.
 *
 * @param  {Buffer}  buffer
 * @return {Buffer}
 */
exports.decode = (buffer) => {
  const decoded = PPM.decompressFile(buffer);
  const content = Buffer.from(decoded).toString('utf8');

  return Buffer.from(LZW.decode(content), 'utf8');
};
