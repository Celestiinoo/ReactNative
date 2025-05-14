import { Stack, Tabs } from "expo-router";
import { useEffect, useState } from "react";
import '../globals.css';
import Procura from './procura'
export default function RootLayout(){
    const [characters , setCharacters] = useState([])

    useEffect( () =>{
        const fetchCharacters = async () => {
            try{
                const response = await fetch('https://rickandmortyapi.com/api/character')
                const data = await response.json();
                
                setCharacters(data.results)

                
            } catch (error){

            }
        };

        fetchCharacters();
    },[]);
    
    


    return(
        <Tabs screenOptions={{
            headerShown: false,
            tabBarStyle:{
                height: 60
            }

        }}>
            <Tabs.Screen
                name="index"
                options={{
                    title:"Home",
                }}
            />
            <Tabs.Screen
                name="procura"
                options={{
                    title:"Procurar",
                }}
                children= {() => <Procura character={ characters }  />}
            />

        </Tabs>
    )
}