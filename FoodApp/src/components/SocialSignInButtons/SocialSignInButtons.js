import {View, Text} from 'react-native';
import React from 'react';
import CustomButton from '../CustomButton';

const SocialSignInButtons = () => {
  const onFacebookSignInPressd = () => {
    console.log('Facebook Sign In');
  };

  const onAppleSignInPressd = () => {
    console.log('Apple Sign Up');
  };
  const onGoogleSignInPressd = () => {
    console.log('Google Sign In');
  };
  return (
    <>
      <CustomButton
        onPress={onFacebookSignInPressd}
        text="Sign with Facebook"
        type="PRIMARY"
        bgColor="#E7EAF4"
        fgColor="#4765A9"
      />
      <CustomButton
        onPress={onAppleSignInPressd}
        text="Sign with Apple"
        type="PRIMARY"
        bgColor="#e3e3e3"
        fgColor="#363636"
      />
      <CustomButton
        onPress={onGoogleSignInPressd}
        text="Sign with Google"
        type="PRIMARY"
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
    </>
  );
};

export default SocialSignInButtons;
