var Notelist = require('../Note/NoteList')

'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Navigator,
  ListView,
  TouchableHighlight,
  Text,
  TextInput,
  ScrollView,
  View
} from 'react-native';


class NewNote extends React.Component {

  render() {
    console.log(this.state)


    return (
      <ScrollView>
        <TextInput
          style={styles.titleInput}
          onChangeText={(text) => this.setState({text})}
          keyboardType='default'
        />
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.setState({text})}
          multiline={true}
          keyboardType='default'
          autoFocus={true}
        />
      </ScrollView>
    );
  }
  
};

var styles = StyleSheet.create({
  titleInput: {
    lineHeight: 50,
    letterSpacing: .5,
    borderColor: 'gray',
    color: 'gray',
    borderWidth: 0,
    height: 20,
    width: 310,
    marginLeft: 40,
    marginBottom: 15,
    marginTop: 20,
  },
  textInput: {
    lineHeight: 50,
    letterSpacing: 20,
    fontFamily: 'Helvetica',
    fontSize: 40,
    height: 400,
    borderColor: 'gray',
    borderWidth: 0,
    width: 325,
    marginLeft: 40,
    letterSpacing: 0.5,
    fontSize: 17,
    color: 'black',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
  },
  NotebookTitle: {
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginLeft: 40,
    fontSize: 17,
    textAlign: 'center',
    margin: 10,
  }
});

module.exports = NewNote;