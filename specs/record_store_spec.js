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

  it('should have a method to list it\'s inventory', function() {
    let expected = '1: Jumping the Shark by Alex Cameron, Alt-Rock, £15\n';
    recordStore.add(record);
    assert.strictEqual(recordStore.listInventory(), expected);
  });

  it('should be able to sell a record', function() {
    recordStore.add(record);
    assert.strictEqual(recordStore.sell(record), record);
    assert.strictEqual(recordStore.balance, 15);
    assert.deepStrictEqual(recordStore.inventory, []);
  });

  it('should be able report finances, showing balance and value of inventory',
    function() {
      recordStore.add(record);
      recordStore.sell(record);

      let expected = 'Balance: £15,\nStock value: £0';

      assert.strictEqual(recordStore.finances(), expected);
    }
  );

  it('should be able to view records by genre');
});
