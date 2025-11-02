import { useState } from "react";
import {Platform,Alert,TextInput,View,Button,StyleSheet,Text,} from "react-native";

export default function Calculadora() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState("");

  const calcular = (operacao) => {
    const num1 = parseFloat(numero1);
    const num2 = parseFloat(numero2);

    if (isNaN(num1) || isNaN(num2)) {
      Platform.OS === "web"
        ? window.alert("Por favor, insira um número válido.")
        : Alert.alert("Erro!", "Por favor insira um número válido.");
      return;
    }

    let res = 0;
    switch (operacao) {
      case "somar":
        res = num1 + num2;
        break;
      case "subtrair":
        res = num1 - num2;
        break;
      case "multiplicar":
        res = num1 * num2;
        break;
      case "dividir":
        if (num2 === 0) {
          Platform.OS === "web"
            ? window.alert("Não é possível dividir por zero.")
            : Alert.alert("Erro!", "Não é possível dividir por zero.");
          return;
        }
        res = num1 / num2;
        break;
      
       default:
        return;
    }

    setResultado("O resultado da operação é: "+res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite um número para realizar a operação"
        value={numero1}
        onChangeText={setNumero1}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o outro número para realizar a operação"
        value={numero2}
        onChangeText={setNumero2}
      />

      <View style={styles.buttons}>
        <Button title="Somar" onPress={() => calcular("somar")} />
        <Button title="Subtrair" onPress={() => calcular("subtrair")} />
        <Button title="Multiplicar" onPress={() => calcular("multiplicar")} />
        <Button title="Dividir" onPress={() => calcular("dividir")} />
      </View>

      <Text style={styles.resultado}>{resultado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 45,
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  buttons: {
    width: "80%",
    gap: 10,
    marginVertical: 15,
  },
  resultado: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: "bold",
  },
});
