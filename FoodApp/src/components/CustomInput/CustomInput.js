import {View, TextInput, StyleSheet} from 'react-native';
import React from 'react';

const CustomInput = ({value, setValue, placeHolder, secureTextEntry}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={setValue}
        placeholder={placeHolder}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '80%',

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,

    paddingHorizontal: 10,
  },
  input: {},
});

export default CustomInput;
