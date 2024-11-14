import { View, Text, SafeAreaView, ScrollView } from "react-native";
import StudyingTopic from "../../components/StudyingTopic";
import GridWrapper from "../../components/GridWrapper";
import { GradientText } from "../../components/GradientText";
import ProblemFrequencyCard from "../../components/ProblemFrequencyCard";
import ToggleSwitchCard from "../../components/ToggleSwitchCard";

const topics = [
  { key: "1", emoji: "🧮", topic: "Algebra", studying: true },
  { key: "2", emoji: "📐", topic: "Geometry", studying: true },
  { key: "3", emoji: "📈", topic: "Calculus", studying: true },
  { key: "4", emoji: "📊", topic: "Statistics", studying: false },
  { key: "5", emoji: "🔺", topic: "Trigonometry", studying: false },
  { key: "6", emoji: "🔢", topic: "Linear Algebra", studying: false },
  // Agrega más temas según sea necesario
];

export default function Settings() {
  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className="flex-1"
      >
        <View className="w-96 mt-14 h-100">
          <Text className="text-2xl font-bold mb-2 text-white">
            Currently Studying
          </Text>
          <View className="">
            <GridWrapper
              data={topics} // Pasas el array de temas
              numColumns={2} // Configura el número de columnas
              RenderComponent={StudyingTopic} // Pasa el componente a renderizar
            />

            <Text className="text-2xl font-bold mt-2 mb-2 text-white">
              Problem Frequency
            </Text>
            <ProblemFrequencyCard />
            <GradientText
              className="text-2xl font-bold mr-2 mt-2"
              text={"Monitored Apps"}
              colors={["#FF3CAC", "#FF1744"]}
            ></GradientText>
            <ToggleSwitchCard> </ToggleSwitchCard>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
