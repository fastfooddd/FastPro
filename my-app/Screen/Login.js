import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient';

export default function Login({navigation}) {

    const [email , setemail ] = useState("")
    const [password , setpassword] = useState("")
  

  return (
    <View style={{
        flex:1,
    }}>
        <LinearGradient
          colors={['#a044ff','#ffff']}
          style={{
            width:'100%',
            height:'100%',
          }}
        >
            <View style={{
                width:'100%',
                height:'100%',
                alignItems:'center',
                marginTop:'40%',
                
            }}>
                <Image 
                source={require('../assets/logormutp.png')}
                style={{
                    resizeMode:'contain',
                    width:'90%',
                    height:'20%',
                    backgroundColor:'Red',
                }}/>
                {/* /// กรอกอีเมลล์ */}
                <View style={{
                    width:'80%',
                    height:'5.5%',
                    backgroundColor:'#692099',
                    marginTop:'10%',
                    justifyContent:'center',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8'
                    
                }}>
                   <TextInput 
                   style={{
                    paddingHorizontal:10,
                   }}
                   placeholder='กรอกอีเมล'
                   fontsize={16}
                   placeholderTextColor='#ffff'
                   onChangeText={(Text)=>setemail(Text)}
                   />
                {/* รหัสผ่าน     */}
                </View>
                <View style={{
                    width:'80%',
                    height:'5.5%',
                    backgroundColor:'#692099',
                    marginTop:'1%',
                    justifyContent:'center',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8'
                    
                }}>
                   <TextInput 
                   style={{
                    paddingHorizontal:10,
                   }}
                   placeholder='รหัสผ่าน'
                   fontsize={16}
                   placeholderTextColor='#ffff'
                   onChangeText={(Text)=>setemail(Text)}
                   secureTextEntry={true}
                   />
                    
                </View>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Register')}
                style={{
                    width:'80%',
                    height:'5.5%',
                    backgroundColor:'#692099',
                    marginTop:'1%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8'
                }}>
                     <Text>
                        login
                    </Text>

                </TouchableOpacity>
            </View>

        </LinearGradient> 
        </View>
  )
        }
            