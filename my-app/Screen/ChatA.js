import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

export default function ChatA({ navigation }) {
    return (
        <View style={{
            flex: 1,
        }}>
            <View
                backgroundColor='white'
                style={{
                    width: '100%',
                    height: '100%',
                }}>
                <View style={{
                    width: '100%',
                    height: '30%',
                    // borderBottomWidth:1,
                    backgroundColor: '#D8BFD8',
                    flexDirection: 'row'
                    // borderBottomEndRadius:1
                    // opacity:0.2
                }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Chat')}
                        style={{
                            width: '25%',
                            height: '15%',
                            marginTop: '13%',
                            marginLeft: '1%',
                            // backgroundColor: 'red',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10
                        }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginRight: 10,
                            color: 'black'
                        }}>
                            ยกเลิก
                        </Text>

                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Chat')}
                        style={{
                            width: '20%',
                            height: '15%',
                            marginTop: '13%',
                            marginLeft: '50%',
                            backgroundColor: '#D69CEF',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                            
                            // borderColor: '#D8BFD8',
                            // borderWidth: 1,
                        }}>
                        <Text style={{
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: 'white'
                        }}>
                            POST
                        </Text>

                    </TouchableOpacity>

                </View>
                <View
                    style={{
                        width: '100%',
                        height: '70%',
                        // justifyContent: 'center',
                        backgroundColor: 'white',
                        borderTopWidth:0.2,
                        position: 'absolute',
                        // marginLeft:'5%',
                        marginTop: '30%',
                        // borderRadius: 20,
                        flexDirection: 'row'
                    }} >
                    <Image
                        source={require('../assets/L1.jpg')}
                        style={{
                            resizeMode: 'contain',
                            width: 50,
                            height: 50,
                            borderRadius: 50 / 2,
                            marginLeft: 10,
                            top: '5%',

                        }} />
                    <TextInput
                        style={{
                            width: '75%',
                            height: '20%',
                            marginLeft:10,
                            // backgroundColor: 'blue',
                            // justifyContent:'flex-start',
                            // alignItems:'flex-start'
                            // marginBottom:'100%'
                        }}
                        placeholder='มีอะไรเกิดขึ้นบ้าง'
                        fontsize={16}

                        placeholderTextColor='gray'
                    />
                    
                </View>
                    {/* <FontAwesome style={{
                        marginTop:'80%',
                        marginLeft:'10%'
                        
                    }} name="picture-o" size={24} color="black" /> */}



            </View>

        </View>
    )
}