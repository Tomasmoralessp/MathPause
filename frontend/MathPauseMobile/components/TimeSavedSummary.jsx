import { View, Text } from "react-native";
import React from "react";

const TimeSavedSummary = () => {
  return (
    <View className="flex-1 bg-purple-900 p-10 rounded-lg mt-5 mb-5">
      <View className="flex-row justify-center items-center">
        <Text className="text-6xl text-white font-bold"> 280 </Text>
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
        That's equivalent to 3 hours and 57 minutes !
      </Text>
    </View>
  );
};

export default TimeSavedSummary;
