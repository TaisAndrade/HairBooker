import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TelaLogin({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async () => {
    const loginData = {
      email: email,
      senha: senha,
    };
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {  
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });
      
      const text = await response.text();
      const data = JSON.parse(text); 
  
      if (response.ok) {
        if (data.success) {
          navigation.navigate('PaginaInicial');
          setEmail('');
          setSenha('');
        } else {
          Alert.alert('Erro', 'Usuário ou senha incorretos');
        }
      } else {
        Alert.alert('Erro', data.message || 'Erro ao tentar realizar o login');
      }
    } catch (error) {
      Alert.alert('Erro', 'Erro ao tentar realizar o login. Verifique a conexão com o servidor.');
    }
  };
  
  const handleRegister = () => {
    setEmail('');
    setSenha('');
    navigation.navigate('TelaCadastro'); 
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/hair.png')} style={styles.logo} />
      <Text style={styles.title}>HairBooker</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Digite seu email" 
          value={email}
          onChangeText={setEmail} 
        />

        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Digite sua senha"
            secureTextEntry={!passwordVisible}
            value={senha}
            onChangeText={setSenha}
          />
          
          <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleButton}>
            <Icon name={passwordVisible ? 'visibility-off' : 'visibility'} size={24} color="#000" />
          </TouchableOpacity>
        </View>
        
      </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={[styles.button, styles.registerButton]}
            onPress={handleRegister}
          >
          <Text style={styles.buttonText}>Cadastre-se</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
