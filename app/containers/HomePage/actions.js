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
  OPEN_DELETE_ITEM_MODAL,
  OPEN_ITEM_MODAL,
  OPEN_NEW_CATEGORY_MODAL,
  OPEN_DELETE_CATEGORY_MODAL,
  CLOSE_MODAL,
} from './constants';


export const createItem = (payload) => ({ type: CREATE_ITEM_REQUEST, payload });

export const fetchItem = (payload) => ({ type: FETCH_ITEM_REQUEST, payload });

export const fetchItemList = () => ({ type: FETCH_ITEM_LIST_REQUEST });

export const updateItem = (payload) => ({ type: UPDATE_ITEM_REQUEST, payload });

export const deleteItem = (payload) => ({ type: DELETE_ITEM_REQUEST, payload });


export const createCategory = (payload) => ({ type: CREATE_CATEGORY_REQUEST, payload });

export const fetchCategory = (payload) => ({ type: FETCH_CATEGORY_REQUEST, payload });

export const fetchCategoryList = () => ({ type: FETCH_CATEGORY_LIST_REQUEST });

export const updateCategory = (payload) => ({ type: UPDATE_CATEGORY_REQUEST, payload });

export const deleteCategory = (payload) => ({ type: DELETE_CATEGORY_REQUEST, payload });


export const openNewItemModal = () => ({ type: OPEN_NEW_ITEM_MODAL });

export const openItemModal = (payload) => ({ type: OPEN_ITEM_MODAL, payload });

export const openDeleteItemModal = (payload) => ({ type: OPEN_DELETE_ITEM_MODAL, payload });

export const openNewCategoryModal = () => ({ type: OPEN_NEW_CATEGORY_MODAL });

export const openDeleteCategoryModal = (payload) => ({ type: OPEN_DELETE_CATEGORY_MODAL, payload });

export const closeModal = () => ({ type: CLOSE_MODAL });
