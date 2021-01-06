import React,{useState} from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput, Alert
} from 'react-native';
import firebase from './firebase';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        marginTop: 25
    },
    inputgrup: {
        marginBottom: 15,
        borderBottomWidth: 1,
        borderColor: '#DEB887',
        borderRadius: 20,
        marginHorizontal: 30
    }
});

const DataProject = ({ navigation }) => {
    const GoTo = (screen) => {
        navigation.navigate(screen)
    }

    const [state, setState] = useState ({
        name: "",
        email: "",
        nohp: "",
        alamat: ""
    })
    
    const handleChangeText = (name, value) => {
        setState ({ ...state, [name]: value})
    }

    const submit = async () => {
        if (state.name === '') {
            alert ('Data belum di input')
        }
        else {
          //   await firebase.db.collection('users').add({
              await firebase.bd.ref('/users').push({
                name: state.name,
                email: state.email,
                nohp: state.nohp,
                alamat: state.alamat

            })
            alert('Data Sudah Berhasil Diinput!')
        }
    }
    
    // const savecomment = async () => {
    //     if (state.name === '') {
    //         alert ('Please provide a name')
    //     }
    //     else {
    //         await firebase.db.collection('users').add({
    //             name: state.name,
    //             email: state.email,
    //             nohp: state.nohp,
    //             alamat: state.alamat
    //         })
    //         alert('Seved!')
    //     }
    // }


    return(
        <ScrollView style={styles.container}>
            <View>
        <Text style={{
          textAlign:'center',
          color: "black",
          marginTop:50,
          marginBottom:20,
          fontSize:50,
          fontWeight:"bold"
          }}>
          Data Pengunjung
        </Text>
      </View>

        <View style={styles.inputgrup}>
                <TextInput style={{margin: 5,
                marginHorizontal: 15,
                marginTop: 100}}
                placeholder= "Full Name"
                onChangeText= {(value) => handleChangeText ("name", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput style={{margin: 5,
                marginHorizontal: 15}}
                placeholder= "Email"
                onChangeText= {(value) => handleChangeText ("email", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput style={{margin: 5,
                marginHorizontal: 15}}
                placeholder= "No.Hp"
                onChangeText= {(value) => handleChangeText ("nohp", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput style={{margin: 5,
                marginHorizontal: 15}}
                placeholder= "Alamat"
                onChangeText= {(value) => handleChangeText ("alamat", value)}
                />
            </View>



            <TouchableOpacity onPress={() => submit ()} style={{width: 125,
                backgroundColor: '#DEB887',
                padding: 10, 
                borderRadius: 40,
                alignSelf: 'center',
                marginTop: 20}}>

                <Text style={{ textAlign: 'center',color: '#fff', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GoTo('Input')} style={{width: 125,
                backgroundColor: '#DEB887',
                padding: 10, 
                borderRadius: 40,
                alignSelf: 'center',
                marginTop: 20}}>

                <Text style={{ textAlign: 'center',color: '#fff', fontSize: 16 }}>Lihat Data</Text>
            </TouchableOpacity>
        </ScrollView>
    );
}
export default DataProject;