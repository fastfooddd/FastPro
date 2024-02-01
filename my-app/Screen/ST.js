import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function ST({navigation}) {
  return (
    <View style={{
      flex: 1,
    }}>
      <LinearGradient
        colors={['#2a0845', '#948E99']}
        style={{
          width: '100%',
          height: '100%',
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

          }}/> */}

            <TouchableOpacity 
            onPress={()=> navigation.navigate('HomePage')}
            style={{}}>

        <Ionicons style={{
            position:'absolute',
            marginLeft:'5%',
            marginTop:'10%',
        }} name="arrow-back" size={25} color="white"/>
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
           }}>
            Log out
           </Text>
            
    
            </TouchableOpacity>
        </View >

        
       




      </LinearGradient>
    </View>
  )
}