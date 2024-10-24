import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles/PaginaInicialStyles';
import BarraNavegacao from './BarraNavegacao';

export default function PaginaInicial() {
  const navigation = useNavigation();

  const handleAgendamentos = () => {
    navigation.navigate('Agendamentos');
  };
  
  const handleVisualizarAgendamentos = () => {
    navigation.navigate('VisualizarAgendamentos');
  };

  const handlePrecosServicos = () => {
    navigation.navigate('Servicos');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/salon.png')} style={styles.logo} />
      <Text style={styles.slogan}>Beleza é a nossa paixão!</Text>

      <View style={styles.bodyContainer}>

        <TouchableOpacity onPress={handleAgendamentos}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Realizar Agendamento</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleVisualizarAgendamentos}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Visualizar Agendamentos</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={handlePrecosServicos}>
          <View style={styles.box}>
            <Text style={styles.boxText}>Tabela de Preços</Text>
          </View>
        </TouchableOpacity>

      </View>

      <BarraNavegacao />
    </View>
  );
}


