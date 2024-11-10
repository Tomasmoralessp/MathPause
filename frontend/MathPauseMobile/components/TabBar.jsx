import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View className="  flex-row py-5  h-30 bg-black border-t border-slate-800 items-center">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const color = isFocused
          ? options.tabBarActiveTintColor || "white"
          : options.tabBarInactiveTintColor || "gray";

        const fontWeight = isFocused ? "font-bold" : "font-light";
        const styleType = isFocused ? "sharp" : "outline";

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            className="flex-1 items-center justify-center"
          >
            {options.tabBarIcon && options.tabBarIcon({ color, styleType })}
            {options.tabBarShowLabel !== false && (
              <Text className={`text-sm text-white mt-0.5 ${fontWeight}`}>
                {label}
              </Text>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default TabBar;
