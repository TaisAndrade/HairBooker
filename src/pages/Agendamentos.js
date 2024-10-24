import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import styles from './styles/AgendamentoStyles'; 
import BarraNavegacao from './BarraNavegacao';

const Agendamentos = ({ navigation }) => {
  const diasDaSemana = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];
  const meses = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];
  
  const [mesAtual, setMesAtual] = useState(new Date().getMonth()); // Estado para o mês atual
  const [anoAtual, setAnoAtual] = useState(new Date().getFullYear()); // Estado para o ano atual

  const renderizarMes = () => {
    const totalDiasNoMes = new Date(anoAtual, mesAtual + 1, 0).getDate(); // Total de dias no mês
    const primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay(); // Primeiro dia do mês

    return (
      <View style={styles.mesContainer}>

        <Text style={styles.mesAno}>{`${meses[mesAtual]} - ${anoAtual}`}</Text>

        <View style={styles.containerDiasDaSemana}>
          {diasDaSemana.map((dia, idx) => (
            <Text key={idx} style={styles.diaDaSemana}>{dia}</Text>
          ))}
        </View>

        <View style={styles.grelhaCalendario}>
          {Array.from({ length: primeiroDiaDoMes }).map((_, idx) => (
            <View key={idx} style={styles.diaVazio} />
          ))}
          {Array.from({ length: totalDiasNoMes }, (_, i) => (
            <TouchableOpacity 
              key={i} 
              style={estilos.dia} 
              onPress={() => navigation.navigate('InserirAgendamento', { dataSelecionada: `${i + 1}/${mesAtual + 1}/${anoAtual}` })}
            >
              <Text style={estilos.textoDia}>{i + 1}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.barraNavegacao}>
        <TouchableOpacity onPress={() => {
          if (mesAtual === 0) {
            setMesAtual(11);
            setAnoAtual(anoAtual - 1);
            } else {
              setMesAtual(mesAtual - 1);
            }
        }}>
          <Image source={require('./assets/voltar.png')} style={estilos.seta} />
        </TouchableOpacity>
        
        <Text style={estilos.tituloMes}>{meses[mesAtual]} - {anoAtual}</Text>
        
        <TouchableOpacity onPress={() => {
          if (mesAtual === 11) {
            setMesAtual(0);
            setAnoAtual(anoAtual + 1);
            } else {
              setMesAtual(mesAtual + 1);
            }         
          }}>

          <Image source={require('./assets/avançar.png')} style={estilos.seta} />
        </TouchableOpacity>
      </View>
      
      {renderizarMes()}
      
      <Image source={require('./assets/schedule.png')} style={estilos.imagemCalendario} />
      <Text style={estilos.textoSelecionarData}>Selecione a data na calendário acima</Text>
      
      <BarraNavegacao />
    </View>
  );
};

export default Agendamentos;
