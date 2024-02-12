import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomePage from "./Screen/HomePage";
import Chat from "./Screen/Chat";
import ChatA from "./Screen/ChatA";
import ST from "./Screen/ST";
import Comment from "./Screen/Comment";
import LoginA from "./Screen/LoginA";
import RegisterA from "./Screen/RegisterA";
import Test from "./Screen/Test";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen 
      name="LoginA" 
      component={LoginA}
      options={{ headerShown:false}} />
      <Stack.Screen 
      name="HomePage" 
      component={HomePage}
      options={{ headerShown:false}} /> 
      <Stack.Screen
       name="Chat" 
       component={Chat}
       options={{ headerShown:false}} /> 
       <Stack.Screen
       name="ChatA" 
       component={ChatA}
       options={{ headerShown:false}} /> 
       <Stack.Screen
       name="ST" 
       component={ST}
       options={{ headerShown:false}} />
       <Stack.Screen 
      name="Comment" 
      component={Comment}
      options={{ headerShown:false}} />
       <Stack.Screen 
      name="RegisterA" 
      component={RegisterA}
      options={{ headerShown:false}} />
      <Stack.Screen 
      name="Test" 
      component={Test}
      options={{ headerShown:false}} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}