import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native";
import AchievementCard from "../../components/AchievementCard";
import TimeSavedSummary from "../../components/TimeSavedSummary";
import { GradientText } from "../../components/GradientText";

export default function Achievements() {
  return (
    <SafeAreaView className="flex-1 flex-column items-center justify-center bg-slate-950">
      <ScrollView className="">
        <View className="w-96 mt-14">
          <Text className="text-2xl text-white font-bold mb-2">
            Your achievements
          </Text>

          <TimeSavedSummary TimeSaved={270}> </TimeSavedSummary>
          <View classname="mt-2">
            <AchievementCard
              emoji="🥉"
              title="Math Novice"
              subtitle={"Solve your first problem"}
              checked={true}
            />
            <AchievementCard
              emoji="💀"
              title="Death Row"
              subtitle={"Solve 10000 problems"}
              checked={false}
            />
            <AchievementCard
              emoji="🔥"
              title="Consisting Learner"
              subtitle={"Solve problems for 7 consecutive days"}
              checked={true}
            />
            <AchievementCard
              emoji="🧙🏻‍♂️"
              title="Math Wizard"
              subtitle={"Solve 100 problems correctly"}
              checked={false}
            />
            <AchievementCard
              emoji="⚡️"
              title="Speed Demon"
              subtitle={"Solve your first problem"}
              checked={false}
            />
            <AchievementCard
              emoji="🏆"
              title="Topic Master"
              subtitle={"Master all problems in a specific topic"}
              checked={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
