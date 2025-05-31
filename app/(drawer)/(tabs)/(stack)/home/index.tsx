import CustomButton from "@/components/shared/CustomButton";
import { DrawerActions } from "@react-navigation/native";
import { Link, router, useNavigation } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const navigation = useNavigation();
  const onTooggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <SafeAreaView>
      <View className="px-10">
        <CustomButton
          className="mb-2"
          color="primary"
          onPress={() => router.push("/products")}
        >
          Productos
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="secondary"
          onPress={() => router.push("/profile")}
        >
          Perfil
        </CustomButton>

        <CustomButton
          className="mb-2"
          color="tertiary"
          onPress={() => router.push("/settings")}
        >
          Ajustes
        </CustomButton>

        <Link href="/products" asChild>
          <CustomButton variant="text-only" className="mb-10">
            Productos
          </CustomButton>
        </Link>

        <CustomButton onPress={onTooggleDrawer}>Abrir menú</CustomButton>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
