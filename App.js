import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Sign_Up_Screen from './Sign_Up';
import Sign_In_Screen from './Sign_In';
import HomeScreen from './Home_Screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Settings_Screen from './Settings_Screen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomePage(){

  return(
    
    <Tab.Navigator  initialRouteName='HomePage' screenOptions={{
      tabBarActiveTintColor:'red',
      tabBarInactiveTintColor:'gray',
      
    }}>
      <Tab.Screen name='HomeScreen' component={HomeScreen} options={{
        headerShown:false,
        
        tabBarLabel:'HomeScreen',
        tabBarIcon:({color,size})=>(
          <Icon name='home' color={color} size={size} />
        ),
        }} />
         <Tab.Screen name='Settings_Screen' component={Settings_Screen} options={{
        headerShown:false,
        
        tabBarLabel:'Settings_Screen',
        tabBarIcon:({color,size})=>(
          <Icon name='home' color={color} size={size} />
        ),
        }} />
    </Tab.Navigator>
    
  );
}



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={Sign_In_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={Sign_Up_Screen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
