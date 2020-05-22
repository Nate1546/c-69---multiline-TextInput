import React, {Component} from 'react';
import {Text,StyleSheet,View} from 'react-native'

export default class WriteStory extends Component{
    render(){
        return (
            <View style= {styles.container}>
              <Text style={styles.textStyle}> There was a small boy who wanted to
               learn coding,{'\n'} 
               He found it very difficult in the beginning..
               {'\n'}As he slowly learned, he came to learning REACT NATIVE...
               {'\n'} He found it exciting now...
               </Text>
          </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
    },
    textStyle:{
        fontSize:35,
        fontWeight:'bold'
    }
});