const mongoose = require('mongoose');


const CategorySchema = new mongoose.Schema({
  id: Number,
}, { timestamps: true });


const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
