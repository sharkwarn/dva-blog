import React from 'react';
import { connect } from 'dva';

import styles from './style.less';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <a href={`#/articleDetail?id=${item['_id']}`}>{item.name}</a>
        </li>
      );
    });
  }

  render() {
    const { list, loading } = this.props;
    return (
      <div className={styles.articleList_container}>
        <p className={styles.articleList_tit}>最近文章：</p>
        <ul className={styles.articleList_list}>
          { this.renderList(list) }
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ articleList }) {
  return { ...articleList };
}

export default connect(mapStateToProps)(ArticleList);
