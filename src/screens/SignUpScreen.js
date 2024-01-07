import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { signUpStyles } from '../styles/signUpStyles';

const SignUpScreen = ({ navigation }) => {
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
      <TouchableOpacity style={signUpStyles.button} onPress={() => navigation.navigate('SignIn')}>
        <Text style={signUpStyles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={signUpStyles.linkText}>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignUpScreen;
