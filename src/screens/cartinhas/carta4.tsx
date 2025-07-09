import { ScrollView, Text, View } from "react-native";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Carta4() {
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
          Colombo, 23 de Dezembro de 2020
        </Text>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>
          Meu amor, nunca imaginei que um dia você pudesse ficar ainda mais
          linda do que era, mas desde que nós recebemos a notícia do nosso
          presente que está vindo do céu para entrar em nossas vidas, uma luz
          linda passou a iluminar o seu rosto. Você está cada dia mais bonita,
          mais forte, mais apaixonante.
          {"\n"}
          {"\n"}
          Quando olho para você e para a sua barriga, e penso no nosso bebê aí
          dentro, tão guardadinho, o amor toma conta de mim, do meu coração, do
          meu corpo e da minha alma. Nunca pensei que existia amor assim, tão
          intenso, tão pleno e tão feliz.
          {"\n"}
          {"\n"}
          Você é a mulher da minha vida, me sinto muito realizado com tudo que
          está acontecendo conosco, e sei que está só começando, a nossa
          felicidade ainda vai crescer muito mais, vamos ficar muito mais unidos
          do que antes.
          {"\n"}
          {"\n"}
          Me sinto realmente um privilegiado por ser o seu namorado, por ser o
          pai deste filho que você está guardando para nós.
          {"\n"}
          {"\n"}
          Você é a mulher dos meus sonhos e quero estar ao seu lado para sempre.
          Seu e da nossa filha que está em seu ventre, esperando para nascer.
          {"\n"}
          {"\n"}A cada dia que passa, tenho ainda mais certeza que encontrei a
          mulher da minha vida. Mal posso esperar para o nascimento do nosso
          bebê.
          {"\n"}
          {"\n"}
          Nossa filha veio para aumentar nossa família e tornar você a mãe mais
          linda do mundo. Você nunca esteve tão linda e radiante. Minha esposa
          e, agora, mãe da minha filha.
          {"\n"}
          {"\n"}A gravidez pode trazer dificuldade, mas, ainda assim, você segue
          tão linda que meu amor por você só aumenta.
          {"\n"}
          {"\n"}
          Torço para que nossa filha nasça e seja tão maravilhosa e forte como
          você. Tenho certeza que será!
          {"\n"}
          {"\n"}
          Obrigado pelo seu amor, obrigado por me fazer o homem mais feliz de
          todo mundo! Eu amo muito você, amo muito o que nós dois temos, e vou
          amar ainda mais nós três!
        </Text>
        <View style={{ alignItems: "center" }}>
          <Botao text="VOLTAR" onPress={() => nav.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
