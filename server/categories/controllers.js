const Category = require('./model');
const Item = require('../items/model');


exports.getCategoryList = async (req, res, next) => {
  try {
    const category = await Category.find().exec();
    res.status(200).json(category);
  } catch (e) {
    next(e);
  }
};


exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id).exec();
    res.status(200).json(category);
  } catch (e) {
    next(e);
  }
};


exports.createCategory = async (req, res, next) => {
  try {
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
};


exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(200).json(category);
  } catch (e) {
    next(e);
  }
};


exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    await Item.update({ category: req.params.id }, { category: null }).exec();

    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};
