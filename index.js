// Import the React and React Native libraries
import React from 'react';
import { AppRegistry, Text, View } from 'react-native';

// Create a React component
const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hello World!!!</Text>
    </View>
  );
};

// Register the component with the AppRegistry
AppRegistry.registerComponent('sampleH', () => App);
