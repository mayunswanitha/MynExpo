import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF0E6",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:50,
  },
});

const UtamaProject = ({ navigation }) => (
  <View style={styles.container}>

      <View>
        <Text style={{
          textAlign:'center',
          color: "black",
          marginTop:170,
          marginBottom:20,
          fontSize:50,
          fontWeight:"bold"
          }}>
          Tempat Wisata Setiap Kabupaten di Bali
        </Text>
      </View>

          <View style={{ 
            alignItems: 'center',
             }}>
            <Text style={{ 
              marginTop:7,
              color:"black",
              fontSize: 15,
              borderWidth:2,
              paddingVertical:10,
              paddingHorizontal:50,
              borderRadius:8,
              backgroundColor:'#E9967A'
              }}  
              onPress={() => navigation.navigate('Detail')}> Pilih Tempat Wisata </Text>
          </View>

 
  </View>
);

export default UtamaProject;
