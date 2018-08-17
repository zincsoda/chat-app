import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Header from './src/components/header'
//import PhotoSection from './src/components/photo-section'
import SignInForm from './src/components/sign-in'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import reducers from './src/reducers';
import PhotoFeed from './src/components/photo-feed';

const store = createStore(reducers)

export default class App extends React.Component {
  render () {
    return (
      <Provider store={ store }>
        <View>
          <Header text="Sign in"/>
          <SignInForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});