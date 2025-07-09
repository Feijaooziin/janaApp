import { StyleSheet, Text, View } from "react-native";

export default function Novidades() {
  return (
    <View style={styles.container}>
      <View style={{ gap: 10 }}>
        <Text style={styles.title}>Atualizações</Text>
        <View>
          <Text style={styles.text1}>13/06/2025:</Text>
          <Text style={styles.text2}>
            Criação do App. Criação da Tela inicial. Criação das abas "Vídeos" e
            "Mais".
          </Text>
        </View>
        <View>
          <Text style={styles.text1}>14/06/2025:</Text>
          <Text style={styles.text2}>
            Correção de BUGs. Repaginação da Tela Inicial. Criação das abas
            "Novidades" e "Cartas".
          </Text>
        </View>
        <View>
          <Text style={styles.text1}>15/06/2025:</Text>
          <Text style={styles.text2}>
            Correção de BUGs. Repaginação da Splash Screen e do ícone do App.
            Criação das abas "Gerador de Imagens", "Whatsapp" e "Sobre".
          </Text>
        </View>
      </View>

      <View style={{ gap: 10 }}>
        <Text style={styles.title}>Em desenvolvimento</Text>
        <View>
          <Text style={styles.text2}>
            Repaginação do ícone do App. Criação da Aba "Fotos" e outras
            funcionalidades surpresa XD!
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    gap: 96,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  text1: {
    fontSize: 20,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  text2: {
    fontSize: 16,
    fontWeight: "300",
  },
});
