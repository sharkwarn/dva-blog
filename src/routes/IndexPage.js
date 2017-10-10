import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.normal}>
      <div>导航页面</div>
      {this.props.children}
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
