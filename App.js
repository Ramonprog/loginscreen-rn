import { StatusBar } from "expo-status-bar";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import { styles } from "./styles";

export default function App() {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require("./assets/login.jpg")} style={styles.logo} />
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}> Email: </Text>
          <TextInput style={styles.inputField} placeholder="Digite seu Email" />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha: </Text>
          <TextInput
            style={styles.inputField}
            placeholder="******"
            secureTextEntry
          />
        </View>

        <View style={styles.editionals}>
          <TouchableOpacity style={styles.forgotBtnArea}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem uma conta?</Text>
          <TouchableOpacity>
            <Text style={styles.signUpButnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por @ramon</Text>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
