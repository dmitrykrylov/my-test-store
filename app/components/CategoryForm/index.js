import React, { PropTypes } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { Field } from 'redux-form/immutable';

const CategoryForm = (props) => {
  const { handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <Field name="name" placeholder="Название" component="input" required />
      </Form.Field>
      <Button type="submit" primary>Сохранить</Button>
    </Form>
  );
};

export default CategoryForm;
