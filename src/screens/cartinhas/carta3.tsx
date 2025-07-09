import { ScrollView, Text, View } from "react-native";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Carta3() {
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
          Curitiba, 08 de Novembro de 2020
        </Text>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>
          Oi amor da minha vida, sei que fiquei todo esse tempo sem escrever pra
          você, mas é que eu estava fazendo uma coisa melhor, eu estava
          dedicando todo meu tempo a você pessoalmente. Desculpa pela falta de
          textos.
          {"\n"}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 22,
              textAlign: "justify",
            }}
          >
            N.E.O.Q.E.A.V.
          </Text>
          {"\n"}
          {"\n"}
          {"\n"}
          {"\n"}
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 36,
                textAlign: "justify",
                textDecorationLine: "underline",
              }}
            >
              J-A-N-A
            </Text>
            <Text style={{ fontSize: 20, textAlign: "center" }}>
              {"\n"}
              {"\n"}
              Já te disse muitas vezes{"\n"}
              Acho que não foi suficiente{"\n"}
              Nos seus olhos tem estrelas{"\n"}
              Ainda mais lindas que o sol nascente{"\n"}
              {"\n"}
              Juro que não entendo{"\n"}
              As vezes que você chora{"\n"}
              Não conseguindo enxergar{"\n"}A beleza que vejo toda hora{"\n"}
              {"\n"}
              Jogo palavras pra você{"\n"}
              As mais belas que consigo{"\n"}
              Nunca vão ser o suficiente{"\n"}
              Ainda são poucas as que eu digo{"\n"}
              {"\n"}
              Já te falei mil vezes{"\n"}
              Acho que dez mil ou mais ainda{"\n"}
              Na verdade já perdi as contas{"\n"}
              Aaaaaaa, COMO VOCÊ É LINDA {"\n"}
              {"\n"}
              {"\n"}
            </Text>
          </View>
        </Text>
        <View style={{ alignItems: "center", marginTop: 40 }}>
          <Botao text="VOLTAR" onPress={() => nav.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
