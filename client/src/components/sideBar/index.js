
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Content, Text, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';
import * as session from 'src/services/session';
import * as usersActionCreators from 'src/data/users/actions';
import { closeDrawer } from 'src/utils/drawer';

import styles from './style';

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    actions: React.PropTypes.shape({
			users: React.PropTypes.object,
		}),
  }

  onPressLogout() {
		session.revoke().then(() => {
      Actions.login();
      this.props.actions.users.empty();
      this.props.closeDrawer();
		});
	}


  render() {
    return (
      <Content style={styles.sidebar} >
        <ListItem button onPress={() => { Actions.home(); this.props.closeDrawer(); }} >
          <Text>Home</Text>
        </ListItem>
        <ListItem button onPress={() => { Actions.register(); this.props.closeDrawer(); }} >
          <Text>Register</Text>
        </ListItem>
        <ListItem button onPress={() => this.onPressLogout()} >
          <Text>Logout</Text>
        </ListItem>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    actions: {
  		users: bindActionCreators(usersActionCreators, dispatch),
  	},
  };
}

export default connect(null, bindAction)(SideBar);
