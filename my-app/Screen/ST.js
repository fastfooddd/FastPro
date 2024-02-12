import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function ST({navigation}) {
  return (
    <View style={{
      flex: 1,
    }}>
      <View
        style={{
          width: '100%',
          height: '100%',
          backgroundColor:'white'
        }}>
         

         {/* <Image 
          source={require('../assets/logormutp.png')}
          style={{
              resizeMode:'contain',
              width:'80%',
              height:'20%',
              backgroundColor:'Red',
              position:'absolute',
             marginTop:'1%',
<Entypo name="chevron-left" size={24} color="black" />
          }}/> */}

            <TouchableOpacity 
            onPress={()=> navigation.navigate('HomePage')}
            style={{}}>

        <Entypo style={{
            position:'absolute',
            marginLeft:'5%',
            marginTop:'13%',
        }} name="chevron-left" size={30} color="black"/>
       </TouchableOpacity>   



        <View style={{
            backgroundColor:'white',
            width:'100%',
            height:'70%',
            marginTop:'90%',
            
            
        }}>


        <TouchableOpacity 
            onPress={()=> navigation.navigate('LoginA')}
            style={{
                width:'45%',
                height:'10%',
                backgroundColor:'red',
                marginLeft:'30%',
                marginTop:'95%',
                justifyContent:'center',
                alignItems:'center',
                borderWidth:1,
                borderRadius:20, 
                borderColor:'red',
                          
            }}>
           <Text style={{
            color:'white',
            fontWeight:'bold',
            fontSize:18
           }}>
            Logout
           </Text>
            
    
            </TouchableOpacity>
        </View >

        
       




      </View>
    </View>
  )
}