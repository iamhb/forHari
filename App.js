import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

import Top from './topComponent';
import Middle from './middleComponent';
import Bottom from './bottomComponent';
class App extends Component {
  render() {
    return (
      <View style={style.rootContainer}>
        <TouchableOpacity style={style.top}>
          <Top />
        </TouchableOpacity>
        <TouchableOpacity style={style.middle}>
          <Middle />
        </TouchableOpacity>
        <TouchableOpacity style={style.bottom}>
          <Bottom />
        </TouchableOpacity>
      </View>
    );
  }
}

const {height, width} = Dimensions.get('window');

const style = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  top: {
    backgroundColor: 'red',
    height: height / 3,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  middle: {
    backgroundColor: 'yellow',
    height: height / 3,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    backgroundColor: 'orange',
    height: height / 3,
    width,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
