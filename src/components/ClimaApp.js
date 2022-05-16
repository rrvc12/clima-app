import React, { useEffect, useState } from "react";
import Formulario from './Formulario'
import InfoClima from './InfoClima'
import Loading from './Loading'
import '../styles/ClimaApp.css'

function ClimaApp(){

    const [weather, setWeather] = useState(null);

    useEffect(()=>{
        loadInfo()
    }, []);

    useEffect(()=>{
        document.title = `Clima | ${weather?.location.name ?? ''}`   
    }, [weather])


    const loadInfo = async (city ='london') =>{
        try {
            const request = await fetch(
            `${process.env.REACT_APP_URL}?key=${process.env.REACT_APP_KEY}&q=${city}`
            );
            
            const json = await request.json();

            setTimeout(() => {
                setWeather(json);
            }, 1000);
            
            
            console.log(json)
            
        } catch (error) {
            
        }
    } 

    const handleChangeCity = (city) =>{
        setWeather(null);
        loadInfo(city);
    }

    return(
        <div className='container-app'>
            <Formulario onChangeCity={handleChangeCity}/>
            {weather ? <InfoClima weather={weather}/>: <Loading/>}
            
        </div>
        

    );

    
}

export default ClimaApp;