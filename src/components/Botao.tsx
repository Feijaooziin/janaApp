import { Pressable, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

interface BotaoProps {
  text: string;
  onPress?: () => void;
}

export default function Botao(props: BotaoProps) {
  return (
    <Pressable
      onPress={props.onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.8 : 1 }, styles.botao]}
    >
      <Text
        style={{
          color: "#FFF",
          fontSize: 16,
          fontWeight: "bold",
        }}
      >
        {props.text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: "#3A7EFF",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
    // minWidth: "60%",
  },
});
