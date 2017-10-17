import React from 'react';
import { connect } from 'dva';

import AricleListItem from './AricleListItem';
import Banner from './Banner';
import styles from './style.less';

class ArticleList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 };
  }

  renderList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <AricleListItem item={item} num={index} />
        </li>
      );
    });
  }

  render() {
    const { list, loading } = this.props;
    return (
      <div className={styles.articleList_container}>
        <p className={styles.articleList_tit}>网络日志：</p>
        <ul className={styles.articleList_list}>
          <li className={styles.banenr_item} >
            <Banner />
          </li>
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
