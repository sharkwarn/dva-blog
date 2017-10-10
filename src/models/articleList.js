import { getArticleList } from './../services/index';

export default {

  namespace: 'articleList',

  state: {
    loading: false,
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/articleList' || pathname === '/') {
          dispatch({
            type: 'fetchList',
          });
        }
      });
    },
  },

  effects: {
    *fetchList({ payload }, { put }) {  // eslint-disable-line
      yield put({
        type: 'save',
        loading: true,
      });
      try {
        const res = yield getArticleList();
        if (res.code === 200) {
          yield put({
            type: 'save',
            payload: {
              list: res.data,
            },
          });
        }
        yield put({
          type: 'save',
          loading: false,
        });
      } catch (err) {
        yield put({
          type: 'save',
          loading: false,
        });
      }
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
