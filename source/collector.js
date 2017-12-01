const sumBy = require('lodash/sumBy');
const filter = require('lodash/filter');
const maxBy = require('lodash/maxBy');
const sortBy = require('lodash/sortBy');

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

  recordsValueGenre: function(genre) {
    return sumBy(filter(this.records, {'genre': genre}), 'price');
  },

  valuableRecord: function() {
    return maxBy(this.records, 'price');
  },

  ascendingRecords: function() {
    return sortBy(this.records, 'price');
  },

  descendingRecords: function() {
    return this.ascendingRecords().reverse();
  }
};

module.exports = Collector;
