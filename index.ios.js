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
  TouchableOpacity,
  Text,
  Image,
  View
} from 'react-native';



/* NavigationBar Assets and Implementation */

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <TouchableOpacity onPress={() => navigator.pop()}>
        <Image
          style={styles.previousButton}
          source={require('./Components/Images/BackButtonIcon.png')}
        />
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity>
        <Image
          style={styles.composeButton}
          source={require('./Components/Images/ComposeNoteIcon.png')}
        />
        </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity>
        <Image
          style={styles.titleIcon}
          source={require('./Components/Images/BetternoteLogo.png')}
        />
      </TouchableOpacity>
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
    backgroundColor: 'white',
  },
  NotebookTitle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginLeft: 500,
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
  },
  previousButton: {
    height: 15,
    width: 15,
    marginLeft: 25,
    paddingTop: 30,
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
    color: 'black',
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
  composeButton: {
    height: 35,
    width: 35,
    marginRight: 25,
    marginTop: 10,
    tintColor: 'red',
  },
  titleIcon: {
    height: 35,
    width: 35,
    marginTop: 10,
    tintColor: 'red',
  },

});

AppRegistry.registerComponent('BetterNote2', () => BetterNote2);
