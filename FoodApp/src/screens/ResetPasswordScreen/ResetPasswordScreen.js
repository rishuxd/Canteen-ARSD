import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ResetPasswordScreen = () => {
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  const onSendPressed = () => {
    navigation.navigate('ConfirmEmail');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput
          value={username}
          setValue={setUsername}
          placeHolder="Enter your username"
        />
        <CustomButton onPress={onSendPressed} text="SEND" type="PRIMARY" />

        <CustomButton
          onPress={onSignInPressed}
          text="Back to Sign in"
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

  logo: {
    width: '70%',
    maxWidth: 500,
    maxHeight: 100,
    borderRadius: 10,
  },

  title: {
    // alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default ResetPasswordScreen;
