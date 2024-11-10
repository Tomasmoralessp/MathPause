import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MathJaxSvg } from "react-native-mathjax-html-to-svg";
import Svg, { Circle } from "react-native-svg";

export default function Index() {
  const progress = 70; // 70% progress
  const size = 120;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="p-4">
        <Text className="text-3xl font-bold text-white mt-10">MathPause</Text>

        {/* Daily Goal with Circular Progress */}
        <View className="bg-gray-900 rounded-2xl p-6 mb-6 items-center mt-5">
          <Text className="text-2xl font-bold text-white mb-4">Daily Goal</Text>

          {/* Círculo de progreso */}
          <View className="relative">
            {/* Texto centrado dentro del círculo */}
            <View className="absolute inset-0 flex justify-center items-center">
              <Text className="text-3xl font-bold text-white">
                {progress}
                <Text className="text-xl text-gray-400">%</Text>
              </Text>
            </View>
          </View>

          <Text className="text-sm text-gray-400 mt-4 mb-4">
            5 out of 7 problems solved
          </Text>
          <TouchableOpacity className="bg-blue-500 rounded-full py-3 px-6 items-center">
            <Text className="text-white font-semibold">Solve Next Problem</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Stats */}
        <View className="flex-row justify-between mb-6">
          <View className="bg-gray-900 rounded-2xl p-4 items-center flex-1 mr-2">
            <Ionicons name="flash" size={24} color="#3b82f6" />
            <Text className="text-2xl font-bold text-white mt-2">7</Text>
            <Text className="text-xs text-gray-400">Day Streak</Text>
          </View>
          <View className="bg-gray-900 rounded-2xl p-4 items-center flex-1 ml-2">
            <Ionicons name="time" size={24} color="#3b82f6" />
            <Text className="text-2xl font-bold text-white mt-2">2:15</Text>
            <Text className="text-xs text-gray-400">Time Saved</Text>
          </View>
        </View>

        {/* Last solved problem */}
        <View className="bg-gray-900 rounded-2xl p-4 mb-6">
          <Text className="text-lg font-semibold text-white mb-3">
            Last Solved Problem
          </Text>
          <MathJaxSvg fontSize={16} color="#FFFFFF" fontCache={true}>
            {`
              <p>Solve for x: $$2x + 5 = 15$$</p>
            `}
          </MathJaxSvg>
          <Text className="text-sm text-gray-400 mt-2 mb-3">
            Solved 10 minutes ago
          </Text>
          <View className="flex-row flex-wrap">
            <View className="bg-blue-900 rounded-full px-3 py-1 mr-2 mb-2">
              <Text className="text-xs text-blue-300">Algebra</Text>
            </View>
            <View className="bg-blue-900 rounded-full px-3 py-1 mr-2 mb-2">
              <Text className="text-xs text-blue-300">Linear Equation</Text>
            </View>
            <View className="bg-blue-900 rounded-full px-3 py-1 mr-2 mb-2">
              <Text className="text-xs text-blue-300">Grade 8</Text>
            </View>
          </View>
        </View>

        {/* Today's challenge */}
        <TouchableOpacity className="bg-gray-900 rounded-2xl overflow-hidden mb-6">
          <View className="p-4">
            <View className="flex-row items-center mb-3">
              <Ionicons name="star" size={24} color="#fbbf24" />
              <Text className="text-lg font-semibold text-white ml-2">
                Today's Challenge
              </Text>
            </View>
            <Text className="text-gray-400 mb-4">
              Solve 5 algebra problems to earn a streak bonus!
            </Text>
            <TouchableOpacity className="bg-blue-500 rounded-full py-3 px-6 items-center">
              <Text className="text-white font-semibold">Start Challenge</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>

        {/* Additional Stats */}
        <View className="flex-row justify-between mb-10">
          <View className="bg-gray-900 rounded-2xl p-4 items-center flex-1 mr-2">
            <Ionicons name="school" size={24} color="#3b82f6" />
            <Text className="text-2xl font-bold text-white mt-2">248</Text>
            <Text className="text-xs text-gray-400">Problems Solved</Text>
          </View>
          <View className="bg-gray-900 rounded-2xl p-4 items-center flex-1 ml-2">
            <Ionicons name="trophy" size={24} color="#3b82f6" />
            <Text className="text-2xl font-bold text-white mt-2">12</Text>
            <Text className="text-xs text-gray-400">Achievements</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
