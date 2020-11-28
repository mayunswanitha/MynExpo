import React from 'react';
import {StyleSheet, Text, View, Image,ScrollView
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",  
  },
});

const DetailProject = () => (
  <ScrollView style={{backgroundColor:'#FFE4E1'}}>
     <View >
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:24}}
        source={require('../assets/image/gwk.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Garuda Wisnu Kencana Badung</Text>
      </View>

      <View >
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/pantaisanur.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Pantai Sanur Denpasar</Text>
      </View>

      <View >
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/pinggan.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Wisata Alam Desa Pinggan Bangli</Text>
      </View>

      <View>
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/lempuyang.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Pura Penataran Agung Lempuyang Karangasem</Text>
      </View>
      
      <View>
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/menjangan.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Pulau Menjangan Buleleng</Text>
      </View>

      <View>
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/tirtaempul.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Objek Wisata Tirta Empul Gianyar</Text>
      </View>

      <View>
      <Image
        style={{width:300,
          height:200,
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/penida.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Nusa Penida Klungkung</Text>
      </View>

      <View>
      <Image
        style={{width:300,
          height:200, 
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/tanahlot.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Pura Tanah Lot Tabanan</Text>
      </View>

      <View>
      <Image
        style={{width:300, 
          height:200, 
          marginLeft:30,
          marginTop:10}}
        source={require('../assets/image/rambutsiwi.jpg')}/>
        <Text style={{textAlign:'center', marginTop:2}}>Wisata Religi Bali Pura Rambut Siwi Jembrana</Text>
      </View>
  </ScrollView>
);
export default DetailProject;
