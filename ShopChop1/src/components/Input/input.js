import React from "react";
import { View, TextInput } from "react-native";
import styles from './input.style';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const CustomInput = ({ title, onType, value, iconName, textVisible}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.inputContainer}
        placeholder={title}
        onChangeText={onType}
        value={value}
        secureTextEntry={textVisible}
      />
      <Icon name={iconName} size={50} color="#64b5f6" />
    </View>
  );
}

export default CustomInput;
