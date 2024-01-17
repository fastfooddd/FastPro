import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';

export default function HomePage({ Navigation }) {
  return (
    <View style={{
      flex: 1,
    }}>
      <LinearGradient
        colors={['#2a0845', '#948E99']}
        style={{
          width: '100%',
          height: '100%',
        }}

      >
        <View
          style={{
            width: '100%',
            height: '30%',
            justifyContent: 'flex-end',
          }} >
          <Image
            source={require('../assets/L1.jpg')}
            style={{
              resizeMode: 'contain',
              width: 80,
              height: 80,
              borderRadius: 80 / 2,
              marginLeft: '70%',

            }} />

          <AntDesign name="user" size={24} color="black" />
          <View>
            <Text
              style={{
                bottom: 100,
                width: 250,
                fontSize: 30,
                marginLeft: 20,
                color: '#E5E5E5',
              }}
            >
              แจ็ค แปปโฮ
            </Text>

            <Text
              style={{
                bottom: 100,
                fontSize: 20,
                marginLeft: 40,
                color: '#E5E5E5',
              }}
            >
              รหัสนักศึกษา
            </Text>

            <Text
              style={{
                bottom: 100,
                fontSize: 12,
                marginLeft: 20,
                color: '#E5E5E5',

              }}
            >
              056350405072-2
            </Text>
          </View>
        </View>
      </LinearGradient>

    </View>
  )
}