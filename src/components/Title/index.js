import { React } from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

export default function Title() {
  return (
    <View>
      <Text style={tw`items-center text-center text-green-500 text-3xl p-1 pb-5 font-extrabold`}>
        Calcule o seu IMC
      </Text>
    </View>
  );
}
