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
import { Grid, List, Button, Table, Header, Modal } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import NewCategoryForm from './NewCategoryForm';
import NewItemForm from './NewItemForm';
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
  openNewCategoryModal,
  closeModal,
} from './actions';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchItemList();
    this.props.fetchCategoryList();
  }

  render() {
    return (
      <div>
        <Grid padded>
          <Grid.Column width={6}>
            <h1>My app</h1>
            <List relaxed>
              {
                this.props.categories.map((category, index) => (
                  <List.Item key={index}>
                    <List.Icon
                      name="remove"
                      color="grey"
                      style={{ cursor: 'pointer' }}
                      onClick={() => {this.props.deleteCategory(category._id)}}
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
          <Grid.Column width={10}>
            <Button onClick={this.props.openNewItemModal}>
              Добавить товар
            </Button>
            <Button onClick={this.props.openNewCategoryModal}>
              Добавить категорию
            </Button>
            <Table>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>ID</Table.HeaderCell>
                  <Table.HeaderCell>Название товара</Table.HeaderCell>
                  <Table.HeaderCell>Цена / закуп</Table.HeaderCell>
                  <Table.HeaderCell>Цена</Table.HeaderCell>
                  <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
              </Table.Body>
            </Table>
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
            <NewItemForm onSubmit={this.props.createItem} />
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
        </Modal>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  const home = state.get('home');

  return {
    items: home.get('items'),
    categories: home.get('categories'),
    newItemModalOpen: home.get('newItemModalOpen'),
    itemModalOpen: home.get('itemModalOpen'),
    newCategoryModalOpen: home.get('newCategoryModalOpen'),
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
  closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
