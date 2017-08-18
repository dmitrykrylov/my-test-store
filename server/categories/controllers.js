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
    const category = new Category(req.body);
    await category.save();
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
    await Category.findByIdAndRemove(req.body.id);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};
