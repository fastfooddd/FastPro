import { View, Text, TextInput,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Register({navigation}) {
  return (
    <View style={{
      flex:1,
  }}>
    
      <LinearGradient
        colors={['#2a0845','#948E99']}
        style={{
          width:'100%',
          height:'100%',}}
          >

            <Image 
          source={require('../assets/logormutp.png')}
          style={{
              resizeMode:'contain',
              width:'80%',
              height:'20%',
              backgroundColor:'Red',
              position:'absolute',
              top:'21.5%',
              left:'5%',
              
          }}/>

          <Image 
            source={require('../assets/461493.png')}
            style={{
              resizeMode:'contain',
              width:'80%',
              height:'20%',
              backgroundColor:'Red',
              position:'absolute',
              top:'6%',
              left:'10%',
              
          }}/>
            

            <View style={{
                    width:'100%',
                    height:'80%',
                    backgroundColor:'white',
                    
                    marginTop:'1%',
                    // padding:'flex',
                    top:'35%',
                    borderTopRightRadius:10,
                    borderTopLeftRadius:10,    
                    
                }}>
                  
                  <Text style={{
                    width:'50%',
                    height:'5%',
                    // backgroundColor:'#692099',
                    justifyContent:'center',
                    left:'37%',
                    top:'2%',
                    fontSize: 20,
                  }}>
                    สมัครสมาชิก
                  </Text>

                  <Text style={{
                    width:'30%',
                    height:'5%',
                    // backgroundColor:'#692099',
                    marginLeft:'11%',
                    marginTop:'3%',
                    fontSize: 15,
                    opacity:0.8,
                  }}>
                    ชื่อ-นามสกุล
                  </Text>

                  <Text style={{
                    width:'30%',
                    height:'5%',
                    // backgroundColor:'#692099',
                    marginLeft:'11%',
                    fontSize: 15,
                    opacity:0.8,
                    position:'absolute',
                    top:'22%',
                    
                  }}>
                    e-mail
                  </Text>

                  <Text style={{
                    width:'30%',
                    height:'5%',
                    // backgroundColor:'#692099',
                    marginLeft:'11%',
                    fontSize: 15,
                    opacity:0.8,
                    position:'absolute',
                    top:'34%',
                    
                  }}>
                    รหัสนักศึกษา
                  </Text>

                  <Text style={{
                    width:'30%',
                    height:'5%',
                    // backgroundColor:'#692099',
                    marginLeft:'11%',
                    fontSize: 15,
                    opacity:0.8,
                    position:'absolute',
                    top:'46%',
                    
                  }}>
                    รหัสผ่าน
                  </Text>

                  <Text style={{
                    width:'30%',
                    height:'5%',
                    // backgroundColor:'#692099',
                    marginLeft:'11%',
                    fontSize: 15,
                    opacity:0.8,
                    position:'absolute',
                    top:'58%',
                    
                  }}>
                    ยืนยันรหัสผ่าน
                  </Text>

                    {/* // ชื่อผู้ใช้ , */}
                  <View style={{
                    width:'80%',
                    height:'6%',
                    borderColor:'gray',
                    backgroundColor:'white',
                    borderRadius:5,
                    borderWidth:1,
                    marginLeft:45,
                    // justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center',
                    // padding:'flex',
                    margintop:'5%',
                    }}>
                  <AntDesign style={{ 
                    marginLeft:5,
                  
                  }} name="user" size={19} color="black" />

                  <TextInput style={{
                    paddingHorizontal:10,}}
                    placeholder='ชื่อนามสกุล'
                    fontsize={16}
                    placeholderTextColor='gray'
                    
                    
                  />
                  </View>
                    {/* ////////////////////เมล///////////////////////// */}
                  <View style={{
                    width:'80%',
                    height:'6%',
                    borderColor:'gray',
                    backgroundColor:'white',
                    borderRadius:5,
                    borderWidth:1,
                    marginLeft:45,
                    // justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center',
                    // padding:'flex',
                    top:'15%',
                    }}>
                  <Fontisto style={{ 
                    marginLeft:5,
                  
                  }} name="email" size={20} color="black" />

                  <TextInput style={{
                    paddingHorizontal:10,}}
                    placeholder='email'
                    fontsize={16}
                    placeholderTextColor='gray'
                    
                    
                  />
                  </View>
                      {/* //////////////////รหัสนศ///////////////////////// */}
                  <View style={{
                    width:'80%',
                    height:'6%',
                    borderColor:'gray',
                    backgroundColor:'white',
                    borderRadius:5,
                    borderWidth:1,
                    marginLeft:45,
                    // justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center',
                    // padding:'flex',
                    top:'25%',
                    }}>
                  <Ionicons 
                  style ={{marginLeft:5}} name="person-circle-outline" size={20} color="black" />

                  <TextInput style={{
                    paddingHorizontal:10,}}
                    placeholder='รหัสนักศึกษา'
                    fontsize={16}
                    placeholderTextColor='gray'
                    
                    
                  />
                  </View>
                      {/* ////////////////////พาสเวิดดดดดดดดดดด///////////////////////// */}
                  <View style={{
                    width:'80%',
                    height:'6%',
                    borderColor:'gray',
                    backgroundColor:'white',
                    borderRadius:5,
                    borderWidth:1,
                    marginLeft:45,
                    // justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center',
                    // padding:'flex',
                    top:'35%',
                    }}>
                   <Feather style={{ 
                    marginLeft:5,
                  
                  }} name="unlock" size={20} color="black" />

                  <TextInput style={{
                    paddingHorizontal:10,}}
                    placeholder='รหัสผ่าน'
                    fontsize={16}
                    placeholderTextColor='gray'
                    secureTextEntry={true}
                    
                  />
                  
                  </View>
                    {/* ////////////////////พาสเวิดดดดดดดดดดด///////////////////////// */}
                  <View style={{
                    width:'80%',
                    height:'6%',
                    borderColor:'gray',
                    backgroundColor:'white',
                    borderRadius:5,
                    borderWidth:1,
                    marginLeft:45,
                    // justifyContent:'center',
                    flexDirection:'row',
                    alignItems:'center',
                    // padding:'flex',
                    top:'45%',
                    }}>
                   <Feather style={{ 
                    marginLeft:5,
                  
                  }} name="unlock" size={20} color="black" />

                  <TextInput style={{
                    paddingHorizontal:10,}}
                    placeholder='ยืนยันรหัสผ่าน'
                    fontsize={16}
                    placeholderTextColor='gray'
                    secureTextEntry={true}

                  />
                  
                  </View>

                  <TouchableOpacity
                onPress={()=> navigation.navigate('')} 
                style={{
                    width:'35%',
                    height:'7%',
                    backgroundColor:'#903ED6',
                    marginTop:'55%',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius:5,
                    borderWidth:1,
                    marginLeft:140,
                    
                    borderColor:'#ECE8E8'
                }}>
                     <Text style={{
                      fontSize:15,
                    
                     }}>
                     submit 
                    </Text>

                </TouchableOpacity>













                
                </View>
        
        
          
      </LinearGradient> 
      </View>
    
    ) 
      }