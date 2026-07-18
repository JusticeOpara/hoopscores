import React from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  StatusBar,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 bg-[#EDEDE9]">
      <StatusBar barStyle="dark-content" backgroundColor="#EDEDE9" />
      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-start relative overflow-hidden">
          <View className="absolute top-6 items-center w-full">
            <Text
              className="text-gray-500 font-extrabold text-center leading-[90px]"
              style={{ fontSize: 92, opacity: 0.9 }}
              numberOfLines={2}
            >
              HOOP{"\n"}SCORE
            </Text>
          </View>

          {/* <Image
            source={require("../../assets/images/hero-player.png")}
            resizeMode="contain"
            style={{
              width: width * 0.9,
              height: width * 1.05,
              marginTop: 40,
            }}
          /> */}
        </View>

        <View className="px-6 pb-4">
          <Text className="text-black font-extrabold text-[38px] leading-[42px]">
            Play The{"\n"}Game Live{"\n"}The Moment
          </Text>

          <Text className="text-neutral-500 text-[15px] leading-[21px] mt-4 pr-4">
            Basketball Is A Fast-Paced And Exciting Sport That Combines
            Skill, Teamwork, And Strategy.
          </Text>

          <Pressable
            onPress={() => router.push("/login")}
            className="bg-[#F5F293] rounded-full h-16 items-center justify-center mt-7 active:opacity-80"
          >
            <Text className="text-black font-semibold text-[16px]">
              Get Started
            </Text>
          </Pressable>

          <View className="items-center mt-5">
            <View className="w-32 h-1 rounded-full bg-black/80" />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
