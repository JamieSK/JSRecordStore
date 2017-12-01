const Record = function(artist, title, genre, price) {
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
};

Record.prototype = {
  details: function() {
    return `${this.title} by ${this.artist}, ${this.genre}, £${this.price}`;
  },
};

module.exports = Record;
