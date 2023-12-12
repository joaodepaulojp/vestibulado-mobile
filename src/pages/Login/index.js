import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native';
import { supabase } from '../../../lib/supabase';

export default function Login({ setToken }) {
    const navigation = useNavigation();

    // Back-End Login Usuário
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (key, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: value,
        }));
    };

    const handleSubmit = async () => {
        try {
            const { user, error } = await supabase.auth.signIn({
                email: formData.email,
                password: formData.password,
            });
            
            if (!error) {
                Alert.alert(
                    'Success',
                    'Login successful!',
                    [{ text: 'OK', onPress: () => { } }],
                    { cancelable: false }
                );
                setToken(user?.session?.access_token);
                navigation.navigate('Home'); // Direcionamento para o componente
            } else {
                throw new Error('Invalid credentials');
            }
        } catch (error) {
            Alert.alert('Error', 'Invalid email or password', [
                { text: 'OK', onPress: () => { } },
            ]);
        }
    };


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

                </Animatable.View>
            </KeyboardAvoidingView>


            <TouchableOpacity style={styles.button} title='Login' onPress={handleSubmit}>
                <Text style={styles.buttonText} >Login</Text>
            </TouchableOpacity>


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
        color: '#a1a1a1',
    },
    button: {
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '5%',
        alignItems: 'center',
        alignContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold',
    },
});
