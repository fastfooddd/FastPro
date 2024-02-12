import { View, Text, Image, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native'
import React, { useState ,useEffect } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { firebase } from '../firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";





export default function RegisterA({navigation}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordA, setPasswordA] = useState('')
    const [name, setName] = useState('')
    const [id, setId] = useState('')

    const togglepassword = () => [setshowpass(!showpass) ]
    const handleSignUp = () => {
        console.log('name==> ', name);
        console.log('email==> ', email);
        console.log('id', id);
        console.log('password==> ', password);
        console.log('passwordA', passwordA);
        
  
  
  
        const handleSignup = getAuth(); 
        //  console.log("auth: ",auth);
        createUserWithEmailAndPassword(handleSignup, email, password, passwordA, name, id)
          .then((userCredential) => {
            console.log("userCredential: ", userCredential);
            // Rigister
            const user = userCredential.user.uid;
            navigation.navigate("LoginA")
            firebase.firestore().collection('Users').doc(user).set({
              Name : name,
              Email : email,
              ID : id,
              Password : password,
              passwordA : passwordA,
  
            });
            firebase
            .firestore()
            .collection("Users")
            // .doc("All")
            .update({
              ListName: firebase.firestore.FieldValue.arrayUnion({
                email: email,
                name: name,
              }),
            });
        })
        .catch(function (error) {
          console.log("Error getting document: ", error);
        });
    };

  return (
    <View
    style={{
        flex:1,
    }}>
       
        <Image style={{
            zIndex:1
        }}
        source={require('../assets/backgg.jpg')}
        />
       
        <View
        style={{
            width:'100%',
            height:'80%',
            backgroundColor:'white',
            marginTop:'55%',
            zIndex:2,
            position:'absolute',
            borderTopLeftRadius:80,
            alignItems:'center'
            
        }}>
            <Text style={{
                fontSize:18,
                marginTop:20,
                fontWeight:'bold'
            }}>
                Sign up
            </Text>
            <Text style={{
                marginTop:'3%',
                marginRight:'60%'
            }}>
                ชื่อ-นามสกุล
            </Text>
            <View style={{
                    width: '80%',
                    height: '8%',
                    // backgroundColor:'#692099',
                    marginTop: '1%',
                    justifyContent: 'flex-start',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <AntDesign name="user" size={24} color="black"
                        style={{
                            marginLeft: 10
                        }}

                    />
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                        }}
                        placeholder='ชื่อ-นามสกุล'
                        value={name}
                        fontsize={16}
                        placeholderTextColor='gray'
                        onChangeText={(Text) => setName(Text)}
                    />
                    {/* รหัสผ่าน     */}

                </View>
                <Text style={{
                marginTop:'3%',
                marginRight:'70%'
            }}>
                e-mail
            </Text>
            <View style={{
                    width: '80%',
                    height: '8%',
                    // backgroundColor:'#692099',
                    marginTop: '1%',
                    justifyContent: 'flex-start',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Fontisto name="email" size={24} color="black"
                        style={{
                            marginLeft: 10
                        }}

                    />
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                        }}
                        placeholder='@rmutp.ac.th'
                        value={email}
                        fontsize={16}
                        placeholderTextColor='gray'
                        onChangeText={(Text) => setEmail(Text)}
                    />
                    {/* รหัสผ่าน     */}

                </View>
                <Text style={{
                marginTop:'3%',
                marginRight:'60%'
            }}>
                รหัสนักศึกษา
            </Text>
            <View style={{
                    width: '80%',
                    height: '8%',
                    // backgroundColor:'#692099',
                    marginTop: '1%',
                    justifyContent: 'flex-start',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Ionicons name="person-circle-outline" size={24} color="black"
                        style={{
                            marginLeft: 10
                        }}

                    />
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                        }}
                        placeholder='XXXXXXXXXXXX-X'
                        value={id}
                        fontsize={16}
                        placeholderTextColor='gray'
                        onChangeText={(Text) => setId(Text)}
                      
                    />
                    {/* รหัสผ่าน     */}

                </View>
                <Text style={{
                marginTop:'3%',
                marginRight:'68%'
            }}>
                รหัสผ่าน
            </Text>
            <View style={{
                    width: '80%',
                    height: '8%',
                    // backgroundColor:'#692099',
                    marginTop: '1%',
                    justifyContent: 'flex-start',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Feather name="unlock" size={24} color="black"
                        style={{
                            marginLeft: 10
                        }}

                    />
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                        }}
                        placeholder='รหัสผ่าน'
                        value={password}
                        fontsize={16}
                        placeholderTextColor='gray'
                        secureTextEntry={true}
                        onChangeText={(Text) => setPassword(Text)}
                    />
                    {/* รหัสผ่าน     */}

                </View>
                <Text style={{
                marginTop:'3%',
                marginRight:'60%'
            }}>
                ยืนยันรหัสผ่าน
            </Text>
            <View style={{
                    width: '80%',
                    height: '8%',
                    // backgroundColor:'#692099',
                    marginTop: '1%',
                    justifyContent: 'flex-start',
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: '#ECE8E8',
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Feather name="unlock" size={24} color="black"
                        style={{
                            marginLeft: 10
                        }}

                    />
                    <TextInput
                        style={{
                            paddingHorizontal: 10,
                        }}
                        placeholder='ยืนยันรหัสผ่าน'
                        value={passwordA}
                        fontsize={16}
                        placeholderTextColor='gray'
                        secureTextEntry={true}
                        onChangeText={(Text) => setPasswordA(Text)}
                    />
                    {/* รหัสผ่าน     */}

                </View>
                <TouchableOpacity
                    onPress={handleSignUp}
                    style={{
                        width: '50%',
                        height: '8%',
                        backgroundColor: '#D69CEF',
                        marginTop: '10%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10,
                    }}>
                    <Text style={{
                        fontSize: 16,
                        color: 'white',
                        fontWeight: 'bold',

                    }}>
                        CREATE ACOUNT
                    </Text>
                    {/* <ActivityIndicator size="large" color="blue" animating={false} /> */}
                </TouchableOpacity>
                
        </View>
    </View>
  )
}