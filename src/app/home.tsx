import React, { useState } from "react";
import { View, Text, Image, Pressable, StatusBar, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SPORTS = ["Basketball", "Baseball", "Football", "Soccer"];
const TABS = [
  { key: "explore", label: "Explore", icon: "compass-outline" },
  { key: "feed", label: "Feed", icon: "people-outline" },
  { key: "ai", label: "Sporty AI", icon: "sparkles-outline" },
  { key: "ranks", label: "Ranks", icon: "trophy-outline" },
  { key: "rewards", label: "Rewards", icon: "gift-outline" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [activeSport, setActiveSport] = useState("Basketball");
  const [activeTab, setActiveTab] = useState("explore");

  return (
    <View className="flex-1 bg-[#EDEDE9]">
      <StatusBar barStyle="dark-content" backgroundColor="#EDEDE9" />
      <SafeAreaView className="flex-1" edges={["bottom"]}>
        <ScrollView
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 16 }}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between px-5 pt-2">
            <View className="flex-row items-center">
              <Pressable onPress={() => router.push("/profile")}>
                <Image
                  source={require("../../assets/images/avatar.png")}
                  style={{ width: 44, height: 44, borderRadius: 22 }}
                />
              </Pressable>
              <View className="ml-3">
                <Text className="text-black font-semibold text-[16px]">
                  Alex Morgan
                </Text>
                <Text className="text-[#9B9C9C] text-[13px]">Welcome</Text>
              </View>
            </View>

            <Pressable className="w-11 h-11 rounded-2xl bg-[#E7EAE9] items-center justify-center relative">
              <Ionicons name="notifications-outline" size={20} color="#333" />
              <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                <Text className="text-white text-[10px] font-bold">3</Text>
              </View>
            </Pressable>
          </View>

          {/* Hero headline */}
          <View className="px-5 mt-5">
            <View className="flex-row items-center flex-wrap">
              <Text
                className="text-black font-extrabold uppercase"
                style={{ fontSize: 30, lineHeight: 34 }}
              >
                Join the
              </Text>
              <Image
                source={require("../../assets/images/hero-player-cutout.png")}
                resizeMode="contain"
                style={{ width: 100, height: 56, marginLeft: 8, marginTop: -10 }}
              />
            </View>
            <Text
              className="text-black font-extrabold uppercase"
              style={{ fontSize: 30, lineHeight: 34 }}
            >
              Atlanta Sports
            </Text>
          </View>

          {/* Stat cards */}
          <View className="flex-row px-5 mt-5" style={{ gap: 12 }}>
            <LinearGradient
              colors={["#E8532E", "#B63A20"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1, borderRadius: 20, padding: 16 }}
            >
              <View className="flex-row items-start justify-between">
                <View className="w-9 h-9 rounded-full bg-white/20 items-center justify-center">
                  <MaterialCommunityIcons name="medal-outline" size={18} color="#fff" />
                </View>
                <View className="w-7 h-7 rounded-full bg-black/30 items-center justify-center">
                  <Feather name="arrow-up-right" size={14} color="#fff" />
                </View>
              </View>
              <Text className="text-white/90 text-[13px] mt-3">Your Sporty Score</Text>
              <Text className="text-white font-extrabold text-[22px] mt-1">6471800</Text>
              <Text className="text-white/70 text-[12px] mt-1">#23 in Atlanta</Text>
            </LinearGradient>

            <LinearGradient
              colors={["#E8A63E", "#C97F1F"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={{ flex: 1, borderRadius: 20, padding: 16 }}
            >
              <View className="flex-row items-start justify-between">
                <View className="w-9 h-9 rounded-full bg-white/20 items-center justify-center">
                  <Ionicons name="wifi-outline" size={18} color="#fff" />
                </View>
                <View className="w-7 h-7 rounded-full bg-black/30 items-center justify-center">
                  <Feather name="arrow-up-right" size={14} color="#fff" />
                </View>
              </View>
              <Text className="text-white/90 text-[13px] mt-3">Sporty Points</Text>
              <Text className="text-white font-extrabold text-[22px] mt-1">2,450</Text>
              <Text className="text-white/70 text-[12px] mt-1">Available to redeem</Text>
            </LinearGradient>
          </View>

          {/* Sport filter pills */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mt-5"
            contentContainerStyle={{ paddingHorizontal: 20, gap: 10 }}
          >
            {SPORTS.map((sport) => {
              const active = sport === activeSport;
              return (
                <Pressable
                  key={sport}
                  onPress={() => setActiveSport(sport)}
                  className="px-5 h-10 rounded-full items-center justify-center"
                  style={{ backgroundColor: active ? "#F4FFA8" : "#E7EAE9" }}
                >
                  <Text
                    className="text-[14px] font-medium"
                    style={{ color: active ? "#1A1A1A" : "#9B9C9C" }}
                  >
                    {sport}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          {/* Featured event card */}
          <View className="px-5 mt-6">
            <View className="rounded-3xl overflow-hidden bg-[#E7EAE9]">
              <View className="relative">
                <Image
                  source={require("../../assets/images/featured-event.png")}
                  resizeMode="cover"
                  style={{ width: "100%", height: 220 }}
                />
                <LinearGradient
                  colors={["transparent", "rgba(0,0,0,0.6)"]}
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "45%",
                  }}
                />

                <View className="absolute top-3 left-3 bg-black/50 rounded-full px-3 py-1">
                  <Text className="text-white text-[12px] font-medium">Featured</Text>
                </View>
                <View className="absolute top-3 right-3 bg-black/50 rounded-full px-3 py-1">
                  <Text className="text-white text-[12px] font-medium">Open Entry</Text>
                </View>

                <View className="absolute bottom-3 left-3 flex-row items-center">
                  <Ionicons name="time-outline" size={14} color="#fff" />
                  <Text className="text-white text-[12px] ml-1 mr-4">2 days</Text>
                  <Ionicons name="people-outline" size={14} color="#fff" />
                  <Text className="text-white text-[12px] ml-1">1.2K entered</Text>
                </View>
              </View>

              <View className="p-4">
                <Text className="text-black font-extrabold text-[18px]">
                  Hawks Courtside Experience
                </Text>
                <Text className="text-[#9B9C9C] text-[13px] mt-1">
                  In courtside seats to any Hawks home game
                </Text>

                <Pressable className="mt-4 h-12 rounded-2xl bg-black/[0.06] items-center justify-center">
                  <Text className="text-black font-semibold text-[14px]">
                    Enter Sweepstakes
                  </Text>
                </Pressable>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* Bottom tab bar */}
        <View className="flex-row px-4 py-3" style={{ gap: 8 }}>
          {TABS.map((tab) => {
            const active = tab.key === activeTab;
            return (
              <Pressable
                key={tab.key}
                onPress={() => setActiveTab(tab.key)}
                className="flex-1 items-center justify-center rounded-2xl py-2"
                style={{ backgroundColor: active ? "#F4FFA8" : "#E7EAE9" }}
              >
                <Ionicons
                  name={tab.icon as any}
                  size={18}
                  color={active ? "#1A1A1A" : "#9B9C9C"}
                />
                <Text
                  className="text-[11px] mt-1 font-medium"
                  style={{ color: active ? "#1A1A1A" : "#9B9C9C" }}
                >
                  {tab.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </SafeAreaView>
    </View>
  );
}
