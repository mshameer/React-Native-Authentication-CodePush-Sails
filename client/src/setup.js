
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import { StyleProvider } from 'native-base';
import App from 'src/App';
import store from 'src/store';
import getTheme from 'src/theme/components';
import platform from 'src/theme/variables/platform';

function setup():React.Component {
  class Root extends Component {

    render() {
      return (
        <StyleProvider style={getTheme(platform)}>
          <Provider store={store}>
            <App />
          </Provider>
        </StyleProvider>
      );
    }
  }

  return Root;
}

export default setup;
