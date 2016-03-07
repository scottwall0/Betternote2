/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var NotebookList = require('./Components/Notebooks/NotebookList');
var NoteList = require('./Components/Note/NoteList');

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  ListView,
  TouchableHighlight,
  Text,
  View
} from 'react-native';



/* NavigationBar Assets and Implementation */

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return null;
  },

  RightButton: function(route, navigator, index, navState) {
    return null;
  },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        This is a test
      </Text>
    );
  },

};

/* Navigator Component Management */

class BetterNote2 extends Component {

  renderScene(route, nav) {
    _navigator = navigator;
    switch (route.id) {
      case 'NotebookList':
        return ( <NotebookList navigator={nav}/> );
      case 'notelist':
        return ( <NoteList navigator={nav} {...route.props}/> );

    }
  }


  render() {
    return (
      <Navigator
        initialRoute={{id: 'NotebookList'}}
        renderScene={this.renderScene}
        navigationBar={
          <Navigator.NavigationBar
            style={styles.navBar}
            routeMapper={NavigationBarRouteMapper}
          /> 
        } 
      />
    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  navBar: {
    backgroundColor: 'blue',
  },
  NotebookTitle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginLeft: 50,
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
  },
  welcome: {
    fontSize: 50,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBarTitleText: {
    color: 'blue',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  ListStyling: {
    paddingTop: 90,
  },
});

AppRegistry.registerComponent('BetterNote2', () => BetterNote2);
