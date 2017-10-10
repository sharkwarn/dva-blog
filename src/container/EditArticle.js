import React from 'react';
import { Input, Button } from 'antd';
import { connect } from 'dva';
import classy from 'markdown-it-classy';
import styles from './style.less';

window.md.use(classy);

const TextArea = Input.TextArea;

class EditArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: '',
      data: '',
      title: '',
    };
  }

  onChange=(e) => {
    const result = window.md.render(e.target.value);
    this.props.dispatch({
      type: 'saveArticle/save',
      payload: {
        dataSource: e.target.value,
        data: result,
      },
    });
  }

  submitClick=() => {
    const { title, data } = this.props;
    this.props.dispatch({
      type: 'saveArticle/saveContent',
      payload: {
        title,
        content: data,
      },
    });
  }

  titleOnChange = (e) => {
    this.props.dispatch({
      type: 'saveArticle/save',
      payload: {
        title: e.target.value,
      },
    });
  }

  restClick = () => {
    this.props.dispatch({
      type: 'saveArticle/save',
      payload: {
        title: '',
        data: '',
        dataSource: '',
      },
    });
  }

  linkToImage = () => {
    window.location.href = '#/uploadImg';
  }

  render() {
    const { dataSource, data, title } = this.props;
    return (
      <div className={styles.edit_article_container} >
        <div className={styles.edit_article_left}>
          <Input
            value={title}
            className={styles.edit_title}
            onChange={this.titleOnChange}
          />
          <TextArea
            value={dataSource}
            onChange={this.onChange}
            autosize={{ minRows: 40, maxRows: 40 }}
          />
        </div>
        <div className="markdown-body entry-content">
          <h1>{title}</h1>
          <article
            dangerouslySetInnerHTML={{ __html: data }}
          >
          </article>
        </div>
        <div className={styles.edit_bottom_btn}>
          <Button
            size="large"
            className={styles.edit_btn}
            type="primary"
            onClick={this.submitClick}
          >
            提交
          </Button>
          <Button
            size="large"
            className={styles.edit_btn}
            type="primary"
            onClick={this.linkToImage}
          >
            添加图片
          </Button>
          <Button
            size="large"
            className={styles.edit_btn}
            type="primary"
            onClick={this.restClick}
          >
            重置
          </Button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ saveArticle }) {
  return { ...saveArticle };
}

export default connect(mapStateToProps)(EditArticle);
