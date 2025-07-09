import Botao from "../components/Botao";
import styles from "../constants/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Alert, Text, View } from "react-native";

export default function Home() {
  return (
    <View
      style={[
        styles.container,
        { justifyContent: "flex-start", marginTop: 140 },
      ]}
    >
      <Feather name="heart" size={100} />
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 32, fontWeight: 700 }}>JANA APP</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>
          Testes de um aplicativo
        </Text>
        <Text style={{ fontSize: 16, marginBottom: 20 }}>
          para minha maior inspiração!
        </Text>
      </View>
      <Botao
        text="TE AMO, JANA!"
        onPress={() =>
          Alert.alert(
            "N.E.O.Q.E.A.V.",
            "Tô quase terminando o aplicativo. Segura a emoção!"
          )
        }
      />
    </View>
  );
}
