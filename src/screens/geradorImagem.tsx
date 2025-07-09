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
        <Botao
          text="Imagens de Gatíneos"
          onPress={() => nav.navigate("Cats")}
        />
        <Botao
          text="Imagens de Cachorríneos"
          onPress={() => nav.navigate("Dogs")}
        />
      </View>
    </ScrollView>
  );
}
