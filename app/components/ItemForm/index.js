import React, { PropTypes } from 'react';
import { Form, Button, Select } from 'semantic-ui-react';
import { Field } from 'redux-form/immutable';


const renderSelectField = (props) => (
  <Select
    value={props.input.value}
    options={props.options}
    placeholder={props.placeholder}
    onChange={(event, data) => props.input.onChange(data.value)}
  />
);


const CategoryForm = (props) => {
  const { handleSubmit, categories } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Field
          name="category"
          placeholder="Категория"
          component={renderSelectField}
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

export default CategoryForm;
