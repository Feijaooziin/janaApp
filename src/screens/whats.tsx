import { Alert, Button, Linking, StyleSheet, Text, View } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function Whats() {
  const phoneNumber = "+5541995287020";
  const message = "Oi gostosão.";

  async function openWhatsapp() {
    const whatsappUrl = `whatsapp://send?phone=${phoneNumber}&text=${message}`;
    const fallbackUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    try {
      await Linking.openURL(whatsappUrl);
    } catch (err) {
      try {
        await Linking.openURL(fallbackUrl);
      } catch (fallbackerror) {
        Alert.alert("Não foi possível abrir o WhatsApp!");

        console.error("Erro ao abrir o WhatsApp:", fallbackerror);
      }
    }
  }
  return (
    <View style={styles.container}>
      <Ionicons name="logo-whatsapp" size={100} />
      <Text style={[styles.title, { marginTop: 24 }]}>Whatsapp</Text>
      <Text style={styles.help}>
        Caso queira falar comigo, só clicar no botão.
      </Text>
      <Button
        title="Enviar mensagem pro Léo"
        color={"#006000"}
        onPress={openWhatsapp}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 140,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
  },

  help: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});
