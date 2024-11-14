import React from "react";
import { View, Text, Pressable } from "react-native";

const ProblemFrequency = ({
  emoji,
  frequency,
  description,
  selectedModeKey,
  setSelectedModeKey,
  itemKey,
}) => {
  const handlePress = () => {
    setSelectedModeKey(itemKey);
  };

  return (
    <Pressable onPress={handlePress}>
      <View
        className={`w-44 h-28 rounded-lg flex-col justify-center items-center py-5 mx-2 my-2 ${
          selectedModeKey === itemKey
            ? "bg-indigo-500"
            : "bg-slate-800 opacity-50"
        }`}
      >
        <Text className="text-white text-3xl mt-1">{emoji}</Text>
        <Text className="text-white text-sm mt-0.5 font-bold">{frequency}</Text>
        <Text className="text-white text-xs mt-1">{description}</Text>
      </View>
    </Pressable>
  );
};

export default ProblemFrequency;
