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

  OPEN_NEW_ITEM_MODAL,
  OPEN_NEW_CATEGORY_MODAL,
  OPEN_ITEM_MODAL,
  CLOSE_MODAL,
} from './constants';


export const createItem = (params) => ({ type: CREATE_ITEM_REQUEST, payload: params });

export const fetchItem = (params) => ({ type: FETCH_ITEM_REQUEST, payload: params });

export const fetchItemList = () => ({ type: FETCH_ITEM_LIST_REQUEST });

export const updateItem = (params) => ({ type: UPDATE_ITEM_REQUEST, payload: params });

export const deleteItem = (params) => ({ type: DELETE_ITEM_REQUEST, payload: params });


export const createCategory = (params) => ({ type: CREATE_CATEGORY_REQUEST, payload: params });

export const fetchCategory = (params) => ({ type: FETCH_CATEGORY_REQUEST, payload: params });

export const fetchCategoryList = () => ({ type: FETCH_CATEGORY_LIST_REQUEST });

export const updateCategory = (params) => ({ type: UPDATE_CATEGORY_REQUEST, payload: params });

export const deleteCategory = (params) => ({ type: DELETE_CATEGORY_REQUEST, payload: params });


export const openNewItemModal = () => ({ type: OPEN_NEW_ITEM_MODAL });

export const openItemModal = () => ({ type: OPEN_ITEM_MODAL });

export const openNewCategoryModal = () => ({ type: OPEN_NEW_CATEGORY_MODAL });

export const closeModal = () => ({ type: CLOSE_MODAL });
