import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import Sign_Up_Screen from './Sign_Up';
import Sign_In_Screen from './Sign_In';



const Stack =createNativeStackNavigator();

function App(){
    return(
       <NavigationContainer>
           <Stack.Navigator >
           <Stack.Screen name='Sign Up' component={Sign_Up_Screen} />
           <Stack.Screen name='Sign In' component={Sign_In_Screen} />
               
               
           </Stack.Navigator>
       </NavigationContainer>
    );
}

export default App;
