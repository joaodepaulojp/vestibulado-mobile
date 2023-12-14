import React, { useState, useEffect } from 'react';
import { supabase } from '../../../../lib/supabase';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Modal } from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

export default function QuizRosa2Dia23() {
    const navigation = useNavigation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [modoQuiz, setModoQuiz] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [ShowButton, setShowButton] = useState(false);
    const [isDetailsVisible, setDetailsVisible] = useState(false);
    const initialTime = 10 * 60; // 10 minutos em segundos
    const [timer, setTimer] = useState(initialTime);


    const [pergunta, setPergunta] = useState([]);

    useEffect(() => {
        // Função para buscar dados no Supabase
        const fetchPergunta = async () => {
            try {
                // Inserir dentro do .from('Tabela X') a tabela que será consultada
                const { data, error } = await supabase
                .from('Quiz')
                .select('*')
                .in('assunto', ['CN', 'MAT']);

                if (error) {
                    throw error;
                }

                setPergunta(data);
            } catch (error) {
                console.error('Erro ao buscar dados:', error.message);
            }
        };

        // Chamar a função de busca quando o componente for montado
        fetchPergunta();
    }, []); // A lista vazia de dependências garante que a chamada ocorra apenas uma vez



    const startTimer = () => {
        const timerId = setInterval(() => {
            setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
        }, 1000);

        return timerId;
    };

    useEffect(() => {
        // Iniciar o timer automaticamente quando o componente for montado
        const timerId = startTimer();

        // Limpar o timer quando o componente for desmontado
        return () => clearInterval(timerId);
    }, []); // O segundo argumento [] garante que o useEffect seja executado apenas uma vez

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };

    const handleAnswer = (selectedAnswer) => {
        const answer = pergunta[currentQuestion]?.answer;

        if (answer === selectedAnswer) {
            alert('+1 ponto!')
            setScore((prevScore) => prevScore + 1);
        }

        const nextQuestion = currentQuestion + 1;

        if (nextQuestion < pergunta.length) {
            setCurrentQuestion(nextQuestion);
            setShowButton(true);
        }
        else {
            setShowScore(true);
            setShowButton(false);

            // Reiniciar o timer quando todas as perguntas foram respondidas
            setTimer(initialTime);
        }
    }


    const handleBack = () => {
        setCurrentQuestion(currentQuestion - 1);
    }

    const handleOriginal = () => {
        setModoQuiz(modoQuiz + 1)
    }

    const handleTreino = () => {
        setModoQuiz(modoQuiz - 1)
    }

    const handleShowAnswer = () => {
    setDetailsVisible(!isDetailsVisible);
    }

    const handleRestart = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <Animatable.Image
                    animation="flipInY"
                    source={require('../../../assets/logo-vestibulado-2-1.png')}
                    style={{ width: '50%' }}
                    resizeMode='contain'
                />
            </View>


            {/* Área para criação Quiz */}


            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>
                <Text style={styles.title}>Prova 1° Dia - Caderno Rosa</Text>
                <ScrollView>

                {/* Exibição dos botões de modo de porva */}
                    { modoQuiz == 0?
                    <View style={styles.containerModo}>
                    <Text style={styles.subTitle}>Selecione um Modo de Prova:</Text>
                    <View style={styles.containerModoButton}>
                    <TouchableOpacity style={styles.handleModoButton} onPress={handleOriginal}>
                        <Text style={styles.handleModoButtonText}>Original</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.handleModoButton} onPress={handleTreino}>
                        <Text style={styles.handleModoButtonText}>Treino</Text>
                    </TouchableOpacity>
                    {/* <Text>{modoQuiz}</Text> */}
                    </View>

                    </View>
                    : <></>}

                    {(() => {
                        if (modoQuiz > 0) {
                            if (showScore) {
                                return (
                                    <View>
                                        <View style={styles.scoreContainer}>
                                            <Text style={styles.finalScore}>Você acertou {score} de {pergunta.length} questões!</Text>
                                            <Text style={styles.finalScore}>Rendimento Percentual: {score * 100 / pergunta.length}%</Text>
                                            <Text style={styles.finalScoreGabarito}>Gabarito</Text>
                                            <View style={styles.tabela}>
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
                                        </View>

                                        <View>
                                            <TouchableOpacity style={styles.handleRestartButton} onPress={handleRestart}>
                                                <Text style={styles.handleRestartButtonText}>Recomeçar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );

                            } else {
                                return (
                                    <View>
                                        <Text style={styles.subTitle}>Questão {currentQuestion + 1} de {pergunta.length}</Text>
                                        <Text style={styles.timer}>{formatTime(timer)}</Text>

                                        <View style={styles.questionContainer}>
                                            <View style={styles.questionTextContainer}>
                                                <Text style={styles.questionText}>{pergunta[currentQuestion]?.question}</Text>
                                            </View>
                                            {pergunta[currentQuestion]?.options.map((item) => {
                                                return <TouchableOpacity onPress={() => handleAnswer(item)} style={styles.optionContainer}>
                                                    <Text style={styles.optionStyle}>{item}</Text>
                                                </TouchableOpacity>
                                            })}
                                        </View>
                                    </View>
                                );
                            }
                        }

                        else if(modoQuiz < 0){
                            if (showScore) {
                                return (
                                    <View>
                                        <View style={styles.scoreContainer}>
                                            <Text style={styles.finalScore}>Você acertou {score} de {pergunta.length} questões!</Text>
                                            <Text style={styles.finalScore}>Rendimento Percentual: {score * 100 / pergunta.length}%</Text>
                                            <Text style={styles.finalScoreGabarito}>Gabarito</Text>
                                            <View style={styles.tabela}>
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
                                        </View>

                                        <View>
                                            <TouchableOpacity style={styles.handleRestartButton} onPress={handleRestart}>
                                                <Text style={styles.handleRestartButtonText}>Recomeçar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                );

                            } else {
                                return (
                                    <View>
                                        <Text style={styles.subTitle}>Questão {currentQuestion + 1} de {pergunta.length}</Text>
                                        <View style={styles.questionContainer}>
                                            <View style={styles.questionTextContainer}>
                                                <Text style={styles.questionText}>{pergunta[currentQuestion]?.question}</Text>
                                            </View>
                                            {pergunta[currentQuestion]?.options.map((item) => {
                                                return <TouchableOpacity onPress={() => handleAnswer(item)} style={styles.optionContainer}>
                                                    <Text style={styles.optionStyle}>{item}</Text>
                                                </TouchableOpacity>
                                            })}


                                        <View style={styles.containerShowAnswer}>
                                            <TouchableOpacity onPress={handleShowAnswer}>
                                                <Text style={styles.showAnswerTextButton}>
                                                {isDetailsVisible ? 'Esconder Resposta' : 'Mostrar Resposta'}
                                                </Text>
                                            </TouchableOpacity>

                                            {isDetailsVisible && (
                                                <View>
                                                    <Text style={styles.showAnswerText}>{pergunta[currentQuestion]?.answer}</Text>
                                                </View>
                                            )}
                                        </View>

                                    </View>

                                        

                                    </View>
                                );
                            }
                        }

                    })()}

                    {ShowButton ? <TouchableOpacity style={styles.handleBackButton} onPress={handleBack}><Text style={styles.handleBackButtonText}>Voltar</Text></TouchableOpacity> : <></>}
                </ScrollView>
            </Animatable.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#38a69d',
    },
    containerLogo: {
        flex: 1,
        backgroundColor: '#38a69d',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForms: {
        flex: 3,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        height: 1250
    },
    title: {
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 5
    },
    subTitle: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    timer: {
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    text: {
        color: '#a1a1a1',
        textAlign: 'justify'
    },
    questionContainer: {
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    questionTextContainer: {
        backgroundColor: '#0e4e5b',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    questionText: {
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    optionContainer: {
        backgroundColor: '#0e4e5b',
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 10
    },
    optionStyle: {
        color: 'white',
        padding: 5,
        alignSelf: 'center',
        fontSize: 15
    },
    handleBackButton: {
        backgroundColor: '#0e4e5b',
        margin: 5,
        padding: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 10
    },
    handleBackButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    containerModo:{
        marginTop: 50,
    },
    containerModoButton:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    handleModoButton: {
        width: 150,
        height: 100,
        backgroundColor: '#0e4e5b',
        margin: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    handleModoButtonText: {
        color: 'white',
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    containerShowAnswer:{
        marginTop: 10,
        backgroundColor: '#0e4e5b',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8
    },
    showAnswerTextButton:{
        padding: 10,
        color: 'white',
        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 15
    },
    showAnswerText:{
        marginBottom: 10,
        color: 'white',
        alignSelf: 'center',
        fontSize: 15
    },
    scoreContainer: {
        backgroundColor: '#0e4e5b',
        marginTop: 25,
        paddingTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignSelf: 'center',
        width: 320,
        height: 300,
        borderRadius: 10,
    },
    finalScore: {
        paddingTop: 10,
        fontSize: 20,
        color: 'white'
    },
    finalScoreGabarito: {
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        paddingTop: 10,
        fontSize: 20,
        color: 'white'
    },
    handleRestartButton: {
        backgroundColor: '#0e4e5b',
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 10
    },
    handleRestartButtonText: {
        color: 'white'
    },
    tabela: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linhaResposta: {
        flexDirection: 'row',
    },
    linhaPergunta: {
        backgroundColor: '#38a69d',
        flexDirection: 'row'
    },
    celula: {
        width: 30,
        height: 30,
        borderWidth: 1,
        borderColor: 'black',
    },
    celulaText: {
        padding: 5,
        color: 'white',
        alignSelf: 'center'
    }
})