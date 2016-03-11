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

class NoteList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2
      })
    };
  }

  componentDidMount() {
    var notes = this.props.notes;
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(notes)
    });
  }

  goToNote(note) {
    this.props.navigator.push({
      component: Note,
      title: "test",
      passProps: {note},
    });
  }

  renderNote(note) {
    return(
      <TouchableHighlight onPress={() => this.goToNote(note)}>
        <View style={styles.outerContainer}>
          <View>
            <View style={styles.innerContainer}>
              <Text style={styles.NoteTitle}>
                {note.title}
              </Text>
              <Text style={styles.NoteText} numberOfLines={3}>
                test
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
         <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderNote.bind(this)}
      />
    );
  }
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  innerContainer: {
    backgroundColor: 'white',
    padding: 10,
    marginLeft: 35,
    marginTop: 7,
    marginBottom: 8,
    width: 350,
  },
  NoteTitle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
    fontSize: 17,
    paddingBottom: 8,
  },
  NoteText: {
    marginTop: 2,
    color: 'grey',
    lineHeight: 21,
    letterSpacing: .25,
  }
});

module.exports = NoteList;