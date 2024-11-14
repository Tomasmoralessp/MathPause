import React, { useState } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import ProblemFrequency from "./ProblemFrequency";

const modes = [
  {
    key: "1",
    emoji: "🌴",
    frequency: "Relaxed",
    description: "A problem every 30 minutes.",
  },
  {
    key: "2",
    emoji: "⚖️",
    frequency: "Balanced",
    description: "A problem every 15 minutes.",
  },
  {
    key: "3",
    emoji: "🎯",
    frequency: "Focused",
    description: "A problem every 10 minutes.",
  },
  {
    key: "4",
    emoji: "🔥",
    frequency: "Intense",
    description: "A problem every 5 minutes.",
  },
];

const ProblemFrequencyCard = () => {
  const [selectedModeKey, setSelectedModeKey] = useState(null);

  const renderItem = ({ item }) => (
    <ProblemFrequency
      {...item}
      itemKey={item.key}
      selectedModeKey={selectedModeKey}
      setSelectedModeKey={setSelectedModeKey}
    />
  );

  return (
    <View>
      <FlatList
        data={modes}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        numColumns={2}
        scrollEnabled={false}
        contentContainerStyle={{ alignItems: "center" }}
      />
    </View>
  );
};

export default ProblemFrequencyCard;
