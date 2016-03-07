

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

module.exports = NotebookList;