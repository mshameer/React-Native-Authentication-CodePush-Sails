
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Actions, ActionConst } from 'react-native-router-flux';
import { Container, Header, Title, Content, Text, Button,
  Icon, Left, Body, Right, Spinner, List, ListItem } from 'native-base';
import { bindActionCreators } from 'redux';

import { openDrawer } from 'src/utils/drawer';
import { fetchUsers } from 'src/data/users/actions';
import styles from './styles';

const renderList = (items) => {
	const itemsArray = Object.keys(items).map(itemKey => items[itemKey]);
	itemsArray.sort((item1, item2) => item1.id > item2.id);

	if (itemsArray.length === 0) {
		return (
			<Spinner size="small" color="#000000" />
		);
	}

	return (
		<List>
			{itemsArray.map(item => (
				<ListItem key={item.id}>
					<Text>{item.firstName}</Text>
					<Text note>{item.email}</Text>
				</ListItem>
			))}
		</List>
	);
};

class Home extends Component {

  static propTypes = {
    users: React.PropTypes.object,
    fetchUsers: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  componentDidMount() {
		this.props.fetchUsers();
	}

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.register()}>
              <Icon active name="power" />
            </Button>
          </Left>

          <Body>
            <Title>{(this.props.name) ? this.props.name : 'Home'}</Title>
          </Body>

          <Right>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon active name="menu" />
            </Button>
          </Right>
        </Header>

        <Content>
          {renderList(this.props.users)}
        </Content>
      </Container>
    );
  }
}

const bindAction = dispatch => ({
  openDrawer: () => dispatch(openDrawer()),
  fetchUsers: () => dispatch(fetchUsers()),
});

const mapStateToProps = state => ({
	users: state.data && state.data.users.items,
});

export default connect(mapStateToProps, bindAction)(Home);
