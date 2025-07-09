import Botao from "../components/Botao";
import { ScrollView, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Cartas() {
  const nav: any = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 16,
          gap: 8,
        }}
      >
        {/* ------------------------------------------------------- */}
        <Text
          style={{
            fontSize: 38,
            fontWeight: "bold",
            textAlign: "center",
            textDecorationLine: "underline",
          }}
        >
          CARTAS ANTIGAS
        </Text>
        {/* ------------------------------------------------------- */}
        <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
          <Botao text="Carta 1" onPress={() => nav.navigate("Carta 01")} />
          <Botao text="Carta 2" onPress={() => nav.navigate("Carta 02")} />
          <Botao text="Carta 3" onPress={() => nav.navigate("Carta 03")} />
        </View>

        <View style={{ flex: 1, flexDirection: "row", gap: 16 }}>
          <Botao text="Carta 4" onPress={() => nav.navigate("Carta 04")} />
          <Botao text="Carta 5" onPress={() => nav.navigate("Carta 05")} />
          <Botao text="Carta 6" onPress={() => nav.navigate("Carta 06")} />
        </View>
      </View>
    </ScrollView>
  );
}
