import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function LoginA({ navigation }) {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [showpass, setshowpass] = useState("true")

    const togglepassword = () => [
        setshowpass(!showpass)
    ]

    return (
        <View
            style={{
                flex: 1,
            }}>

            <Image style={{
                zIndex: 1
            }}
                source={require('../assets/backgg.jpg')}
            />

            <View
                style={{
                    width: '100%',
                    height: '70%',
                    backgroundColor: 'white',
                    marginTop: '66%',
                    zIndex: 2,
                    position: 'absolute',
                    borderTopLeftRadius: 80,
                    alignItems: 'center'
                }}>

                <Text style={{
                    marginTop: 30,
                    fontSize: 16,
                    fontWeight: 'bold',
                }}>
                    RMUTP Community
                </Text>
                <View style={{
                    width: '80%',
                    height: '10%',
                    // backgroundColor:'#692099',
                    marginTop: '10%',
                    justifyContent: 'flex-start',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Feather name="user" size={24} color="black"
                        style={{
                            marginLeft: 10
                        }}

                    />
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                        }}
                        placeholder='@rmutp.ac.th'
                        fontsize={16}
                        placeholderTextColor='gray'
                        onChangeText={(Text) => setemail(Text)}
                    />
                    {/* รหัสผ่าน     */}

                </View>
                <View style={{
                    width: '80%',
                    height: '10%',
                    // backgroundColor:'#692099',
                    marginTop: '6%',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    // justifyContent: 'space-around'
                }}>
                    <Feather name="key" size={24} color="black"
                        style={{
                            marginLeft: 10,
                        }}
                    />

                    <TextInput
                        style={{
                            width: '75%',
                            height: '50%',

                            marginLeft: 10,
                            justifyContent: 'flex-end',
                        }}
                        placeholder='Password'
                        fontsize={16}
                        placeholderTextColor='glay'
                        onChangeText={(Text) => setpassword(Text)}
                        // secureTextEntry={showpass}


                    />
                    <TouchableOpacity style={{
                        width: '10%',
                        height: '100%',
                        marginRight: 10,
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}
                        onPress={togglepassword}
                    >{showpass ? (
                        <Entypo name="eye" size={24} color="black"

                        />
                    ) : (
                        <Entypo name="eye-with-line" size={24} color="black" />
                    )}
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    onPress={() => navigation.navigate('HomePage')}
                    style={{
                        width: '60%',
                        height: '9%',
                        backgroundColor: '#D69CEF',
                        marginTop: '18%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                    }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'white',
                        fontWeight: 'bold',

                    }}>
                        Sign in
                    </Text>
                </TouchableOpacity>
                <View style={{
                    flexDirection: 'row',
                    marginTop: 25

                }}>
                    <View>
                        <Text style={{
                            fontSize: 16
                        }}>
                            doesn't have an account ?
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RegisterA')}
                        style={{
                            marginLeft: 10
                        }}>
                        <Text style={{
                            fontWeight: 'bold',
                            color: '#702A92',
                            fontSize: 16
                        }}>
                            Sign up
                        </Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    )
}