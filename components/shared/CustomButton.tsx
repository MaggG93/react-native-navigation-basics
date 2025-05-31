import { Pressable, PressableProps, Text } from "react-native";

interface Props extends PressableProps {
  children: string;
  color?: "primary" | "secondary" | "tertiary";

  variant?: "contained" | "text-only";
  className?: string;
}

const CustomButton = ({
  children,
  color = "primary",
  onPress,
  onLongPress,
  variant = "contained",
  className,
}: Props) => {
  const btColor = {
    primary: "bg-primary",
    secondary: "bg-secondary",
    tertiary: "bg-tertiary",
  }[color];

  const textColor = {
    primary: "text-primary",
    secondary: "text-secondary",
    tertiary: "text-tertiary",
  }[color];

  if (variant === "text-only") {
    return (
      <Pressable
        onPress={onPress}
        onLongPress={onLongPress}
        className={`p-3 ${className}`}
      >
        <Text className={`text-center ${textColor} font-work-medium`}>
          {children}
        </Text>
      </Pressable>
    );
  }
  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      className={`p-3 rounded-md ${btColor} active:opacity-90 ${className}`}
    >
      <Text className="text-white text-center font-work-medium">
        {children}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
