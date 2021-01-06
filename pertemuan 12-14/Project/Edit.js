import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firebase';

export default function EditProject({ route, navigation }) {
  const [name, setName] = useState(route.params.name);
  const [email, setEmail] = useState(route.params.email);
  const [nohp, setNohp] = useState(route.params.nohp);
  const [alamat, setAlamat] = useState(route.params.alamat);
  // const [age, setAge] = useState(route.params.age);

  function upDateFire() {
    try {
      firebase.bd.ref('/users/' + route.params.key).update({
        name: name,
        email: email,
        nohp: nohp,
        alamat: alamat,
      })

    } catch (error) {
      alert(error);
    }
    finally {
      // setAge('');
      setName('');
      setEmail('');
      setNohp('');
      setAlamat('');
      navigation.navigate("Input")
    }
  }

  return (
    <View style={styles.all}>
      <ScrollView style={styles.bawah}>

        <Text style={styles.text}>Name</Text>
        <TextInput style={styles.textInput} onChangeText={name => setName(name)} value={name} />

        <Text style={styles.text}>Email</Text>
        <TextInput style={styles.textInput} onChangeText={title => setEmail(email)} value={email} />

        <Text style={styles.text}>No.Hp</Text>
        <TextInput style={styles.textInput} onChangeText={comment => setNohp(nohp)} value={nohp} />

        <Text style={styles.text}>Alamat</Text>
        <TextInput style={styles.textInput} onChangeText={comment => setAlamat(alamat)} value={alamat} />

        <TouchableOpacity style={styles.btnEnviar} onPress={() => { upDateFire() }}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnEnviar} onPress={() => navigation.navigate("Input")}>
          <Text style={styles.text}>Cancel</Text>
        </TouchableOpacity>
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  all: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  bawah:{
marginTop:30
  },
  text: {
    color: '#000',
    textAlign:"center"
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginLeft:100
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 10,
  },
});