import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import styles from './styles/styles'; 
import Icon from 'react-native-vector-icons/MaterialIcons'; 

export default function TelaCadastro() {
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const salvarRegistro = () => {
    if (nome && sobrenome && email && senha) {
      fetch('http://localhost:3000/api/cadastrar', { //IP do servidor do banco
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nome, sobrenome, email, senha }),
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erro ao salvar o registro');
        }
        return response.json();
      })
      .then((data) => {
        Alert.alert('Sucesso', data.message);
        setNome('');
        setSobrenome('');
        setEmail('');
        setSenha('');
      })
      .catch((error) => {
        console.error('Erro na requisição:', error);
        Alert.alert('Erro', 'Erro ao salvar o registro.');
      });
    } else {
      Alert.alert('Erro', 'Preencha todos os campos.');
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/cadastro.png')} style={styles.logo} />
      <Text style={styles.title}>Cadastre-se</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Sobrenome</Text>
        <TextInput
          style={styles.input}
          placeholder="Sobrenome"
          value={sobrenome}
          onChangeText={setSobrenome}
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={!passwordVisible}
            value={senha}
            onChangeText={setSenha}
          />
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
            <Icon name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, styles.registerButton, { width: '100%' }]}
        onPress={salvarRegistro}
      >
        <Text style={styles.buttonText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
