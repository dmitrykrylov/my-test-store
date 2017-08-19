import { fromJS, List } from 'immutable';
import {
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_SUCCESS,
  OPEN_NEW_ITEM_MODAL,
  OPEN_NEW_CATEGORY_MODAL,
  OPEN_ITEM_MODAL,
  OPEN_DELETE_ITEM_MODAL,
  OPEN_DELETE_CATEGORY_MODAL,
  CLOSE_MODAL,
} from './constants';


const initialState = fromJS({
  items: [],
  categories: [],
  chosenCategory: null,
  newItemModalOpen: false,
  newCategoryModalOpen: false,
  deleteItemModalOpen: false,
  deleteCategoryModalOpen: false,
  itemModalOpen: false,
  itemToDelete: null,
  categoryToDelete: null,
});


function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_LIST_SUCCESS:
      return state.set('items', List(action.payload));
    case FETCH_CATEGORY_LIST_SUCCESS:
      return state.set('categories', List(action.payload));
    case OPEN_NEW_ITEM_MODAL:
      return state.set('newItemModalOpen', true);
    case OPEN_DELETE_ITEM_MODAL:
      return state.set('deleteItemModalOpen', true).set('itemToDelete', action.payload);
    case OPEN_ITEM_MODAL:
      return state
        .set('itemModalOpen', true)
        .set('itemToEdit', state.get('items').find((item) => item._id === action.payload));
    case OPEN_NEW_CATEGORY_MODAL:
      return state.set('newCategoryModalOpen', true);
    case OPEN_DELETE_CATEGORY_MODAL:
      return state.set('deleteCategoryModalOpen', true).set('categoryToDelete', action.payload);
    case CLOSE_MODAL:
      return state
        .set('newItemModalOpen', false)
        .set('deleteItemModalOpen', false)
        .set('itemModalOpen', false)
        .set('newCategoryModalOpen', false)
        .set('deleteCategoryModalOpen', false);
    default:
      return state;
  }
}

export default homePageReducer;
