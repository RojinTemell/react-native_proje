import {
  ScrollView,
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

function Sign_In_Screen(props) {
  function SignUpToPage() {
    props.navigation.navigate('SignUp');
  }
  function HomeToPage() {
    props.navigation.navigate('HomeScreen');
  }

  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#ffffff'}}
      showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={require('./1.jpg')}
        style={{height: 200}}></ImageBackground>

      <View style={styles.bottomView}>
        <View style={{padding: 30}}>
          <Text style={{color: '#330099', fontSize: 30}}> Welcome</Text>
          <Text>Please Login</Text>

          <View style={{margin: 20}}>
            <Text style={styles.text_footer}> Username</Text>
            <View style={styles.action}>
              <TextInput placeholder="your username" style={styles.textinput} />
            </View>
          </View>

          <View style={{margin: 20}}>
            <Text style={styles.text_footer}> Password</Text>
            <View style={styles.action}>
              <TextInput
                placeholder="your Password"
                style={styles.textinput}
                secureTextEntry={true}
              />
            </View>
          </View>
          <View style={{margin: 20, width: 100, marginLeft: 100}}>
            <Button title="Sign In" onPress={HomeToPage}></Button>
          </View>

          <View style={{flexDirection: 'row', marginBottom: 30}}>
            <Text>Dont have an account ?</Text>
            <Pressable onPress={SignUpToPage}>
              <Text style={{color: '#330099', marginLeft: 10}}>
                Register Now
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bottomView: {
    flex: 1.5,
    backgroundColor: 'white',
    bottom: 50,
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 15,
    marginTop: -10,
    marginLeft: -10,
  },
  action: {
    flexDirection: 'row',
    marginTop: 1,
    borderBottomWidth: 1,
    paddingBottom: 1,
  },
});
export default Sign_In_Screen;
