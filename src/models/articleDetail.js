import { getArticleDetail } from './../services/index';

export default {

  namespace: 'articleDetail',

  state: {
    loading: false,
    name: '',
    content: '',
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname, query }) => {
        if (pathname === '/articleDetail') {
          dispatch({
            type: 'fetchList',
            payload: {
              id: query.id,
            },
          });
        }
      });
    },
  },

  effects: {
    *fetchList({ payload }, { put }) {  // eslint-disable-line
      if (!payload.id) {
        return;
      }
      yield put({
        type: 'save',
        loading: true,
      });
      try {
        const res = yield getArticleDetail(payload.id);
        if (res.code === 200) {
          yield put({
            type: 'save',
            payload: {
              ...res.data,
              content: res.data.content.replace(/&gt;/gi, '>').replace(/&lt;/gi, '<').replace(/&quot;/gi, '"').replace(/&nbsp;/gi, ' ')
              .replace(/&amp;/gi, '&'),
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
