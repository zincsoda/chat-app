import React, { Component } from 'react';
import { View } from 'react-native';

const InnerSection = props => {
    return <View style={styles.container}>{props.children}</View>
}

const styles = {
    container: {
        paddingTop: 10,
        paddingBottom: 10,
    }
}

export default InnerSection;