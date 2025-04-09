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
    
  return (
    <View className="flex-1 items-center justify-center bg-[#e2e1e1]">
      <View className="">
        <Text className="flex flex-col text-3xl font-bold">Crie sua conta</Text>
      </View>

      <View className="w-80">
        <TextInput className=" bg-slate-100 drop-shadow-md p-3 rounded-3xl opacity-40 mt-6" placeholder="Usuario"></TextInput>
        <TextInput className=" bg-slate-100 drop-shadow-md p-3 rounded-3xl opacity-40 mt-6" placeholder="Seu nome"></TextInput>
        <TextInput className="bg-slate-100 drop-shadow-md p-3 rounded-3xl opacity-40 mt-6" placeholder="Senha"></TextInput>

        <TouchableOpacity className="bg-gradient-to-r from-indigo-500 to-pink-500 flex mt-8 items-center drop-shadow-md  rounded-full p-3"> <Text className="text-white text-lg">Entrar</Text> </TouchableOpacity>
        <View className="flex mt-4 justify-center flex-row">
          <Text className="text-center opacity-30">Já tem uma conta?  </Text>
          <Link className="font-bold" href={".."}>Entrar</Link>
        </View>
      </View>


    </View>
  );
}
