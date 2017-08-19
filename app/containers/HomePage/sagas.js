import { takeLatest, call, take, fork, put, cancel } from 'redux-saga/effects';
import axios from 'axios';
import {
  CREATE_ITEM_REQUEST,
  CREATE_ITEM_SUCCESS,
  CREATE_ITEM_FAILURE,
  FETCH_ITEM_LIST_REQUEST,
  FETCH_ITEM_LIST_SUCCESS,
  FETCH_ITEM_LIST_FAILURE,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  FETCH_ITEM_FAILURE,
  UPDATE_ITEM_REQUEST,
  UPDATE_ITEM_SUCCESS,
  UPDATE_ITEM_FAILURE,
  DELETE_ITEM_REQUEST,
  DELETE_ITEM_SUCCESS,
  DELETE_ITEM_FAILURE,

  CREATE_CATEGORY_REQUEST,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILURE,
  FETCH_CATEGORY_LIST_REQUEST,
  FETCH_CATEGORY_LIST_SUCCESS,
  FETCH_CATEGORY_LIST_FAILURE,
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
  UPDATE_CATEGORY_REQUEST,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILURE,
  DELETE_CATEGORY_REQUEST,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILURE,

  CLOSE_MODAL,
} from './constants';


const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';


function* createItem(action) {
  try {
    yield call(axios.post, '/api/items', action.payload);
    yield put({ type: CREATE_ITEM_SUCCESS });
    yield put({ type: CLOSE_MODAL });
    yield put({ type: FETCH_ITEM_LIST_REQUEST });
  } catch (error) {
    yield put({ type: CREATE_ITEM_FAILURE, error: error.message });
  }
}


function* fetchItemList() {
  try {
    const response = yield call(axios.get, '/api/items');
    yield put({ type: FETCH_ITEM_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ITEM_LIST_FAILURE, error: error.message });
  }
}


function* fetchItem(action) {
  try {
    const response = yield call(axios.get, `/api/items/${action.payload}`);
    yield put({ type: FETCH_ITEM_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_ITEM_FAILURE, error: error.message });
  }
}


function* updateItem(action) {
  try {
    const response = yield call(axios.put, `/api/items/${action.payload.get('_id')}`, action.payload);
    yield put({ type: UPDATE_ITEM_SUCCESS, categoryList: response.data });
    yield put({ type: CLOSE_MODAL });
    yield put({ type: FETCH_ITEM_LIST_REQUEST });
  } catch (error) {
    yield put({ type: UPDATE_ITEM_FAILURE, error: error.message });
  }
}


function* deleteItem(action) {
  try {
    const response = yield call(axios.delete, `/api/items/${action.payload}`);
    yield put({ type: DELETE_ITEM_SUCCESS, payload: response.data });
    yield put({ type: CLOSE_MODAL });
    yield put({ type: FETCH_ITEM_LIST_REQUEST });
  } catch (error) {
    yield put({ type: DELETE_ITEM_FAILURE, error: error.message });
  }
}


function* createCategory(action) {
  try {
    yield call(axios.post, '/api/categories', action.payload);
    yield put({ type: CREATE_CATEGORY_SUCCESS });
    yield put({ type: CLOSE_MODAL });
    yield put({ type: FETCH_CATEGORY_LIST_REQUEST });
  } catch (error) {
    yield put({ type: CREATE_CATEGORY_FAILURE, error: error.message });
  }
}


function* fetchCategoryList() {
  try {
    const response = yield call(axios.get, '/api/categories');
    yield put({ type: FETCH_CATEGORY_LIST_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_CATEGORY_LIST_FAILURE, error: error.message });
  }
}


function* fetchCategory(action) {
  try {
    const response = yield call(axios.get, `/api/categories/${action.id}`);
    yield put({ type: FETCH_CATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: FETCH_CATEGORY_FAILURE, error: error.message });
  }
}


function* updateCategory(action) {
  try {
    const response = yield call(axios.put, `/api/categories/${action.payload._id}`, action.payload);
    yield put({ type: UPDATE_CATEGORY_SUCCESS, payload: response.data });
  } catch (error) {
    yield put({ type: UPDATE_CATEGORY_FAILURE, error: error.message });
  }
}


function* deleteCategory(action) {
  try {
    const response = yield call(axios.delete, `/api/categories/${action.payload}`);
    yield put({ type: DELETE_CATEGORY_SUCCESS, payload: response.data });
    yield put({ type: CLOSE_MODAL });
    yield put({ type: FETCH_CATEGORY_LIST_REQUEST });
  } catch (error) {
    yield put({ type: DELETE_CATEGORY_FAILURE, error: error.message });
  }
}


function* createItemSaga() {
  const saga = yield fork(takeLatest, CREATE_ITEM_REQUEST, createItem);
  yield take(LOCATION_CHANGE);
  yield cancel(saga);
}
function* fetchItemListSaga() {
  const watcher = yield fork(takeLatest, FETCH_ITEM_LIST_REQUEST, fetchItemList);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* fetchItemSaga() {
  const watcher = yield fork(takeLatest, FETCH_ITEM_REQUEST, fetchItem);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* updateItemSaga() {
  const watcher = yield fork(takeLatest, UPDATE_ITEM_REQUEST, updateItem);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* deleteItemSaga() {
  const watcher = yield fork(takeLatest, DELETE_ITEM_REQUEST, deleteItem);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* createCategorySaga() {
  const watcher = yield fork(takeLatest, CREATE_CATEGORY_REQUEST, createCategory);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* fetchCategoryListSaga() {
  const watcher = yield fork(takeLatest, FETCH_CATEGORY_LIST_REQUEST, fetchCategoryList);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* fetchCategorySaga() {
  const watcher = yield fork(takeLatest, FETCH_CATEGORY_REQUEST, fetchCategory);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* updateCategorySaga() {
  const watcher = yield fork(takeLatest, UPDATE_CATEGORY_REQUEST, updateCategory);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}
function* deleteCategorySaga() {
  const watcher = yield fork(takeLatest, DELETE_CATEGORY_REQUEST, deleteCategory);
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


export default [
  createItemSaga,
  fetchItemListSaga,
  fetchItemSaga,
  updateItemSaga,
  deleteItemSaga,
  createCategorySaga,
  fetchCategoryListSaga,
  fetchCategorySaga,
  updateCategorySaga,
  deleteCategorySaga,
];
