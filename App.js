import React, { Component} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import Conversor from './src/Conversor';

// https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=a2e3d86b1dbb6297d887

class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Conversor moedaA="USD" moedaB="BRL"/>
        <Conversor moedaA="EUR" moedaB="BRL"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App;
//teste
