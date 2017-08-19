import { reduxForm } from 'redux-form/immutable';
import CategoryForm from 'components/CategoryForm';


export default reduxForm({
  form: 'newCategoryForm',
})(CategoryForm);
