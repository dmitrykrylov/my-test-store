import React, { PropTypes } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field } from 'redux-form/immutable';

const CategoryForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Field name="category" placeholder="Категория" component="select" required />
      </Form.Field>
      <Form.Field>
        <Field name="name" placeholder="Название" component="input" required type="number" />
      </Form.Field>
      <Form.Field>
        <Field name="purchasePrice" placeholder="Закупочная стоимость" component="input" required type="number" />
      </Form.Field>
      <Form.Field>
        <Field name="sellingPrice" placeholder="Розничная цена" component="input" required type="number" />
      </Form.Field>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default CategoryForm;
