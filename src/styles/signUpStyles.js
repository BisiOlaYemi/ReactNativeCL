import { StyleSheet } from 'react-native';

export const signUpStyles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  button: {
    width: '60%',
    height: 50,
    backgroundColor: 'blue', 
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
