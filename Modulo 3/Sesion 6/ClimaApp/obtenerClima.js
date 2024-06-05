const axios = require('axios')

const obtenerClima = async ( latitud, longitud ) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${process.env.OPENWEATHERMAP_TOKEN}&units=metric`;
    
    try{
        const respuesta = await axios.get(url)
        const {temp, feels_like, temp_min, temp_max} = respuesta.data.main    
        const weather = respuesta.data.weather[0].description
        return {temp, feels_like, temp_min, temp_max, weather}
    }catch(error){
        throw new Error('No se puede conectar a la API del clima')
    }
}

module.exports = obtenerClima