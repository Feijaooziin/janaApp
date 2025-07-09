import styles, { VIDEO_HEIGHT } from "../constants/styles";
import * as ScreenOrientation from "expo-screen-orientation";
import { useCallback, useState } from "react";
import {
  ActivityIndicator,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";

interface VideosProps {
  id: string;
  text: string;
}

export default function Video(props: VideosProps) {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE
    );
  }
  const [videoReady, setVideoReady] = useState(false);
  const { width } = useWindowDimensions();
  const onFullscreenChange = useCallback((isFullscreen: boolean) => {
    if (isFullscreen) {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  }, []);

  return (
    <View>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "semibold",
          marginTop: 32,
        }}
      >
        {props.text}
      </Text>

      <View style={styles.player}>
        <YoutubeIframe
          videoId={props.id}
          height={videoReady ? VIDEO_HEIGHT : 0}
          width={width - 24}
          onReady={() => setVideoReady(true)}
          onFullscreenChange={onFullscreenChange}
          onChangeState
        />

        {!videoReady && <ActivityIndicator color="red" />}
      </View>
    </View>
  );
}
