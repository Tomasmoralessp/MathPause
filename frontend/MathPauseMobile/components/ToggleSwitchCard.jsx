import { View } from "react-native";
import React from "react";
import { InstagramIcon, TwitterIcon, TikTokIcon } from "./Icons.jsx";
import ToggleSwitch from "./ToggleSwitch.jsx";

const ToggleSwitchCard = () => {
  return (
    <View className="flex-col items-start justify-center w-full bg-indigo-500 mt-2 rounded-lg px-4 mb-5 h-44">
      {/* Instagram Row */}
      <ToggleSwitch
        iconComponent={<InstagramIcon color="white" size={24} />}
        social="Instagram"
      />
      <ToggleSwitch
        iconComponent={<TwitterIcon color="white" size={24} />}
        social="Twitter"
      />
      <ToggleSwitch
        iconComponent={<TikTokIcon color="white" size={24} />}
        social="TikTok"
      />
    </View>
  );
};

export default ToggleSwitchCard;
