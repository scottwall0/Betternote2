/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var NotebookList = require('./Components/Notebooks/NotebookList');
var NoteList = require('./Components/Note/NoteList');
var NewNote = require('./Components/Note/NewNote');

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
  Modal,  
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
          source={require('./Components/Images/BackButton.png')}
        />
      </TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    return (
      <TouchableOpacity>
        <Image
          style={styles.composeButton}
          source={require('./Components/Images/ComposeNote.png')}
        />
      </TouchableOpacity>
    );
  },

  Title: function(route, navigator, index, navState) {
    return (
        <View  style={styles.navBarTitleContainer}>
          <Image
            style={styles.titleIcon}
            source={require('./Components/Images/GeometricLogo.png')}
          />
          <Text style={styles.navBarText}>
            | Notebooks
          </Text>
        </View>
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
      case 'newNote':
        return (<NewNote navigator={nav} />);
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

/*Style information here*/

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
    height: 20,
    width: 15,
    marginLeft: 25,
    marginTop:  15,
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
  navBarTitleContainer: {
    flexDirection: 'row',
  },
  navBarTitleText: {
    color: 'black',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarText: {
    marginTop: 16,
    letterSpacing: 1,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 9,
    color: '#34495e',
  },
  ListStyling: {
    paddingTop: 90,
  },
  composeButton: {
    height: 20,
    width: 20,
    marginRight: 25,
    marginTop: 15,
    tintColor: '#34495e',
  },
  titleIcon: {
    height: 30,
    width: 30,
    marginTop: 10,
    tintColor: '#34495e',
  },

});

AppRegistry.registerComponent('BetterNote2', () => BetterNote2);
