import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput
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
      navigation.navigate('Tab');
  };

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
           
            onPress={app}
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
};

export default SignupProject;
