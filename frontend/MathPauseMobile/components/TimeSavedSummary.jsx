import { View, Text } from "react-native";
import React from "react";
import { GradientText } from "./GradientText";

const TimeSavedSummary = ({ TimeSaved }) => {
  const [hours, minutes] = [
    Math.floor(TimeSaved / 60),
    Math.floor(TimeSaved % 60),
  ];
  return (
    <View className="flex-1 bg-indigo-500 p-10 rounded-lg mt-2 mb-5">
      <View className="flex-row justify-center items-center">
        <GradientText
          className="text-6xl font-bold mr-2"
          text={TimeSaved}
          colors={["#FF3CAC", "#FF1744"]}
        ></GradientText>
        <View className="flex-col justify-center items-center mb-2">
          <Text className="text-white font-semibold text-base text-center">
            minutes
          </Text>
          <Text className="text-white font-semibold text-base text-center">
            saved
          </Text>
        </View>
      </View>
      <Text className="text-white font-light text-center text-sm mt-0.5">
        That's equivalent to {hours} hours and {minutes} minutes !
      </Text>
    </View>
  );
};

export default TimeSavedSummary;
