const Item = require('./model');


exports.getItemList = async (req, res, next) => {
  try {
    const item = await Item.find().populate('category').exec();
    res.json(item);
  } catch (e) {
    next(e);
  }
};


exports.getItem = async (req, res, next) => {
  try {
    const item = await Item.findById(req.params.id).exec();
    res.json(item);
  } catch (e) {
    next(e);
  }
};


exports.createItem = async (req, res, next) => {
  try {
    console.log('fff', req.body);
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (e) {
    next(e);
  }
};


exports.updateItem = async (req, res, next) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(item);
  } catch (e) {
    next(e);
  }
};


exports.deleteItem = async (req, res, next) => {
  try {
    await Item.findByIdAndRemove(req.params.id);
    res.sendStatus(204);
  } catch (e) {
    next(e);
  }
};
