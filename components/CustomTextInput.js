import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Styling from '../assets/css/Styling';

const CustomTextInput = ({value, onChangeText, placeholder}) => {
  return (
    <TextInput style={Styling.textArea}
        placeholder={placeholder}
        placeholderTextColor="#aaa"
        value={value}
        onChangeText={onChangeText}
        keyboardType="numeric"
        returnKeyType="done"
    />
  );
};

export default CustomTextInput;
