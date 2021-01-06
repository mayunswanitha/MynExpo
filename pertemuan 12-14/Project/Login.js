import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

const LoginProject = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('Tab');
  };

  const AuthLogin = async () => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfRwM-eIINVaW4odXsWyBm4y48LUlbPow", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password,
            returnSecureToken: true
        })
    })
    const resMyn = await response.json()
    if(response.ok){
      await navigation.navigate('Tab')
    } else{
      Alert.alert('ERROR!!!!!', resMyn.error.message,[{
        text:'Yess'
      }])
    }

  }


  return (
    <ScrollView style={{backgroundColor:"bisque"}}>
      <View style={{
        padding: 24,
        
      }}>
        <View> 
        <Image
        style={{width:200, height:200, marginLeft:55}}
        source={require('../assets/image/login.png')}
      />
        </View>
        <Text style={{fontSize:40,
        textAlign:'center', marginTop:60, color:"black", fontWeight:"bold"}}>Login </Text>
  
        <View>
          <TextInput style={{textAlign:'center', marginTop:20, borderWidth:2, paddingVertical:5}}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            
          />
          <TextInput style={{textAlign:'center', borderWidth:2, marginTop:5, paddingVertical:5}}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          
            secureTextEntry
          />
          <TouchableOpacity
            
            onPress={AuthLogin}
          >
            <Text style={{ 
              color:"black",
              marginTop:20,
              textAlign:'center',
              borderWidth:2,
              borderRadius:8,
              marginHorizontal:100,
              paddingVertical:5,
              backgroundColor:"#E9967A"
               }}>Login</Text>
          </TouchableOpacity>

          <View>

          <TouchableOpacity
            onPress={() => navigation.navigate('Signup')}
          >
            <Text style={{ color: "black",
            textAlign:'center',
            marginTop:10,
            borderWidth:2,
            borderRadius:8,
            marginHorizontal:100,
            paddingVertical:5,
            backgroundColor:"#E9967A"
            }}>Sign Up</Text>
          </TouchableOpacity>
      </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginProject;
