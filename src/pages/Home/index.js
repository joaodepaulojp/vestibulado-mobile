import React from 'react';

import { 
    StyleSheet, 
    Text, 
    View, 
    ScrollView, 
    StatusBar, 
    SafeAreaView,
    Image,
    Button,
    Platform} from 'react-native';

const statusBarHeight = StatusBar.currentHeight;

export default function Home({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <Image
            source={require('../../assets/logo-vestibulado-2.png')}
            style={styles.imagens}
            resizeMode='cover'
            />
          <Text style={styles.tittle}
          onPress={ () => navigation.navigate('Sobre') }>Nosso Projeto</Text>
        </View>

        <View style={styles.content}>
          <Image
            source={require('../../assets/enem-cadernos.png')}
            style={styles.imagens}
            resizeMode= 'cover'
          />
          <Text style={styles.tittle}
          onPress={ () => navigation.navigate('Enem2023') }>ENEM 2023</Text>
        </View>

        <View style={styles.content}>
        <Image
            source={require('../../assets/enem-cadernos.png')}
            style={styles.imagens}
            resizeMode= 'cover'
          />
          <Text style={styles.tittle}>ENEM 2022</Text>
        </View>

        <View style={styles.content}>
        <Image
            source={require('../../assets/enem-cadernos.png')}
            style={styles.imagens}
            resizeMode= 'cover'
          />
          <Text style={styles.tittle}>ENEM 2021</Text>
        </View>
        
        <View style={styles.content}>
        <Image
            source={require('../../assets/enem-cadernos.png')}
            style={styles.imagens}
            resizeMode= 'cover'
          />
          <Text style={styles.tittle}>ENEM 2020</Text>
        </View>

        <View style={styles.content}>
        <Image
            source={require('../../assets/enem-cadernos.png')}
            style={styles.imagens}
            resizeMode= 'cover'
          />
          <Text style={styles.tittle}>ENEM 2019</Text>
        </View>
                
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#38a69d',
    paddingTop: Platform.OS === 'android' ? statusBarHeight : 25,
  },
  content:{
    borderRadius: 5,
    alignSelf: 'center',
    flex:1,
    width: '97%',
    height: 120,
    marginBottom: 20,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagens:{
    width: '100%',
    height: 120,
    opacity: 0.2
  },
  tittle:{
    position: 'absolute',
    alignItems: 'center',
    fontSize: 30,
    color: '#171626',
    fontWeight: 'bold'  
  }
});