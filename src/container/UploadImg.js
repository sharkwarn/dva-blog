import React from 'react';
import { connect } from 'dva';
import { Button, Icon, Spin } from 'antd';
import Image from './../components/Image';
import styles from './style.less';

//
class Uploadimg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.uploadNode = document.getElementById('upload_file');
  }

  onChange = () => {
    this.props.dispatch({
      type: 'upload/uploadFile',
      payload: {
        file: this.uploadNode.files[0],
      },
    });
  }

  renderImgList = (data) => {
    return data.map((item, index) => {
      return (
        <li key={index}>
          <Image url={item} />
        </li>
      );
    });
  }

  backClick = () => {
    window.history.back();
  }

  render() {
    return (
      <div className={styles.upload_container}>
        <div>
          <Button type="primary" onClick={this.backClick}>返回</Button>
        </div>
        <Spin
          spinning={this.props.loading}
        >
          <ul>
            {this.renderImgList(this.props.imageList)}
            <li>
              <div className={styles.upload_btn}>
                <Icon className={styles.upload_icon} type="upload" />
                <input
                  id="upload_file"
                  className={styles.upload_file}
                  type="file"
                  name="fname"
                  onSelect={this.onChange}
                />
              </div>
              <Button type="primary" onClick={this.onChange}>上传</Button>
            </li>
          </ul>
        </Spin>
      </div>
    );
  }
}

function mapStateToProps({ upload }) {
  return { ...upload };
}

export default connect(mapStateToProps)(Uploadimg);
