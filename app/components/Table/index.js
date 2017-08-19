import React, { PropTypes } from 'react';
import { Table, Button } from 'semantic-ui-react';


const ItemTable = (props) => {
  const { items, openDeleteItemModal, openItemModal } = props;

  return (
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
        {
          items.filter(() => true).map((item) => (
            <Table.Row key={item._id}>
              <Table.Cell>{item._id}</Table.Cell>
              <Table.Cell>{item.name}</Table.Cell>
              <Table.Cell>{item.purchasePrice}</Table.Cell>
              <Table.Cell>{item.sellingPrice}</Table.Cell>
              <Table.Cell>
                <Button color="grey" basic onClick={() => openDeleteItemModal(item._id)}>
                  Удалить
                </Button>
                <Button color="green" basic onClick={() => openItemModal(item._id)}>
                  Изменить
                </Button>
              </Table.Cell>
            </Table.Row>
          ))
        }
      </Table.Body>
    </Table>
  );
};

export default ItemTable;
