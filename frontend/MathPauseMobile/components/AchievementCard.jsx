import React from "react";
import { View, Text } from "react-native";
import { CheckMarkIcon } from "./Icons";

const AchievementCard = ({ emoji, title, subtitle, checked }) => {
  return (
    <View
      style={{
        opacity: checked ? 1 : 0.5, // Cambia la opacidad si no está marcado
      }}
      className="flex-row h-24 w-96 bg-slate-800 justify-between items-center rounded-md gap-2 mb-5"
    >
      <View className="flex-row">
        <Text className="text-4xl ml-2"> {emoji} </Text>
        <View>
          <Text className="text-white font-bold">{title}</Text>
          <Text className="text-white mt-0.5 font-light text-sm">
            {subtitle}
          </Text>
        </View>
      </View>
      {checked ? (
        <CheckMarkIcon
          styleType="sharp"
          color="green"
          size={32}
          className="mr-5"
        />
      ) : (
        <Text className="text-2xl mr-5"> </Text>
      )}
    </View>
  );
};

export default AchievementCard;
