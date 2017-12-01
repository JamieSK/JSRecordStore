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
};

module.exports = Collector;
