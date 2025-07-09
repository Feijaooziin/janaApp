import { createDrawerNavigator } from "@react-navigation/drawer";
import { Feather, Ionicons } from "@expo/vector-icons";
import TabRoutes from "./tab.routes";
import StackRoutes from "../screens/news";
import CardRoutes from "./card.routes";
import Whats from "../screens/Whats";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ImageRoutes from "./imagens.routes";
import Sobre from "../screens/sobre";

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function DawerRoutes() {
  function icon(name: string) {
    return (props: any) => (
      <Ionicons name={name} size={18} color={props.color} {...props} />
    );
  }
  return (
    <Drawer.Navigator
      screenOptions={{
        title: "",
      }}
    >
      <Drawer.Screen
        name="inicio"
        component={TabRoutes}
        options={{
          drawerIcon: icon("home-outline"),
          drawerLabel: "Início",
        }}
      />
      <Drawer.Screen
        name="cartas"
        component={CardRoutes}
        options={{
          drawerIcon: icon("mail-outline"),
          drawerLabel: "Cartas",
        }}
      />
      <Drawer.Screen
        name="gerador"
        component={ImageRoutes}
        options={{
          drawerIcon: icon("image-outline"),
          drawerLabel: "Gerador de Imagens",
        }}
      />
      <Drawer.Screen
        name="whats"
        component={Whats}
        options={{
          drawerIcon: icon("logo-whatsapp"),
          drawerLabel: "Whatsapp",
        }}
      />
      <Drawer.Screen
        name="news"
        component={StackRoutes}
        options={{
          drawerIcon: icon("create-outline"),
          drawerLabel: "Novidades",
        }}
      />
      <Drawer.Screen
        name="about"
        component={Sobre}
        options={{
          drawerIcon: icon("information-circle-outline"),
          drawerLabel: "Sobre",
        }}
      />
    </Drawer.Navigator>
  );
}
