import { upload, getAllImage } from './../services/index';

export default {

  namespace: 'upload',

  state: {
    loading: false,
    imageList: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      return history.listen(({ pathname }) => {
        if (pathname === '/uploadImg') {
          dispatch({
            type: 'getAll',
          });
        }
      });
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *uploadFile({ payload }, { call, put }) {
      yield put({
        type: 'save',
        payload: {
          loading: true,
        },
      });
      try {
        const res = yield upload(payload.file);
        if (res && res.code === 200) {
          yield put({
            type: 'getAll',
          });
        }
      } catch (err) {
        console.log(err);
        yield put({
          type: 'save',
          payload: {
            loading: false,
          },
        });
      }
      yield put({
        type: 'save',
        payload: {
          loading: false,
        },
      });
    },
    *getAll({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          loading: true,
        },
      });
      try {
        const res = yield getAllImage();
        if (res && res.code === 200) {
          yield put({
            type: 'save',
            payload: {
              imageList: res.data,
            },
          });
        }
      } catch (err) {
        yield put({
          type: 'save',
          payload: {
            loading: false,
          },
        });
      }
      yield put({
        type: 'save',
        payload: {
          loading: false,
        },
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
