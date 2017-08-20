/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid, Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Table from 'components/Table';
import CategoryList from 'components/CategoryList';
import NewCategoryForm from './NewCategoryForm';
import NewItemForm from './NewItemForm';
import ItemForm from './ItemForm';
import {
  fetchItemList,
  createItem,
  updateItem,
  deleteItem,
  fetchCategoryList,
  createCategory,
  deleteCategory,
  openNewItemModal,
  openItemModal,
  openDeleteItemModal,
  openNewCategoryModal,
  openDeleteCategoryModal,
  closeModal,
  setActiveCategory,
} from './actions';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchItemList();
    this.props.fetchCategoryList();
  }

  render() {
    const { categories, items, itemToDelete, categoryToDelete, activeCategory } = this.props;

    return (
      <div>
        <Grid padded centered>
          <Grid.Column mobile={16} computer={4}>
            <Header>My app</Header>
            <CategoryList
              categories={categories}
              activeCategory={activeCategory}
              setActiveCategory={this.props.setActiveCategory}
              openDeleteCategoryModal={this.props.openDeleteCategoryModal}
            />
          </Grid.Column>
          <Grid.Column mobile={16} computer={10}>
            <Button color="green" basic onClick={this.props.openNewItemModal}>
              Добавить товар
            </Button>
            <Button color="green" basic onClick={this.props.openNewCategoryModal}>
              Добавить категорию
            </Button>
            <Table
              items={items.filter((item) => activeCategory ?
                item.category === activeCategory :
                !item.category
              )}
              openItemModal={this.props.openItemModal}
              openDeleteItemModal={this.props.openDeleteItemModal}
            />
          </Grid.Column>
        </Grid>
        <Modal
          size="mini"
          closeIcon="close"
          open={this.props.newItemModalOpen}
          onClose={this.props.closeModal}
        >
          <Header>Добавить товар</Header>
          <Modal.Content>
            <NewItemForm onSubmit={this.props.createItem} categories={this.props.categories} />
          </Modal.Content>
        </Modal>
        <Modal
          size="mini"
          closeIcon="close"
          open={this.props.newCategoryModalOpen}
          onClose={this.props.closeModal}
        >
          <Header>Добавить категорию</Header>
          <Modal.Content>
            <NewCategoryForm onSubmit={this.props.createCategory} />
          </Modal.Content>
        </Modal>
        <Modal
          size="mini"
          closeIcon="close"
          open={this.props.itemModalOpen}
          onClose={this.props.closeModal}
        >
          <Header>Изменить товар</Header>
          <Modal.Content>
            <ItemForm onSubmit={this.props.updateItem} categories={this.props.categories} />
          </Modal.Content>
        </Modal>
        <Modal
          size="mini"
          closeIcon="close"
          open={this.props.deleteItemModalOpen}
          onClose={this.props.closeModal}
        >
          <Header>Точно удалить товар id{itemToDelete}?</Header>
          <Modal.Actions>
            <Button color="red" basic onClick={() => this.props.deleteItem(itemToDelete)}>
              Да
            </Button>
            <Button color="green" basic onClick={this.props.closeModal}>
              Нет
            </Button>
          </Modal.Actions>
        </Modal>
        <Modal
          size="mini"
          closeIcon="close"
          open={this.props.deleteCategoryModalOpen}
          onClose={this.props.closeModal}
        >
          <Header>Хотите удалить категорию?</Header>
          <Modal.Content>
            {'Все товары этой категории будут помечены "Без категории"'}
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" basic onClick={() => this.props.deleteCategory(categoryToDelete)}>
              Да
            </Button>
            <Button color="green" basic onClick={this.props.closeModal}>
              Нет
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


HomePage.propTypes = {
  categories: PropTypes.array,
  items: PropTypes.array,
  itemToDelete: PropTypes.number,
  categoryToDelete: PropTypes.string,
  activeCategory: PropTypes.string,
  fetchItemList: PropTypes.func,
  createItem: PropTypes.func,
  updateItem: PropTypes.func,
  deleteItem: PropTypes.func,
  newItemModalOpen: PropTypes.bool,
  newCategoryModalOpen: PropTypes.bool,
  itemModalOpen: PropTypes.bool,
  deleteItemModalOpen: PropTypes.bool,
  deleteCategoryModalOpen: PropTypes.bool,
  fetchCategoryList: PropTypes.func,
  createCategory: PropTypes.func,
  deleteCategory: PropTypes.func,
  openNewItemModal: PropTypes.func,
  openItemModal: PropTypes.func,
  openNewCategoryModal: PropTypes.func,
  openDeleteItemModal: PropTypes.func,
  openDeleteCategoryModal: PropTypes.func,
  closeModal: PropTypes.func,
  setActiveCategory: PropTypes.func,
};


const mapStateToProps = (state) => {
  const home = state.get('home');

  return {
    items: home.get('items').toJS(),
    categories: home.get('categories').toJS(),
    newItemModalOpen: home.get('newItemModalOpen'),
    itemModalOpen: home.get('itemModalOpen'),
    newCategoryModalOpen: home.get('newCategoryModalOpen'),
    deleteItemModalOpen: home.get('deleteItemModalOpen'),
    deleteCategoryModalOpen: home.get('deleteCategoryModalOpen'),
    itemToEdit: home.get('itemToEdit'),
    itemToDelete: home.get('itemToDelete'),
    categoryToDelete: home.get('categoryToDelete'),
    activeCategory: home.get('activeCategory'),
  };
};


const mapDispatchToProps = {
  fetchItemList,
  createItem,
  updateItem,
  deleteItem,
  fetchCategoryList,
  createCategory,
  deleteCategory,
  openNewItemModal,
  openItemModal,
  openNewCategoryModal,
  openDeleteItemModal,
  openDeleteCategoryModal,
  closeModal,
  setActiveCategory,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
