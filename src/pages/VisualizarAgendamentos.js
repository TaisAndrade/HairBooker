import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, Modal, TouchableOpacity } from 'react-native';
import styles from './styles/VisualizarAgendamentosStyles'; 
import BarraNavegacao from './BarraNavegacao';

const VisualizarAgendamentos = () => {
  const [agendamentos, setAgendamentos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);

  useEffect(() => {
    fetchAgendamentos();
  }, []);

  const fetchAgendamentos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`http:localhost:3000/api/agendamentos`); 
      const data = await response.json();

      if (data.success) {
        setAgendamentos(data.agendamentos);
      } else {
        console.error('Erro ao buscar agendamentos:', data.message);
      }
    } catch (error) {
      console.error('Erro ao buscar agendamentos:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAgendamentoPress = (agendamento) => {
    setSelectedAgendamento(agendamento);
    setModalVisible(true);
  };

  const handleReagendar = () => {
    setModalVisible(false);
    console.log('Reagendar:', selectedAgendamento);
  };

  const handleCancelar = async () => {
    try {
      const response = await fetch(`http:localhost:3000/api/agendamentos/${selectedAgendamento.id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error('Erro ao cancelar agendamento:', errorText);
        return;
      }
  
      const data = await response.json();
  
      if (data.success) {
        setAgendamentos((prevAgendamentos) =>
          prevAgendamentos.filter((item) => item.id !== selectedAgendamento.id)
        );
      } else {
        console.error('Erro ao cancelar agendamento:', data.message);
      }
    } catch (error) {
      console.error('Erro ao cancelar agendamento:', error);
    } finally {
      setModalVisible(false);
    }
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visualizar Agendamentos</Text> 

      <FlatList
        data={agendamentos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleAgendamentoPress(item)}>
      <View style={styles.itemContainer}>
        <Text style={styles.textItem}>Nome: {item.nome}</Text>
        <Text style={styles.textItem}>Sobrenome: {item.sobrenome}</Text>
        <Text style={styles.textItem}>Telefone: {item.telefone}</Text>
        <Text style={styles.textItem}>Data: {item.data_agendamento}</Text>
        <Text style={styles.textItem}>Serviço: {item.servico}</Text>
        <Text style={styles.textItem}>Horário: {item.horario}</Text>
      </View>
    </TouchableOpacity>
        )}
      />

      <BarraNavegacao />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>O que Deseja Fazer?</Text>

            <TouchableOpacity style={styles.modalButton} onPress={handleReagendar}>
              <Text style={styles.modalButtonText}>Reagendar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.modalButton, styles.cancelButton]} 
              onPress={handleCancelar}
            >
              <Text style={styles.cancelButtonText}>Cancelar Agendamento</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text style={styles.cancelButtonText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default VisualizarAgendamentos;
