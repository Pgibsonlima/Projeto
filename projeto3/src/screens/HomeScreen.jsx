import { View,Text,Button,StyleSheet } from "react-native";

export default function HomeScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>App de Navegação</Text>
            <Text style={styles.texto}>Este aplicativo foi desenvolvido como atividade prática de navegação entre telas no react native</Text>
            
            <View style={styles.botao}>
                <Button title="Ir para Cadastro" onPress={() => navigation.navigate("Cadastro")} />
            </View>
            <View>
                <Button title="Ir para Detalhes" onPress={() => navigation.navigate("Detalhes")} />
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
        marginBottom: 20,
        textAlign: 'center'
    },
    texto: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center'
    },
    botao:{
        marginBottom:20
    }
});