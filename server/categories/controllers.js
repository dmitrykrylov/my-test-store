const Category = require('./model');


exports.getCategoryList = async (req, res, next) => {
  try {
    const category = await Category.find().populate('category').exec();
    res.json(category);
  } catch (e) {
    next(e);
  }
};


exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id).exec();
    res.json(category);
  } catch (e) {
    next(e);
  }
};


exports.createCategory = async (req, res, next) => {
  try {
    console.log('eee', req.body);
    const category = await Category.create(req.body);
    res.status(201).json(category);
  } catch (e) {
    next(e);
  }
};


exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(category);
  } catch (e) {
    next(e);
  }
};


exports.deleteCategory = async (req, res, next) => {
  try {
    await Category.findByIdAndRemove(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};
