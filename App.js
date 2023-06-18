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
import { useState } from "react";

//autocapitalize no input de email, serve para evitar que comece com letra maiuscula  autoCapitalize="none"

//keyboardType="email-address"  no input de email, ele posiciona as teclas para ficar melhor para o user acessar o email

// secureTextEntry no input de password, serve para esconder a senha

export default function App() {
  const [emailField, setEmailField] = useState("");
  const [passField, setPassField] = useState("");

  const handleLoginButton = () => {
    alert(`email é ${emailField} e a senha ${passField}`);
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Image source={require("./assets/login.jpg")} style={styles.logo} />
        <Text style={styles.h1}>Sistema de Login</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}> Email: </Text>
          <TextInput
            style={styles.inputField}
            placeholder="Digite seu Email"
            value={emailField}
            onChangeText={(text) => setEmailField(text)}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha: </Text>
          <TextInput
            style={styles.inputField}
            placeholder="******"
            secureTextEntry
            value={passField}
            onChangeText={(text) => setPassField(text)}
          />
        </View>

        <View style={styles.editionals}>
          <TouchableOpacity style={styles.forgotBtnArea}>
            <Text style={styles.forgotBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
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
