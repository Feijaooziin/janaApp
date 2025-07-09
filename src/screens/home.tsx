import Botao from "../components/Botao";
import styles from "../constants/styles";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Alert, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function Home() {
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: "flex-start",
          marginTop: 140,
        },
      ]}
    >
      <Animatable.View
        animation="pulse"
        easing="ease-out"
        iterationCount="infinite"
      >
        <Feather name="heart" size={150} />
      </Animatable.View>
      <View style={{ alignItems: "center" }}>
        <Animatable.Text
          delay={2000}
          animation="slideInUp"
          style={{ fontSize: 32, fontWeight: 700, marginTop: 60 }}
        >
          JANA APP
        </Animatable.Text>
        <Animatable.Text
          delay={2000}
          animation="slideInUp"
          style={{ fontSize: 16, marginTop: 10 }}
        >
          Testes de um aplicativo
        </Animatable.Text>
        <Animatable.Text
          delay={2000}
          animation="slideInUp"
          style={{ fontSize: 16, marginBottom: 20 }}
        >
          para minha maior inspiração!
        </Animatable.Text>
      </View>
      <Animatable.View delay={2000} animation="slideInUp">
        <Botao
          text="TE AMO, JANA!"
          onPress={() =>
            Alert.alert(
              "N.E.O.Q.E.A.V.",
              "Tô quase terminando o aplicativo. Segura a emoção!"
            )
          }
        />
      </Animatable.View>
    </View>
  );
}
