import { View, Text } from "react-native";
import React from "react";
import "./GradientText";
import { GradientText } from "./GradientText";

const TimeSavedSummary = (props) => {
  const [hours, minutes] = [
    Math.floor(props.TimeSaved / 60),
    Math.floor(props.TimeSaved % 60),
  ];
  return (
    <View className="flex-1 bg- -800 p-10 rounded-lg mt-5 mb-5">
      <Text className="text-center mb-4 text-white text-xl font-bold">
        Time Saved from Social Media
      </Text>
      <View className="flex-row justify-center items-center">
        <View className=" mr-2">
          <GradientText
            text={props.TimeSaved}
            colors={["#FF3CAC", "#FF1744"]}
            className={"text-6xl font-bold"}
          ></GradientText>
          {/** Añadir estilos  text-6xl text-white font-bold */}
        </View>
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
