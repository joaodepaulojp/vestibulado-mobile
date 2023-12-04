import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import Timer from 'react-native-timer';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

export default function Gabarito() {
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


                                     {/* Área para exibição do Gabarito */}

        
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>
                <Text style={styles.title}>Prova 1° Dia - Gabarito Oficial</Text>


            <ScrollView style={styles.scoreContainer}>
            
                
                <View style={styles.tabela}>
                <Text style={styles.subTitle}>Gabarito Rosa</Text>
                    {/* Linha 1 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>1</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>2</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>3</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>4</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>5</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>6</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>7</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>8</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>9</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>10</Text></View>
                    </View>


                    {/* Linha 2 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                    </View>

                    {/* Linha 3 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>11</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>12</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>13</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>14</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>15</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>16</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>17</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>18</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>19</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>20</Text></View>
                    </View>

                    {/* Linha 4 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                    </View>
                </View>




                <View style={styles.tabela}>
                <Text style={styles.subTitle}>Gabarito Azul</Text>
                    {/* Linha 1 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>1</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>2</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>3</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>4</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>5</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>6</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>7</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>8</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>9</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>10</Text></View>
                    </View>


                    {/* Linha 2 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                    </View>

                    {/* Linha 3 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>11</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>12</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>13</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>14</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>15</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>16</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>17</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>18</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>19</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>20</Text></View>
                    </View>

                    {/* Linha 4 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                    </View>
                </View>



                <View style={styles.tabela}>
                <Text style={styles.subTitle}>Gabarito Branco</Text>
                    {/* Linha 1 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>1</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>2</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>3</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>4</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>5</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>6</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>7</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>8</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>9</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>10</Text></View>
                    </View>


                    {/* Linha 2 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                    </View>

                    {/* Linha 3 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>11</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>12</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>13</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>14</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>15</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>16</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>17</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>18</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>19</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>20</Text></View>
                    </View>

                    {/* Linha 4 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                    </View>
                </View>


                <View style={styles.tabela}>
                <Text style={styles.subTitle}>Gabarito Amarelo</Text>
                    {/* Linha 1 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>1</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>2</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>3</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>4</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>5</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>6</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>7</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>8</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>9</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>10</Text></View>
                    </View>


                    {/* Linha 2 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                    </View>

                    {/* Linha 3 */}
                    <View style={styles.linhaPergunta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>11</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>12</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>13</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>14</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>15</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>16</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>17</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>18</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>19</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>20</Text></View>
                    </View>

                    {/* Linha 4 */}
                    <View style={styles.linhaResposta}>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>b</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>d</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>a</Text></View>
                        <View style={styles.celula}><Text style={styles.celulaText}>c</Text></View>
                    </View>
                </View>
                
            </ScrollView>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#38a69d',
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
            paddingEnd: '5%',
            height: 1250
    },
    scoreContainer:{
        backgroundColor: '#0e4e5b',
        marginTop: 5,
        marginBottom: 5,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        width: 320,
        height: 300,
        borderRadius: 10,
    },
    title:{
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 5
    },
    subTitle:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5,
        color: 'white'
    },
    tabela: {
        marginBottom: 20,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      linhaResposta: {
        flexDirection: 'row',
      },
      linhaPergunta:{
        backgroundColor: '#38a69d',
        flexDirection: 'row'
      },
      celula: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
      },
      celulaText:{
        padding: 5,
        color: 'white',
        alignSelf: 'center'
      }
})