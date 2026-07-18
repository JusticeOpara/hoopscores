import React from "react";
import { View, Text, Image, Pressable, StatusBar, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function ProfileScreen({
  firstName = "Matt",
  lastName = "Kiatipis",
  winRate = "84%",
  threePointAccuracy = "48%",
}: {
  firstName?: string;
  lastName?: string;
  winRate?: string;
  threePointAccuracy?: string;
}) {
  const router = useRouter();

  return (
    <LinearGradient
      colors={["#F4FFA8", "#E7EAE9"]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={{ flex: 1 }}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <SafeAreaView className="flex-1" edges={["bottom"]}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-5 pt-2">
          <Pressable
            onPress={() => router.back()}
            className="w-11 h-11 rounded-2xl bg-white/60 items-center justify-center"
          >
            <Ionicons name="chevron-back" size={20} color="#111" />
          </Pressable>

          <Text className="text-black font-semibold text-[17px]">Profile</Text>

          <Pressable
            className="w-11 h-11 rounded-2xl bg-white/60 items-center justify-center"
          >
            <Feather name="more-vertical" size={18} color="#111" />
          </Pressable>
        </View>

        {/* Welcome + name */}
        <View className="px-5 mt-6 flex-row items-start justify-between">
          <View>
            <Text className="text-black/70 text-[14px]">Welcome</Text>
            <Text
              className="text-black font-extrabold"
              style={{ fontSize: 30, lineHeight: 34 }}
            >
              {firstName}
            </Text>
            <Text
              className="text-black font-extrabold"
              style={{ fontSize: 30, lineHeight: 34 }}
            >
              {lastName}
            </Text>
          </View>

          <Pressable
            className="w-11 h-11 rounded-2xl bg-white/60 items-center justify-center mt-1"
          >
            <Ionicons name="add" size={20} color="#111" />
          </Pressable>
        </View>

        {/* Player photo with watermark */}
        <View className="flex-1 items-center justify-start relative overflow-hidden mt-2">
          <Text
            className="absolute text-black/10 font-extrabold uppercase"
            style={{ fontSize: 46, top: "35%", letterSpacing: 1 }}
          >
            Basketball
          </Text>

          <Image
            source={require("../../assets/images/profile-player.png")}
            resizeMode="contain"
            style={{ width: width * 0.92, height: width * 1.02, marginTop: 8 }}
          />
        </View>

        {/* Stat cards */}
        <View className="flex-row px-5 pb-6" style={{ gap: 12 }}>
          <View className="flex-1 bg-white/55 rounded-3xl p-4">
            <Text className="text-black/60 text-[13px]">Win</Text>
            <Text className="text-black/60 text-[13px]">Rate</Text>
            <Text className="text-black font-extrabold text-[34px] mt-3">
              {winRate}
            </Text>
            <View className="flex-row items-center mt-4">
              <View className="w-7 h-7 rounded-full bg-white/70 items-center justify-center mr-2">
                <Ionicons name="sparkles-outline" size={14} color="#333" />
              </View>
              <Text className="text-black/70 text-[12px] flex-1">
                The Main Flex Of Any Player.
              </Text>
            </View>
          </View>

          <View className="flex-1 bg-white/55 rounded-3xl p-4">
            <Text className="text-black/60 text-[13px]">3-Point</Text>
            <Text className="text-black/60 text-[13px]">Accuracy</Text>
            <Text className="text-black font-extrabold text-[34px] mt-3">
              {threePointAccuracy}
            </Text>
            <View className="flex-row items-center mt-4">
              <View className="w-7 h-7 rounded-full bg-white/70 items-center justify-center mr-2">
                <Ionicons name="sparkles-outline" size={14} color="#333" />
              </View>
              <Text className="text-black/70 text-[12px] flex-1">
                Dangerous On The Arc
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
