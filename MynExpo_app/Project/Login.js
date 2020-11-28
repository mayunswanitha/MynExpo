import React from 'react';
import { StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

const LoginProject = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handlerLogin = () => {
    navigation.navigate('Tab');
  };

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
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
            
          />
          <TextInput style={{textAlign:'center', borderWidth:2, marginTop:5, paddingVertical:5}}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          
            secureTextEntry
          />
          <TouchableOpacity
            
            onPress={handlerLogin}
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
