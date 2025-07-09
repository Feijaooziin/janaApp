import { createStackNavigator } from "@react-navigation/stack";
import Profile from "../screens/news";
import Cartas from "../screens/cartas";
import Carta1 from "../screens/cartinhas/carta1";
import Carta2 from "../screens/cartinhas/carta2";
import Carta3 from "../screens/cartinhas/carta3";
import Carta4 from "../screens/cartinhas/carta4";
import Carta5 from "../screens/cartinhas/carta5";
import Carta6 from "../screens/cartinhas/carta6";

const Cards = createStackNavigator();

export default function CardRoutes() {
  return (
    <Cards.Navigator screenOptions={{ headerShown: false }}>
      <Cards.Screen name="Cartas" component={Cartas} />
      <Cards.Screen name="Carta 01" component={Carta1} />
      <Cards.Screen name="Carta 02" component={Carta2} />
      <Cards.Screen name="Carta 03" component={Carta3} />
      <Cards.Screen name="Carta 04" component={Carta4} />
      <Cards.Screen name="Carta 05" component={Carta5} />
      <Cards.Screen name="Carta 06" component={Carta6} />
    </Cards.Navigator>
  );
}
