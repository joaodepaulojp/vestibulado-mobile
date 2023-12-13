import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';

import { supabase } from '../../../lib/supabase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation();

    // Lógica de armazenar Token da pessoa logada.
    const [token, setToken] = useState(null);
    
    useEffect(() => {
        const storeToken = async () => {
          if (token) {
            try {
              await AsyncStorage.setItem('TOKEN: ', JSON.stringify(token));
            } catch (error) {
              console.error('Error storing token:', error);
            }
          }
        };
    
        storeToken();
      }, [token]);
    
      useEffect(() => {
        const retrieveToken = async () => {
          try {
            const storedToken = await AsyncStorage.getItem('TOKEN: ');
            if (storedToken) {
              setToken(JSON.parse(storedToken));
            }
          } catch (error) {
            console.error('Error retrieving token:', error);
          }
        };
    
        retrieveToken();
      }, []);



    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
  
    const handleChange = (key, value) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [key]: value,
      }
      ));
    };

    console.log(formData);

    const handleAuthentication = async () => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        });

        if (error) throw error;

        const newToken = data.token;
        setToken(newToken);


        navigation.navigate('Home');
  
      } catch (error) {

        console.error(error);
      }}


    return (
        <View style={styles.container}>


            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animatable.Image
                        animation="flipInY"
                        source={require('../../assets/logo-vestibulado-2-1.png')}
                        style={{ width: '100%' }}
                        resizeMode='contain'
                    />
                </View>

                <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>

                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={formData.email}
                        onChangeText={(text) => handleChange('email', text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        secureTextEntry
                        value={formData.password}
                        onChangeText={(text) => handleChange('password', text)}
                    />

            <TouchableOpacity style={styles.button} title='Login' onPress={handleAuthentication}>
                <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>

                </Animatable.View>
            </KeyboardAvoidingView>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
    },
    containerLogo: {
        flex: 2,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerForms: {
        flex: 1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
    },
    input: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
        color: '#a1a1a1'
    },
    button: {
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 50

    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});

export default Login;