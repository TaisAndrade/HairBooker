import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles/ServicosStyles';
import BarraNavegacao from './BarraNavegacao';

const servicos = [
  { nome: 'Botox', preco: 'R$ 190' },
  { nome: 'Corte de Cabelo', preco: 'R$ 60' },
  { nome: 'Escova', preco: 'R$ 80' },
  { nome: 'Manicure', preco: 'R$ 55' },
  { nome: 'Progressiva', preco: 'R$ 220' },
  { nome: 'Pedicure', preco: 'R$ 55' },
  { nome: 'Coloração', preco: 'R$ 120' },
  { nome: 'Hidratação', preco: 'R$ 100' },
  { nome: 'Tranças', preco: 'R$ 95' },
];

export default function Servicos() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Serviços e Preços</Text>
      {servicos.map((servico, index) => (
        <View key={index} style={styles.box}>
          <Text style={styles.servicoText}>{servico.nome}</Text>
          <Text style={styles.precoText}>{servico.preco}</Text>
        </View>
      ))}
      <BarraNavegacao />
    </View>
  );
}
