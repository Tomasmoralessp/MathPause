import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

export function GradientText(props) {
  return (
    <MaskedView
      maskElement={
        <Text
          className={props.className}
          style={{ backgroundColor: "transparent" }}
        >
          {props.text}
        </Text>
      }
    >
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={props.colors || ["#FF6EC7", "#8E23B9"]}
      >
        <Text className={props.className} style={{ opacity: 0 }}>
          {props.text}
        </Text>
      </LinearGradient>
    </MaskedView>
  );
}

export function GradientButton(props) {
  return (
    <View>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        colors={["red", "blue"]}
      >
        <Text className={props.className}>{props.text}</Text>
      </LinearGradient>
    </View>
  );
}
