import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';

import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigation = useNavigation();

  const onRegisterPressd = () => {
    navigation.navigate('HomeScreen');
  };
  const onSignInPressd = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.log('Terms Of Use Pressed');
  };
  const onPrivacyPolicyPressed = () => {
    console.log('Privacy Policy Pressed');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.text}>Create Account</Text>

        <CustomInput
          value={username}
          setValue={setUsername}
          placeHolder="Enter Username"
        />

        <CustomInput
          value={email}
          setValue={setEmail}
          placeHolder="Enter Email"
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeHolder="Password"
          secureTextEntry
        />
        <CustomInput
          value={repeatPassword}
          setValue={setRepeatPassword}
          placeHolder="Repeat Password"
          secureTextEntry
        />
        <CustomButton
          onPress={onRegisterPressd}
          text="Register"
          type="PRIMARY"
        />
        <Text style={styles.para}>
          By registering, you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>
            Terms of Use{' '}
          </Text>
          and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
            Privacy Policy
          </Text>
        </Text>

        <SocialSignInButtons />
        <CustomButton
          onPress={onSignInPressd}
          text="Have an account? Sign In"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FEF4F4',
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  para: {
    color: 'gray',
    marginVertical: 10,
    width: '80%',
  },
  link: {
    color: '#FDB075',
  },
});

export default SignUpScreen;
