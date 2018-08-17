import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

export default class PhotoFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
            photos: 'dummy'
    };
  }
  
  componentDidMount() {
      this.setState( { photos: 'photo'})
  }

  render() {
    return (
    <TouchableWithoutFeedback onPress={ () => console.log("hello")}>
        <View>
            <Text> { this.state.photos } </Text>
        </View>
    </TouchableWithoutFeedback>
    );
  }
}
