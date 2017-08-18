const Router = require('express').Router;
const controllers = require('./controllers');

module.exports = () => {
  const routes = new Router();

  routes
    .get('/', controllers.getCategoryList)
    .post('/', controllers.createCategory)
    .put('/', controllers.updateCategory)
    .delete('/', controllers.deleteCategory);

  return routes;
};
