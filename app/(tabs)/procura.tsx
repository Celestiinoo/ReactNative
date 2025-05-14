import { Link } from "expo-router";
import { useEffect, useState } from "react";
import {
	Text,
	View,
	Image,
	TouchableOpacity,
	Button,
	ScrollView,
	TextInput,
	ActivityIndicator,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

	const [text ,setText] = useState('')
	const [characters,setCharacters] = useState('')

	function acharPersonagen(){
		if(text.includes(characters)){
			return(
			<View>
				<Image />
				<View>
					<Text>Nome:</Text>
					<Text>Genero:</Text>
				</View>
			</View>)
		}
	}

export default function Procura({characters}) {
	return (
		<View className="flex-1 gap-10 items-center mt-10">
			<TextInput
				className="border-black p-2 border-2 rounded-xl"
				placeholder="Digite:"
				value={text}
				onChangeText={setText}
			/>

<ScrollView className="p-4 " >
                {characters.map((item:any) => (
                    <View key={item.id}>
                            <View className="flex flex-row mb-8 rounded-lg bg-slate-100 border-black border-2 gap-4 p-1">
                                <Image source={{uri: item.image}} className="size-20 rounded-sm"></Image>
                                <View className="flex gap-2">
                                    <Text>{item.name}</Text>
                                    <Text>{item.gender}</Text>
                                    <Text>{item.species}</Text>
                                </View>
                            </View>
                    </View>
                ))}
            </ScrollView>
			



		</View>
	);
}
