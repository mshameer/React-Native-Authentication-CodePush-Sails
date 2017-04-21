import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Animated,
  LayoutAnimation,
  View,
  Image,
} from 'react-native';
import styles from './styles';
import { refreshToken } from 'src/services/session';
import { Actions } from 'react-native-router-flux';
const background = require('../../../images/splash.png');

class Splash extends Component {
  static propTypes = {
    isHydrated: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);
    this.logoOpacity = new Animated.Value(0);
  }

  componentDidMount() {
    Animated.spring(
      this.logoOpacity,
      { toValue: 1, duration: 500 },
    ).start(this.initialize);
  }

  initialize = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    if (this.props.isHydrated) {
      refreshToken().then(() => {
        Actions.home();
      }).catch(() => {
        Actions.login();
      });
    }
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Animated.View
          style={[
            { opacity: this.logoOpacity },
          ]}
        >
        <Image source={background} style={styles.shadow} />
        </Animated.View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
	isHydrated: state.services.persist.isHydrated,
});

export default connect(mapStateToProps)(Splash);
