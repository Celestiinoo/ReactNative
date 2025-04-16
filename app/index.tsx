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


export default function Index() {
	const [floorInput,setFloorInput] = useState('');
	const [referenceInput,setReferenceInput] = useState('');
	const [imagemSorteada , setImagemSorteada] = useState(0);
	const [sorteados ,setSorteados] = useState([0]);
	const [tentativas,setTentativas] = useState(0);
	const [acertos,setAcertos] = useState(0);

	
	
	
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
		},
		{
			andar: "terceiro",
			referencia:"escada",
			link: require('./src/imagens/3escada.jpg')
		}
	]);
	
	function sortearImagem(){
		var numero
		do{
			numero = Math.floor(Math.random() * imagens.length)
			if(sorteados.length == imagens.length){
				window.location.href = `/final?tentativas=${tentativas}&&acertos=${acertos}`
				return
			}

		}while (sorteados.includes(numero))
		
			
		sorteados.push(numero)
		setImagemSorteada(numero)
		console.log(imagemSorteada)
		return
	}
	// || !referenceInput.trim()
	// && referenceInput.toLocaleLowerCase() == imagens[imagemSorteada].referencia
	function validarTentativa(){
		if(!floorInput ){
			alert("Preencha os campos")
			return
		}

		if(floorInput.toLocaleLowerCase() == imagens[imagemSorteada].andar){
			alert("vc acertou")
			sortearImagem()
			setAcertos(acertos +1)
			setFloorInput('')
			setReferenceInput('')
			return
		}
		alert("voce errou")
		sortearImagem()
		setTentativas(tentativas +1)
		setFloorInput('')
		setReferenceInput('')

	}


	// console.log(imagens[0].link);

	return (
		<View className="flex-1 gap-10 items-center bg-[#383845]">
			{/* <Image source={lista.link} className="rounded-2xl size-10" /> */}
			<Image source={imagens[imagemSorteada].link} className="rounded-3xl mt-10 size-4" style={{ width: 300, height: 300}}/>
			<View className=" flex gap-2 p-10 w-screen ">
				<select className="p-2 rounded-lg" value={floorInput}
					onChange={(e) => setFloorInput(e.target.value) }>
					<option className="bg-blue-500" value=''>SELECIONE O ANDAR</option>
					<option className="bg-blue-500" value='terceiro'>TERCEIRO</option>
					<option className="bg-blue-500" value='segundo'>SEGUNDO</option>
					<option className="bg-blue-500" value='primeiro'>PRIMEIRO</option>
					<option className="bg-blue-500" value='terreo'>TERREO</option>
					<option className="bg-blue-500" value='subsolo'>SUBSOLO</option>
				</select>
				{/* <TextInput className="p-2 bg-slate-200 rounded-lg" onChangeText={setFloorInput} placeholder="Andar:"></TextInput> */}
				{/* <TextInput className="p-2 bg-slate-200 rounded-lg" onChangeText={setReferenceInput} placeholder="Referencia:"></TextInput> */}
				<TouchableOpacity className=" p-2 bg-slate-200 rounded-lg" onPress={validarTentativa}>
					<Text  className="text-center">Enviar</Text>
				</TouchableOpacity>

				<TouchableOpacity className=" p-2 bg-violet-400 rounded-lg" onPress={sortearImagem}>
					<Text  className="text-center">Sortear novamente</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
