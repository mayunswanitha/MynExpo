import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firebase from './firebase'

export default function InputProject({ navigation }) {
  // const [name, setName] = useState(null);
  // const [age, setAge] = useState(null);
  const [listFire, setListFire] = useState(null);


  // useEffect(() => {
  //   try {
  //     firebase.bd.ref('/crud').on('value', (snapshot) => {
  //       const list = [];
  //       snapshot.forEach((childItem) => {
  //         list.push({
  //           key: childItem.key,
  //           age: childItem.val().age,
  //           name: childItem.val().name,
  //         });
  //       });
  //       setListFire(list);
  //     })

  //   } catch (error) {
  //     alert(error);
  //   }
  // }, [])

  useEffect(() => {
    try {
      firebase.bd.ref('/users').on('value', (snapshot) => {
        const list = [];
        snapshot.forEach((childItem) => {
          list.push({
            key: childItem.key,
            name: childItem.val().name,
            email: childItem.val().email,
            nohp: childItem.val().nohp,
            alamat: childItem.val().alamat
        
          });
        });
        setListFire(list);
      })

    } catch (error) {
      alert(error);
    }
  }, [])

  function delFire(key) {
    firebase.bd.ref('/users/' + key).remove()
  }

  function editFire(key, name, email, nohp, alamat) {
    navigation.navigate('Edit',
      {
        key: key,
        name: name,
        email: email,
        nohp: nohp,
        alamat: alamat
      })
  }

  // function createFire() {
  //   try {
  //     firebase.bd.ref('/crud').push({
  //       name: name,
  //       age: age
  //     })

  //   } catch (error) {
  //     alert(error);
  //   }
  //   finally {
  //     setAge('');
  //     setName('');
  //   }
  // }

  return (
    <View style={styles.container}>

      <FlatList style={styles.viewFlat} data={listFire}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) =>

          <View style={styles.iconFlat}>
            {/* <Text style={styles.text1}>Name: {item.name} </Text>
            <Text style={styles.text1}>Age: {item.age}</Text> */}
            <Text style={styles.text1}>Name: {item.name} </Text>
            <Text style={styles.text1}>Email: {item.email}</Text>
            <Text style={styles.text1}>No.Hp: {item.nohp}</Text>
            <Text style={styles.text1}>Alamat: {item.alamat}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'center' }}>
              <TouchableOpacity style={styles.btnEnviar} onPress={() => { editFire(item.key, item.name, item.email, item.nohp, item.alamat) }}>
                <Text style={styles.text}>Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.btnEnviar} onPress={() => { delFire(item.key) }}>
                <Text style={styles.text}>Delete</Text>
              </TouchableOpacity>
            </View>
          </View>

        } />

      {/* <TextInput style={styles.textInput}
        onChangeText={name => setName(name)} value={name}
        placeholder='Yours full name'
      />
      <TextInput style={styles.textInput}
        onChangeText={age => setAge(age)} value={age}
        placeholder='Yours age'
      />
      <TouchableOpacity style={styles.btnEnviar} onPress={createFire}>
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8FBC8F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000',
  },
  text1: {
    color: '#000',
    marginLeft:10
  },
  textInput: {
    width: 300,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 5
  },
  btnEnviar: {
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    width: 150,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconFlat: {
    marginTop: 10,
    width: 350,
    height: 150,
    borderColor: '#000',
    borderWidth: 5,
    borderRadius: 15,
    justifyContent: 'center',
    margin: 5
  },
  btnEnviar: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 15,
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  viewFlat: {
    maxHeight: 410,
  }
});