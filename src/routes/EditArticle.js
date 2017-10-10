import React from 'react';
import EditArticleContainer from './../container/EditArticle';

class EditArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <EditArticleContainer />
      </div>
    );
  }
}

export default EditArticle;
