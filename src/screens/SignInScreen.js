import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { commonStyles } from '../styles/commonStyles';
import { signInStyles } from '../styles/signInStyles';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={commonStyles.container}>
      <Text style={signInStyles.title}>Sign In</Text>
      <TextInput
        style={signInStyles.input}
        placeholder="Email"
        // Add onChangeText handler
      />
      <TextInput
        style={signInStyles.input}
        placeholder="Password"
        secureTextEntry // For hiding password
        // Add onChangeText handler
      />
      <TouchableOpacity style={signInStyles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={signInStyles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={signInStyles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;
