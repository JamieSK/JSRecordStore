const sumBy = require('lodash/sumBy');
const filter = require('lodash/filter');

const RecordStore = function(name, city) {
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
};

RecordStore.prototype = {
  add: function(record) {
    this.inventory.push(record);
  },

  listInventory: function() {
    let result = '';
    this.inventory.forEach((element, index) => {
      result += `${index + 1}: ${element.details()}\n`;
    });
    return result;
  },

  sell: function(record) {
    let index = this.inventory.indexOf(record);
    let sold = this.inventory.splice(index, 1)[0];
    this.balance += sold.price;
    return sold;
  },

  stockValue: function() {
    return sumBy(this.inventory, 'price');
  },

  finances: function() {
    return `Balance: £${this.balance},\nStock value: £${this.stockValue()}`;
  },

  recordsByGenre: function(genre) {
    return filter(this.inventory, {'genre': genre});
  },
};

module.exports = RecordStore;
