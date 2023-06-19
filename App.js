import React from 'react'
import {View, Button, TextInput } from 'react-native'

class App extends React.Component {
  constructor()
  {
    super();
    this.state={
      name:'',
      email:'',
      password:'',
    }
  }
  submit()
  {
    console.warn(this.state)
  }
  render() {
    return(<View style={{margin:20}}>
      <TextInput
      placeholder='Enter Name'
      OnChangeText={{text}} => { this.setState({name: text}) }}
      style={{borderWidth:2, borderColor: 'slyblue', margin:20}}
      />
      
      
      
      <TextInput
      placeholder='Enter Email'
      OnChangeText={{text}} => { this.setState({email: text}) }}
      style={{borderWidth:2, borderColor: 'slyblue', margin:20}}
      />
  
  <TextInput
      placeholder='Enter Password'
      secureTextEntry={true}
      OnChangeText={{text}} => { this.setState({password: text}) }}
      style={{borderWidth:2, borderColor: 'slyblue', margin:20}}
      />    
  
      <Button title="submit" onPress={()=>{this.submit()}}/>
      </View>)
  }
}

export default App;