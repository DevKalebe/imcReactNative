import React, { useState } from "react";
import { Text, TextInput, View, Button } from "react-native";
import { ResultImc } from "./ResultImc/index";

// renderiza o form
function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  // calcula o imc
  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  // valida se os textInputs não estão vazios
  function validationImc() {
    if (weight != null && height != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc("Seu imc é igual:");
      setTextButton("Calculator Novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Informe sua altura... Ex. 1.70"
          KeyboardType="numeric"
        />
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Informe seu peso... Ex. 67.800"
          KeyboardType="numeric"
        />
        <Button title={textButton} onPress={() => validationImc()} />
      </View>
      {/* Informa o resultado a través de outro componente, por meio de props */}
      {/* <ResultImc messageResultImc={messageImc} resultImc={imc}/> */}
    </View>
  );
}
export default Form;
