import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "indigo",
        // headerShown: false,
        // tabBarStyle: {
        // backgroundColor: "black",
        // },
        // tabBarActiveBackgroundColor: "red",
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="(stack)"
        options={{
          title: "Stack",
          headerShown: false, // Oculta el header de la pantalla
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="user" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites/index"
        options={{
          title: "Favoritos",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="star" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
