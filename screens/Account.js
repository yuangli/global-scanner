import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Account extends React.Component{
  static navigationOptions = {
    headerStyle:{
      backgroundColor: 'orange'
    }
  }
  render(){
    return (  
      <View style={styles.container}>
        <Text>Account Screen</Text>
        <Button
          title="Go to Info"
          onPress={() => this.props.navigation.navigate("Info")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
