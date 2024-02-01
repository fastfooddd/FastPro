import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import React, { useState ,useEffect } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';


export default function Login({navigation}) {

    const [email , setemail ] = useState("")
    const [password , setpassword] = useState("")
    const [showpass , setshowpass] = useState("true")

    const togglepassword = () => [
        setshowpass(!showpass) 
    ]
  

  return (
    <View style={{
        flex:1,
        }}>
        <LinearGradient
          colors={['#2a0845','#948E99']}
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
                    justifyContent:'flex-start',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8',
                    flexDirection:'row' ,
                    alignItems:'center'                    
                }}>
                    <Feather name="user" size={24} color="#ffff" 
                    style={{
                        marginLeft: 10
                    }}

                    />
                   <TextInput 
                   style={{
                    paddingHorizontal:10,
                   }}
                   placeholder='@rmutp.ac.th'
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
                    marginTop:'3%',
                    justifyContent:'flex-start',
                    alignItems:'center',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8', 
                    flexDirection: 'row',
                    // justifyContent: 'space-around'
                }}>
                    <Feather name="key" size={24} color="#ffff" 
                    style = {{
                        marginLeft: 10,
                    }}
                    />

                   <TextInput 
                   style={{
                    width: '75%',
                    height: '50%',

                    marginLeft: 10 ,
                    justifyContent: 'flex-end',
                   }}
                   placeholder='Password'
                   fontsize={16}
                   placeholderTextColor='#ffff'
                   onChangeText={(Text)=>setemail(Text)}
                //    secureTextEntry={showpass}

                   
                   />
                   <TouchableOpacity style = {{
                    width:'10%',
                    height:'100%',
                    marginRight: 10 ,
                    justifyContent:'center',
                    alignItems:'center'
                    
                   }}
                  onPress={togglepassword}
                >{showpass ? (
                  <Entypo name="eye" size={24} color="#ffff" 
                  
                  />
                ) : (
                  <Entypo name="eye-with-line" size={24} color="#ffff" />
                )}
                </TouchableOpacity>
                    
                </View>
                {/* ปุ่ม Login */}
                <TouchableOpacity
                onPress={()=> navigation.navigate('LoginA')}
                style={{
                    width:'80%',
                    height:'6%',
                    backgroundColor:'#692099',
                    marginTop:'20%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8'
                }}>
                     <Text 
                        style={{ 
                            fontSize: 16, 
                            fontWeight: 'bold',
                            color: '#ffff'}}
                        >
                        Login
                    </Text>

                </TouchableOpacity>
                {/* ปุ่ม Register */}
                <TouchableOpacity
                onPress={()=> navigation.navigate('Register')}
                style={{
                    width:'80%',
                    height:'6%',
                    backgroundColor:'#692099',
                    marginTop:'2%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    borderWidth:1,
                    borderColor:'#ECE8E8'
                }}>
                     <Text
                     style={{ 
                            fontSize: 16, 
                            fontWeight: 'bold',
                            color: '#ffff'}}
                    >
                        Register
                    </Text>

                </TouchableOpacity>
            </View>

        </LinearGradient> 
        </View>
  )
        }