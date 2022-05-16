import React, { useState } from "react";
import '../styles/Formulario.css'

function Formulario( {onChangeCity}){

    const [city, setCity] = useState('');
    
    const onChange = e =>{
        const value = e.target.value;

        if(value !== ''){
            setCity(value);
        }
    }

    const handleSubmit = e =>{
        e.preventDefault();
        onChangeCity(city);
    }


    return (

        <form className="form-input" onSubmit={handleSubmit}>
            <input className='input' type='text' onChange={onChange}/>
        </form>    
    );

}

export default Formulario;