import { ScrollView, Text, View } from "react-native";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Carta6() {
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
          Colombo, 24 de Março de 2022
        </Text>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>
          Oi meu amor, faz exatamente um ano que não escrevo nada. me perdoa,
          mas você sabe a correria que tem sido pra nós. Enfim, eu amo você!
          {"\n"}
          {"\n"}
          Em todos os seus aniversários, eu só penso em agradecer aos céus por
          você ter nascido.
          {"\n"}
          {"\n"}
          Eu não seria nada sem você, por isso hoje, no dia do seu aniversário
          eu quero te lembrar tudo que você significa para mim.
          {"\n"}
          {"\n"}
          Você é minha força, quando estou fraco e minha coragem quando me
          amedronto, minha sabedoria quando eu nem consigo pensar direito, é a
          calmaria no meio de todas as tempestades (e olha que ultimamente estou
          tendo muitas, algumas você nem sabe).
          {"\n"}
          {"\n"}
          Mais uma vez estamos juntos para comemorar seu aniversário e assim
          como em todos os outros anos, vou fazer de tudo para que seja um dia
          lindo e repleto de amor para você.
          {"\n"}
          {"\n"}
          Mesmo sem você se esforçar, me traz felicidades todos os dias, pois
          tudo que preciso para ter um sorriso no rosto é olhar para os seus
          olhos e ver que meu amor é correspondido e tenho a parceira que pedi
          para Deus.
          {"\n"}
          {"\n"}A cada ano que passa você fica mais incrível e tenho mais
          certeza de que é com você que quero passar o resto da minha vida!
          {"\n"}
          {"\n"}
          Nossa vida juntos é tudo que eu sempre sonhei. Ter você como esposa é
          a melhor coisa que já me aconteceu e quero que você saiba que eu dou
          muito valor ao nosso relacionamento e tudo que temos juntos.
          {"\n"}
          {"\n"}
          Quero que tenha um aniversário fantástico e que todos os seus sonhos
          se realizem, pois nada me faria mais feliz do que a sua felicidade.
          {"\n"}
          {"\n"}
          Espero que nós possamos compartilhar sorrisos e alegrias hoje e
          sempre.
          {"\n"}
          {"\n"}
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 28,
              textAlign: "justify",
              // textDecorationLine: "underline",
            }}
          >
            Eu te amo hoje e pra sempre!
          </Text>
        </Text>
        <View style={{ alignItems: "center" }}>
          <Botao text="VOLTAR" onPress={() => nav.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
