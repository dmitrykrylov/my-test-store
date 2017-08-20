import React, { PropTypes } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field } from 'redux-form/immutable';
import { Select } from '../ReduxFormInput';


const ItemForm = (props) => {
  const { handleSubmit, categories } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Field
          name="category"
          placeholder="Категория"
          component={Select}
          options={categories.map((category) => ({
            key: category._id,
            value: category._id,
            text: category.name,
          }))}
        />
      </Form.Field>
      <Form.Field>
        <Field
          name="name"
          placeholder="Название"
          component="input"
          required
        />
      </Form.Field>
      <Form.Field>
        <Field
          name="purchasePrice"
          placeholder="Закупочная стоимость"
          component="input"
          required
          type="number"
          min="0"
        />
      </Form.Field>
      <Form.Field>
        <Field
          name="sellingPrice"
          placeholder="Розничная цена"
          component="input"
          required
          type="number"
          min="0"
        />
      </Form.Field>
      <Button type="submit" primary>Сохранить</Button>
    </Form>
  );
};


ItemForm.propTypes = {
  handleSubmit: PropTypes.func,
  categories: PropTypes.array,
};


export default ItemForm;
