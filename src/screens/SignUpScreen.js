import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { signUpStyles } from '../styles/signUpStyles';

const SignUpScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigateToSignIn = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      navigation.navigate('SignIn');
    }, 2000);
  };
  return (
    <View style={commonStyles.container}>
      <Text style={signUpStyles.title}>Sign Up</Text>
      <TextInput
        style={signUpStyles.input}
        placeholder="Name"
        
      />
      <TextInput
        style={signUpStyles.input}
        placeholder="Email"
        
      />
      <TextInput
        style={signUpStyles.input}
        placeholder="Password"
        secureTextEntry 
        
      />
      <TouchableOpacity style={signUpStyles.button}
      onPress={isLoading ? null : navigateToSignIn}>
        {isLoading ? ( 
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text style={signUpStyles.buttonText}>Sign Up</Text>
        )}
        
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={signUpStyles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
