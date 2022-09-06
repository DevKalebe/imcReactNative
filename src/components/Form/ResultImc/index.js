import React from "react";
import { View, Text } from "react-native";
import tw from "twrnc";

function ResultImc(props) {
  return(
    <View style={tw`flex-1 mt-0 pt-3 rounded items-center w-full`}>
      <Text style={tw`text-base font-bold text-green-500`}>{props.messageResultImc}</Text>
      <Text style={tw`text-6xl mt-1 font-bold text-green-500 `}>{props.resultImc}</Text>
    </View>
  );
}

export default ResultImc