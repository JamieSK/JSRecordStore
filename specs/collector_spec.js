let assert = require('assert');
let Collector = require('../source/collector');
let Record = require('../source/record');

describe('Record Collector', function() {
  let collector;
  let record;

  beforeEach(function() {
    collector = new Collector(100);
    record = new Record('Alex Cameron', 'Jumping the Shark', 'Alt-Rock', 15);
  });

  it('should have cash');
  it('should be able to buy records');
  it('shouldn\'t be able to buy records they can\'t afford');
  it('should be able to sell records');
  it('should be able to get total records value');
  it('should be able to get total records value of a genre');
  it('should be able to their most valuable record');
  it('should be able to sort their records ascending');
  it('should be able to sort their records descending');
  it('should be able to compare the value of their record collection');
});
