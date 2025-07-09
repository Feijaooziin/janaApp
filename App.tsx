import Routes from "./src/routes";
import { useState } from "react";
import { Splash } from "./src/screens/Splash";
import { preventAutoHideAsync } from "expo-splash-screen";

preventAutoHideAsync();

export default function App() {
  const [splashComplete, setSplahComplete] = useState(false);
  return splashComplete ? <Routes /> : <Splash onComplete={setSplahComplete} />;
}
