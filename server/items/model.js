const mongoose = require('mongoose');

const autoIncrement = require('mongoose-auto-increment');


const ItemSchema = new mongoose.Schema({
  id: Number,
  title: String,
  purchasePrice: Number,
  sellingPrice: Number,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
  },
}, { timestamps: true });


autoIncrement.initialize(mongoose.connection);
ItemSchema.plugin(autoIncrement.plugin, { model: 'Item', field: 'id', startAt: 1 });


const Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
