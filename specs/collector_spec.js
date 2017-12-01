let assert = require('assert');
let Collector = require('../source/collector');
let Record = require('../source/record');

describe('Record Collector', function() {
  let collector;
  let record;
  let expensiveRecord;

  beforeEach(function() {
    collector = new Collector(100);
    record = new Record('Alex Cameron', 'Jumping the Shark', 'Alt-Rock', 15);
    expensiveRecord = new Record('Metallica', 'Master of Puppets', 'Rock', 50);
  });

  it('should have cash', function() {
    assert.strictEqual(collector.cash, 100);
  });

  it('should be able to buy records', function() {
    collector.buy(record);
    assert.deepStrictEqual(collector.records, [record]);
    assert.strictEqual(collector.cash, 85);
  });

  it('shouldn\'t be able to buy records they can\'t afford', function() {
    collector.cash = 0;
    collector.buy(record);
    assert.deepStrictEqual(collector.records, []);
    assert.strictEqual(collector.cash, 0);
  });

  it('should be able to sell records', function() {
    collector.buy(record);
    collector.sell(record);
    assert.strictEqual(collector.cash, 100);
    assert.deepStrictEqual(collector.records, []);
  });

  it('should be able to get total records value', function() {
    collector.buy(record);
    collector.buy(record);
    assert.strictEqual(collector.recordsValue(), 30);
  });

  it('should be able to get total records value of a genre', function() {
    collector.buy(record);
    assert.strictEqual(collector.recordsValueGenre('Alt-Rock'), 15);
    assert.strictEqual(collector.recordsValueGenre('Pop'), 0);
  });

  it('should be able to their most valuable record', function() {
    collector.buy(record);
    collector.buy(expensiveRecord);
    assert.strictEqual(collector.valuableRecord(), expensiveRecord);
  });

  it('should be able to sort their records ascending', function() {
    collector.buy(record);
    collector.buy(expensiveRecord);

    let expected = [record, expensiveRecord];
    assert.deepStrictEqual(collector.ascendingRecords(), expected);
  });

  it('should be able to sort their records descending', function() {
    collector.buy(record);
    collector.buy(expensiveRecord);

    let expected = [expensiveRecord, record];
    assert.deepStrictEqual(collector.descendingRecords(), expected);
  });

  it('should be able to compare the value of their record collection',
    function() {
      let richCollector = new Collector(2000);
      richCollector.buy(expensiveRecord);
      richCollector.buy(expensiveRecord);
      richCollector.buy(expensiveRecord);
      collector.buy(record);

      assert.strictEqual(collector.compareWith(richCollector), -1);
      assert.strictEqual(richCollector.compareWith(richCollector), 0);
      assert.strictEqual(richCollector.compareWith(collector), 1);
    }
  );
});
