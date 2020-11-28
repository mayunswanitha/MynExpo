import React from 'react';
import {
  StyleSheet, View, Text, ScrollView,
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

const ProfileProject = () => (
  <View style={styles.container}>

    <ScrollView style={{backgroundColor:'#FFEFD5'}}>
      <View style={{marginTop:170}}>
        <Text style={{textAlign:'center', fontWeight:'bold', fontSize:40}}>UTS PEMROGRAMAN MOBILE</Text>
      </View>
      <View style={{ marginTop: 50,}}>
        <Text style={{textAlign:'center', fontSize:24}}>Nama : Ni Putu Mayun Swanitha</Text>
        <Text style={{textAlign:'center', fontSize:24}}>Prodi : Sistem Informasi</Text>
        <Text style={{textAlign:'center', fontSize:24}}>Nim : 1801010012</Text>
      </View>


    </ScrollView>
  </View>
);

export default ProfileProject;
