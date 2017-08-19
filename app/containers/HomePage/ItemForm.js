import { reduxForm } from 'redux-form/immutable';
import ItemForm from 'components/ItemForm';
import { connect } from 'react-redux';


export default connect(
  (state) => ({
    initialValues: state.get('home').get('itemToEdit'),
  }),
)(reduxForm({ form: 'ItemForm' })(ItemForm));

