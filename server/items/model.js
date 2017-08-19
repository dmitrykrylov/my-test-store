const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  purchasePrice: {
    type: Number,
    required: true,
  },
  sellingPrice: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
}, { timestamps: true });


itemSchema.plugin(autoIncrement.plugin, { model: 'Item', startAt: 1 });


const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
