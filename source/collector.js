const sumBy = require('lodash/sumBy');

const Collector = function(cash) {
  this.cash = cash;
  this.records = [];
};

Collector.prototype = {
  buy: function(record) {
    if (this.cash >= record.price) {
      this.records.push(record);
      this.cash -= record.price;
    }
  },

  sell: function(record) {
    let index = this.records.indexOf(record);
    let sold = this.records.splice(index, 1)[0];
    this.cash += sold.price;
    return sold;
  },

  recordsValue: function() {
    return sumBy(this.records, 'price');
  },
};

module.exports = Collector;
