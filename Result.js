import React, {Component} from 'react';
import {View, Text} from 'react-native';
class Result extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.result}</Text>
      </View>
    );
  }
}

export default Result;
