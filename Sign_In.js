import {
  ScrollView,
  Text,
  ImageBackground,
  View,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';

const Sign_In_Screen = () => {
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
          <Pressable
            onPress={() => alert(' Well Done')}
            style={{
              width: 100,
              height: 40,
              backgroundColor: '#330099',
              marginTop: 20,
              marginLeft: 150,
            }}>
            <Text
              style={{
                marginTop: 10,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#fff',
                margin: 2,
                textAlign: 'center',
              }}>
              {' '}
              Sign In
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
};

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
