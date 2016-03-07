/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var NotebookListView = require('./Components/Notebooks/NotebookList');
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



/* GET /notebooks/1 */
var NOTE_DATA = [
  {
   
 id: 1,
    title: "Fist me cuz",
    body: "Don't bone me bro.",
    notebook_id: 1,
    url: "{url}/notes/1.json"
  },
  {
    id: 2,
    title: "Fist me cuz",
    body: "Don't bone me bro.",
    notebook_id: 1,
    url: "{url}/notes/1.json"
  }
];

/* GET /notebooks */
var NOTEBOOK_DATA = [
  {
    id: 1,
    name: "lol",
    notes: NOTE_DATA
  },
  {
    id: 2,
    name: "the sekrets",
    notes: []
  }
]


class NotebookList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    var notebooks = NOTEBOOK_DATA;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(notebooks)
    });
  }

  goToNoteList(notebook) {
    this.props.navigator.push({
      component: Notelist,
      title: notebook.name + " " + "Notes",
      props: {notes: notebook.notes},
    });
  }

  renderNotebook(notebook) {
    return(
      <TouchableHighlight onPress={() => this.goToNoteList(notebook)}>
        <View style={styles.container}>
          <Text style={styles.NotebookTitle}>
            {notebook.name}
          </Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
         <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderNotebook.bind(this)}
          style={styles.ListStyling}
      />
    );
  }
};

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
