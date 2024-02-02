import { View, Text, Image, TouchableOpacity, ScrollView, TextInput, StyleSheet  } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';


export default function HomePage({navigation}) {
  return (
    <View style={{
      flex: 1,
    }}>
      <LinearGradient
        colors={['#5D0F8E','#AA64F0']}
        style={{
          width: '100%',
          height: '100%',
        }}

      >
        <View
          style={{
            width: '90%',
            height: '15%',
            justifyContent: 'center',
            // backgroundColor:'red',
            position:'absolute',
            marginLeft:'5%',
            marginTop:'15%',
          }} >
          <Image
          
            source={require('../assets/L1.jpg')}
            style={{
              resizeMode: 'contain',
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              marginLeft: '80%',
              top:'9%',

            }} />

          <AntDesign style={{
          position:'absolute',
          marginTop:'14%',
          marginLeft:'2%',
          }} name="user" size={19} color="white" />
          <View>
            <Text
              style={{
                bottom: 100,
                width: 250,
                fontSize: 30,
                marginLeft:5,
                marginTop:50,
                color: 'white',
                fontWeight:'bold'
              }}
            >
              แจ็ค แปปโฮ
            </Text>

            <Text
              style={{
                bottom: 99,
                fontSize: 15,
                marginLeft:30,
                color: 'white',

              }}
            >
              รหัสนักศึกษา
            </Text>

            <Text
              style={{
                bottom: 101,
                fontSize: 10,
                marginLeft:'35%',
                color: 'white',
                position:'absolute',
                

              }}
            >
              056350405072-2
            </Text>
          </View>
        </View>
        {/* ///////////////////////////////////////////////////////////////////////////// */}

        <View style={{
            width: '100%',
            height: '75%',
            alignItems:'center',
            backgroundColor:'white',
            borderTopRightRadius:40,
            borderTopLeftRadius:40,
            // position:'absolute',
            // marginLeft:'5%',
            marginTop:'55%',
          }} >
            <View style={{
              width:'85%',
              height:'60%',
              // alignItems:'center',
              justifyContent:'center',
              marginTop:'10%',
              backgroundColor:'red'
            }}>
            <Image
            source={require('../assets/news.jpg')}
            style={{
              // resizeMode: 'contain',
              justifyContent:'center',
              alignItems:'center',
              height: '100%',
              width: '100%',
              // marginLeft: '10%',
              resizeMode:'stretch',
              marginRight:'20%',

            }} />
            
          </View>
          
        </View>
          
          {/* //////////////////////////////////////////////////////////////////////////////// */}

        <View 
        style={{
          width: '100%',
          height: '10%',
          marginTop:'190%',
          position:'absolute',
          backgroundColor:'white',
          borderTopWidth:0.2,
          
          
        }} >

        <View style>
        <Foundation style={{
          marginLeft:'10%',
          marginTop:'6%',
        }} name="home" size={30} color="purple" />
        </View>
        
        <View>
        <Ionicons style={{
          marginLeft:'46%',
          marginTop:'-7%',
        }} name="chatbubble-ellipses" size={30} color="gray" />
        </View>

        <View>
        <Ionicons style={{
          marginLeft:'80%',
          marginTop:'-7%',

        }} name="settings-sharp" size={28} color="gray" />
        </View>

        
        <View style={{
          width:'25%',
          height:'90%',
          // backgroundColor:'red',
          marginLeft:'2%',
          marginTop: '-13%',
        }}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('HomePage')}
                style={{
                  width:'24%',
                  height:'80%',
                }}>
                     <View style={{
                      width:'500%',
                      height:'130%',
                      // backgroundColor:'green',
                      opacity:0.2,
                     }}>

                     </View>

                </TouchableOpacity>
        </View>

        <View style={{
          width:'25%',
          height:'90%',
          // backgroundColor:'red',
          marginLeft:'34%',
          marginTop: '-19%',
        }}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Chat')}
                style={{
                  width:'24%',
                  height:'80%',
                }}>
                     <View style={{
                      width:'500%',
                      height:'130%',
                      // backgroundColor:'green',
                      opacity:0.2,
                     }}>

                     </View>

                </TouchableOpacity>
        </View>

        <View style={{
          width:'25%',
          height:'90%',
          // backgroundColor:'red',
          marginLeft:'66%',
          marginTop: '-19%',
        }}>
            <TouchableOpacity
                onPress={()=> navigation.navigate('ST')}
                style={{
                  width:'23%',
                  height:'80%',
                }}>
                     <View style={{
                      width:'500%',
                      height:'130%',
                      // backgroundColor:'green',
                      opacity:0.2,
                     }}>

                     </View>

                </TouchableOpacity>
        </View>
        </View>
      </LinearGradient>
    </View>
  );
};



const style = StyleSheet.create({});