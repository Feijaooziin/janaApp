import Video from "../components/Video";
import { Text, ScrollView } from "react-native";

export default function Videos() {
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "#1C1C1C",
        paddingHorizontal: 8,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "bold",
          textAlign: "center",
          textDecorationLine: "underline",
        }}
      >
        VÍDEOS QUE ME LEMBRAM ELA
      </Text>

      <Video id="PXDzOp6M4sE" text="Nossa Música" />
      <Video id="pjb6N9cWN3c" text="Helena ama essa né?" />
      <Video id="dzXugGu_umg" text="Sempre que ouço penso em você!" />
    </ScrollView>
  );
}
