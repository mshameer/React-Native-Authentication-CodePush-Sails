
import React, { Component } from 'react';
import { Image, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Item, Input, Button, Icon, View, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';

import { authenticate } from 'src/services/session';
import { exceptionExtractError } from 'src/services/api';
import styles from './styles';

const background = require('../../../images/shadow.png');

export default class Login extends Component {

  state = {
    isLoading: false,
    error: null,
    email: 'user1@facebook.com',
    password: '12345678',
  };

  onPressLogin = () => {
    this.setState({
      isLoading: true,
      error: '',
    });
    dismissKeyboard();

    authenticate(this.state.email, this.state.password)
      .then(() => {
        Actions.home();
      })
      .catch((exception) => {
        const error = exceptionExtractError(exception);
        this.setState({
          isLoading: false,
          ...(error ? { error } : {}),
        });

        if (!error) {
          throw exception;
        }
      });
  }

  render() {
    return (
      <Container>
        <View style={styles.container}>
          <Content>
            <Image source={background} style={styles.shadow}>
              <View style={styles.bg}>
                <Item style={styles.input}>
                  <Icon active name="person" />
                  <Input
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                    onChangeText={email => this.setState({ email })}
                    value={this.state.email}
                  />
                </Item>
                <Item style={styles.input}>
                  <Icon name="unlock" />
                  <Input
                    placeholder="Password"
                    onChangeText={password => this.setState({ password })}
                    value={this.state.password}
                    secureTextEntry
                  />
                </Item>
                <Button style={styles.btn} onPress={this.onPressLogin} >
                  <Text>Login</Text>
                </Button>
              </View>
            </Image>
          </Content>
        </View>
      </Container>
    );
  }
}
