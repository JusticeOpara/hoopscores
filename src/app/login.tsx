import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View className="flex-1 bg-[#EDEDE9]">
      <StatusBar barStyle="dark-content" backgroundColor="#EDEDE9" />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        {/* Hero area */}
        <View className="relative" style={{ height: width * 0.85 }}>
          {/* <Image
            source={require("../../assets/images/hero-athlete.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          /> */}

      

          {/* Logo */}
          <SafeAreaView className="absolute top-0 left-0 right-0" edges={["top"]}>
            <View className="flex-row items-center px-5 pt-2">
              <View className="w-7 h-7 rounded-full bg-white/90 items-center justify-center mr-2">
                <MaterialCommunityIcons name="basketball" size={18} color="#111" />
              </View>
              <Text className="text-white font-extrabold text-lg">
                Hoopz
              </Text>
            </View>
          </SafeAreaView>

          {/* Headline + subtitle over the photo */}
          <View className="absolute bottom-0 left-0 right-0 items-center pb-6 px-6">
            <Text
              className="text-gray-500 font-extrabold tracking-wide"
              style={{ fontSize: 48, letterSpacing: 2 }}
            >
              LOGIN
            </Text>
            <Text className="text-gray-500 text-[14px] mt-1">
              Welcome back! login your account
            </Text>
          </View>
        </View>

        {/* Form */}
        <View className="px-6 pt-6 pb-8">
          <Text className="text-black/70 font-medium text-[13px] mb-2">
            Email
          </Text>
          <View className="flex-row items-center bg-black/[0.06] rounded-2xl px-4 h-14 mb-5">
            <Ionicons name="mail-outline" size={18} color="#8A8A8A" />
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#9A9A9A"
              keyboardType="email-address"
              autoCapitalize="none"
              className="flex-1 ml-3 text-black text-[15px]"
            />
          </View>

          <Text className="text-black/70 font-medium text-[13px] mb-2">
            Password
          </Text>
          <View className="flex-row items-center bg-black/[0.06] rounded-2xl px-4 h-14 mb-4">
            <Ionicons name="lock-closed-outline" size={18} color="#8A8A8A" />
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Enter your Password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry={!showPassword}
              className="flex-1 ml-3 text-black text-[15px]"
            />
            <Pressable onPress={() => setShowPassword((v) => !v)} hitSlop={8}>
              <Ionicons
                name={showPassword ? "eye-outline" : "eye-off-outline"}
                size={18}
                color="#8A8A8A"
              />
            </Pressable>
          </View>

          {/* Remember me / Forgot password */}
          <View className="flex-row items-center justify-between mb-6">
            <Pressable
              onPress={() => setRememberMe((v) => !v)}
              className="flex-row items-center"
            >
              <View
                className={`w-5 h-5 rounded-md border mr-2 items-center justify-center ${
                  rememberMe
                    ? "bg-[#B7D845] border-[#B7D845]"
                    : "border-black/30"
                }`}
              >
                {rememberMe && (
                  <Ionicons name="checkmark" size={13} color="#111" />
                )}
              </View>
              <Text className="text-black/70 text-[13px]">Remember me</Text>
            </Pressable>

            <Pressable>
              <Text className="text-black font-medium text-[13px]">
                Forgot Password?
              </Text>
            </Pressable>
          </View>

          {/* Login button */}
          <Pressable onPress={() => router.push("/home")} className="active:opacity-90">
            <LinearGradient
              colors={["#F5F293", "#B7D845"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                height: 56,
                borderRadius: 28,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text className="text-black font-semibold text-[16px]">
                Login
              </Text>
            </LinearGradient>
          </Pressable>

          {/* Divider */}
          <View className="flex-row items-center justify-center mt-6 mb-6">
            <View className="flex-1 h-[1px] bg-black/15" />
            <Text className="text-black/50 text-[13px] mx-3">Or</Text>
            <View className="flex-1 h-[1px] bg-black/15" />
          </View>

          {/* Social row */}
          <View className="flex-row items-center justify-center gap-4">
            <Pressable className="w-12 h-12 rounded-full bg-black/[0.06] items-center justify-center">
              <Ionicons name="logo-facebook" size={20} color="#1877F2" />
            </Pressable>
            <Pressable className="w-12 h-12 rounded-full bg-black/[0.06] items-center justify-center">
              <Ionicons name="logo-google" size={20} color="#EA4335" />
            </Pressable>
            <Pressable className="w-12 h-12 rounded-full bg-black/[0.06] items-center justify-center">
              <Ionicons name="logo-apple" size={20} color="#111" />
            </Pressable>
          </View>

          {/* Footer */}
          <View className="flex-row items-center justify-center mt-7">
            <Text className="text-black/60 text-[13px]">
              Don't have an account?{" "}
            </Text>
            <Pressable>
              <Text className="text-black font-semibold text-[13px]">
                Create an account
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
