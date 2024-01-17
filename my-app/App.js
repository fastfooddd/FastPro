import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screen/Login";
import Register from "./Screen/Register";
import HomePage from "./Screen/HomePage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>

      <Stack.Screen 
      name="Login" 
      component={Login}
      options={{ headerShown:false}} />
      <Stack.Screen 
      name="Register" 
      component={Register}
      options={{ headerShown:false}} />  
      <Stack.Screen 
      name="HomePage" 
      component={HomePage}
      options={{ headerShown:false}} /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}