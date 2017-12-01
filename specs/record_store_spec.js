let assert = require('assert');
let RecordStore = require('../source/record_store');

describe('Record Store', function() {
  let recordStore;

  beforeEach(function() {
    recordStore = new RecordStore('Big Al\'s', 'Glasgow');
  });

  it('should have a name', function() {
    assert.strictEqual(recordStore.name, 'Big Al\'s');
  });

  it('should have a city', function() {
    assert.strictEqual(recordStore.city, 'Glasgow');
  });
  it('should have an inventory');
  it('should have a balance');
});
