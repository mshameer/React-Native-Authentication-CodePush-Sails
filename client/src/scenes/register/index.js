
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {
	Container,
	Header,
	Title,
	InputGroup,
	Input, Spinner,
	Button, Content,
	Icon, Left,  Body, Right,Text,
	View
} from 'native-base';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { TouchableWithoutFeedback } from 'react-native';
import { create } from 'src/data/users/api';
import { exceptionExtractError } from 'src/services/api';
import { openDrawer } from 'src/utils/drawer';
import FormMessage from 'src/components/FormMessage';
import styles from './styles';

class Register extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

	state= {
		isLoading: false,
		error: null,
		firstName: '',
		email: '',
		password: '',
	};

	onPressRegister() {
		this.setState({
			isLoading: true,
			error: '',
		});
		dismissKeyboard();

		const { firstName, email, password } = this.state;
		create({ firstName, email, password }).then(() => {
			Actions.home();
		}).catch((exception) => {
			const error = exceptionExtractError(exception);
			const newState = {
				isLoading: false,
				...(error ? { error } : {}),
			};
			this.setState(newState);
		});
	}

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>

          <Body>
            <Title>New User</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="ios-menu" />
            </Button>
          </Right>
        </Header>

        <Content padder>
          <TouchableWithoutFeedback onPress={dismissKeyboard} >
            <View style={styles.content} >
              {this.state.error ? (
                <FormMessage message={this.state.error} />
              ) : null}
              <InputGroup style={styles.input}>
                <Icon style={styles.inputIcon} name="ios-arrow-forward" />
                <Input
                  placeholder="First name"
                  autoCorrect={false}
                  onChangeText={firstName => this.setState({ firstName })}
                  value={this.state.firstName}
                />
              </InputGroup>
              <InputGroup style={styles.input}>
                <Icon style={styles.inputIcon} name="ios-person" />
                <Input
                  placeholder="Email"
                  keyboardType="email-address"
                  autoCorrect={false}
                  autoCapitalize="none"
                  onChangeText={email => this.setState({ email })}
                  value={this.state.email}
                />
              </InputGroup>
              <InputGroup style={styles.input}>
                <Icon style={styles.inputIcon} name="ios-unlock" />
                <Input
                  placeholder="Password"
                  onChangeText={password => this.setState({ password })}
                  value={this.state.password}
                  secureTextEntry
                />
              </InputGroup>
              {this.state.isLoading ? (
                <Spinner size="small" color="#000000" />
              ) : (
                <Button
                  style={styles.button}
                  onPress={() => this.onPressRegister()}
                >
                  <Text> Register </Text>
                </Button>
              )}
            </View>
          </TouchableWithoutFeedback>
        </Content>
      </Container>
    );
  }
}

const bindAction = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
});

export default connect(null, bindAction)(Register);
