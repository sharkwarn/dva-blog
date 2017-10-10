import { message } from 'antd';
import { saveArticle } from './../services/index';

export default {

  namespace: 'saveArticle',

  state: {
    loading: false,
    data: '',
    dataSource: '',
    title: '',
    titleImg: '',
  },

  subscriptions: {
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *saveContent({ payload }, { put }) {
      yield put({
        type: 'save',
        payload: {
          loading: true,
        },
      });
      try {
        const res = yield saveArticle(payload);
        if (res && res.code === 200) {
          message.success('提交成功');
        } else {
          message.error('提交失败!');
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
