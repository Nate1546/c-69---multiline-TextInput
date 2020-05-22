import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header() {
  return (
    <View style={styles.header}>
      <Text style= {{ fontSize: 30}}>BedTime Stories</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex:0.1,
    backgroundColor: '#370',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    width:'100%'
  },
});
