import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Sign_Up_Screen from './Sign_Up';
import Sign_In_Screen from './Sign_In';
import HomeScreen from './Home_Screen';

import Icon from 'react-native-vector-icons/FontAwesome'


const Stack =createNativeStackNavigator();

function App(){
    const Tab = createBottomTabNavigator();
    return(
       <NavigationContainer>
           <Tab.Navigator initialRouteName='Home'
           screenOptions={{
               tabBarActiveTintColor:'red',
               tabBarInactiveBackgroundColor:'gray'
           }}
           >
                <Tab.Screen name='Sign Up' component={Sign_Up_Screen}
               options={{
                   tabBarLabel:'Sign Up',
                   tabBarIcon:({color,size})=>(
                       <Icon name='pencil' color={color} size={size} /> )
               }}
               />

               
                <Tab.Screen name='SignIn' component={Sign_In_Screen}
               options={{
                   tabBarLabel:'Sign In',
                   tabBarIcon:({color,size})=>(
                       <Icon name='pencil' color={color} size={size} /> )
               }}
               />

            
           </Tab.Navigator>
          
       </NavigationContainer>
    );
}

export default App;
