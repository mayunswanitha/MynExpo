import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput, Alert
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

const SignupProject = ({ navigation }) => {
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const app = () => {
      navigation.navigate('Login');
  };

  const AuthSignup = async () => {
    const response = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfRwM-eIINVaW4odXsWyBm4y48LUlbPow", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password,
            confirmPass: confirmPass,
            returnSecureToken: true
        })
    })
    const resMyn = await response.json()
    if (response.ok){
      await navigation.navigate('Login')
    } else{
      Alert.alert('ERROR!!!!!', resMyn.error.message,[{
        text:'Yess'
      }])
    }


  }

  return (
    <ScrollView style={{backgroundColor:"#D3D3D3"}}>
      <View >
      <Image
        style={{width:200, height:200, marginLeft:80, marginTop:24}}
        source={require('../assets/image/create.png')}
      />
        <View >
          <Text style={{marginTop:50,
            textAlign:'center',
            fontSize:35,
            fontWeight:"bold"}}>Create Akun</Text>
        </View>

        <View>
        <TextInput style={{textAlign:'center',
        marginTop:20,
        borderWidth:2,
        paddingVertical:5,
        marginHorizontal:20
        }}
            value={username}
            onChangeText={setUsername}
            placeholder="Username"
          />
        <TextInput style={{textAlign:'center',
        borderWidth:2,
        paddingVertical:5,
        marginHorizontal:20,
        marginTop:5
        }}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"

          />
        <TextInput style={{textAlign:'center',
        borderWidth:2,
        paddingVertical:5,
        marginHorizontal:20,
        marginTop:5
        }}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
          /> 
        <TextInput style={{textAlign:'center',
        borderWidth:2,
        paddingVertical:5,
        marginHorizontal:20,
        marginTop:5
        }}
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Confirm Password"
          />
        </View>
        <TouchableOpacity  
            onPress={AuthSignup}
          >
            <Text style={{ 
              color:"black",
              textAlign:'center',
              marginTop:20,
              borderWidth:2,
              borderRadius:8,
              marginHorizontal:125,
              paddingVertical:5,
              backgroundColor:"#E9967A"
               }}>Sign Up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
export default SignupProject;
