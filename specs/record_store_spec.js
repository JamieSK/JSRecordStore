let assert = require('assert');
let RecordStore = require('../source/record_store');
let Record = require('../source/record');

describe('Record Store', function() {
  let recordStore;
  let record;

  beforeEach(function() {
    recordStore = new RecordStore('Big Al\'s', 'Glasgow');
    record = new Record('Alex Cameron', 'Jumping the Shark', 'Alt-Rock', 15);
  });

  it('should have a name', function() {
    assert.strictEqual(recordStore.name, 'Big Al\'s');
  });

  it('should have a city', function() {
    assert.strictEqual(recordStore.city, 'Glasgow');
  });

  it('should have an inventory', function() {
    assert.deepStrictEqual(recordStore.inventory, []);
  });

  it('should have a balance', function() {
    assert.strictEqual(recordStore.balance, 0);
  });

  it('should be able to add a record', function() {
    recordStore.add(record);
    assert.deepStrictEqual(recordStore.inventory, [record]);
  });
});
