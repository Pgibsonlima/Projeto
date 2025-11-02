import { useState } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function CadastroScreen({ navigation }) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  function Cadastrar() {
    if (nome === '' || email === '' || telefone === '') {
      Platform.OS === 'web'
        ? window.alert('Por favor, preencha todos os campos.')
        : Alert.alert('Erro!', 'Por favor, preencha todos os campos.');
      return;
    }

    navigation.navigate('Detalhes', { nome, email, telefone });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Usuário</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite o seu Nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o seu E-mail"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o seu Telefone"
        value={telefone}
        onChangeText={setTelefone}
      />

      <TouchableOpacity style={styles.botao} onPress={Cadastrar}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Detalhes')}
      >
        <Text style={styles.textoBotao}>Ir para Detalhes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  botao: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
