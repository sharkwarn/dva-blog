import React from 'react';
import { message } from 'antd';
import styles from './style.less';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copyId: `img_url_${Math.floor(Math.random() * 100000)}`,
    };
  }

  componentDidMount() {
    this.copyNode = document.getElementById(this.state.copyId);
  }

  copyClick = () => {
    this.copyNode.select();
    const bol = document.execCommand('Copy');
    if (bol) {
      message.success('复制成功');
    } else {
      message.error('复制失败');
    }
  }

  render() {
    const { url } = this.props;
    const { copyId } = this.state;
    return (
      <div className={styles.image_container}>
        <img
          className={styles.image_img}
          width="200"
          height="200"
          src={url}
          alt="图片"
        />
        <input
          id={copyId}
          className={styles.image_copy_input}
          value={url}
          onChange={() => {}}
        />
        <span className={styles.image_copy_tit} onClick={this.copyClick} >点击复制链接</span>
        <span className={styles.image_copy_url}>{url}</span>
      </div>
    );
  }
}

export default Image;
