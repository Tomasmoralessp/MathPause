import { View, Text, Switch } from "react-native";
import React from "react";
import { useState } from "react";

const ToggleSwitch = ({ iconComponent, social }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View className="flex-row items-center justify-between w-full">
      <View className="flex-row items-center">
        {iconComponent}
        <Text className="text-white text-xl font-bold ml-2">{social}</Text>
      </View>
      {/* Toggle Button */}
      <Switch
        trackColor={{ false: "#767577", true: "#FF3CAC" }}
        thumbColor={isEnabled ? "#green" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

export default ToggleSwitch;
