import { View, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";

const StudyingTopic = (props) => {
  const [pressed, setPressed] = useState();

  useEffect(() => {
    props.studying ? setPressed(true) : setPressed(false);
  }, [props.studying]);

  return (
    <Pressable onPress={() => setPressed(!pressed)}>
      <View
        style={{
          opacity: pressed ? 1 : 0.5, // Cambia la opacidad si no está marcado
        }}
        className={`${pressed ? "bg-indigo-500" : "bg-slate-800"}
          flex-1 flex-row items-center justify-center w-44 h-14 rounded-lg mx-2 my-2`}
      >
        <Text className="text-white ">{props.emoji} </Text>
        <Text className="text-white ml-2">{props.topic}</Text>
      </View>
    </Pressable>
  );
};

export default StudyingTopic;
