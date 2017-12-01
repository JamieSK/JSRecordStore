let assert = require('assert');
let Record = require('../source/record');

describe('Record', function() {
  let record;

  beforeEach(function() {
    record = new Record('Alex Cameron', 'Jumping the Shark', 'Alt-Rock', 15);
  });

  it('should have an artist', function() {
    assert.strictEqual(record.artist, 'Alex Cameron');
  });

  it('should have a title', function() {
    assert.strictEqual(record.title, 'Jumping the Shark');
  });
  it('should have a genre');
  it('should have an price');
});
