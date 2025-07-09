import { View, Text, Alert, Image, ScrollView } from "react-native";
import Botao from "../../components/Botao";
import api from "../../services/api";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Dogs() {
  const nav: any = useNavigation();
  const [cats, setCats] = useState<any>([]);
  async function handleBuscar() {
    try {
      const result = await api.get(
        "https://api.thedogapi.com/v1/images/search?limit=10"
      );
      setCats(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  const _render = () => {
    const vet: any = [];

    cats.map((item: any, index: number) => {
      vet.push(
        <View
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: 8,
          }}
          key={index}
        >
          <Image source={{ uri: item.url }} height={500} width={500} />
        </View>
      );
    });

    return vet;
  };

  return (
    <View style={{ flex: 1, alignItems: "center", padding: 6 }}>
      <View style={{ alignItems: "center", marginBottom: 8 }}>
        <Botao text="GERAR" onPress={handleBuscar} />
      </View>
      <ScrollView>{_render()}</ScrollView>
      <View style={{ alignItems: "center", marginBottom: 24 }}>
        <Botao text="VOLTAR" onPress={() => nav.goBack()} />
      </View>
    </View>
  );
}
