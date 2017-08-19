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

import React from 'react';
import { connect } from 'react-redux';
import { Grid, List, Button, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NewCategoryForm from './NewCategoryForm';
import NewItemForm from './NewItemForm';
import ItemForm from './ItemForm';
import Table from 'components/Table'
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
} from './actions';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchItemList();
    this.props.fetchCategoryList();
  }

  render() {
    const { categories, items, itemToDelete, itemToEdit, categoryToDelete } = this.props;

    return (
      <div>
        <Grid padded>
          <Grid.Column width={5}>
            <Header>My app</Header>
            <List relaxed>
              {
                categories.map((category, index) => (
                  <List.Item key={index}>
                    <List.Icon
                      name="remove"
                      color="grey"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {this.props.openDeleteCategoryModal(category._id)}}
                    />
                    <List.Content>{category.name}</List.Content>
                  </List.Item>
                ))
              }
              <List.Item>
                <List.Icon />
                <List.Content>Без категории</List.Content>
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={11}>
            <Button onClick={this.props.openNewItemModal}>
              Добавить товар
            </Button>
            <Button onClick={this.props.openNewCategoryModal}>
              Добавить категорию
            </Button>
            <Table
              items={items}
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
          <Header>Точно удалить товар?</Header>
          <Modal.Actions>
            <Button color="red" inverted onClick={() => this.props.deleteItem(itemToDelete)}>
              Да
            </Button>
            <Button color="green" inverted onClick={this.props.closeModal}>
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
            Все товары этой категории будут помечены "Без категории"
          </Modal.Content>
          <Modal.Actions>
            <Button color="red" inverted onClick={() => this.props.deleteCategory(categoryToDelete)}>
              Да
            </Button>
            <Button color="green" inverted onClick={this.props.closeModal}>
              Нет
            </Button>
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}


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
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
