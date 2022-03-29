import {
    ScrollView,
    Text ,
    ImageBackground,
    View,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import React,{useState} from 'react';


 function Sign_Up_Screen (props) {

    function navigateToPage(){
     props.navigation.navigate("Sign In");
 }

    


  return (
    <ScrollView style={{flex:1,backgroundColor:'#ffffff'}}
    showsVerticalScrollIndicator={false}>
        <ImageBackground source={require('./1.jpg')}
        style={{height:130}}>
        </ImageBackground>

        <View style={styles.bottomView}>
            <View style={{padding:30}}>
              <Text style={{color:'#330099' ,fontSize:30}}> Welcome</Text>
              <Text> 
                  Dont have an account?
                  <Text style={{color:'red' ,fontStyle:'italic'}}> Register now</Text>
              </Text>
             
             <View style={{margin:30}}>
                <Text style={styles.text_footer}> Firstname</Text>
                <View style={styles.action}>
                    <TextInput placeholder='your firstname' style={styles.textinput} />
                    
                </View>

                <View style={{margin:20 ,marginLeft:-3 }}>
                <Text style={ styles.text_footer }> Lastname</Text>
                <View style={styles.action}>
                    <TextInput placeholder='your lastname' style={styles.textinput} />
                    
                </View>
                </View>

                <View style={{margin:10 ,marginLeft:-3 }}>
                <Text style={ styles.text_footer }> Username</Text>
                <View style={styles.action}>
                    <TextInput placeholder='your username' style={styles.textinput} />
                </View>
                 </View>

                <View style={{margin:10 ,marginLeft:-3 ,marginBottom:-9,}}>
                <Text style={ styles.text_footer }> Email</Text>
                <View style={styles.action}>
                    <TextInput placeholder='your email' style={styles.textinput} />
                    
                </View>
                </View>

                <View style={{margin:20 ,marginLeft:-3 ,marginBottom:-9,}}>
                <Text style={ styles.text_footer }> Password</Text>
                <View style={styles.action}>
                    <TextInput placeholder='password' secureTextEntry={true}  style={styles.textinput} />
                    
                </View>
                </View>
                <View style={{margin:20 ,marginLeft:-3 ,marginBottom:-9,}}>
                <Text style={ styles.text_footer }>Confirm Password</Text>
                <View style={styles.action}>
                    <TextInput placeholder=' confirm password' secureTextEntry={true} style={styles.textinput} />
                    
                </View>
                </View>
                 
                 <View style={{margin:20 ,width:100, marginLeft:100}}>             
                <Button title='Sign Up' onPress={navigateToPage}></Button>
                </View>  
            </View>
        </View> 
        </View> 
    </ScrollView>
  );
};

const styles =StyleSheet.create({
    bottomView:{
      flex:1.5,
      backgroundColor:'white',
      bottom:50,
      borderTopStartRadius:50,
      borderTopEndRadius:50,
    },
    textinput:{
        flex:1,
        color:'#05375a',
        paddingLeft:10,
        marginTop:-10,
        marginLeft:-10,
        marginBottom:-9,
    },
    action:{
        flexDirection:'row',
        marginTop:1,
        borderBottomWidth:1,
        paddingBottom:1,
    },
    text_footer:{
        color:'#05375a',
        fontSize:15,
        marginTop:-10,
        marginLeft:-10,
    },
   
  
});

export default Sign_Up_Screen;