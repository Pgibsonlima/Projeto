import { View, Text, Button, StyleSheet } from 'react-native';

export default function DetailsScreen({ navigation, route }) {
  const { nome, email, telefone } = route.params || {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalhes do Usuário</Text>

      {nome && email && telefone ? (
        <>
          <Text style={styles.texto}>Nome: {nome}</Text>
          <Text style={styles.texto}>Email: {email}</Text>
          <Text style={styles.texto}>Telefone: {telefone}</Text>
        </>
      ) : (
        <Text style={styles.texto}>Nenhum dado recebido.</Text>
      )}
       <View style={styles.botao}> 
      <Button title="Voltar" onPress={() => navigation.goBack()} />
      </View>
      <View style={styles.botao}>
        <Button title="Voltar à Home" onPress={() => navigation.navigate("Home")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  
    container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 20 
},
  
    title: { 
    fontSize: 24,
    fontWeight: 'bold', 
    marginBottom: 20 
},
  
    texto: { 
    fontSize: 18, 
    marginBottom: 10 
},
    botao:{
        marginTop:20
    }
});