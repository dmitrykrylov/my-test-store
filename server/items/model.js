const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  id: Number,
}, { timestamps: true });


const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
