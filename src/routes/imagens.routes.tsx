import { createStackNavigator } from "@react-navigation/stack";
import GeraImagens from "../screens/geradorImagem";
import Cats from "../screens/gerador/cats";
import Dogs from "../screens/gerador/dogs";

const Stack = createStackNavigator();

export default function ImageRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Gerador" component={GeraImagens} />
      <Stack.Screen name="Cats" component={Cats} />
      <Stack.Screen name="Dogs" component={Dogs} />
    </Stack.Navigator>
  );
}
