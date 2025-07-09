import { StyleSheet } from "react-native";

export const VIDEO_HEIGHT = 240;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  player: {
    width: "100%",
    height: VIDEO_HEIGHT,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
