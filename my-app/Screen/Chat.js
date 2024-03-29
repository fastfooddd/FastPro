import { View, Text, Image, TouchableOpacity, TouchableOpacity1, TouchableOpacity2, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Chat({ navigation }) {
  return (
    <View style={{
      flex: 1,
    }}>
      <View
        backgroundColor='white'
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
            position: 'absolute',
            marginLeft: '5%',
            marginTop: '15%',
          }} >
          <Image
            source={require('../assets/L1.jpg')}
            style={{
              resizeMode: 'contain',
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              marginLeft: '80%',
              top: '9%',

            }} />

          <AntDesign style={{
            position: 'absolute',
            marginTop: '14%',
            marginLeft: '2%',
          }} name="user" size={19} color="gray" />
          <View>
            <Text
              style={{
                bottom: 100,
                width: 250,
                fontSize: 30,
                marginLeft: 5,
                marginTop: 50,
                color: 'black',
                fontWeight: 'bold'
              }}
            >
              แจ็ค แปปโฮ
            </Text>

            <Text
              style={{
                bottom: 100,
                fontSize: 19,
                marginLeft: 30,
                color: 'gray',
              }}
            >
              รหัสนักศึกษา
            </Text>

            <Text
              style={{
                bottom: 103,
                fontSize: 12,
                marginLeft: '38%',
                color: 'gray',
                position: 'absolute',


              }}
            >
              056350405072-2
            </Text>
          </View>
        </View>
        {/* /////////// CHAT BOX //////////// */}
        <View style={{
          width: '100%',
          height: '75%',
          backgroundColor: '#EEE9E9',
          marginTop: '40%',
          alignItems: 'center',
          borderTopWidth: 0.2,
        }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Comment')}
            style={{
              width: '95%',
              height: '30%',
              marginTop: '2%',
              borderRadius: 20,
              backgroundColor: 'white'
            }}>

          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('ChatA')}
            style={{
              width: 60,
              height: 60,
              borderRadius: 60 / 2,
              marginTop: '80%',
              marginLeft:'80%',
              alignItems:'center',
              justifyContent:'center',
              // borderRadius: 20,
              backgroundColor: '#D69CEF'
            }}>
              <MaterialCommunityIcons style={{
                
              }} name="message-plus-outline" size={40} color="#483D8B" />

          </TouchableOpacity>


        </View>
        {/* /////////// CHAT BOX //////////// */}

        {/* /////////////////////////ChatA//////////////////////////*/}
        <TouchableOpacity
          onPress={() => navigation.navigate('ChatA')}
          style={{
            width: '15%',
            height: '7%',
            // position:"absolute",
            // backgroundColor:'white',
            marginLeft: '83%',
            marginTop: '165%',
            // borderWidth:1,
            borderColor: 'purple',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign style={{
          }} name="pluscircle" size={50} color="gray" />



        </TouchableOpacity>




        {/* ///////////////////////////////////// footer /////////////////////////////////////////////*/}
        <View
          style={{
            width: '100%',
            height: '10%',
            marginTop: '190%',
            position: 'absolute',
            backgroundColor: 'white',
            borderTopWidth: 0.2,

          }} >

          <View style>
            <Foundation style={{
              marginLeft: '10%',
              marginTop: '6%',
            }} name="home" size={30} color="gray" />
          </View>

          <View>
            <Ionicons style={{
              marginLeft: '46%',
              marginTop: '-7%',
            }} name="chatbubble-ellipses" size={30} color="purple" />
          </View>

          <View>
            <Ionicons style={{
              marginLeft: '80%',
              marginTop: '-7%',

            }} name="settings-sharp" size={28} color="gray" />
          </View>


          <View style={{
            width: '25%',
            height: '90%',
            // backgroundColor:'red',
            marginLeft: '2%',
            marginTop: '-13%',
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HomePage')}
              style={{
                width: '24%',
                height: '80%',
              }}>
              <View style={{
                width: '500%',
                height: '130%',
                // backgroundColor:'green',
                opacity: 0.2,
              }}>

              </View>

            </TouchableOpacity>
          </View>

          <View style={{
            width: '25%',
            height: '90%',
            // backgroundColor:'red',
            marginLeft: '34%',
            marginTop: '-19%',
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Chat')}
              style={{
                width: '24%',
                height: '80%',
              }}>
              <View style={{
                width: '500%',
                height: '130%',
                // backgroundColor:'green',
                opacity: 0.2,
              }}>

              </View>

            </TouchableOpacity>
          </View>

          <View style={{
            width: '25%',
            height: '90%',
            // backgroundColor:'red',
            marginLeft: '66%',
            marginTop: '-19%',
          }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ST')}
              style={{
                width: '24%',
                height: '80%',
              }}>
              <View style={{
                width: '500%',
                height: '130%',
                // backgroundColor:'green',
                opacity: 0.2,
              }}>

              </View>

            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}