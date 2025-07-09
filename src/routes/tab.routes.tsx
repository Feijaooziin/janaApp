import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather, Ionicons } from "@expo/vector-icons";
import Videos from "../screens/videos";
import Fotos from "../screens/fotos";
import Home from "../screens/home";
import Mais from "../screens/sobre";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  const nav: any = useNavigation();
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      {/* ---------------------------------------------------------------------- */}
      <Tab.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" color={color} size={size} />
          ),
          tabBarLabel: "Início",
        }}
      />
      {/* ---------------------------------------------------------------------- */}
      <Tab.Screen
        name="fotos"
        component={Fotos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="images-outline" color={color} size={size} />
          ),
          tabBarLabel: "Fotos",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            Alert.alert(
              "Em breve",
              "Esta funcionalidade estará disponível em breve."
            );
          },
        }}
      />
      {/* ---------------------------------------------------------------------- */}
      <Tab.Screen
        name="videos"
        component={Videos}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="play-outline" color={color} size={size} />
          ),
          tabBarLabel: "Vídeos",
        }}
      />
      {/* ---------------------------------------------------------------------- */}
      <Tab.Screen
        name="mais"
        component={Mais}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="menu" color={color} size={size} />
          ),
          tabBarLabel: "Mais",
        }}
        listeners={{
          tabPress: (e) => {
            e.preventDefault();
            nav?.openDrawer();
          },
        }}
      />
      {/* ---------------------------------------------------------------------- */}
    </Tab.Navigator>
  );
}
