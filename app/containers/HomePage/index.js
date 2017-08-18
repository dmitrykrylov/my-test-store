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
import { Grid, List, Button, Table } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import {
  fetchItemList,
  fetchCategoryList,
} from './actions';
import { connect } from 'react-redux';


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.fetchItemList();
    this.props.fetchCategoryList();
  }

  render() {
    return (
      <Grid padded>
        <Grid.Column width={6}>
          <h1>My app</h1>
          <List relaxed>
            <List.Item>
              <List.Icon name="users" />
              <List.Content>Category 1</List.Content>
            </List.Item>
            <List.Item>Category 2</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={10}>
          <Button>
            Добавить товар
          </Button>
          <Button>
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
    );
  }
}


const mapStateToProps = (state) => {
  const home = state.get('home');

  return {
    items: home.get('items'),
    categories: home.get('categories'),
  };
};


const mapDispatchToProps = {
  fetchItemList,
  fetchCategoryList,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
