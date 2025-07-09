import { createStackNavigator } from "@react-navigation/stack";
import Novidades from "../screens/news";

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="news" component={Novidades} />
    </Stack.Navigator>
  );
}
