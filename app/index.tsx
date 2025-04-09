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


export default function Index() {
	const [floorInput,setFloorInput] = useState('');
	const [referenceInput,setReferenceInput] = useState('');
	const [imagemSorteada , setImagemSorteada] = useState(0);
	const [sorteados ,setSorteados] = useState([0]);

	function sortearImagem(){
		var numero = Math.floor(Math.random() * 6)
		sorteados.forEach(index => {
			
			
			
			
			
		});
		setImagemSorteada(numero)
		console.log(imagemSorteada)
		return
	}


	
	const [imagens] = useState([
		{
			andar: "segundo",
			referencia: "elevador",
			link: require('./src/imagens/2elevador.jpg'),
		},
		{
			andar:"terreo",
			referencia:"grafite",
			link: require('./src/imagens/0grafite.jpg')
		},
		{
			andar:"segundo",
			referencia:"mercado",
			link: require('./src/imagens/2mercado.jpg')
		},
		{
			andar:"subsolo",
			referencia:"gerador",
			link: require('./src/imagens/subsoloGerador.jpg')
		},
		{
			andar:"subsolo",
			referencia:"escada",
			link:require('./src/imagens/subsoloEscada.jpg')
		},
		{
			andar: "subsolo",
			referencia:"garagem",
			link: require('./src/imagens/subsologaragem.jpg')
		}
	]);

	

	function validarTentativa(){
		if(floorInput.toLocaleLowerCase() == imagens[imagemSorteada].andar && referenceInput.toLocaleLowerCase() == imagens[imagemSorteada].referencia){
			alert("vc acertou")
			sortearImagem()
			return
		}
		alert("voce errou")


	}


	// console.log(imagens[0].link);

	return (
		<View className="flex-1 gap-10 items-center bg-[#383845]">
			{/* <Image source={lista.link} className="rounded-2xl size-10" /> */}
			<Image source={imagens[imagemSorteada].link} className="rounded-3xl mt-10 size-4" style={{ width: 300, height: 300}}/>


			<View className=" flex gap-2 p-10 ">
				<TextInput className="p-2 bg-slate-200 rounded-lg" onChangeText={setFloorInput} placeholder="Andar:"></TextInput>
				<TextInput className="p-2 bg-slate-200 rounded-lg" onChangeText={setReferenceInput} placeholder="Referencia:"></TextInput>

				<TouchableOpacity className=" p-2 bg-slate-200 rounded-lg" onPress={validarTentativa}>
					<Text  className="text-center">Enviar</Text>
				</TouchableOpacity>

				<TouchableOpacity className=" p-2 bg-slate-200 rounded-lg" onPress={sortearImagem}>
					<Text  className="text-center">Sortear novamente</Text>
				</TouchableOpacity>
			</View>

		</View>
	);
}
