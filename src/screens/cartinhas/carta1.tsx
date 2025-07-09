import { ScrollView, Text, View } from "react-native";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Carta1() {
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
          Curitiba, 09 de Setembro de 2020
        </Text>
        <Text style={{ fontSize: 20, textAlign: "justify" }}>
          Meu bem, me perdoe se não estou ao seu lado agora. Sei que seria ainda
          melhor ouvir essas palavras de amor se nossas mãos estivessem
          entrelaçadas. Mas a distância e as circunstâncias me impedem, então o
          que posso é declarar o meu amor através desse texto.
          {"\n"}
          {"\n"}
          Então, enquanto estiver lendo ele, imagine nossos lábios se tocando,
          os mais belos gestos para demonstrar o meu carinho. Ainda não posso
          morar aí pertinho de você, mas esse dia vai chegar, eu tenho certeza.
          O que mais sonho todos os dias é poder te abraçar, falar ao seu
          ouvido, te ter por perto. Meu sentimento, porém, segue firme e forte
          como sempre.
          {"\n"}
          {"\n"}
          Sabia que meus pensamentos de todos os dias estão com você? Você não
          está aqui do meu lado, mas está sempre no meu coração. Quilômetros e
          quilômetros nos separam, eu sei, mas distância nenhuma é capaz de
          vencer o que eu sinto por você. Eu te espero, com um sorriso nos
          lábios e a mais pura alegria em minha mente. Por mais que demore muito
          tempo para nos vermos cara a cara novamente, o meu sentimento não
          vacila, nem por um segundo. Meu coração sempre pertencerá a você e
          isso me faz uma pessoa completa, e muito mais feliz!
          {"\n"}
          {"\n"}
          Desde que conheci você, entendo como é valioso um abraço, uma
          mensagem, um áudio, até uma conversa pela internet. Qualquer contato
          vale, mesmo que digital, enquanto essa distância não permite que você
          esteja aqui ao meu lado, bem perto de mim. As palavras substituem os
          toques que eu tanto espero. Ainda posso ver seu lindo rosto, mesmo que
          por uma tela.
          {"\n"}
          {"\n"}
          Crio as mais perfeitas lembranças cada vez que ouço a sua voz nos
          áudio que ainda tenho salvo. E, é claro, sempre tenho você em meus
          sonhos. Enquanto te espero, estou sozinho, mas não solitário. A casa
          fica vazia, mas minha mente está sempre repleta de você.
          {"\n"}
          {"\n"}
          Com tantas tecnologias, que dia o homem vai inventar uma máquina de se
          teletransportar? A internet encurta as distâncias, mas nada substitui
          a sensação de tocar a sua pele, de beijar o seu rosto, de passar as
          mãos nos seus cabelos, de sentir o seu cheiro.
          {"\n"}
          {"\n"}É verdade que ajuda muito poder ouvir a sua voz nos áudios
          antigos que você me mandou, poder ver o seu rosto nas fotos que você
          posta, mas isso só aumenta a vontade de ter você perto de mim, só
          aumenta o desejo de abraçar e beijar você.
          {"\n"}
          {"\n"}
          Às vezes penso que no tempo das cartas, os namorados distantes até
          pareciam estar mais próximos. Porque ao menos na carta eles recebiam o
          papel que o ser amado tocou, e podiam sentir o perfume do outro.
          {"\n"}
          {"\n"}
          Bom mesmo vai ser quando chegar o dia que não vamos depender de nada,
          de nenhum tipo de tecnologia, para nos vermos, para falarmos um com o
          outro e para nos abraçarmos. Desejo é que chegue logo o dia que
          estaremos pertinho um do outro, e que essa distância que nos separa
          acabe para sempre.
          {"\n"}
          {"\n"}
          Eu te amo de longe, mas te tenho dentro do meu coração!
        </Text>
        <View style={{ alignItems: "center" }}>
          <Botao text="VOLTAR" onPress={() => nav.goBack()} />
        </View>
      </View>
    </ScrollView>
  );
}
