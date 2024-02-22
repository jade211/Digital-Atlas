// jest.setup.js

// Mock the TextDecoder object to prevent ReferenceError during tests
if (typeof global.TextDecoder === 'undefined') {
    global.TextDecoder = require('util').TextDecoder;
  }