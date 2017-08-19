import { fromJS } from 'immutable';
import {
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_SUCCESS,
  OPEN_NEW_ITEM_MODAL,
  OPEN_NEW_CATEGORY_MODAL,
  OPEN_ITEM_MODAL,
  CLOSE_MODAL,
} from './constants';


const initialState = fromJS({
  items: [],
  categories: [],
  chosenCategory: null,
  newItemModalOpen: false,
  newCategoryModalOpen: false,
  itemModalOpen: false,
});


function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_LIST_SUCCESS:
      return state.set('items', action.payload);
    case FETCH_CATEGORY_LIST_SUCCESS:
      return state.set('categories', action.payload);
    case OPEN_NEW_ITEM_MODAL:
      return state.set('newItemModalOpen', true);
    case OPEN_ITEM_MODAL:
      return state.set('itemModalOpen', true);
    case OPEN_NEW_CATEGORY_MODAL:
      return state.set('newCategoryModalOpen', true);
    case CLOSE_MODAL:
      return state
        .set('newItemModalOpen', false)
        .set('itemModalOpen', false)
        .set('newCategoryModalOpen', false);
    default:
      return state;
  }
}

export default homePageReducer;
