import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

import styles from './styles'
import logo from '../../assets/logo.png'

export default function Incidents() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Total de
          <Text style={styles.headerTextBold}> 0 casos</Text>
        </Text>
      </View>

      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.description}>
        Escolha um dos casos abaixo e salve o dia
      </Text>

      <View style={styles.incidentList}>
        <View style={styles.incidents}>
          <Text style={styles.incidentProperty}>ONG:</Text>
          <Text style={styles.incidentValue}>APAD</Text>

          <Text style={styles.incidentProperty}>CASO:</Text>
          <Text style={styles.incidentValue}>Teste de caso estático</Text>

          <Text style={styles.incidentProperty}>VALOR:</Text>
          <Text style={styles.incidentValue}>R$ 120,00</Text>

          <TouchableOpacity
            style={styles.detailsButton}
            onPress={() => { }}>
            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
            <Feather name='arrow-right' size={16} color='#E02041'/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
