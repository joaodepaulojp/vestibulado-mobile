import React, { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

export default function QuizRosa() {
    const navigation = useNavigation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [ShowButton, setShowButton] = useState(false);
    const initialTime = 10 * 60; // 10 minutos em segundos
    const [timer, setTimer] = useState(initialTime);


    const [pergunta, setPergunta] = useState([]);

  useEffect(() => {
    // Função para buscar dados no Supabase
    const fetchPergunta = async () => {
      try {
        // Substitua 'users' pelo nome da sua tabela
        const { data, error } = await supabase.from('QuizAmarelo').select('*');

        if (error) {
          throw error;
        }

        setPergunta(data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error.message);
      }
    };

    // Chame a função de busca quando o componente for montado
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


    // const quizData = [
    //     {
    //         question: 'Quem foi o primeiro presidente do Brasil?',
    //         options: ['a) Getúlio Vargas', 'b) Juscelino Kubitschek', 'c) Marechal Deodoro da Fonseca', 'd) Tancredo Neves'],
    //         answer: 'c) Marechal Deodoro da Fonseca'
    //     },
    //     {
    //         question: 'Em que ano ocorreu a Independência do Brasil?',
    //         options: ['a) 1808', 'b) 1822', 'c) 1889', 'd) 1900'],
    //         answer: 'b) 1822'
    //     },
    //     {
    //         question: 'Qual evento histórico deu início à Primeira Guerra Mundial?',
    //         options: ['a) Ataque a Pearl Harbor', 'b) Assassinato de Franz Ferdinand', 'c) Revolução Russa', 'd) Invasão da Normandia'],
    //         answer: 'b) Assassinato de Franz Ferdinand'
    //     },
    //     {
    //         question: 'Qual é o maior rio do mundo em volume de água?',
    //         options: ['a) Nilo', 'b) Amazonas', 'c) Yangtzé', 'd) Mississippi'],
    //         answer: 'b) Amazonas'
    //     },
    //     {
    //         question: 'Qual é a capital do Japão?',
    //         options: ['a) Pequim', 'b) Tóquio', 'c) Seul', 'd) Bangkok'],
    //         answer: 'b) Tóquio'
    //     },
    //     {
    //         question: 'Qual é a capital do Canadá?',
    //         options: ['a) Ottawa', 'b) Toronto', 'c) Vancouver', 'd) Montreal'],
    //         answer: 'a) Ottawa'
    //     },
    //     {
    //         question: 'Qual é a função da conjunção "porque" em uma frase?',
    //         options: ['a) Adição', 'b) Causa', 'c) Condição', 'd) Comparação'],
    //         answer: 'b) Causa'
    //     },
    //     {
    //         question: 'Qual é o plural de "papel"?',
    //         options: ['a) Papéis', 'b) Papéis', 'c) Papelões', 'd) Papelites'],
    //         answer: 'a) Papéis'
    //     },
    //     {
    //         question: 'Identifique a classe gramatical da palavra "rápido" na frase: "O carro é muito rápido."',
    //         options: ['a) Substantivo', 'b) Verbo', 'c) Adjetivo', 'd) Advérbio'],
    //         answer: 'c) Adjetivo'
    //     },
    //     {
    //         question: 'Complete a frase com o pronome possessivo correto: "Aquela casa é _____."',
    //         options: ['a) minha', 'b) meu', 'c) nossos', 'd) eu'],
    //         answer: 'a) minha'
    //     },
    //     {
    //         question: 'Quem proclamou a República no Brasil em 1889?',
    //         options: ['a) Dom Pedro II', 'b) Marechal Deodoro da Fonseca', 'c) Princesa Isabel', 'd) Tiradentes'],
    //         answer: 'b) Marechal Deodoro da Fonseca'
    //     },
    //     {
    //         question: 'Quem liderou o movimento pelos direitos civis nos Estados Unidos nos anos 1960?',
    //         options: ['a) Malcolm X', 'b) Abraham Lincoln', 'c) John F. Kennedy', 'd) Martin Luther King Jr.'],
    //         answer: 'd) Martin Luther King Jr.'
    //     },
    //     {
    //         question: 'O que motivou a construção da Muralha da China?',
    //         options: ['a) Defesa contra invasões', 'b) Controle do comércio', 'c) Rota de migração', 'd) Construção de ferrovias'],
    //         answer: 'a) Defesa contra invasões'
    //     },
    //     {
    //         question: 'Quais são os oceanos que banham o Brasil?',
    //         options: ['a) Atlântico e Índico', 'b) Pacífico e Índico', 'c) Atlântico e Pacífico', 'd) Antártico e Ártico'],
    //         answer: 'c) Atlântico e Pacífico'
    //     },
    //     {
    //         question: 'Identifique a classe gramatical da palavra "rápido" na frase: "O carro é muito rápido."',
    //         options: ['a) Substantivo', 'b) Verbo', 'c) Adjetivo', 'd) Advérbio'],
    //         answer: 'c) Adjetivo'
    //     },
    //     {
    //         question: 'Complete a frase com o pronome possessivo correto: "Aquela casa é _____."',
    //         options: ['a) minha', 'b) meu', 'c) nossos', 'd) eu'],
    //         answer: 'a) minha'
    //     },
    //     {
    //         question: 'Quem proclamou a República no Brasil em 1889?',
    //         options: ['a) Dom Pedro II', 'b) Marechal Deodoro da Fonseca', 'c) Princesa Isabel', 'd) Tiradentes'],
    //         answer: 'b) Marechal Deodoro da Fonseca'
    //     },
    //     {
    //         question: 'Quem liderou o movimento pelos direitos civis nos Estados Unidos nos anos 1960?',
    //         options: ['a) Malcolm X', 'b) Abraham Lincoln', 'c) John F. Kennedy', 'd) Martin Luther King Jr.'],
    //         answer: 'd) Martin Luther King Jr.'
    //     },
    //     {
    //         question: 'O que motivou a construção da Muralha da China?',
    //         options: ['a) Defesa contra invasões', 'b) Controle do comércio', 'c) Rota de migração', 'd) Construção de ferrovias'],
    //         answer: 'a) Defesa contra invasões'
    //     },
    //     {
    //         question: 'Quais são os oceanos que banham o Brasil?',
    //         options: ['a) Atlântico e Índico', 'b) Pacífico e Índico', 'c) Atlântico e Pacífico', 'd) Antártico e Ártico'],
    //         answer: 'c) Atlântico e Pacífico'
    //     },
        
    // ]

    const handleAnswer = (selectedAnswer) => {
    const answer = pergunta[currentQuestion]?.answer;

    if(answer === selectedAnswer){
        alert('+1 ponto!')
        setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if(nextQuestion < pergunta.length){
        setCurrentQuestion(nextQuestion);
        setShowButton(true);
    }
    else{
        setShowScore(true);
        setShowButton(false);

        // Reiniciar o timer quando todas as perguntas foram respondidas
        setTimer(initialTime);
    }
}


    const handleBack = () => {
            setCurrentQuestion(currentQuestion - 1);
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
                    source={require('../../assets/logo-vestibulado-2-1.png')}
                    style={{ width:'50%' }}
                    resizeMode='contain'
                />
            </View>


                                     {/* Área para criação Quiz */}

        
            <Animatable.View delay={600} animation="fadeInUp" style={styles.containerForms}>

                <Text style={styles.title}>Prova 1° Dia - Cardeno Rosa</Text>

                <ScrollView>
                {showScore ? 
                
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
                
                
                :
                
                <View>
                    <View></View>
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
                }
                
                {ShowButton ? <TouchableOpacity style={styles.handleBackButton} onPress={handleBack}><Text style={styles.handleBackButtonText}>Voltar</Text></TouchableOpacity> : <></>}
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
        marginBottom: 5
    },
    timer:{
        alignSelf: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 5,
        marginBottom: 5
    },
    text:{
        color: '#a1a1a1',
        textAlign: 'justify'
    },
    questionContainer:{
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white',
        borderWidth: 1,
        borderStyle: 'solid',
    },
    questionTextContainer:{
        backgroundColor: '#0e4e5b',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    questionText:{
        padding: 10,
        fontSize: 18,
        textAlign: 'center',
        color: 'white',
    },
    optionContainer:{
        backgroundColor: '#0e4e5b',
        // borderColor: 'black',
        // borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 10
    },
    optionStyle:{
        color: 'white',
        padding: 5,
        alignSelf: 'center',
        fontSize: 15
    },
    handleBackButton:{
        backgroundColor: '#0e4e5b',
        margin: 5,
        padding: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 10
    },
    handleBackButtonText:{
        color: 'white'
    },
    scoreContainer:{
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
    finalScore:{
        paddingTop: 10,
        fontSize: 20,
        color: 'white'
    },
    finalScoreGabarito:{
        marginTop: 10,
        marginBottom: 10,
        alignSelf: 'center',
        paddingTop: 10,
        fontSize: 20,
        color: 'white'
    },
    handleRestartButton:{
        backgroundColor: '#0e4e5b',
        marginTop: 10,
        padding: 10,
        paddingHorizontal: 25,
        alignSelf: 'center',
        borderRadius: 10
    },
    handleRestartButtonText:{
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