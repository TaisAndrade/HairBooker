import React, { useState } from 'react';
import { View, TouchableOpacity, Image, Text, Modal, StyleSheet } from 'react-native';
import styles from './styles/BarraNavegacaoStyles';
import { useNavigation } from '@react-navigation/native';

const BarraNavegacao = () => {
  const navigation = useNavigation();
  const [logoutModalVisible, setLogoutModalVisible] = useState(false);

  // Função para mostrar o modal de logout
  const showLogoutModal = () => {
    setLogoutModalVisible(true);
  };

  return (
    <View style={styles.navbar}>
      <TouchableOpacity onPress={() => navigation.navigate('PaginaInicial')}>
        <Image source={require('./assets/home.png')} style={styles.icon} />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={showLogoutModal}>
        <Image source={require('./assets/logout.png')} style={styles.icon} />
      </TouchableOpacity>

      {/* Modal*/}
      <Modal
        animationType="slide"
        transparent={true}
        visible={logoutModalVisible}
        onRequestClose={() => setLogoutModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Deseja Sair?</Text>
            <TouchableOpacity 
              style={styles.modalButton} 
              onPress={() => {
                navigation.navigate('TelaLogin');
                setLogoutModalVisible(false);
              }}
            >
              <Text style={styles.modalButtonText}>Sim, desejo sair</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[styles.modalButton, styles.cancelButton]} 
              onPress={() => setLogoutModalVisible(false)}
            >
              <Text style={styles.cancelButtonText}>Não</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default BarraNavegacao;
