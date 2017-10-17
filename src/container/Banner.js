import React from 'react';
import TweenOne from 'rc-tween-one';
import BannerAnim, { Element } from 'rc-banner-anim';
import { connect } from 'dva';
import styles from './style.less';

const num = 0.8;

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: document.body.offsetWidth,
    };
  }

  componentDidMount() {
    const $this = this;
    window.addEventListener('resize', () => {
      $this.setState({
        width: document.body.offsetWidth,
      });
    });
  }

  renderBody = (data) => {
    const { width } = this.state;
    return data.map((item) => {
      return (
        <Element key={item['_id']}>
          <TweenOne animation={{ x: -30, type: 'from' }}>
            <a href={`#/articleDetail?id=${item['_id']}`}>
              <div
                className={styles.banner_item}
                style={{ background: `url(${item.titleImg})`, backgroundSize: 'cover' }}
              >
                {item.name}
              </div>
            </a>
          </TweenOne>
        </Element>
      );
    });
  }
  render() {
    return (
      <div className={styles.banner_container}>
        <BannerAnim
          className={styles.animation_banner}
          autoPlay
          autoPlaySpeed={3000}
          type={['grid']}
        >
          {this.renderBody(this.props.list)}
        </BannerAnim>
      </div>
    )
  }
}

function mapStateToProps({ banner }) {
  console.log(banner);
  return { ...banner };
}

export default connect(mapStateToProps)(Banner);
