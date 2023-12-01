import React from 'react';
import { View,
         Text,
         StyleSheet,
         Image,
         TouchableOpacity
         } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Sobre() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../assets/logo-vestibulado-2-1.png')}
                    style={{ width:'50%' }}
                    resizeMode='contain'
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>
                <Text style={styles.title}>Nosso APP...</Text>
                <Text style={styles.text}>Vestibulado, projeto idealizado por alunos da Universidade de Fortaleza,
                para colocar o conhecimento da equipe envolvida com o mesmo em prática, para a disciplina de Projeto 
                Aplicado 2, que foi desenvolvido um modelo WEB do projeto. Agora, na disciplina de Projeto Aplicado 3, 
                está sendo implementado para um ambiente mobile.{'\n'}
                O projeto tem como priori, auxiliar alunos do ensino médio com suas funcionalidades idealizadas a estudar 
                para provas de vestibular, enem, concursos e entre outras provas. Tais funcionalidades como informações 
                sobre o vestibular, dicas para estudar, nesta versão mobile pretende-se ter notificações para alertar 
                alunos a estudarem, será possível fazer download das provas passadas, baixar editais, alerta sobre editais 
                de concursos e um quiz para ajudar a fixar o conteúdo, entre outras futuras possibilidades.</Text>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d'
    },
    containerLogo:{
        flex: 1,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForms:{
        flex: 3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: '#a1a1a1',
        textAlign: 'justify'
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