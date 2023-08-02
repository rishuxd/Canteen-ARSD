import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const NewPasswordScreen = () => {
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const navigation = useNavigation();
  const onSignInPressd = () => {
    navigation.navigate('SignIn');
  };
  const onSubmitPressd = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>

        <CustomInput
          value={code}
          setValue={setCode}
          placeHolder="Enter your confirmation code"
        />
        <CustomInput
          value={newPassword}
          setValue={setNewPassword}
          placeHolder="Enter your new Password"
          secureTextEntry
        />
        <CustomButton onPress={onSubmitPressd} text="Submit" type="PRIMARY" />
        <CustomButton
          onPress={onSignInPressd}
          text="Back to Sign In"
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

  text: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  title: {
    // alignSelf: 'flex-start',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default NewPasswordScreen;
