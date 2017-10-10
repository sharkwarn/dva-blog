import React from 'react';
import { connect } from 'dva';

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
    const { loading, name, content } = this.props;
    console.log(content)
    return (
      <div className="markdown-body entry-content">
        <h1>{name}</h1>
        <article
          dangerouslySetInnerHTML={{ __html: content }}
        >
        </article>
      </div>
    );
  }
}

function mapStateToProps({ articleDetail }) {
  return { ...articleDetail };
}

export default connect(mapStateToProps)(ArticleDetail);
