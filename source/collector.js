const Collector = function(cash) {
  this.cash = cash;
  this.records = [];
};

Collector.prototype = {
  buy: function(record) {
    this.records.push(record);
    this.cash -= record.price;
  },
};

module.exports = Collector;
