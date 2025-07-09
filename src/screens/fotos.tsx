import { Text, View } from "react-native";
import styles from "../constants/styles";

export default function Fotos() {
  return (
    <View style={[styles.container, { padding: 20 }]}>
      <Text
        style={{
          fontSize: 32,
          fontWeight: 700,
          textAlign: "center",
          textDecorationLine: "underline",
        }}
      >
        EM DESENVOLVIMENTO!!!
      </Text>
    </View>
  );
}
