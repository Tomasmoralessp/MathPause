import { Tabs } from "expo-router";
import {
  HomePageIcon,
  ProgressIcon,
  SettingsIcon,
  AchievementsIcon,
} from "../../components/Icons.jsx";
import TabBar from "../../components/TabBar.jsx";

import "../../global.css";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
      tabBar={(props) => <TabBar {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, styleType }) => (
            <HomePageIcon color={color} styleType={styleType} />
          ),
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarIcon: ({ color, styleType }) => (
            <ProgressIcon color={color} styleType={styleType} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Achievements",
          tabBarIcon: ({ color, styleType }) => (
            <AchievementsIcon color={color} styleType={styleType} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, styleType }) => (
            <SettingsIcon color={color} styleType={styleType} />
          ),
        }}
      />
    </Tabs>
  );
}
