import React, { useState } from "react";
import { Text, TextInput, View, Button, TouchableOpacity } from "react-native";
import ResultImc from "./ResultImc";
import tw from "twrnc";

// renderiza o form
function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  // UseState para alertar o usuário
  const [errorMessage, setErrorMessage] = useState(null)

  // calcula o imc
  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  // função que verifica se o imc está null
  function verificationImc() {
    if (imc == null) {
      setErrorMessage("Campo Obrigatório*")
    }
  }

  // valida se os textInputs não estão vazios
  function validationImc() {
    if (weight != null && height != null) {
      setErrorMessage(null);
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("O número do seu IMC é:");
      setTextButton("Calculator Novamente");
      return;
    }
    verificationImc()
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={tw`w-full h-full bottom-0 bg-white mt-6 rounded-t-2xl`}>
      <View style={tw`w-full h-auto p-10`}>
        <Text style={tw`text-black text-xl font-bold`}>Altura</Text>
        <Text style={tw`text-xs text-red-500 font-bold`}>{errorMessage}</Text>
        <TextInput
          style={tw`w-full mt-4 p-1 pl-2 pr-2 bg-slate-100 text-black rounded-md`}
          onChangeText={setHeight}
          value={height}
          placeholder="Informe sua altura... Ex. 1.70"
          KeyboardType="numeric"
        />
        <Text style={tw`text-black text-xl font-bold mt-2`}>Peso</Text>
        <Text style={tw`text-xs text-red-500 font-bold`}>{errorMessage}</Text>
        <TextInput
          style={tw`w-full mt-4 p-1 pl-2 pr-2 bg-slate-100 text-black rounded-md`}
          onChangeText={setWeight}
          value={weight}
          placeholder="Informe seu peso... Ex. 67.800"
          KeyboardType="numeric"
        />

        <TouchableOpacity
          style={tw`rounded-md items-center justify-center w-[90%] bg-[#05F258] pt-3 pb-3 ml-4.5 mt-8 mb-0`}
          onPress={()=> {
            validationImc()
          }}
        >
          <Text style={tw`text-xl text-white font-bold`}>Calcular</Text>
        </TouchableOpacity>    

      </View>
      {/* Informa o resultado a través de outro componente, por meio de props */}
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </View>
  );
}
export default Form;
