import { reduxForm } from 'redux-form/immutable';
import ItemForm from 'components/ItemForm';


export default reduxForm({
  form: 'newItemForm',
})(ItemForm);
