
const React = require('react-native');

const { StyleSheet, Dimensions } = React;
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export default{
  wrapper: {
    backgroundColor: '#FBFAFA',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shadow: {
    flex: 1,
    width: deviceWidth,
    height: deviceHeight,
  },
};
