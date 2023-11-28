import React from 'react';
import {
        Text,
        View,
        TouchableOpacity,
        StyleSheet
        } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Signin() {

    const navigation = useNavigation();

    return (
        <View style={styleMenu.container}>

            <View style={styleMenu.containerTopo}>

            </View>

            <View style={styleMenu.containerMenu}>
                <TouchableOpacity 
                style={styleMenu.button}
                onPress={ () => navigation.navigate('Welcome')}
                >
                    <Text style={styleMenu.buttonText}>Voltar</Text>
                </TouchableOpacity>
            </View>       

        </View>
    )
}

const styleMenu = StyleSheet.create({
    
    
    container:{
        flex: 2,
        backgroundColor: 'white'
    },
    containerMenu:{
        flex: 1,
        backgrounColor: 'black'
    },
    containerTopo:{
        flex: 1,
        backgroundColor: 'red'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#38a69d',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        alignContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }
})