import React from 'react';
import { Breadcrumb } from 'antd';
import { connect } from 'dva';
import styles from './style.less';

class ArticleDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <span>{item.name}</span>
        </li>
      );
    });
  }

  render() {
    const { name, content, _id } = this.props;
    return (
      <div className="markdown-body entry-content">
        <div className={styles.article_contaienr}>
          <div className={styles.article_Breadcrumb}>
            <Breadcrumb separator="》">
              <Breadcrumb.Item><a href="/">网络日志</a></Breadcrumb.Item>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item href={`#/articleDetail?${_id}`}>{name}</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <h1>{name}</h1>
            <article
              dangerouslySetInnerHTML={{ __html: content }}
            ></article>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ articleDetail }) {
  return { ...articleDetail };
}

export default connect(mapStateToProps)(ArticleDetail);
