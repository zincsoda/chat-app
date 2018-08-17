import React, { Component } from 'react';
import { View, Text, Button, Image } from 'react-native';

export default class photoSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.thumbnailSection}>
            <Image 
                style={styles.thumbnail}
                source={{ uri: 'https://cdn.pixabay.com/photo/2016/03/31/19/57/avatar-1295406_960_720.png' }}/>
            <View style={styles.titleContainer}>
                <Text>username</Text>
            </View>
        </View>
        <View>
            <Image 
                style={{ width:null, height:400}}
                source={{ uri:'https://igx.4sqi.net/img/general/200x200/27800332_JAuDZyrTYB55Ctip1Uy3JVs70j10-09fGHMQOfvqN_E.jpg' }}/>
        </View>
        <View>
            
        </View>
        <View style={styles.usernameCaption}>
            <Text >username</Text>
            <Text style={{paddingLeft: 5}}>caption</Text>
        </View>
      </View>
    );
  }
}

const styles = {
    container: {
        margin: 10
    },
    thumbnailSection: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#ddd',
        borderBottomWidth: 1
    },
    thumbnail: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    titleContainer: {
        justifyContent: 'center',
        padding: 5
    },
    usernameCaption: {
        flexDirection: 'row'
    }
}
