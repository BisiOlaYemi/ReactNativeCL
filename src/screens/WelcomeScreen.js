import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { welcomeStyles } from '../styles/welcomeStyles';

const WelcomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigateToSignUp = () => {
    setIsLoading(true); 

    setTimeout(() => {
      setIsLoading(false); 
      navigation.navigate('SignUp'); 
    }, 2000); 
  };

  return (
    <View style={commonStyles.container}>
      <Text style={welcomeStyles.title}>Welcome!</Text>
      <TouchableOpacity
        style={welcomeStyles.button}
        onPress={isLoading ? null : navigateToSignUp} 
      >
        {isLoading ? ( 
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={welcomeStyles.buttonText}>Get Started</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;
