import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Screen/Login";
import Register from "./Screen/Register";

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


      </Stack.Navigator>
    </NavigationContainer>
  );
}