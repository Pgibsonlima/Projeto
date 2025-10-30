import { StyleSheet, View, Text, Button, TextInput,Platform, Switch, Alert } from 'react-native';
import { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function TrabalhoValendoPonto() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState('');
  const [limite, setLimite] = useState(10000);
  const [estudante, setEstudante] = useState(false);

  const [cadastro, setCadastro] = useState(null); 
  
  function cadastrar() {

    if (nome === '' || idade === '' || sexo === '') {
      Platform.OS === 'web'
      ? window.alert('Preencha todos os campos antes de cadastrar.')
      :Alert.alert('Erro!', 'Preencha todos os campos antes de cadastrar')
      ;
      return;
    }

    const novoCadastro = {
      nome,
      idade,
      sexo,
      limite,
      estudante,
    };

    setCadastro(novoCadastro); 
   Platform.OS === 'web'
    ? window.alert('Cadastro realizado com sucesso!')
    :Alert.alert('Erro!','Cadastro realizado com sucesso!');

   
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro Bancário</Text>

      <Text style={styles.subTitulo}>Nome Completo:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o seu nome completo"
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>Idade:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a sua idade"
        value={idade}
        onChangeText={setIdade}
        keyboardType="numeric"
      />

      <Text style={styles.subTitulo}>Sexo:</Text>
      <Picker style={styles.picker} selectedValue={sexo} onValueChange={setSexo}>
        <Picker.Item label="Selecione" value="" />
        <Picker.Item label="Masculino" value="Masculino" />
        <Picker.Item label="Feminino" value="Feminino" />
      </Picker>

      <Text style={styles.subTitulo}>Limite inicial da conta: R$ {limite.toFixed(0)}</Text>
      <Slider
        minimumValue={0}
        maximumValue={5000}
        value={limite}
        onValueChange={setLimite}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.subTitulo}>Estudante?</Text>
        <Switch value={estudante} onValueChange={setEstudante} />
      </View>

      <Button title="Cadastrar" onPress={cadastrar} />

      {cadastro && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTitulo}>Dados cadastrados:</Text>
          <Text>Nome: {cadastro.nome}</Text>
          <Text>Idade: {cadastro.idade}</Text>
          <Text>Sexo: {cadastro.sexo}</Text>
          <Text>Limite: R$ {cadastro.limite.toFixed(2)}</Text>
          <Text>Estudante: {cadastro.estudante ? 'Sim' : 'Não'}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
  },
  subTitulo: {
    fontSize: 18,
    marginTop: 10,
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginTop: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  picker: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  resultado: {
    marginTop: 30,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  resultadoTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
