import {
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_SUCCESS,
} from './constants';

import { fromJS } from 'immutable';


const initialState = fromJS({
  items: [],
  categories: [],
  chosenCategory: null,
});


function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ITEM_LIST_SUCCESS:
      return state.set('items', action.payload );
    case FETCH_CATEGORY_LIST_SUCCESS:
      return state.set('categories', action.payload );
    default:
      return state;
  }
}

export default homePageReducer;
