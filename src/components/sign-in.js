import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import InnerSection from './inner-section';
import firebase from 'firebase';
import authInputChange from '../actions';
// import { connect } from 'react-redux';

export default class SignInForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // const config = {
    //   apiKey: "AIzaSyDyKgA2rKb4DZc1iB27mupwBZssSb_VEwY",
    //   authDomain: "chat-snap-7m.firebaseapp.com",
    //   databaseURL: "https://chat-snap-7m.firebaseio.com",
    //   projectId: "chat-snap-7m",
    //   storageBucket: "chat-snap-7m.appspot.com",
    //   messagingSenderId: "1027257314996"
    // };
    // firebase.initializeApp(config);
  }
  
  _handlePress() {
    console.log('Pressed!');
  }

  render() {
    return (
      <View>
          
        <Image 
          style={{ width:null, height:200}}
          source={{ uri:'https://cdn.dribbble.com/users/122350/screenshots/2528636/chat_wave_1x.png' }}
          />
        
        <View style={styles.appNameContainer}>
            <Text style={styles.appNameText}>Chat Waves</Text>
        </View>   

        <InnerSection>
          <FormInput 
            autoCapitalize = 'none' 
            placeholder="email" 
            //onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}
            />
        </InnerSection>

        <InnerSection>        
          <FormInput 
            placeholder="password" 
            secureTextEntry={true}
            // onChangeText={text => this.props.authInputChange({'field': 'email', 'value': text})}
          />
        </InnerSection>          
        
        <InnerSection>
            <Button title="Sign in" 
                    backgroundColor={'#af2911'}
                    onPress={this._handlePress}
                    />;
        </InnerSection>

      </View>
    );
  }
}

// export default connect(null, { authInputChange }) (SignInForm);

const styles = {
  container: {
      margin: 10
  },
  appNameContainer: {
    paddingBottom: 50,
    alignItems: 'center'
  },
  appNameText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 13
}  
}