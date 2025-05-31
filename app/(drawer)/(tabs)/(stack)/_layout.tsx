import { Ionicons } from "@expo/vector-icons";
import { DrawerActions } from "@react-navigation/native";
import { Stack, useNavigation, useRouter } from "expo-router";
const StackLayout = () => {
  const navigation = useNavigation();
  const router = useRouter();

  const onHeaderLeftClick = (canGoBack: boolean) => {
    if (canGoBack) {
      router.back();
      return;
    }

    navigation.dispatch(DrawerActions.toggleDrawer);
  };

  return (
    <Stack
      screenOptions={{
        // headerShown: false,
        headerShadowVisible: false,
        contentStyle: {
          backgroundColor: "white",
        },
        headerLeft: ({ tintColor, canGoBack }) => (
          <Ionicons
            name={canGoBack ? "arrow-back-outline" : "grid-outline"}
            className="mr-5"
            size={20}
            onPress={() => onHeaderLeftClick(canGoBack as boolean)}
          />
        ),
      }}
    >
      <Stack.Screen
        name="home/index"
        options={{
          title: "Inicio",
          headerTitleAlign: "left",
        }}
      />

      <Stack.Screen
        name="products/index"
        options={{
          title: "Productos",
          headerTitleAlign: "left",
        }}
      />

      <Stack.Screen
        name="profile/index"
        options={{
          title: "Perfil",
          headerTitleAlign: "left",
        }}
      />

      <Stack.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
          headerTitleAlign: "left",
        }}
      />

      <Stack.Screen
        name="products/[id]"
        options={{
          title: "Vista de producto",
          headerTitleAlign: "left",
        }}
      />
    </Stack>
  );
};

export default StackLayout;
