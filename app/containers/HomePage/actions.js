import {
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_LIST_REQUEST,
  CREATE_ITEM_REQUEST,
  UPDATE_ITEM_REQUEST,
  DELETE_ITEM_REQUEST,

  FETCH_CATEGORY_LIST_REQUEST,
  FETCH_CATEGORY_REQUEST,
  CREATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_REQUEST,
  DELETE_CATEGORY_REQUEST,
} from './constants';


export const createItem = (params) => ({ type: CREATE_ITEM_REQUEST, payload: params });

export const fetchItem = (id) => ({ type: FETCH_ITEM_REQUEST, id });

export const fetchItemList = () => ({ type: FETCH_ITEM_LIST_REQUEST });

export const updateItem = (params) => ({ type: UPDATE_ITEM_REQUEST, payload: params });

export const deleteItem = (id) => ({ type: DELETE_ITEM_REQUEST, id });


export const createCategory = (params) => ({ type: CREATE_CATEGORY_REQUEST, payload: params });

export const fetchCategory = (id) => ({ type: FETCH_CATEGORY_REQUEST, id });

export const fetchCategoryList = () => ({ type: FETCH_CATEGORY_LIST_REQUEST });

export const updateCategory = (params) => ({ type: UPDATE_CATEGORY_REQUEST, payload: params });

export const deleteCategory = (id) => ({ type: DELETE_CATEGORY_REQUEST, id });
