import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>teste</Text>
      <Image source={require("./assets/login.jpg")} />
      <Text>Sistema de Login</Text>
      <Text>Bem vindo(a)! Digite seus dados abaixo.</Text>

      <View>
        <Text> Email: </Text>
        <TextInput placeholder="Digite seu Email" />
      </View>

      <View>
        <Text>Senha: </Text>
        <TextInput placeholder="******" secureTextEntry />
      </View>

      <View>
        <TouchableOpacity>
          <Text>Esqueci minha senha</Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity>
          <Text>Entrar</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Não tem uma conta?</Text>
        <TouchableOpacity>
          <Text>Cadastre-se</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Criado por @ramon</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: "100px",
    height: "100px",
  },
});
