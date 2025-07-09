import { Text, View } from "react-native";

export default function Sobre() {
  return (
    <View style={{ marginTop: 120 }}>
      <Text
        style={{
          fontSize: 36,
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
