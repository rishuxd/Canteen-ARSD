import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import signinbanner from '../../../images/SignInScreenBanner.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import {useNavigation} from '@react-navigation/native';

const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const onSignInPressd = () => {
    navigation.navigate('HomeScreen');
  };
  const onSignUpPressd = () => {
    navigation.navigate('SignUp');
  };

  const onForgotPasswordPressd = () => {
    navigation.navigate('ResetPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text>Your</Text>
        <Text style={styles.text}>Canteen App</Text>
        <Image
          source={signinbanner}
          style={([styles.logo], {height: height * 0.5})}
          resizeMode="contain"
        />
        <CustomInput
          value={username}
          setValue={setUsername}
          placeHolder="Username"
        />
        <CustomInput
          value={password}
          setValue={setPassword}
          placeHolder="Password"
          secureTextEntry
        />
        <CustomButton onPress={onSignInPressd} text="Sign In" type="PRIMARY" />
        <CustomButton
          onPress={onForgotPasswordPressd}
          text="Forgot password?"
          type="TERTIARY"
        />
        <CustomButton
          onPress={onSignUpPressd}
          text="Don't have an account? Create one"
          type="TERTIARY"
        />

        <SocialSignInButtons />
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

  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 100,
    borderRadius: 10,
  },

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
