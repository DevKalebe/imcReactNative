import React from "react";
import { View } from 'react-native';
import Title from './src/components/Title/';
import Form from './src/components/Form';
import tw from 'twrnc';

export default function App() {
  return (
    <View style={tw`w-full bg-black pt-15 pb-10`}>
      <Title/>
      <Form/>
    </View>
  );
}