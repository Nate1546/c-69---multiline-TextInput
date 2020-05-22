import React, { Component,useState } from 'react';
import { TextInput,StyleSheet,View,Text } from 'react-native';

export default function UselessTextInput() {
  const [value, onChangeValue] = useState();

  return (
    <View>
      <TextInput
        style={{ 
          height:160, 
          borderColor: 'red', 
          borderWidth: 5 }}
        onChangeText={text => onChangeValue(text)}
        maxLength={1000}
        multiline='True'
        numberOfLines={10}
        keyboardType='number-pad'
       // defaultValue='Hi harrison' //OR
        placeHolder='Type any nonsense here..'
        placeholderTextColor='blue'
        value={value}/>
      <Text style={styles.textStyle}>
        {value}
      </Text>
    </View>
  );
}

const styles=StyleSheet.create({
  textStyle:{
  fontSize:24,
  }
})  
