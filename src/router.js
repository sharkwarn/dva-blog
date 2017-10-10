import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login';
import Register from './routes/Register';
import Upload from './routes/Uoload';
import EditArticle from './routes/EditArticle';
import ArticleList from './routes//ArticleList';
import ArticleDetail from './routes/ArticleDetail';
import Banner from './routes/Banner';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={ArticleList} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Route path="/uploadImg" component={Upload} />
      <Route path="/editArticle" component={EditArticle} />
      <Route path="/articleList" component={ArticleList} />
      <Route path="/articleDetail" component={ArticleDetail} />
      <Route path="/EditBanner" component={Banner} />
    </Router>
  );
}

export default RouterConfig;
