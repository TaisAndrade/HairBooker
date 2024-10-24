import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import styles from './styles/InserirAgendamentoStyles';
import BarraNavegacao from './BarraNavegacao';

const InserirAgendamento = ({ navigation, route }) => {
  const { dataSelecionada } = route.params;
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [data, setData] = useState(dataSelecionada);
  const [servico, setServico] = useState('');
  const [horario, setHorario] = useState('');

  const handleSubmit = async () => {
    if (!nome || !sobrenome || !telefone || !data || !servico || !horario) {
      Alert.alert('Erro', 'Todos os campos são obrigatórios.');
      return;
    }

    if (telefone.length < 10) {
      Alert.alert('Erro', 'Telefone deve ter pelo menos 10 dígitos.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/agendamentos', { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, sobrenome, telefone, data, servico, horario }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro na resposta do servidor:', errorText);
        Alert.alert('Erro', 'Erro ao criar agendamento.');
        return;
      }

      const result = await response.json();

      if (result.success) {
        Alert.alert('Sucesso', 'Agendamento criado com sucesso!');
        navigation.goBack();
      } else {
        Alert.alert('Erro', result.message);
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao criar agendamento.');
      console.error('Erro:', error);
    }
  };

  return (
    <View style={styles.container}>
       <Text style={styles.title}>Agenda</Text>

      <Text>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={setNome} />
      
      <Text>Sobrenome:</Text>
      <TextInput style={styles.input} value={sobrenome} onChangeText={setSobrenome} />

      <Text>Telefone:</Text>
      <TextInput style={styles.input} value={telefone} onChangeText={setTelefone} keyboardType="phone-pad" />

      <Text>Data:</Text>
      <TextInput style={styles.input} value={data} editable={false} />

      <Text>Serviço:</Text>
      <TextInput style={styles.input} value={servico} onChangeText={setServico} />

      <Text>Horário:</Text>
      <TextInput style={styles.input} value={horario} onChangeText={setHorario} />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>

        <Text style={styles.buttonText}>Salvar Agendamento</Text>
      </TouchableOpacity>

      <BarraNavegacao />
    </View>
    
  );
};


