import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');
  const navigation = useNavigation();

  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendPressed = () => {
    console.log('Resend Pressed');
  };

  const onConfirmPressed = () => {
    navigation.navigate('NewPassword');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>

        <CustomInput
          value={code}
          setValue={setCode}
          placeHolder="Enter the confirmation code"
        />
        <CustomButton
          onPress={onConfirmPressed}
          text="Confirm"
          type="PRIMARY"
        />
        <CustomButton
          onPress={onResendPressed}
          text="Resend Code"
          type="SECONDARY"
        />
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

export default ConfirmEmailScreen;
