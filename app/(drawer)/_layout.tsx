import CustomDrawer from "@/components/shared/CustomDrawer";
import { Ionicons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

const DrawerLayout = () => {
  return (
    <Drawer
      drawerContent={CustomDrawer}
      screenOptions={{
        overlayColor: "rgba(0, 0, 0, 0.4)",
        // headerShown: false,
        drawerActiveTintColor: "indigo",
        headerShadowVisible: false,
        sceneStyle: {
          backgroundColor: "white",
        },
        drawerType: "slide", // Esto hace que el drawer se deslice
        swipeEnabled: true, // Habilita el gesto de deslizar
      }}
    >
      <Drawer.Screen
        name="(tabs)" // This is the name of the page and must match the url from root
        options={{
          headerShown: false, // Oculta el header de la pantalla
          drawerLabel: "Tabs + Stack",
          title: "Tabs + Stack",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="albums-outline" size={size} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name="user/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "User",
          title: "Usuario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="person-circle-outline" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="schedule/index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Horario",
          title: "Horario",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
        }}
      />
    </Drawer>
  );
};

export default DrawerLayout;
