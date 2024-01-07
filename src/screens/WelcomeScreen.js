import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { welcomeStyles } from '../styles/welcomeStyles';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={commonStyles.container}>
      <Text style={welcomeStyles.title}>Welcome!</Text>
      <TouchableOpacity style={welcomeStyles.button} onPress={() => navigation.navigate('SignUp')}>
        <Text style={welcomeStyles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
