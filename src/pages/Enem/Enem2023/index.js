import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, StatusBar, ScrollView } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';


export default function Enem2023() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
          <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/logo-vestibulado-2-1.png')}
                    style={{ width:'50%' }}
                    resizeMode='contain'
                />
            </View>
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>

            <Text style={styles.title}>Prova 1º Dia</Text>
                <Text style={styles.text} onPress={ () => navigation.navigate('QuizRosa') }>Caderno rosa</Text>
                <Text style={styles.text} onPress={() => navigation.navigate('QuizAzul')}>Caderno azul</Text>
                <Text style={styles.text } onPress={() => navigation.navigate('QuizBranco')}>Caderno branco</Text>
                <Text style={styles.text} onPress={() => navigation.navigate('QuizAmarelo')}>Caderno amarelo</Text>
                <Text style={styles.text} onPress={() => navigation.navigate('Gabarito')}>Gabarito Oficial</Text>
            
<           Text style={styles.title}>Prova 2º Dia</Text>
                <Text style={styles.text}>Caderno rosa</Text>
                <Text style={styles.text}>Caderno azul</Text>
                <Text style={styles.text}>Caderno branco</Text>
                <Text style={styles.text}>Caderno amarelo</Text>
                <Text style={styles.text}>Gabarito Oficial</Text>

            <Text style={styles.title}>Linguagens e Códigos</Text>
                <Text style={styles.text}>Caderno rosa</Text>
                <Text style={styles.text}>Caderno azul</Text>
                <Text style={styles.text}>Caderno branco</Text>
                <Text style={styles.text}>Caderno amarelo</Text>
                <Text style={styles.text}>Gabarito Oficial</Text>

            <Text style={styles.title}>Ciências Humanas</Text>
                <Text style={styles.text}>Caderno rosa</Text>
                <Text style={styles.text}>Caderno azul</Text>
                <Text style={styles.text}>Caderno branco</Text>
                <Text style={styles.text}>Caderno amarelo</Text>
                <Text style={styles.text}>Gabarito Oficial</Text>

            <Text style={styles.title}>Ciências da Natureza</Text>
                <Text style={styles.text}>Caderno rosa</Text>
                <Text style={styles.text}>Caderno azul</Text>
                <Text style={styles.text}>Caderno branco</Text>
                <Text style={styles.text}>Caderno amarelo</Text>
                <Text style={styles.text}>Gabarito Oficial</Text>

            <Text style={styles.title}>Matemática</Text>
            <Text style={styles.text}>Caderno rosa</Text>
                <Text style={styles.text}>Caderno azul</Text>
                <Text style={styles.text}>Caderno branco</Text>
                <Text style={styles.text}>Caderno amarelo</Text>
                <Text style={styles.text}>Gabarito Oficial</Text>

            </Animatable.View>
            
          </ScrollView>
        </SafeAreaView>
      );
    };

    const styles = StyleSheet.create({
        container:{
            flex: 1,
            backgroundColor: '#38a69d'
        },
        containerLogo:{
            backgroundColor: '#38a69d',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -235,
            marginBottom: -235
        },
        containerForms:{
            flex: 1,
            backgroundColor: '#FFF',
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            paddingStart: '5%',
            paddingEnd: '5%',
            height: 1250
        },
        title:{
            fontSize: 24,
            fontWeight: 'bold',
            marginTop: 28,
            marginBottom: 12
        },
        text:{
            marginTop: 5,
            color: '#a1a1a1',
            textAlign: 'justify',
            color: 'blue',
            marginBottom: 5
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
    
    