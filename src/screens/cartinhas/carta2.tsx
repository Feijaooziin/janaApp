import { ScrollView, Text, View } from "react-native";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Carta2() {
  const nav: any = useNavigation();
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 12,
          gap: 16,
          marginBottom: 100,
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            textDecorationLine: "underline",
            fontStyle: "italic",
            textAlign: "center",
            margin: 8,
          }}
        >
          Curitiba, 10 de Setembro de 2020
        </Text>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>
          Oi, vim desejar um bom dia pra pessoa que não sai da minha cabeça! A
          pessoa que foi a razão do meu sorriso bobo durante dias.
          {"\n"}
          {"\n"}
          Hoje na empresa, teve uma hora que eu cochilei e eu sonhei com você,
          aí eu acordei precisando de uma respiração boca a boca sua, porque me
          afoguei em tanta beleza.
          {"\n"}
          {"\n"}
          Conhecer você foi a melhor coisa que me aconteceu nos últimos tempos.
          Das coisas da minha vida, certamente{" "}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "justify",
              textDecorationLine: "underline",
            }}
          >
            VOCÊ
          </Text>{" "}
          foi melhor de todas!
          {"\n"}
          {"\n"}
          Se o universo olhasse o quanto você é linda, ele teria vergonha em ser
          tão pequeno comparado com a sua beleza.
          {"\n"}
          {"\n"}E se eu pudesse te dar algo na vida, eu te daria a habilidade de
          te ver com meus olhos, só assim entenderia o motivo de eu te achar tão
          incrível assim...
          {"\n"}
          {"\n"}
          Obrigado por ser{" "}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              textAlign: "justify",
              textDecorationLine: "underline",
            }}
          >
            SENSACHOCRÍVEL
          </Text>
          !
        </Text>
        <View style={{ alignItems: "center" }}>
          <Botao text="VOLTAR" onPress={() => nav.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
