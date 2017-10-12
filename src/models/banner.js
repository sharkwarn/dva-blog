import { getBanner } from './../services';

export default {

  namespace: 'banner',

  state: {
    list: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/') {
          dispatch({
            type: 'fetch',
          });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      const res = yield getBanner();
      if (res.code === 200) {
        yield put({
          type: 'save',
          payload: {
            list: res.data,
          },
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
