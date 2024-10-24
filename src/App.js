import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './pages/TelaLogin';
import TelaCadastro from './pages/TelaCadastro';
import PaginaInicial from './pages/PaginaInicial';
import Agendamentos from './pages/Agendamentos';
import InserirAgendamento from './pages/InserirAgendamento';
import VisualizarAgendamentos from './pages/VisualizarAgendamentos'; 
import Servicos from './pages/Servicos';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TelaLogin">
        <Stack.Screen 
          name="TelaLogin" 
          component={TelaLogin} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen 
          name="TelaCadastro" 
          component={TelaCadastro} 
          options={{ title: 'Voltar para o Login' }} 
        />

        <Stack.Screen 
          name="PaginaInicial" 
          component={PaginaInicial} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="Agendamentos"
          component={Agendamentos} 
          options={{ headerShown: false }} 
        />

      <Stack.Screen 
          name="InserirAgendamento" 
          component={InserirAgendamento} 
          options={{ headerShown: false }} 
        />
        
        <Stack.Screen name="VisualizarAgendamentos"
          component={VisualizarAgendamentos} 
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Servicos"
          component={Servicos} 
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
