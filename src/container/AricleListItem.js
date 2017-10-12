import React from 'react';
import TweenOne from 'rc-tween-one';

class AricleListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, num } = this.props;
    const content = item.content.replace(/<.{1,6}>/g, '').replace(/&lt;.{1,6}&gt;/g, '').replace(/<img.+>/g, '').replace(/&lt;img.+&gt;/g, '');
    let position;
    switch (num % 4)
    {
      case 0:
        position = { x: -10, type: 'from' };
        break;
      case 1:
        position = { y: -10, type: 'from' };
        break;
      case 2:
        position = { x: 10, type: 'from' };
        break;
      case 3:
        position = { y: 10, type: 'from' };
        break;
      default:
        position = { x: -10, type: 'from' };
    }
    return (
      <TweenOne style={{ height: '200px' }} animation={{ ...position, duration: 1000, repeat: -1, yoyo: true }}>
        <a href={`#/articleDetail?id=${item['_id']}`}>
          { num % 2 === 0 ? (
            <div
              style={{ height: '100%', background: `url(${item.titleImg})`, backgroundSize: 'cover' }}
            >
            </div>
          ) : null }
          <h3>{item.name}</h3>
          {/* <p>{item.content.replace(/&lt;(.)&gt;/g, '')}</p> */}
          <p>{content}</p>
          { num % 2 !== 0 ? (
            <div
              style={{ height: '100%', background: `url(${item.titleImg})`, backgroundSize: 'cover' }}
            >
            </div>
          ) : null }
        </a>
      </TweenOne>
    );
  }
}

export default AricleListItem;