import { useEffect, useState } from "react";
import {Link} from "expo-router";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  TextInput,
  ActivityIndicator
} from "react-native";

export default function Index() {
  const [tentativas,setTentativas] = useState(0)
  const [acertos,setAcertos] = useState(0)
  useEffect(() =>{
    const params = new URLSearchParams(window.location.search)
    const tentativasParam = parseInt(params.get('tentativas')) || 0
    const acertosParam = parseInt(params.get('acertos')) || 0
    setTentativas(tentativasParam)
    setAcertos(acertosParam)


  },[])
    
  return (
    <View className="flex-1 items-center justify-center bg-[#e2e1e1]">
      <View className="">
      <Text>FIM DE JOGO</Text>
      <Text>VOCÊ TENTOU:{tentativas} VEZES</Text>
      <Text>VOCÊ ACERTOU:{acertos} VEZES</Text>
      </View>
    </View>
  );
}
