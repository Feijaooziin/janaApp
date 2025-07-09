import { ScrollView, Text, View } from "react-native";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Carta5() {
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
          Colombo, 24 de Março de 2021
        </Text>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>
          Sabe, eu gostaria de ter o dom de expressar em palavras tudo o que eu
          sinto por você, mas infelizmente não sou um poeta. Às vezes acho que
          nem mesmo se eu fosse um poeta conseguiria explicar para você esse meu
          sentimento.
          {"\n"}
          {"\n"}
          Pois como explicar com palavras algo que se sente tão profundo? Como
          explicar o que é esse coração acelerado, quando você chega? Ou esse
          desespero quando você sai? Essa alegria sem fim quando você me abraça?
          Ou esse calor imenso quando você me beija?
          {"\n"}
          {"\n"}
          Você consegue desestruturar o meu ser de uma forma deliciosa, e eu
          chego à conclusão apenas de uma coisa: eu te amo com todas as forças
          do meu ser, de maneira egoísta, pois eu quero só pra mim; de maneira
          suave, porque me sinto flutuar quando estou ao seu lado, mas
          principalmente de maneira plena, pois você me completa.
          {"\n"}
          {"\n"}
          Se hoje conheço o verdadeiro significado da palavra amor, é porque
          você me ensinou.
          {"\n"}
          {"\n"}
          Que alegria comemorar essa data pela primeira vez com você. A cada dia
          desejo mais que possamos viver muitos e muitos anos juntos.
          {"\n"}
          {"\n"}
          Agradeço a sua compreensão, o seu apoio e por estar sempre comigo nos
          momentos alegres e tristes da minha vida.
          {"\n"}
          {"\n"}
          Agradeço esse convívio gostoso que você me proporciona.
          {"\n"}
          {"\n"}
          Agradeço por você ser do jeito que é e por se tornar tão essencial em
          minha vida.
          {"\n"}
          {"\n"}
          Você é linda, carinhosa, perfeita até na imperfeição. Você mudou meu
          mundo, trouxe significado e transformou minha vida em uma permanente
          alegria. Meu amor por você não conhece limites ou barreiras, e meu
          objetivo diário é fazer você feliz.
          {"\n"}
          {"\n"}
          Seja feliz, é tudo que desejo, e lembre-se que se você for feliz,
          também eu sou.
          {"\n"}
          {"\n"}
          Você é a mulher da minha vida; eu amo você e amo a vida ao seu lado.
          {"\n"}
          {"\n"}A sua felicidade é a minha felicidade, por isso nunca deixarei
          de lutar para que você alcance todos os seus sonhos.
          {"\n"}
          {"\n"}
          Parabéns pelo seu aniversário, e tenha um dia muito feliz!
        </Text>
        <View style={{ alignItems: "center" }}>
          <Botao text="VOLTAR" onPress={() => nav.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
